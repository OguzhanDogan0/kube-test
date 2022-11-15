pipeline {
    agent any
    enviroment{
        IMAGENAME = "restfuladpi"
        dockerlogin = "ogzdgn30@gmail.com"
        dockerpass = ""
    }
    stages {
        stage('Docker Build') {
            steps{
                sh 'docker images'
                sh 'docker build -t ${IMAGENAME}:latest .'
                sh 'docker images'
                sh 'docker run -d -p 80:80 ${IMAGENAME}:latest'
                sh 'docker tag ${IMAGENAME}:latest'
          }
        }

    }
}