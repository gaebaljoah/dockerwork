## UTF-8 설정확인
```sh
SHOW VARIABLES LIKE 'character_set_%';
```

## docker mysql volume

- 도커 컨테이너에서 실행되고 있는 mysql 데이터들이 적재되는 곳.
- 컨테이너 종료 시 삭제되고 컨테이너 재시작 시 새로운 볼륨이 생성된다.
- 그래서 host 시스템에 폴더를 생성하여 컨테이너 환경속에 볼륨으로 연결해준다.
```sh
docker run -d -v C:\dev\docker\Docker_Lab\ex05\mysql-volume:/var/lib/mysql -p 3307:3306 --name mysql-container mysql-image

docker run -d -v {볼륨을 저장할 호스트 저장소}:{컨테이너 볼륨 저장소} -p {host port : container server port} --name {설정할 컨테이너명} {실행시킬 이미지}
```

### volume을 저장하는 다른 방식
- host 폴더에 저장하는 것이 아닌 컨테이너 안 volume에 이름을 지정하여 저장하기.
```sh
docker run -d -v mysql-volume:/var/lib/mysql -p 3307:3306 --name mysql-container mysql-image

docker run -d -v {컨테이너에 저장할 volume명}:{컨테이너 볼륨 저장소} -p {host port : container server port} --name {설정할 컨테이너명} {실행시킬 이미지}
```

## 이름이 있는 볼륨 사용법
```sh
docker run -d -v {저장된 볼륨명}:{컨테이너 볼륨 저장소} -p {host port}:{server port} --name {컨터이너명} {이미지명}
```

## 궁금한점..?
- 컨테이너 속 저장소는 왜 계속 같은 곳으로 지정되는 것인지 저장소의 상태 계속 확인해보면서 더 알아보자.