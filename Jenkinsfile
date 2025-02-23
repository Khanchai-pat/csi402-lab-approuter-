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
                print 'Building Image'
                script{
                    bat "docker build -t csi402abapprouter ."
                    print 'Building Image Success'
                
                }
                script{
                    bat "docker rm -f csi402abapprouter-run || true"
                    bat "docker run -d --name csi402abapprouter-run -p 2500:3000 csi402abapprouter:latest"
                    print 'Docker Image to Running Container Success'
                }
            }
        }
        stage('test') {
            steps {
                print 'Testing'
            }
        }
    }
}