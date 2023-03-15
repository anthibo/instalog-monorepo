
# Instalog-Monorepo

This is a monorepo containing FE and BE for Instalog - A simple activity log tab system



## Features

- Monitoring events in the dashboard
- Create events from an SDK or with REST APIs
- Search, Filteration, and Load more Pagination
- Export Events Data to CSV


## Tech Stack

**Client:** NextJs(v13 with appDir enabled), TailwindCSS, useSWR, and Vercel for deployment

**Server:** NestJs, Prisma, MySQL, and Railway for deployment


## Run locally

BE:

```bash
  yarn start:dev
```

BE:

```bash
  yarn dev
```
## API Reference

#### Register a new actor account

```http
  POST /api/auth/register
```
 ```json
  {
    "email": "anthibo@10-3-23@test.com",
    "name": "anthibo testing",
    "password": "password123"
  }
```

#### Login

```http
  POST /api/auth/register
```
 ```json
  {
    "username": "anthibo@10-3-23@test.com",
    "password": "password123"
 }
```

#### Generate Seceret Key for your account

```http
  GET /api/auth/secret_key
```
*Required Headers:*
| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. The Bearer JWT token |


#### List Events

```http
  POST /api/events
```

| Query Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `batchSize`      | `number` | **Required**. The batchSize per page |
| `actor_id`      | `string` | Filter results by `actor_id` |
| `action_id`      | `string` | Filter results by `action_id` |
| `target_id`      | `string` | Filter results by `target_id` |
| `search`      | `string` | Search for a name, email or/and action |


#### Create an Event

```http
  POST /api/events
```
*Body:*
```json
    {
        "action_name": "testing.sdk",
        "group": "anthibo-testing",
        "target_id": "target_id",
        "target_name": "anthibo",
        "location": "178.151.26.217",
        "metadata": { "platform": "nginx" }
    }
```
## Demo

- Backend: https://instalog-backend-production.up.railway.app/api
- Frontend: https://instalog-frontend.vercel.app
- SDK: https://www.npmjs.com/package/instalog-sdk


## Optimizations

- Implement Live View
- Implement Filteration in FE side
- Add unit, integration and e2e tests


## FAQ

#### How to get your secret key?
1. Create an actor account first
2. Generate your secret key
3. Use the generated secret key for Instalog SDK


