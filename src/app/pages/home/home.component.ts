import { Component, inject, Input } from '@angular/core';
import { ArtisanInterface } from '../../artisanInterface';
import { ArtisansService } from '../../artisans.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Input() artisanInterface!: ArtisanInterface;
  artisansList: ArtisanInterface[] = [];
  artisansService: ArtisansService = inject(ArtisansService);
  ArtisansService: any = [];

  constructor() {
    this.artisansList = this.artisansService.getTopArtisan();
  }
}
