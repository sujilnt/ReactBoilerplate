import React,{Component} from 'react';
import Loadable from 'react-loadable';
import mess from "assets/mess.svg";

const L1 = Loadable.Map({
	loading: () => <div>Loading</div>,
	loader: {
		reactsvgCoponent: ()=>import("react-svg"),
	},
	render(loaded,props){
		const ReactSVG = loaded.reactsvgCoponent.default;
		return <ReactSVG src={props.src} />
	}
});

class ReactSVGComponet extends Component{
	state={
		loading: false
	};
	render(){
		const image = Object.entries(mess).length === 0 ? "a.svg": mess;
		if(!this.state.loading){
			return(
				<div><L1 src={image}/></div>
			)
		}else{
			return(
				<div>Loading .....</div>
			)
		}
	}
	
}
export default ReactSVGComponet;
