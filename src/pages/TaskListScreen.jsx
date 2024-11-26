import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import CustomInput from '../components/CustomInput';
import colors from '../themes/Colors';
import Icon from '../assets/images/SearchIcon.png';
import TodoItem from '../components/TodoItem';
import CustomButton from '../components/CustomButton';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import renderEmptyList from '../components/Empty';
import HeaderList from '../components/HeaderList';
const TaskListScreen = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const [tasks, setTasks] = useState([]);
  // const clearAll = async () => {
  //   try{
  //     await AsyncStorage.clear();
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  // useEffect(()=>{
  //   clearAll();
  // },[])

  const loadTask = async () => {
    try {
      const existingTasks = await AsyncStorage.getItem('tasks');
      const tasks = existingTasks ? JSON.parse(existingTasks) : [];
      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadTask();
    }, []),
  );
  // const saveTask = async () => {
  // };

  // useEffect(() => {
  //   saveTask();
  //   loadTask();
  // }, []);
  const handleDeleteTask = async id => {
    try {
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.warn('hata', error);
    }
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.mainContentContainer}>
        <SafeAreaView style={[styles.container, {marginBottom: 20}]}>
          <CustomInput
            value={searchText}
            onChangeText={setSearchText}
            imageSource={Icon}
            style={{marginHorizontal: 0}}
          />
          <FlatList
            // keyExtractor={item => item?.id.toString()}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={renderEmptyList}
            ListHeaderComponent={HeaderList}
            data={tasks}
            renderItem={({item}) => (
              <TodoItem
                data={item}
                onDelete={() => handleDeleteTask(item.id)}
              />
            )}
          />
        </SafeAreaView>
        <CustomButton
          onPress={() => navigation.navigate(ScreenName.addtask)}
          label={'Task App'}
        />
      </View>
    </View>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  mainContentContainer: {
    // backgroundColor: 'red',
    height: '100%',
    position: 'absolute',
    padding: 20,
    width: Dimensions.get('screen').width,
  },
 

});
