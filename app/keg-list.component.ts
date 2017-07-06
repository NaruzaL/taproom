import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="abvKegs">Beers over %5 ABV</option>
    <option value="filterPilsner">See Pilsners</option>
    <option value="filterIPA">See IPA's</option>
    <option value="filterDark">See Dark beers</option>
  </select>
  <ul>
    <li *ngFor ="let currentKeg of childKegList | abv: filterByAbv" [class]="priceColor(currentKeg)" ><strong>{{currentKeg.name}}</strong> | ABV: {{currentKeg.abv}} | Price: $ {{currentKeg.price}} | Pints Left: {{currentKeg.pints}}  <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button><button (click)="smallGrowlerButtonHasBeenClicked(currentKeg)">Serve a small growler!</button><button (click)="largeGrowlerButtonHasBeenClicked(currentKeg)">Serve a large growler!</button><button (click)="serveButtonHasBeenClicked(currentKeg)">Serve a pint!</button></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickPintServer = new EventEmitter();
  @Output() clickSmallGrowler = new EventEmitter();
  @Output() clickLargeGrowler = new EventEmitter();
  filterByAbv: string = "allKegs";


  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  serveButtonHasBeenClicked(pintToServe: Keg) {
    this.clickPintServer.emit(pintToServe);
  }
  smallGrowlerButtonHasBeenClicked(sGToServe: Keg) {
    this.clickSmallGrowler.emit(sGToServe);
  }
  largeGrowlerButtonHasBeenClicked(lGToServe: Keg) {
    this.clickLargeGrowler.emit(lGToServe);
  }
  onChange(optionFromMenu) {
    this.filterByAbv = optionFromMenu;
  }


  priceColor(currentKeg){
    if (currentKeg.pints < 110){
      return "almostEmpty";
    }
    if (currentKeg.price > 6){
      return "bg-danger";
    } else if (currentKeg.price <= 6 && currentKeg.price >= 5) {
      return  "bg-warning";
    } else {
      return "bg-info";    }
  }



}
