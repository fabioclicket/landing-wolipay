import AboutUsPage from './components/AboutUsPage'
import FeaturesPage from './components/FeaturesPage'
import HomePage from './components/HomePage'
import InfoPage from './components/InfoPage'
import { Widget } from '@typeform/embed-react'

function App() {
  return (
    <div className='flex flex-col'>
      <HomePage />
      <FeaturesPage />
      <AboutUsPage />
      <InfoPage />
      <Widget
        id='vk9y0dLS'
        style={{ width: '70%', height: '600px', margin: '3rem auto' }}
        className='my-form'
      />
    </div>
  )
}

export default App
