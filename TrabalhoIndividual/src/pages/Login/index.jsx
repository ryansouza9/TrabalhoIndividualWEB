import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import Twitch from "../../imgs/Twitch.png";
import { Conta, Container, ContentForms, Img, Problemas, Senha, Span, Usuario, Header, StyledLink } from "./style";

export const Login = () => {
  return (
    <Container>
      <ContentForms>
        <Header>
          <Img src = {Twitch}/> 

          <Span>
            Entrar na Twitch
          </Span>
        </Header>

        <Usuario>
          Nome de usuário
        </Usuario>

        <InputField id = "username" propsplaceholder = "Digite seu login" 
        propstype = "email" />

        <Senha>
          Senha
        </Senha>

        <InputField id = "password" propsplaceholder = "Digite sua senha" 
        propstype = "password" />

        <Problemas>
        <StyledLink 
          href = "https://github.com/ryansouza9/TrabalhoIndividualWEB" 
          target = "_blank">
            Problemas para fazer login?
        </StyledLink>
        </Problemas>

        <Button title = "Conecte-se"/>

        <Conta>
          Não tem uma conta? <StyledLink 
          href="https://github.com/ryansouza9/TrabalhoIndividualWEB" 
          target = "_blank">
            Cadastre-se
          </StyledLink>
        </Conta>
      </ContentForms>
    </Container>
  );
};
