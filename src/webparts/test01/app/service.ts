//import { Injectable } from "@angular/core";
import { CommonModule } from '@angular/common';
import { utilities } from '../../utilities';
import { Environment, EnvironmentType } from "@microsoft/sp-core-library";
import { Component, NgModule, Input, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebPartContext } from '@microsoft/sp-webpart-base';



export interface iService {
    getValue(): string;
}

//@Injectable()
export class mockService implements iService {
    constructor() {
        utilities.logger('mockService > constructor');
    }

    getValue(): string {
        utilities.logger('mockService > getValue');
        return 'Valor desde mock';
    }
}

//@Injectable()
export class prodService implements iService {
    constructor() {
        utilities.logger('prodService > constructor');
    }

    getValue(): string {
        utilities.logger('prodService > getValue');
        return 'Valor desde prod';
    }
}

export function getService(): iService {
   if (utilities.isEnvironmentProduction()) {   
        return new prodService();
    }
    else {
        return new mockService();
    }
}