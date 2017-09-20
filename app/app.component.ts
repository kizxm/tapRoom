import { Component } from '@angular/core';
import { Keg } from './keg.model';
//AFTER ADDING IN THE SECOND (EDIT) COMPONENT, EDIT BUTTON STILL DOES NOT WORK AND AFTER THE EDIT BUTTON IS PRESSED SELL A PINT NO LONGER WORKS !!!!!!
//EDIT-KEG IS WHERE IT IS BROKEN THERE IS SOMETHING WRONG WHEN THE EDIT BUTTON IS PUSHED WITH ASSIGNING THE VALUE OF IT BEING PUSHED
// THIS IS THE LAST PAGE OF CONTENT THAT WAS IMPLEMENTED
// https://www.learnhowtoprogram.com/javascript/angular-js/editing-models
//WE COMPLETED TO THE BOTTOM OF THE PAGE



@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1><marquee>Tap Room</marquee></h1>
  <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
  <hr>
  <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
  </div>
  <!--<div [class]="priceColor(currentKeg)" *ngFor="let currentKeg of kegs">
  <div class="box">
  <div [class]="inform(currentKeg)"> {{currentKeg.name}} </div>
  <li>Brand: {{currentKeg.brand}}</li>
  <li>Pint Price: $ {{currentKeg.price}}</li>
  <li [class]="getFontSize(currentKeg)">Content: {{currentKeg.alcoholContent}}%</li>
  <li>Pints left: {{currentKeg.volume}}</li>
  <br>
  <button (click) = "sellAPint(currentKeg)" type="btn">Sell a pint</button>
  <button (click) = "editKeg(currentKeg)" type="btn">Edit</button>
  <hr noshade>-->
  `
})
export class AppComponent {
  selectedKeg: Keg = null;

masterKegList: Keg[] = [
  new Keg("Hefeweisen", "kateBrand", 11, 8.5),
  new Keg("Stout", "kiraBrand", 6, 5.3),
  new Keg("Blond", "perryBrand", 3, 4.3)
];
  // priceColor(keg) {
  //   if (keg.price < 6) {
  //     return "bg-info";
  //   } else if (keg.price < 10) {
  //     return "bg-success";
  //   } else {
  //     return "bg-warning";
  //   }
  // }
  //
  // getFontSize(currentKeg) {
  //   if (currentKeg.alcoholContent < 5) {
  //     return "weak";
  //   } else if (currentKeg.alcoholContent < 7) {
  //     return "medium";
  //   } else {
  //     return "strong";
  //   }
  // }
  //
  //   sellAPint(keg) {
  //     if(keg.volume > 0) {
  //       keg.volume--;
  //     }
  //   }
  //
  //   inform(keg) {
  //     if (keg.volume <= 10) {
  //     return "lowPints";
  //   }
  // }
  //
  editKeg(keg) {
    this.selectedKeg = keg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  }
