import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Feedback{
  name:string;
  mobile:string;
  address:string;
  email:string;
  prayer:string;
  video_link:string;
  video_name:string;
  view_count:string;
  image:string;
}

@Component({
  selector: 'app-show-prayer',
  templateUrl: './show-prayer.page.html',
  styleUrls: ['./show-prayer.page.scss'],
})




export class ShowPrayerPage implements OnInit {
  videos:Feedback[] | undefined;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    var url = 'https://indianchurches.org/get_game.php?id=2';

  this.http.get<[Feedback]>(url)
  .subscribe((res: Feedback[] | undefined)=>{
    console.log(res);
    this.videos=res;
    
  });
}
}
