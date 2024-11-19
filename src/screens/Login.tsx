import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
} from "../styles/LoginStyles";

const Login = () => {
  const { handleLogin } = useContext(UserContext);

  const [email, setEmail] = useState("karn.yong@melivecode.com");
  const [password, setPassword] = useState("melivecode");

  return (
    <Container>
      <Title>Login</Title>
      <Input
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        placeholder="Insira seu email"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Insira sua senha"
      />
      <Button onPress={() => handleLogin(email, password)}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
};

export default Login;
