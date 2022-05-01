import {
  Image,
  Text,
  View
} from 'react-native';
import { IThank } from '../../types/types';
import { ProfileSmall } from '../Profile/Small';

import { style } from './style';

function Thanks({ userSender, userReceiver, message, photo, created_at }: IThank) {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.info}>
          <ProfileSmall 
            photo={userSender.photo}
          />
          <View style={style.names}>
            <Text style={style.nameSender}>{userSender.name}</Text>
            <Text style={style.nameReceiver}>para: {userReceiver.name}</Text>
          </View>
        </View>
        <Text style={style.postAge}>{created_at}</Text>
      </View>
      <View style={style.content}>
        <Text style={style.message}>{message}</Text>
        {
          photo ?
            <Image 
              source={{uri: photo}}
              style={style.photo}
            />
          :
            null
        }
      </View>
    </View>
  )
}

export { Thanks };