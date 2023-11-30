import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menucli',
  templateUrl: './menucli.page.html',
  styleUrls: ['./menucli.page.scss'],
})
export class MenucliPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Buscar(){
    this.router.navigate(['/rev-viaje']);
  }

  LogOut(){
    this.router.navigate(['/home']);
  }

}