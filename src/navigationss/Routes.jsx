import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenName from '../constants/ScreenName';
import SplashScreen from '../pages/SplashScreen';
import OnboardingScreen from '../pages/OnboardingScreen';
import TaskListScreen from '../pages/TaskListScreen';
import AddTaskScreen from '../pages/AddTaskScreen';
import colors from '../themes/Colors';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: {backgroundColor: colors.background.primary},
        headerTintColor: colors.text,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={ScreenName.splash}
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ScreenName.onboarding}
        component={OnboardingScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ScreenName.tasklist}
        component={TaskListScreen}
      />
      <Stack.Screen name={ScreenName.addtask} component={AddTaskScreen} />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});
