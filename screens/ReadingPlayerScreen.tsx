import React, {useContext, useEffect, useState} from 'react';
import Slider from '@react-native-community/slider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
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
import {secondsToHHMMSS} from '../utils';
import {MOCKED_SAVED_VOCABS} from './HomeScreen';
import FavouriteButton from '../components/Buttons/FavouriteButton.';
import {AsyncStorageContext} from '../context/AsyncStorageContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const ReadingPlayerScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'ReadingPlayerScreen'>) => {
  const {reading} = route.params;
  const {title, detail, track} = reading;
  const [currentlyPlaying, setCurrentlyPlaying] = useState<Track | null>();
  const [favorite, setFavorite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const progress = useProgress(200);
  const {saveReading, allSavedReadings} = useContext(AsyncStorageContext);

  const currentlyPlayingIsCurrentlyOpened = currentlyPlaying
    ? currentlyPlaying.url === track.url
    : false;

  useEffect(() => {
    if (allSavedReadings) {
      const isSaved = allSavedReadings.findIndex(r => r.id === reading.id) >= 0;
      setFavorite(isSaved);
    } else {
      setFavorite(false);
    }
  }, [allSavedReadings, reading]);

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
  const handlePressFavBtn = async () => {
    setFavorite(!favorite);
    saveReading(route.params.reading, !favorite);

    // await AsyncStorage.removeItem('readings');
    // await AsyncStorage.removeItem('vocab');
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
          <FavouriteButton favorite={favorite} onPress={handlePressFavBtn} />
          <TouchableOpacity onPress={handlePressClose}>
            <BodyText>Close</BodyText>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Image
            style={styles.artwork}
            source={{
              uri: track.artwork as string,
            }}
          />
          <HeadingText>{title}</HeadingText>
          <BodyText style={styles.detailText}>{detail}</BodyText>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={track.duration}
            minimumTrackTintColor={COLORS.primary}
            maximumTrackTintColor="#52527a"
            thumbTintColor={COLORS.primary}
            value={currentlyPlayingIsCurrentlyOpened ? progress.position : 0}
            onSlidingComplete={value => {
              TrackPlayer.seekTo(value);
            }}
          />
          <View style={styles.durationsContainer}>
            <BodyText>
              {currentlyPlayingIsCurrentlyOpened
                ? secondsToHHMMSS(Math.floor(progress.position))
                : '00:00'}
              {}
            </BodyText>
            <BodyText>
              {currentlyPlayingIsCurrentlyOpened
                ? track.duration
                  ? secondsToHHMMSS(
                      Math.floor(track.duration - progress.position),
                    )
                  : 0
                : secondsToHHMMSS(track.duration ? track.duration : 0)}
            </BodyText>
          </View>

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
  artwork: {
    width: 200,
    height: 200,
    borderRadius: 16,
    marginBottom: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
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
    marginBottom: 4,
  },
  durationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ReadingPlayerScreen;
