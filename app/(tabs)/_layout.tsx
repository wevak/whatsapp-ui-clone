import { Tabs } from "expo-router";

export default function TabsRoutes() {
  return (
    <Tabs>
      <Tabs.Screen name="(home)" options={{ headerShown: false }} />
      <Tabs.Screen name="settings" />
    </Tabs>
  )
}