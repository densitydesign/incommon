import { useCallback, useEffect, useRef } from 'react'

export const qpList = () => ({
  encode: (a) => a,
  decode: (a) => {
    if (a === undefined || a === null) {
      return []
    }
    return Array.isArray(a) ? a : [a]
  },
})

function useMemoCompare(obj, compare) {
  const prevRef = useRef(obj)
  const prev = prevRef.current

  const isEqual = compare(obj, prev)

  useEffect(() => {
    if (!isEqual) {
      prevRef.current = obj
    }
  })

  return isEqual ? prev : obj
}

function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true
  }

  if (!arrA || !arrB) {
    return false
  }

  var len = arrA.length

  if (arrB.length !== len) {
    return false
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false
    }
  }

  return true
}

export function useMemoShallowList(value) {
  return useMemoCompare(value, shallowEqualArrays)
}

export function useDebounceCallback(cb, delay = 0, args) {
  const lastTimeoutId = useRef()
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  const memoCb = useCallback(cb, args)

  const callback = useCallback(
    (...params) => {
      if (lastTimeoutId.current) {
        clearTimeout(lastTimeoutId.current)
      }
      lastTimeoutId.current = setTimeout(() => {
        if (mounted.current) {
          memoCb(...params)
        }
      }, delay)
    },
    [memoCb, delay]
  )

  return callback
}
