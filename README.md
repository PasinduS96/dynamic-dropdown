# dynamic-dropdown

> You can create dynamic dropdown by passing an array according to your requirements. This package will mostly fullfill many kind of dropdown menu component requirements when developing react apps.

[![NPM](https://img.shields.io/npm/v/dynamic-dropdown.svg)](https://www.npmjs.com/package/dynamic-dropdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dynamic-dropdown
```

## Usage

```jsx
import React from 'react'

import { DropDown } from 'dynamic-dropdown'
import 'dynamic-dropdown/dist/index.css'

const App = () => {
  const options = [
    { value: 'Spring', label: 'Spring' },
    { value: 'Summer', label: 'Summer' },
    { value: 'Autumn', label: 'Autumn' },
    { value: 'Winter', label: 'Winter' }
  ]

  const styles = {
    selection: { width: 300, borderRadius: 10 }, //Styles for dropdown menu
    div: {}, //Styles for div
    options: {} //Styles for dropdown selection option
  }

  return (
    <DropDown
      elements={options}
      selection={styles.selection}
      div={styles.div}
      options={styles.options}
    />
  )
}

export default App
```

## License

MIT © [PasinduS96](https://github.com/PasinduS96/dynamic-dropdown)
