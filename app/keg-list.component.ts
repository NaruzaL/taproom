import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class = "selectForm">
  <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="abvKegs">Beers over %5 ABV</option>
    <option value="filterPilsner">See Pilsners</option>
    <option value="filterIPA">See IPA's</option>
    <option value="filterDark">See Dark beers</option>
  </select>
  </div>
  <div class = "selectForm">
  <button  (click)="dailyHappyHourHasBeenClicked(childKegList)">Happy Hour</button>
  </div>
  <ul>
    <li *ngFor ="let currentKeg of childKegList | abv: filterByAbv" [class]="priceColor(currentKeg)" ><strong>{{currentKeg.name}}</strong>  Style: {{currentKeg.style}} | ABV: {{currentKeg.abv}} | Price: $ {{currentKeg.price}} | Pints Left: {{currentKeg.pints}}
    <br>

    <span><button class="beer-button" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button><button class="beer-button" (click)="serveButtonHasBeenClicked(currentKeg)">16oz</button><button class="beer-button" (click)="smallGrowlerButtonHasBeenClicked(currentKeg)">32oz</button><button class="beer-button" (click)="largeGrowlerButtonHasBeenClicked(currentKeg)">64oz</button></span></li>

  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickPintServer = new EventEmitter();
  @Output() clickSmallGrowler = new EventEmitter();
  @Output() clickLargeGrowler = new EventEmitter();
  @Output() clickHappyHour = new EventEmitter();
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
  dailyHappyHourHasBeenClicked(startHappyHour: Keg) {
    this.clickHappyHour.emit(startHappyHour);
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
