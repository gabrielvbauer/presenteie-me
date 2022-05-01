import { StyleSheet } from "react-native";
import { fonts, colors } from "../../../Utils/theme";

export const style = StyleSheet.create({
  profile: {
    flexDirection: 'row'
  },
  profilePicWrapper: {
    width: 45,
    height: 45,
  },
  profilePicture: {
    height: '100%',
    borderRadius: 50
  },
  greetingsName: {
    paddingLeft: 10,
    justifyContent: 'center'
  },
  greetings: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.purple,
    marginBottom: -5
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.darkPurple,
    includeFontPadding: false,
  }
})