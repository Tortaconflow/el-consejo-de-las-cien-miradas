# TEST_SPEC.md: Especificación de Pruebas y Control de Calidad

### 1. Batería de Pruebas Automatizadas
Se implementa un script de test \scripts/verify_system.js\ con las siguientes aserciones:
- **Aserción 1 (Conteo exacto)**: El dataset \	hinkers.json\ contiene exactamente 100 registros.
- **Aserción 2 (Unicidad)**: Todos los \id\ son únicos y no contienen caracteres inválidos.
- **Aserción 3 (Completitud)**: Ningún campo requerido está vacío o nulo.
- **Aserción 4 (Fuentes)**: El arreglo \uentes\ contiene al menos 1 fuente válida por pensador.
- **Aserción 5 (Salas de Consejo)**: Hay exactamente 10 salas y todos los IDs referenciados existen en \	hinkers.json\.
- **Aserción 6 (Laboratorio de Decisiones)**: Todos los casos de uso tienen pensadores válidos asociados.
- **Aserción 7 (Mapa de Dependencia)**: Las 6 fases y 7 dimensiones están exhaustivamente cubiertas.

### 2. Pruebas de Interfaz y Accesibilidad (WCAG 2.1 AA)
- Contraste cromático >= 4.5:1 en textos principales.
- Foco por teclado en modales, filtros, salas y simulador.
- Responsividad móvil (375px a 1920px).