import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { Button, View, Text } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { connect } from 'react-redux';
import parsePhotoBillAction from 'actions/parsePhotoBillAction';
import styles from 'styles/PhotoUploadScreenStyle';

function PhotoUploadScreen({navigation, parseBillImage}) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    getPermissionAsync();
    console.log('hi');
    pickImage();
  }, []);
 
  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    console.log(result.uri);

    if (!result.cancelled) {
      const manipResult = await ImageManipulator.manipulateAsync(
        result.uri, undefined, { base64: true });
      manipResult.uri=result.uri;
      setImage(manipResult);
    }

  };

  const sendImageForExtraction= () => {
    // console.log(image);
    parseBillImage(image.base64);
    navigation.navigate('CreateBillScreen');

  }

  return (
    <View style={styles.photoUploadView}>
      {!image 
        ? <Text> Please go back and select Image </Text>
        : <>
            <Image source={{ uri: image.uri }} style={styles.uploadedImage} />
            <Button
              onPress={sendImageForExtraction}
              style={styles.photoActionButton}>
              <Text>Submit Image</Text>
            </Button>
          </>
      }
    </View>
  );
}

const mapDispatchToProps = (dispatch) => ({
  parseBillImage: (billImage) => { dispatch( parsePhotoBillAction(billImage) );},
});

export default connect(null, mapDispatchToProps)(PhotoUploadScreen)
