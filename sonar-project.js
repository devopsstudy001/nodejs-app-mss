const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://3.91.36.69:9000/',
    token: "squ_f26b284073361a3cc483109742ae4b38fd5efd96",
    options: {
      'sonar.projectName': 'Node JS Application - Sample',
      'sonar.projectKey': 'NodeJsMithunTechnologies',
      'sonar.projectVersion': '1.0',
      'sonar.sources': 'src',
      'sonar.language': 'js',
      'sonar.sourceEncoding': 'UTF-8',
    },
  },
  () => process.exit()
);
