import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'

import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm';

export default (props) => {
  const {addBlogPost} = useContext(Context);
  return (
    <BlogPostForm 
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          props.navigation.navigate('Index')
        })
      }}
    />
  )
}

const styles = StyleSheet.create({})