pipeline {
    agent any
    tools {
        nodejs "node"
        
    }

    stages {
        stage("get source"){
            steps {
                echo "get source code from github"
                git credentialsId: '15aa0d48-c9cf-430e-af37-9f0be4719419', url: 'https://github.com/hesai1/MangaList.git'
            }
        }
        stage('build') {
            steps {
                echo 'build vue'
                dir(".\\mangalist"){
                   sh "npm install"
                   sh "npm run build"
                }
            }
        }
        stage('deploy') {
            steps {
                echo 'deploy'
                fileOperations([folderCopyOperation(destinationFolderPath: '/var/www/html/mangalist', sourceFolderPath: './mangalist/dist')])
            }
        }
    }
}
