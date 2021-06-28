import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

import IllustrarionImg from "../../assets/illustration.png";

export const Signin: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={IllustrarionImg}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize{"\n"}
          suas jogatinas{"\n"}
          facilmente
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>
      </View>
    </View>
  );
};
