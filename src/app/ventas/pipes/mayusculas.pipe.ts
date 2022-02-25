import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mayusculas"
})
export class MayusculasPipe implements PipeTransform{

  transform( valor:string, activar:boolean=true): string {
  /* if(activar){
      return valor.toUpperCase();
    }else{
      return valor.toLowerCase();
    }*/
    return (activar)? valor.toUpperCase() : valor.toLowerCase();
  }

}
