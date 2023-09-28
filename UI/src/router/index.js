import ProjectEditView from '@/views/ProjectEdit'
import KanBan from '../views/KanBan'
import ProjectManage from '../views/ProjectManage'

export default [{
    path: '/project/kanban',
    component: KanBan
  },
  {
    path: '/project/edit',
    component: ProjectEditView
  },
  {
    path: '/project/manage',
    component: ProjectManage,
    isMain: true
  }
]
