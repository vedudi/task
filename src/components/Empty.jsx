import {StyleSheet, Text, View} from 'react-native';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';

const renderEmptyList = () => (
  <View style={styles.emptyListContainer}>
    <Iconn name="text-box-remove" size={150} color="gray" />
    <Text style={styles.emptyText}>Empty Task</Text>
  </View>
);
export default renderEmptyList;
const styles = StyleSheet.create({
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  emptyText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'gray',
  },
});
