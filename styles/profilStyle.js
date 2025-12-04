import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#ddd",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 6,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "#ddd",
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: "#EAF0FF",
    width: "100%",
    borderRadius: 12,
    padding: 15,
    marginBottom: 25,
  },
  infoLabel: {
    fontSize: 12,
    color: "#4B7BE5",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  logoutBtn: {
    backgroundColor: "#FF4D4D",
    width: "70%",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  logoutTxt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
