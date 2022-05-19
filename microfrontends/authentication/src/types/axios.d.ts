import { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  interface AxiosInstance {
    request<TData>(path: string, config?: AxiosRequestConfig): Promise<TData>
  }
}
