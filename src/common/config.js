require('dotenv').config();

const envVars = process.env;

// if test, use test database
const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  apiVersion: envVars.API_VERSION,
  kiln: {
    apiUrl: envVars.KILN_URL,
    apiToken: envVars.KILN_API_TOKEN,
    solVoteAccountAddress: envVars.KILN_SOL_VOTE_ACCOUNT_ADDRESS,
  },
  fireblocks: {
    baseUrl: envVars.FIREBLOCKS_BASE_URL,
    secretKey: envVars.FIREBLOCKS_SECRET_KEY,
    apiKey: envVars.FIREBLOCKS_API_KEY,
    vaultId: envVars.FIREBLOCKS_VAULT_ID,
    vaultSolAddress: envVars.FIREBLOCKS_VAULT_SOL_ADDRESS,
  },
};
module.exports = config;
