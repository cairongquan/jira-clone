import './index.scss'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import { PackagePlus } from 'lucide-react'

export default function projectManage() {
  return (
    <div className="project-manage">
      <header>
        <Button>
          <PackagePlus size={18}></PackagePlus>
          <span className='ml-[6px]'>new project</span>
        </Button>
      </header>
    </div>
  )
}
