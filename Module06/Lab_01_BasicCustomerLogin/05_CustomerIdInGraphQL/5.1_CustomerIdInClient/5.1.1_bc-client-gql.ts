// START MODIFIED CODE
export async function bcGqlFetch<RespType>(query: string, customerId?: number): Promise<RespType>;
export async function bcGqlFetch<RespType, VarsType>(query: string, variables: VarsType, customerId?: number): Promise<RespType>;
// END MODIFIED CODE
export async function bcGqlFetch<RespType, VarsType>(
  query: string,
  variables?: VarsType,
  // START NEW CODE
  customerId?: number
  // END NEW CODE
): Promise<RespType> {