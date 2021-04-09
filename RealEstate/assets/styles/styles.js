import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    backgroundColor: 'white',
  },
  listView: {
    flexDirection: 'row',
    marginBottom: 25,
    backgroundColor: '#F5FDFF',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  image: {
    justifyContent: 'flex-end',
    height: 110,
    width: 110,
  },
  imageBorder: {
    borderRadius: 10,
  },
  score: {
    backgroundColor: '#FBEDB7',
    marginBottom: 7,
    width: 48,
    height: 24,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  starIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
    alignSelf: 'center',
  },
  txtScore: {
    color: '#7A6229',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  listData: {
    flexDirection: 'column',
    marginLeft: 20,
    justifyContent: 'space-between',
    width: 195,
  },
  nameEstate: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  infoAddress: {
    flexDirection: 'row',
  },
  logoLocation: {
    width: 15,
    height: 18,
  },
  address: {
    marginLeft: 8,
    color: '#737373',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  infoBBSF: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerBBSF: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  iconsBBSF: {
    width: 21,
    height: 15.6,
    alignSelf: 'center',
  },
  inTitle: {
    marginLeft: 8,
    alignSelf: 'center',
    color: '#2D2F35',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  subSqFtg: {
    lineHeight: 14,
    fontWeight: 'bold',
  },
  infoPL: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 17,
    color: '#151525',
    fontFamily: 'Poppins-SemiBold',
  },
  iconHeart: {
    width: 27,
    height: 27,
  },
});
