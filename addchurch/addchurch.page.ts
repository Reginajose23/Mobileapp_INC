import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addchurch',
  templateUrl: './addchurch.page.html',
  styleUrls: ['./addchurch.page.scss'],
})
export class AddchurchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
openclick()
{
  window.open("https://www.indianchurches.net/churches_add_page1.php",'_system','location=yes');
}

}
