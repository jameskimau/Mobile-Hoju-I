// STACK NAVIGATION SETUP

import { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
// 최상위 LAYOUT
const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});
export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        {/* // STACK NAVIGATION SETUP PUSP / POP 구조 */}
        <Stack screenOptions={{ headerShown: false }}>
          {/* HOME PAGE - 명시적 메인임을 의미함 */}
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}
