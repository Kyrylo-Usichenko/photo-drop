import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Albums from './pages/albums/Albums';
import Album from './pages/album/Album';

export type AppDispatch = typeof store.dispatch;

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/album/:id" element={<Album />} />
            </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
