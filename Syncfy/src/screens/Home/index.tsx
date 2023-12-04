import React from 'react';
import {RootStackParamList} from '../../types/rock-stack-param-list';
import {
  Button,
  ButtonContainer,
  ButtonText,
  Container,
  Logo,
  SubText,
  WelcomeText,
} from './style';
import {StackNavigationProp} from '@react-navigation/stack';

type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <Container>
      <Logo source={require('../../assets/images/logo.png')} />
      <WelcomeText>Seja Bem-vindo!</WelcomeText>
      <SubText>Procedência e segurança é com a gente.</SubText>
      <ButtonContainer>
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <ButtonText>Login</ButtonText>
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Cadastro');
          }}>
          <ButtonText>Cadastro</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Home;
