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
import AlertIcon from '../../assets/svg/AlertIcon.svg';
import Star from '../../assets/svg/Star.svg';
import Whitelocation from '../../assets/svg/Whitelocation.svg';
import Styles from '../../config/Styles';
import BottomNavBar from '../../Navigation/BottomNavBar';

const Mybooking = ({navigation}) => {
  const activePageName = 2;
  const cardData = [
    {
      item: 1,
      backimage: require('../../assets/images/Restaurt2.png'),
      headtitle: 'The Eighteen Restaurant',
      title1: 'north India, chinese, briyani',
    },
    {
      item: 2,
      backimage: require('../../assets/images/Resturant4.png'),
      headtitle: 'The Eighteen Restaurant',
      title1: 'north India, chinese, briyani',
    },
    {
      item: 3,
      backimage: require('../../assets/images/Restaurt2.png'),
      headtitle: 'The Eighteen Restaurant',
      title1: 'north India, chinese, briyani',
    },
    {
      item: 4,
      backimage: require('../../assets/images/Restaurt2.png'),
      headtitle: 'The Eighteen Restaurant',
      title1: 'north India, chinese, briyani',
    },
  ];

  return (
    <View style={[styles.container]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
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
        <Text style={styles.detailHeaderTitle}>My Booking</Text>
        <AlertIcon height={hp('10%')} width={wp('13%')} />
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={styles.paginationContainer}
        showsHorizontalScrollIndicator={false}>
        <View>
          <FlatList
            data={cardData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('BookingDetails')}>
                <ImageBackground
                  source={item.backimage}
                  style={styles.imageBackground}
                  imageStyle={styles.imageStyle}>
                  <View style={styles.content}>
                    <View
                      style={{
                        alignSelf: 'flex-start',
                        marginTop: hp('2%'),
                      }}>
                      <Text style={styles.title}>{item.headtitle}</Text>
                      {/* <Text
                        numberOfLines={1}
                        style={[styles.textCard, {width: wp('62%')}]}>
                        {item.title1}
                      </Text> */}
                      <View
                        style={{
                          alignSelf: 'flex-start',
                          alignItems: 'center',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                          }}>
                          <Whitelocation width={wp('4%')} height={hp('4%')} />
                          <Text
                            numberOfLines={1}
                            style={[
                              styles.textCard,
                              {
                                marginLeft: wp('1%'),
                                width: wp('20%'),
                              },
                            ]}>
                            6391 Elgin St.
                          </Text>
                        </View>
                        <View
                          style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginLeft: wp('1%'),
                          }}>
                          <Star width={wp('4%')} height={hp('4%')} />
                          <Text
                            style={{
                              color: COLOR.WHITE,
                              fontSize: FONT_SIZE.F_17,
                              fontFamily: FONT.MEDIUM,
                              marginLeft: wp('1%'),
                            }}>
                            5 Star
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={{marginTop: hp('2.3%')}}>
                      <Text
                        style={{
                          color: COLOR.WHITE,
                          fontSize: FONT_SIZE.F_15,
                          fontFamily: FONT.REGULAR,
                          marginLeft: wp('1%'),
                        }}>
                        ₹ 120 for 4
                      </Text>

                      <View
                        style={[styles.kilomButton, {marginTop: hp('0.4%')}]}>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: FONT_SIZE.F_15,
                            fontFamily: FONT.MEDIUM,
                          }}>
                          5 Km
                        </Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
      <View>
        <BottomNavBar
          activePageName={<BottomNavBar activePageName={activePageName} />}
        />
      </View>
    </View>
  );
};

export default Mybooking;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.ThemeColor,
    paddingHorizontal: hp('2%'),
  },
  detailHeaderTitle: {
    color: COLOR.WHITE,
    fontFamily: FONT.BOLD,
    textAlign: 'center',
    fontSize: FONT_SIZE.F_23,
  },
  // ---------- header end-----------

  //   ------------- ImageBackground---------
  imageBackground: {
    // borderRadius: wp('20%'),
    width: wp('90%'),
    height: hp('25%'),
    resizeMode: 'cover',
    justifyContent: 'center',
    marginBottom: hp('2.5%'),
  },
  imageStyle: {
    opacity: 0.7,
    borderRadius: wp('3%'),
  },
  content: {
    marginTop: hp('16.5%'),
    paddingHorizontal: hp('1%'),
    width: wp('88%'),
    alignSelf: 'center',
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FONT_SIZE.F_19,
    fontFamily: FONT.SEMI_BOLD,
    color: 'white',
    // marginBottom: 8,
  },

  likeButton: {
    position: 'absolute',
    top: 0,
    right: 2,
    zIndex: 999,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
  },
  // ---------- textcard ---
  textCard: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.EXTRA_LIGHT,
  },
  cardImg: {
    width: wp('5%'),
    height: hp('5%'),
    resizeMode: 'contain',
    tintColor: 'white',
  },
  kilomButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('18%'),
    height: hp('3%'),
    borderRadius: hp('1%'),
    backgroundColor: '#FF9E00',
    overflow: 'hidden',
  },
});
