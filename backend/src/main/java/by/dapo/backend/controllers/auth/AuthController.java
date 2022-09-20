package by.dapo.backend.controllers.auth;

import by.dapo.backend.common.dto.AuthTokensDto;
import by.dapo.backend.config.constants.Routes;
import by.dapo.backend.config.constants.SubRoutes;
import by.dapo.backend.controllers.auth.dto.SignInDto;
import by.dapo.backend.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping(Routes.AUTH)
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping(value = SubRoutes.SIGN_IN)
    public AuthTokensDto signIn(@RequestBody SignInDto signInDto) {
        return this.authService.signIn(signInDto);
    }
}
