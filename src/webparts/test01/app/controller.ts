import { Component, OnInit, Input } from '@angular/core';
import pnp, { List, ItemAddResult, ODataDefaultParser } from 'sp-pnp-js';
import { utilities } from '../../utilities';
import { iService, getService } from './service';

@Component({
    selector: 'test01-root',
    templateUrl: './template.html'
})

export class controller implements OnInit {
    public message: string;
    public service: iService

    constructor() {
        this.message = 'Cargando...';
        this.service = getService();
    }

    public ngOnInit(): void {
        this.message = 'Cargando ' + this.service.getValue();
    }

    public descargar(): void {
        this.message = 'Descargado';
    }

}