import {screens} from '@/constants/screens.constant';
import colors from '@/themes/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const AppStack = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue[600],
        tabBarInactiveTintColor: colors.gray[700],
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'normal',
        },
        tabBarStyle: {
          paddingBottom: 15,
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      {screens.map(screen => (
        <Tab.Screen
          key={screen.label}
          name={screen.label}
          component={screen.component}
          options={{
            tabBarIcon: ({focused, color}) => {
              const IconComponent = screen.icon;
              return (
                <View style={styles.iconContainer}>
                  <View style={styles.iconWrapper}>
                    <IconComponent color={color} width={21} height={21} />
                  </View>
                  {focused && <View style={styles.activeBorder}></View>}
                </View>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    position: 'relative',
    marginBottom: 5,
    paddingTop: 5,
  },
  activeBorder: {
    position: 'absolute',
    alignSelf: 'center',
    top: -2,
    width: 70,
    height: 3,
    backgroundColor: colors.blue[600],
  },
});

export default AppStack;
