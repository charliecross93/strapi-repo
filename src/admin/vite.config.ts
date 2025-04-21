// src/admin/vite.config.ts
import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig): UserConfig => {
  return mergeConfig(config, {
    base: '/admin/',
    server: {
      host: '0.0.0.0',
      // allow your EC2 hostname & the staging domain
      allowedHosts: [
        'ec2-18-171-162-180.eu-west-2.compute.amazonaws.com',
        'staging.fishplanner.com'
      ],
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
