import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import Home from './src/screens/Home';
import PostsScreen from './src/screens/PostsScreen';
import CreatePostsScreen from './src/screens/CreatePostsScreen';
import CommentsScreen from './src/screens/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MapScreen from './src/screens/MapScreen';
import { useFonts } from "expo-font";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if(!fontsLoaded) {
    return null;
  };

  return (
    
    <NavigationContainer>
    <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }}/>
        <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <MainStack.Screen name="PostsScreen" component={PostsScreen} />
        <MainStack.Screen name="Map" component={MapScreen} />
        <MainStack.Screen name="CreatePosts" component={CreatePostsScreen} options={{ headerShown: false }} />
        <MainStack.Screen name="Comments" component={CommentsScreen} />
        <MainStack.Screen name="Profile" component={ProfileScreen}  options={{ headerShown: false }} />
     </MainStack.Navigator>
  </NavigationContainer>
  );
}
