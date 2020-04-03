export function getErrorMsg(err) {
  if (!err || !err.message) return null;
  if (err.graphQLErrors) {
    const toLog = {};
    toLog.graphQLErrors = err.graphQLErrors;
    if (err.networkError) toLog.networkError = err.networkError;
    if (err.extraInfo) toLog.extraInfo = err.extraInfo;
    console.log("GraphQL Error:", toLog);
  }
  return err.message;
}

/**
 * Returns a new object that is a copy of the input object, except with
 * all falsey keys deleted.
 */
export function removeEmpty(input) {
  const output = { ...input };
  Object.entries(output).forEach(([k, v]) => {
    if (!v) delete output[k];
  });
  return output;
}
