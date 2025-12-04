import { Text, View, TouchableOpacity,  Image } from "react-native";
import { styles } from "../styles/profilStyle";

const ProfilScreen = ({userInfo}) => {
  
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

        <Text style={styles.name}> <Text style={{textTransform:'capitalize'}}>{userInfo.Prenom}</Text>  <Text style={{textTransform:'uppercase',fontWeight: '700'}}>{userInfo.Nom}</Text> </Text>
        <Text style={styles.email}>{userInfo.Email} </Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>📞 Phone</Text>
          <Text style={styles.infoText}> {userInfo.Telephone}</Text>
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutTxt}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilScreen;
