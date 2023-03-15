import { SideNavBar } from '../components/SideNavBar/SideNavBar'

export function HomePage (): JSX.Element {
  return (
        <>
      <div className='w-full h-screen'>
      <SideNavBar />
      <header className='flex items-center justify-between w-[calc(100%-14rem)] h-auto fixed top-0 left-56 pt-6 pr-16 pb-4 pl-6 bg-dark-black'>
        <button
          className='px-6 py-2 text-white bg-cian-turquoise rounded-lg'
        >
          Nueva Tarea
        </button>
        <span>
          Icono
        </span>

        <div className='flex items-center gap-4'>
          <p>¡Qué tengas un buen día, username!</p>
          <button
            className='w-10 h-10 rounded-full bg-cian-turquoise border-white border-2'
          >
          </button>
          <button className='w-5 h-5 rounded-sm bg-cian-turquoise text-white'>
            A
          </button>
        </div>

      </header>

      <main className='flex w-[calc(100%-14rem)] h-full fixed top-20 left-56 bg-dark-black'>
        <section
          className='w-full h-full'
        >
            <article className='m-6 p-6 rounded-lg bg-gray-charcoal'>
              <h2 className='text-xl text-cian-turquoise font-bold text-center mb-2'>Resumen</h2>
              <div className='flex items-center justify-between'>

                <div className='flex flex-col justify-center items-center gap-1'>
                  <p className='text-base text-white'>Creado</p>
                  <div className='flex flex-col justify-center items-center w-24 h-24 p-4 border-2 border-cian-turquoise rounded-full'>
                    <p className='text-3xl text-cian-turquoise'>113</p>
                    <p className='text-lg text-cian-turquoise'>Tareas</p>
                  </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-1'>
                  <p className='text-base text-white'>Terminado</p>
                  <div className='flex flex-col justify-center items-center w-24 h-24 p-3 border-2 border-cian-turquoise rounded-full'>
                    <p className='text-3xl text-cian-turquoise'>1130</p>
                    <p className='text-lg text-cian-turquoise'>Tareas</p>
                  </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-1'>
                  <p className='text-base text-white'>En Proceso</p>
                  <div className='flex flex-col justify-center items-center w-24 h-24 p-4 border-2 border-cian-turquoise rounded-full'>
                    <p className='text-3xl text-cian-turquoise'>113</p>
                    <p className='text-lg text-cian-turquoise'>Tareas</p>
                  </div>
                </div>

              </div>
            </article>

            <article className='m-6 p-6 rounded-lg bg-gray-charcoal'>
            <h2 className='text-xl text-cian-turquoise font-bold text-center mb-2'>Tareas Activas</h2>
              <ul className='flex flex-col gap-2'>
                <li className='px-3 py-2 text-lg text-white border-2 border-cian-turquoise rounded-lg'>
                  <a href="https://google.es" target={'_blank'} rel="noreferrer">
                    Tarea pendiente
                  </a>
                </li>
                <li className='px-3 py-2 text-lg text-white border-2 border-cian-turquoise rounded-lg'>
                  <a href="https://google.es" target={'_blank'} rel="noreferrer">
                    Tarea pendiente
                  </a>
                </li>
                <li className='px-3 py-2 text-lg text-white border-2 border-cian-turquoise rounded-lg'>
                  <a href="https://google.es" target={'_blank'} rel="noreferrer">
                    Tarea pendiente
                  </a>
                </li>
              </ul>
            </article>

        </section>
        <section
          className='w-full h-full'
        >
          <article className='m-6 p-6 rounded-lg bg-gray-charcoal'>
            <h2 className='text-xl text-cian-turquoise font-bold text-center mb-2'>Pomodoro</h2>
            <div className='flex justify-around items-center'>
              <p className='text-lg text-white'>45:00</p>
              <p className='text-lg text-white'>5 ciclos</p>
              <button className='px-6 py-2 text-white bg-cian-turquoise rounded-lg'>Activar</button>
            </div>
          </article>

          <article className='m-6 p-6 rounded-lg bg-gray-charcoal'>
            <h2 className='text-xl text-cian-turquoise font-bold text-center mb-2'>Anotaciones</h2>
            <textarea
              placeholder="Escribe tus anotaciones aquí..."
              className='w-full h-60 p-6 text-white border-none bg-transparent resize-none focus:outline-cian-turquoise'
            >
              Arreglar el color del border del textarea
            </textarea>
          </article>

        </section>

      </main>
      </div>
    </>
  )
}
