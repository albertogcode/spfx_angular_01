import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

//import styles from './Test01WebPart.module.scss';
import * as strings from 'Test01WebPartStrings';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { utilities } from '../utilities';
import { AppModule } from './app/app.module';
import { mockService } from './app/service';
require('zone.js');


export interface ITest01WebPartProps {
  description: string;
}

export default class Test01WebPart extends BaseClientSideWebPart<ITest01WebPartProps> {

  public render(): void {
    utilities.logger('HelloWorldWebPart > render');
    window['webPartContext'] = this.context;
    this.domElement.innerHTML = '<test01-root>Cargando test01 ...</test01-root>';
    utilities.logger('HelloWorldWebPart > render > bootstrapModule');
    platformBrowserDynamic().bootstrapModule(AppModule);   
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
