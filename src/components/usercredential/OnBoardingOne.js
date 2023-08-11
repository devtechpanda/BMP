import React from 'react';
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

const OnBoardingOne = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/OnboardingOne.png')}
        style={styles.backgroundImage}>
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
            <Text
              style={{
                color: '#E8AA20',
                fontFamily: FONT.BOLD,
                fontSize: hp('5%'),
              }}>
              Discover
            </Text>
            {'\u00A0'}
            Place & Save Time
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('OnBoardingTwo');
          }}
          style={{
            position: 'absolute',
            bottom: hp('4.5%'),
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
            Next
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default OnBoardingOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
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
    bottom: hp('25%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('85%'),
  },
  discriptionText: {
    fontFamily: FONT.REGULAR,
    color: COLOR.WHITE,
    fontSize: hp('4.5%'),
    marginLeft: hp('2%'),
    textAlign: 'center',
  },
});
