import { LinearGradient } from 'expo-linear-gradient';
import {
  ImageBackground,
  Text,
  View,
} from 'react-native'
import { IProduct, IUser } from '../../types/types';
import { ProfileSmall } from '../Profile/Small';

import { style } from './style';

type Props = {
  user?: IUser;
  product: IProduct;
  showUser?: boolean
}

function Card({ user, product, showUser = false }: Props) {
  return (
    <View style={{
      paddingBottom: 5
    }}>
      { /*@ts-ignore*/ }
      <ImageBackground 
        source={{uri: product.image}}
        style={style.container}
        imageStyle={{borderRadius: 8}}
      >
        {/*@ts-ignore*/}
        <LinearGradient 
          colors={['transparent', '#000000']}
          style={style.gradient}
        />
        {
          showUser ?
            <ProfileSmall 
              photo={user.photo}
            />
            :
            <View />
        }
        <Text style={style.text}>{product.name}</Text>
      </ImageBackground>

    </View>
  )
}

export { Card };