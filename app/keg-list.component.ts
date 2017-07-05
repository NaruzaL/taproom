import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allKegs" selected="selected">All Kegs</option>
    <option value="abvKegs">View Beers by ABV</option>
  </select>
  <ul>
    <li *ngFor ="let currentKeg of childKegList | abv: filterByAbv" [class]="priceColor(currentKeg)" >{{currentKeg.name}}, Pints Left: {{currentKeg.pints}} <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button><button (click)="serveButtonHasBeenClicked(currentKeg)">Serve a pint!</button></li>
  </ul>

  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickPintServer = new EventEmitter();
  filterByAbv: string = "allKegs";

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  serveButtonHasBeenClicked(pintToServe: Keg) {
    this.clickPintServer.emit(pintToServe);
  }

  onChange(optionFromMenu) {
    this.filterByAbv = optionFromMenu;
  }


  priceColor(currentKeg){
    if (currentKeg.price > 6){
      return "bg-danger";
    } else if (currentKeg.price <= 6 && currentKeg.price >= 5) {
      return  "bg-warning";
    } else {
      return "bg-info";    }
  }
}
