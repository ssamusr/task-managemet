import { IconChat, IconHome, IconLogout, IconSettings, IconTasks, IconTimeline, Logo } from './components/Icons'

function App (): JSX.Element {
  return (
    <main className='h-screen'>
      <div className='w-56 h-full bg-gray-900 fixed top-0 left-0 px-8 py-6'>

      <div className='w-full h-1/5'>
          <a
            href="/"
            className='flex items-center gap-3'
            >
            <Logo className=''/>
            <span className='w-[6ch] text-lg font-semibold text-[#29A19C] '>Tasks Book</span>
          </a>
      </div>

      <nav className='flex flex-col justify-between w-full h-4/5'>

          <ul className='flex flex-col gap-8'>
            <li>
              <a
              href=""
              className='flex items-center gap-3 text-white fill-white hover:text-red-500 hover:fill-red-500 '
              >
                <IconHome />
                Inicio
              </a>
            </li>

            <li>
              <a
              href=""
              className='flex items-center gap-3 text-white fill-white hover:text-red-500 hover:fill-red-500 '
              >
                <IconTimeline />
                Timeline
              </a>
            </li>

            <li>
              <a
              href=""
              className='flex items-center gap-3 text-white fill-white hover:text-red-500 hover:fill-red-500 '
              >
                <IconTasks />
                Tareas
              </a>
            </li>

            <li>
              <a
              href=""
              className='flex items-center gap-3 text-white fill-white hover:text-red-500 hover:fill-red-500 '
              >
                <IconChat />
                Chat
              </a>
            </li>

            <li>
              <a
              href=""
              className='flex items-center gap-3 text-white fill-white hover:text-red-500 hover:fill-red-500 '
              >
                <IconSettings />
                Ajustes
              </a>
            </li>
          </ul>

          <a
            href=""
            className='flex items-center gap-3 text-white fill-white hover:text-red-500 hover:fill-red-500 '
          >
            <IconLogout />
            Salir
          </a>

      </nav>

      </div>
    </main>
  )
}

export default App
