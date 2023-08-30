import Input from "@/components/Input"
import FormItem from "@/components/FormItem"
import Select from "@/components/Select"

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
      </form>
    </div>
  </div>)
}
