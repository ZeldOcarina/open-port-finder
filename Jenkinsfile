pipeline {
    agent any
    stages {
        stage('Prepare environment') {
            steps {
                echo 'TODO: Log env'
            }
        }
        stage('Install dependencies') {
            steps {
                sh "yarn install" 
            }
        }
        stage('Create NGINX configuration file') {
            steps {
                echo 'Create NGINX configuration file'
                script {
                    AVAILABLE_PORT = sh (
                        script: 'node app.js',
                        returnStdout: true
                    ).trim()
                    echo "Available port: ${AVAILABLE_PORT}"
                }
            }
        }
    }
}