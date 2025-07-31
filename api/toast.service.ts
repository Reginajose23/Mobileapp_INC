import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private myToast:any;

  constructor(public toast:ToastController) { }

  showToast(msg: string)
  {
    this.myToast=this.toast.create({
      message:msg,
      duration:2000,
      
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast()
  {
    this.myToast=this.toast.dismiss();
  }
}
