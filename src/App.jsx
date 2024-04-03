import Header from "./components/Header";
import Filter from "./components/Filter/index2";
import Cards from './components/Cards/index3';
import { useState } from "react";
import { list, list2 } from "./assets/cards-list";


function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <>
      <Header/>
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter == 0 ? <Cards list= {list} /> : <Cards list={list2} />}
    </>
  )
}

export default App;
