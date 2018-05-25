import { Injectable } from '@angular/core';
import pnp, { List } from 'sp-pnp-js';
import { iService, item } from './interface';
//import { Observable } from 'rxjs/Rx'
import { utilities } from '../../utilities';
import * as Promise from 'bluebird'; // para que funcione phantomjs


// servicio mock de prueba
@Injectable()
export default class mockService implements iService {
    private items: item[];
    public itemsCount: number;

    constructor() {
        // utilities.logger('mockService > constructor');
        this.mockGetItems().then(items => {
            this.itemsCount = items.length;
            this.items = items;
        });
    }

    public getItems(): Promise<item[]> {
        utilities.logger('mockService > getItems');
        return new Promise<item[]>((resolve) => resolve(this.items));
    }

    public getListName(): Promise<string> {
        utilities.logger('mockService > getListName');
        return new Promise<string>((resolve) => resolve('Mock mi nombre lista'));
    }

    public addItem(item: item): Promise<string> {
        utilities.logger('mockService > addItem');
        if (item.Title != undefined && item.Title != '' &&
            item.Cuerpo != undefined && item.Cuerpo != '') {
            this.items.push(item);
            this.itemsCount = this.items.length;
            return new Promise<string>((resolve) => resolve('Insertado correctamente'));
        }
        else {
            return new Promise<string>((resolve) => resolve('Elemento incorrecto'));
        }
    }

    public getItemsCount(): number {
        return this.itemsCount;
    }

    public getItem(id: number): Promise<item> {
        return new Promise<item>((resolve) => resolve(this.items[0]));
    }


    private mockGetItems(): Promise<item[]> {
        let items: item[] = new Array();
        for (let i = 1; i <= 10; i++) {
            let auxItem = new item();
            auxItem.Id = i;
            auxItem.Title = 'Registro ' + i;
            auxItem.Cuerpo = '';
            items.push(auxItem);
        }

        return new Promise<item[]>((resolve) => resolve(items));
    }
}