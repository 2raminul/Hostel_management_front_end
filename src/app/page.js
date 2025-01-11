import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store'; // Adjust the path if necessary
import App from './App'; // Main App component
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'weather-icons/css/weather-icons.css';
import 'prismjs/themes/prism.css';
import './assets/scss/styles.scss'; // Global styles

export default function Home() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
