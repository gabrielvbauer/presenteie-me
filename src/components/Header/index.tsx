import { 
  View,
} from "react-native";
import { Feather as FIcon } from '@expo/vector-icons'
import { style } from './style';

import { colors } from "../../Utils/theme";
import { Profile } from "../Profile/Normal";

const image = 'https://instagram.fgel2-1.fna.fbcdn.net/v/t51.2885-15/208951688_557672558564519_2949407592222031723_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fgel2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=X-jF05xtqakAX8LjjUj&edm=AABBvjUBAAAA&ccb=7-4&ig_cache_key=MjYwNTYxNjc3OTU2OTI0MDcwNw%3D%3D.2-ccb7-4&oh=00_AT-UnmGX-RpTvvnAb7xNHy8ukVvN7nvxoRufo0bptf0W5A&oe=62756ED3&_nc_sid=83d603'

function Header() {
  return (
    <View style={style.container}>
      <Profile 
        name="Martina"
        photo={image}
      />
      <View>
        { /*@ts-ignore*/ }
        <FIcon 
          name="bell"
          size={20}
          color={colors.purple}
        />
      </View>
    </View>
  )
}

export { Header };