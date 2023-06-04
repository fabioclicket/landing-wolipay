import PartnerImage from '../assets/partnerImage.png'

function ReportsPage() {
  return (
    <div className='grid grid-cols-2 mt-10 text-black bg-[#89C8E71A]'>
      <div className='flex flex-col gap-6 p-20 justify-center items-end pr-12'>
        <div className='flex flex-col gap-6'>
          <h3 className='text-[#152F68] uppercase text-md'>
            REPORTES
          </h3>
          <p className='text-4xl font-body max-w-lg pr-10'>
            Analiza tus ventas en{' '}
            <span className='text-[#152F68] font-semibold'>
              tiempo real
            </span>{' '}
            y administra tus cobros.{' '}
          </p>
          <p className='max-w-md text-[#7B7B7B] text-lg'>
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
          className='object-cover w-full'
        />
      </div>
    </div>
  )
}

export default ReportsPage
