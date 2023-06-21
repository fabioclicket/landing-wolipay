import WolipayLogo from '../assets/wolipay-logo.png'
import Stroke from '../assets/stroke.png'
import HomeImage from '../assets/home-image.webp'
import HomeMobileImage from '../assets/homeImageMobile.png'
import MenuIcon from '../icons/MenuIcon'
import { useState } from 'react'
import CloseIcon from '../icons/CloseIcon'

function HomePage() {
  const [show, setShow] = useState(false)

  return (
    <main className='flex min-h-screen w-full flex-col lg:grid lg:grid-cols-home'>
      <div className='relative flex max-h-screen flex-col justify-center bg-[#152F68] p-8 pb-20 lg:px-12 lg:py-20 lg:pt-8'>
        <div className='my-auto grid h-full grid-cols-1 place-content-between gap-10 lg:gap-8 lg:self-end'>
          <div className='flex justify-between'>
            <img
              className='mb-10 h-auto w-28 self-center lg:mb-0 lg:w-40'
              src={WolipayLogo}
              alt='wolipay logo'
            />
            <div onClick={() => setShow(true)} className='z-50'>
              <MenuIcon />
            </div>
          </div>
          <div className='my-auto grid gap-8 self-end'>
            <h2 className='max-w-md font-body text-5xl font-bold text-white lg:pr-0 lg:text-6xl xl:pr-16'>
              La forma <br /> más fácil de recibir pagos en linea
            </h2>
            <p className='max-w-md pr-12 text-base lg:pr-32 lg:text-lg'>
              Recibe pagos en línea, de manera fácil y segura,
              administra tu dinero con Wolipay.
            </p>
            <a
              href='#contacto'
              className='z-50 w-44 cursor-pointer rounded-3xl bg-[#89C9E7] py-2 text-center font-body text-lg font-bold text-[#152F68] transition-colors duration-300 hover:bg-white lg:py-3'
            >
              Me interesa
            </a>
          </div>
          <div className='' />
        </div>
        <aside
          className={`${
            show
              ? 'fixed inset-y-0 right-0 z-50 min-h-screen w-[60%] max-w-[250px] translate-x-0 bg-white px-6 py-10 transition-transform duration-500 md:hidden'
              : 'fixed inset-y-0 right-0 z-50 min-h-screen w-[60%] max-w-[250px] translate-x-64 bg-white px-6 py-10 transition-transform duration-500 md:hidden'
          } `}
        >
          <div className='flex w-full items-center justify-between'>
            <p className='flex w-max flex-col text-xl font-semibold text-black'>
              Menú
              <span className='h-1 w-full rounded-2xl bg-[#152F68]'></span>
            </p>
            <div
              className='-mt-5 h-full text-2xl font-semibold text-black'
              onClick={() => setShow(false)}
            >
              <CloseIcon />
            </div>
          </div>
          <ul className='mt-10 flex w-full flex-col justify-start gap-8 font-bold text-black'>
            <a href='#pagos' onClick={() => setShow(false)}>
              <li className='group relative inline-block max-h-max cursor-pointer transition-all duration-300'>
                Pagos
              </li>
            </a>
            <a href='#reportes' onClick={() => setShow(false)}>
              <li className='group relative inline-block max-h-max cursor-pointer transition-all duration-300'>
                Reportes
              </li>
            </a>
            <a href='#devoluciones' onClick={() => setShow(false)}>
              <li className='group relative inline-block max-h-max cursor-pointer transition-all duration-300'>
                Devoluciones
              </li>
            </a>
            <a href='#integracion' onClick={() => setShow(false)}>
              <li className='group relative inline-block max-h-max cursor-pointer transition-all duration-300'>
                Integración
              </li>
            </a>
            <li className='cursor-pointer rounded-3xl bg-[#152F68] px-8 py-2 text-center text-white transition-all duration-500'>
              Ingresar
            </li>
          </ul>
        </aside>
      </div>
      <div className='flex h-full w-full overflow-hidden lg:max-h-screen'>
        <img
          className='absolute inset-0 z-10 mx-auto hidden h-full w-full object-contain object-right lg:flex'
          src={Stroke}
          alt='stroke'
        />
        <img
          src={HomeImage}
          alt=''
          className='absolute -z-10 hidden h-full w-full object-cover brightness-75 lg:block lg:w-[60%]'
        />
        <img
          src={HomeMobileImage}
          alt=''
          className='h-full w-full max-w-full object-cover brightness-90 lg:hidden'
        />
      </div>
    </main>
  )
}

export default HomePage
