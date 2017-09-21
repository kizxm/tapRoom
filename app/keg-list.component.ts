import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `

  <div>
  <br>
  <div class="well">
  <br>
  <label> Enter a max price: </label>
  <input #maxPrice>
    <button (click)="sortKegs(maxPrice.value)" class="btn btn-secondary">Filter</button>
    <br>
    <br>
  </div>
  </div>

  <div [class]="priceColor(currentKeg)" *ngFor="let currentKeg of childKegList |priceFilter:filterPriceSender">
  <div class="box">

  <div role="tooltip" class="tooltip top custom-tooltip">
  	<div class="tooltip-arrow"></div>
  	<div class="tooltip-inner">Running Low!</div>
  </div>


  <div [class]="inform(currentKeg)"><font size="5"> {{currentKeg.name}} </font></div>
  <li>Brand: {{currentKeg.brand}}</li>
  <li [class]="getFontSize(currentKeg)">Pint Price: $ {{currentKeg.price}}</li>
  <li>Content: {{currentKeg.alcoholContent}}%</li>
  <li>Pints left: {{currentKeg.volume}}</li>
  <hr noshade>
  <button (click) = "sellAPint(currentKeg)" type="btn"  class="btn btn-blue">Sell a pint</button>
  <button (click) = "editButtonHasBeenClicked(currentKeg)" type="btn" class="btn btn-beer">Edit</button>
  </div>
  </div>



  `
})

export class KegListComponent {
  filterPriceSender: number = -1;
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
      this.clickSender.emit(kegToEdit);
    }

    ///..now effects on ABV..///
    priceColor(currentKeg) {
      if (currentKeg.alcoholContent < 5) {
        return "color1";
      } else if (currentKeg.alcoholContent < 7) {
        return "color2";
      } else {
        return "color3";
      }
    }


///..now effects on price..///
    getFontSize(keg) {
    if (keg.price < 6) {
      return "weak";
    } else if (keg.price < 10) {
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

    sortKegs(num: number) {
      console.log("entered number is " + num);
      this.filterPriceSender = num;
      console.log("number is passed" + num);
    }
}
