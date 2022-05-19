import { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'

export interface CustomAxiosInstance extends AxiosInstance {
  defaultRequest<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>
}
