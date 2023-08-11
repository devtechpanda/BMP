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
import {Slider} from '@miblanchard/react-native-slider';

const Settings = ({navigation}) => {
  const [value, setValue] = useState(1);
  const [switchValue, setSwitchValue] = useState(true);

  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
  };
  // --------------------- Slider image -----------
  const CustomThumb = () => (
    <View
      style={{
        height: 23,
        width: 23,
        // backgroundColor: 'red',
        borderRadius: 16,
      }}>
      <Image
        style={{
          resizeMode: 'contain',
          height: 30,
          width: 35,
          // tintColor: COLOR.Orange,
        }}
        source={require('../../assets/images/Slider.png')}
      />
    </View>
  );

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
        <Text style={styles.detailHeaderTitle}>Settings</Text>
        <AlertIcon height={hp('10%')} width={wp('13%')} />
      </View>

      <Text
        style={{
          fontSize: FONT_SIZE.F_22,
          fontWeight: FONT.BOLD,
          color: COLOR.WHITE,
        }}>
        DISCOVERY SETTINGS
      </Text>

      <View
        // onPress={() => navigation.navigate('Settings')}
        style={[
          styles.ViewBorder,
          {marginTop: hp('3%'), flexDirection: 'row'},
        ]}>
        <Text style={[styles.TextInputtitle]}>Location</Text>
        <Text
          style={[
            styles.Texttitle,
            {width: wp('58%'), marginHorizontal: wp('2%')},
          ]}>
          Hambug,Germany
        </Text>
        <Image
          source={require('../../assets/images/RightArrow.png')}
          style={[styles.cardImg, {tintColor: 'black'}]}
        />
      </View>

      <View
        // onPress={() => navigation.navigate('Settings')}
        style={[styles.ViewBorder, {marginTop: hp('3%')}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: wp('83%'),
          }}>
          <Text style={[styles.TextInputtitle]}>Distance Preference</Text>
          <Text
            style={{
              fontSize: FONT_SIZE.F_19,
              fontWeight: FONT.SEMI_BOLD,
              color: COLOR.Orange,
            }}>
            100km
          </Text>
        </View>
        <View style={{flex: 1, paddingTop: 2}}>
          <Slider
            animateTransitions
            minimumTrackTintColor={COLOR.Orange}
            minimumValue={0} // Set the minimum value of the slider (0 in this case)
            maximumValue={100}
            renderThumbComponent={CustomThumb}
            trackStyle={styles.trackStyle}
            thumbStyle={styles.thumbStyle}
            thumbTintColor="orange"
            containerStyle={styles.slider}
          />
          <View
            style={{
              borderColor: COLOR.GRAY,
              borderWidth: hp('0.1%'),
              width: wp('83%'),
              marginVertical: hp('2%'),
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp('9%'),
            width: wp('83%'),
          }}>
          <Text style={[styles.Texttitle, {fontSize: FONT_SIZE.F_2}]}>
            Only show Restaurant in this range
          </Text>

          <Switch
            trackColor={{
              false: switchValue ? COLOR.ExtLIGHT_GRAY : 'white',
              true: switchValue ? COLOR.ExtLIGHT_GRAY : 'white',
            }}
            thumbColor={switchValue ? 'gray' : 'orange'}
            value={switchValue}
            onValueChange={toggleSwitch}
            style={{transform: [{scaleX: 1.2}, {scaleY: 1.2}]}}
          />
        </View>
      </View>

      <Text
        style={{
          fontSize: FONT_SIZE.F_22,
          fontWeight: FONT.BOLD,
          color: COLOR.WHITE,
          marginTop: hp('3%'),
        }}>
        PRIVACY
      </Text>

      {/* ---------- Notification ---------- */}

      <TouchableOpacity
        onPress={() => navigation.navigate('Notifications')}
        style={[
          styles.ViewBorder,
          {
            marginTop: hp('3%'),
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}>
        <Text style={[styles.TextInputtitle]}>Notifications</Text>
        <Image
          source={require('../../assets/images/RightArrow.png')}
          style={[styles.cardImg, {tintColor: 'black'}]}
        />
      </TouchableOpacity>
      {/* ----------- PRIVACY-------------- */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Privacy')}
        style={[
          styles.ViewBorder,
          {
            marginTop: hp('3%'),
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}>
        <View>
          <Text style={[styles.TextInputtitle]}>Privacy Policy</Text>
          <Text style={[styles.Texttitle, {fontSize: FONT_SIZE.F_2}]}>
            Choose what data you share with us
          </Text>
        </View>
        <View>
          <Image
            source={require('../../assets/images/RightArrow.png')}
            style={[styles.cardImg, {tintColor: 'black'}]}
          />
        </View>
      </TouchableOpacity>
      {/* ----------- PRIVACY-------------- */}
      <TouchableOpacity
        onPress={() => navigation.navigate('TermandCond')}
        style={[
          styles.ViewBorder,
          {
            marginTop: hp('3%'),
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}>
        <Text style={[styles.TextInputtitle]}>Terms of service</Text>
        <Image
          source={require('../../assets/images/RightArrow.png')}
          style={[styles.cardImg, {tintColor: 'black'}]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

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
    fontWeight: FONT.BOLD,
    textAlign: 'center',
    fontSize: hp('2.4%'),
  },
  // ---------- header end-----------
  //   ---------- Prfile text --------

  TextInputtitle: {
    fontSize: FONT_SIZE.F_22,
    fontWeight: FONT.BOLD,
    color: COLOR.Black,
  },
  Texttitle: {
    fontSize: FONT_SIZE.F_19,
    fontWeight: FONT.SEMI_BOLD,
    color: COLOR.LIGHT_GRAY,
    textAlign: 'right',
  },

  ViewBorder: {
    width: wp('95%'),
    borderColor: COLOR.GRAY,
    borderRadius: hp('1.5%'),
    alignSelf: 'center',
    alignItems: 'center',
    padding: hp('0.7%'),
    paddingHorizontal: hp('1.5%'),
    backgroundColor: COLOR.WHITE,
  },

  cardImg: {
    width: wp('4%'),
    height: hp('4%'),
    // marginHorizontal: hp('2%'),
    resizeMode: 'contain',
  },

  slider: {
    width: wp('80%'),
    // backgroundColor: 'pink',
    // margin: hp('2%'),
    overflow: 'visible',
  },
  thumbStyle: {
    height: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    width: 30,
  },
  trackStyle: {
    width: wp('80%'),
    height: hp('1%'),
    alignSelf: 'center',
    borderRadius: hp('1.5%'),
  },
});
