import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayusculas:boolean = true;
  ordenarPor: string= "";

  heroes: Heroe[] = [
    {
      nombre:"Superman",
      vuela: true,
      color: Color.azul
    },
    {
      nombre: "Batman",
      vuela:false,
      color: Color.negro
    },
    {
      nombre: "Robin",
      vuela:false,
      color: Color.azul
    },
    {
      nombre: "Darevil",
      vuela:false,
      color: Color.rojo
    },
    {
      nombre: "Ironman",
      vuela:true,
      color: Color.rojo
    }
  ]


  cambiar(){
    this.enMayusculas=!this.enMayusculas;
  }

  cambiarOrden(valor:string){
    switch(valor){
      case "nombre":
        this.ordenarPor="nombre";
        break;
      case "vuela":
        this.ordenarPor="vuela";
        break;
      case "color":
        this.ordenarPor="color";
        break;
    }
  }
}
