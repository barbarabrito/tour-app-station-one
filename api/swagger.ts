const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'tour-app API',
    description: 'API de um app onde um usuário pode consultar informações a respeito da cidade e dos seus respectivos pontos turísticos/restaurantes/hotéis.',
    contact:{
    email:"barbaramabrito@gmail.com"
    }
  },
  host: 'tour-app-1yrh.onrender.com',
  schemes: ['https'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  },
  definitions:{
    User:{
      $email: 'user@example.com',
      $name: 'User',
      $password: '12345678',
      $passwordConfrimation:'12345678'
    },
    Cities:{
      $name: '',
      $tours: [{
        $name:'',
        $address:'',
        $photo:''
      }],
      $restaurants: [{
        $name:'',
        $address:'',
        $phone:'',
        $photo:''
      }],
      $hotels: [{
        $name:'',
        $address:'',
        $phone:'',
        $photo:''
      }],
      $photo:''
    },
  },
  defAddUser: [{ $ref: '#/definitions/User' }],
  defCities: [{ $ref: '#/definitions/Cities' }],
};

const outputFile = './swagger.json';

const endpointsFiles = ['./src/routes.ts'];


swaggerAutogen(outputFile, endpointsFiles, doc);