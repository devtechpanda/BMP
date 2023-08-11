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

const BookTable = ({navigation}) => {
  const [Status, setStatus] = useState('Booked');
  const [itemId, setItemId] = useState('');

  // -------------- tABLE SELECTED---------
  const handleTableAction = newStatus => {
    setStatus(newStatus);
    // setItemId(ItemId);
  };
  console.log('Status=======', Status);
  // console.log('itemId=======', itemId);

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
              marginLeft: hp('1%'),
              height: hp('5%'),
              width: wp('10%'),
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>
        <Text style={styles.detailHeaderTitle}>Book a Table</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <AlertIcon height={hp('10%')} width={wp('13%')} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.paginationContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => handleTableAction(Status, 'Table3')}
            style={styles.tableItem}>
            <Image
              source={
                Status === 'Booked'
                  ? require('../../assets/images/G2.png')
                  : Status === 'Free'
                  ? require('../../assets/images/W2.png')
                  : Status === 'Pending'
                  ? require('../../assets/images/P2.png')
                  : null
              }
              style={styles.cardImg}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleTableAction(Status, 'Table4')}
            style={styles.tableItem}>
            <Image
              source={
                Status === 'Booked'
                  ? require('../../assets/images/GR2.png')
                  : Status === 'Free'
                  ? require('../../assets/images/WR2.png')
                  : Status === 'Pending'
                  ? require('../../assets/images/PR2.png')
                  : null
              }
              style={styles.cardImg}
            />
          </TouchableOpacity>

          {/* ----------- 3--------- */}
          <TouchableOpacity
            onPress={() => handleTableAction(Status, 'Table5')}
            style={styles.tableItem}>
            <Image
              source={
                Status === 'Booked'
                  ? require('../../assets/images/G3.png')
                  : Status === 'Free'
                  ? require('../../assets/images/W3.png')
                  : Status === 'Pending'
                  ? require('../../assets/images/P3.png')
                  : null
              }
              style={styles.cardImg}
            />
          </TouchableOpacity>
        </View>

        {/* ----------- 4--------- */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => handleTableAction(Status, 'Table5')}
            style={styles.tableItem}>
            <Image
              source={
                Status === 'Booked'
                  ? require('../../assets/images/G4.png')
                  : Status === 'Free'
                  ? require('../../assets/images/W4.png')
                  : Status === 'Pending'
                  ? require('../../assets/images/P4.png')
                  : null
              }
              style={styles.cardImg}
            />
          </TouchableOpacity>

          {/* ----------- 5--------- */}
          <TouchableOpacity
            onPress={() => handleTableAction(Status, 'Table5')}
            style={styles.tableItem}>
            <Image
              source={
                Status === 'Booked'
                  ? require('../../assets/images/GR5.png')
                  : Status === 'Free'
                  ? require('../../assets/images/W5.png')
                  : Status === 'Pending'
                  ? require('../../assets/images/PR5.png')
                  : null
              }
              style={styles.cardImg}
            />
          </TouchableOpacity>

          {/* -----6 --------- */}
          <TouchableOpacity
            onPress={() => handleTableAction(Status, 'Table5')}
            style={styles.tableItem}>
            <Image
              source={
                Status === 'Booked'
                  ? require('../../assets/images/GR6.png')
                  : Status === 'Free'
                  ? require('../../assets/images/WR6.png')
                  : Status === 'Pending'
                  ? require('../../assets/images/PR6.png')
                  : null
              }
              style={styles.cardImg}
            />
          </TouchableOpacity>
        </View>

        {/* -----8 --------- */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => handleTableAction(Status, 'Table5')}
            style={styles.tableItem}>
            <Image
              source={
                Status === 'Booked'
                  ? require('../../assets/images/GR8.png')
                  : Status === 'Free'
                  ? require('../../assets/images/WR8.png')
                  : Status === 'Pending'
                  ? require('../../assets/images/PR8.png')
                  : null
              }
              style={styles.cardImg}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ----------- Button ------------ */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Payment')}
        style={[styles.ViewBorder]}>
        <Text style={styles.notificationItemName}>Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookTable;
const styles = StyleSheet.create({
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
  // ---------- header end-----------
  cardImg: {
    width: wp('19%'),
    height: hp('19%'),
    resizeMode: 'contain',
    // tintColor: 'white',
  },
  imagestable: {
    width: wp('20%'),
    height: hp('20%'),
    resizeMode: 'cover',
    // tintColor: 'white',
  },
  ViewBorder: {
    width: wp('85%'),
    borderColor: COLOR.GRAY,
    borderRadius: hp('2%'),
    alignSelf: 'center',
    alignItems: 'center',
    padding: hp('1.7%'),
    paddingHorizontal: hp('1.5%'),
    backgroundColor: '#776BF1',
    position: 'absolute',
    bottom: 3,
    marginVertical: hp('3%'),
  },
  notificationItemName: {
    fontSize: FONT_SIZE.F_23,
    color: COLOR.WHITE,
    fontFamily: FONT.SEMI_BOLD,
  },
  tableItem: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: wp('28%'),
    marginRight: hp('2%'),
    marginBottom: hp('1.5%'),
  },
});
