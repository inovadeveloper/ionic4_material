import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class AlertService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'alert';

    getTitle = (): string => 'Alert';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'alert/0', 'title': 'Alert Info', 'theme': 'layout1' },
            { 'url': 'alert/1', 'title': 'Alert Warning', 'theme': 'layout2' },
            { 'url': 'alert/2', 'title': 'Alert Subscribe', 'theme': 'layout3' }
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
            'toolbarTitle': 'Alert Info',
            "items": [
                {
                    "id": 1,
                    "image": "assets/imgs/background/9.jpg",
                    "title": "Smart Watch",
                    "subtitle": "Category: Watch",
                },
                {
                  "id": 2,
                  "image": "assets/imgs/background/6.jpg",
                  "title": "Digital Watch",
                  "subtitle": "Category: Watch",
                },
                {
                  "id": 3,
                  "image": "assets/imgs/background/21.jpg",
                  "title": "Longest bridge in world",
                  "subtitle": "Category: Bridge",
                },
                {
                  "id": 4,
                  "image": "assets/imgs/background/10.jpg",
                  "title": "Classical guitar",
                  "subtitle": "Category: Guitars",
                },
                {
                  "id": 4,
                  "image": "assets/imgs/background/13.jpg",
                  "title": "Bass guitars",
                  "subtitle": "Category: Guitars",
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Alert Warning',
            "items": [
                {
                    "id": 1,
                    "category": "best offer",
                    "image": "assets/imgs/background/34.jpg",
                    "title": "New Floral Printing Slim Turndown Neck ",
                    "iconLike": "thumbs-up",
                    "iconComment": "ios-chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 2,
                    "category": "best offer",
                    "image": "assets/imgs/background/35.jpg",
                    "title": "Lapel Patchwork Long Sleeve Shirt",
                    "iconLike": "thumbs-up",
                    "iconComment": "ios-chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 3,
                    "category": "best offer",
                    "image": "assets/imgs/background/36.jpg",
                    "title": "Tidebuy Unique Floral Mens Casual Shirt",
                    "iconLike": "thumbs-up",
                    "iconComment": "ios-chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 4,
                    "category": "best offer",
                    "image": "assets/imgs/background/16.jpg",
                    "title": "Plain Lapel Single Breasted Mens Shirt",
                    "iconLike": "thumbs-up",
                    "iconComment": "ios-chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 5,
                    "category": "best offer",
                    "image": "assets/imgs/background/38.jpg",
                    "title": "Oblique Single Breasted Mens Slim Shirt",
                    "iconLike": "thumbs-up",
                    "iconComment": "ios-chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 6,
                    "category": "best offe",
                    "image": "assets/imgs/background/37.jpg",
                    "title": "Embroidery Lapel Straight Mens Shirt",
                    "iconLike": "thumbs-up",
                    "iconComment": "ios-chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Alert Subscribe',
            "items": [
                {
                    "id": 1,
                    "image": "assets/imgs/background/14.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "James Brown at Boston Garden",
                    "description": "On April 4th, 1968, Martin Luther King Jr. was assassinated in Memphis. In the aftermath, America burned...",
                    "iconLike": "thumbs-up",
                    "iconComment": "ios-chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 2,
                    "image": "assets/imgs/background/15.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Elvis Comeback Special",
                    "description": "Elvis was hardly ever nervous,” says drummer D.J. Fontana, remembering the NBC special that relaunched...",
                    "iconLike": "thumbs-up",
                    "iconComment": "ios-chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 3,
                    "image": "assets/imgs/background/13.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Cream Farewell Tour",
                    "description": "Eric Clapton ended Cream in 1968 after only two years, burned out and sick of keeping the peace between...",
                    "iconLike": "thumbs-up",
                    "iconComment": "ios-chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 4,
                    "image": "assets/imgs/background/11.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Led Zeppelin World Tour",
                    "description": "Before the private planes, mountains of cocaine and allegations of black magic, Led Zeppelin were four...",
                    "iconLike": "thumbs-up",
                    "iconComment": "ios-chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 5,
                    "image": "assets/imgs/background/10.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Black Sabbath American Tour",
                    "description": "When Black Sabbath landed at JFK Airport for their first U.S. tour, Ozzy Osbourne scrawled “Satanist” as his...",
                    "iconLike": "thumbs-up",
                    "iconComment": "ios-chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                },
                {
                    "id": 6,
                    "image": "assets/imgs/background/15.jpg",
                    "time": "MARCH 14, 2017",
                    "title": "Elton John at the Troubadour",
                    "description": "When Elton John took the stage at Los Angeles’ Troubadour for the first night of his six-date residency...",
                    "iconLike": "thumbs-up",
                    "iconComment": "ios-chatbubbles",
                    "numberLike": "12",
                    "numberCommnet": "4",
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        const that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('alert/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
