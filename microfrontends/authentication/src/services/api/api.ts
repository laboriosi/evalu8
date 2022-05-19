import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { defaultsDeep } from 'lodash'
import { handleFulfilled, handleRejected } from './interceptors'

const defaultConfig = {
  headers: {
    Accept: 'application/json',
  },
}

const api = (baseURL: string, config?: AxiosRequestConfig) => {
  const axiosApi = axios.create({ baseURL, ...config })

  axiosApi.request = async <TData>(path: string, config?: AxiosRequestConfig) => {
    const mergedConfig = defaultsDeep(config, defaultConfig) as AxiosRequestConfig

    return axiosApi(path, mergedConfig).then(
      (response: AxiosResponse<TData>) => response.data,
    )
  }

  axiosApi.interceptors.response.use(handleFulfilled, handleRejected)

  return axiosApi
}

export default api
