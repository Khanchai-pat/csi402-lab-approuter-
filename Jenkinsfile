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
                print 'Building and Deploying'
            }
        }
        stage('test') {
            steps {
                print 'Testing'
            }
        }
    }
}