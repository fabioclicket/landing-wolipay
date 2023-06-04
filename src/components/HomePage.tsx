import WolipayLogo from '../assets/wolipay-logo.png'
import Stroke from '../assets/stroke.png'
import HomeImage from '../assets/home-image.png'
import HomeMobileImage from '../assets/homeImageMobile.png'

function HomePage() {
  return (
    <main className='w-full min-h-screen flex flex-col md:grid-cols-home md:grid'>
      <div className='flex flex-col justify-center bg-[#152F68] p-8 py-14 md:py-20 md:pt-8 md:px-12'>
        <div className='h-full self-end my-auto grid gap-10 md:gap-8 place-content-between'>
          <img
            className='w-28 h-auto md:w-40 self-center mb-10 md:mb-0'
            src={WolipayLogo}
            alt='wolipay logo'
          />
          <div className='self-end my-auto grid gap-10 md:gap-8'>
            <h2 className='max-w-md text-5xl text-white font-bold font-body lg:text-6xl md:pr-20'>
              La forma <br /> más fácil de recibir pagos en linea
            </h2>
            <p className='text-base max-w-md pr-12 md:pr-32 md:text-lg'>
              Recibe pagos en línea, de manera fácil y segura,
              administra tu dinero con Wolipay.
            </p>
            <a
              href='#'
              className='w-44 bg-[#89C9E7] text-[#152F68] text-lg text-center rounded-3xl font-bold font-body py-2 md:py-3'
            >
              Me interesa
            </a>
          </div>
          <div />
        </div>
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
