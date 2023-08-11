import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import {COLOR, FONT, FONT_SIZE} from '../../config/Globles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import BottomNavBar from '../../Navigation/BottomNavBar';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const mapData = [
  {
    id: 1,
    title: 'Restro 1',
    latitude: 22.736059,
    longitude: 75.882328,
    image: require('../../assets/images/Place.png'),
    title1: 'Vivamus aliquam nisl eu massa aliquam mollis.',
  },
  {
    id: 2,
    title: 'Restro 2',
    latitude: 22.588919,
    longitude: 75.336231,
    image: require('../../assets/images/Resturant3.png'),
    title1: 'Vivamus aliquam nisl eu massa aliquam mollis.',
  },
  {
    id: 3,
    title: 'Restro 3',
    latitude: 20.926769,
    longitude: 77.748694,
    image: require('../../assets/images/Resturant3.png'),
    title1: 'Vivamus aliquam nisl eu massa aliquam mollis.',
  },
];

const Map = () => {
  const [starCount, setStarCount] = useState(2.5);
  const activePageName = 1;
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchTxt, setSearchTxt] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedRestaurants, setSelectedRestaurants] = useState(null);

  useEffect(() => {
    Permission();
  }, []);

  const onStarRatingPress = rating => {
    setStarCount(rating);
  };

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
    Geolocation.getCurrentPosition(
      async position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
      },
      error => Alert.alert('Error', error.message),
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const RestroCard = ({item}) => (
    <TouchableOpacity style={styles.cardStyle}>
      <Image
        source={item.image}
        style={{
          width: wp('25%'),
          height: hp('15%'),
          borderRadius: hp('1%'),
        }}
      />
      <View style={{width: wp('55%'), marginLeft: hp('4%')}}>
        <Text style={[styles.barCodeheaderText, {color: COLOR.Black}]}>
          {item.title}
        </Text>
        <Text
          style={{
            color: 'gray',
            fontSize: FONT_SIZE.F_19,
            fontFamily: FONT.MEDIUM,
          }}>
          {item.title1}
        </Text>
        <View
          style={{
            width: wp('55%'),
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <StarRating
            disabled={false}
            emptyStar={require('../../assets/images/Dislike.png')}
            fullStar={require('../../assets/images/star.png')}
            halfStar={require('../../assets/images/star.png')}
            starSize={15}
            maxStars={5}
            rating={starCount}
            selectedStar={rating => onStarRatingPress(rating)}
            fullStarColor={'yellow'}
            starStyle={{marginRight: 5}}
          />
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/whiteCall.png')}
              style={{
                width: wp('10%'),
                height: hp('4%'),
                resizeMode: 'contain',
                marginRight: hp('1%'),
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  // Property search
  const handleSearrchProperty = text => {
    if (text !== '') {
      setSearchTxt(text);

      const filteredSuggestions = mapData.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase()),
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSearchTxt('');
      setShowSuggestions(false);
      setSuggestions([]);
      setSelectedRestaurants(null);
    }
  };

  // selected property
  const handleSelectProperty = item => {
    setShowSuggestions(false);
    setSelectedRestaurants(item);
    setSearchTxt(item.title);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Map and map marker view */}
      <View style={{flex: 1}}>
        {selectedRestaurants !== null ? (
          <MapView
            style={{flex: 1}}
            region={{
              latitude: Number(selectedRestaurants?.latitude),
              longitude: Number(selectedRestaurants?.longitude),
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            }}>
            <Marker
              coordinate={{
                latitude: Number(selectedRestaurants?.latitude),
                longitude: Number(selectedRestaurants?.longitude),
              }}
              title={selectedRestaurants.title}
              showsMyLocationButton={true}
            />
          </MapView>
        ) : (
          currentLocation && (
            <MapView
              style={{flex: 1}}
              initialRegion={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003,
              }}
              showsUserLocation={true}>
              {mapData.length > 0 &&
                mapData.map(location => {
                  return (
                    <Marker
                      coordinate={{
                        latitude: Number(location.latitude),
                        longitude: Number(location.longitude),
                      }}
                      title={location.title}
                      showsMyLocationButton={true}
                    />
                  );
                })}
            </MapView>
          )
        )}

        {/* Search view */}
        <View style={styles.container}>
          <View style={{width: wp('10%')}}>
            <Image
              source={require('../../assets/images/Search.png')}
              tintColor="black"
              style={{
                marginHorizontal: hp('1%'),
                width: wp('5%'),
                height: hp('5%'),
                resizeMode: 'contain',
              }}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="gray"
            keyboardType="default"
            onChangeText={val => {
              handleSearrchProperty(val);
              setShowSuggestions(true);
            }}
            value={searchTxt}
            onSubmitEditing={() => setShowSuggestions(false)}
          />
          <View style={{width: wp('10%')}}>
            {selectedRestaurants !== null && (
              <TouchableOpacity
                onPress={() => {
                  setSelectedRestaurants(null);
                  setSearchTxt('');
                }}>
                <Image
                  source={require('../../assets/images/close.png')}
                  tintColor="black"
                  style={{
                    marginHorizontal: hp('1%'),
                    width: wp('5%'),
                    height: hp('5%'),
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      {/* Restro Cards */}
      <View
        style={{
          position: 'absolute',
          bottom: hp('8%'),
          alignSelf: 'center',
          marginLeft: hp('1%'),
        }}>
        {selectedRestaurants !== null ? (
          <RestroCard item={selectedRestaurants} />
        ) : (
          <FlatList
            data={mapData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <RestroCard item={item} />}
          />
        )}
      </View>

      {/* Filter List */}
      <ScrollView
        style={{
          marginLeft: hp('3%'),
          position: 'absolute',
          top: hp('10%'),
          height: hp('80%'),
        }}>
        {showSuggestions && (
          <FlatList
            data={suggestions}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.tabView}
                onPress={() => handleSelectProperty(item)}>
                <Text style={styles.tabTxt}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView>

      <View>
        <BottomNavBar activePageName={activePageName} />
      </View>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: wp('90%'),
    backgroundColor: 'white',
    marginVertical: wp('6%'),
    borderRadius: hp('1.5%'),
    padding: hp('0.5%'),
    position: 'absolute',
    shadowColor: '#000',
    elevation: hp('5%'),
  },
  input: {
    height: hp('5.5%'),
    color: 'black',
    fontSize: hp('2%'),
    alignSelf: 'flex-start',
    width: wp('70%'),
  },
  cardStyle: {
    backgroundColor: COLOR.WHITE,
    width: wp('90%'),
    borderRadius: hp('1.5%'),
    padding: hp('1.3%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: hp('2%'),
  },
  barCodeheaderText: {
    fontSize: FONT_SIZE.F_22,
    fontFamily: FONT.MEDIUM,
    marginTop: hp('1.2%'),
  },
  tabView: {
    width: wp('90%'),
    backgroundColor: '#93bfbf',
    borderWidth: 0.5,
    borderColor: 'grey',
    marginVertical: hp('0.8%'),
    borderRadius: hp('1.5%'),
    padding: hp('1.8%'),
  },
  tabTxt: {
    fontSize: FONT_SIZE.F_15,
    fontFamily: FONT.MEDIUM,
    color: COLOR.BLACK,
  },
});
