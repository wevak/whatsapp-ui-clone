import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Link href={'details'}>DetailsScreenLink</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
