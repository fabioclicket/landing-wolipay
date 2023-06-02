import WolipayLogo from '../assets/wolipay-logo.png'
import Stroke from '../assets/stroke.png'
import HomeImage from '../assets/home-image.png'

function HomePage() {
  return (
    <main className='w-full min-h-screen grid grid-cols-home'>
      <div className='flex flex-col justify-center bg-[#152F68] py-20 px-16'>
        <div className='w-full'>
          <img
            className='w-48 h-auto mb-auto'
            src={WolipayLogo}
            alt='wolipay logo'
          />
        </div>
        <div className='self-center my-auto grid gap-6'>
          <h2 className='text-5xl text-white font-bold font-body pr-[3.3rem]'>
            La forma más fácil de recibir pagos en linea
          </h2>
          <p className='pr-24 text-base'>
            Recibe pagos en línea, de manera fácil y segura,
            administra tu dinero con Wolipay.
          </p>
          <a
            href='#'
            className='w-40 bg-[#89C9E7] text-[#152F68] text-center rounded-3xl font-bold font-body py-2'
          >
            Me interesa
          </a>
        </div>
      </div>
      <div className='w-full max-h-screen flex overflow-hidden'>
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
        <img
          className='w-full h-full mx-auto object-contain object-right z-10 absolute inset-0'
          src={Stroke}
          alt='stroke'
        />
        <img
          src={HomeImage}
          alt=''
          className='w-[60%] h-full absolute -z-10 object-cover brightness-75'
        />
      </div>
    </main>
  )
}

export default HomePage
