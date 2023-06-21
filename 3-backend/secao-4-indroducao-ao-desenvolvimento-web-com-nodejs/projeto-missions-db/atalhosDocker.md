### Comando para copiar o script para dentro do docker:
docker cp ./script.sql id_do_container:/

### comando para rodar o script dentro do container:
docker exec id_do_container /bin/sh -c 'mysql -uroot -proot </script.sql'

### comando para verificar se a execução do banco de dados foi bem sucedida:
docker exec -it _id_do_container mysql -uroot -proot