import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-accesoadm',
  templateUrl: './accesoadm.page.html',
  styleUrls: ['./accesoadm.page.scss'],
})
export class AccesoadmPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authSvc: AuthService, private  router: Router) {}

  ngOnInit() {
  }

  async Logear(){
    if (this.email.trim() !== '' && this.password.trim() !== ''){
      const user: User = {
        email: this.email,
        password: this.password
      };
  
      const result = await this.authSvc.Login(user);
      if(user){
        console.log('Acceso existoso');
        this.router.navigate(['/menuadm']);
      }
    }
  }

}