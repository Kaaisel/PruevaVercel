import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.services';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.verificaAutenticacion().pipe(
    map(isAuth => {
      if (isAuth) return true;
      router.navigate(['./auth/home']);
      return false;
    })
  );
};
