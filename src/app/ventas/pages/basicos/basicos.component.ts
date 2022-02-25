import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "anakin";
  nombreUpper: string = "ANAKIN";
  nombreCompleto: string = "anAkiN sKywalKer";

  fecha: Date = new Date(); //el dia de hoy

}
