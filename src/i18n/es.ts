import type { WebDictionary } from "./types";

const es: WebDictionary = {
  localeLabel: "Español",
  appName: "Balanzo",
  nav: {
    privacy: "Política de privacidad",
    support: "Soporte",
    language: "Idioma",
  },
  hero: {
    badge: "Control inteligente de gastos compartidos",
    title: "Cuentas claras, sin fricciones",
    subtitle:
      "Balanzo te ayuda a gestionar grupos, registrar gastos y cerrar balances de forma simple y transparente.",
    playStore: "Descargar en Google Play",
    appStore: "Descargar en App Store",
  },
  features: {
    title: "¿Por qué Balanzo?",
    items: [
      {
        title: "Reparto automático",
        description:
          "Calcula quién debe pagar a quién en segundos, evitando errores manuales.",
      },
      {
        title: "Grupos y participantes",
        description:
          "Organiza viajes, pisos compartidos o equipos con una vista clara de cada gasto.",
      },
      {
        title: "Resumenes claros",
        description:
          "Visualiza el estado del grupo y toma decisiones con datos faciles de entender.",
      },
    ],
  },
  screenshots: {
    title: "Vista de la app",
    placeholders: [
      "Panel del grupo",
      "Lista de gastos",
      "Resumen de pagos",
      "Detalle de gasto",
      "Balance del grupo",
      "Perfil del grupo",
    ],
  },
  support: {
    title: "Contacto y soporte",
    description:
      "Si tienes dudas, incidencias o sugerencias, escribenos y te responderemos lo antes posible.",
  },
  privacyPage: {
    title: "Política de privacidad",
    intro:
      "Esta política explica cómo Balanzo trata los datos personales cuando utilizas la aplicación y la web.",
    updatedAt: "Última actualización: 22 de abril de 2026",
    sections: [
      {
        title: "1. Responsable del tratamiento",
        body: [
          "Responsable: Balanzo (Itinerari Apps).",
          "Contacto: itinerariapps@gmail.com.",
          "Balanzo actúa como responsable del tratamiento de los datos personales vinculados al servicio.",
        ],
      },
      {
        title: "2. Datos que recopilamos",
        body: [
          "Datos de cuenta: correo electrónico y contraseña (único método de autenticación), identificadores de perfil y preferencias básicas.",
          "Datos de uso: grupos, gastos, participaciones e historial necesario para el funcionamiento de la app.",
          "Datos de terceros: al introducir datos de terceras personas (por ejemplo, para añadir miembros a un grupo o asignar gastos), el usuario garantiza que dispone del consentimiento previo de dichas personas para facilitar su información a Balanzo.",
          "Datos técnicos: información de dispositivo, logs mínimos de seguridad y diagnóstico.",
        ],
      },
      {
        title: "3. Finalidades y base legal",
        body: [
          "Prestación del servicio y ejecución del contrato de uso de Balanzo.",
          "Mantenimiento, seguridad y prevención del fraude bajo interés legítimo.",
          "Comunicaciones de soporte e incidencias, incluyendo respuesta a consultas de usuarios.",
        ],
      },
      {
        title: "4. Conservación de datos",
        body: [
          "Conservamos los datos mientras la cuenta esté activa o sea necesario para prestar el servicio.",
          "Si solicitas la supresión de la cuenta, eliminaremos o anonimizaremos los datos conforme a las obligaciones legales aplicables.",
        ],
      },
      {
        title: "5. Destinatarios y proveedores",
        body: [
          "No vendemos datos personales a terceros.",
          "Utilizamos Supabase como proveedor tecnológico principal para el alojamiento de la base de datos, la infraestructura y la autenticación de los usuarios.",
          "Nuestros proveedores tecnológicos tratan los datos bajo estrictas instrucciones de Balanzo y mediante contratos de encargado de tratamiento adecuados.",
        ],
      },
      {
        title: "6. Transferencias internacionales",
        body: [
          "Algunos proveedores pueden estar ubicados fuera del Espacio Económico Europeo.",
          "Cuando ocurra, aplicaremos las garantías legales adecuadas (por ejemplo, cláusulas contractuales tipo aprobadas por la Comisión Europea).",
        ],
      },
      {
        title: "7. Derechos de las personas usuarias y Eliminación de datos",
        body: [
          "Eliminación de cuenta y datos: los usuarios pueden borrar sus datos y eliminar su cuenta de forma definitiva siempre que lo deseen, directamente a través de las opciones de configuración dentro de la aplicación.",
          "Otros derechos: puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad en cualquier momento. También puedes retirar los consentimientos otorgados cuando sea aplicable.",
          "Para ejercer tus derechos o realizar consultas, escribe a itinerariapps@gmail.com.",
        ],
      },
      {
        title: "8. Seguridad de los datos",
        body: [
          "Aplicamos medidas técnicas y organizativas adecuadas para proteger los datos personales contra el acceso no autorizado, la pérdida, la alteración o la divulgación indebida.",
          "Entre estas medidas se incluyen, entre otras: control de acceso a la información según el perfil de usuario, autenticación de usuarios, políticas de seguridad en la base de datos y transmisión de datos mediante canales seguros.",
          "También revisamos y actualizamos periódicamente estas medidas para mantener un nivel de seguridad adecuado de acuerdo con el estado de la tecnología y la naturaleza de los datos tratados.",
        ],
      },
      {
        title: "9. Menores de edad",
        body: [
          "Balanzo no está dirigida a menores de 14 años.",
          "Si detectamos que hemos recopilado datos de menores sin la base legal adecuada, procederemos a eliminarlos lo antes posible.",
        ],
      },
      {
        title: "10. Cambios en esta política",
        body: [
          "Podemos actualizar esta política para reflejar cambios legales o funcionales del servicio.",
          "Publicaremos la versión vigente en esta misma página indicando siempre la fecha de la última actualización.",
        ],
      },
    ],
  },
};

export default es;
