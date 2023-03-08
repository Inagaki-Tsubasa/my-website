import React from 'react'

const ContentTitle = (props) => {
  return (
    <div className="contents-title">
        <div className="titles">
            <h1>{props.title}</h1>
        </div>
    </div>
  )
}

export default ContentTitle