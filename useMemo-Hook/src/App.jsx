import WithUseMemo from './Components/WithUseMemo'
import WithoutUseMemo from './WithoutUseMemo'

function App() {

  return (
    <>
    <h2>useMemo Hook</h2>
    {/* <WithoutUseMemo/> */}
   <WithUseMemo/>
    </>
  )
}

export default App
