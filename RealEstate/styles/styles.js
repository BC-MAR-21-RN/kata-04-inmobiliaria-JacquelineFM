import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
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
  },
  score: {
    backgroundColor: '#fbecb9',
    marginBottom: 10,
    width: 55,
    alignSelf: 'center',
    borderRadius: 5,
  },
  listView: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  listData: {
    flexDirection: 'column',
  },
  infoAddress: {
    flexDirection: 'row',
  },
  infoBBSF: {
    flexDirection: 'row',
  },
  infoPL: {
    flexDirection: 'row',
  },
});
