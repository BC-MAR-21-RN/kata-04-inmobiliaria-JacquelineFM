import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../assets/styles/styles';
import ListBBSF from './ListBBSF';

const ListData = ({item}) => {
  const stylesBBSF = [styles.containerBBSF, styles.iconsBBSF, styles.inTitle];
  const stylesAddr = [styles.infoAddress, styles.logoLocation, styles.address];
  return (
    <View style={styles.listData}>
      <Text style={styles.nameEstate}>{item.name}</Text>
      <ListBBSF
        feature={item.address}
        image={require('../../assets/icons/pin.png')}
        styleFtr={stylesAddr}
      />
      <View style={styles.infoBBSF}>
        <ListBBSF
          feature={item.bedrooms}
          image={require('../../assets/icons/bed.png')}
          styleFtr={stylesBBSF}
        />
        <ListBBSF
          feature={item.bathrooms}
          image={require('../../assets/icons/bathtub.png')}
          styleFtr={stylesBBSF}
        />
        <ListBBSF
          feature={item.squareFootage + ' ft'}
          image={require('../../assets/icons/blueprint.png')}
          styleFtr={stylesBBSF}
          ft={true}
        />
      </View>
      <View style={styles.infoPL}>
        <Text style={styles.price}>${item.price}/m</Text>
        <Image
          style={styles.iconHeart}
          source={require('../../assets/icons/heart.png')}
        />
      </View>
    </View>
  );
};

export default ListData;
