export const sumOfArray = (arr) => arr.reduce((c, n) => c + n, 0)

export const averageOfArray = (arr) => sumOfArray(arr) / arr.length

export const linearRegression = (x, ys) => {
  let xs = x
  if (!xs) {
    xs = []
    ys.forEach((e, i) => {
      xs.push(i + 1)
    })
  }
  const xMean = averageOfArray(xs)
  const yMean = averageOfArray(ys.filter((e) => !Number.isNaN(e)))
  let dividend = 0
  let divisor = 0
  for (let i = 0; i < xs.length; ++i) {
    dividend += (xs[i] - xMean) * (ys[i] - yMean)
    divisor += (xs[i] - xMean) * (xs[i] - xMean)
  }
  const slope = dividend / divisor
  const intercept = yMean - xMean * slope
  const result = []
  xs.forEach((e) => {
    result.push(e * slope + intercept)
  })
  const y_to_yMean = ys.map((e) => (e - yMean) * (e - yMean))
  const y_linear_to_yMean = result.map((e) => (e - yMean) * (e - yMean))
  const r = sumOfArray(y_linear_to_yMean) / sumOfArray(y_to_yMean)
  const n = Math.pow(Math.E, (-1 * intercept) / slope)
  return {
    slope: slope,
    y: result,
    x: xs,
    error: r,
    intercept: intercept,
    n: n
  }
}

export const weibullDistribution = (arr) => {
  if (!arr?.length) {
    return null
  }
  arr.sort((p, n) => (p > n ? 1 : -1))
  const f = arr.map((e, i) => (i + 0.5) / arr.length)
  const x = arr.map((e) => Math.log(e))
  const y = f.map((e) => Math.log(Math.log(1 / (1 - e))))

  return { x: x, y: y, f: f, n: arr.length }
}

export const weibullScale = (scale) => {
  const val = scale.map((e) => Math.log(Math.log(1 / (1 - e))))
  const text = scale.map((e) => `${e * 100}%`)
  return { tickvals: val, ticktext: text }
}
