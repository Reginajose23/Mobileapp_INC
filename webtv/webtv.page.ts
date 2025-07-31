import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-webtv',
  templateUrl: './webtv.page.html',
  styleUrls: ['./webtv.page.scss'],
})
export class WebtvPage implements OnInit {
  url = 'https://indianchurches.org/get_status.php?id=1';

  url1= 'https://indianchurches.org/get_webtvurl.php';


  g_url: any;
  game_url:any;
  w_status:any;
  inputDisabled: boolean = true;
  isHidden:boolean=false;

  constructor(private http:HttpClient,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.g_url="?";
    this.http.get(this.url,{responseType:'text'})
    .subscribe(res=>{
      console.log(res);
      this.w_status=res;
      if(this.w_status==0)
      {
        this.isHidden=false;

        this.inputDisabled = true;
        this.g_url="?";

      }
else  {
  console.log("web tv url");
          this.http.get(this.url1,{responseType:'text'})
          .subscribe(res=>{
            console.log("fdfdfdf",res);
            this.g_url=res;
            this.game_url=this.sanitizer.bypassSecurityTrustResourceUrl(this.g_url);
      
           
          });
          this.inputDisabled = false;

          this.isHidden=true;
 
  
        }


     // this.game_url=this.sanitizer.bypassSecurityTrustResourceUrl(this.g_url);

     
    });

  
    
  }

}
