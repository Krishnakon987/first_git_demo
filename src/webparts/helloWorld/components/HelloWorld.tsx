import * as React from 'react';
import styles from './HelloWorld.module.scss';
import IHelloWorldProps from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {ImageComponent} from './ImageComponent';


export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
  <div>
    <div> 
     <React.Fragment>
        <div className={ styles.helloWorld }>
           <div className={ styles.container }>
                   Thiss ois demo

                     
           </div>
         </div>
         <div className={ styles.container }>
        <ImageComponent  ImageDescription='Images of India' ImageType='PNG'/>

    </div>
     </React.Fragment>
    </div>
   
  </div>  
  
   
      
    );
    
  }
}
