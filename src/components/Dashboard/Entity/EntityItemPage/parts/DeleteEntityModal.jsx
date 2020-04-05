import React from 'react'
import PromptModal from '../../../../shared/modals/PromptModal/PromptModal'

const DeleteEntityModal = React.forwardRef((props, ref) => (
  <PromptModal
    ref={ref}
    title={' آیا میخواهید این مورد را حذف کنید؟' || props.title}
    okButton={'حذف' || props.okButton}
    okClassName={'danger' || props.okClassName}
    cancelClassName={props.cancelClassName}
    cancelButton='xd'
    onOk={props.onOk}
    onCancel={props.onCancel}
  />
))

export default DeleteEntityModal
