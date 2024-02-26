import { bcRestFetch } from "../bc-client-rest";

type CreateCheckoutRedirectReq = {
  cartId: string,
};

type CreateCheckoutRedirectResp = {
  data: {
    checkout_url: string,
  },
};