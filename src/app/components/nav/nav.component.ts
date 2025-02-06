import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisanInterface } from '../../artisanInterface';
import { ArtisansService } from '../../artisans.service';

@Component({
  selector: 'app-nav',
  standalone: false,

  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(private router: Router) {
    this.artisansList = this.artisansService.getArtisanByCategorie();
    this.allArtisansList = this.artisansService.getAllArtisans();
    this.filteredArtisansList = this.allArtisansList;
  }
  @Input() artisanInterface!: ArtisanInterface;
  artisansService: ArtisansService = inject(ArtisansService);
  artisansList: ArtisanInterface[] = [];
  allArtisansList: ArtisanInterface[] = [];
  filteredArtisansList: ArtisanInterface[] = [];

  @Output() searchButtonClick = new EventEmitter();

  btp() {
    this.artisansService.filter = 'Bâtiment';
  }

  services() {
    this.artisansService.filter = 'Services';
  }

  alimentation() {
    this.artisansService.filter = 'Alimentation';
  }

  fabrication() {
    this.artisansService.filter = 'Fabrication';
  }

  searchPage() {
    this.artisansService.filter = 'recherche';
  }

  resetFilter() {
    this.artisansService.filter = '';
  }

  searchClick(text: string) {
    this.artisansService.filter = 'recherche';
    this.artisansService.recherche = text;
    this.searchButtonClick.emit();
  }
}
