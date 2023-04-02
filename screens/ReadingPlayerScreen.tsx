import Slider from '@react-native-community/slider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TrackPlayer, {
  RepeatMode,
  State,
  Track,
  TrackType,
  useProgress,
} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../App';
import BodyText from '../components/Text/BodyText';
import HeadingText from '../components/Text/HeadingText';
import VocabSlider from '../components/VocabSlider/VocabSlider';
import {COLORS} from '../constants/COLORS';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const progress = useProgress(250);

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

  useEffect(() => {
    if (track.duration) {
      if (progress.position > track.duration) {
        setIsPlaying(false);
      }
    }
  }, [progress.position, track]);

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
      await TrackPlayer.setRepeatMode(RepeatMode.Off);
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
        await TrackPlayer.setRepeatMode(RepeatMode.Off);
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
          <BodyText style={styles.detailText}>
            {detail} {progress.position}
          </BodyText>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={track.duration}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor="#52527a"
            thumbTintColor={COLORS.primary}
            value={progress.position}
            onSlidingComplete={value => {
              TrackPlayer.seekTo(value);
            }}
            onValueChange={e => console.warn(e)}
          />
          <TouchableOpacity style={styles.playButton} onPress={handlePlay}>
            <Icon
              name={isPlaying ? 'pause' : 'play'}
              size={32}
              style={styles.playButtonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <VocabSlider
        title="Relevant Vocabularies"
        vocabs={MOCKED_SAVED_VOCABS}
        onPressGoToSavedVocab={() => {}}
        showSavedVocabLink={false}
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
  playButton: {
    backgroundColor: COLORS.primary,
    width: 84,
    height: 84,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  playButtonIcon: {
    color: '#fff',
  },
  slider: {
    width: '100%',
    height: 32,
    marginVertical: 32,
    marginBottom: 16,
  },
});

export default ReadingPlayerScreen;
