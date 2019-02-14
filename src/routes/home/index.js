import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import Iframe from 'react-iframe';

export default class Home extends Component {
	render() {
		return (
			<div class={`${style.home} page`}>

					<Iframe url='/embed/avatar-demo/webgl_loader_obj_mtl.html'
	        width="100%"
	        height="100%"
	        id="avatarEmbed"
	        className="iFrame"
	        display="initial"
	        position="relative"
	        allowFullScreen/>
			</div>
		);
	}
}
