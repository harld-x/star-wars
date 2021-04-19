import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import styles from './App.module.css';

import routesConfig from '@routes/routesConfig'
import {Header} from '@components/Header/Header'

const App = () => {
  return (
    <>
    <Router>
      <div className={styles.wrapper}>
            <Header/> 
          <Switch>
              {
                routesConfig.map((route, index) => (
                  <Route 
                      key={index}
                      path={route.path} 
                      exact={route.exact} 
                      component={route.component} 
                  />     
                ))
              }
          </Switch>
        </div>
    </Router>
    </>
  );
}

export default App;

