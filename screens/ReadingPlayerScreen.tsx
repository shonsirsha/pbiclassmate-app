import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TrackPlayer, {State, Track, TrackType} from 'react-native-track-player';
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
  const {title, detail, track} = route.params;
  const [currentlyPlaying, setCurrentlyPlaying] = useState<Track | null>();
  const [favourite, setFavourite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(
    // State.Playing && currentlyPlaying && currentlyPlaying.url === track.url,
    false,
  );

  useEffect(() => {
    const addToTrack = async () => {
      const currentlyPlayingTrack = await getCurrentlyPlaying();
      setCurrentlyPlaying(currentlyPlayingTrack);
    };
    addToTrack();
  }, [isPlaying]);

  useEffect(() => {
    // To set isPlaying
    const getIsPlaying = async () => {
      const playing = (await TrackPlayer.getState()) === State.Playing;
      const currentlyPlayingTrack = await getCurrentlyPlaying();
      //True when ANY audio is playing and the current audio URL
      // (from props)
      // is equal to the currently playing audio's URL
      setIsPlaying(currentlyPlayingTrack?.url === track.url && playing);
    };
    getIsPlaying();
  }, [track.url]);

  const getCurrentlyPlaying = async () => {
    const currentTrackId = await TrackPlayer.getCurrentTrack();
    if (currentTrackId !== null) {
      const currentlyPlayingTrack = await TrackPlayer.getTrack(currentTrackId);
      return currentlyPlayingTrack;
    }
    return null;
  };
  const handlePressFavBtn = () => {
    setFavourite(!favourite);
  };
  const handlePressClose = () => {
    navigation.goBack();
  };

  const handlePlay = async () => {
    //if theres a currently playing track
    //and it's not the same track from props
    //reset and play the track from props
    if (currentlyPlaying && currentlyPlaying.url !== track.url) {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: title,
        url: track.url,
        type: TrackType.Default,
        title,
        artwork: track.artwork,
      });
      await TrackPlayer.play();
      setIsPlaying(true);
    } else {
      if (!isPlaying) {
        //init / first play
        await TrackPlayer.add({
          id: title,
          url: track.url,
          type: TrackType.Default,
          title,
          artwork: track.artwork,
        });
        await TrackPlayer.play();
      } else {
        // pausing
        await TrackPlayer.pause();
      }
      setIsPlaying(!isPlaying);
    }
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

          <TouchableOpacity onPress={handlePlay}>
            <BodyText>{isPlaying ? 'Pause' : 'Play'}</BodyText>
          </TouchableOpacity>
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
