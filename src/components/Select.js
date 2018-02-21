import React from 'react'
import PropTypes from 'prop-types'

const Select = ({options, label, name, onChange}) => (
    <div className="form-group">
        <label>{label}</label>
        <select className="form-control" onChange={e => {
            onChange({[name]:e.target.value})
        }}>
            {options.map((option, key) =>
            <option key={key} value={option.value}>{option.text}</option>
            )}
        </select>
    </div>
)

Select.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func
}

export default Select
