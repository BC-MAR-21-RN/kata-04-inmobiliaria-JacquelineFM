import React from 'react';
import {FlatList, View, SafeAreaView} from 'react-native';
import realEstate from '../../data/realEstate.json';
import styles from '../../assets/styles/styles';
import EstateView from '../Components/EstateView';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={realEstate}
          renderItem={({item}) => <EstateView item={item} />}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
