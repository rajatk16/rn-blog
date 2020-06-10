import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {EvilIcons} from '@expo/vector-icons'

import {Context} from '../context/BlogContext'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default ({route, navigation}) => {
  const {state} = useContext(Context)
  const blogPost = state.find(item => item.id === route.params.id)

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: route.params.id})}>
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    )
  })
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})