import React, {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavouriteButton = ({
  favorite,
  onPress,
}: {
  favorite: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon size={24} name={favorite ? 'star' : 'star-o'} />
    </TouchableOpacity>
  );
};

export default FavouriteButton;
