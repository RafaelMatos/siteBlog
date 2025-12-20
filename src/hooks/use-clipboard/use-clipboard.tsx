"use client";
import { useCallback, useEffect, useState } from "react";

type UseClipboardProps = {
  timeout?: number;
};

export const useClipboard = ({ timeout = 2000 }: UseClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async (text: string) => {
    if (!navigator.clipboard) {
      console.log("Clipboard não suportado");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.error("Falha ao copiar o texto: ", error);
      setIsCopied(false);
      return false;
    }
  }, []);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [isCopied, timeout]);

  return { isCopied, handleCopy };
};
