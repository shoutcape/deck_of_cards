import { StyleSheet } from 'react-native';

const cardStyles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    aspectRatio: 30 / 43.5,
    marginBottom: 40,
    marginLeft: -13.5,
    justifyContent: "center",
    alignSelf: "center"
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
    color: '#fff',
    fontSize: 16,
  },
  buttonFocus: {
    transform: [{ scaleX: 1.01 }, { scaleY: 1.04 }]
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    userSelect: "none"
  },
  card: {
    width: "100%",
    height: "100%",
    userSelect: "none"
  }
});

export default cardStyles;


