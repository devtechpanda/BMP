import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {FONT_SIZE, COLOR, FONT} from '../../config/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NavButton from '../../assets/svg/NavButton.svg';

const SignUp = ({navigation}) => {
  const [NewRegistereMobile, setNewRegistereMobile] = useState('');

  return (
    <KeyboardAvoidingView style={{flex: 1, backgroundColor: COLOR.ThemeColor}}>
      <View style={styles.contain}>
        <View style={{marginTop: hp('20%')}}>
          <Text
            style={{
              fontFamily: FONT.MEDIUM,
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_25,
            }}>
            Sign up with Mobile Number
          </Text>
          <Text style={styles.discriptionText}>
            Join us and Register your account in just a few taps!
          </Text>
        </View>

        {/* ------------- Textinput --- */}
        <View style={[styles.InputView, {marginTop: hp('5%')}]}>
          <Text
            style={{
              fontFamily: FONT.REGULAR,
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_2,
              marginLeft: wp('2%'),
            }}>
            +91
          </Text>
          <TextInput
            placeholder="Enter Phone Number"
            placeholderTextColor={'#E4E9E2'}
            value={NewRegistereMobile}
            onChangeText={txt => {
              setNewRegistereMobile(txt);
            }}
            autoCorrect={true}
            underlineColorAndroid="transparent"
            style={styles.Input}
            keyboardType="number-pad"
            maxLength={10}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUpOTP');
          }}
          style={{
            marginTop: hp('10%'),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <NavButton width={wp('90%')} height={hp('8.3%')} />
          <Text
            style={{
              fontFamily: FONT.BOLD,
              color: COLOR.BLACK,
              fontSize: hp('2.6%'),
              position: 'absolute',
              textAlign: 'center',
            }}>
            Log in
          </Text>
        </TouchableOpacity>

        {/* ----------- Don't have  an account ------ */}
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: hp('10%'),
          }}>
          <Text style={[styles.LoremText, {textAlign: 'center'}]}>
            Want to create an account ? {'\u00A0'}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={[styles.DontText, {textAlign: 'center'}]}>login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    margin: hp('2.5%'),
  },

  // ----- Phone Number -----
  InputView: {
    flexDirection: 'row',
    width: wp('90.6%'),
    backgroundColor: COLOR.Light_Voilet,
    borderRadius: hp('1.5%'),
    alignItems: 'center',
    padding: hp('0.7%'),
  },
  Input: {
    marginLeft: wp('2%'),
    fontFamily: FONT.REGULAR,
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_2,
    width: wp('75%'),
  },
  discriptionText: {
    fontFamily: FONT.REGULAR,
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_19,
    marginBottom: hp('5%'),
    width: wp('80%'),
    marginTop: hp('1%'),
  },
  LoremText: {
    fontFamily: FONT.REGULAR,
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_17,
    marginBottom: hp('5%'),
  },
  DontText: {
    fontFamily: FONT.MEDIUM,
    color: '#E4A018',
    fontSize: FONT_SIZE.F_17,
  },
});
