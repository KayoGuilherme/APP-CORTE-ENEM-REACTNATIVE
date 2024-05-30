import {
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import react, { useContext, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons/";
import { useNavigation } from "@react-navigation/native";
import { StackPramsListAuth } from "@/routes/auth.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthContext } from "@/context/authContext";

export default function SignUp() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackPramsListAuth>>();
  const [fontLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("")
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);


  async function handleRegister(){
        if (email === "" || password === "" || name === "") {
          return;
        }
        await signUp({ name, email, password });
        Keyboard.dismiss();
  }

  const handleNameFocus = () => {
    setIsNameFocused(true);
  };

  const handleNameBlur = () => {
    setIsNameFocused(false);
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../../assets/logoEnem.png")}
          />

          <View style={styles.inputContainer}>
            <TextInput
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              style={[
                styles.input,
                {
                  borderColor: isNameFocused ? "#009CBD" : "#F1F4FF",
                },
              ]}
              placeholder="Nome"
              placeholderTextColor="#626262"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              style={[
                styles.input,
                {
                  borderColor: isEmailFocused ? "#009CBD" : "#F1F4FF",
                },
              ]}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#626262"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              style={[
                styles.input,
                {
                  borderColor: isPasswordFocused ? "#009CBD" : "#F1F4FF",
                },
              ]}
              placeholder="Senha"
              secureTextEntry={true}
              placeholderTextColor="#626262"
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.btn} onPress={handleRegister}>
              <Text style={styles.textbtn}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 290,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  headerText: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    color: "#000",
    fontSize: 17,
    fontFamily: "Poppins_700Bold",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 357,
    height: 64,
    borderRadius: 10,
    backgroundColor: "#F1F4FF",
    marginTop: 20,
    padding: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  btn: {
    width: 357,
    height: 64,
    borderRadius: 10,
    backgroundColor: "#1F41BB",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  textbtn: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
  textAcount: {
    color: "#494949",
    marginTop: 20,
  },
});
