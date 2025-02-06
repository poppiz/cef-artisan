import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisanInterface } from '../../artisanInterface';
import { ArtisansService } from '../../artisans.service';
@Component({
  selector: 'app-details',
  standalone: false,

  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  artisansService: ArtisansService = inject(ArtisansService);
  artisansList: ArtisanInterface[] = [];
  artisanInterface: ArtisanInterface | undefined | any;
  productId = -1;

  constructor() {
    const productId = Number(this.route.snapshot.params['id']);
    this.artisanInterface = this.artisansService.getArtisanById(productId);
  }

  send() {
    alert(`Votre demande a bien été envoyée à ${this.artisanInterface.name}`);
  }
}
