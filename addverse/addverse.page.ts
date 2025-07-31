import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { finalize, Observable } from 'rxjs';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { base64StringToBlob } from 'blob-util';


@Component({
  selector: 'app-addverse',
  templateUrl: './addverse.page.html',
  styleUrls: ['./addverse.page.scss'],
})
export class AddversePage implements OnInit {
 
  base64Image:any;
  capturedSnapURL:any;
  file:any;

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
 // toastController: any;
  loadingController: any;
  platform:any;
  constructor(private camera:Camera,private actionSheetController: ActionSheetController, private toastController: ToastController,
    private plt: Platform,public http:HttpClient,private filePath: FilePath) { }

  ngOnInit() {
  }

  createFileName() {
    const d = new Date(),
      n = d.getTime(),
      newFileName = n + '.jpg';
    return newFileName;
  }

  pathForImage(img: string) {
    if (img === null) {
      return '';
    } else {
      return this.file.dataDirectory + img;
    }
  }
  async presentToast(text: string) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }

copyFileToLocalDir(namePath: any, currentName: any, newFileName: string) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then( {
        //this.updateStoredImages(newFileName);
        //startUpload(newFileName),
    }, () => {
        console.log('Error while storing file.');
    });
}
async selectImage() {
  const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
              text: 'Load from Library',
              handler: () => {
                  this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
              }
          },
          {
              text: 'Use Camera',
              handler: () => {
                  this.getPicture(this.camera.PictureSourceType.CAMERA);
              }
          },
          {
              text: 'Cancel',
              role: 'cancel'
          }
      ]
  });
  await actionSheet.present();
}
getPicture(sourceType: PictureSourceType) {
  var options: CameraOptions = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
};
let entry1 ! : FileEntry;


  this.camera.getPicture(options).then((imageDataURI) => {
    this.file.resolveLocalFilesystemUrl(imageDataURI) .then((entry: FileEntry) => {
      ( < FileEntry > entry).file(file => this.readFile(file))
  })
  .catch((err: any) => {
      this.presentToast('Error while reading file.');
  });
  //this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
 
});
}
read(file: any) {
  var reader:any="";
  reader = new FileReader();  
  
  //
  //const reader = new FileReader();
  reader.onload = () => {
    const blob = new Blob([reader.result], {
      type: file.type
    });
    const formData = new FormData();
    //formData.append('name', 'MyImageBlob');
    formData.append('file', blob, file.name);
    this.http.post("http://indianchurches.org/img_upload.php",formData).subscribe((res:any)=> {
      console.log(res);
      if (res['success']) {
          this.presentToast('File upload complete.')
      } else {
          this.presentToast('File upload failed.')
      }
  });
  };
  reader.readAsArrayBuffer(file);
}

takePicture(sourceType: PictureSourceType) {
  var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
  };

  this.camera.getPicture(options).then(imagePath => {
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath)
              .then(filePath => {
                  let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                  let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                  this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                  this.base64Image = 'data:image/jpeg;base64,' + imagePath;

              });
      } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
  });

}
  openCamera()
  {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI
      
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.capturedSnapURL = imageData;
    }, (err) => {
      
      console.log(err);
      // Handle error
    });
  }
  openGallery()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    //get picture option ref
   this.camera.getPicture(options).then((imageData) => {
      

    //
  /*  this.camera.getPicture(options).then((imageData) => {
      // this.camera.DestinationType.FILE_URI gives file URI saved in local
      // this.camera.DestinationType.DATA_URL gives base64 URI
      let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
      let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    this.capturedSnapURL = imageData;
    }, (err) => {
      
      console.log(err);
      // Handle error
    });*/
    this.base64Image = 'data:image/jpeg;base64,' + imageData;
    this.capturedSnapURL = imageData;
  }, (err) => {
    
    console.log(err);
    // Handle error
  });
}
 startUpload(imgEntry: any)  {
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
        .then((entry: FileEntry) => {
            ( < FileEntry > entry).file(file => this.readFile(file))
        })
        .catch(() => {
            this.presentToast('Error while reading file.');
        });
}

readFile(file: any) {
  var reader:any="";
     reader = new FileReader();
    reader.onload = () => {
        const formData = new FormData();
        const imgBlob = new Blob([reader.result], {
            type: file.type
        });
        formData.append('file', imgBlob, file.name);
        this.uploadImageData(formData);
    };
    reader.readAsArrayBuffer(file);
}

async uploadImageData(formData: FormData) {
    const loading = await this.loadingController.create({
        message: 'Uploading image...',
    });
    await loading.present();

    this.http.post("http://localhost:8888/img_upload.php", formData)
        .pipe(
            finalize(() => {
                loading.dismiss();
            })
        )
        .subscribe((res:any) => {
            if (res['success']) {
                this.presentToast('File upload complete.')
            } else {
                this.presentToast('File upload failed.')
            }
        });
}


 base64toBlob(base64Data: string, contentType: string) {
  contentType = contentType || '';
  var sliceSize = 1024;
  var byteCharacters = atob(base64Data);
  var bytesLength = byteCharacters.length;
  var slicesCount = Math.ceil(bytesLength / sliceSize);
  var byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);

      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
          bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

uploadImage()
{

  
let url='http://indianchurches.org/json.php';

/*let postData=new FormData();
//const imgBlob = new Blob([this.capturedSnapURL]);
postData.append('image', this.base64Image, "");
//postData.append('image',this.capturedSnapURL);
console.log("image",this.capturedSnapURL);*/
console.log("image",this.base64Image);

let data:Observable<any>=this.http.post(url,{"image":this.base64Image});
data.subscribe((result)=>{
  if (result['status']==1) {
    this.presentToast('File upload complete.')
} else {
    this.presentToast('File upload failed.')
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



  
}