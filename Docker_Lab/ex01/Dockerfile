FROM openjdk:11-jdk-slim
#From : 이미지를 기반으로 하여 새로운 이미지를 생성할때 FROM을 사용해 기존이미지를 지정할 수 있다.

WORKDIR /app
#workdir을 사용하면 설정한 컨테이너 경로로 접근 가능

COPY build/aws-v3-0.0.3.jar ./application.jar
#COPY {현재 디렉토리 / 파일명} {./(workdir에서 설정한 컨테이너내 경로를 뜻함 여기선 /app)컨테이너에 저장할 이름}
#ADD 압축파일.zip ./ #이렇게하면 압축이 풀린다

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=dev", "application.jar"]
#CMD와 유사하다. 
#ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=dev", "application.jar"]
#명령어 java -jar -Dspring .profiles.active=dev application.jar --server.port=8080 과 같다.
#ENTRYPOINT는 무조건 실행할 명령어를 넣어주면 좋고 CMD에는 추가적인 명령어를 넣어주는 게 좋다

CMD ["--server.port=8082"]