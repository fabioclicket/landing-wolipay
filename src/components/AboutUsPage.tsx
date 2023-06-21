import MobileImage from '../assets/woliMobileImage.png'

function AboutUsPage() {
  return (
    <div
      className='my-12 flex flex-col-reverse px-4 text-black md:my-14 md:grid md:grid-cols-2 md:px-12'
      id='pagos'
    >
      <div className='flex h-full w-full items-center self-end md:pl-32'>
        <img
          src={MobileImage}
          alt='card image'
          className='object-cover'
        />
      </div>
      <div className='mb-8 flex flex-col justify-center gap-6 p-4 md:mb-0 md:p-20'>
        <h3 className='text-md uppercase text-[#89C9E7]'>
          MÉTODOS DE PAGO
        </h3>
        <p className='w-full font-body text-3xl leading-8 md:max-w-xl md:pr-4 md:text-4xl'>
          Acepta los{' '}
          <span className='font-semibold text-[#152F68]'>
            métodos de pago
          </span>{' '}
          más utilizados en Bolivia.{' '}
        </p>
        <p className='max-w-md text-base text-[#AAAAAA] md:text-lg'>
          Wolipay ofrece a tus clientes la posibilidad de pagar
          utilizando todos los métodos de pago disponibles para que
          nada te aleje de esa venta que quieres lograr.
        </p>
      </div>
    </div>
  )
}

export default AboutUsPage
