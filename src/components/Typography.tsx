import { type CSSProperties, type ReactNode } from "react";

const TYPOGRAPHY_TAGS = {
  "title-xl": "h1",
  "title-l": "h2",
  "title-m": "h3",
  "title-s": "h4",

  "subtitle-xl": "h5",
  "subtitle-l": "h6",
  "subtitle-m": "p",
  "subtitle-s": "p",

  "body-l": "p",
  "body-m": "p",
  "body-s": "p",
} as const;

type Props = {
  children: ReactNode;
  type?: keyof typeof TYPOGRAPHY_TAGS;
  className?: string;
  style?: CSSProperties;
};

const Typography = ({
  children,
  type = "body-m",
  className = "",
  style,
}: Props) => {
  const Tag = TYPOGRAPHY_TAGS[type];

  return (
    <Tag className={`${type} ${className}`} style={style}>
      {children}
    </Tag>
  );
};

export default Typography;
