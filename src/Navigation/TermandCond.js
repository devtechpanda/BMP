import React from 'react';
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
import {COLOR, FONT, FONT_SIZE} from '../config/Globles';
import AlertIcon from '../../src/assets/svg/AlertIcon.svg';
import {useNavigation} from '@react-navigation/native';

const TermandCond = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: hp('1.5%'),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack('');
          }}>
          <Image
            source={require('../../src/assets/images/LeftArrow.png')}
            style={{
              height: hp('5%'),
              width: wp('10%'),
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>
        <Text style={styles.detailHeaderTitle}>Terms and Conditions</Text>
        <AlertIcon height={hp('6%')} width={wp('14%')} />
      </View>
      <ScrollView
        contentContainerStyle={styles.paginationContainer}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp('2%'),
            marginBottom: hp('4%'),
          }}>
          <Text style={styles.detailTitle} adjustsFontSizeToFit={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            tristique dignissim neque, quis posuere felis. Fusce tincidunt, ex
            ac viverra sagittis, mauris orci porta arcu, id ultricies dolor
            dolor iaculis nibh. Nulla vitae elit purus. Donec turpis tellus,
            tempus ut fringilla vel, semper eu neque. Donec eros lectus, laoreet
            sit amet pulvinar ac, suscipit ut nibh. Vivamus eget tellus sed
            risus dignissim tempor. Duis vitae euismod neque. Maecenas luctus
            neque a venenatis dictum. Vivamus vel massa tincidunt, gravida quam
            eget, blandit nibh. Donec bibendum elementum lacus, sit amet varius
            eros fermentum ac. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus tristique dignissim neque, quis posuere
            felis. Fusce tincidunt, ex ac viverra sagittis, mauris orci porta
            arcu, id ultricies dolor dolor iaculis nibh. Nulla vitae elit purus.
            Donec turpis tellus, tempus ut fringilla vel, semper eu neque.
            {'\n\n'} Donec eros lectus, laoreet sit amet pulvinar ac, suscipit
            ut nibh. Vivamus eget tellus sed risus dignissim tempor. Duis vitae
            euismod neque. Maecenas luctus neque a venenatis dictum. Vivamus vel
            massa tincidunt, gravida quam eget, blandit nibh. Donec bibendum
            elementum lacus, sit amet varius eros fermentum ac. Nunc consectetur
            massa at efficitur pretium. {'\n\n'} Vestibulum ultrices sit amet
            sem sit amet suscipit. Fusce molestie in tortor nec bibendum.
            Integer venenatis a leo sit amet iaculis. Nulla in vehicula erat.
            Praesent vel diam euismod turpis malesuada eleifend ut sit amet
            enim. Curabitur sed condimentum mauris quis aliquam tellus.
            Vestibulum porttitor accumsan tellus, quis auctor nunc tincidunt
            non. Nullam faucibus sem eu nibh porta finibus vitae rhoncus arcu.
            Nulla id vestibulum augue.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TermandCond;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.ThemeColor,
    paddingHorizontal: hp('2.6%'),
  },
  detailHeaderTitle: {
    color: COLOR.WHITE,
    fontFamily: FONT.BOLD,
    textAlign: 'center',
    fontSize: FONT_SIZE.F_23,
  },
  detailTitle: {
    color: COLOR.WHITE,
    fontFamily: FONT.MEDIUM,
    textAlign: 'auto',
    fontSize: FONT_SIZE.F_19,
  },
});
