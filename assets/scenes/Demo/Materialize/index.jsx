import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';
import { Dropdown, Button } from 'react-materialize';

const App = () =>
  <Dropdown trigger={
    <Button>Drop me!</Button>
  }>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
    <p>Bye</p>
  </Dropdown>;

ReactDOM.render(
  <App />, document.getElementById('application')
);
