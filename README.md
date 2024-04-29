# Funbook

## Project setup
```
yarn install
```

Compiles and hot-reloads for development
```
yarn serve
```

Compiles and minifies for production
```
yarn build
```

Lints and fixes files
```
yarn lint
```

## Project Deploy

Docker

1. Build the latest repo

```bash
yarn build
```

2. Switch to your Docker Context

```bash
docker context use <context-name>
```

3. Build the Docker Image

```bash
docker compose up -d --build
```

Then you can visit the website at `http://<host>:<port>`.

### Changes of FABWeb vs Fabulous

1. navigationView

- **location**: `src/components/general/navigationView/index.vue`

- **operation**:
    `Remove`
    ```javascript
    <local-tree-view
                        v-if="false"
    ```
