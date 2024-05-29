import { ActivityIndicator, View } from "react-native"
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";


export default function Routes() {

    const loading = false
    const isAuthenticated = false

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
    return(
            isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    )
}