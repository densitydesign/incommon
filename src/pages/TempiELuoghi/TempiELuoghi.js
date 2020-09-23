import React from "react"
import MenuTop from "../../components/MenuTop"
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl"

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaW5jb21tb242MDcwIiwiYSI6ImNrZmRwdmczMTFrMGwycWxkNW52b3NxbG4ifQ.YJHc6ilJWy4aUIh8YDehxQ",
})

const points = [
  { coordinates: [12.4829321, 41.8933203], radius: 20 },
  { coordinates: [9.1905, 45.4668], radius: 30 },
  { coordinates: [13.3524434, 38.1112268], radius: 10 },
  { coordinates: [14.2487826, 40.8359336], radius: 7 },
  { coordinates: [10.99416732788086, 45.43745422363281], radius: 10 },
  { coordinates: [12.3345898 ,45.4371908], radius: 25 }
]

const styleZoomControl = { position: "absolute", top: 80, right: 30 }

export default function TempiELuoghi() {
  return (
    <div className="TempiELuoghi">
      <MenuTop />
      <div className="body-tempi-e-luoghi">
        <Map
          // eslint-disable-next-line react/style-prop-object
          style="mapbox://styles/incommon6070/ckfe38qug02ay19msu65esswa"
          containerStyle={{
            height: "100vh",
            width: "100%",
          }}
          zoom={[5]}
          center={[12.5736108, 41.29246]}
        >
          {points &&
            points.map((point, index) => {
              return (
                <Layer
                  type="circle"
                  id={"range" + index}
                  paint={{
                    "circle-radius": point.radius,
                    "circle-color": "red",
                    "circle-opacity": 0.6,
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
            <h1>1969</h1>
          </div>
          <ZoomControl style={styleZoomControl} />
        </Map>
        <div className='d-flex'>
            <div className='text-white p-3 border-right'>
              Mostra luoghi di Incommon <br />
              <small>Mostra luoghi di Incommon</small>
            </div>
        </div>
      </div>
    </div>
  )
}
