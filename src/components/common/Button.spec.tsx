import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import Button from "./Button";

describe("Button 컴포넌트 테스트", () => {
  const testcomp = (
    <BookStoreThemeProvider>
      <Button size="large" scheme="primary">
        버튼
      </Button>
    </BookStoreThemeProvider>
  );
  it("렌더를 확인", () => {
    //렌더
    render(testcomp);
    //확인
    expect(screen.getByText("버튼")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    const { container } = render(testcomp);
    expect(screen.getByRole("button")).toHaveStyle({ fontSize: "1.5rem" });
  });

  it("color props 적용", () => {
    const { container } = render(testcomp);
    expect(container.firstChild).toHaveStyle({ color: "white" });
  });
});
