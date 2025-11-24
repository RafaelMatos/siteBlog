import { render, screen } from "@testing-library/react";

import { useRouter } from "next/router";
import "@testing-library/jest-dom";
import { Header } from "./header";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Header", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renderiza o header e logo corretamente", () => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: "/" });

    render(<Header />);

    // Verifica logo
    expect(screen.getByText("Logo")).toBeInTheDocument();

    // Verifica header
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renderiza os links de navegação", () => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: "/" });

    render(<Header />);

    expect(screen.getByRole("link", { name: /início/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /blog/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /começar/i })).toBeInTheDocument();
  });

  it("marca o link ativo corretamente", () => {
    (useRouter as jest.Mock).mockReturnValue({ asPath: "/blog" });

    render(<Header />);

    const activeLink = screen.getByRole("link", { name: /blog/i });
    expect(activeLink).toHaveClass("text-blue-500");

    const inactiveLink = screen.getByRole("link", { name: /início/i });
    expect(inactiveLink).toHaveClass("text-muted-foreground");
  });
});
