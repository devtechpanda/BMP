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
import {COLOR, FONT} from '../../config/Globles';
import AlertIcon from '../../assets/svg/AlertIcon.svg';
// ------------- calendre----------
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

const BookTimeandDate = ({navigation}) => {
  const moment = require('moment');
  const [timeData, setTimeData] = useState([
    {item: 1, time: '01:00'},
    {item: 2, time: '02:00'},
    {item: 3, time: '03:00'},
    {item: 4, time: '04:00'},
    {item: 5, time: '05:00'},
    {item: 6, time: '06:00'},
    {item: 7, time: '07:00'},
    {item: 8, time: '08:00'},
    {item: 9, time: '09:00'},
    {item: 10, time: '10:00'},
    {item: 11, time: '11:00'},
    {item: 12, time: '12:00'},
  ]);

  const datesWhitelist = [
    {
      start: moment(),
      end: moment().add(30, 'days'), // total 4 days enabled
    },
  ];

  const datesBlacklist = [moment().endOf('isoWeek').add(1, 'day')];
  const [selectedDate, setSelectedDate] = useState(moment());
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateSelect = date => {
    const activePageName = 2;
    setSelectedDate(date);
    // Perform any additional logic based on the selected date
  };

  const [count, setCount] = useState(0);
  const activePageName = 2;
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // ----------------- time select ---------
  const handletime = time => {
    setSelectedTime(time);
  };

  return (
    <View style={[Styles.container]}>
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
              marginLeft: hp('1%'),
              height: hp('5%'),
              width: wp('10%'),
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>
        <Text style={Styles.detailHeaderTitle}>Book a Table</Text>
        <AlertIcon height={hp('10%')} width={wp('13%')} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View
          style={[
            Styles.cardStyle,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: hp('3%'),
            },
          ]}>
          <Text style={Styles.HeaderTitle}>Guests</Text>
          <View style={Styles.Countcontainer}>
            <TouchableOpacity onPress={decrement}>
              <Text style={Styles.buttonText}>-</Text>
            </TouchableOpacity>
            <View style={Styles.button}>
              <Text style={Styles.counterText}>{count}</Text>
            </View>
            <TouchableOpacity onPress={increment}>
              <Text style={Styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ----------- Calender --------------- */}
        <View style={[Styles.cardStyle, {marginTop: hp('3%')}]}>
          <CalendarStrip
            selectedDate={selectedDate}
            onDateSelected={handleDateSelect}
            calendarAnimation={{type: 'sequence', duration: 30}}
            //   daySelectionAnimation={{
            //     type: 'border',
            //     duration: 200,
            //     borderWidth: 2,
            //     borderHighlightColor: 'orange',
            //   }}  // ----borderstyle seected item
            highlightDateContainerStyle={{
              backgroundColor: 'orange',
              padding: 2,
              borderRadius: 8,
              width: 37,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            style={{
              height: 100,
              alignSelf: 'center',
              width: wp('88%'),
              // backgroundColor: 'pink',
            }}
            calendarHeaderStyle={{color: 'black', fontSize: 18}} // month name
            calendarColor={'white'} //backgroundcolor
            dateNumberStyle={{color: 'black', fontSize: 14}} //current date
            dateNameStyle={{color: 'black', fontSize: 14, fontWeight: '500'}}
            highlightDateNumberStyle={{color: COLOR.Light_Voilet}} //selected date
            highlightDateNameStyle={{
              color: COLOR.WHITE,
              fontSize: 14,
              fontWeight: '500',
            }}
            disabledDateNameStyle={{color: 'black', fontSize: 16}}
            disabledDateNumberStyle={{color: COLOR.ThemeColor, fontSize: 16}}
            datesWhitelist={datesWhitelist}
            datesBlacklist={datesBlacklist}
            showDayName
            showDate
            iconContainer={{flex: 0.1}}
          />
        </View>

        <View style={[Styles.cardStyle, {marginTop: hp('3%')}]}>
          <Text style={Styles.HeaderTitle}>Time</Text>
          <FlatList
            data={timeData}
            numColumns={4}
            contentContainerStyle={{
              width: wp('90%'),
              margin: hp('1%'),
              justifyContent: 'space-between',
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: wp('1%'),
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    marginRight: hp('1.6%'),
                    marginVertical: hp('1%'),
                    width: wp('18%'),
                    alignItems: 'center',
                    backgroundColor:
                      selectedTime === item.time ? 'orange' : 'white',
                  }}
                  onPress={() => handletime(item.time)}>
                  <Text
                    style={{
                      color:
                        selectedTime === item.time ? COLOR.WHITE : COLOR.BLACK,
                      fontWeight: FONT.REGULAR,
                      textAlign: 'center',
                      fontSize: hp('2%'),
                    }}>
                    {item.time}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View
          style={{
            width: wp('85%'),
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'space-between',
            marginTop: hp('17%'),
            // backgroundColor: 'white',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail')}
            style={[
              Styles.Btnstyle,
              {
                backgroundColor: COLOR.WHITE,
                borderColor: COLOR.Purple,
                borderWidth: 1.5,
              },
            ]}>
            <Text style={[Styles.textbtn, {color: COLOR.Purple}]}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('BookTable')}
            style={[Styles.Btnstyle, {backgroundColor: COLOR.Purple}]}>
            <Text style={[Styles.textbtn, {color: COLOR.WHITE}]}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* <View>
        <BottomNavBar activePageName={activePageName} />
      </View> */}
    </View>
  );
};

export default BookTimeandDate;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.ThemeColor,
    paddingHorizontal: hp('2%'),
  },
  detailHeaderTitle: {
    color: COLOR.WHITE,
    fontWeight: FONT.BOLD,
    textAlign: 'center',
    fontSize: hp('2.4%'),
  },

  cardStyle: {
    backgroundColor: COLOR.WHITE,
    width: wp('90%'),
    borderRadius: 16,
    padding: hp('1.3%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  HeaderTitle: {
    color: COLOR.Black,
    fontWeight: FONT.EXTRA_BOLD,
    textAlign: 'left',
    marginLeft: wp('2.4%'),
    fontSize: hp('2.1%'),
  },
  Btnstyle: {
    width: wp('40%'),
    borderRadius: 14,
    padding: hp('1.5%'),
  },
  textbtn: {
    fontSize: hp('2.3%'),
    textAlign: 'center',
    fontWeight: FONT.BOLD,
  },
  Countcontainer: {
    width: wp('24%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9E00',
    borderRadius: 10,
    paddingVertical: wp('1%'),
  },
  button: {
    padding: 3,
    paddingHorizontal: 5,
    backgroundColor: COLOR.WHITE,
    borderRadius: 13,
    marginHorizontal: hp('2%'),
  },
  buttonText: {
    fontSize: hp('2.3%'),
    color: COLOR.Black,
    fontWeight: FONT.EXTRA_BOLD,
  },
  counterText: {
    fontSize: hp('2%'),
    color: COLOR.Black,
    fontWeight: FONT.EXTRA_BOLD,
  },
});
