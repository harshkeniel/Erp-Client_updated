import React from 'react'
import JoditEditor from 'jodit-react'

import './RichTextEditor.css'

const config = {
  // buttons: ['bold', 'italic', 'underline', 'image', 'ul', 'ol', 'eraser', 'font', 'fontsize', 'table', 'link', 'align', 'undo', 'redo', 'preview']
}

const RichTextEditor = () => {
  return (
    <div className="richTextEditor">
      <JoditEditor config = {config} />
    </div>
  )
}

export default RichTextEditor