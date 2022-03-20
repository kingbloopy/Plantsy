
export const ErrorsUtil = errors => {
  const errorsObj = {};
  errors.forEach(error => {
    const err = error.toLowerCase();
    if (err.includes('email')){
      errorsObj.email = error;
    } else if (err.includes('password') || err.includes('must')){
      errorsObj.password = error;
    } else if (err.includes('name')){
      errorsObj.name = error;
    }
  });
  return errorsObj;
}
