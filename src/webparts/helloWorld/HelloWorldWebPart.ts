import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'HelloWorldWebPartStrings';
import HelloWorld from './components/HelloWorld';
//import IHelloWorldProps from './components/IHelloWorldProps';
import { ImageComponent, IImageComponentProps, IImageComponentState } from './components/ImageComponent';
import {sp} from '@pnp/sp';
import  "@pnp/sp/webs";
import  "@pnp/sp/lists";
import  "@pnp/sp/items/list";
import  "@pnp/sp/site-users/web";


export default interface IHelloWorldWebPartProps {
  description: string;
 
}

export default class HelloWorldWebPart extends BaseClientSideWebPart <IImageComponentProps> {
/**
   * OnInit for taking the object content of the webpart
 :Pr  */
 public OnInit():Promise<void> {
  return super.onInit().then(_=>{
  sp.setup({
    spfxContext: this.context
  });
});
}
  
  public render(): void {
    // const element: React.ReactElement<IHelloWorldProps> = React.createElement(
      
    //   HelloWorld,
    //   {
    //     description: this.properties.description
    //   }
 
    const element:React.ReactElement<IImageComponentProps>=React.createElement(
      ImageComponent,{
        ImageDescription:this.properties.ImageDescription,
        ImageType: this.properties.ImageType
        
      }
     
    );

    ReactDom.render(element, this.domElement)
    
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
