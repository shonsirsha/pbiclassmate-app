import React, {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

export default FavouriteButton;
