package by.dapo.backend.services;

import by.dapo.backend.common.dto.AuthTokensDto;
import by.dapo.backend.controllers.auth.dto.SignInDto;
import by.dapo.backend.models.entities.User;
import by.dapo.backend.models.repositories.UsersRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.Date;

@Service
public class AuthService {
    @Value("${jwt.config.secret}")
    private String JWT_SECRET;

    @Value("${jwt.config.access-ttl}")
    private int ACCESS_TOKEN_TTL;

    @Autowired
    private UsersRepository usersRepository;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    private String generateJwtToken(User payload) {
        Date issued = new Date(System.currentTimeMillis());
        Date expired = new Date(System.currentTimeMillis() + ACCESS_TOKEN_TTL);

        String jwtBody = payload.getId().toString();

        return Jwts.builder()
                .setSubject(jwtBody)
                .setIssuedAt(issued)
                .setExpiration(expired)
                .signWith(SignatureAlgorithm.HS512, JWT_SECRET)
                .compact();
    }

    @Transactional
    public Iterable<User> getAllUsers() {
        return this.usersRepository.findAll();
    }

    public AuthTokensDto signIn(SignInDto payload) {
        String email = payload.getEmail();
        String password = payload.getPassword();

        User user = this.usersRepository.getUserByEmail(email);

        if (user == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User with provided email was not found");
        }

        boolean isAuthenticated = encoder.matches(password, user.getPassword());

        if (!isAuthenticated) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid credentials");
        }

        String accessToken = this.generateJwtToken(user);

        AuthTokensDto tokens = new AuthTokensDto(accessToken);

        return tokens;
    }
}
