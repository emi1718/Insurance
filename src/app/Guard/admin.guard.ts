import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const Token = localStorage.getItem('token');
  const Role = localStorage.getItem('roles');



  if (Token != null) {
    if (Role === "admin") {
      return true
    }

  }
  return false




};
