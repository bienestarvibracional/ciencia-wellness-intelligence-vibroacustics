# Deploy: GitHub + Vercel

Objetivo:

`https://ciencia.bienestarvibracional.com`

## 1. GitHub

Crear un repositorio nuevo:

`bienestarvibracional/ciencia-wellness-intelligence`

Luego, desde esta carpeta local:

```bash
git remote set-url origin https://github.com/bienestarvibracional/ciencia-wellness-intelligence.git
git push -u origin main
```

## 2. Vercel

Crear un proyecto nuevo en Vercel:

- Nombre: `ciencia-wellness-intelligence`
- Framework: Next.js
- Root directory: raiz del repositorio
- Install command: `npm ci`
- Build command: `next build`
- Output: automatico de Next.js

Conectar el proyecto al repo de GitHub:

`bienestarvibracional/ciencia-wellness-intelligence`

## 3. Dominio

Agregar en Vercel:

`ciencia.bienestarvibracional.com`

Configurar DNS:

```txt
Tipo: CNAME
Host: ciencia
Destino: cname.vercel-dns.com
TTL: Auto
```

## 4. Flujo futuro

Cada nuevo caso se agrega al repositorio local y se sube a GitHub:

```bash
git add .
git commit -m "Add <nombre del caso>"
git push
```

Vercel publica automaticamente cada push a `main`.

## 5. Supabase

Supabase queda para la proxima etapa:

- tabla `cases`
- tabla `participants`
- almacenamiento de imagenes
- panel privado para cargar CSV, foto, fecha, lugar y practica
- generacion automatica de dashboards WIBindex
