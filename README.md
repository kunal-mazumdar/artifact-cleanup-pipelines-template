JFrog Pipelines Template - Artifactory Artifact Cleanup
=======================================================

This template deletes all artifacts that have not been downloaded for the past *n time units* or have been created prior to *n time units* which is by default 1 month. It can be run manually by triggering a Pipeline, or automatically as a scheduled job.

**Note:**
If you're trying to clean Docker images, this plugin may lead to unexpectedly partial or broken cleans, thus not recommended.


Features
--------
- Include artifacts downloaded before the selected time window (default)
- Include artifacts created before the selected time window (optional)
- Exclude artifacts if property `cleanup.skip` is defined on artifact.

Parameters
----------

`timeUnit`
- values: ['year', 'month', 'day', 'hour', 'minute']
- default: 'month'
- description: The unit of the time interval. year, month, day, hour or minute are allowed values. Default month.

`timeInterval`
- default: 1
- description: The time interval to look back before deleting an artifact.

searchOn:
- values: ['last_downloaded', 'created']
- default: 'last_downloaded'
- description: Parameter to choose the search condition. Defaults to search artifacts last downloaded before selected time.

`repos:`
- default: ''
- description: A list of repositories to clean. This parameter is required. Default override allowed from values.yml.

`dryRun:`
- default: 'true'
- values: ['true', 'false']
- description: If this parameter is passed, artifacts will not actually be deleted. Default false. Default override allowed from values.yml.

`paceTimeMS:`
- default: 1000
- description: The number of milliseconds to delay between delete operations. Default override allowed from values.yml.

`maxRepos:`
- default: 10
- description: Maximum allowed repos to search. Default override allowed from values.yml.

`maxArtifacts:`
- default: 100
- description: Maximum allowed artifacts to be deleted. Default override allowed from values.yml.


Executing
---------


Operation
---------
 