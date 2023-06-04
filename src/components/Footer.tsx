import FacebookIcon from '../assets/Facebook.png'
import InstagramIcon from '../assets/Instagram.png'

function Footer() {
  return (
    <footer className='w-full max-w-5xl mx-auto py-6 pr-5 text-black flex items-center justify-between border-t-[1px] border-[#D9D9D9]'>
      <p className='text-sm text-black'>
        Copyright 2023 ® Wolipay | Marca de Wolivin Group S.A.
      </p>
      <div className='flex items-center gap-4'>
        <img
          className='w-7 h-7 cursor-pointer'
          src={FacebookIcon}
          alt='facebook icon'
        />
        <img
          className='w-7 h-7 cursor-pointer'
          src={InstagramIcon}
          alt='instagram icon'
        />
      </div>
    </footer>
  )
}

export default Footer
