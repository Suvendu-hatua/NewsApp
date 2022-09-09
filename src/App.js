
import './App.css';
import React,{ useState } from 'react';
import Header from './components/Header';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
function App() {
  const [progress, setprogress] = useState(0);
  return (
    <div>
      <BrowserRouter>
      <LoadingBar
        height={2}
        color='#f11946'
        progress={progress}
      />
      <Header />
        <Routes>
          <Route path="/" element={<News setprogress={setprogress} key="general"category="general" />} />
          <Route path="/business" element={<News setprogress={setprogress} key="business"category="business"/>} />
          <Route path="/entertainment" element={<News setprogress={setprogress} key="entertainment"category="entertainment"/>} />
          {/* <Route path="/" element={<News setprogress={setprogress} key="general"category="general"/>} /> */}
          <Route path="/health" element={<News setprogress={setprogress} key="health"category="health"/>} />
          <Route path="/science" element={<News setprogress={setprogress} key="science"category="science"/>} />
          <Route path="/sports" element={<News setprogress={setprogress} key="sports"category="sports"/>} />
          <Route path="/technology" element={<News setprogress={setprogress} key="technology"category="technology"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
