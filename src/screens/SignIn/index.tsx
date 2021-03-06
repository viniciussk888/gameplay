import React, { useCallback } from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuth } from "../../hooks/auth";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

import IllustrationImage from "../../assets/illustration.png";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

export function SignIn() {
  const { loading, signIn } = useAuth();

  const handleSignIn = useCallback(async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }, []);

  return (
    <Background>
      <View style={styles.container}>
        <Image source={IllustrationImage} style={styles.image} resizeMode="stretch" />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`} e organize suas {`\n`} jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com discord" activeOpacity={0.7} onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}
