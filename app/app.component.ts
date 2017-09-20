import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1><marquee>Tap Room</marquee></h1>
  <div [class]="priceColor(currentKeg)" *ngFor="let currentKeg of kegs">
  <div class="box">
  <div [class]="inform(currentKeg)"> {{currentKeg.name}} </div>
  <li>Brand: {{currentKeg.brand}}</li>
  <li>Pint Price: $ {{currentKeg.price}}</li>
  <li [class]="getFontSize(currentKeg)">Content: {{currentKeg.alcoholContent}}%</li>
  <li>Pints left: {{currentKeg.volume}}</li>
  <br>
  <button (click) = "sellAPint(currentKeg)" type="btn">Sell a pint</button>
  <button (click) = "sellAPint(currentKeg)" type="btn">Edit</button>
  <hr noshade>
  <label>Enter new beer name:</label>
  <input [(ngModel)]="currentKeg.name">
  <br>
  <label>Enter new beer price:</label>
  <input [(ngModel)]="currentKeg.price">
  <br>
  <label>Enter new alcohol content:</label>
  <input [(ngModel)]="currentKeg.alcoholContent">
  </div>
  </div>

  `
})
export class AppComponent {
  kegs: Keg[] = [
    new Keg("Hefeweisen", "kateBrand", 11, 8.5),
    new Keg("Stout", "kiraBrand", 6, 5.3),
    new Keg("Blond", "perryBrand", 3, 4.3)
  ];

  priceColor(keg) {
    if (keg.price < 6) {
      return "bg-info";
    } else if (keg.price < 10) {
      return "bg-success";
    } else {
      return "bg-warning";
    }
  }

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
export class Keg {
  public volume: number = 12;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) {
  };


}
