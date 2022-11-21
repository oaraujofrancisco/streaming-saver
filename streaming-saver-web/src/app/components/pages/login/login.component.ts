import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import {Usuario} from "../../../interfaces/usuario";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
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
        localStorage.setItem('usuarioEmail', valor.email);

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

          }
        )
      }
    }
}
