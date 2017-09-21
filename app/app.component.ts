import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1><marquee>Tap Room</marquee></h1>
  <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
  <hr>
  <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
  <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
`
})
export class AppComponent {
  selectedKeg: Keg = null;

masterKegList: Keg[] = [
  new Keg("Hefeweisen", "kateBrand", 11, 8.5),
  new Keg("Stout", "kiraBrand", 6, 5.3),
  new Keg("Blond", "perryBrand", 3, 4.3)
];

  editKeg(keg) {
    this.selectedKeg = keg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegToAdd: Keg) {
    this.masterKegList.push(newKegToAdd);
  }
}
