import { Feather, FontAwesome, FontAwesome6, Fontisto } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => <Text></Text>,
        headerLeft: () => <Text style={styles.headerTitle}>Updates</Text>,
        headerRight: () => <View style={{flexDirection: 'row'}}>
          <FontAwesome name="qrcode" size={24} color="black" style={{marginRight: 20}} />
          <Feather name="camera" size={24} color="black" style={{marginRight: 20}} />
          <Fontisto name="search" size={20} color="black" style={{marginRight: 20}} />
          <FontAwesome6 name="ellipsis-vertical" size={24} color="black" style={{marginRight: 20}} />
        </View>
      }}>
        <Stack.Screen name="status" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  }
})