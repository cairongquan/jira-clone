import * as Icons from 'lucide-react'

export default function Modal(props) {

  const closeModalByMask = (e) => {
    e.preventDefault()
    props.canShow(true)
  }

  return (
    <div className="modal-view">
      <div className="modal-mask-view" onClick={closeModalByMask}>
      </div>
      <div className="modal-mask-controll">
        <div className="modal-title">
          <div className='modal-title__main'>
            <>{Icons[props.icon].render({ color: '#172b4d', size: 26 })}</>
            <p className='ml-[4px]'>{props.title || '弹框'}</p>
          </div>
        </div>
        <div className="modal-content">
          <>{props.children}</>
        </div>
        <div className='modal-footer'>
          {props.footer}
        </div>
      </div>
    </div>
  )
}
