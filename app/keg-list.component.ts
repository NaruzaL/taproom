import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li [class]="priceColor(currentKeg)" *ngFor="let currentKeg of childKegList">{{currentKeg.name}}, Pints Left: {{currentKeg.pints}} <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button><button (click)="serveButtonHasBeenClicked(currentKeg)">Serve a pint!</button></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickPintServer = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  serveButtonHasBeenClicked(pintToServe: Keg) {
    this.clickPintServer.emit(pintToServe);
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
