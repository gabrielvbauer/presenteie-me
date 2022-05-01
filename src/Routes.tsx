import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Header } from './components/Header';
import { Home } from './Pages/Home';
import { Feather } from '@expo/vector-icons';
import { colors } from './Utils/theme';
import { Gifts } from './Pages/Gifts';
import { Messages } from './Pages/Messages';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      {/*@ts-ignore*/}
      <Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#FFF',
            borderTopColor: 'transparent',
            height: 60,
          },
          tabBarActiveTintColor: colors.purple,
          tabBarInactiveTintColor: colors.darkPurple
        }}
      >
        <Screen 
          options={{
              header: () => <Header />,
              tabBarShowLabel: false,
              tabBarIcon: ({ size, color }) => (
                /*@ts-ignore*/
                <Feather
                  name='home'
                  size={size}
                  color={color}
                />
              )
            }}
          name="Home"
          component={Home}
        />
        <Screen 
          options={{
              header: () => <Header />,
              tabBarShowLabel: false,
              tabBarIcon: ({ size, color }) => (
                /*@ts-ignore*/
                <Feather
                  name='gift'
                  size={size}
                  color={color}
                />
              )
            }}
          name="Gifts"
          component={Gifts}
        />
        <Screen 
          options={{
              header: () => <Header />,
              tabBarShowLabel: false,
              tabBarIcon: ({ size, color }) => (
                /*@ts-ignore*/
                <Feather
                  name='message-square'
                  size={size}
                  color={color}
                />
              )
            }}
          name="Messages"
          component={Messages}
        />
      </Navigator>

      <StatusBar 
        translucent={true}
        animated={true}
      />
    </NavigationContainer>
  );
}

export { Routes };