import MobileImage from '../assets/woliMobileImage.png'

function AboutUsPage() {
  return (
    <div className='grid grid-cols-2 my-14 text-black px-12' id='nosotros'>
      <div className='w-full pl-32 self-end'>
        <img
          src={MobileImage}
          alt='card image'
          className='object-cover'
        />
      </div>
      <div className='flex flex-col gap-6 p-20 justify-center'>
        <h3 className='text-[#89C9E7] uppercase text-md'>
          MÉTODOS DE PAGO
        </h3>
        <p className='text-4xl font-body max-w-lg pr-10'>
          Acepta los{' '}
          <span className='text-[#152F68] font-semibold'>
            métodos de pago
          </span>{' '}
          más utilizados en Bolivia.{' '}
        </p>
        <p className='max-w-md text-[#AAAAAA] text-lg'>
          Wolipay ofrece a tus clientes la posibilidad de pagar
          utilizando todos los métodos de pago disponibles para que
          nada te aleje de esa venta que quieres lograr.
        </p>
      </div>
    </div>
  )
}

export default AboutUsPage
