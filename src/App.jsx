import Header from "./components/Header";
import Filter from "./components/Filter/index2";
import Cards from './components/Cards/index3';
import { useState } from "react";
import { list, list2 } from "./assets/cards-list";
import {Route, BrowserRouter, Routes } from "react-router-dom";
import Page from "./components/LoginPage/Page.jsx";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/Log" element={<Page/>} />
        </Routes>
        <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        {selectedFilter == 0 ? <Cards list= {list} /> : <Cards list={list2} />}
      </BrowserRouter>
    </>
  )
}

export default App;
