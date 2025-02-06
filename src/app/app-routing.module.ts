import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessibiliteComponent } from './pages/accessibilite/accessibilite.component';
import { ArtisansComponent } from './pages/artisans/artisans.component';
import { CoockiesComponent } from './pages/coockies/coockies.component';
import { DetailsComponent } from './pages/details/details.component';
import { DonneesComponent } from './pages/donnees/donnees.component';
import { HomeComponent } from './pages/home/home.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artisan', component: ArtisansComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'mentions', component: MentionsLegalesComponent },
  { path: 'données', component: DonneesComponent },
  { path: 'accessibilite', component: AccessibiliteComponent },
  { path: 'coockies', component: CoockiesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
