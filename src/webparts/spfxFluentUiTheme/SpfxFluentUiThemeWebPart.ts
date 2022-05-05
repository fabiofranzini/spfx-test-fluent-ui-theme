import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'SpfxFluentUiThemeWebPartStrings';
import SpfxFluentUiTheme from './components/SpfxFluentUiTheme';
import { ISpfxFluentUiThemeProps } from './components/ISpfxFluentUiThemeProps';

export interface ISpfxFluentUiThemeWebPartProps {
  description: string;
}

export default class SpfxFluentUiThemeWebPart extends BaseClientSideWebPart<ISpfxFluentUiThemeWebPartProps> {

  private currentTheme: IReadonlyTheme | undefined;

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<ISpfxFluentUiThemeProps> = React.createElement(
      SpfxFluentUiTheme,
      {
        currentTheme: this.currentTheme
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    this.currentTheme = currentTheme;
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
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
