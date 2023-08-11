import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LogoImage from '../../assets/svg/LogoImage.svg';
import SplashBack from '../../assets/svg/SplashBack.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      checkAutoLoginData();
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  const checkAutoLoginData = async () => {
    let userData = await AsyncStorage.getItem('UserDetail');
    console.log('userData -----', userData);

    if (userData !== null && userData !== '') {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('OnBoardingOne');
      }}>
      <SplashBack height={hp('150%')} width={wp('110%')} />

      <View style={styles.logoContainer}>
        <LogoImage height={hp('30%')} width={wp('50%')} style={styles.logo} />
      </View>
    </TouchableOpacity>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
  },
});
