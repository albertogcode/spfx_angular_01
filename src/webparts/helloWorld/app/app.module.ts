import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { controller } from './controller';
import prodService from './prod.service';
import mockService from './mock.service';


@NgModule({
    imports: [BrowserModule],
    declarations: [controller],
    bootstrap: [controller]

})
export class AppModule { }