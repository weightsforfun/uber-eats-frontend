describe("Log In", () => {
  const user = cy;
  it("should see login page", () => {
    user.visit("/").title().should("eq", "Login | Uber Eats");
  });
  it("can see email / password validation errors", () => {
    user.visit("/");
    user.findByPlaceholderText(/email/i).type("bad@email");
    user.findByRole("notice").should("have.text", "Please enter a valid email");
    user.findByPlaceholderText(/email/i).clear();
    user.findByRole("notice").should("have.text", "Email is required");
    user.findByPlaceholderText(/email/i).type("bad@email.com");
    user
      .findByPlaceholderText(/Password/i)
      .type("a")
      .clear();
    user.findByRole("notice").should("have.text", "Password is required");
  });
  it("can fill out the form and log in", () => {
    user.visit("/");
    user.findByPlaceholderText(/email/i).type("9hcztv@naver.com");
    user.findByPlaceholderText(/password/i).type("123");
    user
      .findByRole("button")
      .should("not.have.class", "pointer-events-none")
      .click();
    user.window().its("localStorage.nuber-token").should("be.a", "string");
    // to do (can log in)
  });
});
