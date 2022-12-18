import './App.css';
import { useState } from 'react'
import Banner from './components/Banner'
import FetchData from './components/FetchData'
import PageContext from './components/context/PageContext'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [page, setPage] = useState()
  return (
      <>      
      <PageContext.Provider value={[page, setPage]}>
        <Banner />
        <FetchData />
      </PageContext.Provider>
      </>
  );
}

export default App;
