import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Switch,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLOR, FONT, FONT_SIZE} from '../../config/Globles';
import AlertIcon from '../../assets/svg/AlertIcon.svg';

const Notifications = ({navigation}) => {
  const NotifyData = [
    {
      id: 1,
      title: 'Darlene Robertson',
      created_at: '1 min ago',
      description: 'Just started to following you.',
      image: require('../../assets/images/User.png'),
    },
    {
      id: 2,
      title: 'Courtney Henry',
      created_at: '2 min ago',
      description: 'Just started to following you.',
      image: require('../../assets/images/User.png'),
    },
    {
      id: 3,
      title: 'Robert Fox',
      created_at: '1 min ago',
      description: 'Just started to following you.',
      image: require('../../assets/images/User.png'),
    },
    {
      id: 4,
      title: 'Jenny Wilson',
      created_at: '4 min ago',
      description: 'Just started to following you.',
      image: require('../../assets/images/User.png'),
    },
    {
      id: 5,
      title: 'Darlene Robertson',
      created_at: '1 min ago',
      description: 'Just started to following you.',
      image: require('../../assets/images/User.png'),
    },
    {
      id: 6,
      title: 'Courtney Henry',
      created_at: '2 min ago',
      description: 'Just started to following you.',
      image: require('../../assets/images/User.png'),
    },
    {
      id: 7,
      title: 'Robert Fox',
      created_at: '1 min ago',
      description: 'Just started to following you.',
      image: require('../../assets/images/User.png'),
    },
    {
      id: 8,
      title: 'Jenny Wilson',
      created_at: '4 min ago',
      description: 'Just started to following you.',
      image: require('../../assets/images/User.png'),
    },
    {
      id: 9,
      title: 'Jenny Wilson',
      created_at: '4 min ago',
      description: 'Just started to following you.',
      image: require('../../assets/images/User.png'),
    },
  ];

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
              width: wp('10%'),
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>
        <Text style={styles.detailHeaderTitle}>Notifications</Text>
        <View />
        {/* <AlertIcon height={hp('10%')} width={wp('13%')} /> */}
      </View>

      <FlatList
        data={NotifyData}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{marginBottom: hp('25%')}}
        renderItem={({item}) => (
          <View
            // onPress={() => navigation.navigate('Settings')}
            style={[
              styles.viewBorder,
              {marginBottom: hp('3%'), flexDirection: 'row'},
            ]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {/* Dp */}
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
                  <Text style={styles.notificationItemTime}>
                    {item.created_at}
                  </Text>
                </View>
                <View>
                  <Text
                    style={styles.notificationItemMessage}
                    numberOfLines={1}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Notifications;

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
    marginVertical: hp('2%'),
  },
  detailHeaderTitle: {
    color: COLOR.WHITE,
    fontFamily: FONT.BOLD,
    textAlign: 'center',
    fontSize: FONT_SIZE.F_23,
  },
  // ---------- header end-----------
  viewBorder: {
    width: wp('90%'),
    borderColor: COLOR.GRAY,
    borderRadius: hp('1.5%'),
    alignSelf: 'center',
    alignItems: 'center',
    padding: hp('1.5%'),
    paddingHorizontal: hp('1.5%'),
    backgroundColor: COLOR.WHITE,
  },
  notificationItemName: {
    width: wp('48%'),
    fontSize: FONT_SIZE.F_15,
    color: '#001D4C',
    fontFamily: FONT.SEMI_BOLD,
  },
  notificationItemTime: {
    fontSize: FONT_SIZE.F_1,
    color: COLOR.LIGHT_GRAY,
    fontFamily: FONT.MEDIUM,
  },
  notificationItemMessage: {
    width: wp('70.1%'),
    fontSize: FONT_SIZE.F_15,
    marginTop: hp('0.6%'),
    fontSize: FONT_SIZE.F_15,
    color: COLOR.LIGHT_GRAY,
    fontFamily: FONT.REGULAR,
  },
  circleContainer: {
    width: wp('12%'),
    height: hp('6%'),
    borderRadius: wp('12%') / 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: hp('1.5%'),
  },
});
