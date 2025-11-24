import { useRouter } from "next/router";
import { ActiveLink } from "./active-link";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("ActiveLink", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Deve aplica a classe "text-blue-500" quando a rota atual corresponde ao href', () => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: "/about" });

    render(<ActiveLink href="/about">About Page</ActiveLink>);

    const link = screen.getByRole("link", { name: /about page/i });

    expect(link).toHaveClass("text-blue-500");
  });

  it('Deve aplica a classe "text-muted-foreground" quando a rota não corresponder ao href', () => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: "/home" });

    render(<ActiveLink href="/about">About Page</ActiveLink>);

    const link = screen.getByRole("link", { name: /about page/i });

    expect(link).toHaveClass("text-muted-foreground");
  });

  it("Deve renderizar o texto do link corretamente", () => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: "/" });

    render(<ActiveLink href="/">Home</ActiveLink>);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
