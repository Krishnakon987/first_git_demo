import * as React from 'react';
import { random } from '@microsoft/sp-lodash-subset';
import { Guid, RandomNumberGenerator } from '@microsoft/sp-core-library';

export  interface IImageComponentProps {
  ImageDescription:string;
  ImageType:string;

}

export interface IImageComponentState{
  StateVariable: string;
  data:any[];
}

export class ImageComponent extends React.Component<IImageComponentProps,IImageComponentState> {
  private RenderVaribale= 0;
  public constructor(props:IImageComponentProps){
    super(props);
    
    this.state={
      StateVariable:"I am initial State Image  Decriptions",
     data:[],
    };
    this.changevariable=this.changevariable.bind(this);
  }
  public componentDidMount(){
    var template=[];
    for (let index = 0; index < 10; index++) {
      template.push(
        {
          key:index,
          Value:"value"+index,
          randomNumber:random(500),
          guid:Guid.newGuid().toString()
        });   
    }
    setTimeout(() => {
     this.setState({data:template});
   }, 5000);
 
  }
  
     
  
  
  public render(): React.ReactElement<IImageComponentProps> {
    this.RenderVaribale += 1;
    return (
     
    <React.Fragment>
    
    
    <div>
       I am content of Image Component!!!
       <div> Image Description: {this.props.ImageDescription}</div>
      <div>  Image Type: {this.props.ImageType}</div> 
       Image Description Variable={this.state.StateVariable}


      <div> <button onClick={this.changevariable}>ChangeState</button></div>

    <p>Render Variable:{this.RenderVaribale}</p>
    
      </div> 
      <div>
        <p>Example of Table</p>
      <table>
        <tr>
          <th>key</th>
          <th>randomNumber</th>
          <th>value</th>
          <th>guid</th>
        </tr>
        
        {this.state.data.map((item:any,index:number)=>
      (
        <tr>
          <td>{item.key}</td>
          <td>{item.randomNumber} </td>
          <td>{item.Value}</td>
          <td>{item.guid} </td>
        </tr>

              )        )
             }
      </table>   
        </div> 
     

    </React.Fragment>
    );
    
  }
  ///Method
  private changevariable(): void {
   this.setState({
    StateVariable:"State variable changed",
   });
  }
}
