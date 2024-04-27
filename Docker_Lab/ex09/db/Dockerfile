FROM mysql:8.0

#docker-entrypoint-initdb.d 경로 지정시 mysql 컨테이너 실행하면 바로 시작됨
COPY init.sql /docker-entrypoint-initdb.d

ENV MYSQL_ROOT_PASSWORD=root1234
ENV MYSQL_DATABASE=metadb
ENV MYSQL_HOST=%

CMD ["--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"]
