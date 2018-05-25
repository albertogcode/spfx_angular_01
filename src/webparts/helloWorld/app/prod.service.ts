import { Injectable } from '@angular/core';
import pnp, { List, ItemAddResult } from 'sp-pnp-js';
import { iService, item } from './interface';
//import { Observable } from 'rxjs/Rx'
import { utilities } from '../../utilities';
import { ODataDefaultParser } from "sp-pnp-js";

// servicio producción
@Injectable()
export default class prodService implements iService {
    private listUrl: string = '/lists/Mi Lista';
    //private items: item[];
    public itemsCount: number;

    constructor() {
        utilities.logger('prodService > constructor');
    }

    public getItems(): Promise<item[]> {
        utilities.logger('prodService > getItems');
        return pnp.sp.web.getList(this.listUrl).items.select('Id', 'Title').get().then(items => {
            this.itemsCount = items.length;
            return items;
        });
    }

    public getItem(id:number):Promise<item>{
        utilities.logger('prodService > getItem('+ id + ')');
        return pnp.sp.web.getList(this.listUrl).items.getById(id).get().then(item => {            
            return item;
        });
    }

    public getListName(): Promise<string> {
        utilities.logger('prodService > getListName');        
        return pnp.sp.web.getList(this.listUrl).select('Title', 'ItemCount','ListId',).get().then(l => {
            this.itemsCount = l.ItemCount;
            return l.Title;
        });
    }

    public addItem(item: item): Promise<string> {
        utilities.logger('prodService > addItem');
        return pnp.sp.web.getList(this.listUrl).items.add(item).then((e: ItemAddResult) => {
            this.itemsCount++;
            return 'Insertado correctamente elemento ' + e.data.Id;
        });
    }

    public getItemsCount(): number {
        return this.itemsCount;
    }

}