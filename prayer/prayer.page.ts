import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService, Prayer } from '../api/api.service';
import { ToastController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { ToastService } from '../api/toast.service';
import { Validators, FormBuilder, FormGroup, FormControl,Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';





@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.page.html',
  styleUrls: ['./prayer.page.scss'],
})
export class PrayerPage implements OnInit, ViewWillEnter  {
  data:any;
  prayer:any={};
  uname:any;
  umobile:any;
  uemail:any;
  ufeedback:any;
  uaddress:any;
 
  constructor(private service:ApiService,private http:HttpClient,private toastser:ToastService,private router: Router,private formBuilder:FormBuilder) { }
  ionViewWillEnter(): void {
    throw new Error('Method not implemented.');
  }
  reload(){
    this.uname="";
      this.umobile="";
      this.uemail="";
      this.uaddress="";
      this.ufeedback="";
    this.ngOnInit();
 }
 addForm(e:any)

 {
   console.log("values",e.value.umobile);
   //let headers=new HttpHeaders();
   //headers.append("Content-Type","application/");
   var url = 'https://indianchurches.org/prayer_insert.php';
   
   let data;
 let body={
   'name':e.value.uname,
   'mobile':e.value.umobile,
   'email':e.value.uemail,
   'address':e.value.uaddress,
   'prayer':e.value.ufeedback
 };
   this.http.post(url,JSON.stringify(body),{responseType:'text'})
   .subscribe(res=>{
     console.log(res);
     if(res.includes("1"))
     {
       this.toastser.showToast("Prayer added");
      /* this.feed.name="";
       this.feed.mobile="";
       this.feed.email="";
       this.feed.address="";
       this.feed.prayer="";*/
       this.reload();
 
       
     }
   });
 } 
 

  testClick()
{
  console.log("click me name",this.prayer.name);
  console.log("click me mob",this.prayer.mobile);
  var val1=this.prayer.name;
  var val2=this.prayer.mobile;
  var val3=this.prayer.address;
  var val4=this.prayer.prayer;
  var val5=this.prayer.email; 
  var phoneno = /^\d{10}$/;
  // if((inputtxt.value.match(phoneno))
 //console.log(val1);
   if(val1 != "" && val1 != "null" && val1 !=null  &&  (val5!="" && val5 != "null" && val5!=null && val5.indexOf('@') !== -1 )  && (val2!="" && val2 != "null" && val2!=null ) && (val4!="" && val4 != "null" && val4!=null ) ){
    
  let headers=new HttpHeaders();
  headers.append("Content-Type","application/json");
  var url = 'http://indianchurches.org/prayer_insert.php';
  
  let data;
let body={
  'name':this.prayer.name,
  'mobile':this.prayer.mobile,
  'email':this.prayer.email,
  'address':this.prayer.address,
  'prayer':this.prayer.prayer
};
  this.http.post(url,JSON.stringify(body),{responseType:'text'})
  .subscribe(res=>{
    console.log(res);
    if(res.includes("1"))
    {
      this.toastser.showToast("Prayer added");
     /* this.prayer.name="";
      this.prayer.mobile="";
      this.prayer.email="";
      this.prayer.address="";
      this.prayer.prayer="";*/
      this.reload();

      
    }
  });
}

else{
  this.toastser.showToast("Please enter require fields; Enter Valid Mobile no; Enter Valid Email");

}
}
  ngOnInit() {
  }


}
function presentToast() {
  throw new Error('Function not implemented.');
}

