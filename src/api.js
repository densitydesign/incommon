import rjList from 'react-rocketjump/plugins/list'

export const PAGE_SIZE = 100

const makeIncommonPaginationAdapter = (pageSize) => ({
  list: 'results',

  count: 'count',

  current: ({ page }) => ({ page }),

  next: ({ page, count }) => {
    const lastPage = Math.ceil(count / pageSize)
    if (page < lastPage) {
      return {
        page: page + 1,
      }
    }
    return null
  },

  previous: ({ page }) => {
    if (page > 1) {
      return {
        page: page - 1,
      }
    }
    return null
  },
})

export const makeMapPaginatedResponse = (params) => (r) => ({
  ...r.response,
  page: params.page ?? 1,
})

export const rjIncommonList = (config = {}) => {
  const pageSize = config?.pageSize ?? PAGE_SIZE
  return rjList({
    pageSize,
    pagination: makeIncommonPaginationAdapter(pageSize),
  })
}
