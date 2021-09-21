const validate = email => {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "i"
  );
  return regex.test(email);
};

const validateEmail = async (email) => {
  let validEmail = true;
  let error = "";

  if (!email) error = "Email cannot be empty";

  if (!validate(email)) error = "Please enter a valid email";

  if (!email || !validate(email)) validEmail = false;

  return { validEmail, error };
};

export { validateEmail };
