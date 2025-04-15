type Props = {
  texto: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
};

export const Button = ({ texto, variant = 'primary', size = 'medium', disabled = false }: Props) => {
  return (
    <button
      className={`button button-${variant} button-${size}`}
      disabled={disabled}
    >
      {texto}
    </button>
  );
};
