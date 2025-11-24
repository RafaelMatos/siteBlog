import "@testing-library/jest-dom";

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveClass(...classNames: string[]): R;
      toBeInTheDocument(): R;
      toHaveTextContent(text: string | RegExp): R;
    }
  }
}

export {};
