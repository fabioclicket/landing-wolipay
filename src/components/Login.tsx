import WoliLogo from '../assets/wolipay-logo-color.png'

type Props = {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
}

function Login({ setShowLogin }: Props) {
  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <div className='w-[90%] max-w-[460px] rounded-xl border border-slate-200 p-10 md:p-16'>
        <div className='mx-auto mb-10 w-40 py-2'>
          <img src={WoliLogo} alt='' />
        </div>
        <div className='flex flex-col gap-4 text-black'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='text-xs'>
              Correo electronico
            </label>
            <input
              type='email'
              id='email'
              placeholder='Ingresa tu correo electrónico'
              className='rounded-md border border-[#B6B6B6] bg-[#FDFCFC] px-2 pb-2 pt-1 text-black placeholder:text-sm'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-xs' htmlFor='password'>
              Contraseña
            </label>
            <input
              type='password'
              id='password'
              className='h-[38px] rounded-md border border-[#B6B6B6] bg-[#FDFCFC] px-2 py-1 text-black placeholder:text-base'
              placeholder='*********'
            />
          </div>
        </div>
        <div className='mt-20 flex w-full'>
          <a
            href='#'
            onClick={() => setShowLogin(false)}
            className='mx-auto inline-flex w-full max-w-[160px] justify-center rounded-2xl bg-[#29BE6E] px-5 py-[6px] text-sm'
          >
            Ingresar
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
