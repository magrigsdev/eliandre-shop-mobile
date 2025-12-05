import { Text, View, TouchableOpacity,  Image } from "react-native";
import { styles } from "../styles/profilStyle";
import { useNavigation } from '@react-navigation/native';

const ProfilScreen = () => {

 const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png" }} 
          style={styles.avatar}
        />

        <TouchableOpacity style={styles.logoutBtn} onPress={()=> navigation.replace('signup')}>
          <Text style={styles.logoutTxt}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilScreen;
