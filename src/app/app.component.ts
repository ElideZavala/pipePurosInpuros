import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  fechas: Date[] = [];

  anadirFecha() {
    this.fechas.push(new Date());
    let fecha2 = this.fechas.slice(); // <-- lo que hace es crear una copia del array de fechas y se la asigna a fecha2
    this.fechas = fecha2;  //
  }
}
