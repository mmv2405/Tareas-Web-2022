import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from '../services/role.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

constructor(private router: Router, private roleService: RoleService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const requiredRole = route.data['roles'];
      const userRole = this.roleService.getRole();
      if(requiredRole == userRole){
        return true;
      }else{
        this.router.navigate(['/forbidden'])
        return false
      }

    return true;
  }
  
}
