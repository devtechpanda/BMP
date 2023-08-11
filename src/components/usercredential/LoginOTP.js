import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {FONT_SIZE, COLOR, FONT} from '../../config/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NavButton from '../../assets/svg/NavButton.svg';
import Edit from '../../assets/svg/Edit.svg';

import {OTPPostData} from '../../redux/Store';
import {useDispatch} from 'react-redux';

const LoginOTP = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {Number, userId} = route.params;
  const [otp, setOtp] = useState('1234');
  const inputRefs = useRef([]);

  console.log('this the route -', Number);

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace') {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      } else {
        inputRefs.current[index].clear();
      }
    } else if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // ----------- Api ----------
  const handlePost = async () => {
    try {
      const response = await dispatch(OTPPostData(userId, otp));
      Alert.alert(`${response.message}`);
      navigation.navigate('Profile');
    } catch (error) {
      if (error.response && error.response.status === 300) {
        Alert.alert('User already exists with the provided credentials.');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: COLOR.ThemeColor}}>
      <View style={styles.contain}>
        <View>
          <Text
            style={{
              marginTop: hp('14%'),
              marginBottom: hp('1%'),
              fontFamily: FONT.MEDIUM,
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_37,
            }}>
            Verification
          </Text>
          <Text style={styles.LoremText}>
            Enter OTP Code that send to your Number !
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: hp('1%'),
            }}>
            <Text style={styles.contactNumber}>
              {Number} {'\u00A0'}
            </Text>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Edit width={wp('12%')} height={hp('9%')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ------------- OTP --- */}
        <View
          style={{
            marginTop: hp('8%'),
            marginLeft: hp('2.5%'),
            marginRight: hp('2.5%'),
          }}>
          <View style={styles.otpContainer}>
            {[...Array(4)].map((_, index) => (
              <TextInput
                key={index}
                ref={input => (inputRefs.current[index] = input)}
                style={styles.otpInput}
                maxLength={1}
                keyboardType="number-pad"
                onKeyPress={event => handleKeyPress(event, index)}
              />
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: hp('7%'),
          }}>
          <Text
            style={[
              styles.LoremText,
              {textAlign: 'center', fontSize: FONT_SIZE.F_22},
            ]}>
            Resend OTP
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePost}
          style={{
            marginTop: hp('3%'),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <NavButton width={wp('90%')} height={hp('8.3%')} />
          <Text
            style={{
              fontFamily: FONT.SEMI_BOLD,
              color: COLOR.BLACK,
              fontSize: hp('2.8%'),
              position: 'absolute',
              textAlign: 'center',
            }}>
            Verification
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginOTP;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    margin: hp('2.5%'),
  },

  LoremText: {
    fontFamily: FONT.REGULAR,
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_19,
  },
  contactNumber: {
    fontFamily: FONT.REGULAR,
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_19,
    marginBottom: hp('1%'),
  },
  DontText: {
    fontFamily: FONT.MEDIUM,
    color: '#E4A018',
    fontSize: FONT_SIZE.F_17,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpInput: {
    width: wp('17%'),
    height: hp('9%'),
    fontSize: FONT_SIZE.F_38,
    textAlign: 'center',
    borderColor: '#ccc',
    borderWidth: wp('0.3%'),
    borderRadius: hp('2%'),
    color: COLOR.WHITE,
  },
});
