// vite.config.ts
import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig): UserConfig => {
  return mergeConfig(config, {
    server: {
      // Listen on all network interfaces
      host: '0.0.0.0',
      // Allow connections from your EC2 hostname.
      // For testing purposes you can also use "allowedHosts: 'all'" but it is less secure.
      allowedHosts: ['ec2-18-171-162-180.eu-west-2.compute.amazonaws.com'],
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
