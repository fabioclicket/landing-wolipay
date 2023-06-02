import CardImage from '../assets/logoCard.png'

function AboutUsPage() {
  return (
    <div className='grid grid-cols-2 my-20 mt-32 text-black'>
      <div>
        <img
          src={CardImage}
          alt='card image'
          className='rotate-180'
        />
      </div>
      <div className='flex flex-col gap-6 p-20'>
        <h3 className='text-[#89C9E7] uppercase text-sm'>Nosotros</h3>
        <p className='text-3xl font-body max-w-xs'>
          Somos{' '}
          <span className='text-[#152F68] font-semibold'>
            expertos
          </span>{' '}
          en{' '}
          <span className='text-[#152F68] font-semibold'>
            pagos en línea
          </span>
        </p>
        <p className='max-w-xs pr-32'>
          Quienes somos vendedor desde cuando
        </p>
      </div>
    </div>
  )
}

export default AboutUsPage
