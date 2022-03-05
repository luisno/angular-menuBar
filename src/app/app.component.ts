import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public estaEnElMenu = false;
  public estaEnElBoton = false;

  constructor(private ren: Renderer2) {
  }

  imprimirPantalla(triger: any, button: any){
    console.log('boton', button);
    console.log('triger', triger);
    this.estaEnElBoton = true;
    triger.openMenu();
  }

  cerrarMenu(triger: any){
    this.estaEnElMenu = false;
    this.estaEnElBoton = false;
    setTimeout(() => {
      if(this.estaEnElMenu){

      } else if (this.estaEnElBoton) {

      } else {
        triger.closeMenu();
      }
    },200)
  }

  menuenter(){
    console.log("Esta ene el menu");
    this.estaEnElMenu = true;
  }
}
