import { Component } from '@angular/core';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';
import { ApiService } from '../api/api.service';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Observable } from 'rxjs';

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
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  horizontalText = `this is the text to show scroll horizontal, 
    and default is scroll horizontal. you don't need to set the direction`;
    
  croppedImagepath="";

  img_link="https://indianchurches.org/church_images/addimg.jpg";

  currenttext:string | undefined;
    videos:Feedback[] | undefined;
    videos1:Feedback[] | undefined;
    videos2:Feedback[] | undefined;
    videos3:Feedback[] | undefined;
    videos4:Feedback[] | undefined;
    g_url:string | undefined;
    q_url:string | undefined;
    url1:SafeResourceUrl | undefined;
    url2:SafeResourceUrl | undefined;
    url3:SafeResourceUrl | undefined;
    url4:SafeResourceUrl | undefined;
    url5:SafeResourceUrl | undefined;
    quiz_url:SafeResourceUrl | undefined;
    game_url:SafeResourceUrl | undefined;
    message:string | undefined;
   subject:string | undefined;
    link:string | undefined;
    img_path:any;
     qurl = 'http://indianchurches.org/get_quiz.php';
     gurl = 'http://indianchurches.org/get_game.php';

    



    videourl1="https://indianchurches.org/church_images/word4.jpg";
    videourl2="https://indianchurches.org/church_images/word5.jpg";
    videourl3="https://indianchurches.org/church_images/word6.jpg";
    videourl4="https://indianchurches.org/church_images/word7.jpg";
    videourl5:string | undefined;
  slides: any;
  w_status:any;

  isHidden:boolean=false;
  inputDisabled: boolean = true;


   
  isLoading=false;

  imagePickerOptions={
    maximumImagesCount:1,
    quality:50
  };

  constructor(private social:SocialSharing,private service:ApiService,private http:HttpClient,private sanitizer:DomSanitizer,private camera:Camera,public actionSheetController:ActionSheetController,private file:File) {}
//Old code
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
transform(url: any) {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
ngOnInit() {
//  App.addListener
  setTimeout(() => {
    this.horizontalText = `this is the text to show that text could be refreshed. 
    but this feature support horizontal scroll only!`;
  }, 5000);
 var url = 'https://indianchurches.org/get_header.php?id=1';
  var url1 = 'https://indianchurches.org/get_header.php?id=2';
  var url2 = 'https://indianchurches.org/get_dailyverse.php';
 var  url3 = 'https://indianchurches.org/get_status.php?id=4';


 /* var url2 = 'http://indianchurches.org/get_header.php?id=3';

  var url3 = 'http://indianchurches.org/get_header.php?id=4';
  var url4 = 'http://indianchurches.org/get_header.php?id=5';

  var urlval='http://indianchurches.org/get_video_url.php?id=1';
  var urlval1='http://indianchurches.org/get_video_url.php?id=2';
  var urlval2='http://indianchurches.org/get_video_url.php?id=3';
  var urlval3='http://indianchurches.org/get_video_url.php?id=4';
  var urlval4='http://indianchurches.org/get_video_url.php?id=5';*/

  this.http.get<[Feedback]>(url)
  .subscribe((res: Feedback[] | undefined)=>{
    console.log(res);
    this.videos=res;
    
  });

  this.http.get<[Feedback]>(url1)
  .subscribe((res: Feedback[] | undefined)=>{
    console.log(res);
    this.videos1=res;
    
  });

  this.http.get<[Feedback]>(url2)
  .subscribe((res: Feedback[] | undefined)=>{
    console.log(res);
    this.videos2=res;
    
  });

  this.http.get(url3,{responseType:'text'})
   .subscribe(res=>{
     console.log("video file res->",res);
     this.w_status=res;
     if(this.w_status==0)
     {
       this.isHidden=true;

      

     }
     else
     {
      this.isHidden=false;
     }
    });

}

get_game()
  {

  this.http.get(this.gurl,{responseType:'text'})
  .subscribe((res: string | undefined)=>{
    console.log(res);
    this.g_url=res;
   // game_url=this.sanitizer.bypassSecurityTrustResourceUrl(res);

   
  });
  window.open(this.g_url,'-self');

}
  @ViewChild(IonSlides)
  slider!: IonSlides;

swipeNext(){
  this.slider.slideNext();
}
swipePre()
{
this.slider.slidePrev();
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
get_quiz()
{
  //this.router.
  this.http.get(this.qurl,{responseType:'text'})
  .subscribe((res: string )=>{
    this.q_url=res;
    this.quiz_url=this.sanitizer.bypassSecurityTrustResourceUrl(res);

   
  });
window.open(this.q_url,'-self');

}
  pickImage(sourceType: any){
    const options:CameraOptions={
      quality:100,
      sourceType:sourceType,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then(
      (ImageData)=>{
       this.croppedImagepath='data:image/jpeg:base64,'+ImageData;
       this.img_path=ImageData;

       //this.croppedImagepath=(<any>window).Ionic.WebView.convertFileSrc('data:image/jpeg;base64,' + ImageData);

      },(err)=>{

      });
  }
  uploadImage()
  {
  let url='http://indianchurches.org/json.php';
  let postData=new FormData();
  postData.append('file',this.croppedImagepath);
  let data:Observable<any>=this.http.post(url,postData);
  data.subscribe((result)=>{
    console.log(result);
  });
  
    }
  upload(){
    let  url = 'http://indianchurches.org/json.php';
    const date = new Date().valueOf();

    // Replace extension according to your media type
    const imageName = date+ '.jpeg';
    // call method that creates a blob from dataUri
    const imageBlob = this.dataURItoBlob(this.croppedImagepath);
    // const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' });
    const postData=new FormData();
    postData.append('file', imageBlob);

    let data:Observable<any> = this.http.post(url,postData);
    data.subscribe((result) => {
      console.log(result);
    });
  }

  dataURItoBlob(dataURI: string) {
    const byteString = window.atob(dataURI);
   const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
     }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });    
   return blob;
  }
  /*uploadImageData(ImageData1: any)
  {
    var fileName=ImageData1;
    var targetPath=this.croppedImagepath;
    var upload_url="";

    const filetransfer:FileTransferObject=this.filetransfer.create();
    let options:FileUploadOptions={
      fileKey:"file",
      fileName:ImageData1,
      chunkedMode:false,
      mimeType:'image/jpeg',
      params:{'fileName':fileName}
    }
    filetransfer.upload(targetPath,upload_url,options)
    .then((data) =>{
      const newdata=JSON.parse(data.response);
      if(newdata.success)
      {
        console.log("success");
      }else{
        console.log("error");
      }

    },(err)=>{
      console.log("err",JSON.stringify(err));
    })
  }*/
  async selectImage()
  {
    const actionSheet=await this.actionSheetController.create({
      header:"Select Image source",
      buttons:[{
        text:'Load from Library',
        handler:()=>{
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
    {
      text:'Use Camera',
      handler:()=>{
        this.pickImage(this.camera.PictureSourceType.CAMERA);
      }
    },
    {
      text:'Cancel',
      role:'cancel'
    }
    
    ]
    });
    await actionSheet.present();
  }
  share(index: any)
  {
    console.log(index);
  //this.social.share(index.image, "null", "null", "null");
  this.social.share("Indian Churches Network","null",index,"null");
  }
  video_share(index: any)
  {
    console.log(index);
  //this.social.share(index.image, "null", "null", "null");
  var msg="https://www.youtube.com/embed/"+index;
  this.social.share("hi","null",msg,"null");
  }


  

}
