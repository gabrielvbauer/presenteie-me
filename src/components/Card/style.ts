import { StyleSheet } from "react-native";
import { fonts } from "../../Utils/theme";

const style = StyleSheet.create({
  container: {
    width: 147,
    height: 187,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 15,
    justifyContent: 'space-between'
  },
  gradient: {
    width: 147,
    height: 187 + 5,
    position: 'absolute',
    borderRadius: 8,
  },
  text: {
    color: '#FFF',
    fontFamily: fonts.medium,
    fontSize: 12
  }
})

export { style };