# El Consejo de las Cien Miradas

> Sistema Digital de Investigación Filosófica y Experiencia Web Interactiva ante la Inteligencia Artificial y la Técnica.

## Descripción

**El Consejo de las Cien Miradas** reúne el pensamiento de 100 autores y tradiciones universales (presocráticos, Grecia clásica, filosofías asiáticas —daoísmo, budismo, vedanta, zen—, pensamiento islámico, africano, medieval, ilustración, crítica moderna y contemporánea) para examinar los dilemas de la automatización algorítmica, la delegación noética y la preservación de la autonomía humana.

## Módulos y Arquitectura

1. **Prólogo Narrativo**: Manifiesto y fundamentación ética sin clichés futuristas, con una dirección de arte editorial cálida (*pergamino, terracota, bronce y tinta*).
2. **Atlas de Pensadores**: 100 fichas estructuradas con filtros facetados por época, tradición, postura técnica y nivel de preocupación.
3. **Dossiers Hermenéuticos**: Distinción transparente entre citas directas, extrapolaciones rigurosas y límites históricos situados.
4. **10 Salas de Consejo**: Debates dialécticos cruzados (Tesis, Antítesis y Síntesis de Autonomía).
5. **Mapa de Dependencia Multidimensional**:
   - Modelo de Doble Eje: *Eje de Competencia (Dependencia de Capacidad)* vs. *Eje de Poder (Dependencia Infraestructural y Subordinación)*.
   - Evidencia empírica contemporánea (Bastani et al., Noy & Zhang, Brynjolfsson et al., Vaccaro et al.).
   - Cadena formal de responsabilidad noética.
6. **Laboratorio de Decisiones y Calibración**:
   - Simulador con selector de modo (*Modo Tutor Socrático con andamiaje* vs. *Modo Respuesta Directa con alerta de atrofia*).
   - Evaluación de Confianza Calibrada (aceptación de aciertos $\ge 80\%$ y rechazo de errores $\ge 80\%$).
7. **Constitución Mínima y Manifiesto**: Carta de Autonomía Humana de 5 artículos y 3 principios normativos exportable en JSON y texto.

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar suite de validación de datos
npm test

# Iniciar servidor de desarrollo local
npm run dev

# Compilar para producción
npm run build
```

## Estructura del Repositorio

- `SYSTEM_SPEC.md`, `RESEARCH_SPEC.md`, `CONTENT_SCHEMA.md`, `TEST_SPEC.md`, `TASK_PLAN.md`, `SOURCE_POLICY.md`: Contratos de calidad y especificaciones.
- `data/`: Datasets JSON estructurados (`thinkers.json`, `councils.json`, `dependency_matrix.json`, `decision_lab.json`, `manifesto.json`).
- `src/`: Código fuente React 18, Vite y Tailwind CSS.
- `scripts/`: Scripts de validación automatizada (`verify_system.js`).