import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function ToyStory() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require("../../assets/AnaMaria.webp")} style={styles.image} />
      <Text style={styles.title}>Toy Story</Text>
      <Text style={styles.label}>Sinopse:</Text>
      <Text style={styles.text}>
        Um grupo de brinquedos ganha vida quando os humanos não estão por perto. Woody, o cowboy favorito de Andy, enfrenta o ciúmes ao ver um novo brinquedo, Buzz Lightyear, chegar ao quarto.
      </Text>
      <Text style={styles.label}>Duração:</Text>
      <Text style={styles.text}>1h 21min</Text>
      <Text style={styles.label}>Estreia:</Text>
      <Text style={styles.text}>22 de novembro de 1995</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  image: { width: "100%", height: 300, borderRadius: 15, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  label: { fontSize: 18, fontWeight: "bold", marginTop: 15 },
  text: { fontSize: 16, marginTop: 5 },
});
