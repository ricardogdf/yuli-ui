import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renderiza o texto corretamente", () => {
    render(<Button texto="Clique aqui" />);
    expect(screen.getByText("Clique aqui")).toBeInTheDocument();
  });
});
