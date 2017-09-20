import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'edit-keg',
  template: `
<div *ngIf="childSelectedKeg">
  <label>Enter new beer name:</label>
  <input [(ngModel)]="currentKeg.name">
  <br>
  <label>Enter new beer price:</label>
  <input [(ngModel)]="currentKeg.price">
  <br>
  <label>Enter new alcohol content:</label>
  <input [(ngModel)]="currentKeg.alcoholContent">
  <button (click)="doneButtonClicked()">Done</button>
</div>
`
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
