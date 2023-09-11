import './index.scss'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Input from "@/components/Input"
import FormItem from "@/components/FormItem"
import Select from "@/components/Select"
import { PackagePlus, Check, Save, Trash2 } from 'lucide-react'

import { getProjectCoverList } from '@/utils/tools'


function chooseProjectCoverControll({ defaultValue = '' }) {
  const projectFileList = getProjectCoverList()

  return (
    <div className="w-[460px] h-[250px] overflow-y-auto p-[12px] border-solid border-[#dfe1e6] border-[2px] rounded-[4px]">
      <ul className="w-full flex flex-wrap">
        {projectFileList.map((item, index) => {
          return (
            <div className="w-[94px] m-[5px] rounded-[4px] cursor-pointer overflow-hidden relative" key={index}>
              <img draggable="false" src={item} key={index}></img>
              <div style={{ display: defaultValue === item ? 'block' : 'none' }} className="w-[26px] h-[26px] rounded-[50%] absolute right-[4px] top-[4px] bg-[#0052cc] flex justify-center items-center">
                <Check color="#fff" size={14} fontWeight={800}></Check>
              </div>
            </div>)
        })
        }
      </ul >
    </div>
  )
}

export default function projectManage() {
  return (
    <div className="project-manage">
      <header>
        <Button>
          <PackagePlus size={18}></PackagePlus>
          <span className='ml-[6px]'>new project</span>
        </Button>
      </header>
      <Modal title='New project' icon="PackagePlus" footer={
        <div className='flex items-center justify-center w-full h-[42px]'>
          <div className='mr-[10px]'>
            <Button><Trash2></Trash2>Clear all</Button>
          </div>
          <div>
            <Button><Save></Save>Save</Button>
          </div>
        </div>}>
        <form>
          <FormItem name="Project Name">
            <Input placeholder="Input Project Name" width="460px" max="30"></Input>
          </FormItem>
          <FormItem name="Git Url">
            <Input placeholder="Input Project Git Url" width="460px"></Input>
          </FormItem>
          <FormItem name="Project Category">
            <Select placeholder="Select Category" width="460px"></Select>
          </FormItem>
          <FormItem name="Project Description">
            <Input max="300" type="textarea" placeholder="Input Project Description" width="460px"></Input>
          </FormItem>
          <FormItem name="Project cover">
            <>{chooseProjectCoverControll({})}</>
          </FormItem>
        </form>
      </Modal>
    </div>
  )
}
