import FacebookIcon from '../assets/Facebook.png'
import InstagramIcon from '../assets/Instagram.png'

function Footer() {
  return (
    <footer className='mx-auto flex w-[90%] max-w-5xl items-center justify-between border-t-[1px] border-[#D9D9D9] py-6 text-black md:w-full md:pr-5'>
      <div className='flex flex-col gap-2 md:flex-row'>
        <p className='flex gap-2 text-xs font-semibold text-black'>
          Copyright 2023 ® Wolipay <span className='hidden text-[#89C9E7] md:block'>|</span>
        </p>
        <p className='text-xs text-[#7B7B7B]'>Marca de Wolivin Group S.A.</p>
      </div>
      <div className='flex items-center gap-4'>
        <img
          className='h-7 w-7 cursor-pointer'
          src={FacebookIcon}
          alt='facebook icon'
        />
        <img
          className='h-7 w-7 cursor-pointer'
          src={InstagramIcon}
          alt='instagram icon'
        />
      </div>
    </footer>
  )
}

export default Footer
