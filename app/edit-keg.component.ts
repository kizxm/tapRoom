import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'edit-keg',
  template: `
<div *ngIf="childSelectedKeg">
  <div class="well">
  <label>Enter new beer name:</label>
  <input [(ngModel)]="childSelectedKeg.name">
  <br>
  <label>Enter new beer brand:</label>
  <input [(ngModel)]="childSelectedKeg.brand">
  <br>
  <label>Enter new beer price:</label>
  <input [(ngModel)]="childSelectedKeg.price">
  <br>
  <label>Enter new alcohol content:</label>
  <input [(ngModel)]="childSelectedKeg.alcoholContent">
  <button (click)="doneButtonClicked()">Done</button>
  </div>
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
