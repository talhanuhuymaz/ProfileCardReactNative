import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.27,

    elevation: 10,
  },

  //----------------------------------------
  avatar: {
    width: 70,
    height: 70,
    borderRadius: "50%",
  },

  header: {
    flexDirection: "row",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },

  texts: {
    flex: 1,
    paddingLeft: 15,
  },

  social: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  socialBtn: {
    borderRadius: "50%",
    padding: 10,
    backgroundColor: "#eee",
  },
});
