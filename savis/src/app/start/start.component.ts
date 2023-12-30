import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  showInformation = false

  clickButton(){
    console.log(this.showInformation)
    this.showInformation = true;
    console.log(this.showInformation)
  }


  closeButton(){
    console.log(this.showInformation)
    this.showInformation = false;
    console.log(this.showInformation)
  }


}
