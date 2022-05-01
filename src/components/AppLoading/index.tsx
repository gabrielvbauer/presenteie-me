import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../Utils/theme';

function AppLoading() {
  return (
    <View style={{
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.darkPurple
    }}>
      <ActivityIndicator
        size={50}
        color={'#FFF'}
      />
      <StatusBar 
        translucent={true}
        style={'light'}
        animated={true}
      />
    </View>
  )
}

export { AppLoading };