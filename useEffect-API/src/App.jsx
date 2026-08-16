import './App.css'
import DataFetching from './DataFetching'
import FetchCatFacts from './FetchCatFacts'
import PredictAge from './PredictAge'


function App() {

  return (
    <>
      <h1>API in useEffect </h1>
      <DataFetching />
      <FetchCatFacts/>
      <PredictAge/>
    </>
  )
}

export default App
