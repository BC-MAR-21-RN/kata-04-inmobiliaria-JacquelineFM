import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../assets/styles/styles';

const ListBBSF = ({feature, image, ft}) => {
  return (
    <View style={styles.containerBBSF}>
      <Image style={styles.iconsBBSF} source={image} />
      <Text style={styles.inTitle}>{feature}</Text>
      {ft && <Text style={styles.subSqFtg}>2</Text>}
    </View>
  );
};

export default ListBBSF;
