import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    color: '#5f5f5f',
    marginTop: 20,
  },
  image: {
    height: 200,
    resizeMode: 'contain',
  },
  input: {
    color: '#6338F1',
    padding: 5,
    fontSize: 18,
  },
  inputsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
    width: '100%',
    maxWidth: 230,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#b1b1b1',
    borderRadius: 8,
    padding: 5,
    // flex: 1,
    margin: 20,
  },
  button: {
    width: '75%',
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});

export default styles;
