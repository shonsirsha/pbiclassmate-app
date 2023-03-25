import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../App';
import BodyText from '../components/Text/BodyText';

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
}: NativeStackScreenProps<RootStackParamList, 'ReadingPlayerScreen'>) => {
  const [favourite, setFavourite] = useState(false);
  const handlePressFavBtn = () => {
    setFavourite(!favourite);
  };
  const handlePressClose = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <FavouriteButton favourite={favourite} onPress={handlePressFavBtn} />
        <TouchableOpacity onPress={handlePressClose}>
          <BodyText>Close</BodyText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 24,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ReadingPlayerScreen;
