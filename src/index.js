import React from 'react'
import styles from './styles.module.css'

export const DropDown = ({ selection, options, div, elements }) => {
  return( 
  <div style={div}>
  <select style={selection}>
    <option style={options} value="0">Select car:</option>
    {elements.map(item => {
      return  <option style={options} value={item.value}>{item.label}</option>
    })}
  </select>
</div>)


}
