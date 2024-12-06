import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/*
 * Register GSAP plugins
*/
gsap.registerPlugin(useGSAP, ScrollTrigger);

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
