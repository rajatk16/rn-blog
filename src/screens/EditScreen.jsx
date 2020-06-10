import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'

import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

export default props => {
  const {state, editBlogPost} = useContext(Context)
  const blogPost = state.find(item => item.id === props.route.params.id)
  
  return (
    <BlogPostForm
      initialValues={{title: blogPost.title, content: blogPost.content}} 
      onSubmit={(title, content) => {
        editBlogPost(blogPost.id, title, content, () => {
          props.navigation.navigate('Index')
        })
      }}
    />
  )
}

const styles = StyleSheet.create({})