pipeline{
    agent any
    stages{

        stage("Build"){
            steps{
                sh 'docker build --tag fipolio_backend .'
            }
        }
        stage("Push"){
            steps{
                sh 'docker tag fipolio_backend tephens03/fipolio-backend '
                sh 'docker push tephens03/fipolio-backend'
            }
        }
        stage("Clean up"){
            steps{
                sh 'docker stop fipolio_backend || true && docker rm fipolio_backend || true'
                sh 'docker rm fipolio_backend || true && docker rm fipolio_backend || true'
            }
        }

        stage("Run"){
            steps{
                sh 'docker run -d -p 5002:5002 --name fipolio_backend fipolio_backend'
            }
        }




            
    }
}