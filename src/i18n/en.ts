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
      "Expense detail",
      "Group balance",
      "Group profile",
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
          "Account data: email address and password (the only authentication method), profile identifiers, and basic preferences.",
          "Usage data: groups, expenses, participations, and history required for app operation.",
          "Third-party data: when entering third-party personal data (for example, to add members to a group or assign expenses), users guarantee they have prior consent from those individuals to provide their information to Balanzo.",
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
          "We use Supabase as our main technology provider for database hosting, infrastructure, and user authentication.",
          "Our technology providers process data under strict Balanzo instructions and through appropriate data processing agreements.",
        ],
      },
      {
        title: "6. International transfers",
        body: [
          "Some providers may be located outside the European Economic Area.",
          "When this occurs, we apply appropriate legal safeguards (for example, Standard Contractual Clauses approved by the European Commission).",
        ],
      },
      {
        title: "7. User rights and data deletion",
        body: [
          "Account and data deletion: users can permanently delete their data and remove their account whenever they wish, directly through the in-app settings options.",
          "Other rights: you may exercise your rights of access, rectification, erasure, objection, restriction, and portability at any time. You may also withdraw consent where applicable.",
          "To exercise your rights or make inquiries, contact itinerariapps@gmail.com.",
        ],
      },
      {
        title: "8. Data security",
        body: [
          "We apply appropriate technical and organizational measures to protect personal data against unauthorized access, loss, alteration, or improper disclosure.",
          "These measures include, among others: access control based on user profile, user authentication, database security policies, and data transmission through secure channels.",
          "We also review and update these measures periodically to maintain an adequate level of security according to the state of technology and the nature of the data processed.",
        ],
      },
      {
        title: "9. Children",
        body: [
          "Balanzo is not intended for children under 14 years old.",
          "If we detect that we have collected child data without an appropriate legal basis, we will delete it as soon as possible.",
        ],
      },
      {
        title: "10. Changes to this policy",
        body: [
          "We may update this policy to reflect legal, technical, or product changes.",
          "We will publish the current version on this same page, always indicating the date of the latest update.",
        ],
      },
    ],
  },
};

export default en;
