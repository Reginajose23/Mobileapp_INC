import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safepipe'
})
export class SafepipePipe implements PipeTransform {
   re_val: any;
  constructor(protected sanitizer:DomSanitizer){}

  public transform(value: any,type: string):SafeHtml | SafeStyle | SafeScript|SafeUrl|SafeResourceUrl{
    switch(type){
        case 'html':
          this.re_val=this.sanitizer.bypassSecurityTrustHtml(value);
           break;
        case 'style':
          this.re_val= this.sanitizer.bypassSecurityTrustStyle(value);
          break;
          case 'script':
            this.re_val= this.sanitizer.bypassSecurityTrustScript(value);
            break;       
            case 'url':
              this.re_val=this.sanitizer.bypassSecurityTrustUrl(value);
              break;
              case 'resourceUrl':
                this.re_val= this.sanitizer.bypassSecurityTrustResourceUrl(value);
                break;

                  throw new Error('Method not implemented.');
    }   
    return this.re_val 
  }

}
