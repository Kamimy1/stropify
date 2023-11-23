import { Component } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {

  dynamicTitle = '';

  constructor() {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      this.dynamicTitle = '¡Buenos días!';
    } else if (currentHour < 20) {
      this.dynamicTitle = '¡Buenas tardes!';
    } else {
      this.dynamicTitle = '¡Buenas noches!';
    }
  }

}
