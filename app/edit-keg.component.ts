import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div id = "editKeg" *ngIf="childSelectedKeg">
    <h3>{{childSelectedKeg.name}}</h3>
    <h3>Edit Keg</h3>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="childSelectedKeg.name">
    </div>
    <div>
      <label>Brand: </label>
      <input [(ngModel)]="childSelectedKeg.brand">
    </div>
    <div>
      <label>Style: </label>
      <input [(ngModel)]="childSelectedKeg.style">
    </div>
    <div>
      <label>Price:</label>
      <input [(ngModel)]="childSelectedKeg.price">
    </div>
    <div>
      <label>ABV:</label>
      <input [(ngModel)]="childSelectedKeg.abv">
    </div>
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
