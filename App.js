import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Details from './Details';
import UniformSelector from './UniformSelector';
import PantDetails from './PantDetails';
import SkirtDetails from './SkirtDetails';
import { DesignProvider } from './DesignContext';
import SavedDesign from './SavedDesign';
import ShopScreen from './ShopScreen';
import SampleScreen from './SampleScreen';
import FabricInfo from './FabricInfo';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import CartScreen from './CartScreen';
import PaymentScreen from './PaymentScreen';
import AppNavigator from './consultation/AppNavigator';
import Splash from './consultation/consultscreen/Splash';
import HomeScreen from './consultation/consultscreen/HomeScreen';
import BookAppointment from './consultation/consultscreen/BookAppointment';
import AppointSuccess from './consultation/consultscreen/AppointSuccess';
import Completed from './consultation/consultscreen/Completed';
import Pending from './consultation/consultscreen/Pending';
import FullScreenImage from './FullScreenImage';
import TryOn from './TryOn';





const Stack = createStackNavigator();

function App() {
  return ( 
    
    <Provider store={store}>
      <DesignProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="UniformSelector">
            <Stack.Screen name="UniformSelector" component={UniformSelector}  />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="PantDetails" component={PantDetails} />
            <Stack.Screen name="SkirtDetails" component={SkirtDetails} />
            <Stack.Screen name="SavedDesign" component={SavedDesign} />
            <Stack.Screen name="ShopScreen" component={ShopScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
            <Stack.Screen name="SampleScreen" component={SampleScreen} />
            <Stack.Screen name="FabricInfo" component={FabricInfo} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false }} />
            <Stack.Screen name="BookAppointment" component={BookAppointment} />
            <Stack.Screen name="AppointSuccess" component={AppointSuccess} options={{headerShown:false }} />
            <Stack.Screen name="Completed" component={Completed} />
            <Stack.Screen name="Pending" component={Pending} />
            <Stack.Screen name="FullScreenImage" component={FullScreenImage} />
            <Stack.Screen name="TryOn" component={TryOn} />
          </Stack.Navigator>
        </NavigationContainer>
      </DesignProvider>
    </Provider>
  );
};



export default App;
