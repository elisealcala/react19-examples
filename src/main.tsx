import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import AsyncFunctions from './routes/async-functions.tsx';
import Layout from './layout.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route index element={<App />} />
            <Route path="async-functions" element={<AsyncFunctions />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
