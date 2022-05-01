import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export const style = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: StatusBar.currentHeight + 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
})