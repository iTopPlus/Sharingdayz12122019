const { GoogleAdsAuth } = require("@itopplus/node-google-ads-api");

const config = {
  developerToken: "",
  userAgent: "",
  clientId: "",
  clientSecret: "",
  refreshToken: "",
  loginCustomerId: ""
};

(async () => {
  const accessToken = await GoogleAds.getAccessToken();
  console.log("accessToken ::>", accessToken);
})();
