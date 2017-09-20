import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div *ngFor="let currentKeg of childKegList">
  <div class="box">
  <div [class]="inform(currentKeg)"> {{currentKeg.name}} </div>
  <li>Brand: {{currentKeg.brand}}</li>
  <li>Pint Price: $ {{currentKeg.price}}</li>
  <li [class]="getFontSize(currentKeg)">Content: {{currentKeg.alcoholContent}}%</li>
  <li>Pints left: {{currentKeg.volume}}</li>
  <br>
  <button (click) = "sellAPint(currentKeg)" type="btn">Sell a pint</button>
  <button (click) = "editButtonHasBeenClicked(currentKeg)" type="btn">Edit</button>
  <hr noshade>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
      this.clickSender.emit(kegToEdit);
    }
    // priceColor(keg) {
    //   if (keg.price < 6) {
    //     return "bg-info";
    //   } else if (keg.price < 10) {
    //     return "bg-success";
    //   } else {
    //     return "bg-warning";
    //   }
    // }

    getFontSize(currentKeg) {
      if (currentKeg.alcoholContent < 5) {
        return "weak";
      } else if (currentKeg.alcoholContent < 7) {
        return "medium";
      } else {
        return "strong";
      }
    }

      sellAPint(keg) {
        if(keg.volume > 0) {
          keg.volume--;
        }
      }

      inform(keg) {
        if (keg.volume <= 10) {
        return "lowPints";
      }
    }

}
