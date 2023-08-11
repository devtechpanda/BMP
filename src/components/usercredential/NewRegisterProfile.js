import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../config/Globles';
import AlertIcon from '../../assets/svg/AlertIcon.svg';
import NavButton from '../../assets/svg/NavButton.svg';

const NewRegisterProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setlocation] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const submitHandilor = () => {
    Alert.alert('User Info', `Name: ${name}\nEmail: ${email}`);
    setName('');
    setEmail('');
    navigation.navigate('Login');
  };
  return (
    <View style={[styles.container]}>
      <ScrollView
        style={[styles.formContainer]}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: hp('15%'),
          }}>
          <Image
            source={require('../../assets/images/User.png')}
            style={{
              height: hp('16%'),
              width: wp('35%'),
              borderRadius: wp('28%'),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <Text style={[styles.titleNames, {marginTop: hp('2.5%')}]}>Name</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Enter Name Here"
            placeholderTextColor={'rgba(52, 52, 52, 0.8)'}
            style={styles.inputFields}
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
        <Text style={styles.titleNames}>Email</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Enter Email Here"
            placeholderTextColor={'rgba(52, 52, 52, 0.8)'}
            style={styles.inputFields}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <Text style={styles.titleNames}>Location</Text>
        <View
          style={[
            styles.locationContainer,
            {
              alignItems: 'center',
            },
          ]}>
          <Text style={styles.locationText}>Indore</Text>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          onPress={() => {
            submitHandilor();
          }}
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: hp('15%'),
          }}>
          <NavButton width={wp('85%')} height={hp('8.3%')} />
          <Text
            style={{
              fontFamily: FONT.SEMI_BOLD,
              color: COLOR.BLACK,
              fontSize: hp('2.8%'),
              position: 'absolute',
              textAlign: 'center',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewRegisterProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.ThemeColor,
    paddingHorizontal: hp('2%'),
  },
  headeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailHeaderTitle: {
    color: COLOR.WHITE,
    fontFamily: FONT.SEMI_BOLD,
    textAlign: 'center',
    fontSize: hp('2.4%'),
  },
  // ---------- header end-----------

  //   ---------- Prfile text --------
  title: {
    fontSize: FONT_SIZE.F_23,
    fontFamily: FONT.SEMI_BOLD,
    color: 'white',
    textAlign: 'center',
    marginTop: hp('2%'),
  },
  TextInputtitle: {
    fontSize: FONT_SIZE.F_22,
    fontWeight: FONT.BOLD,
    color: COLOR.Black,
  },
  Texttitle: {
    fontSize: FONT_SIZE.F_2,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.GRAY,
  },
  textInputContainer: {
    width: wp('85%'),
    borderRadius: hp('2%'),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#2A073E',
    marginBottom: hp('1.5%'),
  },
  locationContainer: {
    borderRadius: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A073E',
    marginBottom: hp('1.5%'),
    height: hp('6.5%'),
  },
  inputFields: {
    width: wp('81%'),
    marginLeft: hp('1%'),
    color: COLOR.WHITE,
  },
  formContainer: {
    marginHorizontal: hp('2%'),
  },
  cardImg: {
    width: wp('6%'),
    height: hp('6%'),
    marginHorizontal: hp('2%'),
    resizeMode: 'contain',
  },
  titleNames: {
    color: COLOR.WHITE,
    marginBottom: hp('1%'),
  },
  locationText: {
    marginLeft: hp('1.5%'),
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_2,
    fontFamily: FONT.SEMI_BOLD,
  },
  submitContainer: {
    borderRadius: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A073E',
    marginBottom: hp('1.5%'),
    height: hp('6.5%'),
  },
});
