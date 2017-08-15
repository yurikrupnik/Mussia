import React from 'react';
import Header from '../Header';
import {staticRouter as Router, Route} from 'react-router-dom';
import RouteWithSubRoutes from '../../Utils/RouteWithRoutes';

let Micey = () => {
  return (
      <div>click for logger</div>
  )
};

function logger(event) {
    console.log('event', event);
}

const Main = ({routes}) => (
    <div>
        <Router>
            <div>
                <Header/>

                <Route path="/" exact render={()=> (<div>hello from main</div>)} />
            </div>
        </Router>
    </div>
);

export default Main;