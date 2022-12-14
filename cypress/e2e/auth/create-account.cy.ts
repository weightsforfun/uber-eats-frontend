describe("Create Account", () => {
  const user = cy;
  it("should see email / password validation errors", () => {
    user.visit("/");
    user.findByText(/create an account/i).click();
    user.findByPlaceholderText(/email/i).type("non@good");
    user.findByPlaceholderText(/password/i).click();
    user.findByRole("notice").should("have.text", "Please Enter a Valid Email");
    user.findByPlaceholderText(/email/i).clear();
    user.findByRole("notice").should("have.text", "Email is required");
    user.findByPlaceholderText(/email/i).type("real@mail.com");
    user
      .findByPlaceholderText(/password/i)
      .type("a")
      .clear();
    user.findAllByPlaceholderText(/email/i).click();
    user.findByRole("notice").should("have.text", "Password is required");
  });
  it("should be able to create account and login", () => {
    user.intercept("http://localhost:4000/graphql", (req) => {
      const { operationName } = req.body;
      if (operationName && operationName === "createAccountMutation") {
        req.reply((res) => {
          res.send({
            fixture: "auth/create-account.json",
          });
        });
      }
    });
    user.visit("/create-account");
    user.findByPlaceholderText(/email/i).type("9hcztv@naver.com");
    user.findByPlaceholderText(/password/i).type("123");
    user.findByRole("button").click();
    user.wait(5000);
    user.login("9hcztv@naver.com", "123");
  });
});
