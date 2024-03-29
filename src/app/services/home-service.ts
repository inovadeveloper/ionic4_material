import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';

@Injectable({ providedIn: 'root' })
export class HomeService {

    constructor(public af: AngularFireDatabase) { }

    // Set data for - HOME PAGE
    getData = () => {
        return {
            'toolbarTitle': 'Ionic4 UI - Brkko Theme',
            'title': 'SAVE HOURS',
            'subtitle': 'OF DEVELOPING',
            'subtitle2': 'and make apps fast as light!',
            'link': 'http://csform.com/ionic4/ionic4-UI-brkko-theme/documentation/',
            'description': 'For better understanding how our template works please read documentation.',
            'background': 'assets/imgs/background/39.jpg'
        };
    }

    load(): Observable<any> {
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('home')
                    .valueChanges()
                    .subscribe(snapshot => {
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
}
