import { StyleSheet } from "react-native";
import { colors, fonts } from "../../Utils/theme";

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 18
  },
  title: {
    fontSize: 18,
    color: colors.darkPurple,
    fontFamily: fonts.medium,
    includeFontPadding: false
  },
  subtitle: {
    fontSize: 12,
    fontFamily: fonts.medium,
    color: colors.darkPurple
  }
})

export { style };