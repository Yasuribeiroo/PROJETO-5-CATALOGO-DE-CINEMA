import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";

const categories = [
  {
    name: "Animação",
    movies: [
      { title: "Carros", image: require("../assets/car.jpeg"), page: "/screens/ToyStory" },
      { title: "Toy Story", image: require("../assets/toy.jpeg"), page: "Shrek" },
      { title: "Wall-E", image: require("../assets/wal.jpeg"), page: "Frozen" },
      { title: "Bem 10", image: require("../assets/bem.jpeg"), page: "Moana" },
    ],
  },
  {
    name: "Aventura",
    movies: [
      { title: "Indiana Jones", image: require("../assets/jon.jpeg"), page: "Avatar" },
      { title: "Mortal Kombat", image: require("../assets/mortal.jpg"), page: "JurassicPark" },
      { title: "MIB: Homens de Preto", image: require("../assets/mib.jpeg"), page: "IndianaJones" },
    ],
  },
  {
    name: "Comédia",
    movies: [
      { title: "Shrek", image: require("../assets/sherk.jpeg"), page: "WhiteChicks" },
      { title: "Monstros VS Alienigenas ", image: require("../assets/monster.jpeg"), page: "Hangover" },
      { title: "Rei Leão 3", image: require("../assets/tim.jpeg"), page: "Ted" },
      { title: "Tá chovendo Hamburguer", image: require("../assets/ta.jpeg"), page: "Mask" },
    ],
  },
  {
    name: "Romance",
    movies: [
      { title: "A dama e o Vagabundo", image: require("../assets/dama.jpeg"), page: "Titanic" },
      { title: "Simplemente acontece", image: require("../assets/simples.jpeg"), page: "DearJohn" },
      { title: "Cinderela", image: require("../assets/cid.webp"), page: "Notebook" },
      { title: "Mulan", image: require("../assets/mu.jpeg"), page: "FiveFeetApart" },
    ],
  },
  {
    name: "Terror",
    movies: [
      { title: "Rua do medo", image: require("../assets/rua.jpeg"), page: "Conjuring" },
      { title: "The monkey", image: require("../assets/macaco.jpeg"), page: "Annabelle" },
      { title: "Alice no país das maravilhas", image: require("../assets/alice.jpeg"), page: "It" },
      { title: "Invocação do mal", image: require("../assets/invoca.webp"), page: "Paranormal" },
    ],
  },
];

export default function Index() {

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {categories.map((category, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>{category.name}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
            {category.movies.map((movie, idx) => (
              <Link href={movie.page}>
                <TouchableOpacity
                  key={idx}
                  style={{ marginRight: 15, alignItems: "center" }}
                >
                    <Image source={movie.image} style={{ width: 100, height: 150, borderRadius: 10 }} />
                    <Text style={{ marginTop: 5, textAlign: "center" }}>{movie.title}</Text>
                </TouchableOpacity>
              </Link>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
}
