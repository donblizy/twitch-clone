import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { UserContext } from "../contexts/UserContext";

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Navbar />
        <Component {...pageProps} />
      </UserContext.Provider>
    </SessionContextProvider>
  );
}

export default MyApp;
