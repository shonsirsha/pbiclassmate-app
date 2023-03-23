import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../App';
import Header from '../components/Header/Header';

const SavedReadingsScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'SavedReadingsScreen'>) => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Header title="Saved Readings" withBackButton navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 24,
    paddingTop: 0,
  },
});

export default SavedReadingsScreen;
