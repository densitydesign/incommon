import { rj, useRunRj } from "react-rocketjump"
import api from '../api'
import { makeMapPaginatedResponse, PAGE_SIZE, rjIncommonList } from "../common"

const DocumentsState = rj(rjIncommonList(), {
  name: "Documents",
  effect: (params = {}) =>
    api
      .mapResponse(makeMapPaginatedResponse(params))
      .get("/api/documents", {
        ...params,
        q: params.q === '' ? undefined : params.q,
        pagesize: PAGE_SIZE,
      }),
  computed: {
    documents: "getList",
    loading: "isLoading",
    error: "getError",
  },
})

const DocumentsCountState = rj({
  name: "DocumentsCount",
  effect: () => api.get("/api/documents/count"),
  computed: {
    countInfo: "getData",
  },
})

const DocumenState = rj({
  name: "DocumenState",
  effect: (id) => api.get(`/api/documents/${id}`),
  computed: {
    document: "getData",
  },
})


export function useDocuments(params) {
  return useRunRj(DocumentsState, [params], false)
}

export function useDocumentsCount() {
  return useRunRj(DocumentsCountState, [])
}

export function useDocument(id) {
  return useRunRj(DocumenState, [id])
}
