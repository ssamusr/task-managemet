import { Logo } from '../Icons'
import { LinksNav } from './LinksNavBar'

export function SideNavBar (): JSX.Element {
  return (
    <aside className='h-screen'>
      <div className='w-56 h-full fixed top-0 left-0 px-8 py-6 bg-dark-black'>
        <div className='w-full h-1/5'>
            <a
                href="/"
                className='flex items-center gap-3'
                >
                <Logo className=''/>
                <span className='w-[6ch] text-lg font-semibold text-[#29A19C] '>Tasks Book</span>
            </a>
        </div>

        <LinksNav />
      </div>
    </aside>

  )
}
