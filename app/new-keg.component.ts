import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <div class="well">
        <h4>Add a New Keg </h4>
        <br>
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
        <label> ABV (%): </label>
        <input #newContent>
        </div>
        <br>
        <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newContent.value); newName.value=''; newBrand.value=''; newPrice.value = ''; newContent.value='';">Add</button>

        </div>
        `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(kegName: string, kegBrand: string,  kegPrice: number, kegContent: number) {
    var newKeg: Keg = new Keg(kegName, kegBrand, kegPrice, kegContent);
    this.newKegSender.emit(newKeg);
   }
}
