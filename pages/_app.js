import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <NextNProgress
        color="linear-gradient(to right, rgba(255,0,0,0),rgba(255,0,0,3));"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false, easing: "ease" }}
      />

      <Component {...pageProps} />
    </>
  );
}
// function Auth({ children }) {
//   const router = useRouter();
//   const { status } = useSession({
//     required: true,
//     onUnauthenticated() {
//       router.push("/unauthorized?message=login required");
//     },
//   });

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }
//   return children;
// }
export default MyApp;
