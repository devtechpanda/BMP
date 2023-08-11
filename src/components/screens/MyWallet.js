import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../config/Globles';
import NavButton from '../../assets/svg/NavButton';
import BalanceCard from '../../assets/svg/BalanceCard';

const MyWallet = ({navigation}) => {
  const activePageName = 4;
  const [upiNumber, setupiNumber] = useState('');
  const [Name, setName] = useState('');
  const [expireDate, setexpireDate] = useState('');
  const [CVV, setCVV] = useState('');

  const NotifyData = [
    {
      id: 1,
      title: 'Robert Fox',
      Icon: require('../../assets/images/DownArrow.png'),
      description: 'Just started to following you.',
      Rupess: '30.00',
      image: require('../../assets/images/User.png'),
    },
    {
      id: 2,
      title: 'Jenny Wilson',
      Icon: require('../../assets/images/UPArrow.png'),
      description: 'Just started to following you.',
      Rupess: '30.00',
      image: require('../../assets/images/User.png'),
    },
    {
      id: 3,
      title: 'Jenny Wilson',
      Icon: require('../../assets/images/DownArrow.png'),
      description: 'Just started to following you.',
      Rupess: '30.00',
      image: require('../../assets/images/User.png'),
    },
  ];

  return (
    <View style={[styles.container]}>
      <View style={[styles.headeView, {marginTop: hp('2%')}]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack('');
          }}>
          <Image
            source={require('../../assets/images/LeftArrow.png')}
            style={{
              // marginLeft: hp('1%'),
              height: hp('5%'),
              width: wp('10%'),
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>
        <Text style={styles.detailHeaderTitle}>My Wallet</Text>
        <View style={{width: wp('10%')}}></View>
      </View>

      {/* -------------- Profile View ------- */}
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <BalanceCard width={wp('85%')} height={hp('27%')} />
      </View>

      {/* --------- request Button ------- */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          marginTop: hp('3%'),
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <NavButton width={wp('85%')} height={hp('8.5%')} />
        <Text
          style={{
            fontFamily: FONT.SEMI_BOLD,
            color: COLOR.BLACK,
            fontSize: FONT_SIZE.F_23,
            position: 'absolute',
            top: hp('3%'),
          }}>
          Withdrawal Request
        </Text>
      </TouchableOpacity>

      <View
        style={{alignSelf: 'center', width: wp('85%'), marginTop: hp('2%')}}>
        <Text
          style={{
            fontSize: FONT_SIZE.F_19,
            color: COLOR.WHITE,
            fontFamily: FONT.MEDIUM,
          }}>
          Transactions
        </Text>
      </View>
      <FlatList
        data={NotifyData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{marginBottom: hp('25%'), marginTop: hp('3%')}}
        renderItem={({item}) => (
          <View
            style={[
              styles.viewBorder,
              {
                marginBottom: hp('3%'),
                flexDirection: 'row',
              },
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={item.image} style={styles.circleContainer} />

              {/* Name and About */}
              <View
                style={{
                  flex: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.notificationItemName} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Image source={item.Icon} style={styles.iconContainer} />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={styles.notificationItemMessage}
                    numberOfLines={1}>
                    {item.description}
                  </Text>
                  <Text style={styles.ruppeItemName}>₹ {item.Rupess}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MyWallet;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.ThemeColor,
    // paddingHorizontal: hp('1%'),
  },
  headeView: {
    width: wp('88%'),
    alignSelf: 'center',
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailHeaderTitle: {
    color: COLOR.WHITE,
    fontFamily: FONT.BOLD,
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

  viewBorder: {
    width: wp('90%'),
    // borderColor: COLOR.GRAY,
    borderRadius: hp('1.5%'),
    alignSelf: 'center',
    alignItems: 'center',
    padding: hp('1%'),
    paddingHorizontal: hp('1.5%'),
    backgroundColor: COLOR.Light_Voilet,
  },
  notificationItemName: {
    width: wp('48%'),
    fontSize: FONT_SIZE.F_15,
    color: COLOR.WHITE,
    fontFamily: FONT.SEMI_BOLD,
  },
  ruppeItemName: {
    fontSize: FONT_SIZE.F_15,
    color: COLOR.WHITE,
    fontFamily: FONT.SEMI_BOLD,
  },
  notificationItemTime: {
    fontSize: FONT_SIZE.F_1,
    color: COLOR.LIGHT_GRAY,
    fontFamily: FONT.MEDIUM,
  },
  notificationItemMessage: {
    fontSize: FONT_SIZE.F_15,
    // marginTop: hp('0.6%'),
    fontSize: FONT_SIZE.F_15,
    color: COLOR.LIGHT_GRAY,
    fontFamily: FONT.REGULAR,
  },
  circleContainer: {
    width: wp('11%'),
    height: hp('6%'),
    borderRadius: wp('12%') / 2,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: hp('1.5%'),
  },
  iconContainer: {
    width: wp('5%'),
    height: hp('4%'),
    resizeMode: 'contain',
    marginRight: hp('1.5%'),
  },
});
