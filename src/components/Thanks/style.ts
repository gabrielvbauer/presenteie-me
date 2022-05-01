import { StyleSheet } from "react-native";
import { colors, fonts } from "../../Utils/theme";

const style = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.lightGrey
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  names: {
    paddingLeft: 10
  },
  nameSender: {
    fontSize: 12,
    color: colors.purple,
    fontFamily: fonts.medium,
    lineHeight: 12
  },
  nameReceiver: {
    fontSize: 10,
    color: colors.darkPurple,
    fontFamily: fonts.medium,
    lineHeight: 10
  },
  postAge: {
    fontSize: 8,
    fontFamily: fonts.regular,
    color: colors.grey
  },
  content: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: colors.lighterGrey
  },
  message: {
    fontSize: 10,
    color: colors.darkPurple,
    fontFamily: fonts.regular,
    lineHeight: 14,
  },
  photo: {
    height: 400,
    borderRadius: 2,
    marginTop: 18
  }
})

export { style };