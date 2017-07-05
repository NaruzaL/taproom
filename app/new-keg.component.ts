import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  template: `
  <h1>Add a keg</h1>
  <div>
    <div>
      <label>Name: </label>
      <input #newName>
    </div>
    <div>
      <label>Brand: </label>
      <input #newBrand>
    </div>
    <div>
      <label>Style: </label>
      <input #newStyle>
    </div>
    <div>
      <label>Price: </label>
      <input #newPrice>
    </div>
    <div>
      <label>ABV: </label>
      <input #newABV>
    </div>
    <button (click)="submitForm(newName.value, newBrand.value, newStyle.value, newPrice.value, newABV.value); newName.value=''; newBrand.value=''; newStyle.value=''; newPrice.value=''; newABV.value='';">Add</button>
  </div>
    `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, style: string, price: number, abv: number) {
    var newKegToAdd: Keg = new Keg(name, brand, style, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }
}
