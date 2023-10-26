import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
  
  AccesoClientes(){
    this.router.navigate(['/accesocli'])
  }

  AccesoAdmins(){
    this.router.navigate(['/accesoadm'])
  }

  AccesoRegistro(){
    this.router.navigate(['/registrar'])
  }

}