import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import AppRouter from './routes/App.routes'

ReactDOM.render(<HashRouter>
  <AppRouter />
</HashRouter>, document.getElementById('root'));
