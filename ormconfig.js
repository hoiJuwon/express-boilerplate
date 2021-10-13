module.exports = {
   "type": "postgres",
   "host": process.env.DB_HOST,
   "port": +process.env.DB_PORT,
   "username": process.env.DB_USERNAME,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_TABLENAME,
   "synchronize": true,
   "logging": false,
   "entities": [
     "build/**/*/entity/**/*.js"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
