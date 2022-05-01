import {
  View,
  Text
} from 'react-native'
import { Feather } from '@expo/vector-icons';
import { colors } from '../../Utils/theme';

import { style } from './style';

type Props = {
  label: string;
  subtitle?: string
  rightIcon?: string
} 

function Title({ label, subtitle, rightIcon = '' }: Props) {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.title}>{label}</Text>
        {
          subtitle ? <Text style={style.subtitle}>{subtitle}</Text> : null
        }
      </View>
      {
        rightIcon !== '' ? 
          /*@ts-ignore*/
          <Feather
            /*@ts-ignore*/
            name={`${rightIcon}`}
            size={24}
            color={colors.darkPurple}
          />
          :
          null
      }
    </View>
  )
}

export { Title };