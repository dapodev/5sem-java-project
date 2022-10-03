package by.dapo.backend.controllers.auth;

import by.dapo.backend.common.dto.AuthTokensDto;
import by.dapo.backend.config.constants.AuthConfig;
import by.dapo.backend.config.constants.Cookies;
import by.dapo.backend.config.constants.Routes;
import by.dapo.backend.config.constants.SubRoutes;
import by.dapo.backend.controllers.auth.dto.SignInDto;
import by.dapo.backend.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController()
@RequestMapping(Routes.AUTH)
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping(value = SubRoutes.SIGN_IN)
    public void signIn(@RequestBody SignInDto signInDto, HttpServletResponse response) {
        AuthTokensDto tokens = this.authService.signIn(signInDto);

        Cookie accessCookie = new Cookie(Cookies.ACCESS_TOKEN_COOKIE, tokens.getAccessToken());
        accessCookie.isHttpOnly();
        accessCookie.setMaxAge(AuthConfig.ACCESS_TOKEN_TTL);

        response.addCookie(accessCookie);
    }
}
