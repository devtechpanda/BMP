import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {FONT_SIZE, COLOR, FONT} from '../../config/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NavButton from '../../assets/svg/NavButton.svg';

import Edit from '../../assets/svg/Edit.svg';

const SignUpOTP = ({navigation}) => {
  const [Mobile, setMobile] = useState('');

  const inputRefs = useRef([]);

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
              marginTop: hp('2%'),
            }}>
            <Text style={styles.contactNumber}>6305784457 {'\u00A0'}</Text>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => {
                navigation.navigate('SignUp');
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
          onPress={() => {
            navigation.navigate('NewRegisterProfile');
          }}
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
            Register
          </Text>
        </TouchableOpacity>

        {/* ----------- Don't have  an account ------ */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpOTP;

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
