import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  standalone: false,

  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  @Input() stars!: number;

  @Input() size: number = 2;

  get styles() {
    return {
      'width.rem': this.size,
      'height.rem': this.size,
      'maginRight.rem': this.size / 6,
    };
  }

  getStarImage(current: number): string {
    const previousHalf = current - 0.5;
    const imageName =
      this.stars >= current
        ? 'star-full'
        : this.stars >= previousHalf
        ? 'star-half'
        : 'star-empty';
    return `/assets/images/stars/${imageName}.png`;
  }
}
