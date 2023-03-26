import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../App';
import BodyText from '../components/Text/BodyText';
import HeadingText from '../components/Text/HeadingText';
import VocabSlider from '../components/VocabSlider/VocabSlider';
import {MOCKED_SAVED_VOCABS} from './HomeScreen';

const FavouriteButton = ({
  favourite,
  onPress,
}: {
  favourite: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon size={24} name={favourite ? 'star' : 'star-o'} />
    </TouchableOpacity>
  );
};
const ReadingPlayerScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'ReadingPlayerScreen'>) => {
  const {title, detail} = route.params;
  const [favourite, setFavourite] = useState(false);
  const handlePressFavBtn = () => {
    setFavourite(!favourite);
  };
  const handlePressClose = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View style={styles.outerContainer}>
        <View style={styles.view}>
          <FavouriteButton favourite={favourite} onPress={handlePressFavBtn} />
          <TouchableOpacity onPress={handlePressClose}>
            <BodyText>Close</BodyText>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <HeadingText>{title}</HeadingText>
          <BodyText style={styles.detailText}>{detail}</BodyText>
        </View>
      </View>
      <VocabSlider
        title="Relevant Vocabularies"
        vocabs={MOCKED_SAVED_VOCABS}
        onPressGoToSavedVocab={() => {}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    padding: 24,
    paddingTop: 0,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginTop: 32,
  },
  detailText: {
    marginTop: 8,
    color: '#A3A3A3',
  },
});

export default ReadingPlayerScreen;
