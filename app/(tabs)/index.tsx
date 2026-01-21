import { StyleSheet, View } from "react-native";
export default function Index() {
  return <View style={styles.container}></View>;
}

// CREATE STYLE COMPONENT
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    textAlignVertical: "center",
    gap: 20,
  },
  content: {
    fontSize: 52,
    color: "white",
  },
});
