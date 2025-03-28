import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import AsyncFunctionsPage from './routes/async-functions.tsx';
import Layout from './layout.tsx';
import UseTransitionPage from './routes/use-transition.tsx';
import UseActionStatePage from './routes/use-action-state.tsx';
import UseOptimisticPage from './routes/use-optimistic.tsx';
import RefExample from './routes/ref.tsx';
import MetadataExample from './routes/native-metadata.tsx';
import StylesheetExample from './routes/stylesheet-support.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route index element={<App />} />
            <Route path="async-functions" element={<AsyncFunctionsPage />} />
            <Route path="use-transition" element={<UseTransitionPage />} />
            <Route path="use-action-state" element={<UseActionStatePage />} />
            <Route path="use-optimistic" element={<UseOptimisticPage />} />
            <Route path="ref" element={<RefExample />} />
            <Route path="native-metadata" element={<MetadataExample />} />
            <Route path="stylesheet-support" element={<StylesheetExample />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
