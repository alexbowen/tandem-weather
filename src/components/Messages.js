import React from 'react'
import PropTypes from 'prop-types'

const Messages = ({messages}) => (
  <div>
      {messages.map((message, index) =>
        <div key={index} className={`user-message alert alert-${message.type}`}>{message.text}</div>
      )}
  </div>
)

Messages.propTypes = {
    messages: PropTypes.array.isRequired
}

export default Messages