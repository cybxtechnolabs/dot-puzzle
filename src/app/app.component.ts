import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-hero';
  sliderOption: Options;
  valueTop: number = 0;
  valueBottomLeft: number = 0;
  valueBottomRight: number = 0;

  constructor(){
    this.sliderOption = {
      floor: 0,
      ceil: 100,
      showSelectionBar: true
    };
  }

}
