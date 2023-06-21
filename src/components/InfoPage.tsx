import CardImage from '../assets/logoCard.png'

function InfoPage() {
  return (
    <div className='mx-auto mb-16 grid grid-cols-2 gap-20 p-20 px-10 text-black' id='resultados'>
      <div>
        <div className='flex flex-col gap-6'>
          <h3 className='text-md uppercase text-[#89C9E7]'>
            Nosotros
          </h3>
          <p className='max-w-xs font-body text-3xl'>
            Somos{' '}
            <span className='font-semibold text-[#152F68]'>
              expertos
            </span>{' '}
            en{' '}
            <span className='font-semibold text-[#152F68]'>
              pagos en línea
            </span>
          </p>
          <p className='max-w-xs pr-32'>
            Quienes somos vendedor desde cuando
          </p>
        </div>

        <div className='mt-8 flex items-center gap-10'>
          <img
            src={CardImage}
            alt=''
            className='h-28 w-72 rotate-180 object-cover'
          />
          <img
            src={CardImage}
            alt=''
            className='-mb-16 h-28 w-72 rotate-180 object-cover'
          />
        </div>
      </div>
      <div className='flex justify-end'>
        <img
          src={CardImage}
          alt=''
          className='h-full w-80 rotate-180 object-cover'
        />
      </div>
    </div>
  )
}

export default InfoPage
