import { useState } from "react";

const useRegister = () => {
  const [visiblePassword, setVisiblePassword] = useState({
    password: false,
    passwordConfirmation: false,
  });
  const hadleVisiblePassword = (key: "password" | "passwordConfirmation") => {
    setVisiblePassword({
      ...visiblePassword,
      [key]: !visiblePassword[key],
    });
  };
  return { visiblePassword, hadleVisiblePassword };
};

export default useRegister;
