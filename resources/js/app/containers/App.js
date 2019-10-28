import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Homepage from '../components/pages/Homepage';
import Categories from './Categories';
import Articles from './Articles';
import Article from './Article';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/articles" exact component={Articles} />
        <Route path="/article/:id" exact component={Article} />
        <Route render={() => <div>404</div>} />
      </Switch>
    </Layout>
  );
}

export default App;
