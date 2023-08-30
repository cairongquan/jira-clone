export default function FormItem(props) {
  return (
    <div className="form-item">
      <p>{props.name}</p>
      <div className="form-item_child">
        {props.children}
      </div>
    </div>
  )
}
