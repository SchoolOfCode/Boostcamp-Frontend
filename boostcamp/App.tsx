import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import TaskTypeScreen from './screens/TaskTypeScreen';
import OnScreen from './screens/OnScreen';
import OnScreenShortScreen from './screens/OnScreenShortScreen';
import OnScreenMediumScreen from './screens/OnScreenMediumScreen';
import OnScreenLongScreen from './screens/OnScreenLongScreen';
import OffScreen from './screens/OffScreen';
import OffScreenShortScreen from './screens/OffScreenShortScreen';
import OffScreenMediumScreen from './screens/OffScreenMediumScreen';
import OffScreenLongScreen from './screens/OffScreenLongScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login_Screen"
          component={LoginScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Register_Screen"
          component={RegisterScreen}
          options={{ header: () => null }}
        />
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
