const { GoogleAdsReport } = require("@itopplus/node-google-ads-api");

const ENUM_STATUS = {
  UNAUTHENTICATED: "UNAUTHENTICATED",
  INVALID_ARGUMENT: "INVALID_ARGUMENT"
};

const config = {
  developerToken: "",
  userAgent: "",
  clientId: "",
  clientSecret: "",
  refreshToken: "",
  loginCustomerId: ""
};

const getGoogleAdsReport = async (cid, query) => {
  const Report = new GoogleAdsReport(config, accessToken);
  const result = await Report.getReport(cid, query);
  if ("error" in result) {
    const { error } = result;
    switch (error.status) {
      case ENUM_STATUS.UNAUTHENTICATED:
        break;
      case ENUM_STATUS.INVALID_ARGUMENT:
        throw new Error(error.message);
      default:
        throw new Error(error.message);
    }
  } else return result;
};

(async () => {
  const query = `
    SELECT 
        campaign.id,
        metrics.impressions,
        metrics.clicks,
        metrics.cost_micros
    FROM 
        campaign
    WHERE
        campaign.status = ENABLED
`;
  await getGoogleAdsReport("#INPUT_CID", query);
})();

// https://developers.google.com/google-ads/api/fields/v2/overview
// https://interactive-gaql-builder.appspot.com/


// `
// SELECT 
//     campaign.name,
//     ad_group_criterion.keyword.text,
//     ad_group_criterion.keyword.match_type,
//     ad_group_criterion.status,
//     segments.date 
// FROM 
//     keyword_view
// WHERE 
//     ad_group_criterion.type = KEYWORD
//     AND ad_group_criterion.status = ENABLED
//     AND campaign.status = ENABLED
//     AND segments.date BETWEEN '2019-01-01' AND '2019-01-31'
// `