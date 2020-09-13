import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import { Login, SignUp, Home, AlbumSatu, AlbumDua, AlbumTiga } from '../../pages';


class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={SignUp} title="Register"/>
				  <Scene key="home" component={Home} title="Home"/>
				  <Scene key="albumsatu" component={AlbumSatu} title="Album Satu"/>
				  <Scene key="albumdua" component={AlbumDua} title="Album Dua"/>
				  <Scene key="albumtiga" component={AlbumTiga} title="Album Tiga"/>
			    </Stack>
			 </Router>
			)
	}
}

export default Routes;