import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const MessagesContainer = ({messages}) => (
  <div>
      {messages.map((message, index) =>
        <div key={index} className={`user-message alert alert-${message.type}`}>{message.text}</div>
      )}
  </div>
)

MessagesContainer.PropTypes = {
  messages: PropTypes.array
}

const mapStateToProps = state => ({
  messages: state.messages
})

export default connect(
  mapStateToProps
)(MessagesContainer)
