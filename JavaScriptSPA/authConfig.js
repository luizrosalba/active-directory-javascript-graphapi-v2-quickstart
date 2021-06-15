 
// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters, 
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
const msalConfig = {
  auth: {
    clientId: "eeb1f3c5-ec03-44aa-8639-0c977d2ad5c2",
    //authority: "https://login.microsoftonline.com/common/", ///sem distinçao app ou ent 
   authority: "https://login.microsoftonline.com/5da575e2-6108-416c-b3f8-b68bb440b7b9/", ///sem distinçao app ou ent 
    redirectUri: "https://gallant-leavitt-cb78df.netlify.app/"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
  }
};  
  
// Add here the scopes to request when obtaining an access token for MS Graph API
// for more, visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-core/docs/scopes.md
const loginRequest = {
  scopes: ["openid", "profile", "User.Read"]
};

// Add here scopes for access token to be used at MS Graph API endpoints.
const tokenRequest = {
  scopes: ["Mail.Read"]
};
