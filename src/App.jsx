import React from 'react';
import './static/style.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Music from './pages/Music';
import Kids from './pages/Kids';
import Collection from './pages/Collection';

import Moods from './pages/Moods';
import New from './pages/New';
import Chart from './pages/Chart';
import Neuromusic from './pages/Neuromusic';
import Collections from './pages/Collections';

function App(props) {
    return (

        <div className="App">

            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/music' element={<Music/>}/>
                <Route path='/kids' element={<Kids/>}/> 
                <Route path='/moods' element={<Moods/>}/>
                <Route path='/new' element={<New/>}/>
                <Route path='/chart' element={<Chart/>}/>
                <Route path='/collections' element={<Collections/>}/>
                <Route path='/neuromusic' element={<Neuromusic/>}/>
                <Route path='/collection' element={<Collection/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
