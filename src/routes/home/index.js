import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={`${style.home} page`}>

				<iframe style={{height: '100%', width:  '100%'}} src={'/embed/avatar-demo/webgl_loader_obj_mtl.html'}></iframe>

			</div>
		);
	}
}
