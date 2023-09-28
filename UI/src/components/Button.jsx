export default function Button(props) {
  return (
    <button className="button-box" onClick={props.onClick}>
      {props.children}
    </button>
  )
}
