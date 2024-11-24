# Portfolio Web - Arquitectura Hexagonal y Clean Code

> Codeando es que se aprende, y esta vez me propuse el reto de combinar los conceptos de arquitectura hexagonal (también conocida como Ports and Adapters) con los principios de Clean Code. Este proyecto no solo es mi portafolio web, sino una oportunidad para aplicar y consolidar buenas prácticas de desarrollo en un entorno real.

## 🚀 Propósito del Proyecto

Este proyecto surgió como una manera de **restructurar mi portafolio web**, implementando:

- **Principios de Domain Driven Design (DDD)**.
- Configuración avanzada de **ESLint** y **Prettier**, complementada con **Husky** y **lint-staged** para mantener un código organizado.
- **Arquitectura hexagonal** que desacopla responsabilidades y mejora la mantenibilidad del código.

Aunque el proyecto en sí es relativamente sencillo, debo admitir que ha costado algunos conceptos e implementaciones. Sin embargo, como dice el dicho: _el que la sigue, la consigue_. Este esfuerzo me permitió poner a prueba mis capacidades y dar un gran paso hacia mi meta profesional de convertirme en un **arquitecto frontend**.

> Gracias a las clases compartidas por [@AlanBuscaglia](https://www.linkedin.com/in/alanbuscaglia/) y a referencias externas como este [repositorio de arquitectura hexagonal](https://github.com/juanm4/hexagonal-architecture-frontend) que influyó en mi desarrollo.

## 🌟 Beneficios

Este proyecto ha sido diseñado para ofrecer una arquitectura limpia y escalable que sigue los principios de **Clean Code** y **Domain-Driven Design (DDD)**. Al trabajar con este repositorio, podrás:

- **Aprender y aplicar arquitectura hexagonal:** Conoce y experimenta con el enfoque de _ports and adapters_.
- **Mejorar tus habilidades en organización de código:** Configuraciones como `eslint`, `prettier`, `husky` y `lint-staged` ayudan a mantener un código organizado y limpio.
- **Fomentar buenas prácticas:** Refuerza conceptos como separación de capas y manejo de dependencias en proyectos complejos.
- **Escalabilidad:** La estructura facilita agregar nuevas funcionalidades sin comprometer la integridad del sistema.
- **Facilidad de mantenimiento:** La arquitectura permite mantener el código limpio y organizado, lo que facilita la actualización y mantenimiento del proyecto.

## 📂 Estructura del Proyecto

```text
/root
  ├── core
  │   ├── technicalTests
  │   │   ├── __mock__
  │   │   ├── domain
  │   │   |   ├── models
  │   │   │   ├── repository
  │   │   │   └── ...
  │   │   ├── application
  │   │   |   ├── __test__
  │   │   |   ├── services
  │   │   │   └── ...
  │   │   └──  infrastructure
  │   │      ├── __test__
  │   │      ├── data
  │   │      │   ├── markdown
  │   │      │   ├── constants
  │   │      │   └── ...
  │   │      ├── utils
  │   │      ├── localDataRepository
  │   │      ├── LocalMarkdownRepository
  │   │      ├── axiosRepository
  │   │      └── ...
  │   └── ...
  ├── infrastructure
  │   ├── views
  │   │   ├── next
  │   │   │   └── ...
  │   │   ├── astro
  │   │   │   └── ...
  │   │   └── ...
  ├── ...settings
  └── README.md
```

## 🌟 Principales Conceptos Aplicados

1. Arquitectura Hexagonal
   - Define adaptadores específicos para interactuar con el entorno externo.
2. Domain Driven Design (DDD)
   - Lógica de negocio y entidades modeladas con claridad.
3. Configuración Avanzada
   - Integración de ESLint y Prettier.
   - Uso de Husky y lint-staged para formateo automático en pre-commits y pre-push.

## 💡 Ejemplo de Implementación

A continuación, se muestra cómo implementar la funcionalidad para listar las pruebas técnicas (`technicalTests`) almacenadas en un archivo local.

```text
/root
  ├── core
  │   ├── technicalTests
  │   │   ├── __mock__
  │   │   ├── domain
  │   │   |   ├── technicalTest.ts
  │   │   │   └── technicalTestRepository.ts
  │   │   ├── application
  │   │   |   ├── __test__
  │   │   |   └── technicalTestService.ts
  │   │   └──  infrastructure
  │   │      ├── __test__
  │   │      ├── data
  │   │      │   └── index.ts
  │   │      └── localTechnicalTest.repository.ts
  |   └── ...
  └── ...
```

```typescript
// technicalTestRepository.ts
import { type Language } from '@core/locale/domain'
import { type Params } from '@core/shared/domain'

import { type TechnicalTest } from './technicalTest'

export type TechnicalTestRepository = {
  getAll: (params: Params & { lang: Language }) => Promise<TechnicalTest[]>
}
```

```typescript
// technicalTestService.ts
import { sortArray } from '@core/shared/utils/sortArray'
import { sortSkills } from '@core/skills/domain/sortSkills'

import { type TechnicalTest } from '../domain/technicalTest'
import { type TechnicalTestRepository } from '../domain/technicalTestRepository'

export const technicalTestService = (repository: TechnicalTestRepository): TechnicalTestRepository => ({
  getAll: async (params) => {
    const tests = await repository.getAll(params)
    const sortedTests = sortArray<TechnicalTest>(tests, 'order', params.order)
    const sortedSkills = sortedTests.map((test) => ({ ...test, skills: sortSkills(test.skills) }))
    return sortedSkills
  },
})
```

```typescript
// localTechnicalTest.repository.ts
import { DEFAULT_LANG } from '@core/locale/domain'

import { type TechnicalTestRepository } from '../domain/technicalTestRepository'
import { TechnicalTests } from './data'

export const localTechnicalTest = (): TechnicalTestRepository => ({
  getAll: async (params) => {
    const lang = params?.lang ?? DEFAULT_LANG
    return Promise.resolve(TechnicalTests[lang])
  },
})
```

### llamada al servicio (sin importar el framework ui)

```typescript
import { technicalTestService } from '@core/technicalTests/application/technicalTestService'
import { localTechnicalTest } from '@core/technicalTests/infrastructure/localTechnicalTest.repository'

async function fetchTechnicalTests() {
  try {
    const technicalTests = await technicalTestService(localTechnicalTest()).getAll({ lang: 'es' })
    console.log('Pruebas Técnicas:', technicalTests)
    return technicalTests
  } catch (error) {
    console.error('Error al obtener las pruebas técnicas:', error)
  }
}

fetchTechnicalTests()
```

## 🔧 Configuración del Proyecto

### Requisitos

- Node.js >= 18.x
- **npm** ó **yarn** ó **pnpm** (Recomendado)

### instalacion

- Clona el repositorio:

```bash
    git clone https://github.com/cavargasl/portfolio
    cd portfolio
```

- Instala las dependencias en el directorio raíz:

```bash
    pnpm install
```

- Configura las dependencias del frontend:

```bash
    cd infrastructure/views/next
    'or' cd infrastructure/views/astro
    pnpm install
```

## 🚀 Ejecución

```bash
    cd infrastructure/views/next
    'or' cd infrastructure/views/astro
    pnpm dev
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un issue o enviar un pull request.  
Asegúrate de seguir las mejores prácticas de desarrollo y respetar las configuraciones establecidas en el proyecto.

1. **Fork** este repositorio.
2. Crea una **rama** para tu feature o corrección de bug (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y asegura que el código pase las verificaciones automáticas.
4. Envía tu **pull request** para revisión.

¡Gracias por contribuir y ayudar a mejorar este proyecto! 🚀

## 📝 Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE.md).
