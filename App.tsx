import { AppLoading } from './src/components/AppLoading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import Routes from './src/Routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    <Routes />
  );
}