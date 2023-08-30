import Input from "../../components/Input"
import FormItem from "../../components/FormItem"

export default function ProjectEditView() {
  return (<div className="p-[20px]">
    <p className="text-[22px] font-bold select-none font-mono">
      Project Detail
    </p>
    <div className="mt-[30px]">
      <form>
        <FormItem name="Project Name">
          <Input placeholder="Input Project Name" width="260px" max="30"></Input>
        </FormItem>
        <FormItem name="Project Description">
          <Input placeholder="Input Project Description" width="760px"></Input>
        </FormItem>
      </form>
    </div>
  </div>)
}
