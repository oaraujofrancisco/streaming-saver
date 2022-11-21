import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {Usuario} from "../../../interfaces/usuario";
import {UsuarioService} from "../../../services/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UsuarioService,
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  validarLogin() {
    if(this.loginForm.valid){

      const usuarioLogin: Usuario = {
        nome: "",
        senha: this.loginForm.value.password,
        email: this.loginForm.value.email,
      }

      this.userService.getUser(usuarioLogin).subscribe(valor => {
        localStorage.setItem('usuarioId', JSON.stringify(valor.id));

        this.router.navigate(['/']);
        }
      )
    }
  }

  createLogin () {
      if(this.loginForm.valid) {
        const usuarioLogin: Usuario = {
          nome: "",
          senha: this.loginForm.value.password,
          email: this.loginForm.value.email,
        }

        this.userService.createUser(usuarioLogin).subscribe(valor => {
          localStorage.setItem('usuarioId', JSON.stringify(valor.id));
          this.router.navigate(['/']);
          }
        )
      }
    }
}
