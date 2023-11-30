import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rev-viaje',
  templateUrl: './rev-viaje.page.html',
  styleUrls: ['./rev-viaje.page.scss'],
})
export class RevViajePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Volver(){
    this.router.navigate(['/menucli']);
  }

}
