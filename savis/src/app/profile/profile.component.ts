import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
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
