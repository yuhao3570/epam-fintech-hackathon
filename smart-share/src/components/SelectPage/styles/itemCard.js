import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginBottom: 24,
    height: 176,
    backgroundColor: 'white',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedCard: {
    backgroundColor: 'rgb(14, 45, 72)',
  },  
  contentText: {
    fontSize: 32,
    color: 'rgb(245, 85, 77)'
  },
  selectedText: {
    color: 'white'
  }
});

export default styles;
