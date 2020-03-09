import Mock from 'mockjs'
import data from './datas/index.json'

Mock.mock('/api/home', {
  code: 0,
  data: data
})