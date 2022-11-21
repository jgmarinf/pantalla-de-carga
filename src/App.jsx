import { useState } from 'react'
import './App.css'
import CardCountry from './components/CardCountry';
import Loading from './components/Loading';
import useRegion from './hooks/useRegion';

function App() {
  const {api, loading} = useRegion()
  
  return (
    <div className="App">
     {
      loading ? <Loading/>
        :
      api?.map(country => (
        <CardCountry 
          country ={country}
          key={country.area} 
        />
      ))
     }
    </div>
  )
}

export default App
