import { Container, Content } from "./styles";
import { Logo } from "../Logo";
import { Avatar } from "../Avatar";

export function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        Teste
        <Avatar />
      </Content>
    </Container>
  );
}
