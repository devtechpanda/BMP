// import React, {useRef, useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   FlatList,
// } from 'react-native';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// import {COLOR, FONT, FONT_SIZE} from '../../config/Globles';
// import AlertIcon from '../../assets/svg/AlertIcon.svg';

// const Language = ({navigation}) => {
//   const LangData = [
//     {
//       id: 1,
//       title: 'English',
//       image: require('../../assets/images/English.png'),
//     },
//     {
//       id: 2,
//       title: 'Deutsch',
//       image: require('../../assets/images/Deutsh.png'),
//     },
//     {
//       id: 3,
//       title: 'Spanish',
//       image: require('../../assets/images/Spanish.png'),
//     },
//     {id: 4, title: 'French', image: require('../../assets/images/French.png')},
//     {
//       id: 5,
//       title: 'Portuguese',
//       image: require('../../assets/images/Portuguese.png'),
//     },
//     {
//       id: 6,
//       title: 'Bahasa Indonesia',
//       image: require('../../assets/images/Indonesia.png'),
//     },
//     {
//       id: 7,
//       title: 'Russian',
//       image: require('../../assets/images/Russian.png'),
//     },
//     {
//       id: 8,
//       title: 'Italian',
//       image: require('../../assets/images/Italian.png'),
//     },
//   ];

//   return (
//     <View style={[styles.container]}>
//       <View style={styles.headeView}>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.goBack('');
//           }}>
//           <Image
//             source={require('../../assets/images/LeftArrow.png')}
//             style={{
//               marginLeft: hp('1%'),
//               height: hp('5%'),
//               width: wp('10%'),
//               resizeMode: 'contain',
//             }}></Image>
//         </TouchableOpacity>
//         <Text style={styles.detailHeaderTitle}>Language</Text>
//         <AlertIcon height={hp('10%')} width={wp('13%')} />
//       </View>

//       <FlatList
//         data={LangData}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{marginBottom: hp('7%')}}
//         renderItem={({item}) => (
//           <TouchableOpacity
//             // onPress={() => navigation.navigate('Language')}
//             style={[styles.ViewBorder, {marginTop: hp('3%')}]}>
//             <Image source={item.image} style={styles.cardImg1} />
//             <Text style={[styles.TextInputtitle, {width: wp('55%')}]}>
//               {item.title}
//             </Text>
//             <Image
//               source={require('../../assets/images/RightArrow.png')}
//               style={[styles.cardImg, {tintColor: 'black'}]}
//             />
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default Language;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLOR.ThemeColor,
//     paddingHorizontal: hp('2%'),
//   },
//   headeView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   detailHeaderTitle: {
//     color: COLOR.WHITE,
//     fontWeight: FONT.BOLD,
//     textAlign: 'center',
//     fontSize: hp('2.4%'),
//   },
//   // ---------- header end-----------

//   //   ---------- Prfile text --------

//   TextInputtitle: {
//     fontSize: FONT_SIZE.F_22,
//     fontWeight: FONT.BOLD,
//     color: COLOR.Black,
//   },

//   ViewBorder: {
//     width: wp('85%'),
//     borderColor: COLOR.GRAY,
//     borderRadius: hp('1.5%'),
//     flexDirection: 'row',
//     alignSelf: 'center',
//     alignItems: 'center',
//     // justifyContent: 'space-between',
//     backgroundColor: COLOR.WHITE,
//   },
//   cardImg1: {
//     width: wp('6%'),
//     height: hp('6%'),
//     marginHorizontal: hp('2%'),
//     resizeMode: 'contain',
//   },
//   cardImg: {
//     width: wp('4%'),
//     height: hp('4%'),
//     marginHorizontal: hp('2%'),
//     resizeMode: 'contain',
//   },
// });
import {View, Text} from 'react-native';
import React from 'react';

const Language = () => {
  return (
    <View>
      <Text>Language</Text>
    </View>
  );
};

export default Language;
