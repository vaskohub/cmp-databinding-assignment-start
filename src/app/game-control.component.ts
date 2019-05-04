import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent{
  private timerId: number;

  emittedNumber = 0;
  @Output() numberEvent = new EventEmitter<number>();

  constructor() {
  }

  startGame(): void {
    this.timerId = setInterval(() => {
      this.numberEvent.emit(++this.emittedNumber);
      console.log(`emittedNumber = ${this.emittedNumber}`);
    }, 1000);
    console.log('The game started !!!');
    console.log(`timer ID = ${this.timerId}`);
  }

  pauseGame(): void {
    if (this.isGameStarted()) {
      clearInterval(this.timerId);
      this.timerId = null;
      console.log('The game was successfully paused !!!');
    } else {
      alert('The game was not running yet!');
    }
  }

  isGameStarted(): boolean {
    return !!this.timerId;
  }
}
