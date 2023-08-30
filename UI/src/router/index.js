import ProjectEditView from '@/views/ProjectEdit'
import KanBan from '../views/KanBan'

export default [{
    path: '/project/kanban',
    component: KanBan()
  },
  {
    path: '/project/edit',
    component: ProjectEditView()
  }
]
