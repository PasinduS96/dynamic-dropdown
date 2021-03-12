import React from 'react'

import { DropDown } from 'dynamic-dropdown'
import 'dynamic-dropdown/dist/index.css'

const App = () => {

  const options = [
    { value: "Spring", label: "Spring"},
    { value: "Summer", label: "Summer"},
    { value: "Autumn", label: "Autumn"},
    { value: "Winter", label: "Winter"}
  ];

  const styles = {
    selection: {width: 300 , borderRadius: 10},
    div: {},
    options: {}
  }

  return <DropDown 
    elements={options} 
    selection={styles.selection} 
    div={styles.div} 
    options={styles.options}
  />
}

export default App
