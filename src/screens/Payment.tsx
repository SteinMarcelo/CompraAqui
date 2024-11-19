import React, { useState } from "react";
import { showSuccess, showError } from "../utils/Toast";
import { useCartContext } from "../contexts/CartContext";
import { useOrderContext } from "../contexts/OrderContext"; // Importando o contexto de pedidos
import {
  Container,
  Title,
  Section,
  Label,
  Input,
  Row,
  CityInput,
  StateInput,
  ExpiryInput,
  CvvInput,
  Card,
  CardNumber,
  CardName,
  CardRow,
  CardExpiry,
  CardCvv,
  Button,
  ButtonText,
} from "../styles/PaymentStyles";

const Payment = ({ navigation }: { navigation: any }) => {
  const { clearCart } = useCartContext();
  const { addOrder } = useOrderContext(); // Acessa a função para adicionar pedidos

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (text: string) => {
    const formatted = text
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formatted);
  };

  const handleExpiryDateChange = (text: string) => {
    const formatted = text
      .replace(/\D/g, "")
      .slice(0, 4)
      .replace(/(\d{2})(?=\d)/, "$1/");
    setExpiryDate(formatted);
  };

  const handleCvvChange = (text: string) => {
    setCvv(text.replace(/\D/g, "").slice(0, 3));
  };

  const handleCheckout = () => {
    if (
      !address ||
      !city ||
      !state ||
      cardNumber.length < 19 ||
      !cardHolderName ||
      expiryDate.length < 5 ||
      cvv.length < 3
    ) {
      showError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Armazenar os dados no OrderContext
    const newOrder = {
      address,
      city,
      state
    };

    
    addOrder(newOrder);
    showSuccess("Compra finalizada com sucesso!");
    clearCart(); // Limpa o carrinho
    navigation.navigate("Home"); // Navega para a tela inicial
  };

  return (
    <Container>
      <Title>Pagamento e Entrega</Title>

      <Section>
        <Label>Endereço de entrega:</Label>
        <Input
          placeholder="Endereço"
          value={address}
          onChangeText={setAddress}
        />
        <Row>
          <CityInput
            placeholder="Cidade"
            value={city}
            onChangeText={setCity}
          />
          <StateInput
            placeholder="Estado"
            value={state}
            onChangeText={setState}
          />
        </Row>
      </Section>

      <Section>
        <Label>Dados de pagamento:</Label>
        <Input
          placeholder="Número do cartão"
          value={cardNumber}
          onChangeText={handleCardNumberChange}
          keyboardType="numeric"
          maxLength={19}
        />
        <Input
          placeholder="Nome do titular"
          value={cardHolderName}
          onChangeText={setCardHolderName}
        />
        <Row>
          <ExpiryInput
            placeholder="Data de validade (MM/AA)"
            value={expiryDate}
            onChangeText={handleExpiryDateChange}
            keyboardType="numeric"
            maxLength={5}
          />
          <CvvInput
            placeholder="CVV"
            value={cvv}
            onChangeText={handleCvvChange}
            keyboardType="numeric"
            maxLength={3}
            secureTextEntry
          />
        </Row>
      </Section>

      <Card>
        <CardNumber>{cardNumber || "**** **** **** ****"}</CardNumber>
        <CardName>{cardHolderName || "NOME DO TITULAR"}</CardName>
        <CardRow>
          <CardExpiry>{expiryDate || "MM/AA"}</CardExpiry>
          <CardCvv>{cvv || "CVV"}</CardCvv>
        </CardRow>
      </Card>

      <Button onPress={handleCheckout}>
        <ButtonText>Finalizar pedido</ButtonText>
      </Button>
    </Container>
  );
};

export default Payment;
