import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor, CommonModule, PlayerComponent, MatIconModule, MatButtonModule,],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})


export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game: Game = new Game();

  ngOnInit(): void {
    this.newGame();
  }
  newGame() {
    this.game = new Game();
  }
  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      setTimeout(() => {
        if (this.currentCard !== undefined) {
          this.game.playedCards.push(this.currentCard);
        }
        this.pickCardAnimation = false;
      }, 1000);
    }
  }
}
