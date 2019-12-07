import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  homeView: {
    marginTop: 100,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  resourceButton: {
    width: 300,
    height: '30%',
    marginTop: 20,
    marginBottom: 40,
    backgroundColor: '#F25652',
    borderRadius: 20,
    shadowColor: '#102E74',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resourceButtonText: {
    fontSize: 20,
  }
})