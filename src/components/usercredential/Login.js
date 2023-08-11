import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {FONT_SIZE, COLOR, FONT} from '../../config/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NavButton from '../../assets/svg/NavButton.svg';
import RememberMeFalse from '../../assets/svg/RememberMeFalse';
import RememberMeTrue from '../../assets/svg/RememberMeTrue';
import {LoginPostData} from '../../redux/Store';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loader, setLoader] = useState(false);
  console.log('phone============', phone);

  const rememberMeHandilor = () => {
    setRememberMe(!rememberMe);
  };

  const handlePost = async () => {
    try {
      // -----Validation-----
      if (phone === '') {
        Alert.alert('Error', 'Please enter a phone number');
        return;
      } else if (phone.length < 10) {
        Alert.alert(
          'Error',
          'Phone number must be at least 10 characters long',
        );
        return;
      }
      setLoader(true);
      const response = await dispatch(LoginPostData(phone));
      console.log('REsponsse sucessfully send --', response);
      setLoader(false);
      Alert.alert(`${response.message}`, 'Logged in Successfully');
      await AsyncStorage.setItem('userId', JSON.stringify(response.userId));
      navigation.navigate('LoginOTP', {userId: response.userId, Number: phone});
    } catch (error) {
      if (error.response && error.response.status === 300) {
        Alert.alert('User already exists with the provided credentials.');
      } else {
        Alert.alert('Error', error.message);
      }
      setLoader(false);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: COLOR.ThemeColor}}>
      <View style={styles.contain}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            alignSelf: 'flex-end',
            backgroundColor: '#c7bbbb',
            width: wp('20%'),
            padding: hp('1%'),
            borderRadius: hp('2%'),
          }}>
          <Text
            style={{
              fontFamily: FONT.MEDIUM,
              color: COLOR.BLACK,
              fontSize: FONT_SIZE.F_23,
              textAlign: 'center',
            }}>
            Skip
          </Text>
        </TouchableOpacity>

        <View style={{marginTop: hp('20%')}}>
          <Text
            style={{
              fontFamily: FONT.MEDIUM,
              color: COLOR.WHITE,
              fontSize: FONT_SIZE.F_23,
            }}>
            Welcome to Book My Place
          </Text>
          <Text style={styles.discriptionText}>
            To continue, please login with Your Phone Number
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
            value={phone}
            onChangeText={txt => {
              setPhone(txt);
            }}
            autoCorrect={true}
            underlineColorAndroid="transparent"
            style={styles.Input}
            keyboardType="number-pad"
            maxLength={10}
          />
        </View>

        {/* RememberMe */}
        <View
          style={{
            marginTop: hp('2%'),
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: hp('0.5%'),
          }}>
          <TouchableOpacity
            onPress={() => {
              rememberMeHandilor();
            }}>
            {rememberMe ? (
              <RememberMeFalse height={hp('4%')} width={wp('6%')} />
            ) : (
              <RememberMeTrue height={hp('4%')} width={wp('6%')} />
            )}
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: hp('1%'),
              color: COLOR.WHITE,
              fontFamily: FONT.MEDIUM,
              fontSize: FONT_SIZE.F_19,
            }}>
            Remember Me
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => handlePost()}
          style={{
            marginTop: hp('8%'),
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
            Login
          </Text>
        </TouchableOpacity>

        {/* ----------- Don't have  an account ------ */}
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: hp('20%'),
          }}>
          <Text style={[styles.LoremText, {textAlign: 'center'}]}>
            Want to create an account ? {'\u00A0'}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Text style={[styles.DontText, {textAlign: 'center'}]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
  LoremText: {
    fontFamily: FONT.REGULAR,
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_17,
    marginBottom: hp('5%'),
  },
  discriptionText: {
    fontFamily: FONT.REGULAR,
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_19,
    marginBottom: hp('5%'),
    width: wp('80%'),
    marginTop: hp('1.5%'),
  },
  DontText: {
    fontFamily: FONT.MEDIUM,
    color: '#E4A018',
    fontSize: FONT_SIZE.F_17,
  },
});
