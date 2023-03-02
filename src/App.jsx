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
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)

  const getDataDimension = (idDimension, page, pageSize) => {
    if (idDimension) {
      const URL = `https://rickandmortyapi.com/api/location/${idDimension}?page=${page}&residents=${pageSize}`
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
    getDataDimension(randomDimension, page, pageSize)
  }, [page, pageSize])

  const handleSubmit = e => {
    e.preventDefault()
    const dimensionSearch = e.target.searchValue.value
    getDataDimension(dimensionSearch, page, pageSize)
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
          <div className='filter__container'>
            <input className='searcher_info' autoComplete='off' id='searchValue' value={locationName} type="text" onChange={handleChangeInput} placeholder='search your dimension' />
            <LocationFilter locationName={locationName} getNewLocation={getNewLocation} />
            {
              showError ? <ErrorMessage /> : ""
            }
          </div>
        </form>
        <LocationInfo location={location} />
        <ResidentList location={location} pageSize={pageSize} />
      </div>
    </div>
  )
}

export default App
