import type { CSSProperties, ReactNode } from "react";

const TYPE_SPECIFIC_STYLINGS = {
  primary: {
    background: "var(--primary-color)",
    color: "var(--white-color)",
    borderColor: "var(--primary-color)",
  },
  secondary: {
    background: "var(--white-color)",
    color: "var(--primary-color)",
    borderColor: "var(--primary-color)",
  },
  disabled: {
    background: "var(--grey-color)",
    color: "var(--text-color)",
    borderColor: "var(--grey-color)",
    cursor: "not-allowed",
  },
} as const;

type Props = {
  children: ReactNode;
  type?: keyof typeof TYPE_SPECIFIC_STYLINGS;
  style?: CSSProperties;
  onClick?: () => void;
};

const Button = ({ children, type = "primary", style, onClick }: Props) => (
  <button
    style={{
      height: 40,
      width: "150px",
      borderRadius: 8,
      margin: "auto",
      cursor: "pointer",
      borderWidth: 1,
      borderStyle: "solid",
      ...TYPE_SPECIFIC_STYLINGS[type],
      ...style,
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
