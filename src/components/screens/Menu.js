import React from 'react';
import {
  View,
  Text,
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
import AlertIcon from '../../assets/svg/AlertIcon.svg';
import LeftArrow from '../../assets/svg/LeftArrow.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Menu = ({navigation}) => {
  const LogoutFuct = async () => {
    await AsyncStorage.removeItem('UserDetail');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headeView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack('');
          }}>
          <Image
            source={require('../../assets/images/LeftArrow.png')}
            style={{
              marginLeft: hp('-0.2%'),
              height: hp('5%'),
              width: wp('10%'),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.detailHeaderTitle}>Menu</Text>
        <AlertIcon height={hp('10%')} width={wp('10%')} />
      </View>

      {/* ---------- profile ------- */}
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: hp('1.3%'),
        }}>
        <Image
          source={require('../../assets/images/User.png')}
          style={{
            height: hp('12%'),
            width: wp('30%'),
            borderRadius: wp('28%'),
            resizeMode: 'contain',
          }}></Image>
        <Text style={styles.title}>Kristin Watson</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* -----Profile ---------- */}
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={[styles.viewBorder, {marginTop: hp('4%')}]}>
          <Text style={[styles.textInputtitle]}>Profile</Text>
          <LeftArrow height={hp('2%')} width={wp('2%')} />
        </TouchableOpacity>

        {/* ------Invite Friend ------- */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[styles.viewBorder, {marginTop: hp('2.8%')}]}>
          <Text style={[styles.textInputtitle, {width: wp('66%')}]}>
            Invite Friend
          </Text>
          <LeftArrow height={hp('2%')} width={wp('2%')} />
        </TouchableOpacity>

        {/* ------- My Wallet---- */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Payment')}
          style={[styles.viewBorder, {marginTop: hp('2.8%')}]}>
          <Text style={[styles.textInputtitle, {width: wp('66%')}]}>
            My Wallet
          </Text>
          <LeftArrow height={hp('2%')} width={wp('2%')} />
        </TouchableOpacity>

        {/* ------ Notifiction ------ */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={[styles.viewBorder, {marginTop: hp('2.8%')}]}>
          <Text style={[styles.textInputtitle]}>Notifictions</Text>
          <LeftArrow height={hp('2%')} width={wp('2%')} />
        </TouchableOpacity>

        {/* ------- Privacy policy ------ */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Privacy')}
          style={[styles.viewBorder, {marginTop: hp('2.8%')}]}>
          <Text style={[styles.textInputtitle]}>Privacy Policy</Text>
          <LeftArrow height={hp('2%')} width={wp('2%')} />
        </TouchableOpacity>

        {/* ------- Term and policy ------ */}
        <TouchableOpacity
          onPress={() => navigation.navigate('TermandCond')}
          style={[styles.viewBorder, {marginTop: hp('2.8%')}]}>
          <Text style={[styles.textInputtitle]}>Terms and Conditions</Text>
          <LeftArrow height={hp('2%')} width={wp('2%')} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => LogoutFuct()}
          style={[styles.viewBorder, {marginTop: hp('2.8%')}]}>
          <Text style={[styles.textInputtitle]}>Logout</Text>
          <LeftArrow height={hp('2%')} width={wp('2%')} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Menu;

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
    fontFamily: FONT.BOLD,
    textAlign: 'center',
    fontSize: FONT_SIZE.F_23,
  },
  // ---------- header end-----------

  title: {
    fontSize: FONT_SIZE.F_19,
    fontFamily: FONT.SEMI_BOLD,
    color: 'white',
    textAlign: 'center',
    marginTop: hp('2%'),
  },

  viewBorder: {
    width: wp('85%'),
    borderColor: COLOR.GRAY,
    borderWidth: hp('0.1%'),
    borderRadius: hp('1.5%'),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: hp('2%'),
    paddingVertical: wp('3.3%'),
  },

  textInputtitle: {
    fontSize: FONT_SIZE.F_19,
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
  },
});
