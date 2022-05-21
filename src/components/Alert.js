import React from 'react';

const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}
function Alert(props) {
  var Widget;
  console.log(props.alert)
  if (props.alert==null){
    Widget = ()=>( 
      <div>
          <div className={`alert alert-warning alert-dismissible fade show `} role="alert">
             <p>this is a warning!</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           </div>
      </div>
    )
  }
  else{
    Widget = ()=>( 
      <div>
          <div className={` alert alert-success alert-dismissible fade show `} role="alert">
             <strong>{ capitalize(props.alert.type)}</strong>: {props.alert.msg}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           </div>
      </div>
    )
  }
  return <Widget />;
}

export default Alert; 
