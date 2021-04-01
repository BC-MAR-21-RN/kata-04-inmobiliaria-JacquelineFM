import React from 'react';
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import realEstate from '../data/realEstate.json';
import styles from '../styles/styles';

export default function HomeScreen() {
  const estateView = ({item}) => {
    return (
      <View>
        <View style={styles.listView}>
          <View>
            <ImageBackground
              source={{uri: item.photo}}
              style={styles.image}
              imageStyle={{borderRadius: 10}}>
              <View style={styles.score}>
                <Text style={styles.text}>{item.score}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.listData}>
            <Text style={styles.item}>{item.name}</Text>
            <View style={styles.infoAddress}>
              <Text>{item.address}</Text>
            </View>
            <View style={styles.infoBBSF}>
              <Text>{item.bedrooms}</Text>
              <Text>{item.bathrooms}</Text>
              <Text>{item.squareFootage}</Text>
            </View>
            <View style={styles.infoPL}>
              <Text>{item.price}</Text>
              <Text>{item.like}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={realEstate}
          renderItem={estateView}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
}
