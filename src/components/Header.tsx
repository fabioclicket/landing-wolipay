import WolipayLogo from '../assets/wolipay-logo.png'

function Header() {
  return (
    <header className='w-full h-auto max-w-[1390px] flex absolute top-0 z-50 self-center'>
      <div className='w-full flex items-center justify-between py-1 px-2'>
        <img
          className='w-28 h-auto md:w-40 -mb-20'
          src={WolipayLogo}
          alt='wolipay logo'
        />
        <nav className='w-full font-body z-50'>
          <ul className='w-full flex gap-8 py-5 px-10 justify-end items-center font-bold'>
            <a href='#features'>
              <li className='max-h-max cursor-pointer relative group transition-all duration-300'>
                Features
                <span className='inline-block absolute w-0 mx-auto group-hover:w-full h-1 rounded-3xl bg-[#152F68] right-0 left-0 -bottom-1 transition-all duration-300'></span>
              </li>
            </a>
            <a href='#nosotros'>
              <li className='max-h-max cursor-pointer relative group transition-all duration-300'>
                Nosotros
                <span className='inline-block absolute w-0 mx-auto group-hover:w-full h-1 rounded-3xl bg-[#152F68] right-0 left-0 -bottom-1 transition-all duration-300'></span>
              </li>
            </a>
            <a href='#resultados'>
              <li className='max-h-max cursor-pointer relative group transition-all duration-300'>
                Resultados
                <span className='inline-block absolute w-0 mx-auto group-hover:w-full h-1 rounded-3xl bg-[#152F68] right-0 left-0 -bottom-1 transition-all duration-300'></span>
              </li>
            </a>
            <a href='#contacto'>
              <li className='max-h-max cursor-pointer relative group transition-all duration-300'>
                Contacto
                <span className='inline-block absolute w-0 mx-auto group-hover:w-full h-1 rounded-3xl bg-[#152F68] right-0 left-0 -bottom-1 transition-all duration-300'></span>
              </li>
            </a>
            <li className='bg-white py-2 px-8 text-[#152F68] rounded-3xl cursor-pointer hover:bg-[#152F68] hover:text-white transition-all duration-500'>
              Ingresar
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
