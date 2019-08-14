import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ListViewGoogleCardsService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'googleCards';

    getTitle = (): string => 'Google Cards';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'google-card/0', 'title': 'Styled cards', 'theme': 'layout1' },
            { 'url': 'google-card/1', 'title': 'Styled cards 2', 'theme': 'layout2' },
            { 'url': 'google-card/2', 'title': 'Full image cards', 'theme': 'layout3' },
            { 'url': 'google-card/3', 'title': 'Full image cards with avatar', 'theme': 'layout4' }
        ];
    }

    //* Data Set for page 1
    getDataForLayout1 = (): any => {
        return {
            'toolbarTitle' : 'Styled cards',
            "items": [
                {
                    "id": 1,
                    "title": "Free Ride",
                    "backgroundImage": "assets/imgs/background/2.jpg",
                    "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                },
                {
                    "id": 2,
                    "title": "Bridge Tour",
                    "backgroundImage": "assets/imgs/background/5.jpg",
                    "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                },
                {
                    "id": 3,
                    "title": "Sea Tour",
                    "backgroundImage": "assets/imgs/background/21.jpg",
                    "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                },
                {
                    "id": 4,
                    "title": "Main Stage Event",
                    "backgroundImage": "assets/imgs/background/7.jpg",
                    "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                },
                {
                    "id": 5,
                    "title": "Classic Open Air",
                    "backgroundImage": "assets/imgs/background/11.jpg",
                    "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                },
                {
                    "id": 6,
                    "title": "Concert Summer",
                    "backgroundImage": "assets/imgs/background/14.jpg",
                    "description": "LCras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                },
                {
                    "id": 7,
                    "title": "Open Air Concerts",
                    "backgroundImage": "assets/imgs/background/10.jpg",
                    "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.."
                }
            ]
        };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle' : 'Styled cards 2',
            "items": [
                {
                    "id": 1,
                    "title": "Digital Watch",
                    "subtitle": "Category: Watch",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                    "image": "assets/imgs/background/6.jpg",
                    "price": "$144.50",
                    "button": "Buy",
                    "shareIcon": "ios-more"
                },
                {
                    "id": 2,
                    "title": "Android Watch",
                    "subtitle": "Category: Watch",
                    "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
                    "image": "assets/imgs/background/9.jpg",
                    "price": "$130.99",
                    "button": "Buy",
                    "shareIcon": "ios-more"
                },
                {
                    "id": 3,
                    "title": "Acoustic Guitars",
                    "subtitle": "Category: Guitars",
                    "description": "Icero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
                    "image": "assets/imgs/background/10.jpg",
                    "price": "$354.05",
                    "button": "Buy",
                    "shareIcon": "ios-more"
                },
                {
                    "id": 4,
                    "title": "Bass guitar",
                    "subtitle": "Category: Guitars",
                    "description": "Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
                    "image": "assets/imgs/background/13.jpg",
                    "price": "$338.99",
                    "button": "Buy",
                    "shareIcon": "ios-more"
                },
                {
                    "id": 5,
                    "title": "Classical guitar",
                    "subtitle": "Category: Guitars",
                    "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                    "image": "assets/imgs/background/15.jpg",
                    "price": "$109.60",
                    "button": "Buy",
                    "shareIcon": "ios-more"
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle' : 'Full image cards',
            "items": [
                {
                    "id": 1,
                    "category": "best offer",
                    "image": "assets/imgs/background/11.jpg",
                    "title": "Free Ride Tour",
                    "subtitle": "West Avenue, NYC",
                    "button": "$135.99"
                },
                {
                    "id": 2,
                    "category": "main event",
                    "image": "assets/imgs/background/14.jpg",
                    "title": "Open Air Concert",
                    "subtitle": "Hyde Park, London",
                    "button": "$312.99"
                },
                {
                    "id": 3,
                    "category": "Best Tourt",
                    "image": "assets/imgs/background/21.jpg",
                    "title": "Sea ture",
                    "subtitle": "Guilin, Kweilin",
                    "button": "$213.45"
                },
                {
                    "id": 4,
                    "category": "Mountain",
                    "image": "assets/imgs/background/7.jpg",
                    "title": "Mountain Trout",
                    "subtitle": "Mountain Trout Camp",
                    "button": "$338.60"
                },
                {
                    "id": 5,
                    "category": "Bridge Tour",
                    "image": "assets/imgs/background/5.jpg",
                    "title": "Bridge Tour",
                    "subtitle": "BridgeClimb, Sydney",
                    "button": "$410.85"
                },
                {
                    "id": 6,
                    "category": "best events",
                    "image": "assets/imgs/background/2.jpg",
                    "title": "Main Stage Event",
                    "subtitle": "Hyde Park, London ",
                    "button": "$516.55"
                }
            ]
        };
    }

    //* Data Set for page 4
    getDataForLayout4 = (): any => {
        return {
            'toolbarTitle' : 'Full image cards with avatar',
            'items': [
                {
                    'id': 1,
                    'avatar': 'assets/imgs/avatar/10.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '15 min ago',
                    'image': 'assets/imgs/background/16.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 2,
                    'avatar': 'assets/imgs/avatar/12.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '21 min ago',
                    'image': 'assets/imgs/background/34.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 3,
                    'avatar': 'assets/imgs/avatar/13.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '29 min ago',
                    'image': 'assets/imgs/background/35.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 4,
                    'avatar': 'assets/imgs/avatar/14.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '32 min ago',
                    'image': 'assets/imgs/background/36.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 5,
                    'avatar': 'assets/imgs/avatar/15.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '45 min ago',
                    'image': 'assets/imgs/background/37.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                },
                {
                    'id': 6,
                    'avatar': 'assets/imgs/avatar/16.jpg',
                    'avatarTitle': 'Katlynn Pouros',
                    'avatarSubtitle': 'from Los Angeles',
                    'time': '21 min ago',
                    'image': 'assets/imgs/background/38.jpg',
                    'title': 'Women in the Slaves',
                    'description': `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s`
                }
            ]
        };
    }


    getDataForTheme = (menuItem: any): Array<any> => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    }

    load(item: any): Observable<any> {
        const that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/googleCards/' + item.theme)
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
