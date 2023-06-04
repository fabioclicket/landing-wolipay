import AboutUsPage from './components/AboutUsPage'
import FeaturesPage from './components/FeaturesPage'
import HomePage from './components/HomePage'
import InfoPage from './components/InfoPage'
import { Widget } from '@typeform/embed-react'
import ReportsPage from './components/ReportsPage'
import Footer from './components/Footer'
import Heart from './assets/heart.png'
import WoliLogo from './assets/woli.png'
import ReturnsPage from './components/ReturnsPage'
import Integrate from './components/Integrate'

function App() {
  return (
    <div className='flex flex-col'>
      <HomePage />
      {/* <FeaturesPage /> */}
      <AboutUsPage />
      <ReportsPage />
      {/* <InfoPage /> */}
      <ReturnsPage />
      <Integrate />
      <div id='contacto'>
        <Widget
          id='vk9y0dLS'
          style={{
            width: '70%',
            height: '600px',
            margin: '3rem auto',
          }}
          className='my-form'
        />
        <div className='w-full flex flex-col gap-3 items-center mx-auto text-black mb-16'>
          <p className='flex items-center gap-2'>
            Hecho con <img src={Heart} alt='heart icon' /> en Bolivia.{' '}
          </p>
          <img src={WoliLogo} alt='woli logo' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
