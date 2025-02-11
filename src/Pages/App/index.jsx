import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CreateListTaskProvider } from '../../Context'
import { Header } from '../../Components/Header/index.jsx'
import { NavBar } from '../../Components/NavBar'
import { Layout } from '../../Components/Layout'
import { Home } from '../Home/index.jsx'
import { Doing } from '../Doing/index.jsx'
import { Ending } from '../Ending/index.jsx'

function App() {
  
  const AppRoutes = () => {
    return(
      <Routes basename='/ListTask-TailwindCSS'>
        <Route path='/' element={ <Home/> }/>
        <Route path='/Doing' element={ <Doing/> }/>
        <Route path='/Ending' element={ <Ending/> }/>
      </Routes>
    )
  }

  return(
      <>
        <CreateListTaskProvider>
          <div className='flex flex-col bg-zinc-50 h-[calc(100vh-1px)] w-full'>
            <Header/>
            <BrowserRouter>
              <NavBar/>
              <Layout>
                <AppRoutes/>
              </Layout>
            </BrowserRouter>
          </div>
        </CreateListTaskProvider>
      </>
  )

};

export default App;