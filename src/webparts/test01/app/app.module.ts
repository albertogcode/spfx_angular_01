import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { controller } from './controller';


@NgModule({
    imports: [BrowserModule],
    declarations: [controller],
    bootstrap: [controller]
})
export class AppModule {    
}