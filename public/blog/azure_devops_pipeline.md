# Azure Devops Pipeline

- Login to azure portal
- Create a resource group
- Create a container resource
- create a web app resource
- create a devops resource
- login to the devops repo
- clone the repo
- push your code to the repo
- setup a pipeline
- go to the settings and set parallel jobs to 1
- copy paste the below code in th pipeline-yaml
- run the job
- access the app fro the web app service url

```yaml

# Docker
# Build, test, and deploy an image to Azure Container Registry
# https://docs.microsoft.com/azure/devops/pipelines/languages/docker

trigger:
- master

resources:
- repo: self

variables:
  # Container registry service connection established during pipeline creation
  dockerRegistryServiceConnection: 'e6d51300-275a-485e-a1b0-a912c3a440c6'
  imageRepository: 'sampleproject'
  containerRegistry: 'acrfordevopsrepo.azurecr.io'
  dockerfilePath: '$(Build.SourcesDirectory)/Dockerfile'
  tag: '$(Build.BuildId)'

  # Agent VM image name
  vmImageName: 'ubuntu-latest'

stages:
- stage: Build
  displayName: 'Build Stage'
  jobs:
  - job: Build
    displayName: 'Build Job'
    pool:
      vmImage: $(vmImageName)
    steps:
    - task: Docker@2
      displayName: 'Build and push an image to container registry'
      inputs:
        command: 'buildAndPush'
        repository: $(imageRepository)
        dockerfile: $(dockerfilePath)
        containerRegistry: $(dockerRegistryServiceConnection)
        tags: |
          $(tag)

- stage: Test
  displayName: 'Test Stage'
  jobs:
  - job: Test
    displayName: 'Test Job'
    pool:
      vmImage: $(vmImageName)
    steps:
    - script: echo "Running tests..."

- stage: Deploy
  displayName: 'Deploy Stage'
  jobs:
  - job: Deploy
    displayName: 'Deploy Job'
    pool:
      vmImage: $(vmImageName)
    steps:
    - task: AzureWebAppContainer@1
      inputs:
        azureSubscription: 'Pay-As-You-Go(07639ada-aa7d-4fa8-893e-bff11289d828)'
        appName: 'testwebappfordevops'
        imageName: '$(containerRegistry)/$(imageRepository):$(tag)' # Specify the Docker image to deploy


```
