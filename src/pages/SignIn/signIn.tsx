import {
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import react, { useState } from "react";
import {
  Image,
  Keyboard,
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

export default function SignIn() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackPramsListAuth>>();
  const [fontLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

 const [isEmailFocused, setIsEmailFocused] = useState(false);
const [isPasswordFocused, setIsPasswordFocused] = useState(false);
const [isSecurityPassword, setIsSecurityPassword] = useState(false)

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


  function handleRegisterNavigation() {
    navigation.navigate("SignUp");
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/logoEnem.png")}
        />
        <Text style={styles.headerText}>Login Here</Text>

        <View style={styles.inputContainer}>
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
          />

          <View style={{ flexDirection: "row" }}>
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
            />

           <TouchableOpacity>
             <Icon
              name="visibility"
              size={23}
              style={{
                position: "absolute",
                right: 10, 
                top: 40, 
              }}
              />
           </TouchableOpacity>
          </View>

          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 150,
              marginTop: 15,
              color: "#1F41BB",
              fontWeight: "600",
              fontSize: 13,
            }}
          >
            Esqueceu sua Senha?
          </Text>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textbtn}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleRegisterNavigation}>
            <Text style={styles.textAcount}>Criar uma nova conta</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 200,
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
    borderWidth: 1
  },
  btn: {
    width: 357,
    height: 64,
    borderRadius: 10,
    backgroundColor: "#1F41BB",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
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
