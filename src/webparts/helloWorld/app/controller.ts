import { Component, OnInit, Input } from '@angular/core';
import { iService, item } from './interface';
import { getService } from './provider.service';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { utilities } from '../../utilities';

@Component({
    selector: 'spfx-root',
    templateUrl: './template.html',  // >> por gulpfile.js la plantilla se vuelca aquí  
})

export class controller implements OnInit {
    public context: IWebPartContext;
    private isLoadingListName: boolean = false;
    private listName: string = '...';
    private itemsCount: number = 0;
    private items: item[];
    private message: string;
    public service: iService;  
    
    private body: string;
    private showDetail: boolean = false;

    constructor() {
        utilities.logger('controller > constructor');
        this.message = '';
        this.service = getService();
    }

    ngOnInit(): void {
        utilities.logger('controller > ngOnInit');
        this.context = window["webPartContext"];
        this.getListName();
    }

    getItems(): void {
        this.message = 'Cargando elementos...';
        this.showDetail = false;
        utilities.logger('controller > getItems');
        this.service.getItems().then(itemsSP => {           
            this.items = itemsSP;
            this.itemsCount = this.service.getItemsCount();
            this.message = 'Elementos cargados';
            utilities.logger('controller > getItems ok');
        });
    }

    addItem(): void {
        utilities.logger('controller > addItem');
        this.showDetail = false;
        this.message = 'Añadiendo item...';
        let itemNew: item = new item();
        itemNew.Id= this.itemsCount+1;
        itemNew.Title = 'Elemento ' + utilities.getCurrentTime();
        itemNew.Cuerpo = "Cuerpo del elemento " + utilities.getCurrentTime();
        this.service.addItem(itemNew).then(m => {
            this.message = m;
            this.itemsCount = this.service.getItemsCount();
        });
    }

    getDetail(id): void {
        this.showDetail = false;
        utilities.logger('controller > getDetail ' + id);
        this.service.getItem(id).then(item => {
            this.body = 'click en ' + id + '  Detalle: ' + item.Cuerpo;
            this.showDetail = true;
        });

    }

    getListName(): void {
        utilities.logger('controller > getListName');
        this.message = '';
        this.isLoadingListName = true;
        //Promise
        this.service.getListName().then(name => {
            utilities.logger('controller > getListName > name: ' + name);
            this.isLoadingListName = false;
            this.listName = name;
            this.itemsCount = this.service.getItemsCount();
        });

        //Observable
        // this.service.getListName().subscribe(name => {
        //     utilities.logger('controller > getListName > name: ' + name);
        //     this.isLoadingListName = false;
        //     this.listName = name;
        // });
    }


}