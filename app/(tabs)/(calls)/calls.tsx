import { ScrollView, StyleSheet, Text, View } from "react-native";
import ChatCard from "../../../components/ChatCard";
import { Ionicons } from "@expo/vector-icons";


export default function CallsScreen() {
  return (
    <ScrollView>
      <Text style={styles.title}>Favourites</Text>
      {/* <ChatCard profileName={"Add to Favourites"} profileChat={"Tap to add status update"} /> */}
      <View style={styles.favouriteCard}>
        <View style={styles.icon}>
          <Ionicons name="heart" size={24} color={"black"} />
        </View>
        <Text style={{fontWeight: '500'}}>Add to Favourites</Text>
      </View>
      <Text style={styles.title}>Recent</Text>
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </ScrollView>   
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "medium",
    fontSize: 18,
    padding: 10
  },
  favouriteCard: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen'
  }
});