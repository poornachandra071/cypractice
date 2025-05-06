pipeline {
    agent any

    tools {
        nodejs "NodeJs_18" // Match the name set in Global Tool Config
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/poornachandra071/cypractice.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/cypress/screenshots/**/*, **/cypress/videos/**/*', allowEmptyArchive: true
        }
    }
}
