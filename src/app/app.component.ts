import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string = "Fernando mArtinez";
  valor:number= 1000;
  obj ={
    nombre: "Fernando"
  }

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }
}