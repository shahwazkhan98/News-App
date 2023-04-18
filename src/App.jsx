import Nabvar from './components/Nabvar'
import Home from './pages/Home'
import NewsContext, { NewsProvider } from './context/NewsContext'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Sports from './pages/Sports'
import Button from './components/Button'
function App() {



  return (
    <>
      <NewsProvider>
        <Button/>
        {/* <Nabvar /> */}
        <Home />
        
      </NewsProvider>
    </>
  )
}

export default App
