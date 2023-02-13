# JFrog Pipelines - Publish Template Sample

This pipeline uses an out of the box aka `Global template` called `Publish Template` which helps to set up a workflow to publish any custom template aka `System template`

## Sample Usage
A pipeline YML with same required values are available here -
- [Pipelines YML including the template](pipelines.yml)
- [values.yml](values.yml)

Once this Git repository is used as Pipeline Source, one Pipeline name `publish_artifact_cleanup_template` will be created and can be used to publish template details mentioned in values.yml.
This same pipeline can also be used to publish different templates at runtime configuring different parameters as environment variables.

## Pre-requisites when using above sample
Following information needs to be created in Pipeline integration UI. These names can be changed as well in values.yml before proceeding.
- A Git integration named `myGitIntegration`.
- An Artifactory integration named `myArtIntegration`.
- A JFrog Platform Access Token integration named `myAccessTokenIntegration`.
