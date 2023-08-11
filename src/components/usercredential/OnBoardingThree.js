import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import {FONT_SIZE, COLOR, FONT} from '../../config/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import NavButton from '../../assets/svg/NavButton.svg';
import Skip from '../../assets/svg/Skip.svg';

const OnBoardingThree = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/OnboardingThree.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Skip width={wp('15%')} height={hp('8.3%')} />
        </TouchableOpacity>
        {/* Discription Text*/}
        <View style={styles.discriptionTextContainer}>
          <Text style={styles.discriptionText}>
            Book your place for{'\u00A0'}
            <Text
              style={{
                color: '#E8AA20',
                fontFamily: FONT.BOLD,
                fontSize: hp('4.5%'),
              }}>
              Parties , Dates Anniversary
            </Text>
          </Text>
        </View>

        {/* Bottom NavButton*/}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{
            position: 'absolute',
            bottom: hp('4%'),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <NavButton width={wp('150%')} height={hp('8.3%')} />
          <Text
            style={{
              fontFamily: FONT.BOLD,
              fontSize: FONT_SIZE.F_22,
              color: COLOR.BLACK,
              position: 'absolute',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default OnBoardingThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  logoContainer: {
    position: 'absolute',
    top: hp('33%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  skipButton: {
    position: 'absolute',
    top: hp('4%'),
    right: wp('3.5%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  discriptionTextContainer: {
    position: 'absolute',
    bottom: hp('20%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('93%'),
  },
  discriptionText: {
    fontFamily: FONT.REGULAR,
    color: COLOR.WHITE,
    fontSize: hp('4%'),
    textAlign: 'center',
  },
});
