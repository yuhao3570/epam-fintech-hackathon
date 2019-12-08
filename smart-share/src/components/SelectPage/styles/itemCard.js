import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
    height: 176,
    backgroundColor: 'rgb(245, 85, 77)',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedCard: {
    opacity: 0.8
  },  
  contentText: {
    fontSize: 32,
    color: 'white'
  }
});

export default styles;
