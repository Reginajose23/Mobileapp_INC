import { Component, OnInit } from '@angular/core'


@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {
logo="http://indianchurches.org/church_images/qrcode.jpg";
img_link="https://indianchurches.org/church_images/qrcode.jpg";
  constructor() { }

  ngOnInit() {
  }

}
