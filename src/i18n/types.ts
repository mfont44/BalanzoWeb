export type PrivacySection = {
  title: string;
  body: string[];
};

export type WebDictionary = {
  localeLabel: string;
  appName: string;
  nav: {
    privacy: string;
    support: string;
    language: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    playStore: string;
    appStore: string;
  };
  features: {
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  screenshots: {
    title: string;
    placeholders: string[];
  };
  support: {
    title: string;
    description: string;
  };
  privacyPage: {
    title: string;
    intro: string;
    updatedAt: string;
    sections: PrivacySection[];
  };
};
