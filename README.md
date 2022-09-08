# react-shopify-analytics

[![License](https://img.shields.io/github/license/filiphsps/react-shopify-analytics.svg)](https://github.com/filiphsps/react-shopify-analytics/blob/master/LICENSE) [![npm](https://img.shields.io/npm/dt/react-shopify-analytics)](https://www.npmjs.com/package/react-shopify-analytics) [![Contributors](https://img.shields.io/github/contributors/filiphsps/react-shopify-analytics.svg)](https://github.com/filiphsps/react-shopify-analytics/graphs/contributors)

## Why use react-shopify-analytics?

-   Stupidly simple (Pretty much just toLocaleString).
-   Written in TypeScript.
-   Actively maintained.
-   Open Source with an actually free license (MIT).
-   0/ZERO/NADA/NOLL dependencies.

## Getting started

It's as simple as 1-2-3!

### 1. Install

```bash
npm i react-shopify-analytics
```

### 2. Import

```tsx
import { ShopifyAnalyticsProvider } from 'react-shopify-analytics';
```

### 3. Use

```jsx
<ShopifyAnalyticsProvider
    shopId={123456789} // Required
    sessionId="session_token" // Required
    userId="user_token" // Required
/>
```
