import { useState } from 'react'

import Input from "@/components/Input"
import FormItem from "@/components/FormItem"
import Select from "@/components/Select"
import Button from "../../components/Button"
import { Save, Trash2, Check } from 'lucide-react'


import { getProjectCoverList } from '@/utils/tools'

function chooseProjectCoverControll({ defaultValue = '' }) {
  const projectFileList = getProjectCoverList()

  return (
    <div className="w-[460px] h-[250px] overflow-y-auto p-[12px] border-solid border-[#dfe1e6] border-2 rounded-[4px]">
      <ul className="w-full flex flex-wrap">
        {projectFileList.map((item, index) => {
          return (
            <div className="w-[96px] m-[4px] rounded-[4px] cursor-pointer overflow-hidden relative" key={index}>
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

export default function ProjectEditView() {
  return (<div className="p-[20px]">
    <p className="text-[22px] font-bold select-none font-mono">
      Project Detail
    </p>
    <div className="mt-[40px]">
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
        <div className="flex w-[460px] justify-start">
          <Button>
            <Save size={14} className="mr-[4px]"></Save>
            <span>Save changes</span>
          </Button>
          <div className="ml-[10px]">
            <Button className="ml-[12px]">
              <Trash2 size={14} className="mr-[4px]"></Trash2>
              <span>Clearn all</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  </div>)
}
