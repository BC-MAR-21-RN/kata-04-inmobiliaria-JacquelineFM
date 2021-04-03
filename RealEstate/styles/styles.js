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
  nameEstate: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    justifyContent: 'flex-end',
    height: 110,
    width: 110,
  },
  text: {
    color: '#8c7440',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  score: {
    backgroundColor: '#fbecb9',
    marginBottom: 7,
    width: 48,
    height: 24,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  listView: {
    flexDirection: 'row',
    marginBottom: 25,
    backgroundColor: '#f5fdff',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  listData: {
    flexDirection: 'column',
    marginLeft: 20,
    justifyContent: 'space-evenly',
    width: 180,
  },
  infoAddress: {
    flexDirection: 'row',
  },
  infoBBSF: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerBBSF: {
    flexDirection: 'row',
  },
  infoPL: {
    flexDirection: 'row',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    marginLeft: 8,
    color: '#7c7c7c',
  },
  tinyLogo: {
    width: 21,
    height: 21,
  },
  inTitle: {
    marginLeft: 9,
    fontWeight: 'bold',
  },
  starIcon:{
    width: 10,
    height: 10,
    marginRight: 5,
    alignSelf: 'center',
  },
});
