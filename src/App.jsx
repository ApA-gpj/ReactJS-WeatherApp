import { useState } from 'react'
import './App.css'
import ResultCard from './components/ResultCard/ResultCard'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

  const [searchData, setSearchData] = useState(null)
  const updateSearchData = (data) => {
    setSearchData(data)
  }

  return (
    <>
      <SearchBar updateSearchData={updateSearchData} />
      <ResultCard searchData={searchData} />
    </>
  )
}

export default App
