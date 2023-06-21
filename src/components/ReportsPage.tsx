import PartnerImage from '../assets/partnerImage.png'

function ReportsPage() {
  return (
    <div className='mt-4 flex flex-col bg-[#89C8E71A] text-black md:mt-10 md:grid md:grid-cols-2' id='reportes'>
      <div className='flex flex-col items-end justify-center gap-6 px-6 pb-8 pt-14 md:p-20 md:pr-12'>
        <div className='flex flex-col gap-6'>
          <h3 className='text-md uppercase text-[#152F68]'>
            REPORTES
          </h3>
          <p className='max-w-lg font-body text-3xl md:pr-10 md:text-4xl'>
            Analiza tus ventas en{' '}
            <span className='font-semibold text-[#152F68]'>
              tiempo real
            </span>{' '}
            y administra tus cobros.{' '}
          </p>
          <p className='max-w-md text-[#7B7B7B] md:text-lg'>
            Optimiza tus ventas con análisis en tiempo real y controla
            tus cobros de manera eficiente. Toma decisiones
            informadas, identifica oportunidades y maximiza el
            rendimiento de tu negocio.
          </p>
        </div>
      </div>
      <div>
        <img
          src={PartnerImage}
          alt='card image'
          className='w-full object-cover'
        />
      </div>
    </div>
  )
}

export default ReportsPage
