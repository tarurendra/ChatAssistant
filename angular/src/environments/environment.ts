import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44381/',
  redirectUri: baseUrl,
  clientId: 'ChatAssistant_App',
  responseType: 'code',
  scope: 'offline_access ChatAssistant',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'ChatAssistant',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44381',
      rootNamespace: 'ChatAssistant',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  geminiApiKey: '',
} as Environment;
