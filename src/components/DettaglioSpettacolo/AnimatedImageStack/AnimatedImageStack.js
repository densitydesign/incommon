import React, {
  useMemo,
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
} from 'react'
import chunk from 'lodash/chunk'
import range from 'lodash/range'
import flatten from 'lodash/flatten'
import { randomUniform, randomInt } from 'd3-random'
import { max } from 'lodash'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom'

const MAX_STACKS_PER_ROW = 3

function randomTransform() {
  return `scale(${randomUniform(0.6, 1)()}) translate(${randomInt(
    -20,
    20
  )()}%,${randomInt(-5, 5)()}%) rotate(${randomInt(-5, 5)()}deg)`
}

function RandImage({ src, randomize, width, height, top, left }) {
  const [transform, setTransform] = useState(() => ({
    stable: randomTransform(),
    random: null,
  }))

  useEffect(() => {
    if (randomize) {
      setTransform((s) => ({
        ...s,
        random: randomTransform(),
      }))
    } else {
      setTransform((s) => {
        if (s.random === null) {
          return s
        }
        return {
          ...s,
          random: null,
        }
      })
    }
  }, [randomize])

  return (
    <animated.img
      className={'stackImage'}
      alt={'Spettacolo'}
      src={src}
      width={width}
      height={height}
      style={{
        transform: transform.random ?? transform.stable,
        top: top,
        left: left,
      }}
    />
  )
}

function makeCenters(width, height, imagesByGroup) {
  const keys = Object.keys(imagesByGroup)
  const num = keys.length

  const chunked =
    num === 4 ? chunk(range(num), 2) : chunk(range(num), MAX_STACKS_PER_ROW)

  console.log(chunked, 'chunked')

  const numRows = chunked.length
  const rowDelta = height / (numRows + 1)

  const centersFlat = flatten(
    chunked.map((c, rowIndex) => {
      const colDelta = width / (c.length + 1)
      const y = rowDelta * (rowIndex + 1)
      return c.map((item, colIndex) => {
        const x = colDelta * (colIndex + 1)
        return { x, y }
      })
    })
  )

  const centers = keys.reduce((acc, item, index) => {
    acc[item] = centersFlat[index]
    return acc
  }, {})
  const chunksLength = chunked.map((c) => c.length)
  return { centers, numRows, numColumns: max(chunksLength) }
}

function makeSize(width, height, numCols, numRows) {
  return {
    imageWidth: (width / numCols) * 0.45,
    imageHeight: (height / numRows) * 0.45,
  }
}

function ImgContainer({
  imageWidth,
  imageHeight,
  index,
  image,
  left,
  top,
  randomize,
  toggleRandomize,
}) {
  const props = useSpring({
    top,
    left,
    width: imageWidth,
    height: imageHeight,
  })

  return (
    <animated.div
      onMouseEnter={toggleRandomize}
      onMouseLeave={toggleRandomize}
      style={{
        width: props.width,
        height: props.height,
        position: 'absolute',
        zIndex: index,
        left: props.left,
        top: props.top,
      }}
    >
      <RandImage
        width={props.width}
        height={props.height}
        index={index}
        randomize={randomize}
        src={image.preview}
      ></RandImage>
    </animated.div>
  )
}

export default function AnimatedImageStack({ group, images, byGroup, link }) {
  const imagesByGroup = useMemo(() => {
    return group ? byGroup[group] : { '': images }
  }, [byGroup, group, images])

  const [size, setSize] = useState({ width: 0, height: 0 })

  const ref = useRef()

  useLayoutEffect(() => {
    setSize({
      width: ref.current.clientWidth,
      height: ref.current.clientHeight,
    })
  }, [])

  const { width, height } = size

  const { centers, numRows, numColumns } = makeCenters(
    width,
    height,
    imagesByGroup
  )
  console.log({ width, height })
  console.log(numRows, numColumns)

  const { imageWidth, imageHeight } = makeSize(
    width,
    height,
    numColumns,
    numRows
  )

  const groupNames = Object.keys(imagesByGroup)

  //console.log(groupNames,'groupNames')

  const [randomizeGroup, setRandomizeGroup] = useState(null)
  const toggleRandomizeGroup = (groupName) => () => {
    if (randomizeGroup === groupName) {
      setRandomizeGroup(null)
    } else {
      setRandomizeGroup(groupName)
    }
  }

  return (
    <div ref={ref} style={{ position: 'relative' }} className="w-100 h-100">
      {height > 0 && width > 0 && groupNames.map((groupName, groupIndex) => (
        <Link to={link} key={groupName}>
          {imagesByGroup[groupName].map((image, index) => (
            <ImgContainer
              randomize={randomizeGroup === groupName}
              toggleRandomize={toggleRandomizeGroup(groupName)}
              key={index}
              imageHeight={imageHeight}
              imageWidth={imageWidth}
              index={index}
              image={image}
              left={centers[groupName].x - imageWidth / 2}
              top={centers[groupName].y - imageHeight / 2}
            ></ImgContainer>
          ))}
        </Link>
      ))}
    </div>
  )
}
