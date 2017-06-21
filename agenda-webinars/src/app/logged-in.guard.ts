import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

export class LoggedInGuard implements CanActivate {

  // constructor(private userService: UserService) {
  //
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {


    // if (userService.getUser().isAdmin()) {
    //   return true;
    // }

    return true;
  }

}
