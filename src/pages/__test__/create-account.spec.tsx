import { ApolloProvider } from "@apollo/client";
import { createMockClient, MockApolloClient } from "mock-apollo-client";
import React from "react";
import { CreateAccount, CREATE_ACCOUNT_MUTATION } from "../create-account";
import { render, waitFor, RenderResult } from "../../test-utils";
import userEvent from "@testing-library/user-event";
import { UserRole } from "../../__generated__/globalTypes";
import { act } from "react-dom/test-utils";

const mockPush = jest.fn();

jest.mock("react-router-dom", () => {
  const realModule = jest.requireActual("react-router-dom");
  return {
    ...realModule,
    useHistory: () => {
      return {
        push: mockPush,
      };
    },
  };
});

describe("<CreateAccount />", () => {
  let mockedClient: MockApolloClient;
  let renderResult: RenderResult;
  beforeEach(async () => {
    await waitFor(() => {
      mockedClient = createMockClient();
      renderResult = render(
        <ApolloProvider client={mockedClient}>
          <CreateAccount />
        </ApolloProvider>
      );
    });
  });
  it("renders OK", async () => {
    await waitFor(() =>
      expect(document.title).toBe("Create Account | Uber Eats")
    );
  });
  it("renders validation errors", async () => {
    const { getByRole, getByPlaceholderText } = renderResult;
    const email = getByPlaceholderText(/email/i);
    act(() => {
      const button = getByRole("button");
      let errorMessage;
      userEvent.type(email, "wont@work");
      waitFor(() => {
        errorMessage = getByRole("notice");
        expect(errorMessage).toHaveTextContent(/please enter a valid email/i);
      });

      userEvent.clear(email);
      waitFor(() => {
        errorMessage = getByRole("notice");
        expect(errorMessage).toHaveTextContent(/email is required/i);
      });

      userEvent.type(email, "working@email.com");
      userEvent.click(button);
      waitFor(() => {
        errorMessage = getByRole("notice");
        expect(errorMessage).toHaveTextContent(/password is required/i);
      });
    });
  });
  // it("submits mutation with form values", async () => {
  //   const { getByRole, getByPlaceholderText } = renderResult;
  //   const email = getByPlaceholderText(/email/i);
  //   const password = getByPlaceholderText(/password/i);
  //   const button = getByRole("button");
  //   const formData = {
  //     email: "working@mail.com",
  //     password: "12",
  //     role: UserRole.Client,
  //   };
  //   const mockedLoginMutationResponse = jest.fn().mockResolvedValue({
  //     data: {
  //       createAccount: {
  //         ok: true,
  //         error: "mutation-error",
  //       },
  //     },
  //   });
  //   mockedClient.setRequestHandler(
  //     CREATE_ACCOUNT_MUTATION,
  //     mockedLoginMutationResponse
  //   );
  //   jest.spyOn(window, "alert").mockImplementation(() => null);
  //   await waitFor(() => {
  //     userEvent.type(email, formData.email);
  //     userEvent.type(password, formData.password);
  //     userEvent.click(button);
  //   });
  //   expect(mockedLoginMutationResponse).toHaveBeenCalledTimes(1);
  //   expect(mockedLoginMutationResponse).toHaveBeenCalledWith({
  //     createAccountInput: {
  //       email: formData.email,
  //       password: formData.password,
  //       role: formData.role,
  //     },
  //   });
  //   expect(window.alert).toHaveBeenCalledWith("Account Created! Log in now!");
  //   const mutationError = getByRole("alert");
  //   expect(mockPush).toHaveBeenCalledWith("/");
  //   expect(mutationError).toHaveTextContent("mutation-error");
  // });
  // afterAll(() => {
  //   jest.clearAllMocks();
  // });
});
