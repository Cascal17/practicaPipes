import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre : string = "Anakin";
  genero: string = "masculino"
  invitacionMapa = {
    "masculino" : "invitarlo",
    "femenino" : "invitarla"
  }

  //i18nPlural

  clientes : string [] = ["Maria", "Pepe", "Leia", "Luke", "R2D2"]
  clientesMapa ={
    "=0": "no tenemos ningun cliente esperando",
    "=1": "tenemos un cliente esperando",
    "other": "tenemos # clientes esperando"
  }

  cambiarCliente(){
    if(this.nombre==="Anakin"){
      this.nombre="Padme";
      this.genero="femenino"
    }else{
      this.nombre="Anakin";
      this.genero="masculino"
    }
  }

  borrarCliente(){
    this.clientes.pop();
    console.log(this.clientes);
  }


  //KeyValue Pipe

  persona= {
    nombre: "Anakin",
    edad: 32,
    direccion: "Estrella de la muerte, Andromeda"
  }


  //JSONPipe

  heroes=[
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Batman",
      vuela: false
    },
    {
      nombre: "Robin",
      vuela: false
    }
  ]


  //Async Pipe

  miObservable = interval (5000); // Emitirá valores numericos

  valorPromesa = new Promise((resolve,reject) =>{

    setTimeout(() =>{
      resolve("Tenemos data de promesa");
    },3500);
  });
}
