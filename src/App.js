import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Giro, Home, Informasi, Login, Paket, Prabayar, Tabungan } from './pages';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/beranda' exact component={Home} />
          <Route path='/informasi' exact component={Informasi} />
          <Route path='/tabungan' exact component={Tabungan} />
          <Route path='/giro' exact component={Giro} />
          <Route path='/prabayar' exact component={Prabayar} />
          <Route path='/paket' exact component={Paket} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
