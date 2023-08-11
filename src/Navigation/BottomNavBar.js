import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../config/Globles';
import HomeSelect from '../assets/svg/HomeSelect.svg';
import MapSelect from '../assets/svg/MapSelect.svg';
import MyBookingSelect from '../assets/svg/MyBookingSelect.svg';
import FavouriteSelect from '../assets/svg/FavouriteSelect.svg';
import ProfileSelect from '../assets/svg/ProfileSelect.svg';
import HomeDisSelect from '../assets/svg/HomeDisSelect.svg';
import MapDisSelect from '../assets/svg/MapDisSelect.svg';
import MyBookingDisSelect from '../assets/svg/MyBookingDisSelect.svg';
import FavouriteDisSelect from '../assets/svg/FavouriteDisSelect.svg';
import ProfileDisSelect from '../assets/svg/ProfileDisSelect.svg';

const BottomNavBar = ({activePageName}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: hp('1%'),
        backgroundColor: COLOR.WHITE,
        alignSelf: 'center',
        width: wp('100%'),
        position: 'absolute',
        bottom: activePageName === 0 ? -18 : -5,
        bottom: 0,
      }}>
      <TouchableOpacity
        style={styles.bnbItem}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        {activePageName === 0 ? (
          <HomeDisSelect height={hp('5%')} width={wp('7%')} />
        ) : (
          <HomeSelect height={hp('5%')} width={wp('7%')} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bnbItem}
        onPress={() => {
          navigation.navigate('Map');
        }}>
        {activePageName === 1 ? (
          <MapDisSelect height={hp('5%')} width={wp('7%')} />
        ) : (
          <MapSelect height={hp('5%')} width={wp('7%')} />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bnbItem}
        onPress={() => {
          navigation.navigate('Mybooking');
        }}>
        {activePageName === 2 ? (
          <MyBookingDisSelect height={hp('5%')} width={wp('7%')} />
        ) : (
          <MyBookingSelect height={hp('5%')} width={wp('7%')} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bnbItem}
        onPress={() => {
          navigation.navigate('Favourite');
        }}>
        {activePageName === 3 ? (
          <FavouriteDisSelect height={hp('5%')} width={wp('7%')} />
        ) : (
          <FavouriteSelect height={hp('5%')} width={wp('7%')} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bnbItem}
        onPress={() => {
          navigation.navigate('EditProfile');
        }}>
        {activePageName === 4 ? (
          <ProfileDisSelect height={hp('4%')} width={wp('7%')} />
        ) : (
          <ProfileSelect height={hp('4%')} width={wp('7%')} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    width: wp('10%'),
  },
  bnbItem: {
    width: hp('5%'),
    height: hp('5%'),
    borderRadius: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: wp('7%'),
    height: hp('6%'),
    resizeMode: 'contain',
  },
  icon1: {
    width: wp('10%'),
    height: hp('10%'),
    resizeMode: 'contain',
  },
});
