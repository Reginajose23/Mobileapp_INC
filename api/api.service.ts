//api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Product } from '../models/product';
import { Observable, throwError } from 'rxjs';
//import { supplier } from '../models/supplier';

import { Storage } from '@ionic/storage';
import { retry, catchError } from 'rxjs/operators';

export interface Feedback{
  name:string;
  mobile:string;
  address:string;
  email:string;
  prayer:string;

}
export interface Prayer{
  name:string;
  mobile:string;
  address:string;
  email:string;
  prayer:string;

}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public loder: boolean = true ;
  public product_arr:any =[] ;
  public retailproduct_arr:any =[] ;

//  public supplier_Arr:any =[] ;
  public user : any ;
  public type : any ; 
  public q_url:any;
  public g_url:any;
  public vid_url:any;
  public chur_url:any;

  public sup_arr:any =[] ;


  // API path
  private url = 'http://indianchurches.org/get_header.php';
 
 
  constructor(private http: HttpClient) { 
  }
  create(prayer:Prayer){
    return this.http.post(this.url,prayer);

  }
  getAll()
  {
  return this.http.get<[Feedback]>(this.url);
  }
  quiz_url()
  {

    this.q_url = 'http://indianchurches.org/get_quiz.php';
    this.http.get(this.q_url,{responseType:'text'})
    .subscribe(res=>{
      console.log(res);
      this.q_url=res;
      
    });
    return this.q_url;

  }
  game_url()
  {

    this.g_url = 'http://indianchurches.org/get_game.php';
    this.http.get(this.g_url,{responseType:'text'})
    .subscribe(res=>{
      console.log(res);
      this.g_url=res;
      
    });
    return this.g_url;

  }
  video_url()
  {
    return this.vid_url="https://www.youtube.com/indianchurchesnetwork";
  }
  church_url()
  {
    return this.chur_url="http://www.indianchurches.net/churches_add_page1.php";
  }
 }







 