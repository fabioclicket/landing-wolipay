import AboutUsPage from './components/AboutUsPage'
import HomePage from './components/HomePage'
import { Widget } from '@typeform/embed-react'
import ReportsPage from './components/ReportsPage'
import Footer from './components/Footer'
import Heart from './assets/heart.png'
import WoliLogo from './assets/woli.png'
import ReturnsPage from './components/ReturnsPage'
import Integrate from './components/Integrate'
import Header from './components/Header'
import Login from './components/Login'
import { useState } from 'react'

function App() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className='flex w-full flex-col'>
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <>
          <Header setShowLogin={setShowLogin} />
          <HomePage />
          <AboutUsPage />
          <ReportsPage />
          <ReturnsPage />
          <Integrate />
          <div id='contacto'>
            <Widget
              id='vk9y0dLS'
              className='my-form mx-auto my-16 h-[600px] w-[90%] md:mt-28 md:w-[70%]'
            />
            <div className='mx-auto mb-16 flex w-full flex-col items-center gap-3 text-black'>
              <p className='flex items-center gap-2'>
                Hecho con <img src={Heart} alt='heart icon' /> en
                Bolivia.{' '}
              </p>
              <img src={WoliLogo} alt='woli logo' />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
