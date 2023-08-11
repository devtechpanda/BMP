import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import AlertIcon from '../../assets/svg/AlertIcon.svg';
import Star from '../../assets/svg/Star.svg';
import DirectUp from '../../assets/svg/DirectUp.svg';
import Call from '../../assets/svg/Call.svg';
import BarCode from '../../assets/svg/BarCode.svg';
import NavButton from '../../assets/svg/NavButton.svg';
import {COLOR, FONT, FONT_SIZE} from '../../config/Globles';
import Styles from '../../config/Styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MenuItem from '../../assets/svg/menuItem.svg';
import ChatIcon from '../../assets/svg/ChatIcon.svg';

import MapView, {Marker} from 'react-native-maps';

const BookingDetails = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [finallatitude, setFianlLatitude] = useState(22.754635095250947);
  const [finallongitude, setFianlLongitude] = useState(75.90351919972711);

  useEffect(() => {
    Permission();
  }, []);

  const Permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool App Location Permission',
          message: 'Cool App needs access to your Location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Location');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    setCurrentLocation({
      latitude: finallatitude,
      longitude: finallongitude,
    });
  };

  const handleChatPress = () => {
    navigation.navigate('chat');
  };

  return (
    <ScrollView
      style={{
        paddingLeft: hp('1.5%'),
        paddingRight: hp('1.5%'),
        flex: 1,
        backgroundColor: COLOR.ThemeColor,
      }}>
      <View style={Styles.detailHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack('');
          }}>
          <Image
            source={require('../../assets/images/LeftArrow.png')}
            style={{
              marginLeft: hp('1%'),
              height: hp('5.5%'),
              width: hp('5.5%'),
            }}
          />
        </TouchableOpacity>
        <Text style={Styles.detailHeaderTitle}>Detail</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <AlertIcon height={hp('8%')} width={wp('11%')} />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp('2%'),
          }}>
          <Image
            source={require('../../assets/images/Resturant3.png')}
            style={[Styles.detailImage]}
          />

          <Image
            source={require('../../assets/images/Resturant3.png')}
            style={[Styles.detailImage]}
          />
        </View>
      </ScrollView>

      <View style={Styles.detailKmContainer}>
        <View>
          <Text style={Styles.nameKm}>The Eighteen Restaurant</Text>
          <View style={Styles.ratingContainer}>
            <Star height={hp('4%')} width={wp('5%')} />
            <Text style={Styles.rating}>4.5</Text>
          </View>
        </View>
        <View style={[Styles.distanceContainer, {backgroundColor: '#E5A421'}]}>
          <Text style={Styles.distance}>5 Km</Text>
        </View>
      </View>

      <View style={Styles.DirectionAndCallContainer}>
        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => {
            navigation.navigate('Map');
          }}>
          <DirectUp height={hp('2.8%')} width={wp('5%')} />
          <Text style={Styles.directionButtonText}>Get Directions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.buttonContainer}>
          <Call height={hp('3%')} width={wp('5%')} />
          <Text style={Styles.directionButtonText}>Call For Info</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.barCodeContainer}>
        <View style={Styles.barCodeHeader}>
          <Text style={Styles.barCodeheaderText}>Menu</Text>
        </View>
        <View
          style={[Styles.menuItemsBarCode, {justifyContent: 'space-between'}]}>
          <View
            style={{
              width: wp('45%'),
              flexDirection: 'row',
              justifyContent: 'space-between',
              //   backgroundColor: 'yellow',
            }}>
            <View style={styles.menuView}>
              <MenuItem height={hp('3%')} width={wp('5%')} />
            </View>
            <View style={styles.menuView}>
              <MenuItem height={hp('3%')} width={wp('5%')} />
            </View>
            <View style={styles.menuView}>
              <MenuItem height={hp('3%')} width={wp('5%')} />
            </View>
          </View>

          <BarCode height={hp('8%')} width={wp('15%')} />
        </View>
      </View>

      {/* Booking details */}
      <View style={styles.deatilsView}>
        <Text style={Styles.nameKm}>Booking Details</Text>
        <View>
          <Text style={styles.deatilTxt}>Date</Text>
          <Text style={styles.detailInfoTxt}>April13, 2023 at 4:30</Text>
        </View>
        <View>
          <Text style={styles.deatilTxt}>Guests</Text>
          <Text style={styles.detailInfoTxt}>4</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.deatilTxt}>Phone Number</Text>
            <Text style={styles.detailInfoTxt}>+919876543212</Text>
          </View>
          <TouchableOpacity
            style={{
              marginRight: hp('0.5%'),
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => handleChatPress()}>
            <ChatIcon height={hp('10%')} width={wp('15%')} />
            <Text style={styles.deatilTxt}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Restaurant Details */}
      <View>
        <Text style={[Styles.nameKm, {marginBottom: hp('2%')}]}>
          Restaurant Details
        </Text>
        <View style={styles.mapView}>
          <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: finallatitude,
              longitude: finallongitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.001,
            }}>
            {currentLocation && (
              <Marker
                coordinate={{
                  latitude: finallatitude,
                  longitude: finallongitude,
                }}
                title={'HHHH'}
                pinColor={'red'}
                style={{color: 'red'}}
              />
            )}
          </MapView>
        </View>
      </View>
      <View style={Styles.reserveContainer}>
        <Text style={Styles.reserveText}>1/10 tables available now</Text>
        {/* ------ Button --------- */}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={{
            marginBottom: hp('4%'),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <NavButton width={wp('90%')} height={hp('9%')} />
          <Text
            style={{
              fontFamily: FONT.SEMI_BOLD,
              color: COLOR.BLACK,
              fontSize: FONT_SIZE.F_23,
              position: 'absolute',
              top: hp('3%'),
            }}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BookingDetails;
const styles = StyleSheet.create({
  ImageView: {
    width: wp('13%'),
    height: hp('6%'),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCate: {
    width: wp('8%'),
    height: hp('6%'),
    resizeMode: 'contain',
  },
  deatilsView: {
    marginVertical: hp('2%'),
    gap: 15,
    borderBottomColor: COLOR.WHITE,
    borderBottomWidth: hp('0.1%'),
  },
  deatilTxt: {
    color: '#fff',
    fontSize: FONT_SIZE.F_19,
    fontFamily: FONT.REGULAR,
    marginBottom: hp('0.3%'),
  },
  detailInfoTxt: {
    color: COLOR.GRAY,
    fontSize: FONT_SIZE.F_19,
    fontFamily: FONT.REGULAR,
  },
  menuView: {
    backgroundColor: COLOR.Light_Voilet,
    padding: hp('1.8%'),
    borderRadius: hp('1.5%'),
  },
  mapView: {
    width: '100%',
    height: hp('35%'),
    borderRadius: hp('2%'),
    overflow: 'hidden',
  },
});
