import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/global.css';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';
import reportWebVitals from './reportWebVitals';
import { ModalProvider } from './components/Modal/ModalContext';

const queryClient = new QueryClient({});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
