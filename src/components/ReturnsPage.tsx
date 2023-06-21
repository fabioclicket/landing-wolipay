import ReturnImg from '../assets/returnsImg.png'

function ReturnsPage() {
  return (
    <div
      className='flex flex-col-reverse items-center gap-8 text-black md:flex-row md:gap-32'
      id='devoluciones'
    >
      <div className='h-full'>
        <img
          src={ReturnImg}
          alt='card image'
          className='object-cover'
        />
      </div>
      <div className='flex flex-col justify-center gap-6 px-5 py-12 md:p-0'>
        <h3 className='text-md uppercase text-[#89C9E7]'>
          Devoluciones
        </h3>
        <p className='max-w-3xl pr-2 font-body text-3xl md:text-4xl'>
          Incrementa tus ventas con{' '}
          <span className='font-semibold text-[#152F68]'>
            políticas de devolución
          </span>{' '}
          y gestiona todo desde Wolipay.{' '}
        </p>
        <p className='max-w-2xl pr-5 text-base text-[#AAAAAA] md:pr-0 md:text-lg'>
          Optimiza tus ventas con políticas de devolución efectivas.
          Incrementa la confianza del cliente al ofrecer devoluciones
          fáciles. Gestiona todo de manera conveniente desde nuestra
          plataforma, maximizando la satisfacción del cliente y el
          crecimiento de tu negocio.
        </p>
      </div>
    </div>
  )
}

export default ReturnsPage
