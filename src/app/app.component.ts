import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-Project';
  loadedFeature = 'recipes';

  onNavigation(feature:string)
  {
    this.loadedFeature = feature;

  }
}
