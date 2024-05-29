
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackPramsListAuth } from "@/routes/auth.routes";
export default function WelcomePage() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackPramsListAuth>>();

  const [fontLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  function handleNavigationLogin() {
    navigation.navigate("SignIn");
  }

  function handleNavigationRegister() {
    navigation.navigate("SignUp");
  }

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />

        <View style={styles.headerText}>
          <Text style={styles.textWelcome}>Discover your</Text>
          <Text style={styles.textWelcome}>Dream course here</Text>
        </View>

        <View style={styles.containerInput}>
          <TouchableOpacity style={styles.btn} onPress={handleNavigationLogin}>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnRegister}
            onPress={handleNavigationRegister}
          >
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "#000" }}>
              Registrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 400,
    resizeMode: "contain",
    marginBottom: 20,
    alignSelf: "center",
  },
  headerText: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  textWelcome: {
    fontSize: 25,
    margin: 5,
    color: "#1F41BB",
    fontFamily: "Poppins_600SemiBold",
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    width: 160,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 12,
    backgroundColor: "#1F41BB",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins_600SemiBold",
    shadowColor: "#0000FF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  btnRegister: {
    width: 160,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 12,
    backgroundColor: "#f0f4ff",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins_600SemiBold",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
});
