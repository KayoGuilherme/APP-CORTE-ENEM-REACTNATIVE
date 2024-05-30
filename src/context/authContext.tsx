import react, { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { api } from "@/config/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProvider {
  user: UserProps;
  isAuthenticated: boolean;
  loading: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>;
  signOut: () => void;
  loadingAuth: boolean
}

type UserProps = {
  id: string | number;
  name: string;
  token: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

type SignInProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthProvider);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigation = useNavigation();

  const [user, setUser] = useState<UserProps>({
    id: "",
    name: "",
    token: "",
  });
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user.token;

  useEffect(() => {
    async function getUser() {
      const userInfo = await AsyncStorage.getItem("@CorteEnem");
      let hasUser: UserProps = JSON.parse(userInfo || `{}`);

      if (Object.keys(hasUser).length > 0) {
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${hasUser.token}`;
      }

      setUser({
        id: hasUser.id,
        token: hasUser.token,
        name: hasUser.name
      });

      setLoading(false);
    }

    getUser();
  }, []);

 
  async function signUp({ name, email, password }: SignUpProps) {
    try {
      const response = await api.post("/register", {
        name,
        email,
        password,
      });

      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }

   async function signIn({ email, password }: SignInProps) {
     try {
       setLoadingAuth(true);
       const response = await api.post("/login", {
         email,
         password,
       });

       const { id, name, token } = response.data;

       const data = {
         ...response.data,
       };

       await AsyncStorage.setItem("@CorteEnem", JSON.stringify(data));

       api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

       setUser({
         id,
         name,
         token,
       });
       setLoading(false);
     } catch (error) {
       console.log(error);
       setLoading(false);
     }
   }

    async function signOut() {
      await AsyncStorage.clear().then(() => {
        setUser({
          id: "",
          name: "",
          token: "",
        });
      });
    }


   return (
     <AuthContext.Provider
       value={{
         user,
         isAuthenticated,
         signIn,
         signUp,
         loading,
         loadingAuth,
         signOut,
       }}
     >
       {children}
     </AuthContext.Provider>
   );
}
