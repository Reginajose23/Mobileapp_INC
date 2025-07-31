import { Component,ViewChild } from '@angular/core';
import { ApiService } from './api/api.service';
import { ToastService } from './api/toast.service';
import  {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser";
import { Platform,AlertController,IonRouterOutlet } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  @ViewChild(IonRouterOutlet,{static:true}) routerOutlet:IonRouterOutlet;
  currentColor: string;
  contentColor:string;
  vidurl:SafeResourceUrl | undefined;
  url: any;
  image_logo="http://kyfdvaragold.strangled.net:8082/kyfdvaragold/images/logo.png";
  img_link="https://indianchurches.org/church_images/logo.png";
  
  
  constructor(private service:ApiService,private toastser:ToastService,
    private domSatizer:DomSanitizer,
    private platform:Platform,
    private alertController:AlertController,
    private location:Location) 
   {
    this.currentColor = 'classic';
    this.contentColor='';
    this.backButtonEvent();

  }
  openvideo()
  {
    this.url=this.service.video_url();

   // window.open(this.href,'_self','location=yes');
    window.open(this.url,'-self','location=yes');
  }
  addchurch()
  {
    this.url=this.service.church_url();

    window.open(this.url,'-self','location=yes');
  }
  backButtonEvent()
  {
    this.platform.backButton.subscribeWithPriority(10,()=>{
      if(!this.routerOutlet.canGoBack()){
        this.backButtonAlert();
      }else{
        this.location.back();
      }
      //this.backButtonAlert();
    });
  }
  async backButtonAlert()
  {
    const alert=await this.alertController.create({
      message:'You just pressed the Back button!',
      buttons:[{
        text:'Cancel',
        role:'cancel',
      },{
        text:'Close App',
        handler:()=>{
          (navigator as any).app.exitApp();

         // navigator['app'].exitApp();

        }
      
      }]
    });
    await alert.present();
  }
  openquiz()
  {
    this.url=this.service.quiz_url();
          
    //this.vidurl=this.domSatizer.bypassSecurityTrustResourceUrl(this.url);
    //this.url=(this.vidurl).toString();
  
    window.open(this.url,'-self');
  }
  opengame()
  {
    this.url=this.service.game_url();
          
    //this.vidurl=this.domSatizer.bypassSecurityTrustResourceUrl(this.url);
    //this.url=(this.vidurl).toString();
  
    window.open(this.url,'-system');
  }
}
