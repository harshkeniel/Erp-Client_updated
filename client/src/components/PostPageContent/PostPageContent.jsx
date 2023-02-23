import React from 'react'

import LeftPostPageContent from './LeftPostPageContent/LeftPostPageContent'
import RightPostPageContent from './RightPostPageContent/RightPostPageContent'

import './PostPageContent.css'

const PostPageContent = () => {
  return (
    <div className =" postPageContent">
      <LeftPostPageContent />
      <RightPostPageContent />
    </div>
  )
}

export default PostPageContent