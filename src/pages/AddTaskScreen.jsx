import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import CustomInput from '../components/CustomInput';
import colors from '../themes/Colors';
import SearchIcon from '../assets/images/SearchIcon.png';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const AddTaskScreen = () => {
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(data?.status || null);
  const [startDate, setStartDate] = useState(data?.startDate || '');
  const [endDate, setEndDate] = useState(data?.endDate || '');
  const [items, setItems] = useState([
    {label: 'Open', value: 'open'},
    {label: 'Progress', value: 'progress'},
    {label: 'Pending', value: 'pending'},
    {label: 'Closed', value: 'closed'},
  ]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    console.warn('A date has been picked:', date);

    hideDatePicker();
  };

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
          imageSource={SearchIcon}
          label={'Task Adı'}
          placeholder="Task Ara"
        />
        <View style={{flexDirection: 'row'}}>
          <CustomInput
            onPressIcon={() => showDatePicker()}
            imageSource={SearchIcon}
            label={'Başlangıç Zamanı'}
            style={{width: '40%'}}
            placeholder="set start time"
          />
          <CustomInput
            onPressIcon={() => showDatePicker()}
            imageSource={SearchIcon}
            label={'Bitiş Zamaanı'}
            style={{width: '40%'}}
            placeholder="set end time"
          />
        </View>
        <View>
          <View>
            <View>
              <Text>status</Text>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
          </View>
        </View>
      </View>
      <DateTimePickerModal
        mode="datetime"
        onCancel={hideDatePicker}
        isVisible={isDatePickerVisible}
        onConfirm={handleConfirm}
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
  },
});
