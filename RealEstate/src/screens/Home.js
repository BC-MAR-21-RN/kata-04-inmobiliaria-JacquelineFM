import React from 'react';
import {
  FlatList,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import realEstate from '../../data/realEstate.json';
import styles from '../../assets/styles/styles';

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
                <Image
                  style={styles.starIcon}
                  source={require('../../assets/icons/star.png')}
                />
                <Text style={styles.txtScore}>{item.score}</Text>
              </View>
            </ImageBackground>
          </View>
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
              <View style={styles.containerBBSF}>
                <Image
                  style={styles.iconsBBSF}
                  source={require('../../assets/icons/bed.png')}
                />
                <Text style={styles.inTitle}>{item.bedrooms}</Text>
              </View>
              <View style={styles.containerBBSF}>
                <Image
                  style={styles.iconsBBSF}
                  source={require('../../assets/icons/bathtub.png')}
                />
                <Text style={styles.inTitle}>{item.bathrooms}</Text>
              </View>
              <View style={styles.containerBBSF}>
                <Image
                  style={styles.iconsBBSF}
                  source={require('../../assets/icons/blueprint.png')}
                />
                <Text style={styles.inTitle}>{item.squareFootage}ft</Text>
                <Text style={styles.subSqFtg}>2</Text>
              </View>
            </View>
            <View style={styles.infoPL}>
              <Text style={styles.price}>${item.price}/m</Text>
              <Image
                style={styles.iconHeart}
                source={require('../../assets/icons/heart.png')}
              />
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
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}