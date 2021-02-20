import moment from 'moment';
import 'moment/locale/id';
import React, {Fragment, useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  Gap,
  Header,
  ImagePicker,
  Input,
  InputDropdown,
} from '../../components';
import {CreateGroup} from '../../redux/actions';
import {colors} from '../../utils';

const Discussion = () => {
  const dispatch = useDispatch();
  const tokenData = useSelector((state) => state.login.tokenData);
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState(false);
  const [state, setState] = useState({
    kelas_id: '',
    nama: '',
  });

  const updateState = (field, value) => {
    setState((prevState) => {
      return {...prevState, [field]: value};
    });
  };

  const getImage = () => {
    // Open Image Library:
    launchImageLibrary({mediaType: 'photo', quality: 1}, (response) => {
      if (response.didCancel || response.error) {
        Alert.alert('oops, batal memilih foto.');
      } else {
        setPhoto({
          ...response,
          fileName: `IMG_${moment().format('YYYYMMDDhmmss')}`,
        });
      }
    });
  };

  const submit = async () => {
    setIsLoading(true);
    if (state.kelas_id !== '' && state.nama !== '' && photo !== false) {
      let formData = new FormData();
      formData.append('kelas_id', state.kelas_id);
      formData.append('nama', state.nama);
      formData.append('thumbnail', photo);
      await dispatch(CreateGroup(formData, tokenData));
      setIsLoading(false);
    } else {
      setIsLoading(false);
      Alert.alert('Lengkapi data terlebi dahulu');
    }
  };

  return (
    <Fragment>
      <Header title="Buat Grup" backButton />
      <ScrollView
        style={styles.page}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.addPhoto}>
          <ImagePicker onPress={getImage} imgSource={photo} />
          <Text style={styles.addPhotoLabel}>Tambahkan Foto Grub</Text>
        </View>
        <Gap height={12} />
        <Input
          value={state.nama}
          onChangeText={(val) => updateState('nama', val)}
          placeholder={'nama'}
          bgDark={true}
        />
        <Gap height={12} />
        <InputDropdown
          defaultValue={state.kelas_id}
          onChangeItem={(item) => updateState('kelas_id', item.value)}
        />
        <Gap height={50} />
        <Button text="Buat Grup" onPress={submit} isLoading={isLoading} />
      </ScrollView>
    </Fragment>
  );
};

export default Discussion;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.secondary,
    // justifyContent: 'center',
    padding: 20,
  },
  addPhoto: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  addPhotoLabel: {
    fontSize: 12,
    color: colors.text.grey,
    marginTop: 8,
  },
});
