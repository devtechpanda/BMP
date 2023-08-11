import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from '../redux/Store';
import {Provider} from 'react-redux';
import Demo from '../components/screens/Demo';
import {COLOR} from '../config/Globles';
import {LogBox} from 'react-native';
import TermandCond from './TermandCond';
import Privacy from './Privacy';
LogBox.ignoreAllLogs(true);

import Splash from '../components/usercredential/Splash';
import Login from '../components/usercredential/Login';
import LoginOTP from '../components/usercredential/LoginOTP';
import OnBoardingOne from '../components/usercredential/OnBoardingOne';
import OnBoardingTwo from '../components/usercredential/OnBoardingTwo';
import OnBoardingThree from '../components/usercredential/OnBoardingThree';
import SignUp from '../components/usercredential/SignUp';
import SignUpOTP from '../components/usercredential/SignUpOTP';
import NewRegisterProfile from '../components/usercredential/NewRegisterProfile';

import Home from '../components/screens/Home';
import Detail from '../components/screens/Detail';
import BookTimeandDate from '../components/screens/BookTimeandDate';
import Map from '../components/screens/Map';
import Mybooking from '../components/screens/Mybooking';
import BookTable from '../components/screens/BookTable';
import Favourite from '../components/screens/Favourite';
import BookingDetails from '../components/screens/BookingDetails';
import Profile from '../components/screens/Profile';
import Language from '../components/screens/Language';
import Settings from '../components/screens/Settings';
import Notifications from '../components/screens/Notifications';
import EditProfile from '../components/screens/EditProfile';
import Payment from '../components/screens/Payment';
import DebitCard from '../components/screens/DebitCard';
import Menu from '../components/screens/Menu';
import MyWallet from '../components/screens/MyWallet';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <StatusBar
          backgroundColor={COLOR.ThemeColor}
          barStyle="light-content"
        />
        <NavigationContainer>
          <Stack.Navigator
            // initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="OnBoardingOne" component={OnBoardingOne} />
            <Stack.Screen name="OnBoardingTwo" component={OnBoardingTwo} />
            <Stack.Screen name="OnBoardingThree" component={OnBoardingThree} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignUpOTP" component={SignUpOTP} />
            <Stack.Screen
              name="NewRegisterProfile"
              component={NewRegisterProfile}
            />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="LoginOTP" component={LoginOTP} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="BookTimeandDate" component={BookTimeandDate} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Mybooking" component={Mybooking} />
            <Stack.Screen name="BookTable" component={BookTable} />
            <Stack.Screen name="Favourite" component={Favourite} />
            <Stack.Screen name="BookingDetails" component={BookingDetails} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Language" component={Language} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="MyWallet" component={MyWallet} />
            <Stack.Screen name="DebitCard" component={DebitCard} />
            <Stack.Screen name="TermandCond" component={TermandCond} />
            <Stack.Screen name="Privacy" component={Privacy} />

            <Stack.Screen name="Demo" component={Demo} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
};

export default App;
