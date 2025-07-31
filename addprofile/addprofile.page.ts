import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.page.html',
  styleUrls: ['./addprofile.page.scss'],
})
export class AddprofilePage implements OnInit {
  name='';
  mob='';
  address='';
  email='';
  constructor() { }

  ngOnInit() {
  }

}
