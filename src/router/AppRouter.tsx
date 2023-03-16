import { Route, Routes } from 'react-router-dom'
import { SideNavBar } from '../components/SideNavBar/SideNavBar'
import { ChatPage } from '../pages/ChatPage'
import { HomePage } from '../pages/HomePage'
import { TasksPage } from '../pages/TasksPage'
import { TimelinePage } from '../pages/TimelinePage'

export function AppRouter (): JSX.Element {
  return (
    <>
      <SideNavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/timeline' element={<TimelinePage />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/*' element={<HomePage />} />
      </Routes>
    </>
  )
}
