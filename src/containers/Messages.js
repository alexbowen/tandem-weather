import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const MessagesContainer = ({messages}) => (
  <section>
      {messages.map((message, index) =>
        <div key={index} className={`alert alert-${message.type}`}>{message.text}</div>
      )}
  </section>
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
