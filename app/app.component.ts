import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Tap Room</h1>
  <ul>
    <li [class]="priceColor(currentKeg)" *ngFor="let currentKeg of kegs">{{currentKeg.name}}, Pints Left: {{currentKeg.pints}} <button (click)="editKeg(currentKeg)">Edit!</button><button (click)="servePint(currentKeg)">Serve a pint!</button></li>
  </ul>
  <br>
  <div>
    <h3>{{selectedKeg.name}}</h3>
    <h3>Edit Keg</h3>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="selectedKeg.name">
    </div>
    <div>
      <label>Brand: </label>
      <input [(ngModel)]="selectedKeg.brand">
    </div>
    <div>
      <label>Style: </label>
      <input [(ngModel)]="selectedKeg.style">
    </div>
    <div>
      <label>Price:</label>
      <input [(ngModel)]="selectedKeg.price">
    </div>
    <div>
      <label>ABV:</label>
      <input [(ngModel)]="selectedKeg.abv">
    </div>
  </div>
  <div>
  
  `
})

export class AppComponent {
kegs: Keg[] = [
  new Keg('Pabst Blue Ribbon', 'Pabst', 'American Premium Lager', 3, 4.7),
  new Keg('60 Min IPA', 'Dogfish Head', 'IPA', 5, 6.0),
  new Keg('Little Sumpin Sumpin', 'Lagunitas', 'Pale Wheat', 5, 7.5),
  new Keg('Abbey', 'New Belgium', 'Belgian Style Dubbel', 6.50, 7.0)];
  selectedKeg: Keg = this.kegs[0];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  servePint(clickedKeg) {
    this.selectedKeg = clickedKeg;
    if(clickedKeg.pints >0){
      clickedKeg.pints --;
    }
  }


priceColor(currentKeg){
    if (currentKeg.price > 6){
      return "bg-danger";
    } else if (currentKeg.price <= 6 && currentKeg.price >= 5) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}


export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public style: string, public price: number, public abv: number){}
}
