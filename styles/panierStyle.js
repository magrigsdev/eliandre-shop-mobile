import { StyleSheet } from "react-native";

export const styles =  StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginBottom: 8,
    marginTop:50,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 6,
  },

  itemsCount: {
    color: "#00796B",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 6,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 15,
    color: "#555",
    marginVertical: 16,
  },
  panierVide: {
    marginTop:20,
    textAlign: "center",
    fontSize: 22,
    color: "#E53935",
    marginVertical: 16,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
    alignItems: "center",
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  price: {
    fontSize: 15,
    color: "#000",
    fontWeight: "600",
    marginVertical: 4,
  },

  desc: {
    fontSize: 12,
    color: "#666",
    maxWidth: "95%",
  },

  quantity: {
    fontSize: 12,
    color: "#E53935",
    marginTop: 4,
    fontWeight: "600",
  },

  deleteBtn: {
    padding: 5,
  },

  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },

  totalText: {
    alignSelf: "flex-end",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
  },

  payButton: {
    backgroundColor: "#00897B",
    paddingVertical: 14,
    borderRadius: 25,
    width: "85%",
    alignSelf: "center",
    marginTop: 20,
  },
  videButton: {
    backgroundColor: "#890044ff",
    paddingVertical: 14,
    borderRadius: 25,
    width: "85%",
    alignSelf: "center",
    marginTop: 20,
  },

  payText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
