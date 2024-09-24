import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Bahattin';
  items = [
    { description: "Frühstück", action: "No" },
    { description: "Spor", action: "No" },
    { description: "Einkaufen", action: "No" },
    { description: "Kino", action: "No" }

  ];
}
