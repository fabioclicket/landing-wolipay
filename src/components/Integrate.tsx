import CodeImg from '../assets/codeImg.png'
import MethodsImg from '../assets/methods.png'
function Integrate() {
  return (
    <div className='relative flex h-full flex-col bg-[#1E1E1E] md:grid md:grid-cols-2' id='integracion'>
      <div className='flex flex-col items-end justify-center px-6 py-14 md:p-20'>
        <div className='flex flex-col gap-6 '>
          <h3 className='text-md uppercase text-[#89C9E7]'>
            INTEGRACIÓN
          </h3>
          <p className='max-w-lg pr-10 font-body text-3xl md:text-4xl'>
            Empieza a{' '}
            <span className='font-semibold text-[#89C9E7]'>
              vender en línea
            </span>{' '}
            tengas o no una página web.{' '}
          </p>
          <p className='max-w-md text-base text-[#E0E0E0] md:pr-4 md:text-lg'>
            Integra y administra todo desde nuestra plataforma, genera
            links de pago sin necesidad de una sola línea de código o
            integra de manera sencilla tu sitio web con nuestro API.
          </p>
        </div>
      </div>
      <div className='relative z-40 flex h-full w-full items-center justify-center'>
        <img
          src={CodeImg}
          alt='code image'
          className='w-full object-cover'
        />
        <img
          src={MethodsImg}
          alt='methods image'
          className='absolute top-[50%] z-50 -translate-y-[50%] object-cover md:left-5 md:w-2/3'
        />
      </div>
    </div>
  )
}

export default Integrate
