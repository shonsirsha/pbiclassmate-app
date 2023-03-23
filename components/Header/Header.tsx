import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeadingText from '../Text/HeadingText';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
type TProps = {
  title: string;
  withBackButton: boolean;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'SavedReadingsScreen',
    undefined
  >;
};

const Header = ({title, withBackButton, navigation}: TProps) => {
  return (
    <View>
      {withBackButton ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backContainer}>
            <Icon style={styles.backIcon} name="angle-left" />
            <Text style={styles.backText}>Back</Text>
          </View>
        </TouchableOpacity>
      ) : null}
      <HeadingText style={styles.header}>{title}</HeadingText>
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    fontSize: 24,
    marginRight: 6,
  },
  backContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 17,
  },
  header: {
    marginTop: 16,
  },
});

export default Header;
