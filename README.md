# react-weibull

> a simple weibull distribution plot with plotly

[![NPM](https://img.shields.io/npm/v/react-weibull.svg)](https://www.npmjs.com/package/react-weibull.js) 

## Install
```bash
npm i react-weibull.js
```

## Usage

### Simple use
```jsx
import React from 'react'

import { Weibull } from 'react-weibull.js'

const App = () => {
  return <Weibull data={[1, 2, 3, 4, 5]} />
}

export default App

```
![weibull](weibull.png)

### Props 
##### more layout props here https://plotly.com/javascript/reference/layout/
```jsx
<Weibull data={[1, 2, 3, 4, 5]} 
  name="trace name" 
  title="plot title"
  width={500} 
  height={500}
  scale={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]} //10% 20% 30% 40% 50% 60% 70% 80% 90%
  showlegend={true}
/>

```

## License

MIT © [tungs0ul](https://github.com/tungs0ul)
