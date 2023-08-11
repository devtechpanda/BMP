import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../config/Globles';
import Editprofileicon from '../../assets/svg/Editprofileicon.svg';
import BottomNavBar from '../../Navigation/BottomNavBar';
import NavButton from '../../assets/svg/NavButton.svg';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ProfilePostData} from '../../redux/Store';
import axios from 'axios';
//  ------------- Image picker --------------
import ImagePicker from 'react-native-image-crop-picker';

const Profile = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [latitude, setlatitude] = useState('90.90');
  const [longitude, setlongitude] = useState('100.89');
  const [Imagepath, setImagepath] = useState(
    require('../../assets/images/User.png'),
  );
  const [editFilp, seteditFilp] = useState(false);

  const handlePost = async () => {
    try {
      const UserId = await AsyncStorage.getItem('userId');
      console.log('userId:', UserId);

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('address', address);
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
      formData.append('adminavatar', {
        uri: 'https://source.unsplash.com/user/c_v_r/100x100',
        type: 'image/jpeg',
        name: 'image.jpg',
      });
      formData.append('phone', phone);
      formData.append('otpId', JSON.parse(UserId));

      const response = await axios.post(
        'https://nearbyplaceadminpanner.onrender.com/api/v1/registerUser',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.log('response ====>', response.data);

      if (response.data.message === 'user added successfully') {
        const Response = response.data.user;
        console.log('user object:', Response);

        const UserId = Response._id;
        AsyncStorage.setItem('UserDetail', JSON.stringify(Response));
        AsyncStorage.setItem('NewuserId', JSON.stringify(UserId));
        navigation.navigate('Home');
      } else {
        Alert.alert(response.data.message); // Show the message from the response
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Failed to update DP');
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.headeView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack('');
          }}>
          <Image
            source={require('../../assets/images/LeftArrow.png')}
            style={{
              height: hp('5%'),
              width: wp('9%'),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.detailHeaderTitle}>Profile</Text>
        <View />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* -------------- Profile View ------- */}
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: hp('3%'),
          }}>
          <Image
            source={require('../../assets/images/User.png')}
            style={{
              height: hp('16%'),
              width: wp('28%'),
              borderRadius: wp('16%'),
              resizeMode: 'contain',
            }}
          />
          <TouchableOpacity
            onPress={() => seteditFilp(!editFilp)}
            style={{marginTop: -20}}>
            <Editprofileicon width={wp('30%')} height={hp('5%')} />
          </TouchableOpacity>
        </View>

        <Text style={[styles.Texttitle, {marginTop: hp('2%')}]}>Name</Text>
        <View style={[styles.ViewBorder, {margin: hp('1%')}]}>
          <TextInput
            placeholder="Enter the name"
            placeholderTextColor={COLOR.WHITE}
            keyboardType="default"
            value={name}
            onChangeText={text => setName(text)}
            style={[
              styles.TextInputtitle,
              {
                padding: hp('1%'),
                marginLeft: hp('0.5%'),
                width: wp('80%'),
              },
            ]}
          />
        </View>

        <Text style={[styles.Texttitle, {marginTop: hp('2%')}]}>Phone</Text>
        <View style={[styles.ViewBorder, {marginTop: hp('1%')}]}>
          <TextInput
            placeholder="Enter phone"
            placeholderTextColor={COLOR.WHITE}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={text => setPhone(text)}
            style={[
              styles.TextInputtitle,

              {padding: hp('1%'), marginLeft: hp('0.5%'), width: wp('80%')},
            ]}
          />
        </View>

        <Text style={[styles.Texttitle, {marginTop: hp('2%')}]}>Email</Text>
        <View style={[styles.ViewBorder, {marginTop: hp('1%')}]}>
          <TextInput
            placeholder="Enter email"
            placeholderTextColor={COLOR.WHITE}
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
            style={[
              styles.TextInputtitle,
              {
                padding: hp('1%'),
                marginLeft: hp('0.5%'),
                width: wp('80%'),
              },
            ]}
          />
        </View>

        <Text style={[styles.Texttitle, {marginTop: hp('2%')}]}>Address</Text>
        <View style={[styles.ViewBorder, {marginTop: hp('1%')}]}>
          <TextInput
            placeholder="Enter address"
            placeholderTextColor={COLOR.WHITE}
            keyboardType="default"
            value={address}
            onChangeText={text => setAddress(text)}
            style={[
              styles.TextInputtitle,
              {
                padding: hp('1%'),
                marginLeft: hp('0.5%'),
                width: wp('80%'),
              },
            ]}
          />
        </View>

        {/* ----------- Button -------- */}
        <TouchableOpacity
          onPress={() => handlePost()}
          style={{
            marginTop: hp('5%'),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <NavButton width={wp('150%')} height={hp('7.5%')} />
          <Text
            style={{
              fontFamily: FONT.SEMI_BOLD,
              color: COLOR.BLACK,
              fontSize: FONT_SIZE.F_23,
              position: 'absolute',
              top: hp('2%'),
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.ThemeColor,
  },
  headeView: {
    flexDirection: 'row',
    width: wp('95%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('1%'),
  },
  detailHeaderTitle: {
    color: COLOR.WHITE,
    fontFamily: FONT.BOLD,
    textAlign: 'center',
    fontSize: FONT_SIZE.F_23,
    marginRight: wp('4%'),
  },

  title: {
    fontSize: FONT_SIZE.F_23,
    fontFamily: FONT.SEMI_BOLD,
    color: 'white',
    textAlign: 'center',
    marginTop: hp('2%'),
  },
  TextInputtitle: {
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
    color: COLOR.LIGHT_GRAY,
  },
  Texttitle: {
    fontSize: FONT_SIZE.F_19,
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
    width: wp('82%'),
    textAlign: 'left',
    alignSelf: 'center',
  },
  ViewBorder: {
    width: wp('85%'),
    borderRadius: hp('1%'),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.Light_Voilet,
  },
});
