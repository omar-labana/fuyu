
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../views/Home';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../redux/slices/user';

const App = () => {
  const status = "NOT_LOGGED_IN"
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(status));
  }, [dispatch, status]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route path="/meal/:id" component={Meal} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
};

export default App;
