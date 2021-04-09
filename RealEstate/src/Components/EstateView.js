import React from 'react';
import {View, ImageBackground} from 'react-native';
import styles from '../../assets/styles/styles';
import ListData from './ListData';
import ListBBSF from './ListBBSF';

const EstateView = ({item}) => {
  const stylesScore = [styles.score, styles.starIcon, styles.txtScore];
  return (
    <View style={styles.listView}>
      <ImageBackground
        source={{uri: item.photo}}
        style={styles.image}
        imageStyle={styles.imageBorder}>
        <ListBBSF
          feature={item.score}
          image={require('../../assets/icons/star.png')}
          styleFtr={stylesScore}
        />
      </ImageBackground>
      <ListData item={item} />
    </View>
  );
};

export default EstateView;
