import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <img src="https://media.giphy.com/media/92wsX8GEoNTYA/giphy.gif">
  <h1>Tap Room</h1>
  <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (clickSmallGrowler)="smallGrowler($event)" (clickLargeGrowler)="largeGrowler($event)"
  (clickPintServer)="servePint($event)" (clickHappyHour)="dailyHappyHour($event)"></keg-list>
  <br>
  <edit-keg [childSelectedKeg] = "selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
  <new-keg (newKegSender)="addKeg($event)"></new-keg>
  `
})

export class AppComponent {
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Pabst Blue Ribbon', 'Pabst', 'Lager', 3, 4.7),
    new Keg('60 Min IPA', 'Dogfish Head', 'IPA', 5, 6.0),
    new Keg('Little Sumpin Sumpin', 'Lagunitas', 'Pale', 5, 7.5),
    new Keg('Abbey', 'New Belgium', 'Belgian Style Dubbel', 6.50, 7.0),
    new Keg('Black Butte Porter', 'Deschutes', 'Dark', 4.50, 6.0),
    new Keg('ODouls', 'Anheuser-Busch', 'Pilsner', 2.50, 0.5)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  dailyHappyHour(masterKegList){

    for (let keg of masterKegList){
      if(keg.happyHour === false){
        keg.happyHour = true;
        keg.price -=1;
      }
      else if (keg.happyHour === true){
        keg.happyHour = false;
        keg.price +=1;
      }
    }
  }

  servePint(clickedKeg) {
    this.selectedKeg = clickedKeg;
    if(clickedKeg.pints >0){
      clickedKeg.pints --;
    }
  }

  smallGrowler(clickedKeg) {
    this.selectedKeg = clickedKeg;
    if(clickedKeg.pints >1){
      clickedKeg.pints -= 2;
    }
  }

  largeGrowler(clickedKeg) {
    this.selectedKeg = clickedKeg;
    if(clickedKeg.pints >3){
      clickedKeg.pints -= 4;
    }
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
