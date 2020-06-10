import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const getBlogPosts = dispatch => async () => {
  const response = await jsonServer.get('/blogposts')
  
  dispatch({
    type: 'GET_BLOGPOST',
    payload: response.data
  })
}

const addBlogPost = (dispatch) => async (title, content, callback) => {
  await jsonServer.post('/blogposts', {
    title,
    content
  })
  if (callback) callback()
}

const editBlogPost = (dispatch) => async (id, title, content, callback) => {
  await jsonServer.put(`/blogposts/${id}`, {
    title,
    content
  })
  dispatch({
    type: 'EDIT_BLOGPOST',
    payload: {
      id,
      title,
      content
    }
  })
  if (condition) callback()
}

const deleteBlogPost = (dispatch) => async (id) => {
  await jsonServer.delete(`/blogposts/${id}`)
  dispatch({type: 'DELETE_BLOGPOST', payload: id})
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'GET_BLOGPOST':
      return action.payload
    case 'ADD_BLOGPOST':
      return [
        ...state, 
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content
        }
      ]
    case 'EDIT_BLOGPOST':
      return state.map(item => item.id === action.payload.id ? 
        action.payload : 
        item
      )
    case 'DELETE_BLOGPOST':
      return state.filter(item => item.id !== action.payload)
    default: 
      return state;
  }
}

export const {Context, Provider} = createDataContext(
  reducer, 
  {
    addBlogPost,
    editBlogPost,
    deleteBlogPost,
    getBlogPosts
  },
  []
)
