import React from 'react';
import './Button.css'; // Import external CSS file

function Button(props){
  return (
    <button className="button" style={{ color: props.fontColor, backgroundColor: props.backgroundColor ,borderRadius:props.borderRadius,padding:props.padding,fontSize:props.fontSize}}>
      {props.children}
    </button>
  );
};

export default Button;