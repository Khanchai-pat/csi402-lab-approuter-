pipeline {
    agent any
    stages {  
        stage('Check Out') { 
            steps {
                print 'Check Out'
                checkout([
                $class: 'GitSCM', 
                branches: [[name: '*/main']], 
                userRemoteConfigs: [ [ 
                credentialsId: 'KHANCHAI', 
                url: "https://github.com/Khanchai-pat/csi402-lab-approuter-.git"
                ] ]
                ])
            }
        }
        stage('Build') { 
            steps {
                print 'Building'
                bat "docker build -t csi402abapprouter"
                bat "docker run -d --name CSI403L -p 2500:3000 CSI403L:latest"
            }
        }
        stage('test') {
            steps {
                print 'Testing'
            }
        }
    }
}