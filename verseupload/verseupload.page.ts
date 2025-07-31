import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController} from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-verseupload',
  templateUrl: './verseupload.page.html',
  styleUrls: ['./verseupload.page.scss'],
})


export class VerseuploadPage implements OnInit {
  
 baseUrl = "http://indianchurches.org/";
MAX_FILE_SIZE = 5 * 1024 * 1024;
ALLOWED_MIME_TYPE = "video/mp4";
  selectedVideo: string; //= "https://res.cloudinary.com/demo/video/upload/w_640,h_640,c_pad/dog.mp4";
  uploadedVideo: string;

  isUploading: boolean = false;
  uploadPercent: number = 0;
  loader: { present: () => void; dismiss: () => void; };
  constructor(
    public navCtrl: NavController, private camera: Camera,
     private file: File,
    public http:HttpClient,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController
    ) {

  }

  ngOnInit() {
  }
  async showLoader() {
    this.loader = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
   await this.loader.present();
  }

  dismissLoader() {
    this.loader.dismiss();
  }

  async presentAlert(title: string, message: string) {
    let alert = await this.alertCtrl.create({
      message: title,
      subHeader: message,
      buttons: ['Dismiss']
    
    });
    await alert.present();
  }

  cancelSelection() {
    this.selectedVideo = "null";
    this.uploadedVideo = "null";
  }

  selectVideo() {
    const options: CameraOptions = {
      mediaType: this.camera.MediaType.VIDEO,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options)
      .then( async (videoUrl) => {
        if (videoUrl) {
          this.showLoader();
          this.uploadedVideo = "null";
          
          var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
          var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);

          dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;
          
          try {
            var dirUrl = await this.file.resolveDirectoryUrl(dirpath);
            var retrievedFile = await this.file.getFile(dirUrl, filename, {});

          } catch(err) {
            this.dismissLoader();
            return this.presentAlert("Error","Something went wrong.");
          }
          
          retrievedFile.file( data => {
              this.dismissLoader();
              if (data.size > this.MAX_FILE_SIZE) return this.presentAlert("Error", "You cannot upload more than 5mb.");
              if (data.type !== this.ALLOWED_MIME_TYPE) return this.presentAlert("Error", "Incorrect file type.");

              this.selectedVideo =  retrievedFile.nativeURL;
              this.uploadImage(this.selectedVideo);
          });
        }
      },
      (err) => {
        console.log(err);
      });
  }
  uploadImage(video:any)
  {
  
   // var url = baseUrl +  "/video";
    
    var file = video.substr(video.lastIndexOf('/') + 1);
      
    var options = {
      fileName: file,
      fileKey: "video",
      mimeType: "video/mp4"
    }

  let url='http://indianchurches.org/video_json.php';
  
  /*let postData=new FormData();
  //const imgBlob = new Blob([this.capturedSnapURL]);
  postData.append('image', this.base64Image, "");
  //postData.append('image',this.capturedSnapURL);
  console.log("image",this.capturedSnapURL);*/
 //onsole.log("image",this.base64Image);
  
  let data:Observable<any>=this.http.post(url,{"file":video});
  data.subscribe((result)=>{
    if (result['status']==1) {
      this.presentAlert("Success",'File upload complete.')
  } else {
      this.presentAlert("Fail",'File upload failed.')
  }
    console.log(result);
  });
  /*this.http.post(url,JSON.stringify(postData),{responseType:'text'})
    .subscribe(res=>{
      console.log(res);
      if(res.includes("1"))
      {
        
      }
    });*/
   
  /*let data:Observable<any>=this.http.post(url,postData);
  data.subscribe((result)=>{
    console.log(result);
  });*/
  
    }  }


