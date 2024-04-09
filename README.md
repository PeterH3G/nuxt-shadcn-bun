# nuxt-shadcn-docker

A Nuxt 3-Shadcn setup for Docker deployment.
<br>
Build with [Bun.sh](https://bun.sh).

## Scripts

__Make 'gitpush' script executable for Bun__


```bash
chmod +x ./scripts/gitpush.sh
```

__Push to Github with Bun__


```bash
bun run push
```

## Development

__Install the dependencies__

```bash
bash bun install 
```

__Start Development Server__
```bash
bun run dev
```
Development server: [localhost:3000](http://localhost:3000)

<br>

__Build the application for production__


```bash
bun run build
```

__Locally preview production build__

```bash
bun run preview
```

<br>

## [Docker Application](https://docker.com)

__Start Docker Application__


```bash
bun run docker
```
Docker Server: [localhost:3000](http://localhost:3000)

<br>

__Build Docker Application__


```bash
bun run docker-build
```

<br>

## Project Documentation

* <a href="https://bun.sh" target="_blank"><b>Bun</b>: Develop, test, run, and bundle JavaScript & TypeScript projects</a>
* <a href="https://nuxt.com" target="_blank"><b>Nuxt 3</b>: The Intuitive Vue Framework</a>
* <a href="https://nuxt.com/docs/api/configuration/nuxt-config" target="_blank"><b>Nuxt 3 Application</b>: nuxt.config.ts</a>
* <a href="https://nuxt.com/docs/getting-started/deployment" target="_blank"><b>Nuxt 3 Application</b> deployment documentation</a>
* <a href="https://tailwindcss.com/" target="_blank"><b>TailwindCSS</b>: Rapidly build modern websites</a>
* <a href="https://shadcn-vue.com" target="_blank"><b>Shadcn/vue</b>: Shadcn component library for Vue</a>
* <a href="https://www.radix-vue.com/" target="_blank"><b>Radix Vue</b>: Vue Port of Radix UI</a>
* <a href="https://iconify.design/" target="_blank"><b>Iconify</b>: The easiest way to use icons in your projects</a>
