#############################################################

# crear la base de datos
sequelize db:create

# crear modelo Student
sequelize model:generate --name Student --attributes 'user_name:string,user_last_name:string,birthday:date,active:enum:{yes,no},id_nationality:integer,id_address:integer'

#############################################################

# ejecutar migracion
sequelize db:migrate
sequelize db:migrate --to 01-create-student.js

# revertir migracion
sequelize db:migrate:undo
sequelize db:migrate:undo:all

# crear seed
sequelize seed:generate --name seed-student

# ejecutar seed
sequelize db:seed:all
sequelize db:seed --seed 01-seed-student.js