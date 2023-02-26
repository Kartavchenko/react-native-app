import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  backdrop: {
    top: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  container: {
    marginHorizontal: 20,
    justifyContent: "flex-end",
  },
  textTitle: {
    fontSize: 34,
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    border: 1,
    borderRadius: 8,
    color: "black",
    backgroundColor: "#F6F6F6",
    height: 50,
    marginTop: 16,
  },
  registationBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    marginTop: 43,
  },
  textLogin: {
    justifyContent: "center",
    alignItems: "center",
  },
  textNavigation: {
    color: "blue",
  },
});