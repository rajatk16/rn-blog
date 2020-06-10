import React from 'react'
import {TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Feather} from '@expo/vector-icons'

import ShowScreen from './src/screens/ShowScreen'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BlogContext'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

const Stack = createStackNavigator()

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Index" 
        screenOptions={{title: "Blogs"}}
      >
        <Stack.Screen 
          name="Index" 
          component={IndexScreen}   
        />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  )
}