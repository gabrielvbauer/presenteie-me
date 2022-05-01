import { 
  View,
  Text,
  Image
} from 'react-native'
import { IUser } from '../../../types/types';

import { style } from './style';

function Profile({ name, photo }: IUser) {
  return (
    <View style={style.profile}>
      <View style={style.profilePicWrapper}>
        <Image source={{uri: photo}} style={style.profilePicture}/>
      </View>
      <View style={style.greetingsName}>
        <Text style={style.greetings}>Olá</Text>
        <Text style={style.name}>{name}</Text>
      </View>
    </View>
  )
}

export { Profile };