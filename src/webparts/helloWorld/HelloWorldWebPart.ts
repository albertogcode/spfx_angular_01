import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

//import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';
import { utilities } from '../utilities';

//import "reflect-metadata";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
require('zone.js');

export interface IHelloWorldWebPartProps {
  description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    utilities.logger('HelloWorldWebPart > render');
    window['webPartContext'] = this.context;
    this.domElement.innerHTML = '<spfx-root>Cargando 4 ...</spfx-root>';
     utilities.logger('HelloWorldWebPart > render > bootstrapModule');
    platformBrowserDynamic().bootstrapModule(AppModule);
    //platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'zone.js' });    
    // platformBrowserDynamic().bootstrapModuleFactory(
    //   AppModule, { ngZone: 'noop' })
    //   .catch(
    //     err => console.log(err));
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
