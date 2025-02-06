import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtisanCardComponent } from './components/artisan-card/artisan-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { RatingComponent } from './components/rating/rating.component';
import { ArtisansComponent } from './pages/artisans/artisans.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { DonneesComponent } from './pages/donnees/donnees.component';
import { AccessibiliteComponent } from './pages/accessibilite/accessibilite.component';
import { CoockiesComponent } from './pages/coockies/coockies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ArtisanCardComponent,
    ArtisansComponent,
    DetailsComponent,
    FooterComponent,
    RatingComponent,
    PageNotFoundComponent,
    FilterPipe,
    MentionsLegalesComponent,
    DonneesComponent,
    AccessibiliteComponent,
    CoockiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
