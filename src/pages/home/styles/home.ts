import {StyleSheet} from 'react-native';

export const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D47AF',
  },
  subheading: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  subheadingText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export const categories = StyleSheet.create({
  container: {
    paddingLeft: 25,
  },
  heading: {
    color: '#DDD',
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  boxContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  box: {
    backgroundColor: '#010319',
    minWidth: 200,
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#010319',
    color: '#FFF',
    borderRadius: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingLeft: 20,
  },
  tastInfo: {
    color: '#7E7E7E',
    fontSize: 16,
  },
  categoryInfo: {
    color: '#FFF',
    fontSize: 20,
    paddingTop: 10,
  },
});
