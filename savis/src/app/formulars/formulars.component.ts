import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-formulars',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './formulars.component.html',
  styleUrl: './formulars.component.css'
})
export class FormularsComponent {
  showFormular = false;
  showModal = false;

  changeFormular(){
    this.showFormular = true;
  }

  changeModal(){
    this.showModal = true;
  }
  items = [
    { index: 1, text: 'Žiadosť a podklady k úhrade konferenčného poplatku' },
    { index: 2, text: 'Výučtovanie pracovnej cesty' },
    { index: 3, text: 'Príkaz na pracovnú cestu' },
    { index: 3, text: 'Krycí list k vyúčtovaniu služobnej cesty' },
    { index: 3, text: 'Žiadanka na zálohu na pracovnú cestu' },
  ];

  formulars = [
    { index: 1, text: 'Meno žiadateľa:' },
    { index: 2, text: 'Názov konferencie:' },
    { index: 3, text: 'Termín konferencie:' },
    { index: 3, text: 'Celková suma na úhradu:' },
    { index: 4, text: 'Beneficiary Name (názov príjemcu):' },
    { index: 5, text: 'Adresa príjemcu:' },
    { index: 6, text: 'Banka príjemcu:' },
    { index: 7, text: 'IBAN (ak krajina používa IBAN):' },
    { index: 8, text: 'SWIFT/BIC:' },
    { index: 9, text: 'Intermediary Bank (Sprostredkujúca banka):' },
    { index: 10, text: 'SWIFT/BIC:' },
    { index: 11, text: 'Účet v sprostredkujúcej banky(v prípade ak je známy):' },
  ];
}
