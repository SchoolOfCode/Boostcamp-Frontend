import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskTypeScreen from './components/TaskTypeScreen';
import OnScreen from './components/OnScreen';
import OnScreenShortScreen from './components/OnScreenShortScreen';
import OnScreenMediumScreen from './components/OnScreenMediumScreen';
import OnScreenLongScreen from './components/OnScreenLongScreen';
import OffScreenShortScreen from './components/OffScreenShortScreen';
import OffScreenMediumScreen from './components/OffScreenMediumScreen';
import OffScreenLongScreen from './components/OffScreenLongScreen';
import OffScreen from './components/OffScreen';

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
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="On_Screen_Medium"
          component={OnScreenMediumScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="On_Screen_Long"
          component={OnScreenLongScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Off_Screen"
          component={OffScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Off_Screen_Short"
          component={OffScreenShortScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Off_Screen_Medium"
          component={OffScreenMediumScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Off_Screen_Long"
          component={OffScreenLongScreen}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
