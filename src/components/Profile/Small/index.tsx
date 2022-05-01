import { 
  View,
  Text,
  Image
} from 'react-native'
import { IUser } from '../../../types/types';

import { style } from './style';

function ProfileSmall({ photo }: IUser) {
  return (
    <View style={style.profile}>
      <View style={style.profilePicWrapper}>
        <Image source={{uri: photo}} style={style.profilePicture}/>
      </View>
    </View>
  )
}

export { ProfileSmall };