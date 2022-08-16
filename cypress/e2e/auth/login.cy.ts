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
    user.login("9hcztv@naver.com", "123");
    // to do (can log in)
  });
});
