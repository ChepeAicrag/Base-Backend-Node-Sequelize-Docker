# Base-Backend-Node-Sequelize-Docker
Base para proyectos de backend con Node js, Docker, Sequelize, PostgreSQL

### Crea tu archivo .env en este directorio
```env
PORT=8080
NODE_ENV="development"
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=base_backend
DB_HOST=db
DB_DIALECT="postgres"
DB_LOGGING=false
SEED_V='mysecrettoken'
CADUCIDAD_TOKEN='10h'
HOST_AWS=http://localhost:8080/
```
### Instala las dependencia
```
npm i
```

### Crea los contenedores la primera vez
```
docker-compose up --build
```

### Para iniciar el servidor
```
docker-compose up
```