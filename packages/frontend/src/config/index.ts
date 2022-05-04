export interface IAppConfig {
    env: string;
    backend: {
      url: string;
      apiKey: string | undefined;
    };
  
  }
  
  const config: IAppConfig = {
    env: process.env.NODE_ENV || 'local',
    backend: {
      url: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://localhost:1337',
      apiKey: process.env.NEXT_PUBLIC_BACKEND_API_KEY,
    }
  
  };
  
  export default config;