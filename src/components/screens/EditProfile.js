import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
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

const EditProfile = ({navigation}) => {
  const activePageName = 4;
  const [name, setName] = useState('Name');
  const [phone, setPhone] = useState('Phone');
  const [email, setEmail] = useState('Email');
  const [address, setAddress] = useState('Address');
  const [editFilp, seteditFilp] = useState(false);

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
          {editFilp ? (
            <TextInput
              placeholder="name"
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
                  backgroundColor: 'gren',
                },
              ]}
            />
          ) : (
            <Text
              style={[
                styles.TextInputtitle,
                {
                  paddingHorizontal: hp('1.5%'),
                  paddingVertical: hp('2.2%'),
                },
              ]}>
              {name}
            </Text>
          )}
        </View>

        <Text style={[styles.Texttitle, {marginTop: hp('2%')}]}>Phone</Text>
        <View style={[styles.ViewBorder, {marginTop: hp('1%')}]}>
          {editFilp ? (
            <TextInput
              placeholder="Phone"
              placeholderTextColor={COLOR.WHITE}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={text => setPhone(text)}
              style={[
                styles.TextInputtitle,

                {padding: hp('1%'), marginLeft: hp('0.5%'), width: wp('80%')},
              ]}
            />
          ) : (
            <Text
              style={[
                styles.TextInputtitle,
                {
                  paddingHorizontal: hp('1.5%'),
                  paddingVertical: hp('2.2%'),
                },
              ]}>
              {phone}
            </Text>
          )}
        </View>

        <Text style={[styles.Texttitle, {marginTop: hp('2%')}]}>Email</Text>
        <View style={[styles.ViewBorder, {marginTop: hp('1%')}]}>
          {editFilp ? (
            <TextInput
              placeholder="Email"
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
          ) : (
            <Text
              style={[
                styles.TextInputtitle,
                {
                  paddingHorizontal: hp('1.5%'),
                  paddingVertical: hp('2.2%'),
                },
              ]}>
              {email}
            </Text>
          )}
        </View>

        <Text style={[styles.Texttitle, {marginTop: hp('2%')}]}>Address</Text>
        <View style={[styles.ViewBorder, {marginTop: hp('1%')}]}>
          {editFilp ? (
            <TextInput
              placeholder="Address"
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
          ) : (
            <Text
              style={[
                styles.TextInputtitle,
                {
                  paddingHorizontal: hp('1.5%'),
                  paddingVertical: hp('2.2%'),
                  width: wp('80%'),
                },
              ]}>
              {address}
            </Text>
          )}
        </View>

        {/* ----------- Button -------- */}
        <TouchableOpacity
          onPress={() => {
            seteditFilp(false), navigation.navigate('Home');
          }}
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

      <HideWithKeyboard>
        <BottomNavBar activePageName={activePageName} />
      </HideWithKeyboard>
    </View>
  );
};

export default EditProfile;
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
