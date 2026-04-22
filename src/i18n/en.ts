import type { WebDictionary } from "./types";

const en: WebDictionary = {
  localeLabel: "English",
  appName: "Balanzo",
  nav: {
    privacy: "Privacy Policy",
    support: "Support",
    language: "Language",
  },
  hero: {
    badge: "Smart shared expense control",
    title: "Clear balances, less friction",
    subtitle:
      "Balanzo helps you manage groups, track expenses, and settle balances with a simple and transparent experience.",
    playStore: "Download on Google Play",
    appStore: "Download on App Store",
  },
  features: {
    title: "Why Balanzo?",
    items: [
      {
        title: "Automatic settlement",
        description:
          "Compute who pays whom in seconds and avoid manual mistakes.",
      },
      {
        title: "Groups and participants",
        description:
          "Organize trips, flatmates, or team expenses with full visibility.",
      },
      {
        title: "Actionable summaries",
        description:
          "Understand your group status quickly and make better decisions.",
      },
    ],
  },
  screenshots: {
    title: "App preview",
    placeholders: [
      "Group dashboard",
      "Expense list",
      "Payment summary",
    ],
  },
  support: {
    title: "Contact and support",
    description:
      "If you have questions, issues, or ideas, write to us and we will get back to you as soon as possible.",
  },
  privacyPage: {
    title: "Privacy Policy",
    intro:
      "This policy explains how Balanzo processes personal data when you use the app and website.",
    updatedAt: "Last updated: April 22, 2026",
    sections: [
      {
        title: "1. Data controller",
        body: [
          "Controller: Balanzo (Itinerari Apps).",
          "Contact: itinerariapps@gmail.com.",
          "Balanzo acts as the data controller for personal data linked to the service.",
        ],
      },
      {
        title: "2. Data we collect",
        body: [
          "Account data: email address, profile identifiers, and core preferences.",
          "Usage data: groups, expenses, participations, and history required for app operation.",
          "Technical data: device information and minimal security/diagnostic logs.",
        ],
      },
      {
        title: "3. Purposes and legal basis",
        body: [
          "Service delivery and performance of the Balanzo terms.",
          "Security, maintenance, and fraud prevention under legitimate interest.",
          "Support and incident communications, including responses to user requests.",
        ],
      },
      {
        title: "4. Data retention",
        body: [
          "We retain data while your account is active or as needed to provide the service.",
          "If you request account deletion, we will delete or anonymize data subject to legal obligations.",
        ],
      },
      {
        title: "5. Recipients and processors",
        body: [
          "We do not sell personal data.",
          "We may use technology providers for hosting, analytics, and infrastructure required to run Balanzo.",
          "These providers process data under Balanzo instructions and proper agreements.",
        ],
      },
      {
        title: "6. International transfers",
        body: [
          "Some providers may be located outside the European Economic Area.",
          "When applicable, we implement appropriate safeguards, such as Standard Contractual Clauses.",
        ],
      },
      {
        title: "7. User rights",
        body: [
          "You may exercise rights of access, rectification, erasure, objection, restriction, and portability.",
          "You may also withdraw consent where processing is based on consent.",
          "To exercise rights, contact itinerariapps@gmail.com.",
        ],
      },
      {
        title: "8. Children",
        body: [
          "Balanzo is not intended for children under 14 years old.",
          "If we detect child data without legal basis, we will remove it promptly.",
        ],
      },
      {
        title: "9. Changes to this policy",
        body: [
          "We may update this policy to reflect legal, technical, or product changes.",
          "The current version will always be available on this page with its update date.",
        ],
      },
    ],
  },
};

export default en;
