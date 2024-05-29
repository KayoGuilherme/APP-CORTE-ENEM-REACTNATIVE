import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "@/pages/SignIn/signIn";
import SignUp from "@/pages/SignUp/singUp";
import WelcomePage from "@/pages/WelcomePage/welcome";

const Stack = createNativeStackNavigator<StackPramsListAuth>();

export type StackPramsListAuth = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export default function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomePage}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
