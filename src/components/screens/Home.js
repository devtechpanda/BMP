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
  FlatList,
  Switch,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Styles from '../../config/Styles';
import AlertIcon from '../../assets/svg/AlertIcon.svg';
import Filter from '../../assets/svg/Filter.svg';
import FilterModalLine from '../../assets/svg/FilterModalLine.svg';
import RightArrow from '../../assets/svg/RightArrow.svg';
import Star from '../../assets/svg/Star.svg';
import LocationPointer from '../../assets/svg/LocationPointer.svg';
import Like from '../../assets/svg/Like.svg';
import Dislike from '../../assets/svg/Dislike.svg';
import {SliderPicker} from 'react-native-slider-picker';
import {COLOR, FONT} from '../../config/Globles';
import {useNavigation} from '@react-navigation/native';
import BottomNavBar from '../../Navigation/BottomNavBar';

import {fetchHomeCategory, fetchHomeRestaurant} from '../../redux/Store';  //function Name
import {useDispatch, useSelector} from 'react-redux'; // send and receive data

const Home = ({route}) => {
  const dispatch = useDispatch();
  const Categories = useSelector(state => state.HomeCategoryData);
  const Carddata = useSelector(state => state.HomeRestaurantData);
  const isLoadingCategory = Categories === null;
  const isLoadingForRestaurents = Carddata === null;

  const [search, setSearch] = useState('');

  // console.log(Carddata);

  useEffect(() => {
    dispatch(fetchHomeCategory());
    dispatch(fetchHomeRestaurant());
  }, []);

  const activePageName = 0;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(1);
  const [switchValue, setSwitchValue] = useState(true);
  const [Properties, setProperties] = useState('');

  console.log('km--------', value);

  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
  };

  // ---------- carousel Internal Component ------
  const CarouselHandilor = index => {
    const carouselRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [dotPosition, setDotPosition] = useState(0);

    const images = [
      require('../../assets/images/FoodFour.jpeg'),
      require('../../assets/images/FoodTwo.jpeg'),
      require('../../assets/images/FoodOne.jpg'),
      require('../../assets/images/Foodthree.jpg'),
      require('../../assets/images/FoodTwo.jpeg'),
      require('../../assets/images/FoodOne.jpg'),
    ];
    const calculateDotPosition = index => {
      const position =
        index * (styles.dot.width + styles.dot.marginHorizontal * 2);
      setDotPosition(position);
    };

    useEffect(() => {
      calculateDotPosition(activeSlide);
    }, [activeSlide]);

    const ImageClickHandilor = () => {
      Alert.alert('Clicked');
    };
    return (
      <View style={styles.scrollingImagescontainer}>
        <Carousel
          ref={carouselRef}
          data={images}
          sliderWidth={wp('300%')}
          itemWidth={wp('300%')}
          layout="default"
          loop
          autoplay
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                ImageClickHandilor();
              }}>
              <View style={styles.slide}>
                <Image source={item} style={styles.image} />
              </View>
            </TouchableOpacity>
          )}
          onSnapToItem={index => setActiveSlide(index)}
        />

        <ScrollView
          horizontal
          contentContainerStyle={styles.paginationContainer}
          showsHorizontalScrollIndicator={false}>
          <Pagination
            dotsLength={images.length}
            activeDotIndex={activeSlide}
            dotStyle={styles.dot}
            inactiveDotStyle={styles.inactiveDot}
            renderDot={
              <View
                style={[
                  styles.dot,
                  index === activeSlide ? styles.activeDot : null,
                ]}
              />
            }
          />
        </ScrollView>
      </View>
    );
  };

  //  ----------- Category -----------
  const SelectedCategory = value => {
    setProperties(value);
  };

  //Location
  const LocationHandilor = () => {
    Alert.alert('Location Handilor');
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={[Styles.container, {backgroundColor: COLOR.ThemeColor}]}>
        <View style={styles.topUserContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Menu')}
            style={{flexDirection: 'row'}}>
            <View
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                borderRadius: hp('9%'),
              }}>
              <Image
                source={require('../../assets/images/man.png')}
                style={{
                  height: hp('7%'),
                  width: wp('10%'),
                  resizeMode: 'contain',
                }}
              />
            </View>

            <View
              style={{
                alignItems: 'flex-start',
                marginLeft: hp('2%'),
                width: wp('57%'),
              }}>
              <Text
                style={[
                  styles.userName,
                  {color: COLOR.Orange, marginTop: hp('1%')},
                ]}>
                Shyam Reddy
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <LocationPointer
                  style={styles.cardImg}
                  height={hp('2%')}
                  width={wp('3.5%')}
                />
                <Text
                  style={{
                    color: COLOR.WHITE,
                    fontSize: wp('3.5%'),
                    fontFamily: FONT.REGULAR,
                    marginLeft: hp('0.5%'),
                  }}>
                  Indore City
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notifications');
            }}>
            <AlertIcon height={hp('7.5%')} width={wp('11%')} />
          </TouchableOpacity>
        </View>

        {/* -------- SEARCH --------- */}
        <View style={Styles.searchBarContainer}>
          <Image
            source={require('../../assets/images/Search.png')}
            style={styles.cardImg}
          />
          <TextInput
            style={Styles.searchInput}
            placeholder="Search"
            placeholderTextColor="white"
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <Filter height={hp('6%')} width={wp('15%')} />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1, marginBottom: hp('5%')}}>
          {/* -----------Carousel---------- */}
          <CarouselHandilor />
          {/* Category Data */}

          <View>
            <View style={[Styles.categoryContainer]}>
              <Text
                style={[
                  Styles.categoryTitle,
                  {marginBottom: hp('1.5%'), color: COLOR.WHITE},
                ]}>
                Category
              </Text>

              {isLoadingCategory ? (
                <View
                  style={{
                    marginTop: hp('3%'),
                    marginBottom: hp('3%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ActivityIndicator
                    color="FFFFFF"
                    style={{alignSelf: 'center'}}
                  />
                </View>
              ) : (
                <View style={Styles.categoryRow}>
                  {Categories !== null ? (
                    <FlatList
                      data={Categories}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          onPress={() => {
                            SelectedCategory(item.categoryname);
                          }}
                          style={[
                            styles.categoryButton,
                            {
                              backgroundColor:
                                Properties === item.categoryname
                                  ? '#FF9E00'
                                  : '#341D40',
                            },
                          ]}>
                          <Image
                            source={{uri: item.categoryicon}}
                            style={{
                              width: wp('12%'),
                              height: hp('6%'),
                              borderRadius: hp('5%'),
                              resizeMode: 'contain',
                            }}
                          />
                          <Text
                            style={styles.categoryButtonTextComponent}
                            numberOfLines={1}>
                            {item.categoryname}
                          </Text>
                        </TouchableOpacity>
                      )}
                    />
                  ) : (
                    <ActivityIndicator size={'large'} color={'voilet'} />
                  )}
                </View>
              )}
            </View>
          </View>

          {/* Restorents */}

          <View>
            <Text style={[Styles.categoryTitle, {color: COLOR.WHITE}]}>
              Restaurants
            </Text>

            {isLoadingForRestaurents ? (
              <View style={{marginTop: hp('5%')}}>
                <ActivityIndicator
                  color="FFFFFF"
                  style={{alignSelf: 'center'}}
                />
              </View>
            ) : (
              <View>
                <FlatList
                  data={Carddata}
                  keyExtractor={(item, index) => index.toString()}
                  contentContainerStyle={{
                    marginTop: hp('1.5%'),
                  }}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Detail')}
                      style={[Styles.menuCardContainer]}>
                      <ImageBackground
                        source={{uri: item.storephoto}}
                        style={styles.imageBackgroundRestorents}
                        imageStyle={styles.imageStyle}>
                        <TouchableOpacity style={styles.likeButton}>
                          {item.status ? (
                            <Dislike height={hp('7%')} width={wp('15%')} />
                          ) : (
                            <Like height={hp('7%')} width={wp('15%')} />
                          )}
                        </TouchableOpacity>

                        <View style={styles.content}>
                          <View
                            style={{
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <Text style={styles.title}>{item.name}</Text>
                            <View
                              style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginRight: hp('1%'),
                              }}>
                              <Star height={hp('3%')} width={wp('3.5%')} />
                              <Text
                                style={{
                                  color: COLOR.WHITE,
                                  fontSize: hp('1.5%'),
                                  fontFamily: FONT.BOLD,
                                  marginLeft: hp('0.5%'),
                                }}>
                                {item.ratings} Star
                              </Text>
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: hp('-1%'),
                            }}>
                            <View
                              style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginBottom: hp('-1%'),
                              }}>
                              <LocationPointer
                                height={hp('3%')}
                                width={wp('3.5%')}
                              />
                              <Text
                                style={[
                                  styles.textCard,
                                  {width: wp('60%'), marginLeft: hp('0.5%')},
                                ]}
                                numberOfLines={1}>
                                {item.livelocation[0].formattedAddress}
                              </Text>
                            </View>

                            <View style={styles.Kilombutton}>
                              <Text style={Styles.categoryButtonText}>
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
            )}
          </View>
        </ScrollView>

        <BottomNavBar activePageName={activePageName} />

        {/* -----------Filter Modal ---------- */}
        <Modal
          animationType="none"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
          visible={modalVisible}>
          <View style={[Styles.modalContainer]}>
            <View style={Styles.modalActivityContainer}>
              <View style={Styles.modalTitleContainer}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <FilterModalLine style={Styles.filterModalLine} />
                </TouchableOpacity>

                <Text style={Styles.filterTitle}>Filter</Text>
              </View>
              <ScrollView style={{flex: 1}}>
                <View style={Styles.filterOptions}>
                  <TouchableOpacity
                    style={[Styles.filterOption, Styles.selectedFilterOption]}>
                    <Text style={Styles.filterOptionText}>Location</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.filterOption}>
                    <Text style={Styles.filterOptionText}>Sort By</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.filterOption}>
                    <Text style={Styles.filterOptionText}>Cuisines</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.filterOption}>
                    <Text style={Styles.filterOptionText}>Rating</Text>
                  </TouchableOpacity>
                </View>
                <Text style={Styles.discoverSettings}>DISCOVERT SETTINGS</Text>
                <View style={Styles.locationContainer}>
                  <Text style={Styles.locationText}>Location</Text>
                  <TouchableOpacity
                    style={Styles.rightArrow}
                    onPress={() => {
                      LocationHandilor();
                    }}>
                    <Text style={[Styles.locationDetails]}>
                      Hamburg, Germany
                    </Text>
                    <RightArrow height={hp('3%')} width={wp(' 5%')} />
                  </TouchableOpacity>
                </View>

                <View style={Styles.distanceContainerMain}>
                  <View style={Styles.distanceHeader}>
                    <Text style={Styles.distanceLabel}>
                      Distance Preference
                    </Text>
                    <Text style={Styles.distanceValue}>{value} km</Text>
                  </View>

                  <View style={Styles.controlerContainer}>
                    <SliderPicker
                      defaultValue={value}
                      callback={position => {
                        setValue(position);
                      }}
                      labelFontColor={'#6c7682'}
                      labelFontWeight={'600'}
                      showFill={true}
                      fillColor={COLOR.Voilet}
                      buttonBackgroundColor={'#fff'}
                      buttonDimensionsPercentage={hp('0.6%')}
                      heightPercentage={1.5}
                      widthPercentage={85}
                      style={[
                        styles.sliderPicker,
                        {transition: 'all 0.3s ease'},
                      ]}
                    />
                  </View>

                  <View style={Styles.toggleContainer}>
                    <Text style={Styles.toggleLabel}>
                      Only show restaurants in this range
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
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollingImagescontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width: wp('90%'),
    height: hp('21%'),
    borderRadius: hp('2%'),
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'pink',
  },

  //   ---- dot ----
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  paginationContainer: {
    marginTop: hp('-1%'),
  },
  dot: {
    width: hp('2.5%'),
    height: hp('0.9%'),
    borderRadius: hp('0.5%'),
    backgroundColor: COLOR.Voilet,
    marginHorizontal: hp('-1%'),
  },
  inactiveDot: {
    backgroundColor: 'white',
  },
  activeDot: {
    backgroundColor: 'yellow',
  },

  //   ------------- Restorent Images ---------

  imageBackgroundRestorents: {
    width: wp('90%'),
    height: hp('23%'),
    resizeMode: 'cover',
    justifyContent: 'center',
    marginBottom: hp('2.5%'),
    // backgroundColor: 'red',
  },
  imageStyle: {
    borderRadius: hp('1%'),
  },
  content: {
    marginTop: hp('15%'),
    paddingHorizontal: hp('1.5%'),
  },
  title: {
    fontSize: hp('2%'),
    fontFamily: FONT.MEDIUM,
    color: 'white',
    marginBottom: hp('1%'),
  },
  description: {
    fontSize: hp('20%'),
    color: 'white',
  },
  likeButton: {
    position: 'absolute',
    top: hp('0.2%'),
    right: hp('0.2%'),
    zIndex: 999,
  },
  // ---------- textcard ---
  textCard: {
    color: COLOR.WHITE,
    fontSize: hp('1.8%'),
    fontFamily: FONT.REGULAR,
  },
  cardImg: {
    width: wp('5%'),
    height: hp('5%'),
    resizeMode: 'contain',
  },
  Kilombutton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('15%'),
    height: hp('3%'),
    borderRadius: hp('0.5%'),
    backgroundColor: '#FF9E00',
    overflow: 'hidden',
    marginTop: hp('0.5%'),
  },
  userName: {
    fontSize: hp('2%'),
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
  },
  topUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryButtonTextComponent: {
    fontSize: hp('1.5%'),
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
    marginTop: hp('0.5%'),
    paddingLeft: hp('0.5%'),
    paddingRight: hp('0.5%'),
  },
  categoryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('19%'),
    height: hp('11%'),
    borderRadius: hp('1.5%'),
    backgroundColor: '#FFFFFF',
    borderWidth: hp('0.1%'),
    borderColor: '#1A3D3989',
    overflow: 'hidden',
    marginRight: hp('2.5%'),
    backgroundColor: 'green',
  },
});
