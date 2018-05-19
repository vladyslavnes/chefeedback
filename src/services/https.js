import axios from 'axios'

// const host = 'https://chefeedback.herokuapp.com/'
const host = 'http://localhost:3000'
const server = `${host}/api/v1`


export function newComment (comment) {
  return axios.post(`${server}/comment`, {comment})
}
