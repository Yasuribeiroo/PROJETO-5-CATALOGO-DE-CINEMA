import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MovieDetailsScreen = () => {
  const route = useRoute();
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.description}>{movie.description}</Text>
      <Text style={styles.duration}>Duração: {movie.duration} minutos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 320,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  description: {
    fontSize: 16,
    color: '#bbb',
    marginTop: 10,
    textAlign: 'center',
  },
  duration: {
    fontSize: 18,
    color: '#ffcc00',
    marginTop: 10,
  },
});

export default MovieDetailsScreen;