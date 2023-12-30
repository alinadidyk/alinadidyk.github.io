import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-registrations',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.css'
})
export class RegistrationsComponent {

}
