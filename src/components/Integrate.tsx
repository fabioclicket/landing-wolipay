import CodeImg from '../assets/codeImg.png'
import MethodsImg from '../assets/methods.png'
function Integrate() {
  return (
    <div className='h-full grid grid-cols-2 bg-[#1E1E1E] relative'>
      <div className='flex flex-col p-20 justify-center items-end'>
        <div className='flex flex-col gap-6 '>
          <h3 className='text-[#89C9E7] uppercase text-md'>
            INTEGRACIÓN
          </h3>
          <p className='text-4xl font-body max-w-lg pr-10'>
            Empieza a{' '}
            <span className='text-[#89C9E7] font-semibold'>
              vender en línea
            </span>{' '}
            tengas o no una página web.{' '}
          </p>
          <p className='max-w-md text-[#E0E0E0] text-lg pr-4'>
            Integra y administra todo desde nuestra plataforma, genera
            links de pago sin necesidad de una sola línea de código o
            integra de manera sencilla tu sitio web con nuestro API.
          </p>
        </div>
      </div>
      <div className='relative w-full h-full flex items-center justify-center'>
        <img
          src={CodeImg}
          alt='code image'
          className='object-cover w-full'
        />
        <img
          src={MethodsImg}
          alt='methods image'
          className='object-cover absolute z-50 top-[50%] -translate-y-[50%] left-5'
        />
      </div>
    </div>
  )
}

export default Integrate