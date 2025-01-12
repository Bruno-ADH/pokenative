module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/assets': './assets',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env', 
          path: '.env',       
          safe: true,   
          allowUndefined: false,
        },
      ],
    ],
  };

  