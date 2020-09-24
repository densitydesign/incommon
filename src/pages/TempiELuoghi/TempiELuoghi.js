import React, { useState } from "react"
import MenuTop from "../../components/MenuTop"
import "react-rangeslider/lib/index.css"
import DetailLuogo from "../../components/DetailLuogo"
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl"
import Slider from "react-rangeslider"
import './TempiELuoghi.css'

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaW5jb21tb242MDcwIiwiYSI6ImNrZmRwdmczMTFrMGwycWxkNW52b3NxbG4ifQ.YJHc6ilJWy4aUIh8YDehxQ",
})

const points = [
  {
    coordinates: [12.4829321, 41.8933203],
    radius: 20,
    name: "Roma",
    luoghi: [],
  },
  { coordinates: [9.1905, 45.4668], radius: 30, name: "Milano", luoghi: [] },
  {
    coordinates: [13.3524434, 38.1112268],
    radius: 10,
    name: "Palermo",
    luoghi: [],
  },
  {
    coordinates: [14.2487826, 40.8359336],
    radius: 7,
    name: "Napoli",
    luoghi: [],
  },
  {
    coordinates: [10.99416732788086, 45.43745422363281],
    radius: 10,
    name: "Verona",
    luoghi: [],
  },
  {
    coordinates: [12.3345898, 45.4371908],
    radius: 25,
    name: "Venezia",
    luoghi: [],
  },
]

const ITALY_COORDINATES = [12.5736108, 41.29246]

const styleZoomControl = { position: "absolute", top: 80, right: 30 }

export default function TempiELuoghi() {
  const [town, setTown] = useState(null)
  const [year, setYear] = useState(1980)

  const toggleInfoTown = (town) => {
    setTown(town)
  }

  console.log(town, "town")

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
              return (
                <Layer
                  onClick={() => toggleInfoTown(point)}
                  type="circle"
                  id={"range" + index}
                  paint={{
                    "circle-radius": point.radius,
                    "circle-color": "red",
                    "circle-opacity":
                      town && town === point ? 0.7 : !town ? 0.4 : 0.2,
                    "circle-stroke-color": "#cc0000",
                    "circle-stroke-width": 0,
                    "circle-stroke-opacity": 1,
                  }}
                >
                  <Feature
                    key={`map-range-${index}`}
                    coordinates={point.coordinates}
                  />
                </Layer>
              )
            })}

          <div
            className="position-absolute text-white font-weight-bold"
            style={{ top: 20, right: 30 }}
          >
            <h1>{year}</h1>
          </div>
          <ZoomControl style={styleZoomControl} />
        </Map>
        <div className="d-flex">
          <div className="text-white p-3 border-right">
            Mostra luoghi di Incommon <br />
            <small>Mostra luoghi di sfondo</small>
          </div>
          <div className="slider custom-labels m-2 w-100 mt-4">
            <Slider
              min={1969}
              max={1990}
              labels={{ 0: 1969, 25: 1974, 50: 1979, 75: 1983, 100: 1990 }}
              value={year}
              orientation={"horizontal"}
              onChange={(value) => setYear(value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
