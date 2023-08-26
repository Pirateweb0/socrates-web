import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

// components
import {Header} from './components/Header';
import {Content} from './components/Content';
import { Footer } from './components/Footer';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <>
    <Header />
    <Content />
    <Footer />
  </>
);