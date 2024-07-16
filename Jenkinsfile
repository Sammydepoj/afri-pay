pipeline {
  agent any
  environment {
    VITE_APP_BASE_URL = "${VITE_APP_BASE_URL}"
    VITE_APP_ENCRYPTION_SECRET_KEY = "${VITE_APP_ENCRYPTION_SECRET_KEY}"
  }
  stages {
    stage('build') {
      steps {
        sh '''
          docker build -t afripay-frontend-docker:latest .
        '''
      }
    }
    stage('remove-old') {
      steps {
        script {
                sh 'docker rm -f afripay-frontend-service'
        }
      }
    }
    stage('run') {
      steps {
        sh """
          docker run -d --restart always -p 5050:80 \
          -e TZ=Africa/Lagos \
          -e VITE_APP_BASE_URL=${VITE_APP_BASE_URL} \
          -e VITE_APP_ENCRYPTION_SECRET_KEY=${VITE_APP_ENCRYPTION_SECRET_KEY} \
         --name afripay-frontend-service afripay-frontend-docker
        """
      }
    }
    stage('debug') {
      steps {
        sh 'printenv'
      }
    }
  }
}
