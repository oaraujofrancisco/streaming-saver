import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UsuarioService} from "../../services/usuario.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService) {
  }

  canActivate(
    route?: ActivatedRouteSnapshot,
    state?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!localStorage.getItem('usuarioId')) {
      this.router.navigate(['/login']);
      return !localStorage.getItem('usuarioId');
    }

    // @ts-ignore
    this.usuarioService.getUserById(+localStorage.getItem('usuarioId')).subscribe(
      () => {
      !!localStorage.getItem('usuarioId');
    },
      () => {
      localStorage.removeItem('usuarioId');
      this.router.navigate(['/login']);
      !localStorage.getItem('usuarioId');
    })


    return !!localStorage.getItem('usuarioId');
  }
}
