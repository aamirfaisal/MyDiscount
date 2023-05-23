import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
  },
  image: {
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
