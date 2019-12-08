import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  photoUploadView: {
    marginTop: 50,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  uploadedImage: {
    width: 250,
    height: 400,
    marginBottom: 30,
    resizeMode: 'contain'
  },
  photoActionButton: {
    width: 200,
    height: 40,
    backgroundColor: '#F25652',
    borderRadius: 4,
    shadowColor: '#102E74',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  } 
})