export interface TextExpanderProps {
    limit?: number;
    text: string;
    className?: string;
    defaultShow?: boolean;
    expandTitle?: string;
    contractTitle?: string;
    buttonColor?: string;
    buttonInline?: boolean;
    onToggle?: (callback: (prev: boolean) => boolean) => void;
  }