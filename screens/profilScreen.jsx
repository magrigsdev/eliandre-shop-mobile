import { Text, View, TouchableOpacity,  Image } from "react-native";
import { styles } from "../styles/profilStyle";

const ProfilScreen = () => {

  const handleLogout = () => {
    console.log("Déconnexion...");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: "https://i.pravatar.cc/150" }} 
          style={styles.avatar}
        />

        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>📞 Phone</Text>
          <Text style={styles.infoText}>+1 234 567 890</Text>
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutTxt}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilScreen;
