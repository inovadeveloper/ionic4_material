import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ParallaxService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Parallax';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'parallax/0', 'title': 'News List', 'theme': 'layout1' },
            { 'url': 'parallax/1', 'title': 'Profile', 'theme': 'layout2' },
            { 'url': 'parallax/2', 'title': 'Basic', 'theme': 'layout3' },
            { 'url': 'parallax/3', 'title': 'News', 'theme': 'layout4' }
        ];
    }

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    }

    //* Data Set for page 1
    getDataForLayout1 = (): any => {
        return {
          'toolbarTitle': 'Showbiz',
          "headerImage": "assets/imgs/background/9.jpg",
          "title": "Engage real-time",
          "subtitle": "Startup Pitches",
          "items": [
              {
                  "id": 1,
                  "title": "Victoria Simpson",
                  "subtitle": "Aenean pretium nunc vel rhoncus.",
                  "image": "assets/imgs/avatar/9.jpg",
                  "imageAlt": "avatar",
                  "button": "Read"
              },
              {
                  "id": 2,
                  "title": "Samantha Reynolds",
                  "subtitle": "Aenean pretium nunc vel rhoncus.",
                  "image": "assets/imgs/avatar/10.jpg",
                  "imageAlt": "avatar",
                  "button": "Read"
              },
              {
                  "id": 3,
                  "title": "Stacey Harris",
                  "subtitle": "Aenean pretium nunc vel rhoncus.",
                  "image": "assets/imgs/avatar/11.jpg",
                  "imageAlt": "avatar",
                  "button": "Read"
              },
              {
                  "id": 4,
                  "title": "Jacqueline Guyon",
                  "subtitle": "Aenean pretium nunc vel rhoncus.",
                  "image": "assets/imgs/avatar/12.jpg",
                  "imageAlt": "avatar",
                  "button": "Read"
              },
              {
                  "id": 5,
                  "title": "Mia Langevoort",
                  "subtitle": "Aenean pretium nunc vel rhoncus.",
                  "image": "assets/imgs/avatar/13.jpg",
                  "imageAlt": "avatar",
                  "button": "Read"
              },
              {
                  "id": 6,
                  "title": "Amy Simsek",
                  "subtitle": "Aenean pretium nunc vel rhoncus.",
                  "image": "assets/imgs/avatar/14.jpg",
                  "imageAlt": "avatar",
                  "button": "Read"
              },
              {
                  "id": 7,
                  "title": "Charlotte Sital",
                  "subtitle": "Aenean pretium nunc vel rhoncus.",
                  "image": "assets/imgs/avatar/15.jpg",
                  "imageAlt": "avatar",
                  "button": "Read"
              },
              {
                  "id": 8,
                  "title": "Iria Padrón",
                  "subtitle": "Aenean pretium nunc vel rhoncus.",
                  "image": "assets/imgs/avatar/16.jpg",
                  "imageAlt": "avatar",
                  "button": "Read"
              },
              {
                  "id": 9,
                  "title": "Laura Sarabia",
                  "subtitle": "Aenean pretium nunc vel rhoncus.",
                  "image": "assets/imgs/avatar/17.jpg",
                  "imageAlt": "avatar",
                  "button": "Read"
              },
              {
                  "id": 10,
                  "title": "Alexia Bañuelos",
                  "subtitle": "Aenean pretium nunc vel rhoncus.",
                  "image": "assets/imgs/avatar/18.jpg",
                  "imageAlt": "avatar",
                  "button": "Read"
              },
              {
                  "id": 11,
                  "title": "Erika Quiroz",
                  "subtitle": "Aenean pretium nunc vel rhoncus.",
                  "image": "assets/imgs/avatar/19.jpg",
                  "imageAlt": "avatar",
                  "button": "Read"
              },
              {
                  "id": 12,
                  "title": "Emma Banda",
                  "subtitle": "Aenean pretium nunc vel rhoncus.",
                  "image": "assets/imgs/avatar/20.jpg",
                  "imageAlt": "Presque Isle Harbor",
                  "button": "Read"
              }
          ]
       };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Profile',
            "headerImage": "assets/imgs/background/40.jpg",
            "avatar": "assets/imgs/avatar/22.jpg",
            "title": "Bruce Wilkerson",
            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "items": [
                {
                    "id": 1,
                    "avatar": "assets/imgs/avatar/16.jpg",
                    "title": "Abbie Kelly",
                    "subtitle": "@abbie",
                    "button": "Follow"
                },
                {
                    "id": 2,
                    "avatar": "assets/imgs/avatar/17.jpg",
                    "title": "Luna Adorno",
                    "subtitle": "@luna",
                    "button": "Follow"
                },
                {
                    "id": 3,
                    "avatar": "assets/imgs/avatar/18.jpg",
                    "title": "Tara Saunders",
                    "subtitle": "@tara",
                    "button": "Follow"
                },
                {
                    "id": 4,
                    "avatar": "assets/imgs/avatar/19.jpg",
                    "title": "Amy Lee",
                    "subtitle": "@amy",
                    "button": "Follow"
                },
                {
                    "id": 5,
                    "avatar": "assets/imgs/avatar/20.jpg",
                    "title": "Silvia Salvador",
                    "subtitle": "@silvia",
                    "button": "Follow"
                },
                {
                    "id": 6,
                    "avatar": "assets/imgs/avatar/15.jpg",
                    "title": "Patrick Wright",
                    "subtitle": "@patrick",
                    "button": "Follow"
                },
                {
                    "id": 7,
                    "avatar": "assets/imgs/avatar/22.jpg",
                    "title": "Gabriel Mascareñas",
                    "subtitle": "@gabriel",
                    "button": "Follow"
                },
                {
                    "id": 8,
                    "avatar": "assets/imgs/avatar/14.jpg",
                    "title": "Sofia Clarke",
                    "subtitle": "@stephen",
                    "button": "Follow"
                },
                {
                    "id": 9,
                    "avatar": "assets/imgs/avatar/21.jpg",
                    "title": "Milenko Draganic",
                    "subtitle": "@milenko",
                    "button": "Follow"
                },
                {
                    "id": 10,
                    "avatar": "assets/imgs/avatar/23.jpg",
                    "title": "Danijel Bilic",
                    "subtitle": "@danijel",
                    "button": "Follow"
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Product',
            "headerImage": "assets/imgs/background/9.jpg",
            "shareIcon": "ios-more",
            "items": [
                {
                    "id": 1,
                    "category": "NEW OFFER",
                    "title": "Super & Black",
                    "titleDescription" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy",
                    "subtitle": "Available Now",
                    "button": "$63.99",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "productDescriptions": [
                        {
                            "id": 1,
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                        },
                        {
                            "id": 2,
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        },
                        {
                            "id": 3,
                            "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                        },
                        {
                            "id": 4,
                            "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                        }
                    ]
                }
            ]
        };
    }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
        return {
            "toolbarTitle": "News",
            "headerImage": "assets/imgs/background/5.jpg",
            "title": "Infinit bridge made in China.",
            "subtitle": "by Myrtle Stiedemann",
            "category": "ENGINEERING",
            "avatar": "assets/imgs/avatar/23.jpg",
            "shareIcon": "ios-more",
            "items": [
                {
                    "id": 1,
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "id": 2,
                    "title": "Lorem ipsum dolor sit amet",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    "id": 3,
                    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                },
                {
                    "id": 4,
                    "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('parallax/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        this.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        this.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                this.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
