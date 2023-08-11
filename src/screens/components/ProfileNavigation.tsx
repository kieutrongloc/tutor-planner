import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const ProfileNavigation: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.profileName}>Navigation</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  post: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileNavigation;
