import * as IconLucide from 'lucide-react'

export default function MenuItem({ icon = '', text = '', color = '', background = false, onClick }) {
  let IconControll = null
  if (IconLucide[icon]) {
    IconControll = IconLucide[icon].render({
      size: 20,
      color,
    })
  }

  const clickEvent = () => {
    onClick()
  }

  return (
    <div onClick={clickEvent} style={{ color, background: background ? '#ebecf0' : '' }} className='icon-button'>
      <> {IconControll}</>
      <p>{text}</p>
    </div>
  )
}
