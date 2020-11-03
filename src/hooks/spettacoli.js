import { rj, useRunRj } from 'react-rocketjump'
import api from '../api'
import { BIG_PAGE_SIZE } from '../common'

const YearRegex = /[0-9]{4}/
function extractYear(spettacolo) {
  let anno = null
  if (spettacolo.data) {
    const matchYear = spettacolo.data.match(YearRegex)
    if (matchYear) {
      anno = Number(matchYear[0])
    }
  }
  return {
    ...spettacolo,
    anno
  }
}

export const SpettacoliState = rj({
  name: 'Spettacoli',
  effect: () =>
    api
      .mapResponse((r) => r.response.results.map(extractYear))
      .get('/api/spettacoli', {
        pagesize: BIG_PAGE_SIZE,
      }),
  computed: {
    spettacoli: 'getData',
  },
})

export default function useSpettacoli() {
  return useRunRj(SpettacoliState, [])
}
