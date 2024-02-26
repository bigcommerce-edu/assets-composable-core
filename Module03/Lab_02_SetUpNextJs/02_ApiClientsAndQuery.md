Follow along in your project codebase.

## 2.1

`lib/bc-client/bc-client-gql.ts`:

```javascript
export async function bcGqlFetch<RespType>(query: string): Promise<RespType>;
export async function bcGqlFetch<RespType, VarsType>(query: string, variables: VarsType): Promise<RespType>;
export async function bcGqlFetch<RespType, VarsType>(
  query: string,
  variables?: VarsType
): Promise<RespType> {
  const { BC_STORE_HASH, BC_CHANNEL_ID, BC_CI_TOKEN } = process.env;

  const result = await fetch(
    `https://store-${BC_STORE_HASH}-${BC_CHANNEL_ID}.mybigcommerce.com/graphql`,
    {
      ...
      body: JSON.stringify({
        query,
        ...(variables && { variables }),
      }),
    }
  ).then(res => res.json());

  if (result.errors && result.errors.length > 0) {
    ...
  }

  return result satisfies RespType;
}
```

## 2.2

`lib/bc-client/bc-client-rest.ts`:

```javascript
export async function bcRestFetch<RespType, ReqType>(
  urlPath: string,
  method: string,
  reqData: ReqType
): Promise<RespType> {
  const { BC_STORE_HASH, BC_API_TOKEN } = process.env;

  const result = await fetch(
    `https://api.bigcommerce.com/stores/${BC_STORE_HASH}/${urlPath}`,
    {
      ...
      body: JSON.stringify(reqData),
    }
  ).then(res => res.json());

  return result satisfies RespType;
}
```

## 2.3

`lib/bc-client/queries/getGlobalData.ts`:

```javascript
...

const getGlobalDataQuery = `
query GetSettings($logoSize: Int!) {
  site {
      settings {
          storeName
          logoV2 {
              ... on StoreTextLogo {
                  text
              }
              ... on StoreImageLogo {
                  image {
                      url(width: $logoSize)
                  }
              }
          }
      }
  }
}
`;

type GetGlobalDataVars = {
  logoSize: number
}

type GetGlobalDataResp = {
  data: {
    site: {
      ...
    }
  }
}

export type StoreSettings = {
  ...
}

export const getGlobalData: 
  () => Promise<{settings: StoreSettings}> 
= async () => {
  const settingsResp = await bcGqlFetch<GetGlobalDataResp, GetGlobalDataVars>(
    getGlobalDataQuery,
    {
      logoSize: 500,
    },
  );

  const settings = settingsResp.data.site.settings;

  return ...
}
```