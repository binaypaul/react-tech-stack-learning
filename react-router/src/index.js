import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Invoices from './routes/Invoices';
import Expenses from './routes/Expenses';
import Invoice from './routes/Invoice';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='invoices' element={<Invoices /> }>
            <Route index element={<p style={{padding: '1rem'}}>Select an Invoice to view</p>}/>
            <Route path=':invoiceid' element={<Invoice />} />
          </Route>
          <Route path='expenses' element={<Expenses />} />
          <Route path='*' element={<main><p>No route match this url.!</p></main>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);