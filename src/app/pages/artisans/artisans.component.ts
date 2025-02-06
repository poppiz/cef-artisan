import { Component, Input, inject } from '@angular/core';
import { ArtisanInterface } from '../../artisanInterface';
import { ArtisansService } from '../../artisans.service';
@Component({
  selector: 'app-artisans',
  standalone: false,

  templateUrl: './artisans.component.html',
  styleUrl: './artisans.component.scss',
})
export class ArtisansComponent {
  @Input() artisanInterface!: ArtisanInterface;

  filteredArtisansList: ArtisanInterface[] = [];
  artisansList: ArtisanInterface[] = [];

  artisansService: ArtisansService = inject(ArtisansService);

  constructor() {
    this.artisansList = this.artisansService.getAllArtisans();
    this.filterResult();
  }

  filterResult() {
    this.filteredArtisansList = this.artisansList.filter(
      (artisanInterface) =>
        artisanInterface?.name
          .toLowerCase()
          .includes(this.artisansService.recherche.toLowerCase()) ||
        artisanInterface?.location
          .toLowerCase()
          .includes(this.artisansService.recherche.toLowerCase()) ||
        artisanInterface?.speciality
          .toLowerCase()
          .includes(this.artisansService.recherche.toLowerCase())
    );
  }
}
