# Lab - Set Up a Next.js Frontend

## Introduction

Throughout this course, you will build a Next.js storefront for your BigCommerce store, with basic features demonstrating key aspects of commerce workflow.

Next.js is one of the most popular and rapidly evolving web application frameworks, based on React, with a feature set ideal for composable architecture. It's the framework of choice for Catalyst, as well as thousands of other popular sites and applications.

### In this lab, you will:

* Provision a starter Next.js site in a local dev environment connected to your BigCommerce store
* Review the starter architecture, including a basic GraphQL client and a basic "store settings" query

### Prerequisites

* The [Git](https://git-scm.com/) CLI (depending on setup method)
* An IDE or code editor, like [VS Code](https://code.visualstudio.com/)
* Node.js 20 or later ([nvm](https://github.com/nvm-sh/nvm) recommended)
* The [pnpm](https://pnpm.io/installation) package manager
* Basic understanding of [React](https://react.dev/)

### From Previous Labs

You will need the following prerequisites generated or collected in previous labs.

* Your BigCommerce store hash
* The ID of your headless channel
* A Private Storefront Token for server-side authentication with the GraphQL Storefront API

## Setup

1. **Run** the following, replacing the path to the working directory with your own path:


```bash copy
corepack enable pnpm && pnpm dlx create-next-app@latest -e https://github.com/bigcommerce-edu/lab-nextjs-storefront/tree/bcu-starter /path/to/working/directory
```

This will create the initial, stripped-down Next.js project from the [example repository](https://github.com/bigcommerce-edu/lab-nextjs-storefront), including installing all npm dependencies.

The main branch of the project repository contains the _completed_ code for all labs, so make sure you don't attempt setup by cloning that as your initial state!

**Troubleshooting**

_The pnpm command is unrecognized._  
In some environments where file permissions are highly restricted, you may need to prepend `corepack` to the use of `pnpm` commands (for example, `corepack pnpm dlx create-next-app@latest ...`)

2. **Open** your project in your IDE of choice.
3. **Copy** `.env.example` as `.env.local`.
4. **Enter** your unique config values in `.env.local`.

| Variable | Value |
|---|---|
| BIGCOMMERCE_STORE_HASH | Your store hash |
| BIGCOMMERCE_CHANNEL_ID | Your headless channel ID |
| BIGCOMMERCE_PRIVATE_STOREFRONT_TOKEN | Your private storefront token |

5. **Start** the dev server process:

```bash copy
cd /path/to/working/directory
pnpm run dev
```

6. **Browse** to the local URL printed in the _npm_ output (usually `http://localhost:3000).`

You should now see a basic home page, complete with your own store's logo image or text.

**Troubleshooting**

If you encounter an error while starting the dev server related to an issue finding a matching `keyid`, you may need to upgrade a pre-existing `corepack` version.

`npm install -g corepack@latest`

## Review API Clients and First Query

The starter codebase for your storefront already includes a basic API client for GraphQL. Let's take a look at their architecture.

1. **Open** the file `lib/bc-client/bc-client-gql.ts`. This defines a `bcGqlFetch` function that accepts a query string and a variables object.

The function utilizes the store hash, channel ID, and storefront token from your config.

Also note the use of the type variables (between angle brackets) in the various overloads of the function signature. These allow the calling context to pass in Typescript types describing the expected shape of any GraphQL variables being passed in, and the expected shape of the response.

The function also supports a `customerToken` parameter, passing this in the `X-Bc-Customer-Access-Token` header if a value exists.

**GraphQL Type Safety**

Note that the Typescript _satisfies_ operator used above declares what type the response body is _expected_ to conform to, but no actual response validation is being done here! While type safety for API responses is outside the scope of the exercise, there are different possible solutions that avoid the need for laborious checks. 

Catalyst utilizes a pattern involving [gql.tada](https://gql-tada.0no.co/) for auto-generating type information.

[Zod](https://zod.dev/) is another tool that allows for easy schema validation using type objects that closely mimic standard type expressions.

2. **Open** the file `components/header/_data/component-data.ts`. The GraphQL fetch that populates the store header is located here. Take a look at the GraphQL query string, types, and function defined here.

First, you have a simple string defining a GraphQL query for your store's logo information. (This will be expanded later with details beyond store settings.)

The various types define the expected shape of the variables passed to the query and the response returned from BigCommerce. These types are passed along with the query string and variables to the generic `bcGqlFetch` function, so that Typescript understands the data involved.

## The Header Component

The final piece to examine in our survey of the app's starter architecture is the `Header` component, which is how the store logo finally makes it into the page layout.

1. **Open** the file `components/header/index.tsx`. **Observe** the use of `getHeaderSettings` to fetch the required data.

`Header`, like all components by default with the App Router architecture, is a [React Server Component](https://react.dev/reference/rsc/server-components). This means that the fetch being done with `getHeaderSettings` is performed securely at the server before frontend content is rendered, not in JavaScript in the user's browser.

2. **Open** the file `app/layout.tsx`. The component structure in this file applies to _all_ pages on the storefront and is where `Header` is placed.
