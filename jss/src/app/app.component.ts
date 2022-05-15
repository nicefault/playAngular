import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jss';

  loadedMenu:string = 'tag';
  onNavigate(feature:string){
    this.loadedMenu = feature;
    console.log(this.loadedMenu);
  }
}
