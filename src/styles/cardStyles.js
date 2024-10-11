import { StyleSheet } from 'react-native';

const cardStyles = StyleSheet.create({
  container: {
    width: '95%',
    maxWidth: 400,
    aspectRatio: 30 / 43.5,
    borderRadius: 15,
    marginTop: 40,
    marginBottom: 40,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#405cf5',
    borderRadius: 6,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 12,
    width: '94%',
    maxWidth: 400,
    shadowColor: 'rgba(50, 50, 93, .1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
    color: '#fff',
    fontSize: 16,
    transition: 'all .2s,box-shadow .08s ease-in',
  },
  buttonFocus: {
    shadowColor: 'rgba(50, 50, 93, .1)',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 6,
    borderColor: 'rgba(50, 151, 211, .3)',
    borderWidth: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  card: {
    width: "100%",
    height: "100%",
  }
});

export default cardStyles;


