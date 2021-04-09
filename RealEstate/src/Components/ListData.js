import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../assets/styles/styles';
import ListBBSF from './ListBBSF';

const ListData = ({item}) => {
  return (
    <View style={styles.listData}>
      <Text style={styles.nameEstate}>{item.name}</Text>
      <View style={styles.infoAddress}>
        <Image
          style={styles.logoLocation}
          source={require('../../assets/icons/pin.png')}
        />
        <Text style={styles.address}>{item.address}</Text>
      </View>
      <View style={styles.infoBBSF}>
        <ListBBSF
          feature={item.bedrooms}
          image={require('../../assets/icons/bed.png')}
        />
        <ListBBSF
          feature={item.bathrooms}
          image={require('../../assets/icons/bathtub.png')}
        />
        <ListBBSF
          feature={item.squareFootage + ' ft'}
          image={require('../../assets/icons/blueprint.png')}
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
