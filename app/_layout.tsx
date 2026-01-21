// STACK NAVIGATION SETUP
import { Stack } from "expo-router";
// 최상위 LAYOUT
export default function RootLayout() {
  return (
    // STACK NAVIGATION SETUP PUSP / POP 구조
    <Stack screenOptions={{ headerShown: false }}>
      {/* HOME PAGE - 명시적 메인임을 의미함 */}
      <Stack.Screen name="(tabs)" options={{ title: "Home Page" }} />
    </Stack>
  );
}
