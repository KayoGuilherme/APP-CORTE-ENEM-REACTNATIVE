import { ActivityIndicator, View } from "react-native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";

export default function Routes() {
  const { loading, isAuthenticated } = useContext(AuthContext);
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={70} color="#1d1d2E" />
      </View>
    );
  }
  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
}
