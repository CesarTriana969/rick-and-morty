import axios from 'axios'
import { useEffect, useState } from 'react'
import ErrorMessage from './components/ErrorMessage'
import LocationFilter from './components/LocationFilter'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  const [location, setLocation] = useState()
  const [locationName, setLocationName] = useState("")
  const [showError, setShowError] = useState(false)


  const getDataDimension = (idDimension) => {
    if (idDimension) {
      const URL = `https://rickandmortyapi.com/api/location/${idDimension}`
      axios.get(URL)
        .then(res => setLocation(res.data))
        .catch(err => {
          setShowError(true)
          setTimeout(() => {
            setShowError(false)
          }, 2000);
        })
    }
  }

  useEffect(() => {
    const randomDimension = getRandomNumber()
    getDataDimension(randomDimension)
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const dimensionSearch = e.target.searchValue.value
    getDataDimension(dimensionSearch)
  }

  const handleChangeInput = (e) => {
    setLocationName(e.target.value)
  }

  const getNewLocation = (URL, name) => {
    setLocationName(name)
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))

  }

  return (
    <div className="App grid--container">
      <div className='header'>
        <div className='layer'></div>
      </div>
      <div className='container_searcher'>
        <form className='searcher' onSubmit={handleSubmit}>
          <input className='searcher_info' autoComplete='off' id='searchValue' value={locationName} type="text" onChange={handleChangeInput} placeholder='search your dimension' />
          <button className='button_info' type='submit'>Search</button>
          {
            showError ? <ErrorMessage /> : ""
          }
        </form>

        <LocationFilter locationName={locationName} getNewLocation={getNewLocation} />
        <LocationInfo location={location} />
        <ResidentList location={location} />
      </div>
    </div>
  )
}

export default App
