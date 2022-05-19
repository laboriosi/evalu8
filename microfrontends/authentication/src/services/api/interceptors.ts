import { AxiosResponse, AxiosError } from 'axios'

export const handleFulfilled = (success: AxiosResponse) => {
  return success
}

export const handleRejected = (error: AxiosError) => {
  return Promise.reject(error)
}
