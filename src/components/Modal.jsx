import React, { useRef } from 'react'
import { forwardRef,useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import Button1 from './Button1'

 const Modal = forwardRef(function Modal({children,buttonCaption},ref) {
    const dialog = useRef();
    useImperativeHandle(ref,()=>{
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4  rounded-md shadow-md'>
        {children}
        <form action="" method='dialog' className='mt-4 text-right '>
              <Button1>{buttonCaption}</Button1>
        </form>
    </dialog>,document.getElementById('modal-root')
  )
})

export default Modal