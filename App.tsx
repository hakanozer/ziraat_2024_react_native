import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

// Import Pages
import Login from './pages/Login'
import Register from './pages/Register';
import Welcome from './pages/Welcome';

const Stack = createNativeStackNavigator()

// Custom Header
const customRegisterHeader = (navigation: any) =>
<SafeAreaView style={{justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#30afe6'}}>
  <View>

    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="navigate-next" size={24} color="black" />
      </TouchableOpacity>
    </View>
    
  </View>
  <View><Text>Center</Text></View>
  <View><Text>Right</Text></View>
</SafeAreaView>

// Login Stack
const LoginStack = () => 
<Stack.Navigator>
  <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
  <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
  <Stack.Screen name='Register' component={Register} options={{ 
    headerShown: true,
    header: ({route, navigation}: any) => customRegisterHeader(navigation)
   }} />
</Stack.Navigator>

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LoginStack' component={LoginStack} options={{ headerShown: false }} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
