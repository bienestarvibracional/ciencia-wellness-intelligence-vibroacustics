# Ciencia Wellness Intelligence

Sitio publico independiente para documentar el marco cientifico de Wellness
Intelligence, los casos grupales WIBindex 1.0 y dashboards editables.

## Objetivo

Este proyecto separa el sitio cientifico y la biblioteca de casos del portal
operativo M3M. La publicacion recomendada es:

GitHub -> Vercel -> `ciencia.bienestarvibracional.com`

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```

## Flujo de casos

1. Agregar dashboard HTML editable en `public/dashboards/`.
2. Agregar imagen documental en `public/images/casos/`.
3. Crear una pagina en `app/casos/<slug>/page.tsx`.
4. Actualizar `app/casos/page.tsx`.
5. Subir a GitHub. Vercel publica automaticamente cuando el proyecto esta
   conectado al repositorio.

## Dominio recomendado

En Vercel, agregar:

`ciencia.bienestarvibracional.com`

En DNS:

```txt
Tipo: CNAME
Host: ciencia
Destino: cname.vercel-dns.com
TTL: Auto
```

## Supabase

Supabase queda reservado para una segunda etapa: panel privado de carga de
casos, participantes, mediciones, autoreconocimiento somatico e imagenes.
