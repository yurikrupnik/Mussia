import React, {Component} from 'react';
import {render} from 'react-dom';

import 'flexboxgrid'; // load flexbox for grid system
import './styles/custom-styles.scss';

import './services/socket/client'; // connect to socket client
import {renderToDOM} from './Router/render';
renderToDOM();
