# Estructura del archivo events.json

## 📋 Descripción General
El archivo `events.json` contiene un array con información de proyectos de GitHub estructurada en formato JSON.

## 🏗️ Estructura de cada objeto:

```
{
  "name":        string  → Nombre del proyecto
  "owner":       string  → Propietario del repositorio
  "description": string  → Descripción del proyecto
  "language":    string  → Lenguaje de programación principal
  "stars":       number  → Cantidad de estrellas en GitHub
  "url":         string  → Enlace directo al repositorio
}
```

## 📊 Datos incluidos:

| Proyecto | Owner | Lenguaje | Stars |
|----------|-------|----------|-------|
| octo-portfolio | octocat | HTML | 128 |
| cli-helper | octocat | JavaScript | 84 |
| design-system | octocat | CSS | 61 |

## ✅ Validación:
- ✓ JSON válido y bien formateado
- ✓ Estructura consistente en los 3 objetos
- ✓ Todos los campos requeridos presentes
- ✓ Tipos de datos correctos

---
*Este archivo es útil para práctica de manipulación de datos JSON y estructura de información.*
