 import{ React , useState} from 'react';
 import Textform from './Textform';
 export default function HomePage(props){
    return (
      <div>
        <div className="container my-3">
          <Textform showAlert={props.showAlert} heading = " enter the text to ananlyse below" mode={props.mode} />
        </div> 
      </div>
    )
  }