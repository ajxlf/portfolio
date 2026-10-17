import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import Index from "../pages/Index";

describe("portfolio page", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => undefined,
        removeListener: () => undefined,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        dispatchEvent: () => false,
      }),
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("introduces the developer and their graduate software engineering focus", () => {
    render(<Index />);
    expect(screen.getByRole("heading", { name: "Andre Lawson-Ferreira" })).toBeTruthy();
    expect(screen.getByText(/graduate software engineering roles/i)).toBeTruthy();
  });

  it("shows the four featured projects with links to their source repositories", () => {
    render(<Index />);
    for (const project of ["Cadence", "CyberDrive", "Cross-Math", "Smart Campus JAX-RS API"]) {
      expect(screen.getByRole("heading", { name: project })).toBeTruthy();
    }

    expect(screen.getByRole("link", { name: /github/i }).getAttribute("href")).toBe("https://github.com/ajxlf");
  });
});
