const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    swagger: 2.0,
    openapi: '3.0.0',
    info: {
      title: 'Blogs API',
      description: 'Blog posts information',
      contact: {
        name: 'Fellipe Horta',
      },
      version: '1.0.0',
    },
    servers: [
        {
          url: 'http://localhost:3005',
          description: 'API de teste',
        },
      ],
    paths: {
      '/user': {
        post: {
          summary: 'Cadastro de usuário',
          description: 'Essa rota será responsável por cadastrar um novo usuário',
          tags: ['Users'],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User',
                },
                examples: {
                  user: {
                    value: {
                      displayName: 'Zézinho Xablau',
                      email: 'zezinhoteste@test.com',
                      password: '123Xablau321@test',
                      image: '',
                    },
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: 'User sucessfully created.',
            },
            400: {
              description: 'Invalid name or email format.',
            },
            409: {
              description: 'User already registered.',
            },
          },
        },
        get: {
          description: 'Retorna todos os usuários cadastrados',
          summary: 'Retorna todos os usuários cadastrados',
          tags: ['Users'],
          security: [{
            bearerAuth: [],
          }],
          responses: {
            200: {
              description: 'OK',
            },
            401: {
              description: 'Unauthorized, token not found.',
            },
          },
        },
      },
      '/user/{id}': {
        get: {
          description: 'Retorna o usuário cadastrado, por id',
          summary: 'Retorna o usuário cadastrado, por id',
          tags: ['Users'],
          parameters: [{
            name: 'id',
            in: 'path',
            description: 'Número do id para busca',
            required: true,
          }],
          security: [{
            bearerAuth: [],
          }],
          responses: {
            200: {
              description: 'OK',
            },
            401: {
              description: 'Unauthorized, token not found.',
            },
            404: {
              description: 'User does not exist.',
            },
          },
        },
      },
      '/user/me': {
        delete: {
          description: 'Deleta o usuário atual',
          summary: 'Deleta o usuário atual',
          tags: ['Users'],
          security: [{
            bearerAuth: [],
          }],
          responses: {
            204: {
              description: 'Deleted',
            },
            401: {
              description: 'Unauthorized, token not found.',
            },
            404: {
              description: 'User does not exist.',
            },
          },
        },
      },
      '/login': {
        post: {
          summary: 'Login de usuário',
          description: 'Essa rota será responsável por fazer o login de um usuário',
          tags: ['Users'],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User',
                },
                examples: {
                  user: {
                    value: {
                      email: 'zezinhoteste@test.com',
                      password: '123Xablau321@test',
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: 'OK',
            },
            400: {
              description: 'Some required fields are missing / Invalid fields.',
            },
          },
        },
      },
    },
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            displayName: {
              type: 'string',
            },
            email: {
              type: 'string',
            },
            password: {
              type: 'string',
            },
            image: {
              type: 'string',
            },
          },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          scheme: 'bearer',
          in: 'header',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsDoc(options);
module.exports = { specs };