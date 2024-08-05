import { Link } from 'expo-router';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import ChatCard from '../../../components/ChatCard';

export default function MainScreen() {
  return (
    <ScrollView>
      <TextInput defaultValue="Ask Meta AI or Search" style={styles.searchBar} />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      {/* <View style={styles.selectContact} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    backgroundColor: 'lightgrey',
    padding: 8,
    margin: 10,
    borderRadius: 40
  },
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
  },
  selectContact: {
    position: 'absolute',
    width: 20,
    height: 20,
    // left: -1,
    // top: -1,
    // bottom: 0,
    right: 0,
    borderWidth: 2
  }
});
