
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../views/Home';
// import Meal from '../views/Meal';

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Switch>
        {/* <Route path="/meal/:id" component={Meal} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </>
);

export default App;
