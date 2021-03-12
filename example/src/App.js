import React from 'react'

import { DropDown } from 'dynamic-dropdown'
import 'dynamic-dropdown/dist/index.css'

const App = () => {

  const options = [
    { value: "Spring", label: "Spring", color: "#498205" },
    { value: "Summer", label: "Summer", color: "#c19c00" },
    { value: "Autumn", label: "Autumn", color: "#da3b01" },
    { value: "Winter", label: "Winter", color: "#004e8c" }
  ];

  const styles = {
    selection: {width: 300 , borderRadius: 10}
  }

  return <DropDown elements={options} selection={styles.selection}/>
}

export default App
