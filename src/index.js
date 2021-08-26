import React, { useState, useEffect } from 'react'
import Plotly from './PlotlyPlot'
import createPlotlyComponent from 'react-plotly.js/factory'

import { weibullDistribution, weibullScale, linearRegression } from './utils'

const Plot = createPlotlyComponent(Plotly)

export const Weibull = ({
  data,
  name = '',
  scale = [
    0.0001, 0.005, 0.01, 0.05, 0.1, 0.2, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.99
  ],
  ...rest
}) => {
  const [plotData, setPlotData] = useState({
    wb: { x: [], y: [], f: [] },
    lg: { x: [], y: [] }
  })

  useEffect(() => {
    if (!data?.length) {
      setPlotData({
        wb: { x: [], y: [], f: [] },
        lg: { x: [], y: [] }
      })
      return
    }
    const wb = weibullDistribution(data)
    const lg = linearRegression(wb.x, wb.y)
    setPlotData({ wb: wb, lg: lg })
  }, [data])
  return (
    <Plot
      data={[
        {
          ...plotData.wb,
          type: 'scatter',
          mode: 'markers',
          name: name,
          text: plotData.wb.f.map((e) => `${(100 * e).toFixed(2)}%`),
          hovertemplate: 'y: %{text}' + '<br>x: %{x}'
        },
        {
          ...plotData.lg,
          hoverinfo: 'none',
          name: 'linear regression',
          marker: {
            size: 1
          }
        }
      ]}
      layout={{
        showlegend: false,
        yaxis: {
          tickmode: 'array',
          ...weibullScale(scale)
        },
        ...rest
      }}
      config={{
        responsive: true
      }}
    />
  )
}
