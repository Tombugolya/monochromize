import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Monochromize from './components/Monochromize';
import reportWebVitals from './tests/reportWebVitals';
import DataContextProvider from './contexts/DataContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <DataContextProvider>
          <ThemeContextProvider>
            <Monochromize />
          </ThemeContextProvider>
        </DataContextProvider>
      </Router>
    </React.StrictMode>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();
