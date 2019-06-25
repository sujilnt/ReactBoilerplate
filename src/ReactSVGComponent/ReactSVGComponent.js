import React from 'react';
import ReactSVG from 'react-svg';
import mess from "../../assets/mess.svg";
console.warn(typeof(mess));
const ReactSVGComponet =()=> <div><ReactSVG src={mess} /></div>;
export default ReactSVGComponet;
