import WolipayLogo from '../assets/wolipay-logo.png'
import Stroke from '../assets/stroke.png'
import HomeImage from '../assets/home-image.png'
import HomeMobileImage from '../assets/homeImageMobile.png'
import MenuIcon from '../icons/MenuIcon'
import { useState } from 'react'
import CloseIcon from '../icons/CloseIcon'

function HomePage() {
  const [show, setShow] = useState(false)

  return (
    <main className='w-full min-h-screen flex flex-col md:grid-cols-home md:grid'>
      <div className='relative flex flex-col justify-center bg-[#152F68] p-8 pt-8 pb-20 md:py-20 md:pt-8 md:px-12'>
        <div className='h-full md:self-end my-auto grid grid-cols-1 gap-10 md:gap-8 place-content-between'>
          <div className='flex justify-between'>
            <img
              className='w-28 h-auto md:w-40 self-center mb-10 md:mb-0'
              src={WolipayLogo}
              alt='wolipay logo'
            />
            <div onClick={() => setShow(true)}>
              <MenuIcon />
            </div>
          </div>
          <div className='self-end my-auto grid gap-8'>
            <h2 className='max-w-md text-5xl text-white font-bold font-body lg:text-6xl md:pr-20'>
              La forma <br /> más fácil de recibir pagos en linea
            </h2>
            <p className='text-base max-w-md pr-12 md:pr-32 md:text-lg'>
              Recibe pagos en línea, de manera fácil y segura,
              administra tu dinero con Wolipay.
            </p>
            <a
              href='#contacto'
              className='w-44 bg-[#89C9E7] text-[#152F68] text-lg text-center rounded-3xl font-bold font-body py-2 md:py-3 hover:bg-white cursor-pointer z-50 transition-colors duration-300'
            >
              Me interesa
            </a>
          </div>
          <div className='' />
        </div>
        <aside
          className={`${
            show && 'translate-x-0'
          } fixed w-[60%] max-w-[250px] translate-x-64 top-0 bottom-0 right-0 min-h-screen bg-white p-10 pr-5 z-50 transition-transform duration-500 md:hidden`}
        >
          <div className='w-full flex items-center justify-between'>
            <p className='w-max flex flex-col text-black font-semibold text-xl'>
              Menú
              <span className='w-full h-1 rounded-2xl bg-[#152F68]'></span>
            </p>
            <div
              className='text-black text-2xl h-full -mt-5 font-semibold'
              onClick={() => setShow(false)}
            >
              <CloseIcon />
            </div>
          </div>
          <ul className='w-full flex flex-col gap-8 justify-start font-bold text-black mt-10'>
            <a href='#pagos'>
              <li className='inline-block max-h-max cursor-pointer relative group transition-all duration-300'>
                Pagos
              </li>
            </a>
            <a href='#reportes'>
              <li className='inline-block max-h-max cursor-pointer relative group transition-all duration-300'>
                Reportes
              </li>
            </a>
            <a href='#devoluciones'>
              <li className='inline-block max-h-max cursor-pointer relative group transition-all duration-300'>
                Devoluciones
              </li>
            </a>
            <a href='#integracion'>
              <li className='inline-block max-h-max cursor-pointer relative group transition-all duration-300'>
                Integración
              </li>
            </a>
            <li className='bg-[#152F68] text-center py-2 px-8 text-white rounded-3xl cursor-pointer transition-all duration-500'>
              Ingresar
            </li>
          </ul>
        </aside>
      </div>
      <div className='w-full h-full md:max-h-screen flex overflow-hidden'>
        <img
          className='hidden w-full h-full mx-auto object-contain object-right z-10 absolute inset-0 md:flex'
          src={Stroke}
          alt='stroke'
        />
        <img
          src={HomeImage}
          alt=''
          className='hidden w-full h-full absolute -z-10 object-cover brightness-75 md:block md:w-[60%]'
        />
        <img
          src={HomeMobileImage}
          alt=''
          className='w-full max-w-full h-full object-cover brightness-90 md:hidden'
        />
      </div>
    </main>
  )
}

export default HomePage
