import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import  {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser";
import { ApiService } from '../api/api.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ToastService } from '../api/toast.service';
import {Router} from '@angular/router';

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
  id:string;
}

@Component({
  selector: 'app-show-verse',
  templateUrl: './show-verse.page.html',
  styleUrls: ['./show-verse.page.scss'],
})
export class ShowVersePage implements OnInit {
  vidurl:SafeResourceUrl | undefined;
  url: any;
  videos2:Feedback[] | undefined;
  g_url:string | undefined;
  q_url:string | undefined;
  url1:SafeResourceUrl | undefined;
  url2:SafeResourceUrl | undefined;
  
  //url1="http://kyfdvaragold.strangled.net:8082/kyfdvaragold/images/word5.jpg";

  
  constructor(private social:SocialSharing,private router:Router,private toastser:ToastService,private service:ApiService,private http:HttpClient,private domSatizer:DomSanitizer) { }

  ngOnInit() {
    var url = 'https://indianchurches.org/get_game.php';
    var url2 = 'https://indianchurches.org/get_dailyverse.php';

    this.http.get(url,{responseType:'text'})
    .subscribe(res=>{
      console.log(res);
      this.url=res;
      
    });

    this.http.get<[Feedback]>(url2)
  .subscribe((res: Feedback[] | undefined)=>{
    console.log(res);
    this.videos2=res;
    
  });
          
    this.vidurl=this.domSatizer.bypassSecurityTrustResourceUrl(this.url);
  }

  share(index: any)
  {
    console.log(index);
  //this.social.share(index.image, "null", "null", "null");
  this.social.share("hi","null",index,"null");
  }
 
  public getvalue(id:any)
  {
    console.log("click me name",id);
  let headers=new HttpHeaders();
  headers.append("Content-Type","application/json");
  var url = 'http://indianchurches.org/delete_verse.php';
  
  let data;
let body={
  'id':id,
 
};
  this.http.post(url,JSON.stringify(body),{responseType:'text'})
  .subscribe(res=>{
    console.log(res);
    if(res.includes("1"))
    {
      this.router.navigate(['/home']);
      this.toastser.showToast("deleted");
    }
  });
}
}
