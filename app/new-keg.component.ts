import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
        <h1> New Keg </h1>
        <div>
        <label> Name: </label>
        <input #newName>
        </div>
        <div>
        <label> Brand:</label>
        <input #newBrand>
        </div>
        <div>
        <label> Price: </label>
        <input #newPrice>
        </div>
        <div>
        <label> Alcohol Content: </label>
        <input #newContent>
        </div>
        <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newContent.value); newName.value=''; newBrand.value=''; newPrice.value = ''; newContent.value='';">Add</button>
        `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(kegName: string, kegBrand: string,  kegPrice: number, kegContent: number) {
    var newKeg: Keg = new Keg(kegName, kegBrand, kegPrice, kegContent);
    this.newKegSender.emit(newKeg);
   }
}
