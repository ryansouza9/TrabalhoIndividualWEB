import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #141414;
  color: white;
  font-family: 'Helvetica Neue', sans-serif;
`;

export const ContentForms = styled.div`
  background-color: #2f2f2f;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 400px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Span = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const Usuario = styled.label`
  margin-top: 20px;
  font-weight: bold;
  text-align: left;
`;

export const Senha = styled.label`
  margin-top: 20px;
  font-weight: bold;
  text-align: left;
`;

export const Problemas = styled.p`
  margin: 10px 0 20px 0; 
  color: #888;
  text-align: left;
`;

export const Conta = styled.p`
  color: #888;
  text-align: center;
  margin: 20px 0 0 0;
  font-size: 14px;
`;

export const StyledLink = styled.a`
  color: #951db9;
  text-decoration: none;
`;
