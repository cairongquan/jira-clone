import { useState } from 'react'

export default function Input(props) {
  const { value = '', placeholder = '', max = false, width, onChange, type = "input" } = props

  const maxLength = Number(max)
  const [inputValue, setInputValue] = useState(value)
  const [inputWidth] = useState(width)

  const inputEvent = (e) => {
    setInputValue(e.target.value)
    onChange && onChange(e.target.value)
  }

  const rendeDom = () => {
    if (type === 'input') {
      return <input style={{ width: inputWidth }} value={inputValue} onInput={inputEvent} maxLength={max && max || undefined} placeholder={placeholder} />
    } else {
      return <textarea style={{ width: inputWidth }} value={inputValue} onInput={inputEvent} maxLength={max && max} placeholder={placeholder}></textarea>
    }
  }

  return (
    <div className="input-box">
      <>{rendeDom()}</>
      {
        maxLength > 0 && (
          <div className="input-box-max">
            <span style={{ fontSize: inputValue.length > maxLength - 2 ? '14px' : '12px' }}>{inputValue.length}</span>
            <span className='max-center'>/</span>
            <span>{maxLength}</span>
          </div>
        )
      }
    </div>
  )
}
