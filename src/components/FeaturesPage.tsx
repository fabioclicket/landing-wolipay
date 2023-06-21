import CardImage from '../assets/logoCard.png'

function FeaturesPage() {
  return (
    <div className='my-16 flex flex-col items-center' id='features'>
      <h3 className='text-md mb-3 uppercase text-[#89C9E7]'>
        Features
      </h3>
      <p className='max-w-lg text-center font-body text-3xl leading-8 text-black'>
        Desarrollamos el{' '}
        <span className='font-semibold text-[#152F68]'>
          mejor producto
        </span>{' '}
        para tu negocio o emprendimiento
      </p>

      <div className='my-20 flex flex-wrap items-center justify-center gap-10'>
        <img
          src={CardImage}
          alt='card image'
          className='h-52 w-52 rotate-180 rounded-3xl object-cover'
        />
        <img
          src={CardImage}
          alt='card image'
          className='-mb-32 h-52 w-52 rotate-180 rounded-3xl object-cover'
        />
        <img
          src={CardImage}
          alt='card image'
          className='h-52 w-52 rotate-180 rounded-3xl object-cover'
        />
        <img
          src={CardImage}
          alt='card image'
          className='-mb-32 h-52 w-52 rotate-180 rounded-3xl object-cover'
        />
      </div>
    </div>
  )
}

export default FeaturesPage
