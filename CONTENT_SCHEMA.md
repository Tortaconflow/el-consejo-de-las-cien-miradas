# CONTENT_SCHEMA.md: Esquema de Datos y Contratos de Contenido

### 1. Esquema JSON de Pensadores (100 Voces)
\\\json
{
  "\": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": [
    "id",
    "nombre",
    "tradicion",
    "region",
    "epoca",
    "conceptos_centrales",
    "metafora_para_comprender_la_ia",
    "pregunta_inicial",
    "fascinacion",
    "preocupacion",
    "limite_historico",
    "interpretacion",
    "tipo_de_afirmacion",
    "fuentes",
    "postura_tecnica",
    "nivel_preocupacion",
    "problema_etico_principal"
  ],
  "properties": {
    "id": { "type": "string" },
    "nombre": { "type": "string" },
    "tradicion": { "type": "string" },
    "region": { "type": "string" },
    "epoca": { "type": "string" },
    "conceptos_centrales": { "type": "array", "items": { "type": "string" } },
    "metafora_para_comprender_la_ia": { "type": "string" },
    "pregunta_inicial": { "type": "string" },
    "fascinacion": { "type": "string" },
    "preocupacion": { "type": "string" },
    "limite_historico": { "type": "string" },
    "interpretacion": { "type": "string" },
    "tipo_de_afirmacion": { "type": "string", "enum": ["textual_directa", "extrapolacion_rigurosa", "analogia_epocal"] },
    "fuentes": { "type": "array", "items": { "type": "string" } },
    "postura_tecnica": { "type": "string", "enum": ["Tecnófilo / Integrado", "Crítico / Escéptico", "Trascendental / Humanista", "Instrumentalista", "Descolonial / Comunitario"] },
    "nivel_preocupacion": { "type": "string", "enum": ["Bajo", "Moderado", "Alto", "Existencial"] },
    "problema_etico_principal": { "type": "string" }
  }
}
\\\

### 2. Esquema de Salas de Consejo (10 Debates)
- **id**: Identificador de la sala (1 a 10).
- **titulo**: Título temático del debate.
- **dilema_central**: El conflicto ético u ontológico.
- **voces_principales**: Lista de IDs de pensadores participantes.
- **posiciones**:
  - Tesis afirmativas / optimistas.
  - Antítesis / objeciones críticas.
  - Síntesis / vías de autonomía.
- **alianzas_y_desacuerdos**: Matriz de tensiones conceptuales.

### 3. Esquema del Mapa de Dependencia
- **Fases**: Ayuda -> Hábito -> Delegación -> Dependencia -> Subordinación -> Pérdida de Capacidad.
- **Dimensiones**: Cognitiva, Emocional, Educativa, Económica, Política, Creativa, Cultural.
- **Indicadores y Contramedidas por Dimensión**.