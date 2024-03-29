import { IService } from './IService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable({ providedIn: 'root' })
export class ListViewExpandableService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'expandable';

    getTitle = (): string => 'Expandable';

    getAllThemes = (): Array<any> => {
        return [
            { 'url': 'expandable/0', 'title': 'List big image', 'theme': 'layout1' },
            { 'url': 'expandable/1', 'title': 'Full image with CTA', 'theme': 'layout2' },
            { 'url': 'expandable/2', 'title': 'Centered with header', 'theme': 'layout3' }
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
          'toolbarTitle': 'List big image',
          "header": "Catalogue",
          "items": [
              {
                  "id": 1,
                  "title": "Nikon",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/0.jpg",
                  "items": [
                      {
                          "id": 1,
                          "title": "Sony PC",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/7.jpg",
                          "details": "$399.99"
                      },
                      {
                          "id": 2,
                          "title": "Nikon Photoaparat",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/6.jpg",
                          "details": "$2058.99"
                      },
                      {
                          "id": 3,
                          "title": "Objective",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/5.jpg",
                          "details": "$89.99"
                      },
                      {
                          "id": 4,
                          "title": "Canon Photoaparat",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/4.jpg",
                          "details": "$1999.99"
                      }
                  ]
              },
              {
                  "id": 2,
                  "title": "500+",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/2.jpg",
                  "items": [
                      {
                          "id": 1,
                          "title": "Watch black",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/3.jpg",
                          "details": "$99.99"
                      },
                      {
                          "id": 2,
                          "title": "Sony PC",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/7.jpg",
                          "details": "$499.99"
                      },
                      {
                          "id": 3,
                          "title": "iPhone 8 Plus",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/1.jpg",
                          "details": "$1199.99"
                      },
                      {
                          "id": 4,
                          "title": "Canon Photoaparat",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/0.jpg",
                          "details": "$798.99"
                      }
                  ]
              },
              {
                  "id": 3,
                  "title": "Canon Photoaparat",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/4.jpg",
                  "items": [
                      {
                          "id": 1,
                          "title": "500+",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/2.jpg",
                          "details": "$589.99"
                      },
                      {
                          "id": 2,
                          "title": "Nikon Photoaparat",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/4.jpg",
                          "details": "$799.99"
                      },
                      {
                          "id": 3,
                          "title": "Objective",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/6.jpg",
                          "details": "$99.99"
                      },
                      {
                          "id": 4,
                          "title": "Sony PC",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/7.jpg",
                          "details": "$599.99"
                      }
                  ]
              },
              {
                  "id": 4,
                  "title": "iPhone 8 Plus",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/1.jpg",
                  "items": [
                      {
                          "id": 1,
                          "title": "Canon Photoaparat",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/4.jpg",
                          "details": "$412.99"
                      },
                      {
                          "id": 2,
                          "title": "Watch black",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/3.jpg",
                          "details": "$657.99"
                      },
                      {
                          "id": 3,
                          "title": "50mm",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/5.jpg",
                          "details": "$58.99"
                      },
                      {
                          "id": 4,
                          "title": "Sony PC",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/7.jpg",
                          "details": "$856.99"
                      }
                  ]
              },
              {
                  "id": 5,
                  "title": "50mm",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/5.jpg",
                  "items": [
                      {
                          "id": 1,
                          "title": "Nikon",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/6.jpg",
                          "details": "$999.99"
                      },
                      {
                          "id": 2,
                          "title": "Watch black",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/3.jpg",
                          "details": "$299.99"
                      },
                      {
                          "id": 3,
                          "title": "Sony PC",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/7.jpg",
                          "details": "$658.99"
                      },
                      {
                          "id": 4,
                          "title": "500+",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/2.jpg",
                          "details": "$158.99"
                      }
                  ]
              },
              {
                  "id": 6,
                  "title": "Nikon Photoaparat",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "image": "assets/imgs/avatar/6.jpg",
                  "items": [
                      {
                          "id": 1,
                          "title": "iPhone 8 Plus",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/1.jpg",
                          "details": "$1008.99"
                      },
                      {
                          "id": 2,
                          "title": "50mm",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/5.jpg",
                          "details": "$258.99"
                      },
                      {
                          "id": 3,
                          "title": "500+",
                          "description": "Lorem ipsum.",
                          "image": "assets/imgs/avatar/2.jpg",
                          "details": "$628.99"
                      },
                      {
                          "id": 4,
                          "title": "Sony PC",
                          "description": "Lorem ipsum",
                          "image": "assets/imgs/avatar/7.jpg",
                          "details": "$580.99"
                      }
                  ]
              }
          ]
       };
    }

    //* Data Set for page 2
    getDataForLayout2 = (): any => {
        return {
            'toolbarTitle': 'Full Image With Cta',
            "items": [
                {
                    "id": 1,
                    "title": "Open Air Concerts",
                    "subtitle": "Monday, 15th Oct. 2018",
                    "backgroundImage": "assets/imgs/background/11.jpg",
                    "icon": "ios-arrow-dropright",
                    "iconText": "Watch now",
                    "items": {
                        "iconsStars": [
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": false,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            }
                        ],
                        "reviews": "4.12 (78 reviews)",
                        "title": "Lorem ipsum dolor sit amet",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                },
                {
                    "id": 2,
                    "title": "Concert Summer",
                    "subtitle": "Wendsday, 21st Oct. 2018",
                    "backgroundImage": "assets/imgs/background/14.jpg",
                    "icon": "ios-arrow-dropright",
                    "iconText": "Watch now",
                    "items": {
                        "iconsStars": [
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": false,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            }
                        ],
                        "reviews": "4.12 (78 reviews)",
                        "title": "Lorem ipsum dolor sit amet",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                },
                {
                    "id": 3,
                    "title": "Summer Open Air Festival",
                    "subtitle": "Wendsday, 21st Oct. 2018",
                    "backgroundImage": "assets/imgs/background/13.jpg",
                    "icon": "ios-arrow-dropright",
                    "iconText": "Watch now",
                    "items": {
                        "iconsStars": [
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": false,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            }
                        ],
                        "reviews": "4.12 (78 reviews)",
                        "title": "Lorem ipsum dolor sit amet",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                },
                {
                    "id": 4,
                    "title": "Classic Open Air",
                    "subtitle": "Wendsday, 21st Oct. 2018",
                    "backgroundImage": "assets/imgs/background/10.jpg",
                    "icon": "ios-arrow-dropright",
                    "iconText": "Watch now",
                    "items": {
                        "iconsStars": [
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": true,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            },
                            {
                                "isActive": false,
                                "iconActive": "icon-star",
                                "iconInactive": "icon-star-outline"
                            }
                        ],
                        "reviews": "4.12 (78 reviews)",
                        "title": "Lorem ipsum dolor sit amet",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                }
            ]
        };
    }

    //* Data Set for page 3
    getDataForLayout3 = (): any => {
        return {
            'toolbarTitle': 'Centered With Header',
            "header": "Popular Car",
            "button": "CHOOSE",
            "items": [
                {
                    "id": 1,
                    "title": "Tesla Model S",
                    "icon": "icon-chevron-right",
                    "items": [
                      {
                          "title": "year",
                          "isChecked": "true"
                      },
                      {
                          "title": "price",
                          "isChecked": "true"
                      },
                      {
                          "title": "fuel",
                          "isChecked": "false"
                      },
                      {
                          "title": "color",
                          "isChecked": "false"
                      },
                      {
                          "title": "horse power",
                          "isChecked": "false"
                      }
                    ]
                },
                {
                    "id": 2,
                    "title": "Toyota RAV4",
                    "icon": "icon-chevron-right",
                    "items": [
                      {
                          "title": "year",
                          "isChecked": "true"
                      },
                      {
                          "title": "price",
                          "isChecked": "true"
                      },
                      {
                          "title": "fuel",
                          "isChecked": "false"
                      },
                      {
                          "title": "color",
                          "isChecked": "false"
                      },
                      {
                          "title": "horse power",
                          "isChecked": "false"
                      }
                    ]
                },
                {
                    "id": 3,
                    "title": "Audi Q5",
                    "icon": "icon-chevron-right",
                    "items": [
                      {
                          "title": "year",
                          "isChecked": "true"
                      },
                      {
                          "title": "price",
                          "isChecked": "true"
                      },
                      {
                          "title": "fuel",
                          "isChecked": "false"
                      },
                      {
                          "title": "color",
                          "isChecked": "false"
                      },
                      {
                          "title": "horse power",
                          "isChecked": "false"
                      }
                    ]
                },
                {
                    "id": 4,
                    "title": "BMW 3 Series",
                    "icon": "icon-chevron-right",
                    "items": [
                      {
                          "title": "year",
                          "isChecked": "true"
                      },
                      {
                          "title": "price",
                          "isChecked": "true"
                      },
                      {
                          "title": "fuel",
                          "isChecked": "false"
                      },
                      {
                          "title": "color",
                          "isChecked": "false"
                      },
                      {
                          "title": "horse power",
                          "isChecked": "false"
                      }
                    ]
                },
                {
                    "id": 5,
                    "title": "Audi Q7",
                    "icon": "icon-chevron-right",
                    "items": [
                      {
                          "title": "year",
                          "isChecked": "true"
                      },
                      {
                          "title": "price",
                          "isChecked": "true"
                      },
                      {
                          "title": "fuel",
                          "isChecked": "false"
                      },
                      {
                          "title": "color",
                          "isChecked": "false"
                      },
                      {
                          "title": "horse power",
                          "isChecked": "false"
                      }
                    ]
                },
                {
                    "id": 6,
                    "title": "Subaru Impreza",
                    "icon": "icon-chevron-right",
                    "items": [
                      {
                          "title": "year",
                          "isChecked": "true"
                      },
                      {
                          "title": "price",
                          "isChecked": "true"
                      },
                      {
                          "title": "fuel",
                          "isChecked": "false"
                      },
                      {
                          "title": "color",
                          "isChecked": "false"
                      },
                      {
                          "title": "horse power",
                          "isChecked": "false"
                      }
                    ]
                },
                {
                    "id": 7,
                    "title": "BMW X5",
                    "icon": "icon-chevron-right",
                    "items": [
                      {
                          "title": "year",
                          "isChecked": "true"
                      },
                      {
                          "title": "price",
                          "isChecked": "true"
                      },
                      {
                          "title": "fuel",
                          "isChecked": "false"
                      },
                      {
                          "title": "color",
                          "isChecked": "false"
                      },
                      {
                          "title": "horse power",
                          "isChecked": "false"
                      }
                    ]
                },
                {
                    "id": 8,
                    "title": "Hyundai Tucson",
                    "icon": "icon-chevron-right",
                    "items": [
                      {
                          "title": "year",
                          "isChecked": "true"
                      },
                      {
                          "title": "price",
                          "isChecked": "true"
                      },
                      {
                          "title": "fuel",
                          "isChecked": "false"
                      },
                      {
                          "title": "color",
                          "isChecked": "false"
                      },
                      {
                          "title": "horse power",
                          "isChecked": "false"
                      }
                    ]
                },
                {
                    "id": 9,
                    "title": "Lexus RX 350",
                    "icon": "icon-chevron-right",
                    "items": [
                      {
                          "title": "year",
                          "isChecked": "true"
                      },
                      {
                          "title": "price",
                          "isChecked": "true"
                      },
                      {
                          "title": "fuel",
                          "isChecked": "false"
                      },
                      {
                          "title": "color",
                          "isChecked": "false"
                      },
                      {
                          "title": "horse power",
                          "isChecked": "false"
                      }
                    ]
                },
                {
                    "id": 10,
                    "title": "Jeep Wrangler",
                    "icon": "icon-chevron-right",
                    "items": [
                      {
                          "title": "year",
                          "isChecked": "true"
                      },
                      {
                          "title": "price",
                          "isChecked": "true"
                      },
                      {
                          "title": "fuel",
                          "isChecked": "false"
                      },
                      {
                          "title": "color",
                          "isChecked": "false"
                      },
                      {
                          "title": "horse power",
                          "isChecked": "false"
                      }
                    ]
                },
                {
                    "id": 11,
                    "title": "Subaru Outback",
                    "icon": "icon-chevron-right",
                    "items": [
                      {
                          "title": "year",
                          "isChecked": "true"
                      },
                      {
                          "title": "price",
                          "isChecked": "true"
                      },
                      {
                          "title": "fuel",
                          "isChecked": "false"
                      },
                      {
                          "title": "color",
                          "isChecked": "false"
                      },
                      {
                          "title": "horse power",
                          "isChecked": "false"
                      }
                    ]
                }
            ]
        };
    }

    load(item: any): Observable<any> {
        this.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('listView/expandable/' + item.theme)
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
