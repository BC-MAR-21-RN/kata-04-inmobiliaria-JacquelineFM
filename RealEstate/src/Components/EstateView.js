import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from '../../assets/styles/styles';
import ListData from './ListData';

const EstateView = ({item}) => {
  return (
    <View style={styles.listView}>
      <ImageBackground
        source={{uri: item.photo}}
        style={styles.image}
        imageStyle={{borderRadius: 10}}>
        <View style={styles.score}>
          <Image
            style={styles.starIcon}
            source={require('../../assets/icons/star.png')}
          />
          <Text style={styles.txtScore}>{item.score}</Text>
        </View>
      </ImageBackground>
      <ListData item={item} />
    </View>
  );
};

export default EstateView;
