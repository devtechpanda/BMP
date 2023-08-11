import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Globles, {COLOR, FONT, FONT_SIZE} from './Globles';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.ThemeColor,
    padding: hp('2%'),
    backgroundColor: 'red',
  },
  logoMainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    margin: -100,
  },

  //Logo
  buttonLogoContainer: {
    marginTop: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  startButtonLogo: {
    backgroundColor: 'orange',
    paddingVertical: hp('1%'),
    paddingHorizontal: hp('2%'),
    borderRadius: hp('0.5%'),
    marginRight: hp('2%'),
  },
  screensButtonLogo: {
    backgroundColor: '#007AFF',
    paddingVertical: hp('1%'),
    paddingHorizontal: hp('2%'),
    borderRadius: hp('0.5%'),
    marginLeft: hp('2%'),
  },
  buttonTextLogo: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  //Login
  title: {
    fontSize: hp('4%'),
    fontWeight: 'bold',
    color: '#A74BFF',
    marginBottom: hp('2%'),
    fontSize: FONT_SIZE.F_21,
    fontFamily: FONT.EXTRA_BOLD,
  },
  subtitle: {
    fontSize: hp('2.3%'),
    color: '#07000E',
    marginBottom: hp('10%'),
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
  },
  socialSVGImagesContainer: {
    alignItems: 'center',
    marginBottom: hp('5%'),
  },
  facebookSVGContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: hp('500%'),
    padding: hp('1.7%'),
    marginBottom: hp('1%'),
  },
  googleSVGContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: hp('5%'),
    padding: hp('1.3%'),
    marginBottom: hp('1%'),
  },
  socialText: {
    fontSize: hp('1.8%'),
    color: '#07000E',
  },
  inputContainer: {
    width: '100%',
    marginBottom: hp('5%'),
    color: '#07000E',
    fontFamily: FONT.SEMI_BOLD,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: hp('0.1%'),
    borderRadius: hp('1%'),
    borderColor: '#0D000000',
    backgroundColor: '#FFFFFF',
    marginBottom: hp('2.5%'),
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    height: hp('6.8%'),
  },
  input: {
    flex: 1,
    fontSize: hp('1.8%'),
  },
  loginButtonContainer: {
    backgroundColor: '#776BF1',
    borderRadius: hp('2.5%'),
    padding: hp('1.7%'),
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp('20%'),
  },
  signupText: {
    fontSize: hp('1.8%'),
    color: '#000000',
  },
  signupLink: {
    color: '#A345FE',
    fontSize: hp('1.8%'),
    marginLeft: wp('1.5%'),
  },

  //Bottom Nav Bar
  bottomNavBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: hp('7.3%'),
    backgroundColor: 'red',
    borderTopColor: '#ccc',
    alignItems: 'center',
    width: wp('100%'),
    paddingHorizontal: hp('4%'),
  },
  icon: {
    // width: wp('16%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  //Main
  topUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('2.5%'),
    paddingVertical: hp('0.1%'),
    marginTop: hp('1.5%'),
    marginBottom: hp('2%'),
    borderColor: COLOR.GRAY,
    borderWidth: wp('0.1%'),
    borderRadius: hp('2%'),
    height: hp('6%'),
  },

  SearchAndTextInput: {
    alignItems: 'center',
    backgroundColor: 'red',
  },

  searchInput: {
    color: COLOR.WHITE,
    textAlign: 'left',
    width: wp('66.5%'),
    marginHorizontal: hp('1%'),
  },

  categoryContainer: {
    marginBottom: hp('1.5%'),
    marginTop: hp('-3%'),
  },
  categoryTitle: {
    fontSize: hp('2.2%'),
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: hp('0.5%'),
  },
  categoryButtonSelected: {
    backgroundColor: '#FF9E00',
  },

  categoryIcon: {
    marginBottom: hp('1%'),
  },
  categoryButtonText: {
    fontSize: hp('1.5%'),
    fontFamily: FONT.MEDIUM,
    color: COLOR.WHITE,
  },
  menuCardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuCard: {marginBottom: wp('2.5%')},
  slideDots: {
    marginTop: wp('2.5%'),
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  //Modal
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: hp('47%'),
  },

  modalActivityContainer: {
    flex: 1,
    borderRadius: hp('2.0%'),
    backgroundColor: COLOR.ThemeColor,
    padding: hp('1.6%'),
  },

  modalMainContainer: {
    flex: 1,
  },

  modalTitleContainer: {alignItems: 'center'},
  filterModalLine: {
    marginBottom: hp('1.8%'),
  },
  filterTitle: {
    fontSize: FONT_SIZE.F_23,
    fontFamily: FONT.SEMI_BOLD,
    marginBottom: hp('1.2%'),
    color: 'white',
  },
  filterOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('2.2%'),
    width: '100%',
    marginTop: hp('1%'),
  },
  filterOption: {
    borderRadius: hp('1.6%'),
    padding: hp('1.3%'),
    marginRight: hp('0.5%'),
    backgroundColor: COLOR.Light_Voilet,
  },
  selectedFilterOption: {
    backgroundColor: COLOR.Voilet,
    borderColor: '#6610011C',
  },
  filterOptionText: {
    color: 'white',
  },
  discoverSettings: {
    color: '#9EA3AE',
    fontSize: hp('2%'),
    marginBottom: hp('2.2%'),
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp('2%'),
    borderColor: '#E5E6EB',
    borderWidth: hp('0.1%'),
    borderRadius: hp('1%'),
  },
  locationText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_23,
    fontWeight: FONT.BOLD,
    marginRight: hp('1%'),
  },
  locationDetails: {
    color: '#9EA3AE',
    fontSize: FONT_SIZE.F_19,
    fontWeight: FONT.BOLD,
  },
  rightArrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 'auto',
  },

  distanceContainerMain: {
    padding: hp('2%'),
    marginTop: hp('2.2%'),
    marginBottom: hp('2%'),
    borderColor: '#E5E6EB',
    borderWidth: hp('0.1%'),
    borderRadius: hp('1%'),
  },
  distanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
    justifyContent: 'space-between',
  },
  distanceLabel: {
    fontSize: FONT_SIZE.F_23,
    fontWeight: FONT.BOLD,
    color: COLOR.WHITE,
    marginRight: hp('1%'),
  },
  distanceValue: {
    color: '#FF9E00',
    fontWeight: 'bold',
  },
  controlerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('1.2%'),
  },
  controler: {
    width: wp('80%'),
    height: hp('3%'),
  },

  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleLabel: {
    color: COLOR.GRAY,
    marginRight: hp('1%'),
  },

  //Detail
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailHeaderTitle: {
    flex: 1,
    color: COLOR.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: hp('2.4%'),
  },
  DetailMainContainer: {
    // marginTop: hp('1%'),
  },

  imageContainer: {
    backgroundColor: 'pink',
    overflow: 'hidden',
  },
  detailImage: {
    width: wp('60%'),
    height: hp('28%'),
    borderRadius: wp('6%'),
    marginRight: hp('2.6%'),
    // backgroundColor: 'yellow',
    resizeMode: 'contain',
  },

  detailKmContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.ThemeColor,
    padding: hp('1%'),
    marginBottom: hp('3%'),
  },

  nameKm: {
    color: COLOR.WHITE,
    fontWeight: 'bold',
    fontSize: hp('2.2%'),
    marginBottom: hp('1%'),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: COLOR.WHITE,
    marginLeft: hp('0.5%'),
    fontSize: hp('2%'),
  },
  distanceContainer: {
    backgroundColor: COLOR.Voilet,
    borderRadius: hp('1%'),
    paddingVertical: hp('1%'),
    paddingHorizontal: hp('1.8%'),
  },
  distance: {
    color: COLOR.WHITE,
    fontWeight: 'bold',
    fontSize: hp('1.9%'),
  },

  DirectionAndCallContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: hp('1.9%'),
    // marginTop: hp('1%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: hp('0.1%'),
    // borderColor: '#1A3D3989',
    borderRadius: hp('1%'),
    paddingHorizontal: hp('2.5%'),
    paddingVertical: hp('1.5%'),
    backgroundColor: COLOR.Light_Voilet,
  },
  directionButtonText: {
    marginLeft: hp('1.5%'),
    fontSize: FONT_SIZE.F_17,
    fontWeight: FONT.SEMI_BOLD,
    color: COLOR.WHITE,
  },

  barCodeContainer: {
    borderTopColor: COLOR.GRAY,
    borderBottomColor: COLOR.GRAY,
    borderColor: '#FFFFFF',
    borderTopWidth: hp('0.1%'),
    borderBottomWidth: hp('0.1%'),
    paddingHorizontal: hp('1%'),
    marginTop: hp('2.8%'),
    paddingBottom: hp('1.5%'),
  },
  barCodeHeader: {
    // marginBottom: hp('1.3%'),
  },
  barCodeheaderText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_22,
    fontWeight: 'bold',
    marginTop: hp('1.2%'),
  },
  menuItemsBarCode: {
    width: wp('90%'),
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: hp('1.2%'),
  },

  reserveContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp('8.5%'),
    paddingBottom: hp('2.5%'),
  },
  reserveText: {
    color: COLOR.WHITE,
    fontSize: FONT_SIZE.F_17,
    fontFamily: FONT.EXTRA_LIGHT,
    marginBottom: hp('2%'),
  },
  reserveButton: {
    backgroundColor: '#776BF1',
    borderRadius: hp('1%'),
    padding: hp('1.7%'),
    paddingLeft: hp('8%'),
    paddingRight: hp('8%'),
  },
  reserveButtonText: {
    color: '#FFFFFF',
    fontSize: hp('2.8%'),
    fontWeight: 'bold',
  },

  //Book A Table

  bookATableContainer: {
    flexDirection: 'row',
    borderRadius: hp('2%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#1A3D3989',
    borderWidth: hp('0.1%'),
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
  },
  BookATableText: {
    color: '#10011C',
    fontWeight: 'bold',
    fontSize: wp('4%'),
    marginLeft: wp('3%'),
  },
  incDecContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: wp('-2.5%'),
  },

  dateContainer: {
    borderRadius: hp('2%'),
    borderColor: '#1A3D3989',

    borderWidth: hp('0.1%'),
    paddingLeft: hp('1.5%'),
    paddingRight: hp('1.5%'),
    padding: hp('1%'),
    marginTop: hp('1.5%'),
    marginBottom: hp('2%'),
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  dateLabel: {
    color: '#10011C',
    fontWeight: 'bold',
  },
  dateValue: {
    color: '#10011C',
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
  },
  dayOfWeek: {
    padding: hp('0.5%'),
    borderRadius: hp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayOfWeekText: {
    color: '#10011C',
    fontWeight: 'bold',
  },

  timeMainContainer: {
    backgroundColor: '#ffffff',
    borderRadius: hp('2%'),
    borderColor: '#1A3D3989',

    borderWidth: hp('0.1%'),
    paddingHorizontal: hp('1.5%'),
    paddingVertical: hp('1%'),
    marginTop: hp('1.5%'),
    marginBottom: hp('2%'),
  },
  timeTitle: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    color: '#10011C',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
  },
  timeSlot: {
    borderRadius: hp('1%'),
    paddingHorizontal: hp('1.5%'),
    paddingVertical: hp('1%'),
    marginHorizontal: hp('1%'),
    borderRadius: hp('1%'),
    borderColor: '#1A3D3989',

    borderWidth: hp('0.1%'),
  },
  timeSlotText: {
    color: '#10011C',
    fontSize: hp('2%'),
  },

  cancelConformContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp('7.5%'),
    paddingBottom: hp('2.5%'),
    flexDirection: 'row',
    marginTop: hp('18%'),
  },
  cancelButton: {
    borderRadius: hp('1%'),
    paddingVertical: hp('1.2%'),
    marginHorizontal: hp('1%'),
    borderRadius: hp('1%'),
    borderColor: '#1A3D3989',
    borderWidth: hp('0.1%'),
    paddingLeft: hp('4%'),
    paddingRight: hp('4%'),
  },
  conformButton: {
    backgroundColor: '#776BF1',
    borderRadius: hp('1%'),
    padding: hp('1.3%'),
    paddingLeft: hp('4%'),
    paddingRight: hp('4%'),
    marginLeft: hp('2.5%'),
  },

  cancelConformButtonText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },

  //Direction
  directionContainer: {
    flex: 1,
  },
  directionBackgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },

  directionIconContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: hp('1.5%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1.5%'),
    width: wp('90%'),
    height: hp('6%'),
    paddingLeft: hp('2%'),
  },
  directionIconText: {
    color: '#10011C',
    marginLeft: wp('2%'),
    paddingLeft: hp('1%'),
  },
  locationCardImagesContainer: {
    overflow: 'hidden',
    marginTop: hp('10%'),
    borderRadius: hp('4%'),
    width: wp('82%'),
    height: hp('20%'),
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{scale: 1}],
    margin: hp('2%'),
  },

  //BookedDetails
  bookingDetailsContainer: {
    backgroundColor: '#fff',
  },
  bookingDetailsTitleContainer: {
    borderColor: '#ccc',
    marginTop: hp('1%'),
  },
  bookingDetailsTitle: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#10011C',
  },

  bookingRequestContainer: {
    borderTopColor: '#1A3D3989',
    borderColor: '#FFFFFF',
    borderWidth: hp('0.1%'),
    paddingHorizontal: hp('1%'),
    marginTop: hp('2.8%'),
  },

  bookedRequestContainer: {
    marginTop: hp('2.8%'),
  },

  bookingDetailsTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookingDetailsLabelText: {
    color: '#10011C',
    fontSize: hp('2%'),
  },
  bookingDetailsText: {
    fontSize: hp('2%'),
  },
  bookingDetailsGuestsContainer: {
    flex: 1,
    marginRight: 20,
  },
  bookingDetailsIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },

  bookedTrackTextContainer: {
    marginLeft: hp('5.4%'),
  },
  bookedTrackText: {
    color: '#10011C',
  },
  restaurantDetailsText: {
    marginTop: hp('1%'),
    marginBottom: hp('1.5%'),
    color: '#10011C',
  },

  //Screens
  containerScreen: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: hp('2%'),
    justifyContent: 'center',
  },
  linkScreen: {
    backgroundColor: '#007AFF',
    padding: hp('2%'),
    marginBottom: hp('2%'),
    borderRadius: hp('1%'),
  },
  linkTextScreen: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: hp('2.2%'),
  },
});

export default Styles;
