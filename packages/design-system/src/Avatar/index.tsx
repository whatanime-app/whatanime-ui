import { Fallback, Image, Root } from './styles';

type Props = {
  src: string;
  alt: string;
  fallback: string;
};

function Avatar({ alt, fallback, src }: Props) {
  return (
    <Root>
      <Image src={src} alt={alt} />
      <Fallback delayMs={600}>{fallback}</Fallback>
    </Root>
  );
}

export { Avatar };
export type { Props as AvatarProps };

Avatar.displayName = 'Avatar';
