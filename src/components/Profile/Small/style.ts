import { StyleSheet } from "react-native";
import { fonts, colors } from "../../../Utils/theme";

export const style = StyleSheet.create({
  profile: {
    flexDirection: 'row'
  },
  profilePicWrapper: {
    width: 30,
    height: 30,
  },
  profilePicture: {
    height: '100%',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFF'
  }
})