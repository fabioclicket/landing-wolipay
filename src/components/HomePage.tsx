import WolipayLogo from '../assets/wolipay-logo.png'
import Stroke from '../assets/stroke.png'

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
        <img
          className='w-full h-full mx-auto object-contain object-right'
          src={Stroke}
          alt='stroke'
        />
        <img
          src='https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80'
          alt=''
          className='max-w-[60%] h-full absolute -z-10 object-cover'
        />
      </div>
    </main>
  )
}

export default HomePage
