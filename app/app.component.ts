import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Tap Room</h1>
  <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (clickSender)="servePint($event)"></keg-list>
  <br>
  <div *ngIf="selectedKeg">
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
    <button (click)="finishedEditing()">Done</button>
  </div>
  `
})

export class AppComponent {
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Pabst Blue Ribbon', 'Pabst', 'American Premium Lager', 3, 4.7),
    new Keg('60 Min IPA', 'Dogfish Head', 'IPA', 5, 6.0),
    new Keg('Little Sumpin Sumpin', 'Lagunitas', 'Pale Wheat', 5, 7.5),
    new Keg('Abbey', 'New Belgium', 'Belgian Style Dubbel', 6.50, 7.0)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  servePint(clickedKeg) {
    this.selectedKeg = clickedKeg;
    if(clickedKeg.pints >0){
      clickedKeg.pints --;
    }
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
