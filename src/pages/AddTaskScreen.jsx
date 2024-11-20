import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import CustomInput from '../components/CustomInput';
import colors from '../themes/Colors';
import SearchIcon from '../assets/images/SearchIcon.png';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from '../components/DatePicker';
import CustomButton from '../components/CustomButton';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';

const AddTaskScreen = ({route}) => {
  const data = route?.params?.data;
  const navigation = useNavigation();
  const [title, setTitle] = useState(data?.lacivert);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [items, setItems] = useState([
    {label: 'Open', value: 'open'},
    {label: 'Progress', value: 'progress'},
    {label: 'Pending', value: 'pending'},
    {label: 'Closed', value: 'closed'},
  ]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };
  const handleConfirmStartDate = date => {
    setStartDate(date.toString());
    hideStartDatePicker();
  };
  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };
  const handleConfirmEndDate = date => {
    setEndDate(date.toString());
    hideEndDatePicker();
  };

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };
  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };
  // const handleConfirm = date => {
  //   hideDatePicker();
  // };
  const handleAddTask = async () => {
    const newTask = {
      id: data?.id || uuid.v4(),
      title,
      startDate,
      endDate,
      status: value,
    };
    try {
      const excitingTasks = await AsyncStorage.getItem('tasks');
      let tasks = excitingTasks ? JSON.parse(excitingTasks) : [];
      if (data) {
        tasks = tasks.map(tasks.id === data.id ? newTask : tasks);
      } else {
        tasks.push(newTask);
      }
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      navigation.navigate(ScreenName.tasklist);
    } catch (error) {
      console.log(error, 'Failed to save task');
    }
  };
  console.warn(startDate);

  return (
    <View style={styles.container}>
      <View style={styles.inlineContainer}>
        <View style={styles.taskImageContainer}>
          <LottieView
            autoPlay
            loop
            style={{height: 200, width: '100%'}}
            source={require('../assets/animation/pencil.json')}
          />
        </View>
        <CustomInput
          icon={true}
          value={title}
          imageSource={SearchIcon}
          label={'Task Adı'}
          placeholder="Task Ara"
        />
        <View style={{flexDirection: 'row'}}>
          <DatePicker
            value={startDate}
            isDate
            onChangeText={setStartDate}
            label="Başlangıç Zamanı"
            onPress={() => showStartDatePicker()}
          />
          <DatePicker
            value={endDate}
            onChangeText={setEndDate}
            isDate
            label="Bitiş Zamanı"
            onPress={() => showEndDatePicker()}
          />
        </View>

        <View>
          <View style={styles.dropdownContainer}>
            <View>
              <Text style={styles.status}>Status</Text>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                containerStyle={{width: '95%', margin: 'auto'}}
                style={{borderWidth: 0}}
              />
            </View>
          </View>
        </View>
      </View>
      <CustomButton
        onPress={handleAddTask}
        label={data ? 'update task' : 'Save Task'}
        style={{width: '30%'}}
      />
      <DateTimePickerModal
        mode="datetime"
        onCancel={hideStartDatePicker}
        isVisible={isStartDatePickerVisible}
        onConfirm={handleConfirmStartDate}
      />
      <DateTimePickerModal
        mode="datetime"
        onCancel={hideEndDatePicker}
        isVisible={isEndDatePickerVisible}
        onConfirm={handleConfirmEndDate}
      />
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    alignItems: 'center',
  },
  inlineContainer: {
    width: '100%',
  },
  taskImageContainer: {
    marginTop: 60,
  },
  dropdownContainer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginBottom: 210,
  },
  status: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: '600',
    color: colors.text.primary,
    marginLeft: '15',
  },
});
