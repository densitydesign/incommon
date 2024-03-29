import { groupBy } from 'lodash'
import React, { useMemo } from 'react'
import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts'
import './DetailLuogo.css'

const CustomizedDot = (props) => {
  const { cx, cy, payload, year } = props

  if (payload.year === year) {
    return (
      <svg
        x={cx - 5}
        y={cy - 5}
        width={10}
        height={10}
        fill="#d92100"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>
    )
  }

  return ''
}

export default function DetailLuogo({
  town,
  toggleTown,
  spettacoli,
  networkYear,
  showBackground,
  dataYearsTown,
  incommonDataYearsTown,
  closing,
  setClosing,
  year,
}) {
  const networkSpettacoli = networkYear.map((spet) => ({
    titolo: spet.evento,
    ...spet,
  }))
  const spet = showBackground
    ? spettacoli.concat(networkSpettacoli)
    : spettacoli
  const spettacoliGrouped = groupBy(spet, 'luogo')

  const dataForChart = []

  for (let index = 1959; index < 1979; index++) {
    const numSpettacoli = incommonDataYearsTown[index]?.[town] ?? 0
    const numNetwork = dataYearsTown[index]?.[town] ?? 0

    const dataChart = {}
    if (showBackground) {
      dataChart['year'] = index
      dataChart['numero'] = numSpettacoli + numNetwork
    } else {
      dataChart['year'] = index
      dataChart['numero'] = numSpettacoli
    }
    dataForChart.push(dataChart)
  }

  const closeClass = useMemo(() => {
    if (closing) {
      return 'closingDetail'
    }
  }, [closing])

  return (
    <div
      className={`DetailLuogo ${closeClass}`}
      onAnimationEnd={() => {
        if (closing) {
          setClosing(false)
          toggleTown(null)
        }
      }}
    >
      <div
        className="pointer p-4 text-right"
        onClick={() => {
          setClosing(true)
        }}
      >
        <img src="/close-document.svg" alt="close" />
      </div>
      <div className="p-4">
        <h4>{town}</h4>
      </div>
      <div>
        <ResponsiveContainer width={'100%'} height={150}>
          <LineChart
            width={340}
            height={150}
            data={dataForChart}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis hide dataKey="year" />
            <Line
              dot={<CustomizedDot year={year} />}
              type="linear"
              dataKey="numero"
              stroke="#FFF"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="pl-4 pr-4">
        {Object.keys(spettacoliGrouped).map((place, index) => {
          return (
            <div className="mt-4" key={index}>
              <div>
                <u>{place}</u>
              </div>
              {spettacoliGrouped[place].map((spettacolo) => (
                <div key={spettacolo.titolo}>
                  <div className="mt-1">{spettacolo.titolo}</div>
                  {spettacolo.data && (
                    <div className="mt-1">
                      <i>{spettacolo.data}</i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
