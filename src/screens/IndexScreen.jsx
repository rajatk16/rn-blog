import React, {useContext, useEffect} from 'react'
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'

import {Context} from '../context/BlogContext'

const IndexScreen = props => {
  console.log(props)
  const {state, deleteBlogPost, getBlogPosts} = useContext(Context)

  useEffect(() => {
    getBlogPosts()

    const subscription = props.navigation.addListener('focus', () => {
      getBlogPosts()
    })
    return subscription
  }, [])

  props.navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => props.navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    )
  })
  
  return (
    <View>
      <FlatList 
        data={state} 
        keyExtractor={blogPost => blogPost.title} 
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => props.navigation.navigate('Show', {id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title} - {item.id}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" style={styles.icon}/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
})

export default IndexScreen