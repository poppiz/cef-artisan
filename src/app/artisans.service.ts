import { Injectable } from '@angular/core';
import { ArtisanInterface } from './artisanInterface';
@Injectable({
  providedIn: 'root',
})
export class ArtisansService {
  protected artisansList: ArtisanInterface[] = [
    {
      id: 1,
      name: 'Vallis Bellemare',
      speciality: 'Plombier',
      note: 4,
      location: 'Vienne',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'v.bellemare@gmail.com',
      website: 'https://plomberie-bellemare.com',
      category: 'Bâtiment',
      top: false,
    },
    {
      id: 2,
      name: 'Amitee Lécuyer',
      speciality: 'Couturier',
      note: 4.5,
      location: 'Annecy',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'a.amitee@hotmail.com',
      website: 'https://lecuyer-couture.com',
      category: 'Fabrication',
      top: false,
    },
    {
      id: 3,
      name: 'Leala Dennis',
      speciality: 'Coiffeur',
      note: 4,
      location: 'Chambéry',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'l.dennos@hotmail.fr',
      website: 'https://coiffure-leala-chambery.fr',
      category: 'Services',
      top: false,
    },
    {
      id: 4,
      name: 'Chocolaterie Labbé',
      speciality: 'Chocolatier',
      note: 5,
      location: 'Grenoble',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'chocolaterie-labbe@gmail.com',
      website: 'https://chocolaterie-labbe.fr',
      category: 'Alimentation',
      top: true,
    },
    {
      id: 5,
      name: 'Claude Quinn',
      speciality: 'Bijoutier',
      note: 4,
      location: 'Aix-les-bains',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'claude.quinn@gmail.com',
      website: '',
      category: 'Fabrication',
      top: false,
    },
    {
      id: 6,
      name: 'Valérie Laderoute',
      speciality: 'Toiletteur',
      note: 4.5,
      location: 'Valence',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'v-laredoute@gmail.com',
      website: '',
      category: 'Services',
      top: false,
    },
    {
      id: 7,
      name: 'Boutot & fils',
      speciality: 'Menuisier',
      note: 4.5,
      location: 'Bourg-en-bresse',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'boutot-menuiserie@gmail.com',
      website: 'https://boutot-menuiserie.com',
      category: 'Bâtiment',
      top: false,
    },
    {
      id: 8,
      name: 'CM Graphisme',
      speciality: 'Webdesign',
      note: 4.5,
      location: 'Valence',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'contact@cm-graphisme.com',
      website: 'https://cm-graphisme.com',
      category: 'Services',
      top: false,
    },
    {
      id: 9,
      name: 'Orville Salmons',
      speciality: 'Chauffagiste',
      note: 5,
      location: 'Evian',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'o-salmons@live.com',
      website: '',
      category: 'Bâtiment',
      top: true,
    },
    {
      id: 10,
      name: 'Au pain chaud',
      speciality: 'Boulanger',
      note: 4,
      location: 'Montélimar',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'aupainchaud@hotmail.com',
      website: '',
      category: 'Alimentation',
      top: true,
    },
    {
      id: 11,
      name: 'Boucherie Dumont',
      speciality: 'Boucher',
      note: 4.5,
      location: 'Lyon',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'boucherie.dumond@gmail.com',
      website: '',
      category: 'Alimentation',
      top: false,
    },
    {
      id: 12,
      name: 'Mont Blanc Eléctricité',
      speciality: 'Electricien',
      note: 4.5,
      location: 'Chamonix',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'contact@mont-blanc-electricite.com',
      website: 'https://mont-blanc-electricite.com',
      category: 'Bâtiment',
      top: false,
    },
    {
      id: 13,
      name: 'Traiteur Truchon',
      speciality: 'Traiteur',
      note: 4,
      location: 'Privas',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'contact@truchon-traiteur.fr',
      website: 'https://truchon-traiteur.fr',
      category: 'Services',
      top: false,
    },
    {
      id: 14,
      name: 'Le monde des fleurs',
      speciality: 'Fleuriste',
      note: 4.5,
      location: 'Annonay',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'contact@le-monde-des-fleurs-annonay.fr',
      website: 'https://le-monde-des-fleurs-annonay.fr',
      category: 'Services',
      top: false,
    },
    {
      id: 15,
      name: 'Royden Charbonneau',
      speciality: 'Carrossier',
      note: 3.5,
      location: 'Saint-Priest',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'r.charbonneau@gmail.com',
      website: '',
      category: 'Services',
      top: false,
    },
    {
      id: 16,
      name: 'Ernest Carignan',
      speciality: 'Ferronier',
      note: 5,
      location: 'Le Puy-en-Velay',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'e-carigan@hotmail.com',
      website: '',
      category: 'Fabrication',
      top: false,
    },
    {
      id: 17,
      name: "C'est sup'hair",
      speciality: 'Coiffeur',
      note: 4,
      location: 'Romans-sur-Isère',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ',
      email: 'sup-hair@gmail.com',
      website: 'https://sup-hair.fr',
      category: 'Services',
      top: false,
    },
  ];

  public filter = '';
  public recherche = '';
  constructor() {}

  getAllArtisans(): ArtisanInterface[] {
    return this.artisansList;
  }

  getArtisanById(id: number): ArtisanInterface | undefined {
    return this.artisansList.find(
      (artisanInterface) => artisanInterface.id === id
    );
  }

  getTopArtisan() {
    return this.artisansList.filter((artisan) => artisan.top);
  }

  getArtisanByCategorie() {
    return this.artisansList.filter(
      (artisan) => artisan.category === this.filter
    );
  }
}
