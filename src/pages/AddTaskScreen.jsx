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

const AddTaskScreen = ({route}) => {
  const data = route?.params?.data;
  console.log(data);
  const [title, setTitle] = useState(data?.lacivert);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
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
    console.log('merhaba');
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
          icon={true}
          value={title}
          imageSource={SearchIcon}
          label={'Task Adı'}
          placeholder="Task Ara"
        />
        <View style={{flexDirection: 'row'}}>
          <DatePicker
            label="Başlangıç Zamanı"
            onPress={() => showDatePicker()}
          />
          <DatePicker label="Bitiş Zamanı" onPress={() => showDatePicker()} />
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
      <CustomButton label={'Save Task'} style={{width:'30%'}}/>
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
    marginLeft:'15'
  },
});
