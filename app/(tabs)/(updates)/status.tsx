import { StyleSheet, Text, View } from "react-native";
import ChatCard from "../../../components/ChatCard";

export default function StatusScreen() {
  return (
    <View>
      <Text style={styles.statusTitle}>Status</Text>
      <ChatCard profileName={"My status"} date={" "} profileChat={"Tap to add status update"} />
      <Text style={styles.recentUpdatesTitle}>Recent Updates</Text>
      <ChatCard date={" "} profileChat={"3:29 pm"} />
      <ChatCard date={" "} profileChat={"2:33 pm"} />
    </View>
  )
}

const styles = StyleSheet.create({
  statusTitle: {
    fontWeight: "medium",
    fontSize: 18,
    padding: 10
  },
  recentUpdatesTitle: {
    padding: 10
  }
});