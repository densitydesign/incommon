import { rj, useRunRj } from 'react-rocketjump'
import api from 'magik-api'
import { makeMapPaginatedResponse, PAGE_SIZE, rjIncommonList } from '../api'

const DocumentsState = rj(
  rjIncommonList(),
  {
    name: 'Documents',
    effect: (params = {}) =>
      api()
        .mapResponse(makeMapPaginatedResponse(params))
        .get('/api/documents', {
          ...params,
          pagesize: PAGE_SIZE,
        }),
    computed: {
      count: 'getCount',
      documents: 'getList',
      loading: 'isLoading',
      error: 'getError',
      hasNext: 'hasNext'
    }
  }
)

export function useDocuments(params) {
  return useRunRj(DocumentsState, [params])
}
