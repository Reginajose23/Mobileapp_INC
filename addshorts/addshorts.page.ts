import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Observable } from 'rxjs';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';


const baseUrl = "http://indianchurches.org/";
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPE = "video/mp4";

@Component({
  selector: 'app-addshorts',
  templateUrl: './addshorts.page.html',
  styleUrls: ['./addshorts.page.scss'],
})
export class AddshortsPage implements OnInit {
  upload: any;
 res:any;
 
  constructor(
    public navCtrl: NavController, private camera: Camera,
     private file: File,
    public http:HttpClient,
    private alertCtrl: AlertController, private loadingCtrl: LoadingController,private mediaCapture: MediaCapture
    ) {

  }
  ngOnInit() {
  }

  selectedVideo: string; //= "https://res.cloudinary.com/demo/video/upload/w_640,h_640,c_pad/dog.mp4";
  uploadedVideo: string;

  isUploading: boolean = false;
  uploadPercent: number = 0;
  loader: { present: () => void; dismiss: () => void; };
 

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

 async captureVideo() {
    let options: CaptureVideoOptions = {
      limit: 1,
      // duration: 30,
    };

     
      const mediaFiles: any = await this.mediaCapture.captureVideo(options).then((res: any) => {
        console.log(res) //MediaFiles[]
      }, err=> {
        console.log('ERR--');
        console.log(err);
        });
 
    }
    
    readVideoFile(file: any) {
    //console.log('inside readVideo', file);
    
    var movVideo = {
      uri: file['localURL'].split('/'),
      type: 'video/mp4',
      name: file.name,
      size: file.size,
    };
    var imageBlob = new Blob([file], movVideo);
    const formData = new FormData();
    formData.append('file', imageBlob, file.name);
    //console.log('FORM DATA 515 ---->', formData.getAll('data'));
    this.upload.captureFileUpload(formData).subscribe(
      (res:any) => {
        // Store the token value in local storage for future use.
        console.log('------------captureImageFileUpload resp--------', res);
      },
      (err:any) => {
        
        console.log('------------captureImageFileUpload err--------', err);
      }
    );
    }

  selectVideo() {
    const options: CameraOptions = {
      mediaType: this.camera.MediaType.VIDEO,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options)
      .then( async (videoUrl) => {
        if (videoUrl) {
          //this.showLoader();
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
              if (data.size > MAX_FILE_SIZE) return this.presentAlert("Error", "You cannot upload more than 5mb.");
              if (data.type !== ALLOWED_MIME_TYPE) return this.presentAlert("Error", "Incorrect file type.");

              this.selectedVideo = retrievedFile.nativeURL;
          });
        }
      },
      (err) => {
        console.log(err);
      });
  }
  uploadImage()
  {
  
   // var url = baseUrl +  "/video";
    
    var file = this.selectedVideo.substr(this.selectedVideo.lastIndexOf('/') + 1);
      
    var options = {
      fileName: file,
      fileKey: "video",
      mimeType: "video/mp4"
    }

  let url='http://indianchurches.org/img_upload.php';
  
  /*let postData=new FormData();
  //const imgBlob = new Blob([this.capturedSnapURL]);
  postData.append('image', this.base64Image, "");
  //postData.append('image',this.capturedSnapURL);
  console.log("image",this.capturedSnapURL);*/
 //onsole.log("image",this.base64Image);
  
  let data:Observable<any>=this.http.post(url,{"file":this.selectedVideo});
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
  
    }
  
  
  
  uploadVideo() {
  /*  var url = baseUrl +  "/video";
    
    var filename = this.selectedVideo.substr(this.selectedVideo.lastIndexOf('/') + 1);
      
    var options: FileUploadOptions = {
      fileName: filename,
      fileKey: "video",
      mimeType: "video/mp4"
    }

    this.videoFileUpload = this.transfer.create();

    this.isUploading = true;

    this.videoFileUpload.upload(this.selectedVideo, url, options)
      .then((data)=>{
        this.isUploading = false;
        this.uploadPercent = 0;
        return JSON.parse(data.response);
      })
      .then((data) => {        
        this.uploadedVideo = data.url;
        this.presentAlert("Success", "Video upload was successful.");
      })
      .catch((err)=>{
        this.isUploading = false;
        this.uploadPercent = 0;
        this.presentAlert("Error", "Error uploading video.");
      });

    this.videoFileUpload.onProgress((data) => {
      this.uploadPercent = Math.round((data.loaded/data.total) * 100);
    });

  }

  cancelUpload() {
    this.videoFileUpload.abort();
    this.uploadPercent = 0;
  }*/
  }
}