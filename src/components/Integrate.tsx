import CodeImg from '../assets/codeImg.png'
import MethodsImg from '../assets/methods.png'
function Integrate() {
  return (
    <div className='h-full grid grid-cols-2 bg-[#1E1E1E] relative'>
      <div className='flex flex-col gap-6 p-20 justify-center'>
        <h3 className='text-[#89C9E7] uppercase text-md'>REPORTES</h3>
        <p className='text-3xl font-body max-w-md pr-10'>
          Analiza tus ventas en{' '}
          <span className='text-[#89C9E7] font-semibold'>
            tiempo real
          </span>{' '}
          y administra tus cobros.{' '}
        </p>
        <p className='max-w-sm text-[#E0E0E0] text-lg pr-4'>
          Integra y administra todo desde nuestra plataforma, genera
          links de pago sin necesidad de una sola línea de código o
          integra de manera sencilla tu sitio web con nuestro API.
        </p>
      </div>
      <div className='relative w-full h-full flex items-center justify-center'>
        <img
          src={CodeImg}
          alt='code image'
          className='object-cover'
        />
        <img
          src={MethodsImg}
          alt='methods image'
          className='object-cover absolute z-50 top-[50%] -translate-y-[50%] -ml-56'
        />
      </div>
    </div>
  )
}

export default Integrate
