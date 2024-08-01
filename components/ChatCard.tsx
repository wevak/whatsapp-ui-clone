import { Text, View, StyleSheet } from "react-native";

export default function ChatCard() {
  return (
    <View style={styles.chatCard}>
      <View style={styles.profilePic}></View>
      <View style={styles.profileChat}>
        <View style={styles.profileChatTitle}>
          <Text>Profile Name</Text>
          <Text>12/06/24</Text>
        </View>
        <Text style={styles.profileChatDetail}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chatCard: {
    flexDirection: 'row'
  },
  profilePic: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    margin: 10
  },
  profileChat: {
    justifyContent: 'center'
  },
  profileChatTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: '80%',
    // borderWidth: 2,
  },
  profileChatDetail: {
    fontSize: 12
  }
});