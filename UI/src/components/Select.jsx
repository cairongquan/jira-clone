import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Select(props) {

  const [widthStyle] = useState(props.width)
  const [isShowPop, setIsShowPop] = useState(false)
  const [documentClickEvent, setDocumentClickEvent] = useState(false)

  const isClickCurrentSelectEvent = (e) => {
    const dom = e.target;
    if (!Array.from(dom.classList).includes('select-box__mask')) {
      setIsShowPop(false)
      document.removeEventListener('click', isClickCurrentSelectEvent)
      setDocumentClickEvent(false)
    }
  }

  const placeholderClickEvent = () => {
    setIsShowPop(!isShowPop)
    if (!documentClickEvent) {
      document.addEventListener('click', isClickCurrentSelectEvent)
      setDocumentClickEvent(true)
    }
  }


  return (
    <div style={{ width: widthStyle, borderColor: isShowPop && '#4c9aff' }} className="select-box">
      <div onClick={placeholderClickEvent} className="select-box__placeholder-box">
        <div className='select-box__mask'></div>
        <p>{props.placeholder}</p>
        {isShowPop && <ChevronUp color='#5e6c84' size={18}></ChevronUp> || <ChevronDown color='#5e6c84' size={18}></ChevronDown>}
      </div>
      {isShowPop && <div style={{ width: widthStyle }} className='select-box__list'>
        <ul>
          {(props.list || []).map((item, index) => {
            return (
              <li key={index}>{item.name}
                <div className='select-box__mask'></div>
              </li>
            )
          })}
        </ul>
      </div>}
    </div>
  )
}
