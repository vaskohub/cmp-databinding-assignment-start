import {Component} from '@angular/core';
import {OddComponent} from './odd.component';
import {EvenComponent} from './even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odds: number[] = [];
  evens: number[] = [];

  addOddEven(eventNumber: number): void {
    if (eventNumber % 2 === 0) {
      this.addEven(eventNumber);
    } else {
      this.addOdd(eventNumber);
    }
  }

  private addOdd(eventNumber: number): void {
    this.odds.unshift(eventNumber);
  }

  private addEven(eventNumber: number): void {
    this.evens.unshift(eventNumber);
  }
}
