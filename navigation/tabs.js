import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {Home, Contact} from '../screens';
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="contain"
              source={require('../assets/cutlery.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? 'red' : 'orange',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="contain"
              source={require('../assets/user.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? 'red' : 'orange',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
