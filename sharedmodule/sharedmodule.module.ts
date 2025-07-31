import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafepipePipe } from '../safepipe.pipe';



@NgModule({
  declarations: [SafepipePipe],
  exports:[
    SafepipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedmoduleModule { }
