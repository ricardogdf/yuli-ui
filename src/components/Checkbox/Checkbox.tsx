type Props = {
  texto: string;
};

export const Checkbox = ({ texto }: Props) => {
  return <button>{texto}</button>;
};
