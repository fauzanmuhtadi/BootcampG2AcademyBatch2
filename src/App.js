import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Giro, Home, Informasi, Login, Paket, Prabayar, Registrasi, Tabungan } from './pages';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/registrasi' component={Registrasi} />
          <Route path='/beranda/:id' component={Home} />
          <Route path='/informasi/:id' component={Informasi} />
          <Route path='/tabungan/:id' component={Tabungan} />
          <Route path='/giro/:id' component={Giro} />
          <Route path='/prabayar/:id' component={Prabayar} />
          <Route path='/paket/:id' component={Paket} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
