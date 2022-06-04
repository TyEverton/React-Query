import { Routes, Route } from 'react-router-dom'
import DetailsPage from './pages/Details-Page'
import ListPage from './pages/List-Page'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ListPage />} />
        <Route path=':id' element={<DetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
