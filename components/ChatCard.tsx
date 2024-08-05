import { Text, View, StyleSheet, Image } from "react-native";

export default function ChatCard({ profileName, date, profileChat }) {
  return (
    <View style={styles.chatCard}>
      <View>
        <Image style={styles.profilePic} source={require('../assets/profile-pic.png')} />
      </View>
      <View style={styles.profileChat}>
        <View style={styles.profileChatTitle}>
          <Text>{profileName ? profileName : "Profile Name"}</Text>
          <Text style={{marginRight: 5}}>{date ? date : "12/06/24"}</Text>
        </View>
        <Text style={styles.profileChatDetail}>{profileChat ? profileChat : "Lorem, ipsum dolor sit amet consectetur adipisicing elit."}</Text>
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
    // borderWidth: 2,
  },
  profileChatDetail: {
    fontSize: 12
  }
});