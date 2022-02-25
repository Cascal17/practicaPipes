import { PipeTransform , Pipe} from '@angular/core';

@Pipe({
  name:"vuela"
})

export class VuelaONoPipe implements PipeTransform{

  transform(value: boolean):string {

    return (value) ? "Vuela" : "No vuela";

  }
}
