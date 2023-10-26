import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuadm',
  templateUrl: './menuadm.page.html',
  styleUrls: ['./menuadm.page.scss'],
})
export class MenuadmPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  LogOut(){
    this.router.navigate(['/home']);
  }

}