import {
    AuthProviderProps,
    User,
    AuthProviderSignOutProps,
    AuthProvider,
    useAuth
  } from "oidc-react";
  import React from "react";

  const customOidcConfig: AuthProviderProps = {
    clientId: "Dev_React_Local",
    automaticSilentRenew: true,
    redirectUri: "http://localhost:4200/signin-oidc",
    responseType: "code",
    scope: "TodoList profile roles",
    authority: "https://localhost:44350", //process.env.REACT_APP_AUTH_AUTHORITY,
    postLogoutRedirectUri: "http://localhost:4200", //process.env.REACT_APP_URL,
    
    onSignIn: async (user: User | null) => {
  
      if (user) {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            const x = 1;
        } else {
          const y =2
        }
      }
      window.location.hash = "";
    },
    onSignOut: async (options?: AuthProviderSignOutProps) => {
      const z = 3;
    },
  };
  
  interface AuthenticationProviderProps {
    children : React.ReactNode
  }
  export const AuthenticationContext = React.createContext<any | null>(null);
  function AuthenticationProvider(props:AuthenticationProviderProps)  {
    return <AuthenticationContext.Provider value={null}><AuthProvider {...customOidcConfig}>{props.children}</AuthProvider></AuthenticationContext.Provider>
  }
  
  
  export function useLogout() {
    const auth: any = useAuth()
    return auth;
  }
  
  
  
export default AuthenticationProvider