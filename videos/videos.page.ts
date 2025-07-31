import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
url="https://www.youtube.com/channel/UCXCYWO3qOcHx2ZNA9Hrt2uA?rs=embed=true";

  constructor() { }

  ngOnInit() {
  }

}
