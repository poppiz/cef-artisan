import { Component, Input } from '@angular/core';
import { ArtisanInterface } from '../../artisanInterface';
@Component({
  selector: 'app-artisan-card',
  standalone: false,

  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.scss',
})
export class ArtisanCardComponent {
  @Input() artisanInterface!: ArtisanInterface;
}
