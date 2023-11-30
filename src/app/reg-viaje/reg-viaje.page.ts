import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-viaje',
  templateUrl: './reg-viaje.page.html',
  styleUrls: ['./reg-viaje.page.scss'],
})
export class RegViajePage implements OnInit {

  constructor(private router: Router) { }

  Registrar(){
    this.router.navigate(['/menuadm']);
  }

  Cancelar(){
    this.router.navigate(['/menuadm']);
  }

  ngOnInit() {
  }

}
