import React, {useState} from 'react';
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
import NavButton from '../../assets/svg/NavButton';
import Greencredit from '../../assets/svg/Greencredit.svg';
import Phonepay from '../../assets/svg/Phonepay.svg';
import Paytm from '../../assets/svg/Paytm.svg';

const Payment = ({navigation}) => {
  const activePageName = 4;
  const [Showcheck, setShowcheck] = useState(false);
  const [Showcheck1, setShowcheck1] = useState(false);
  const [Showcheck2, setShowcheck2] = useState(false);

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
              height: hp('5%'),
              width: wp('10%'),
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>
        <Text style={styles.detailHeaderTitle}>Payment</Text>
        <View></View>
      </View>

      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: hp('3%'),
        }}>
        <Image
          source={require('../../assets/images/Detbitcard.png')}
          style={{
            height: hp('30%'),
            width: wp('85%'),
            resizeMode: 'contain',
          }}></Image>
      </View>
      <ScrollView
        contentContainerStyle={styles.paginationContainer}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            setShowcheck(!Showcheck), navigation.navigate('Payment');
          }}
          style={[styles.ViewBorder, {marginTop: hp('6%')}]}>
          {Showcheck ? (
            <Image
              source={require('../../assets/images/whiteEllipsefill.png')}
              style={[styles.cardImg, {tintColor: 'black'}]}
            />
          ) : (
            <Image
              source={require('../../assets/images/whiteEllipse.png')}
              style={[styles.cardImg, {tintColor: 'black'}]}
            />
          )}
          <Greencredit
            height={hp('6%')}
            width={wp('8%')}
            resizeMode={'contain'}
          />
          <Text
            style={[
              styles.TextInputtitle,
              {width: wp('57%'), marginLeft: wp('3%')},
            ]}>
            Credit / Debit Card
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowcheck1(!Showcheck1), navigation.navigate('Payment');
          }}
          style={[styles.ViewBorder, {marginTop: hp('3%')}]}>
          {Showcheck1 ? (
            <Image
              source={require('../../assets/images/whiteEllipsefill.png')}
              style={[styles.cardImg, {tintColor: 'black'}]}
            />
          ) : (
            <Image
              source={require('../../assets/images/whiteEllipse.png')}
              style={[styles.cardImg, {tintColor: 'black'}]}
            />
          )}
          <Phonepay
            height={hp('6%')}
            width={wp('23%')}
            resizeMode={'contain'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowcheck2(!Showcheck2), navigation.navigate('Payment');
          }}
          style={[styles.ViewBorder, {marginTop: hp('3%')}]}>
          {Showcheck2 ? (
            <Image
              source={require('../../assets/images/whiteEllipsefill.png')}
              style={[styles.cardImg, {tintColor: 'black'}]}
            />
          ) : (
            <Image
              source={require('../../assets/images/whiteEllipse.png')}
              style={[styles.cardImg, {tintColor: 'black'}]}
            />
          )}
          <Paytm height={hp('5%')} width={wp('15%')} resizeMode={'contain'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DebitCard');
          }}
          style={{
            marginTop: hp('11%'),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <NavButton width={wp('85%')} height={hp('8.1%')} />
          <Text
            style={{
              fontFamily: FONT.SEMI_BOLD,
              color: COLOR.BLACK,
              fontSize: FONT_SIZE.F_23,
              position: 'absolute',
              top: hp('3%'),
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Payment;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.ThemeColor,
    paddingHorizontal: hp('2%'),
  },
  headeView: {
    width: wp('85%'),
    alignSelf: 'center',
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
  title: {
    fontSize: FONT_SIZE.F_23,
    fontFamily: FONT.SEMI_BOLD,
    color: 'white',
    textAlign: 'center',
    marginTop: hp('2%'),
  },
  TextInputtitle: {
    fontSize: FONT_SIZE.F_19,
    fontFamily: FONT.BOLD,
    color: COLOR.Black,
  },
  Texttitle: {
    fontSize: FONT_SIZE.F_2,
    fontFamily: FONT.SEMI_BOLD,
    color: COLOR.GRAY,
  },
  ViewBorder: {
    width: wp('85%'),
    borderColor: COLOR.GRAY,
    borderRadius: hp('2%'),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.WHITE,
  },
  cardImg: {
    width: wp('6%'),
    height: hp('6%'),
    marginHorizontal: hp('2%'),
    resizeMode: 'contain',
  },
});
