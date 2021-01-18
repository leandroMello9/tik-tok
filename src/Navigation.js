import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';
import Home from './pages/Home';
import Button from './components/Button';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#000',
          borderTopColor: 'rgba(255,255,255, 0.3)',
        },
        // inactiveTintColor quando a tab nao esta selecionada
        activeTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather size={size} color={color} name="search" />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({ size, color }) => <Button />,
        }}
      />
      <Tab.Screen
        name="Inbox "
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo size={size} color={color} name="chat" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign size={size} color={color} name="user" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
