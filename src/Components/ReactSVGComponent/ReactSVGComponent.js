import React from 'react';
import ReactSVG from 'react-svg';
import mess from "assets/mess.svg";
const image = Object.entries(mess).length === 0 ? "a.svg": mess;
const ReactSVGComponet =()=> <div><ReactSVG src={image} /></div>;
export default ReactSVGComponet;
