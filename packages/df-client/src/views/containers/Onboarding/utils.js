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
