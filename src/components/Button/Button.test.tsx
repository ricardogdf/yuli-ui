import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("bg-primary");
  });

  it("accepts and applies variant and size", () => {
    render(
      <Button variant="destructive" size="lg">
        Danger
      </Button>
    );
    const btn = screen.getByRole("button", { name: /danger/i });
    expect(btn).toHaveClass("bg-destructive");
    expect(btn).toHaveClass("h-11");
  });

  it("applies animation class", () => {
    render(<Button animation="pulse">Animated</Button>);
    const btn = screen.getByRole("button", { name: /animated/i });
    expect(btn).toHaveClass("animate-pulse");
  });

  it("passes props like disabled", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button", { name: /disabled/i });
    expect(btn).toBeDisabled();
  });
});
