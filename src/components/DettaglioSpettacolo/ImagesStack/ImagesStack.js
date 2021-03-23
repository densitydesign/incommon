import React, { useState, useEffect } from 'react'
import { randomUniform, randomInt } from 'd3-random'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './ImagesStack.css'

function randomTransform() {
  return `scale(${randomUniform(0.6, 1)()}) translate(${randomInt(
    -20,
    20
  )()}%,${randomInt(-5, 5)()}%) rotate(${randomInt(-5, 5)()}deg)`
}

function RandImage({ src, randomize }) {
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
    <img
      className={'stackImage'}
      alt={'Spettacolo'}
      src={src}
      style={{
        transform: transform.random ?? transform.stable,
      }}
    />
  )
}

function ImagesStack({ images, empty, style, link }) {
  const [randomize, setRandomize] = useState(false)

  return (
    <Link className={'stack'} style={style} to={link}>
      <div
        onMouseEnter={() => setRandomize(true)}
        onMouseLeave={() => setRandomize(false)}
        className={classNames(
          'align-items-center d-flex justify-content-center position-absolute w-100 h-100',
          { border: empty }
        )}
      >
        {images.map((image) => (
          <RandImage randomize={randomize} src={image.preview} key={image.preview}></RandImage>
        ))}
      </div>
    </Link>
  )
}

export default React.memo(ImagesStack)
