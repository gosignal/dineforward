const config = process.env.DOTENV ? { path: process.env.DOTENV } : {};
require('dotenv').config(config);

const setDefault = (varName, defaultVal) =>
  varName in process.env ? undefined : (process.env[varName] = defaultVal);

setDefault('PORT', '8000');
setDefault('API_URL', `http://localhost:${process.env.PORT}/admin/api`);
