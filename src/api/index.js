import axiosInstance from './request'

export const reqHomeResource = () => {
  return axiosInstance({
    url: '/home',
    method: 'GET'
  })
}
