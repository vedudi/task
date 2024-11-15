import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';
import StatusButton from './StatusButton';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({sari}) => {
  const navigations = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <Text
          style={[
            styles.taskTitle,
            {
              textDecorationLine:
                sari.status === 'closed' ? 'line-through' : null,
            },
          ]}>
          {sari.lacivert === 'fenerbahçe'
            ? sari.lacivert.toUpperCase()
            : sari.lacivert.toLowerCase()}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.statusContainer,
              {
                backgroundColor:
                  sari.status === ('done' || 'progress')
                    ? '#CAF6cb'
                    : '#FECcb1',
              },
            ]}>
            <Text
              style={{
                color:
                  sari.status === ('done' || 'progress')
                    ? '#72966f'
                    : '#d6825c',
              }}>
              {' '}
              {sari.status}{' '}
            </Text>
          </View>
          <StatusButton
            iconName="pencil"
            onPress={() =>
              navigations.navigate(ScreenName.addtask, {data: sari})
            }
          />
          <StatusButton iconName="delete" color={'#c0695e'} />
        </View>
      </View>
      <Text style={styles.taskDescription}> {sari?.description} </Text>
      <View style={styles.footerContainer}>
        <View>
          <Text>Başlangıç Tarihi</Text>
          <View>
            <Icon name="clock-outline" color={colors.primary} size={15} />
            <Text style={styles.timeText}>15.07.2016-19:30</Text>
          </View>
        </View>
        <View>
          <Text>Bitiş Tarihi</Text>
          <View>
            <Icon name="clock-outline" color={colors.primary} size={15} />
            <Text style={styles.timeText}>01.09.2016-01:30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskTitle: {
    flex: 1,
    fontSize: 15,
    color: colors.text.primary,
    fontWeight: '600',
    marginBottom: 5,
  },
  statusContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  taskDescription: {},
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    color: colors.primary,
    fontWeight: '600',
    marginHorizontal: 5,
    fontSize: 12,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
