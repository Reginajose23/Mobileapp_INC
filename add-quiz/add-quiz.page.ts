import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastService } from '../api/toast.service';


@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.page.html',
  styleUrls: ['./add-quiz.page.scss'],
})
export class AddQuizPage implements OnInit {
video_link:any;
constructor(public http:HttpClient,public toastser:ToastService) { }

  ngOnInit() {
  }
  testClick()
  {
    console.log(this.video_link);
 //   console.log(this.video_name);
   // console.log(this.view_count);
    let headers=new HttpHeaders();
    headers.append("Content-Type","application/json");
    var url = 'http://indianchurches.org/video_insert.php';
    
    let data;
  let body={
    'id':3,
    'link':this.video_link,
    
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
  

}
