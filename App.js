import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ProfileCard } from "./components/Profile/ProfileCard";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", padding: 15 }}
        >
          <ProfileCard />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
