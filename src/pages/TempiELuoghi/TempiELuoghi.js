import React, { useMemo, useState } from "react"
import MenuTop from "../../components/MenuTop"
import DetailLuogo from "../../components/TempiELuoghi/DetailLuogo"
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl"
import Slider from "rc-slider"
import groupBy from "lodash/groupBy"
import uniqBy from "lodash/uniqBy"
import countBy from "lodash/countBy"
import network from "../../data/network-luoghi.json"
import "rc-slider/assets/index.css"
import "./TempiELuoghi.css"
import useSpettacoli from "../../hooks/spettacoli"

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaW5jb21tb242MDcwIiwiYSI6ImNrZmRwdmczMTFrMGwycWxkNW52b3NxbG4ifQ.YJHc6ilJWy4aUIh8YDehxQ",
})

function calculateDataYearsTown(network) {
  const dataByYears = groupBy(network, "anno")
  const years = uniqBy(
    network.filter((a) => a.anno !== null),
    "anno"
  )

  return years.reduce((data, year) => {
    const anno = year.anno
    const yearData = dataByYears[anno]
    const countTown = countBy(
      yearData.filter((a) => a.citta !== null),
      "citta"
    )
    data[anno] = countTown
    return data
  }, {})
}

const cities = uniqBy(network, "citta")

const dataYearsTown = calculateDataYearsTown(network)

const marks = {
  1959: "1959",
  1961: "1961",
  1963: "1963",
  1965: "1965",
  1967: "1967",
  1969: "1969",
  1971: "1971",
  1973: "1973",
  1975: "1975",
  1977: "1977",
  1979: "1979",
}

const ITALY_COORDINATES = [12.5736108, 41.29246]

const styleZoomControl = {
  position: "absolute",
  top: 80,
  right: 30,
  border: "#d92100",
}

export default function TempiELuoghi() {
  const [town, setTown] = useState(null)
  const [closing,setClosing] = useState(false)
  const [year, setYear] = useState(1969)
  const [showBackgound, setShowBackground] = useState(true)

  const [{ spettacoli }] = useSpettacoli()
  const incommonDataYearsTown = useMemo(() => {
    if (!spettacoli) {
      return {}
    }
    return calculateDataYearsTown(spettacoli)
  }, [spettacoli])

  const toggleInfoTown = (town) => {
    setTown(town)
  }

  const spettacoliYear = useMemo(() => {
    if (spettacoli === null && !town) {
      return []
    }
    return spettacoli.filter(
      (spettacolo) => spettacolo.anno === year && spettacolo.citta === town
    )
  }, [spettacoli, year, town])

  const networkYear = useMemo(() => {
    if (!town) {
      return []
    }
    return network.filter(
      (spettacolo) =>
        parseInt(spettacolo.anno) === year &&
        spettacolo.citta === town
    )
  }, [year, town])

  return (
    <div className="TempiELuoghi position-relative vh-100">
      <MenuTop />
      {town && (
        <DetailLuogo
          showBackground={showBackgound}
          spettacoli={spettacoliYear}
          networkYear={networkYear}
          town={town}
          closing={closing}
          setClosing={setClosing}
          year={year}
          toggleTown={toggleInfoTown}
          incommonDataYearsTown={incommonDataYearsTown}
          dataYearsTown={dataYearsTown}
        />
      )}
      <div className="body-tempi-e-luoghi page">
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
          {cities &&
            cities.map((citta, index) => {
              let radiusTown =
                incommonDataYearsTown[year]?.[citta["citta"]] ?? 0
              if (showBackgound) {
                radiusTown += dataYearsTown[year]?.[citta["citta"]] ?? 0
              }

              // NOTE: Skaffo trick to have a reasonable radius...
              radiusTown = radiusTown * 5

              const opacityCircle =
                town && town === citta.citta ? 0.7 : !town ? 0.4 : 0.2

              const coords = [
                citta.coords[0]["longitude"],
                citta.coords[0]["latitude"],
              ]
              return (
                <Layer
                  key={`map-range-${index}`}
                  onClick={() => toggleInfoTown(citta.citta)}
                  type="circle"
                  id={"range" + index}
                  paint={{
                    "circle-radius": radiusTown,
                    "circle-color": "#d92100",
                    "circle-opacity": opacityCircle,
                    "circle-stroke-color": "#d92100",
                    "circle-stroke-width": 0,
                    "circle-stroke-opacity": 1,
                  }}
                >
                  <Feature coordinates={coords} />
                </Layer>
              )
            })}

          <div
            className="position-absolute text-white font-weight-bold year-active"
            style={{ top: 20, right: 30 }}
          >
            <h1 className="year-right">{year}</h1>
          </div>
          <ZoomControl style={styleZoomControl} />
        </Map>
        <div className="d-flex">
          <div className="p-4 mt-3 w-100">
            <Slider
              step={1}
              min={1959}
              trackStyle={{ backgroundColor: "#242425" }}
              railStyle={{ backgroundColor: "#242425" }}
              max={1979}
              value={year}
              onChange={(value) => {
                setYear(value)
              }}
              marks={marks}
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
