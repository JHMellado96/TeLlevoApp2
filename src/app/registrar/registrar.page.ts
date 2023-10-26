import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  tipo: string = '';

  constructor(private authSvc: AuthService, private  router: Router) {}

  ngOnInit() {
  }

  async Registrar(){
    if (this.nombre.trim() !== '' &&this.apellido.trim() !== '' && this.email.trim() !== '' && this.password.trim() !== '' && this.tipo.trim() !== ''){
      const user: User = {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        password: this.password,
        tipo: this.tipo
      };
  
      const result = await this.authSvc.Registro(user)
      if(user){
        console.log('Registrado exitoso');
        if(this.tipo == 'cliente'){
          this.router.navigate(['/accesocli']);
        }
        else if(this.tipo == 'admin'){
          this.router.navigate(['/accesoadm']);
        }
      }
    }
  }
}