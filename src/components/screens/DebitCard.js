import React, {useRef, useState, useEffect} from 'react';
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
import NavButton from '../../assets/svg/NavButton';

const DebitCard = ({navigation}) => {
  const activePageName = 4;
  const [upiNumber, setupiNumber] = useState('');
  const [Name, setName] = useState('');
  const [expireDate, setexpireDate] = useState('');
  const [CVV, setCVV] = useState('');

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

      {/* -------------- Profile View ------- */}
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
        <View
          style={[styles.viewBorder, {marginTop: hp('3%'), width: wp('85%')}]}>
          <TextInput
            value={upiNumber}
            onChangeText={txt => setupiNumber(txt)}
            placeholder="12323 4344345 433454"
            placeholderTextColor={COLOR.LIGHT_GRAY}
            keyboardType="default"
            style={[styles.TextInputtitle, {width: wp('66%')}]}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('85%'),
          }}>
          <View>
            <Text
              style={[
                styles.TextInputtitle,
                {width: wp('37%'), marginTop: hp('2%')},
              ]}>
              Expiry Date
            </Text>
            <View
              onPress={() => {
                navigation.navigate('Payment');
              }}
              style={[styles.viewBorder, {marginTop: hp('1%')}]}>
              <TextInput
                value={expireDate}
                onChangeText={txt => setexpireDate(txt)}
                placeholder="MM/YY"
                placeholderTextColor={COLOR.LIGHT_GRAY}
                keyboardType="number-pad"
                style={[styles.TextInputtitle, {width: wp('30%')}]}
              />
            </View>
          </View>

          <View>
            <Text
              style={[
                styles.TextInputtitle,
                {width: wp('37%'), marginTop: hp('2%')},
              ]}>
              CVV
            </Text>
            <View style={[styles.viewBorder, {marginTop: hp('1%')}]}>
              <TextInput
                value={CVV}
                onChangeText={txt => setCVV(txt)}
                placeholder="***"
                maxLength={3}
                placeholderTextColor={COLOR.LIGHT_GRAY}
                keyboardType="number-pad"
                style={[styles.TextInputtitle, {width: wp('30%')}]}
              />
            </View>
          </View>
        </View>

        <Text
          style={[
            styles.TextInputtitle,
            {width: wp('85%'), marginTop: hp('3%')},
          ]}>
          Name
        </Text>
        <View
          style={[styles.viewBorder, {width: wp('85%'), marginTop: hp('1%')}]}>
          <TextInput
            value={Name}
            onChangeText={txt => setName(txt)}
            placeholder="Enter name"
            placeholderTextColor={COLOR.LIGHT_GRAY}
            keyboardType="default"
            style={[styles.TextInputtitle, {width: wp('66%')}]}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('MyWallet')}
          style={{
            marginTop: hp('5%'),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <NavButton width={wp('85%')} height={hp('7%')} />
          <Text
            style={{
              fontFamily: FONT.SEMI_BOLD,
              color: COLOR.BLACK,
              fontSize: FONT_SIZE.F_23,
              position: 'absolute',
              top: hp('2%'),
            }}>
            Payment
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DebitCard;
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
    fontSize: FONT_SIZE.F_17,
    fontFamily: FONT.REGULAR,
    color: COLOR.WHITE,
    paddingHorizontal: hp('2%'),
  },
  viewBorder: {
    borderColor: COLOR.GRAY,
    borderRadius: hp('2%'),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.Light_Voilet,
  },
  cardImg: {
    width: wp('6%'),
    height: hp('6%'),
    marginHorizontal: hp('2%'),
    resizeMode: 'contain',
  },
});
