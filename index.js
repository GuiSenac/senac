import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Title from './componentes/Title';
import Description from './componentes/description';
import Image from './componentes/image';
import Container from './componentes/Container';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title/>
    <Description/>
    
    <Container></Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

