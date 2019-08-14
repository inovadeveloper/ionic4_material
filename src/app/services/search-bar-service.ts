import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class SearchBarService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getTitle = (): string => 'Search bars';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'search-bars/0', 'title': 'Simple', 'theme': 'layout1' },
            { 'url': 'search-bars/1', 'title': 'Field + header', 'theme': 'layout2' },
            { 'url': 'search-bars/2', 'title': 'Field + header 2', 'theme': 'layout3' }
        ];
    }

    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    }

    //* Data Set for page 1
    getDataForLayout1 = (): any => {
        return {
            'toolbarTitle': 'Simple',
            "items": [
                {
                    "title": "friends",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "image": "assets/imgs/background/1.jpg"
                },
                {
                    "title": "enemies",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "image": "assets/imgs/background/2.jpg"
                },
                {
                    "title": "neutral",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "image": "assets/imgs/background/3.jpg"
                },
                {
                    "title": "family",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "image": "assets/imgs/background/4.jpg"
                },
                {
                    "title": "guests",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "image": "assets/imgs/background/5.jpg"
                },
                {
                    "title": "students",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "image": "assets/imgs/background/6.jpg"
                },
                {
                    "title": "friends",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "image": "assets/imgs/background/7.jpg"
                },
                {
                    "title": "enemies",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "image": "assets/imgs/background/8.jpg"
                },
                {
                    "title": "neutral",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "image": "assets/imgs/background/9.jpg"
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Field + header',
            "title": "Just type",
            "headerImage": "assets/imgs/background/1.jpg",
            "items": [
                {
                    "title": "iPhone 8",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/imgs/avatar/1.jpg",
                    "button": "BUY"
                },
                {
                    "title": "500+",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/imgs/avatar/2.jpg",
                    "button": "BUY"
                },
                {
                    "title": "watch black",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/imgs/avatar/3.jpg",
                    "button": "BUY"
                },
                {
                    "title": "canon photoaparat",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/imgs/avatar/4.jpg",
                    "button": "BUY"
                },
                {
                    "title": "50mm",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/imgs/avatar/5.jpg",
                    "button": "BUY"
                },
                {
                    "title": "nikon photoaparat",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/imgs/avatar/6.jpg",
                    "button": "BUY"
                },
                {
                    "title": "sony PS 4",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/imgs/avatar/7.jpg",
                    "button": "BUY"
                },
                {
                    "title": "watch new",
                    "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "avatar": "assets/imgs/avatar/8.jpg",
                    "button": "BUY"
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Field + header 2',
            "title": "Search Friends",
            "items": [
                {
                    "id": 1,
                    "title": "justine robinson",
                    "subtitle": "@justine",
                    "detail": "Berlin",
                    "avatar": "assets/imgs/avatar/22.jpg"
                },
                {
                    "id": 2,
                    "title": "ruben escribano",
                    "subtitle": "@ruben",
                    "detail": "Casablanca",
                    "avatar": "assets/imgs/avatar/23.jpg"
                },
                {
                    "id": 3,
                    "title": "abbie wilson",
                    "subtitle": "@abbie453",
                    "detail": "Cape Town",
                    "avatar": "assets/imgs/avatar/24.jpg"
                },
                {
                    "id": 4,
                    "title": "laura sarabia",
                    "subtitle": "@laura",
                    "detail": "New Taipei City",
                    "avatar": "assets/imgs/avatar/19.jpg"
                },
                {
                    "id": 5,
                    "title": "lizzie rose",
                    "subtitle": "@lizzie",
                    "detail": "Jakarta",
                    "avatar": "assets/imgs/avatar/20.jpg"
                },
                {
                    "id": 6,
                    "title": "fernando villegas",
                    "subtitle": "@fernando",
                    "detail": "São Paulo",
                    "avatar": "assets/imgs/avatar/21.jpg"
                },
                {
                    "id": 7,
                    "title": "theresa stewart",
                    "subtitle": "@theresa",
                    "detail": "Guangzhou",
                    "avatar": "assets/imgs/avatar/16.jpg"
                },
                {
                    "id": 8,
                    "title": "helena scott",
                    "subtitle": "@helena44",
                    "detail": "Shanghai",
                    "avatar": "assets/imgs/avatar/17.jpg"
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('searchBars/' + item.theme)
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
