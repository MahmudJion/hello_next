# hello_next

A production-ready Next.js sample application showcasing static rendering with `getStaticProps`, client-side data fetching, and reusable UI components.

## Production readiness

- ✅ Static homepage with incremental static regeneration (`revalidate: 60`)
- ✅ Client-side trending feed with Axios
- ✅ Custom server entrypoint (`server.js`) supporting `HOSTNAME` and `PORT`
- ✅ Next.js production config with `reactStrictMode`, disabled `poweredByHeader`, and compression
- ✅ Targeted runtime requirement: Node.js 18.18.0+

## Requirements

- Node.js 18.18.0 or later
- npm 10 or later

## Install

```sh
npm install
```

## Development

Start the local development server:

```sh
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```sh
npm run build
```

## Run in production

```sh
npm start
```

## Deployment notes

- `server.js` is a minimal custom server and can be removed if deploying to Vercel.
- Use environment variables `HOSTNAME` and `PORT` to configure runtime.
- For production readiness, always run with `NODE_ENV=production`.
- Add TLS termination and observability for hardened deployment.
- Run `npm audit` regularly and fix any found vulnerabilities before deploying.

## Project structure

- `pages/index.js` — home page with featured news feed and ISR
- `pages/about.js` — static about page
- `pages/test.js` — placeholder page
- `components/Layout.js` — shared layout and head metadata
- `components/Featured.js` — featured posts listing
- `components/Trending.js` — client-side trending posts
- `server.js` — custom Node server entrypoint
- `next.config.js` — production-oriented Next.js config

## License

ISC
