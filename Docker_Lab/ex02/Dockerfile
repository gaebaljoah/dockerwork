FROM ubuntu

RUN apt-get update
RUN apt-get install -y nginx
#-y 물음에 yes로 대답한다는 뜻 안넣으면 이미지 굽다가 정지됨.

WORKDIR /var/www/html

COPY ./webapp/index.html ./index.nginx-debian.html
#현재 폴더에서 webapp아래의 파일을 WORKDIR에서 설정한 경로에 copy 한다는 뜻 

ENTRYPOINT ["nginx", "-g", "daemon off;"]
#nginx는 daemon off(백그라운드에서 실행하면 컨테이너가 바로 종료되어버림 
#그래서 daemon off; 커맨드를 사용하여 fore-ground로 실행하여아한다.)
