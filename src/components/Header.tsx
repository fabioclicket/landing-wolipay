type Props = {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ setShowLogin }: Props) {
  return (
    <header className="absolute top-0 z-50 flex h-auto w-full max-w-[1390px] self-center">
      <div className="flex w-full items-center justify-between px-8 py-1 md:px-2">
        <nav className="z-50 hidden w-full font-body md:block">
          <ul className="flex w-full items-center justify-end gap-8 px-10 py-5 font-bold">
            <a href="#pagos">
              <li className="group relative max-h-max cursor-pointer transition-all duration-300">
                Pagos
                <span className="absolute inset-x-0 -bottom-1 mx-auto inline-block h-1 w-0 rounded-3xl bg-[#152F68] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </a>
            <a href="#reportes">
              <li className="group relative max-h-max cursor-pointer transition-all duration-300">
                Reportes
                <span className="absolute inset-x-0 -bottom-1 mx-auto inline-block h-1 w-0 rounded-3xl bg-[#152F68] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </a>
            <a href="#devoluciones">
              <li className="group relative max-h-max cursor-pointer transition-all duration-300">
                Devoluciones
                <span className="absolute inset-x-0 -bottom-1 mx-auto inline-block h-1 w-0 rounded-3xl bg-[#152F68] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </a>
            <a href="#integracion">
              <li className="group relative max-h-max cursor-pointer transition-all duration-300">
                Integración
                <span className="absolute inset-x-0 -bottom-1 mx-auto inline-block h-1 w-0 rounded-3xl bg-[#152F68] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </a>
            <li
              onClick={() => setShowLogin(true)}
              className="cursor-pointer rounded-3xl bg-white px-8 py-2 text-[#152F68] transition-all duration-500 hover:bg-[#152F68] hover:text-white"
            >
              Ingresar
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
