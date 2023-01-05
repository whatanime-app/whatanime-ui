import { Root, Image, Fallback } from "./styles";

export function Avatar() {
  return (
    <Root>
      <Image
        src="https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/10/narutofeliz-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1"
        alt="Naruto Uzumaki"
      />
      <Fallback delayMs={600}>NU</Fallback>
    </Root>
  );
}
