import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskTypeScreen from './components/TaskTypeScreen';
import OnScreen from './components/OnScreen';
import OffScreen from './components/OffScreen';
import OnScreenShortScreen from './components/OnScreenShortScreen';
import OnScreenMediumScreen from './components/OnScreenMediumScreen';
import OnScreenLongScreen from './components/OnScreenLongScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Task_Type_Screen"
          component={TaskTypeScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="On_Screen"
          component={OnScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="On_Screen_Short"
          component={OnScreenShortScreen}
          // options={{ header: () => null }}
        />
        <Stack.Screen
          name="On_Screen_Medium"
          component={OnScreenMediumScreen}
          // options={{ header: () => null }}
        />
        <Stack.Screen
          name="On_Screen_Long"
          component={OnScreenLongScreen}
          // options={{ header: () => null }}
        />
        <Stack.Screen
          name="Off_Screen"
          component={OffScreen}
          // options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
