import { NavLink } from 'react-router-dom'

import { IconChat, IconHome, IconLogout, IconSettings, IconTasks, IconTimeline } from '../../components/Icons'

export function LinksNav (): JSX.Element {
  return (
    <nav className='flex flex-col justify-between w-full h-4/5'>
      <ul className='flex flex-col gap-8'>
        <li>
          <NavLink
            to='/'
            className='flex items-center gap-3 text-white fill-white hover:text-cian-turquoise hover:fill-cian-turquoise'
          >
            <IconHome />
            Inicio
          </NavLink>
        </li>

        <li>
          <NavLink
          to='/timeline'
          className='flex items-center gap-3 text-white fill-white hover:text-cian-turquoise hover:fill-cian-turquoise '
          >
            <IconTimeline />
            Timeline
          </NavLink>
        </li>

        <li>
          <NavLink
          to='/tasks'
          className='flex items-center gap-3 text-white fill-white hover:text-cian-turquoise hover:fill-cian-turquoise'
          >
            <IconTasks />
            Tareas
          </NavLink>
        </li>

        <li>
          <NavLink
          to='/chat'
          className='flex items-center gap-3 text-white fill-white hover:text-cian-turquoise hover:fill-cian-turquoise'
          >
            <IconChat />
            Chat
          </NavLink>
        </li>

        <li>
          <a
          href=""
          className='flex items-center gap-3 text-white fill-white hover:text-cian-turquoise hover:fill-cian-turquoise'
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
  )
}
