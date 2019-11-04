import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Homepage from '../components/pages/Homepage';
import Categories from './Categories';
import Articles from './Articles';
import Article from './Article';
import Category from './Category';
import Login from './Admin/Login';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/categories" component={Categories} />
        <Route path="/articles" component={Articles} />
        <Route path="/article/:slug" exact component={Article} />
        <Route path="/category/:slug" exact component={Category} />
        <Route path="/login" exact component={Login} />
        <Route render={() => <div>404</div>} />
      </Switch>
    </Layout>
  );
}

export default App;
