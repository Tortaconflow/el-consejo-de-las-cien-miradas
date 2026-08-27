# SYSTEM_SPEC.md: Especificación del Sistema
## El Consejo de las Cien Miradas — Sistema Digital de Investigación Filosófica y Experiencia Web

### 1. Objetivo Intelectual
Transformar la polifonía del pensamiento humano universal (100 pensadores de todas las geografías y épocas históricas) en un sistema interactivo de examen crítico ante la Inteligencia Artificial, la automatización cognitiva y la degradación de la autonomía humana.

### 2. Usuarios Objetivo
- **Investigadores y Docentes**: Acceso a taxonomías cruzadas, fuentes filosóficas, análisis comparativo y límites hermenéuticos.
- **Estudiantes y Humanistas**: Exploración pedagógica de conceptos clásicos confrontados con dilemas contemporáneos de la técnica.
- **Desarrolladores y Diseñadores de IA**: Reflexión crítica sobre las consecuencias existenciales, éticas y políticas de la delegación tecnológica.
- **Público General / Ciudadanía Digital**: Concientización sobre la escala de dependencia y evaluación socrática en el Laboratorio de Decisiones.

### 3. Principios de Diseño y Estética Visual
- **Rechazo al cliché "Sci-Fi Azul Neón / Cyberpunk"**: La experiencia adopta una dirección de arte humanista, sobria y atemporal: tonos marfil, pergamino cálido (#FAF8F5), carbón suave (#1A1918), acentos en terracota (#9E472A), bronce antiguo (#A67C52) y tintas profundas.
- **Tipografía Editorial**: Jerarquía clara con tipografías serif clásicas/humanistas (Garamond, Merriweather, Georgia) para citas y narrativas, combinadas con sans-serif limpias y legibles para controles y datos estructurados.
- **Navegación Fluida y Reactiva**: Arquitectura modular con transiciones sutiles, microinteracciones significativas y visualización en grafos/matrices sin saturación.

### 4. Arquitectura Tecnológica
- **Motor Web**: React 18 + Vite (SPA rápida, modular y autocontenida).
- **Estilos y Layout**: Tailwind CSS + Custom Typography & Theme variables.
- **Iconografía**: Lucide React Icons (semántica y liviana).
- **Almacenamiento de Datos**: Archivos JSON estructurados e inmutables en cliente (thinkers.json, councils.json, dependency_matrix.json, manifesto.json).
- **Accesibilidad**: Cumplimiento estricto WCAG 2.1 nivel AA (contraste mínimo 4.5:1, etiquetas ARIA, gestión de foco por teclado y compatibilidad con lectores de pantalla).

### 5. Estructura de Módulos
1. Hero & Narrative Intro (Prólogo Inmersivo)
2. Atlas of Thinkers (Explorador faceteado de 100 voces + vista de constelación)
3. Thinker Modal / Dossier (Ficha profunda con citas, advertencias epistemológicas y debates)
4. Council Chambers (10 Salas de debate temático: posturas, alianzas y desacuerdos)
5. Dependency Escalation Map (Visualizador de 6 fases y 7 dimensiones de degradación)
6. Decision Laboratory (Simulador socrático de delegación de tareas a la IA)
7. Constitution & Manifesto (Cartas éticas de autonomía y exportación documental)

### 6. Criterios de Finalización y Calidad
- 100/100 registros con integridad validada por script automatizado.
- 0 advertencias de accesibilidad críticas.
- Ejecución local libre de errores en consola.