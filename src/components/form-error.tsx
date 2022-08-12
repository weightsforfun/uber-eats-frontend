import React from "react";

interface IFormErrorProps {
  errorMessage: String;
}

export const FormError: React.FC<IFormErrorProps> = ({ errorMessage }) => {
  return (
    <span role="notice" className="font-medium text-red-500">
      {errorMessage}
    </span>
  );
};
