import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../assets/styles/styles';

const ListBBSF = ({feature, image, styleFtr, ft}) => {
  return (
    <View style={styleFtr[0]}>
      <Image style={styleFtr[1]} source={image} />
      <Text style={styleFtr[2]}>{feature}</Text>
      {ft && <Text style={styles.subSqFtg}>2</Text>}
    </View>
  );
};

export default ListBBSF;
