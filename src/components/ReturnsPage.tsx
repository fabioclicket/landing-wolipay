import ReturnImg from '../assets/returnsImg.png'

function ReturnsPage() {
  return (
    <div
      className='flex justify-start items-center text-black gap-32'
      id='nosotros'
    >
      <div className='h-full'>
        <img
          src={ReturnImg}
          alt='card image'
          className='object-cover'
        />
      </div>
      <div className='flex flex-col gap-6 justify-center'>
        <h3 className='text-[#89C9E7] uppercase text-md'>
          Devoluciones
        </h3>
        <p className='text-3xl font-body max-w-xl pr-2'>
          Incrementa tus ventas con{' '}
          <span className='text-[#152F68] font-semibold'>
            políticas de devolución
          </span>{' '}
          y gestiona todo desde Wolipay.{' '}
        </p>
        <p className='max-w-lg text-[#AAAAAA] text-base'>
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
