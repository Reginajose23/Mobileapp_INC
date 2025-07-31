import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { ToastService } from '../api/toast.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  feed:any={};
  data: any;
  uname:any;
  umobile:any;
  uemail:any;
  ufeedback:any;
  uaddress:any;
  
  userObj:any={
    name:'',
    mobile:'',
    email:'',
    prayer:'',
  }

errors=[
  {type:'required',message:'Field cannot be empty'},
  {type:'pattern',message:'Mobile no not valid'},
  {type:'email',message:'Email not valid one'},



]  
login:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required]),
  mobile: new FormControl('', [Validators.required, Validators.pattern(("[6-9]\\d{9}"))]),
  email: new FormControl('', [Validators.required, Validators.email]),
  prayer:new FormControl('',[Validators.required]),


  
  
});



  constructor(private service:ApiService,private http:HttpClient,private toastser:ToastService) { }
  reload(){
    this.uname="";
      this.umobile="";
      this.uemail="";
      this.uaddress="";
      this.ufeedback="";
    this.ngOnInit();
 }
 onSave()
{
 // debugger;
  let headers=new HttpHeaders();
  headers.append("Content-Type","application/");
  let body=this.login.value;
  console.log("val",body);

  this.http.post('http://indianchurches.org/feedback_insert.php',JSON.stringify(body),{responseType:'text'}) .subscribe(res=>{
    console.log(res);
    if(res.includes("1"))
    {
      this.toastser.showToast("Feedback added");
     /* this.feed.name="";
      this.feed.mobile="";
      this.feed.email="";
      this.feed.address="";
      this.feed.prayer="";*/
      this.login.reset();
    }

  });
}
addForm(e:any)

{
  console.log("values",e.value.umobile);
  let headers=new HttpHeaders();
  headers.append("Content-Type","application/");
  var url = 'https://indianchurches.org/feedback_insert.php';
  
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
      this.toastser.showToast("Feedback added");
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
  console.log("click me name",this.feed.name);
  console.log("click me mob",this.feed.mobile);
  var val1=this.feed.name;
  var val2=this.feed.mobile;
  var val3=this.feed.address;
  var val4=this.feed.feedback;
  var val5=this.feed.email;
  var phoneno = /^\d{10}$/;
 // if((inputtxt.value.match(phoneno))
//console.log(val1);json
 if(val1 != "" && val1 != "null" && val1 !=null  &&  (val5!="" && val5 != "null" && val5!=null && val5.indexOf('@') !== -1 )  && (val2!="" && val2 != "null" && val2!=null ) && (val4!="" && val4 != "null" && val4!=null ) ){
    
  
  let headers=new HttpHeaders();
  headers.append("Content-Type","application/");
  var url = 'https://indianchurches.org/feedback_insert.php';
  
  let data;
let body={
  'name':this.feed.name,
  'mobile':this.feed.mobile,
  'email':this.feed.email,
  'address':this.feed.address,
  'prayer':this.feed.feedback
};
  this.http.post(url,JSON.stringify(body),{responseType:'text'})
  .subscribe(res=>{
    console.log(res);
    if(res.includes("1"))
    {
      this.toastser.showToast("Feedback added");
     /* this.feed.name="";
      this.feed.mobile="";
      this.feed.email="";
      this.feed.address="";
      this.feed.prayer="";*/
      this.reload();

      
    }
  });
}

else{
  this.toastser.showToast("Please enter require fields;  Enter valid Email; Enter Valid Mobile No;");

}
}
  ngOnInit() {
  }

}
