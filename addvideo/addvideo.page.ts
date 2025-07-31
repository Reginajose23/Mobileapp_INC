import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { ApiService} from '../api/api.service';
import { IonSlides } from '@ionic/angular';
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
  id:string;
}

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.page.html',
  styleUrls: ['./addvideo.page.scss'],
})
export class AddvideoPage implements OnInit {
  videos:Feedback[] | undefined;
  feed:any={};
  video_link:string | undefined;
  video_name:string | undefined;
  view_count:string | undefined;


  constructor(private service:ApiService,private router:Router,private toastser:ToastService,private http:HttpClient,private sanitizer:DomSanitizer,private social:SocialSharing) {}
  slidesOptions={
    slidesPerView:1
      
  }
  loadOptions={
    slidesPerView:1
  }
  option={
    slidesPerView:1,
    centeredSlides:true,
    loop:true,
    spaceBetween:2,
    //autoplay:true,
  }
  
  ngOnInit() {
    var url = 'http://indianchurches.org/get_header.php?id=1';
    this.http.get<[Feedback]>(url)
    .subscribe(res=>{
      console.log(res);
      this.videos=res;
      
    });
  }
  @ViewChild(IonSlides)
  slider!: IonSlides;
  swipeNext(){
    this.slider.slideNext();
  }

  testClick()
  {
    console.log(this.video_link);
    console.log(this.video_name);
    console.log(this.view_count);
    let headers=new HttpHeaders();
    headers.append("Content-Type","application/json");
    var url = 'http://indianchurches.org/video_insert.php';
    
    let data;
  let body={
    'id':1,
    'link':this.video_link,
    'name':this.video_name,
    'count':this.view_count,
   
  };
    this.http.post(url,JSON.stringify(body),{responseType:'text'})
    .subscribe(res=>{
      console.log(res);
      if(res.includes("1"))
      {
        this.toastser.showToast("Video Detail Inserted");
        
      }
    });
  

  }
  whenslidechange(slider: any)
  {
    console.log("do some");
    const context=this;
  
    this.slider.getActiveIndex().then((index: number)=>{
      console.log("index->",index);
   // console.log("list name",listaframe[index]);
   
   let listaFrames = document.getElementsByTagName("iframe")[index-1].contentWindow;
  
      //let iframe = listaFrames[index].contentWindow;          
    //  listaFrames.postMessage('{"event":"command","func":"' +'stopVideo'+ '","args":""}', '*');
    });
  
  //  let current=this.slides.getActiveIndex();
   // console.log("curr index:",current);
  }
  
  public getvalue(id:any)
  {
    console.log("click me name",id);
  let headers=new HttpHeaders();
  headers.append("Content-Type","application/json");
  var url = 'http://indianchurches.org/delete_video.php';
  
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


