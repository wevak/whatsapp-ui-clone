import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TabsRoutes() {
  return (
    <Tabs>
      <Tabs.Screen name="(chats)" options={{ 
        title: 'Chats',
        headerShown: false,
        tabBarLabel: ({ focused }) => {
          return (
            <View>
              <Text
                style={{
                  fontWeight: focused ? '800' : '400',
                }}>
                  Chats
              </Text>
            </View>
          );
        },
        tabBarIcon: ({ focused }) => <MaterialIcons name={focused ? "chat" : "chat-bubble-outline"} size={24} color="black" style={focused ? { borderRadius: 4, backgroundColor: 'lightgrey'} : {}} />
      }} />
      <Tabs.Screen name="(updates)" options={{
        title: 'Updates',
        headerShown: false,
        tabBarLabel: ({ focused }) => {
          return (
            <View>
              <Text
                style={{
                  fontWeight: focused ? '800' : '400',
                }}>
                  Updates
              </Text>
            </View>
          );
        },
        tabBarIcon: ({ focused }) => <MaterialIcons name="browser-updated" size={24} color="black"  style={focused ? { borderRadius: 4, backgroundColor: 'lightgrey'} : {}} />
      }} />
      <Tabs.Screen name="(communities)" options={{ 
        title: 'Communities',
        headerShown: false,
        tabBarLabel: ({ focused }) => {
          return (
            <View>
              <Text
                style={{
                  fontWeight: focused ? '800' : '400',
                }}>
                  Communities
              </Text>
            </View>
          );
        },
        tabBarIcon: ({ focused }) => <FontAwesome6 name="people-group" size={24} color="black" style={focused ? { borderRadius: 4, backgroundColor: 'lightgrey'} : {}} />
      }} />
      <Tabs.Screen name="(calls)" options={{ 
        title: 'Calls',
        headerShown: false,
        tabBarLabel: ({ focused }) => {
          return (
            <View>
              <Text
                style={{
                  fontWeight: focused ? '800' : '400',
                }}>
                  Calls
              </Text>
            </View>
          );
        },
        tabBarIcon: ({ focused }) => <MaterialIcons name="call" size={24} color="black" style={focused ? { borderRadius: 4, backgroundColor: 'lightgrey'} : {}} />
      }} />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  labelStyle: {
    fontWeight: 'bold'
  },
});