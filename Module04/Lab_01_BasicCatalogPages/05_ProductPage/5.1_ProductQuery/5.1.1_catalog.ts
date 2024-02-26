export type Product = {
  entityId: number,
  sku: string,
  name: string,
  description: string,
  prices: {
      price: {
          value: number,
          currencyCode: string,
      }
  }
  defaultImage?: {
      url: string,
      altText?: string,
  }
}