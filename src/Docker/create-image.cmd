docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss13/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss13/app ../..
