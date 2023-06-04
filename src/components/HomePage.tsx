import Stroke from '../assets/stroke.png'
import HomeImage from '../assets/home-image.png'

function HomePage() {
  return (
    <main className='w-full min-h-screen flex flex-col md:grid-cols-home md:grid'>
      <div className='flex flex-col justify-center bg-[#152F68] p-8 md:py-20 md:pt-8 md:px-12'>
        <div className='self-end my-auto grid gap-8'>
          <h2 className='max-w-md text-6xl text-white font-bold font-body pr-20'>
            La forma más fácil de recibir pagos en linea
          </h2>
          <p className='text-lg max-w-md pr-32'>
            Recibe pagos en línea, de manera fácil y segura,
            administra tu dinero con Wolipay.
          </p>
          <a
            href='#'
            className='w-44 bg-[#89C9E7] text-[#152F68] text-lg text-center rounded-3xl font-bold font-body py-3'
          >
            Me interesa
          </a>
        </div>
      </div>
      <div className='w-full max-h-screen flex overflow-hidden'>
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
