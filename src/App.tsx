import React, {useEffect} from 'react';
import store from './store';
import {Provider, useSelector} from 'react-redux';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Albums from './pages/albums/Albums';
import Album from './pages/album/Album';
import ProtectedRouter from "./components/ProtectedRouter/ProtectedRouter";

export type AppDispatch = typeof store.dispatch;

function App() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route
                    path="/albums"
                    element={
                        <ProtectedRouter>
                            <Albums />
                        </ProtectedRouter>
                    }
                />
              <Route path="/" element={<Home />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/album/:id" element={<Album />} />
            </Routes>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
