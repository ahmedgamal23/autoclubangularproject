import { Component } from '@angular/core';
import { OurservicesComponent } from '../ourservices/ourservices.component';
import { OurprojectsComponent } from '../ourprojects/ourprojects.component';

@Component({
  selector: 'app-home',
  imports: [OurservicesComponent, OurprojectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
