import { getTests, getTest, postTest } from './controller'

export default [
  { path: '/tests', method: 'get', action: getTests },
  { path: '/tests/:id', method: 'get', action: getTest },
  { path: '/test', method: 'post', action: postTest },
]
