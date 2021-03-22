import React, { useMemo, useRef, useEffect, useState } from "react";
import chunk from "lodash/chunk";
import range from "lodash/range";
import mapValues from "lodash/mapValues";
import flatten from "lodash/flatten";
import { randomUniform, randomInt } from "d3-random";
import { max } from "lodash";
import { useSpring, animated } from "react-spring";

const MAX_STACKS_PER_ROW = 3;

function randomTransform() {
  return `scale(${randomUniform(0.6, 1)()}) translate(${randomInt(
    -20,
    20
  )()}%,${randomInt(-5, 5)()}%) rotate(${randomInt(-5, 5)()}deg)`;
}

function RandImage({ src, randomize }) {
  const [transform, setTransform] = useState(() => ({
    stable: randomTransform(),
    random: null,
  }));

  useEffect(() => {
    if (randomize) {
      setTransform((s) => ({
        ...s,
        random: randomTransform(),
      }));
    } else {
      setTransform((s) => {
        if (s.random === null) {
          return s;
        }
        return {
          ...s,
          random: null,
        };
      });
    }
  }, [randomize]);

  return (
    <img
      className={"stackImage"}
      alt={"Spettacolo"}
      src={src}
      style={{
        transform: transform.random ?? transform.stable,
      }}
    />
  );
}

function makeCenters(width, height, imagesByGroup) {
  const keys = Object.keys(imagesByGroup);
  const num = keys.length;

  const chunked =
    num === 4 ? chunk(range(num), 2) : chunk(range(num), MAX_STACKS_PER_ROW);
  const numRows = chunked.length;
  const rowDelta = height / (numRows + 1);

  const centersFlat = flatten(
    chunked.map((c, rowIndex) => {
      const colDelta = width / (c.length + 1);
      const y = rowDelta * (rowIndex + 1);
      return c.map((item, colIndex) => {
        const x = colDelta * (colIndex + 1);
        return { x, y };
      });
    })
  );

  const centers = keys.reduce((acc, item, index) => {
    acc[item] = centersFlat[index];
    return acc;
  }, {});
  const chunksLength = chunked.map((c) => c.length);
  return { centers, numRows, numColumns: max(chunksLength) };
}

function makeSize(width, height, numCols, numRows) {
  return {
    imageWidth: (width / numCols) * 0.6,
    imageHeight: (height / numRows) * 0.6,
  };
}

function ImgContainer({ imageWidth, imageHeight, index, image, left, top }) {
  const props = useSpring({
    top,
    left,
    width: imageWidth,
    height: imageHeight,
  });

  return (
    <animated.div
      style={{
        width: props.width,
        height: props.height,
        position: "absolute",
        zIndex: index,
        left: props.left,
        top: props.top,
      }}
    >
      <RandImage index={index} randomize={true} src={image.preview}></RandImage>
    </animated.div>
  );
}

export default function AnimatedImageStack({ group, images, byGroup }) {
  const imagesByGroup = useMemo(() => {
    return group ? byGroup[group] : { "": images };
  }, [byGroup, group, images]);

  const ref = useRef();
  const width = ref.current ? ref.current.clientWidth : 0;
  const height = ref.current ? ref.current.clientHeight : 0;

  const { centers, numRows, numColumns } = makeCenters(
    width,
    height,
    imagesByGroup
  );
  const { imageWidth, imageHeight } = makeSize(
    width,
    height,
    numColumns,
    numRows
  );

  const groupNames = Object.keys(imagesByGroup);

  return (
    <div ref={ref} style={{ position: "relative" }} className="w-100 h-100">
      {groupNames.map((groupName, groupIndex) => (
        <React.Fragment key={groupName}>
          {imagesByGroup[groupName].map((image, index) => (
            <ImgContainer
              key={image.preview}
              imageHeight={imageHeight}
              imageWidth={imageWidth}
              index={index}
              image={image}
              left={centers[groupName].x - imageWidth / 2}
              top={centers[groupName].y - imageHeight / 2}
            ></ImgContainer>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
