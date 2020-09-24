import React, { useState } from "react"
import MenuTop from "../../components/MenuTop"
import DetailLuogo from "../../components/DetailLuogo"
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import "./TempiELuoghi.css"

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaW5jb21tb242MDcwIiwiYSI6ImNrZmRwdmczMTFrMGwycWxkNW52b3NxbG4ifQ.YJHc6ilJWy4aUIh8YDehxQ",
})

const points = [
  {
    coordinates: [12.4829321, 41.8933203],
    name: "Roma",
    luoghi: [],
  },
  { coordinates: [9.1905, 45.4668], radius: 30, name: "Milano", luoghi: [] },
  {
    coordinates: [13.3524434, 38.1112268],
    name: "Palermo",
    luoghi: [],
  },
  {
    coordinates: [12.3345898, 45.4371908],
    name: "Venezia",
    luoghi: [],
  },
]

console.log({
  1969: "1969",
  1972: "1972",
  1974: "1974",
  1977: "1977",
  1979: "1979",
})

const dataYears = {
  1969: { Roma: 25, Venezia: 20, Palermo: 5 },
  1970: { Roma: 30, Venezia: 10, Palermo: 10 },
  1971: { Roma: 10, Venezia: 60, Palermo: 15 },
  1972: { Roma: 45, Venezia: 5, Palermo: 20 },
  1973: { Roma: 60, Venezia: 15, Palermo: 24 },
  1974: { Roma: 20, Venezia: 23, Palermo: 21 },
  1975: { Roma: 10, Venezia: 67, Palermo: 10 },
  1976: { Roma: 45, Venezia: 34, Palermo: 3 },
  1977: { Roma: 10, Venezia: 32, Palermo: 16 },
  1978: { Roma: 35, Venezia: 10, Palermo: 2 },
  1979: { Roma: 10, Venezia: 5, Palermo: 10 },
}

const ITALY_COORDINATES = [12.5736108, 41.29246]

const styleZoomControl = { position: "absolute", top: 80, right: 30, border: 'red' }

export default function TempiELuoghi() {
  const [town, setTown] = useState(null)
  const [year, setYear] = useState(1975)

  const toggleInfoTown = (town) => {
    setTown(town)
  }

  console.log(year, "year")

  return (
    <div className="TempiELuoghi position-relative">
      <MenuTop />
      {town && <DetailLuogo town={town} toggleTown={toggleInfoTown} />}
      <div className="body-tempi-e-luoghi">
        <Map
          // eslint-disable-next-line react/style-prop-object
          style="mapbox://styles/incommon6070/ckfe38qug02ay19msu65esswa"
          containerStyle={{
            height: "80vh",
            width: "100%",
          }}
          zoom={[5]}
          scrollZoom={false}
          center={ITALY_COORDINATES}
        >
          {points &&
            points.map((point, index) => {
              console.log(dataYears[year])
              return (
                <Layer
                  key={`map-range-${index}`}
                  onClick={() => toggleInfoTown(point)}
                  type="circle"
                  id={"range" + index}
                  paint={{
                    "circle-radius": dataYears[year][point.name]
                      ? dataYears[year][point.name]
                      : 0,
                    "circle-color": "red",
                    "circle-opacity":
                      town && town === point ? 0.7 : !town ? 0.4 : 0.2,
                    "circle-stroke-color": "#cc0000",
                    "circle-stroke-width": 0,
                    "circle-stroke-opacity": 1,
                  }}
                >
                  <Feature coordinates={point.coordinates} />
                </Layer>
              )
            })}

          <div
            className="position-absolute text-white font-weight-bold year-active"
            style={{ top: 20, right: 30 }}
          >
            <h1>{year}</h1>
          </div>
          <ZoomControl style={styleZoomControl} />
        </Map>
        <div className="d-flex">
          <div
            className="text-white p-3 border-right"
          >
            Mostra luoghi di Incommon <br />
            <small>Mostra luoghi di sfondo</small>
          </div>
          <div className="p-4 mt-3 w-100">
            <Slider
              step={1}
              min={1969}
              trackStyle={{ backgroundColor: "#242425" }}
              railStyle={{ backgroundColor: "#242425" }}
              max={1979}
              value={year}
              onChange={(value) => {
                toggleInfoTown(null)
                setYear(value)
              }}
              marks={{
                1969: "1969",
                1971: "1971",
                1973: "1973",
                1975: "1975",
                1977: "1977",
                1979: "1979",
              }}
              dotStyle={{ display: "none" }}
              activeDotStyle={{
                width: 20,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
