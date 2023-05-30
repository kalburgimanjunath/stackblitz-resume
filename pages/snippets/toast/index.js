import { CodeSection } from 'react-code-section-lib';
export default function Index() {
  const value = `import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  
  function MyApp({ Component, pageProps }) {
    return (
      <>
        <ToastContainer />
        <Component {...pageProps} />
      </>
    );
  }
  
  const logout = async () => {
    await firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
    });
    toast.success("🚀 Logged out successfully!");
    router.push("/login");
  };
  `;
  return (
    <div>
      <h3>Toast</h3>
      <div>A simple reusable notification toasts</div>
      <CodeSection showLineNumbers theme="dark" lang="react">
        {value}
      </CodeSection>
    </div>
  );
}
