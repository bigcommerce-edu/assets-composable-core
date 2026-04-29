# Lab - Configure API Credentials and Channel

## **Preparing for Your Storefront Integration**

The BigCommerce APIs are the linchpin of your front-end's integration with the platform, so the first step for your development journey is to generate the appropriate access credentials to allow your application to access those APIs. We'll be generating two types of credentials: **Store-level v2/v3 API account** credentials and a **GraphQL Storefront API token**.

The credentials you generate in this lab will be needed for future labs, so make sure you store them securely.

### Prerequisites

* A BigCommerce [sandbox store](https://docs.bigcommerce.com/developer/docs/overview/sandboxes) or [trial store](https://www.bigcommerce.com/essentials/), or a full production store, with an available slot for a new storefront channel
* [Postman](https://www.postman.com/) or a similar API client

### In this lab, you will:

* Practice generating store-level v2/v3 API credentials
* Create a headless storefront channel
* Practice generating a GraphQL storefront token with Postman
* Generate and store the credentials you will use in subsequent labs

## Enable Multi-Storefront

1. In your BigCommerce store control panel, **navigate** to Channels.
2. **Click** the &quot;Create channel&quot; button.
3. If you don't already have the ability to create new storefront slots, an &quot;Enable storefront seats&quot; button will appear in the Storefronts section. **Click** this button.

You will be presented with a prompt to confirm or update to the various requirements for Multi-Storefront.

![Image](https://storage.googleapis.com/bigcommerce-production-dev-center/learning-edu/composable-core/multi-storefront-verifications.png)

4. **Confirm** or **update** each item in the requirements list.
5. **Exit** the channel creation process. (You won't be creating a storefront channel via the control panel.)

## **Create a Store-Level API Account**

1. In your BigCommerce store control panel, under Settings, navigate to &quot;Store-level API accounts&quot; and **create** a new &quot;V3/V3 API token&quot; account with the following scopes.


| Scope | Permission |
|---|---|
| Customers login | login |
| Products | modify |
| Carts | modify |
| Sites &amp; routes | modify |
| Channel settings | modify |
| Storefront API tokens | manage |

The OAuth scopes we've set will be used both for storefront operations and management of store data. This is convenient for a development-only context, but when configuring API accounts for a real store, you should restrict the scopes available to your front-end application. Create one account with the &quot;Customers login&quot; and &quot;Carts&quot; scopes, and a separate account for management.

After saving your API account, you will be presented with three values in a modal:

* Client ID
* Client Secret
* Access token

These values will not be retrievable once the displayed modal is closed!

2. Securely **store** the access token for your API account. Optionally, you may also store the client ID and client secret.

The following steps will involve using a Postman environment to store your access token for API requests. While you are unlikely to use the client ID and client secret within Postman, such environment variables can be a convenient central place to secure all related credentials. Since we'll be using Postman in future labs, feel free to store your credentials there now. (Make sure the environment you create is not in a shared workspace!)

3. **Create** a new Postman environment with the following variables.

| Variable Name | Value |
| --- | --- |
| `v3_token` | The access token of your store-level V2/V3 API account |
| `store_hash` | Your store hash |

Make sure to choose this environment from the environment drop-down when running all requests in the following steps.

## Import Collection

Import the [Composable Core Labs collection](../Composable%20Core%20Labs.postman_collection.json)

## **Create a Headless Storefront Channel**

1. **Run** the "Create Headless Channel" request in the imported collection.
2. **Verify** that all tests pass.
3. **Verify** that your environment has the `storefront_channel_id` variable set.

## Verify Your Channel Site

1. **Run** the "Get Channel Site" request.
2. **Verify** that your channel contains a &quot;canonical&quot; URL value with the pattern `https://store-{hash}-{channel ID}.mybigcommerce.com`. This is the URL that will be used for GraphQL Storefront API requests.
3. **Observe** the `checkout` URL in the response, which should be set to the URL of your default BigCommerce storefront. This is the configuration you'll keep for your Redirected Checkout flow in your dev environment.

It's not actually the recommended practice to redirect to the default storefront for checkout. The checkout URL should be a domain that is assigned directly to the headless storefront channel. For the purposes of development in these lab exercises, however, you do not have a real domain to set.

Your channel does not yet have a &quot;primary&quot; URL, and while working with the channel in a local development environment, you will not have a public domain to set. The main implication of this will be that BigCommerce will not know how to properly generate links to your local headless storefront in your control panel or in Stencil pages like checkout.

In a full build, once you have a public domain and a strategy for checkout domain, you can update these with the following API endpoints:

* Update a Channel Site
* Upsert a Site's Checkout URL

## Create a GraphQL Storefront Token

The V2/V3 API token you've used so far will be relevant for a few more operations, but your storefront application's primary interactions with BigCommerce will require a GraphQL Storefront token. You'll create this token now and store it for subsequent labs.

1. **Run** the "Create Storefront Token" request.
2. **Verify** that all tests pass.

Remember that you can also use a dynamic value for `expires_at`, by including a Pre-request Script to calculate a timestamp and store it as an environment or collection variable.

3. **Verify** that the `storefront_token` variable is populated in your environment variables list. This is the token you will need for subsequent labs.


## Assign Catalog Data

Remember that existing catalog data in your store, if it exists, will not automatically be associated with your new channel. You must create a unique category tree for the channel and assign products.

1. **Log into** your BigCommerce store control panel.
2. In Products > Product Categories, **create a category tree** for your new channel.

![Image](https://storage.googleapis.com/bigcommerce-production-dev-center/learning-edu/composable-core/category-tree-create.png
)


3. **Create** two or more top-level categories, making sure to **assign** them to the appropriate channel.
4. If you have existing products in your store that you want to use on your headless channel, **visit** Products > View and **check** the checkboxes next to all products you want to assign.
5. Use the bulk actions at the top of the product list to **Add to Channels**. Select your headless channel and **Add**.
6. **Add** your products to categories within your headless channel's category tree. You can use the **Add to Categories** bulk action as appropriate, for each group of products you wish to add to a particular category.

If you prefer to create new products for use in your headless channel, subsequent labs will outline the necessary fields you will want to include for the features you'll be building.

## Configure Shipping and Payments

If you want to be able to complete checkout on your Catalyst storefront, you'll need to make sure you have the appropriate minimal store configuration in place for shipping and payments.

This step is not channel-specific, so if you've previously configured shipping and payment options for your store, you won't need to do any additional setup.

We won't walk through the details of configuring your store settings, but make sure you have:

* A Shipping Zone that applies to any billing address you will use at checkout
* An enabled Shipping Method on the Shipping Zone
* An enabled test/sandbox Payment Method. (Check the &quot;Enable test credit card payments&quot; option in your Payments Methods settings for the simplest option.)
