## 0.59.3

Released 12-20-23

### Bug Fixes

- Fixed a caching issue where adhoc deploying to multiple computers and then re-running a session would sometimes trigger the session for a different computer
- Fixed an issue where msp admins would sometimes show up as MSP Tenants
- Fixed an issue with the detected computer software table where it was not updating information after re-running inventory
- Fixed an issue where configuration task actions would sometimes not showing the detect stage progress line

## 0.59.2

Released 12-19-23

### Bug Fixes

- Fixed issue with showing media on the media list page
- Fixed issue on the tenant details page where the batch actions button on the computer table was not working
- Fixed issue with calls to Get-ImmyComputer from metascripts where it was incorrectly excluding computers that were excluded from maintenance. This check is only supposed to happen when resolving computers for a deployment or a schedule.

## 0.59.1

Released 12-13-23

### Bug Fixes

- Fixed issue where Computers and Tenants were still being included in the preview for the Edit Deployment screen even though the tenant had the "Exclude from Cross Tenant Schedules and Deployments" preference set
- Fixed a caching issue where scheduled maintenance sessions were not always picking the correct deployment

## 0.59.0

Released 12-12-23

### Detected Computer Software Export

We added a page to view all computer detected software and a button to export it to a csv file.

You can access this page from `/reporting/detected-computer-software`. Values from this table are populated from inventory.

<img src="https://immybot.blob.core.windows.net/media-qa/f30cb597-3a97-49d9-b26a-7018b1dd5605" max-width="100%" />

### OAuth Parameters

Added the ability to create and select auto-refreshing OAuth tokens as script parameters

<img src="https://immybot.blob.core.windows.net/media-qa/85259b64-917e-4676-9f44-8cde043e6fa6" max-width="100%" />

---

<img src="https://immybot.blob.core.windows.net/media-qa/ec13e684-8bd3-479c-9c94-69ee21103dfc" max-width="100%" />

---

<img src="https://immybot.blob.core.windows.net/media-qa/94275c46-2c78-4739-a0fb-43260f210f88" max-width="100%" />

---

Added a button to the Azure Partner Settings page to pre-consent customers to the default or custom app registration via the Partner Center API

This removes the need to provide consent for each customer manually using an admin account from the customer

<img src="https://immybot.blob.core.windows.net/media-qa/8a3c312d-b8d4-4b94-8f1a-5c2c1cb13d65" max-width="100%" />

---

Added an OAuth Token Acquisition mechanism to allow Partner admins to give ImmyBot consent to use the Partner Center API

<img src="https://immybot.blob.core.windows.net/media-qa/1d78a586-637b-49b5-9ec4-5a349a8c77b4" max-width="100%" />

---

### Automatic ImmyBot Agent Updates (Alpha)

When a computer attempts to run a script and we establish an ephemeral agent connection, we now also upgrade the ImmyBot Agent if it is outdated. This is currently in alpha and
can be opted into from the Application Preferences page.

### Improvements

- You can use the new ScriptTimeout attribute to override the default execution time of 60 seconds in integration scripts (Supports up to 300 seconds)
- Integrations supporting ISupportsHttpRequest now display the HttpRequest Uri
- Added integration release stage badges to indicate whether an integration is in the `Alpha`, `Beta`, or `Production` stage.
- Uninstalling software no longer enforces required parameters specified by the deployment.
- \[Alpha Opt-In\] `Write-Progress -Activity "Activity 1" -Status "Migrating"` Calling Write-Progress with both Activity and Status parameters creates a new row on the action in the session. This helps visualize the progress of long running tasks.
- Added BitLocker Status to the logical disk tab on the computer details page
- Added TPM Version to the overview on the computer details page
- Added disabled deploy button next to configuration tasks with a tooltip explaining that they cannot be deployed directly. The missing deploy button was causing confusion.
- Added a docs link for agent identification failures under the computer page -> pending tab.
- Updated help text of desired software state - Latest Version, to read "Will install/update the software to the latest version"
- Added a link to the ordering page from the deployment list page
- Updated the execution order help text to read "All tasks that are limited to onboarding computers will
  be executed at the beginning of the session in the onboarding stage, following the
  sequence in which they are listed. Once the onboarding process is complete, we will proceed to
  execute all other actions, also in the order they are listed."
- Added 'Azure Tenant Problems Detected' notifications to indicate errors and other detected problems related to Azure tenants
- Made notification creation more performant
- Added User preference area and moved the theme toggle to it.
- Improved some UI color settings
- Creating, updating, and deleting schedules show up in the audit table.
- Maintenance tasks can now specify an integration to link
- Fixed an issue on startup that was causing some startup jobs to not run
- The logic that ensures we have online agents before running a script on a computer no longer runs if we have an active ephemeral agent connection
- Added `AssignmentScope` as a script parameter. Possible values are `CrossTenant`, `SingleTenant`, and `Individual`.
- When ImmyBot restarts, we no longer cancel sessions due to them being considered "outdated". This was an old piece of code that was there to prevent accidental reboots during business hours. This check is no longer needed since we check for active hours and business hours during the maintenance session when deciding if the computer needs to reboot.
- **Important** - ImmyBot agents that are installed with automatic onboarding will now **ALWAYS** automatically onboard. Before, we would optionally not perform onboarding if the agent resolved to an existing computer that had previously run at least one maintenance session.
- Removed converted parameter values from parameter validation responses since it could possibility contain sensitive data and the value was not being used on the frontend
- `Invoke-CommandCached` and `Invoke-AtomicCommand` cmdlets are now available for use inside Filter Scripts.
- Action errors regarding missing/failed software prerequisites now show the software's name instead of the type and identifier.
- Changes to software prerequisites now show up in the audit table
- Added a link to the ImmyBot community forum to the navbar
- Minimizing the script editor persists any ephemeral tabs you had open.
- Extended the ephemeral agent disconnected text to say "This computer does not have an ephemeral agent. An ephemeral agent will connect when a script is run against this computer."
- Several new Azure-related notifications have been added
- Fixed an issue where multiple sidebars could be showing and overlapping at the same time
- Parameter descriptions are now always visible. Before, they were only visible if you were overriding the default value.
- Improved styling of default value key/value pair parameters on the deployment form
- Improved serial execution of maintenance tasks by adding a more visible locking mechanism. You can now see who the currently executing computer / session is.
- Added a check when creating or updating a deployment that warns you when a duplicate deployment is detected. You have the option to replace the existing deployment or fix the newer one such that it is no longer a duplicate.
- Schedules and Adhoc Deployments now apply batching to create the maintenance sessions. We've seen about a 6x improvement in speed in creation.
- Debounced script editor changes to prevent Intellisense crashes
- You can now save scripts that have syntax errors by acknowledging the confirmation modal. Useful for saving unfinished scripts or scripts that may not actually have syntax errors when run on an endpoint
- Improved ImmyAgent setup when deploying new instances that should result in fewer errors and faster instance setup
- Improved performance of session cancellation by simplifying the database queries
- Adding an invisible Formatter, so that information can be easily hidden. Using this to hide ParameterSetBinding messages.
- In the Debugger section Parameters and Variables, the subsections are now open by default
- In the Script Details section for the Type dropdown, the Software Auto Update element has been removed
- Added integration capability `ISupportsAgentDownload`. Allowing integrations to provide their own "Download Installer" script.
- Added integration capability `ISupportsAuthenticatedDownload`. Allowing integrations to provide authentication information without leaking sensitive information.
- N-Central integration has finally graduated from Beta status, and can now be found in the Integrations page 🎉

### Bug Fixes

- Fixed an issue where some ImmyBot tenants linked to Azure customers were getting reset to Partner type within ImmyBot
  - **For Customer tenants that are erroneously set to Partner in ImmyBot, you can fix these by finding the customer on the Azure Settings page, and unlinking/relinking it**
- Fixed an issue where full maintenance schedule sessions did not have the "Full Maintenance" tag in the sessions table
  Fixed an issue with N-Central integration failing to re-authenticate after ~24hrs of running.
- Fixed an issue where starting ImmyBot remote control for an outdated agent was kicking off a session that contained actions other than the agent update.
- Fixed an issue with license descriptions now showing on the deployment page
- Fixed potential null reference exception on Deployment page when ValidateScript is used
- Fixed an issue where wiped computers were not being treated as wiped if an existing computer was found. A wiped computer is one where the hostname and OS install date are different that the computer we already see inside of ImmyBot.
- Fixed a divide by zero error that could occur while computing a software installer's download speed.
- Set the audit user text to show the user's email address if the user does not have a first or last name specified
- Fixed an issue where some ImmyAgent & Ephemeral Agent binaries included some unsigned assemblies, falsely triggering some security tooling like ThreatLocker.
- Fixed an issue where Immy Starter plans were able to select the schedules nav item
- Fixed an issue where resolving agent identification issues resulted in "404 - entity could not be found."
- Fixed an issue where resolving agent identification issues with "Let Immy Try again" was not doing anything.
- Fixed an issue where some ImmyBot agents were failing to connect to ImmyBot when it was re-installed
- Fixed an issue where only the ImmyBot team could view global dynamic integration types
- Fixed an issue with scheduling the user computer affinity job once a day
- Removed some old migration code that was delaying startup and potentially causing issues
- Fixed an issue where some Immy Agent upgrades would leave installs dead in the water due to a config parsing issue.
- Fixed an issue where sometimes analyzing an installer package would cause an IOException.
- Fixed an issue where a software prerequisite would not be installed if an "update if found" deployment for the prerequisite resulted in "no action" because it was not found on the endpoint. Now, an install action for the prerequisite will be created anyway.
- Fixed an issue where selecting text on expanded script-runs would collapse the script
- Fixed an issue with fetching CW Manage agreement products where the deployment would show "Server error. Please contact your Administrator." Occurred when CW Manage attempted to return several hundred agreement products.
- Fixed an issue running `invoke-immycommand` from a cloud script against a computer that would throw an error during the preflight check, "Value cannot be null. (Parameter 'psComputers')".
- Fixed issue removing previous pages breadcrumbs on the session list page
- Fixed an issue on the onboarding form where mandatory parameters would not show the input by default if the parameter was dynamically discovered
- Fixed several minor issues found with the agent installer download modal and the getting started wizard modal
- Fixed a caching issue with inserting session logs into the database
- Fixed a caching issue with detected software from a machine
- Fixed an issue where database queries to get a list of sorted deployments during a maintenance session were not being cached
- Fixed an issue where the Package Analyzer would throw a `The process cannot access the file` error
- Fixed issue with our script analyzer rule for detecting missing $using: in Invoke-ImmyCommand
- Fixed the N-Central issue that keeps appearing "InvalidLoginCredentialsException: New tab request failed!"
- ParameterSetBinding should not emit output.

## 0.58.3

Released 11-1-23

### Notifications

#### Notification Sidebar

We have updated how our notification system works.

The bell icon in the navbar will provide a number of the unacknowledged notifications you have.

![image](https://immybot.blob.core.windows.net/release-media/bfedef8b-0e81-4e63-b114-5e1908af6b12)

The sidebar will show when clicking this icon.

![image](https://immybot.blob.core.windows.net/release-media/8e8bd0e6-5cfd-485f-8e2c-fb9b2b4438ec)

#### Notification History

You can access all notifications from the primary sidebar under "Show More" -> "Notifications". By default, it will only show you unacknowledged notifications. You can click the "reset" link or change the filter on the "Acknowledgement" column to view acknowledged notifications.

![image](https://immybot.blob.core.windows.net/release-media/3b1dd160-7e04-4da1-8bf0-09c5c021b463)

#### Silencing notifications

From the notification sidebar, you can silence notifications by the notification type or for the specific object the notification was for.

![image](https://immybot.blob.core.windows.net/release-media/74f3d26c-0c5d-4f27-a954-17c2b0c3a046)

You can then view all of your silenced notifications from the notification history page.

![image](https://immybot.blob.core.windows.net/release-media/9d04a155-a82e-4d81-9732-e3e0fd79001f)

#### Notification Types

We have plenty of notification types in the pipeline. Here are the notification types currently implemented.

1. Integration Unhealthy - a notification to let MSP users know that an integration has become unhealthy
2. Access Requested - a notification to let MSP users know that someone is requesting access to their instance of ImmyBot
3. Large Script Output - a notification to let MSP users know that a specific script has outputted a large amount of data. When scripts like this run during maintenance for hundreds of devices, it can easily cause high CPU and memory which leads to sluggish performance and potential crashes.
4. Unacknowledged Recommended Deployments - a notification to let MSP users know that there are new recommended deployments that need to be allowed or denied.

Some notification types that will be coming soon include, but are not limited to:

1. Agents Requires Manual Decision - a notification that lets MSP users know there are agents pending identification that could not be automatically resolved to a computer and require manual actions.
2. ImmyBot Updated - a notification that lets MSP users know that ImmyBot has been updated to a newer version
3. Cross-Tenant Deployment Requires Approval - a notification that lets MSP admin users know that a cross-tenant deployment was created or modified and needs approval from an MSP Admin. (Feature coming soon)
4. Azure related notifications

### Improvements

- Updated variable alert on the license details page to be the same alert shown on the software details page -> license help alert
- Added random jitter to the time we schedule some of our recurring jobs so that we reduce high database load due to all instances kicking off the jobs at the same time.
- For maintenance sessions that target a specific item, a session log has been added at the beginning that provides the name of the maintenance item
- Added auditing for static software versions and static maintenance task parameters
- Schedules that target a specific maintenance item will now always create a maintenance session for every computer resolved in the schedule's target group. If the computer does not have a deployment for the specified maintenance item, then the session will complete instantly with no actions added.
- Upgraded PowerShell Editor Services from 3.6 to 3.13
- Batch actions sidebar now slides out underneath the navbar to not block actions
- Batch actions sidebar background color was updated to provide more contrast
- You can now restart Intellisense from the status bar.
  - ![image](https://immybot.blob.core.windows.net/release-media/f10daf67-7113-402b-8686-be1e2c0692c0)
- Intellisense will restart automatically when changing script type.
- Removed dependency on Ace.js that shaved off 366KB from the project
- Made a slight performance change to schedule logic that should result in faster start times for schedules with many computers
- Added a "Job Args" property to the session details page info panel that expands to show more data associated with the session.
- ImmyBot no longer tries to run scripts against non-Pro N-Central agents
- Added custom PSScriptAnalyzerRule with Code Action to detect and fix missing $using: scope modifier in Invoke-ImmyCommand
  - ![image](https://immybot.blob.core.windows.net/release-media/0b53ca8b-e399-4b04-90e5-4f59d424df99)

### Bug Fixes

- Fixed an issue with azure tenant data sync job not getting scheduled correctly
- Fixed an issue with cloud deployments targeting tags where the session would error in a `NotImplementedException`
- Fixed an issue where agent updates only maintenance sessions were not viewable by a non-msp admin even if the computer was under their tenant
- Improve deadlock handling when integrations need to be created, removed, or re-initialized
- Fixed an issue where users were unable to upload license files
- Fixed an issue on instance startup where integrations were possibly initializing twice unnecessarily
- Added a default timeout of 5 minutes to every API request made to Automate. We were not specifying a timeout before so the request could have been long-lived
- Improved the initialization of the CW Automate integration by reducing the number of times we instantiate an API client to communicate with the Automate Server
- Refactored the logic that handles enqueuing scripts to execute over CW Automate to prevent potential locking and add additional debug logging
- Fixed an issue where the system status page was not showing metrics under CW Automate and CW Control when it should have
- Fixed issue where Intellisense would be unrecoverable after selecting script type Software Auto Update
- Fixed an issue where provider sync jobs could continually enqueue when only one should ever be enqueued at a time.
- Fixed an issue where CWControl provider would fail to initialize due to Azure changing the machine hostname, causing it to exceed maximum expected length
  - ![image](https://immybot.blob.core.windows.net/release-media/69441580-fc89-4acf-86a3-4edbd1ac662d)
- Fixed an issue where some actions would result in an error of "Invalid maintenance action type."
- Fixed a potential issue with all providers remaining unhealthy upon server starting up
- Improved the load time of the application on startup
- Fixed an issue where some more known bad device ids were being used to uniquely identify a computer, e.g. ffffffff-ffff-ffff-ffff-ffffffffffff
- Fixed an issue where ImmyAgent provider would fail to initialize due to Azure changing the machine hostname, causing it to exceed maximum expected length.
  - ![image](https://immybot.blob.core.windows.net/release-media/781b7878-5628-4ea0-aaab-14941f1293af)

## 0.58.2

Released 10-11-23

### Audit Page

An audit page was added that MSP admins can use to view changes made to objects such as Target Assignments and Scripts. This also includes changes made to global objects. This is part one of an effort to provide more transparency around changes made to global data. This page is accessible under Show More -> Audit, or "your-instance.immy.bot/settings/audit".

### Improvements

- `Get-ImmyComputer -IncludeTags` from a filter script or a meta script now include the tags for the computer's tenant and primary user
- Improved our resiliency for Redis reconnection for background jobs
- Updated the Hangfire Service watcher to fix common issues that may occur when it restarts
- Improved some internal logging that will help diagnose application crashes
- Added some additional logging to detect performance issues related to CW Control connection events
- Added support for putting an agent in maintenance mode at the beginning of a session
- Sessions with reboot preference set to force now only force a reboot at the beginning and end of the session. Reboot checks after each action will only reboot if necessary.
- Added the ability to toggle online status support for agents of an integration since some dynamic integrations don't support online status
- The "Install Agent" button on the computer details page now kicks off a maintenance session instead of installing behind the scenes
- Updated the version of our dependency on the Azure.Storage.Blobs package, which provides better performance.

### Bug Fixes

- Fixed some theme styling issues on some of the tables
- Fixed an error in the web inspector console that was reporting `BackendVersion` was null
- Fixed an issue where array parameters that used `[ValidateSet]` would not render the dropdown of valid values
- Fixed an incorrect variable name in the license alert on the software details form. `$LicenseFile` should have been `$LicenseFilePath`
- Fixed an issue where the session resume button would stay disabled if you clicked it but didn't confirm the action.
- Fixed an issue where deployment parameters were not showing in the correct positions
  Fixed an issue with the Package Analyzer failing to download some software hosted behind CloudFront CDN.
- Fixed an issue where `Invoke-CommandCached` would return objects slightly differently than expected, causing some unexpected behavior for scripts.
- Fixed an issue where the "Show value view" on a parameter form would not actually show the parameter values
- Fixed an issue with agent inventory identification where old agents tied to a computer were not getting replaced by the a newer agent
- Fixed an issue where a phase could be considered successful if the agent went offline at just the right time
- Fixed an issue where an agent going offline would fail a maintenance task action during the Download Installer phase
- Fixed an issue where refreshing the computer's connected status would throw an error regarding some agents not supporting the ability to refresh an agent's online status
- Fixed a potential null reference exception that was thrown when reloading integration types
- Fixed an issue where dynamic integration agents were not syncing updated data, such as changed name, serial number, or osname
- Fixed an issue with pending connectivity kicking off incorrectly for disabled/unhealthy links
- Fixed an issue where the ImmyAgent provider would fail to initialize due to Azure changing the machine hostname, causing it to exceed maximum expected length.

## 0.58.1

Released 09-28-23

### Improvements

- Made errors that occur while interacting with the graph api show on the frontend to help guide the user on how to resolve common Azure configuration problems
- Added the ability to specify a docs url for dynamic integrations that will be shown on the integration edit details page
- Added the installer download url to the session log when attempting a BITS or basic download
- ImmyBot now defaults to dark mode unless the browser preference is set to light
- Moved immy support access preference to the top of the preferences page
- Made Add-UriQueryParameter no longer require -Parameter when Uri is passed in via Pipeline
- Added the ability to trigger an agent sync from an integration on the clients tab and agents tab
- Added support for incoming http request inspection to integration audit logging
- Added support for non-mandatory integration method parameters
- Dynamic Integrations that support agents can now specify whether the agent supports an online/offline status. Some integrations were defaulting to always online which caused issues with the pending connectivity logic
- Updated session log text about retrying to fetch PowerShell version
- Added a better error message when a dynamic version script returns a newer version than what was detected previously in the session. The message is "The dynamic version script is returning a newer version than what was retrieved the last time the script was ran. If so, re-deploy this action. We will automatically handle this scenario in a future release."

### Bug Fixes

- Fixed an issue with onboarding and deployment parameters where the form would sometimes not render due to hidden errors. The errors are now visible in this case.
- Fixed an issue on the onboarding form where values specified on the deployment form were not considered when resolving any errors
- Fixed a bug where only the first 300 Azure customers of a partner tenant would show up in the Azure customer mapper
- Fixed an issue where global software -> agent integration dropdown was showing local integrations
- Fixed a bug where linking an az customer would incorrectly set the az tenant type as Standalone, preventing usage of the graph api for that customer
- Fixed an issue where sessions would sometimes not show the computer name, and links to the computer would result in a 404
- Fixed an issue where a license couldn't be deleted because it was used by a deployment that was no longer showing the license selector. The selector now shows and the license can be successfully removed from the deployment
- Fixed a rare issue where agents would fail to be synced if the integration reported multiple agents with the same agent id
- Fixed an issue where `Immybot.Agent.Shared.dll` from the ImmyBot agent MSI installer was not signed
- Fixed an issue where linking a dynamic integration client was removing other agents incorrectly during the sync
- Fixed a bug where tenant select boxes couldn't be searched on provider client link pages
- Fixed an issue where custom app reg could not be changed without first toggling permission level
- Fixed an issue where reloading integration types would result in a permission error
- Fixed an issue where the unlinked msp client banner would show up even when the msp client was linked
- Fixed an issue that was preventing the ImmyBot agent's .dlls to be signed
- Removed extra "$" in front of version in the dynamic version response
- Removed the agent's client name from the agent tab to prevent confusion
- Fixed an issue where a pending agent "Let Immy Try Agent" action was not working as expected
- Fixed an issue where a script dropdown would show incorrect results if it was toggled to only show global scripts or toggled to only show local scripts
- Fixed a "downlaod" typo in "Action To Take"

## 0.58.0

Released 09-13-23

### Bring Your Own Integrations

The goal of this feature is primarily for our own use to more rapidly implement integrations with other RMMs and PSA, but we have opened it up for you to create your own integrations as well.

[https://docs.immy.bot/build-your-own-integration.html](https://docs.immy.bot/build-your-own-integration.html)

### New Parameter New-OAuthConsentParameter

This parameter creates a button that will perform the oauth code authorization flow and allow you to use the response in the script.

[https://docs.immy.bot/scripts.html#parameters](https://docs.immy.bot/scripts.html#parameters)

### Agent Tracking

The Computer -> Agents tab now includes all agents, not just ones used to run scripts. This is preparation for the upcoming computer/tenant offboarding feature. Which will allow us to not only uninstall the agents from the machine but de-provision them from their respective platforms.

### Metascript WebHooks

You can now receive web requests from within Metascripts.

The webhook URL is _{your-domain}.immy.bot/api/v1/webhooks/{web-hook-id}_, and it accepts Post and Get requests. The webhook id can be retrieved from `$Hook.Id`

An example scenario is this can be used to map Toast buttons to actions in ImmyBot.

```powershell
$Hook = New-ImmyWebHook
$Hook.PublicUri | Add-UriQueryParameter @{
    MyParam = "MyVal"
}
$Hook.PublicUri.ToString()
Write-Host "Waiting for Hook"
$Hook | Wait-ImmyWebHook
Write-Host "Got WebHook!"
```

### Atomic and Cache Cmdlets

Added 3 new Cmdlets, `Set-CacheKeyExpiration` , `Invoke-CommandCached`, and `Invoke-AtomicCommand`

![image](https://immybot.blob.core.windows.net/release-media/24ae8f1d-08ee-4bfb-9bd7-daf35a69c869)

![image](https://immybot.blob.core.windows.net/release-media/28df2016-3fed-455f-b31a-7c07dbfd5401)

![image](https://immybot.blob.core.windows.net/release-media/4c710593-4424-4137-8ec5-6377664ac721)

### Other Improvements

- Error text for deployment parameters now show as markdown
- Added Completion for Attribute parameters
- Immy-specific core types no longer tab complete to lowercase
- Immy-specific Attributes like DropdownAttribute and OAuthConsentAttribute no longer tab-complete to include "Attribute"
- Remote control can now automatically reconnect after logging off a Windows user or rebooting the computer.
- Improved performance of loading maintenance sessions with hundreds of actions
- Added a background service that periodically checks for online computers that have pending connectivity sessions and runs them
- `Get-Hash` cmdlet now supports an additional `AsHex` switch to get a hexadecimal output.
- Prevented recurring inventory jobs from retrying to connect an ephemeral agent more than once so we can quickly move on to the next computer needing inventory
- You can now target provider client groups (e.g. CW Manage Agreement Products) with cloud tasks
- Reduced memory footprint of some session related data
- Added an Agents tab to the Integration Details Page if the integration supports listing agents.
- Saving a script in the script editor now shows a loading icon in the tab and disables the buttons to prevent multiple requests
- You can now link ImmyBot tenants to Azure tenants (including partner tenants) from the Tenant Edit page
- You can now have multiple MSP tenants
- ImmyBot tenants can be upgraded to MSP tenants from the Tenant Edit page
- The software dropdown on the license details page is now limited to software that support licenses
- Added text to the maintenance ordering page that explains that onboarding actions will always be executed at the beginning of the session in the order that they are listed.
- Added a log interceptor that can be used for dynamic and built-in integrations to log method calls
- Implemented `ISupportsAgentUninstallToken` and `Get-IntegrationAgentUninstallToken` (for SentinelOne) and removed the need for specifying the clientid

### Bug Fixes

- Fixed issue where Computers running ImmyAgent < 0.51.0 and no other agents failed to establish an Ephemeral connection.
- Fixed an issue where a session would fail with "Uncaught exception running maintenance session. Computer does not have any enabled agents that support running scripts"
- Fixed an issue where updating a schedule would bring you back to the computer list page
- Added some additional logging around the Immy Agent when attempting to establish an ephemeral agent connection
- Fixed possible errors that could occur after an IoT Hub has been removed
- Fixed an issue where exporting to Excel from dashboard would fail if there are multiple maintenance items with the same name
- Fixed a bug where GDAP Customer would incorrectly show up as a warning in certain circumstances, causing confusion consenting as GDAP Azure Customers
- Fixed an issue where Automate patches were being performed on action reruns
- Fixed an issue where Automate patches were not being performed during manual onboarding
- Fixed an issue where there was one non-dismissible notification for a recommended deployment
- Fixed an issue where the Provider Audit table would cause an `IAsyncEnumerableReader` error to be thrown.
- Fixed a potential script deadlock issue when using `Invoke-CommandCached`
- Fixed an issue where the `ExtraData` property from an IProvider was inaccessible.
- Fixed an issue where some dynamic form bind errors were not showing in the script editor
- Fixed an issue with persons selected to be notified on onboarding screen not showing up
- Fixed an issue updating tenant slugs on the tenant list page
- Fixed an issue where licenses were failing to be updated
- Fixed an issue where versions listed on the software details page were not sorting by version correctly
- Fixed an issue with ImmyAgent EXE installers being corrupted during download.
- Fixed an issue where integrations would sometimes become unhealthy on startup with "The JSON value could not be converted to System.Boolean...`
- The "More Actions" link on global software is now hidden for non-immybot-core users since no actions can be taken
- Fixed an issue on the dashboard table where the company column was not sorting or filtering
- Fixed an issue where users could update/delete the ImmyAgent integration which could potentially cause issues
- Fixed an ordering issue on the deployment page where the cross-tenant tag target type was showing a lower priority than integration target types
- Fixed a wrapping issue with the new integration page
- Fixed an issue where non-msp users could not see their tenant's filter script deployments
- Made Get-ImmyAzureAuthHeader cmdlet respect the app registration that the customer was consented with
- Fixed an issue where computers show licensed even when they haven't had maint in the current usage period

## 0.57.6

Released 08-10-23

### Improvements

- Implemented new `Get-CwControlFields` cmdlet

  ![image](https://immybot.blob.core.windows.net/release-media/6bb5e5e8-2fd5-4390-abd3-371f1a919ca1)

- Added a new `Get-OTP` cmdlet, capable of creating TOTP & HOTP codes.

  ![image](https://immybot.blob.core.windows.net/release-media/d2c7329a-eba8-4b9a-8c39-7ac86ba0c33b)

- The script that downloads and starts the ephemeral agent script now uses an absolute path for PowerShell. `%systemroot%\System32\WindowsPowerShell\v1.0\powershell.exe`
- Optimized the code responsible for syncing agents from integrations

### Bug Fixes

- Fixed an issue where array values specified in the script editor parameters pane were not getting passed to the script
- Fixed an issue where reran actions may have contained incorrect information from another action
- Fixed an issue where rerunning a session after rerunning an action would cause the new session to only perform the reran action
- Fixed an issue where ImmyBot would show offline when you did not have access to login

## 0.57.5

Released 08-08-23

### Bug Fixes

- Fixed a bug introduced in 0.57.4 where the default value for CW Control's Custom Property Client Name and Secondary Index fields had the wrong values
- Fixed an issue with new instances having a disabled / non-working ImmyBot integration

## 0.57.4

Released 08-07-23

### Improvements

- Started work on improving performance of computer and tenant deletions. More improvements to come.
- In the global script editor, scripts with param blocks will now only have the parameters auto-binded when the script has been newly opened instead of when it was focused.
- Fixed a bug where `undefined` would sometimes show up as an error in the global script editor output.
- Eliminated 2-step Verify/Create on Integrations
- Updated the error message you get when you attempt to create a deployment for software that does not have a version to deploy. "There are no available versions for this software. The software must have a static version, a dynamic version script, or be linked to software from an alternate provider such as Ninite or Chocolatey in order to be installed."
- Made `New-Parameter -Position` nullable and not default to 0 to prevent parameter binding error "Cannot bind positional parameters because no names were given."
- The ephemeral agent exe now has the correct version where before it would always have 0.0.1
- Moved Remote Control feature to the top of the Preference Page for better visibility
- Package Analyzer will fallback to use `FileVersion` if `ProductVersion` is missing on EXE installers.
- Package Analyzer will now return relative path to installer nested multiple directories inside of a ZIP archive.
  For example, a package bundled like `(MyInstallerPackage.zip) => [MyInstallerPackage] -> [InnerFolder] -> Setup.exe` will return `InnerFolder\Setup.exe` as the FileName instead of `Setup.exe`
- Package Analyzer will now fallback to a list of known-good DNS servers for downloading binary. This should help alleviate issues for a few customers where Azure's default DNS fails to resolve the address. Errors stemming from downloading issues will additionally contain a DNS Audit trail.
  Package Analyzer download speed has been improved by up to 50%, reducing time waiting for analysis.

### Bug Fixes

- Fixed a `NullReferenceException` when no response was received from `InvokeCWARestMethod`
- Fixes an issue where the computer was not showing the active session tag for all computers that had one
- Fixed an issue where Cloud Tasks were failing because pre-flight script were trying to run
- Remote Control: Fixed an issue where some special characters would cause "Type Clipboard" function to fail.
- Fixed a bug with Package Analyzer which caused it to fail to analyze some installers where the server inappropriately returned a quoted filename.
- Fixed an issue with Package Analyzer failing to extrapolate filename (if one wasn't provided) from the download URL if the server didn't return a `content-disposition` header.

## 0.57.3

Released 07-14-23

### Improvements

- Optimized the load time of the Computer List page

### Bug Fixes

- Fixed an issue where an ephemeral agent would disconnect after attempting to run a user script without a logged-on user

## 0.57.2

Released 07-11-23

### Bug Fixes

- Limited Support Technician access to members of the Immense Entra ID with the Immy Support Technician role

## 0.57.1

Released 06-30-23

Fixed an issue for new instances deployed without an IoTHub being unable to install Immy Agents.

## 0.57.0

Released 06-29-23

### Agent Delivery - Whitelist **cdn.immy.bot**

Make sure to whitelist cdn.immy.bot in your endpoint protection tools.

The ImmyBot Agent and the Ephemeral Agent are now served from a Cloudflare CDN at https://cdn.immy.bot

### ImmyBot Remote Control (Remotely) - BETA

Initial support for remote control is here!

The newest version of the ImmyBot Agent will support the ability to establish remote control sessions.

Remote control can be established by clicking the "Open Remote Session" dropdown and then clicking the "ImmyBot Agent" option.

![image](https://immybot.blob.core.windows.net/release-media/96fe75cd-c059-46ce-ad2b-ca040e7e04c1)

You can also select the initial Windows session within which to start remote control.

### Task Deprecation & Supersedence

Old tasks can now be deprecated in favor of newer tasks.

You can deprecate a task by supply a "Superseded By" task on the task form. You can additionally supply a parameter migration script
that will migrate the parameters specified by the deprecated deployment to the parameters of the superseding one.

![image](https://immybot.blob.core.windows.net/release-media/6c6e05f5-5ebe-4eb9-9519-471969479421)

### Schedule using the computer's timezone and Active Hours

The schedule details page has been cleaned up and re-organized for easier understanding.

We are introducing two new ways to schedule execution against a computer.

1. Use the computer's timezone for execution

   A common complaint is that it is hard to schedule maintenance for a group of computers that are all in different timezones. Another complaint is that scheduling maintenance against laptops for people who travel is difficult because they are constantly changing timezones.

   You now have the option to schedule maintenance at a particular time according to the timezone specified by the computer.

2. Start execution after active hours if available

   For computers that are running Windows 10+, you can opt into using the Active Hours specified by the computer instead of executing at the specified time on the schedule.

   For now, if active hours are used, execution will be scheduled in the middle of non-active hours. e.g. If active hours ends at 1pm and starts again at 10pm, we will schedule execution at 5pm.

### Active Hours as Business Hours

When active hours are used to schedule maintenance for a computer, checks against business hours will resolve to active hours. This is necessary because we don't want to accidentally reboot the computer when in use, when "Suppress Reboots During Business Hours" is checked on the schedule.

Both "Use computer's timezone for execution", and "Start execution after active hours if available" are available for use on the deployment details page as well.

### Pending Ephemeral Agent Session Status

A new session status has been added called Pending Ephemeral Agent Session.

Anytime during a maintenance session, if we fail to establish an ephemeral agent, the session will go into Pending Ephemeral Agent Session. The action it was performing when the failure occurred will not be failed so that it can resume when the ephemeral agent is finally connected. A background service will continually attempt to establish an ephemeral agent on sessions that are marked with this status.

With this change, we were able to remove the Script Execution Circuit Breaker that has not proved to be very useful.

### Terminating Exceptions

System scripts will now throw terminating exceptions if we fail to establish an ephemeral agent or an actual terminating exception was thrown in the script.

Metascripts will also now throw terminating exceptions when an ephemeral agent fails to establish when using `Invoke-ImmyCommand`. You must now explicitly use a `try/catch` in order to prevent the terminating exception from ending the script.

This behavior will prevent software and tasks from continuing script execution in the event of a terminating exception, which will prevent false-positive results and report better errors.

#### User Script Terminating Exceptions

When running `Invoke-ImmyCommand -Context "User"`, an additional parameter will be available called `TerminateFromNoLoggedOnUser`. When set, the script with throw a terminating exception when there is no logged on user. By default, user scripts will not throw a terminating exception when there is no logged on user.

### Made pending-connectivity session triggering more robust

- Removed some event handling from pending connectivity service since the session finished event is not emitted in all circumstances
- Reduced different entrypoints to starting a session to improve consistency and reliability
- Added logic to check for and start the first pending connectivity session in the queue when any session finishes (both pass and fail) directly from the Immy Service Job

### Session Preflight Scripts

A new script category has been added called "Preflight". Preflight scripts run after an ephemeral agent is established and before we attempt to run any other script against a computer. If the preflight scripts do not return any exceptions, then preflight is consider "passed" and scripts can be executed as normal. Otherwise, if any preflight script fails, script execution will not be allowed against a computer.

The major reason we added preflight scripts was to detect whether a computer is currently applying windows updates. Agents can report online and connected while windows updates are applying. However, it's possible that certain actions will not perform successfully while the computer is applying those updates. If we attempt to start or resume a session while windows updates are applying, we run the risk of rebooting the computer during an update and potentially bricking it.

The first global preflight script that has been added will check if the computer is currently applying windows updates and will throw an exception if it is, preventing script execution on the computer until windows updates are completed.

#### Pending Preflight Session Status

A new session status has been added called "Pending Preflight". When a preflight script fails during a session, the session will go into "Pending Preflight". The action that was actively being performed when the preflight script failed will not failed so that it can be resumed when the computer passes preflight. A background service will continually attempt to run preflight against a computer until it passes. Once preflight passes, the session will continue.

### Built-In ImmyBot Agent Software

Before 0.57.0, we had hardcoded an action to perform the ImmyBot Agent update, which resulted in a lot of failures.

The built-in agent update now utilizes the ImmyBot Agent software located in the global repository.

#### Before

![image](https://immybot.blob.core.windows.net/release-media/0edc7126-032c-43f2-91fa-32dd15e25689)

#### After

![image](https://immybot.blob.core.windows.net/release-media/30da3005-a460-47e6-887b-6e4f892aee61)

### Prepared removal of Azure IotHub for the ImmyBot Agent

The 0.57.0 ImmyBot agent introduces a new method of establishing a connection to the backend using WebSockets.

With this approach, we will be able to remove dependency upon the Azure IoT Hub and provide a more reliable connection to devices.

### Other Improvements

- Added license icons on computers to indicate which ones are actively being counted towards the license count for the month.
- For instances on Immy Standard, we added a checkbox on the computer list page that allows you to filter to only computers that are licensed
- Added fallback for tls when using `Download-FileToFolder`
- The .dlls extracted from the ImmyBot Agent and Ephemeral Agent executable are now signed, which should make whitelisting by our certificate in A/V tools easier.
- Improved the readability of the billing page
- Renamed Get-Hash to Get-KeyedHash as it only supported keyed hashes like HMACMD5, HMACSHA1, HMACSHA256, HMACSHA384, and HMACSHA512
- Implemented Get-Hash for non-Keyed algorithms like MD5, SHA1, SHA256, SHA384, and SHA512
- The "Update agent on device" button under the Agents Tab -> ImmyBot agent is clickable even when the computer is offline. It will put the session in pending connectivity and update when the computer comes back online.
- For ImmyBot Agents version 0.57.0 and above, the version is now displayed on the Agents tab.
- `C:\Program Files (x86)\ImmyBot\Immybot.Agent.exe` now contains the correct file version
- ImmyBot Remote Control and Require Consent For External Session Provider tenant preferences now have a tri-state value. They can be enabled, disabled, or use the application default value.
- Actions can now be sorted by the date/time execution started
- ImmyAgent binaries now show correct version
- Added a tenant preference to enable/disable the User Affinity Sync

### Bug Fixes

- Fixed an issue where commands and output from the computer terminal and the script editor were showing up in both
- Fixed an issue where creating a new filter script or metascript from the deployment page was selecting the wrong execution context
- Fixed another issue that was causing the azure user sync to sometimes fail
- Fixed an issue with schedules not being able to update when they are using a deleted filter script
- Fixed an issue where failing to refresh an agent's online status could cause detection to fail
- Fixed a potential bug that could occur when script-output recovery would happen, that would cause a false `Recovery is not possible` error to be thrown.
- Fixed issue where running a User-context script w/o a logged on user would cause
  `throw $args[0]; # If you can see this, report it to the ImmyBot Dev Team.` to be displayed in powershell output.
- Fixed an issue with Update If Found deployments for software with a test script incorrectly running the test script even when the software was not found
- Fixed some theme color issues with table column choosers and filters
- Cleaned up action error messages when a test or get script failed.
- Fixed an issue where the session would not go to pending connectivity when the AgentsOfflineException would be thrown but a provider agent is incorrectly reporting online still.
- Fixed an exception that was occurring when duplicating some global maintenance tasks
- Fixed an issue preventing the azure sync from running
- Fixed an issue with PowerShell returning System.Type arrays causing out of memeory exceptions
- Fixed instance of inventory json parsing exceptions causing sessions to fail hard
- Fixed an issue with publishing the agent as a single file

## 0.56.5

Released 2023-05-11

### Improvements

- Made it more obvious when actions are skipped because reboots are suppressed and the action's software requires a reboot
- Removed the hardcoded "Uninstall by Package Info" logic from software uninstall steps since it could cause unexpected reboots
- Updated the description of the tenant Onboarding Patching preference to indicate that it currently only applies to CW Automate
- Added PowerShell Version to computer overview tab

### Bug Fixes

- Added missing logs around reboot checks
- Fixed a XSS vulnerability found in param block descriptions
- Fixed an issue where GDAP customers that need consent would show up as consented when they had previously been synced as a non-GDAP customer
- Fixed an issue with quick deploy where it would sometimes not kick off the session
- Fixed an issue where dynamic form errors were not clearing upon refresh
- Fixed issue where the url in a cloud session's support request was incorrect

## 0.56.4

Released 2023-05-08

### Bug Fixes

- Fixed an issue where duplicating a task would not copy over all data
- Fixed an issue that sometimes prevented the onboarding task forms from loading
- Fixed an issue where scripts with the category "Filter Script Deployment Target" and "Metascript Deployment Target" were not automatically selecting the correct execution context
- Fixed an issue where some actions would have incorrect parameters or variables when multiple sessions executed the script at the same time

## 0.56.3

Released 2023-05-04

### Improvements

- Added a note to the ImmyBot Agent installer modal indicating that there's an issue on Windows 11 22h2 builds that prevent the PPKG from working and added notes on how to resolve it.

### Bug Fixes

- Added missed user auditing to certain software, task, and deployment operations
- Fixed an issue with assigning tags while creating a new tenant
- Fixed an issue where schedules targeting a specific maintenance item were picking up onboarding only deployments
- Fixed an issue where some macOS agents were not being excluded
- Fixed an issue where navigating to a computer that did not exist threw a non-404 unexpected error
- Fixed an issue with schedules targeting CW Control groups not being limited to the specified tenant on the schedule
- Fixed an issue with sessions failing when attempting to retrieve bulk software and the bulk software response contains text that is not representable as valid UTF-8

## 0.56.2

Released 2023-04-27

### Improvements

- Updated the alert on the schedule details page when targeting a specific item to state, "Metascript deployment targets are not supported when the schedule is limited to a specific maintenance item because it would require executing a script against every computer in the system."
- Azure User Sync now excludes external users
- Renamed the "All" tab to "Active" on the computer list page to avoid confusion. "All" implies it should contain "Pending" agents, which it does not.

### Bug Fixes

- Fixed an issue where new instances would not be able to use immy agent provider
- Fixed an issue where some business hours were not being computed correctly and the session incorrectly reported that we were within business hours
- Fixed an issue with the computer terminal not maintaining execution when toggling between tabs
- Fixed bug where exceptions that occur while resolving Cw Control remote screen share URLs caused the maintenance session page to not load any data
- Software Post Uninstall phase is now only shown when the software or version has a post uninstall script

## 0.56.1

Released 2023-04-24

### Improvements

- When an agent is identified to a computer that already exists in ImmyBot, we will now automatically select the "Wiped" option if the computer name and OS install date reported by the agent are different than what is reported by the existing computer.
- The ephemeral agent no longer extracts to c:/windows/temp. This alleviates issues around A/V blocking .dlls coming from the temp directory, and also alleviates issues around windows randomly removing required .dlls for the ephemeral agent to run.
- Updated the identification log text that explains why a manual decision is required
- Added the manufacturer name and serial number of an agent in the agent identification logs when resolving a trusted manufacturer
- Added ability to group by target on the deployment list

### Bug Fixes

- Fixed issue with tenant tags not resolving deployments
- Fixed issue where cancelling sessions would sometimes cause session to retry some number of times
- Fixed an issue causing new instances immy agent integration to not be properly initialized
- Fixed a bug where alternate providers were not getting disabled when dynamic versions are selected
- Fixed an internal issue where Immy Support Technicians were not allowed access due to existing expired access requests
- Fixed an issue where a pending agent that has the same trusted manufacturer and serial number as an existing computer would sometimes require a manual decision instead of automatically replacing the existing agent

## 0.56.0

Released 2023-04-17

### Tenant and Person tags

Support has been added for Person and Tenant tags.

A tag no longer has a "type". A tag can be assigned to any person, computer, or tenant.

Deploying a software or maintenance task with a tag target type now resolves computers for the following:

1. computers that have the tag
2. computers for tenants that have the tag
3. primary computers for people who have the tag

Deploying a cloud task can now target tags assigned to tenants, as well as integrations that support client groups.

Now that tags can target tenants, you can create a schedule that targets tags to run a single schedule across multiple tenants.

Tags for tenants can be assigned on the tenant list and tenant details pages.

Tags for persons can be assigned on the person list and person details pages.

### ImmyBot Session Support Requests

You can now request support from Immy technicians from maintenance sessions. When requesting support, you can:

- Add details about the issue you are experiencing
- Select whether an Immy technician should be allowed to access your instance
  - If selected, there is no need to approve an access request for the Immy tech to log into your instance
  - You can disable Immy technician access at any time from the Application Preferences page
- Select whether the session's logs and computer timeline events should be available in the support ticket
  - The logs / timeline events are formatted as a text file and stored in your instance's blob storage account, and a link to download this file is added to the support ticket
  - You can also download this file before submitting the ticket

### Global Script Editor

Below are some of the new features in the script editor!

- General VS Code "vibe"
- Open/Close multiple scripts(tabs)
- Go To Definition support for function scripts
- Script Search and Directory Views with result highlighting
- Variable preview based on script execution context, category, and a selected target (computer, tenant, task, software).
- Parameter Form for scripts with param blocks, selected software that have configuration tasks, and selected maintenance tasks that have parameters
- Closing a script tab with unsaved changes alerts you
- Function name/definition view that shows the results of `Get-Help {functionName} -Detailed | Out-String`
- Basic hotkey support

![image](https://immybot.blob.core.windows.net/release-media/9be569f7-c3d4-4013-bad2-00693efc73ba)

![image](https://immybot.blob.core.windows.net/release-media/87aa4eef-f90f-4939-9587-38f0c89fdf4f)

![image](https://immybot.blob.core.windows.net/release-media/93b1246a-18d4-41f8-a24c-89fd50289f75)

![image](https://immybot.blob.core.windows.net/release-media/e50180a3-1d07-4dc7-8709-a50f441bff1d)

You can access the script editor from the top navbar or in the sidebar under Library -> Script Editor

![image](https://immybot.blob.core.windows.net/release-media/f5850129-0f74-43d4-a2a2-67d54a42a60d)

![image](https://immybot.blob.core.windows.net/release-media/fa21a1a2-1206-457f-ae3e-3f02669e4d86)

### Parameter Value View

Sometimes deployment parameters result in an exception when performing the binding. This can happens when the parameter types have been updated but the values have not.

You can now toggle the parameter form to a value view that provides you the ability to remove/reset values that may be causing issues.

![image](https://immybot.blob.core.windows.net/release-media/6fbe70fc-96b0-42dc-9416-b654c2aa7276)

### Tenant Software

The Tenant Details Page now has a Software tab that displays a grid of software that was detected on endpoint machines and could be matched to software in the global database. The result set is grouped by global software name/ID and sorted descending by total installs (i.e. number of devices that have it installed). Each group has a Deploy button, which will open a new deployment for the software that targets all computers under that tenant.

![image](https://immybot.blob.core.windows.net/release-media/fb09bb5c-d6d0-4473-a1e7-60fbede16b02)

### Other Improvements

- On the Deployment List Page, tenants with missing or deleted tenants will show `Tenant no-longer exists` under tenant column and the entire row will be highlighted red.
- The current ImmyBot agent version is now shown on the frontend in the installer modal and in the sidebar's ImmyBot Agent Download box.
- Added the ImmyBot version in a session log at the start of a session. This will be useful when debugging session-related issues since we can correlate the problems to the version ImmyBot was on when the session ran.
- You can now install the ImmyBot Script Editor as a progressive web app.
- Cleaned up some of the error messages returned by integrations
- Fixed issues with tag deployments not getting applied during an onboarding session
- System scripts that use param blocks will now through an error letting users known that param blocks are only available in metascript and cloudscript contexts.
- Maintenance tasks can now specify function scripts
- Added a session log when attempting to apply a windows patch since there are currently none
- Added a check for whether the computer is online before attempting to apply windows patches
- Get-Hash now supports HMACMD5, HMACSHA256, HMACSHA384, and HMACSHA512
- Added back session list "Completed" count and filter and removed "All"
- Added internal auditing tables for scripts, software, tasks, and deployments. The future plan is to expose an audit trail for these objects so you can see who made changes and when they were made, with the ability to revert changes.
- Moved the tenant tag selector to the edit tab. The tags now show inline next to the tenant's name
- Made session log database handler more efficient by breaking large updates into smaller queries
- Reduced likelihood of CW Control Integration failing to sync devices.
- The deployment page no longer hangs when attempting to preview/deploy to a large number of computers
- Improved Package Analyzer to handle improper/malformed `content-disposition` header returned from some file servers, which resulted in a failure to analyze a package.
- Expired users can now be un-expired from the edit user form
- `Wait-ImmyComputer` (and therefor `Restart-ComputerAndWait`) has been improved with a new `RebootWithPollingFallback` option that should help alleviate issues with ImmyBot not detecting when a machine has been rebooted and now back online. This option will periodically poll providers/integrations about machine connectivity status if they haven't reported target machine as online after an expected `WaitForEventTimeout` period.
- You can now define multiple functions in a Module script and import them into other scripts using Import-Module
- Maintenance task get/test can now create child actions during detection using the new cmdlet `Add-ImmyMaintenanceActionChild`

### Bug Fixes

- Fixed an exception in the Sync Azure Users Job that was preventing some person entities from being deleted
- Fixed a bug where integrations would all become unhealthy until ImmyBot restarts when one provider failed to initialize in a timely fashion
- Fixed an issue where a specific unrecoverable ephemeral agent exception was being suppressed
- Fixed an issue with postpone button from scheduled maintenance emails not actually postponing the session in some circumstances
- Fixed unnecessary logging of an exception when an Ephemeral Agent Session was disposed correctly
- Fixed an internal exception with ephemeral agent sessions where we were failing to dispose of the connection timeout callback
- Fixed issue with instances that have large session logs tables having poor database performance and dropping session logs
- Fixed issue with logs displayed on maintenance sessions occasionally showing up unsorted-by-timestamp
- Fixed an issue that was allowing a device to sleep when the ephemeral is connected
- Potentially fixed an issue where sessions would get stuck in the running status after the backend restarted
- Fixed an issue where tasks marked to be ignored would show as compliant instead of ignored on the maintenance session's action list
- Resolve potential bug with ImmyAgent causing IoTHub issues
- Fixed browser warnings about using variable names starting with $ or \_ in setup()
- `Restart-ComputerAndWait` now will show agent timeline events in correct order
- Fixed issue with gdap customers not showing up when azure permission level is reset from custom to default and custom didn't have correct permissions
- Fixed an issue with media missing the base url
- Fixed an issue where software deployments don't report download failures correctly and will continue on.
- Fixed an issue where quick deploying software would not also deploy the configuration task if it had one

* Fixed $using variables on single line scripts

- Fixed an issue where the cross tenant deployment grooup was not sorted at the top of the deployment list page

* Delete existing UserAffinities when new user is set to prevent reverting to old user

## 0.55.13

Released 2023-04-03

### Bug Fixes

- Fixed a regression in 0.55.12 where some business hours checks would report within business hours but the computer would still be rebooted

## 0.55.12

Released 2023-03-31

### Improvements

- Added timespan parameter `-AgentConnectionWaitTimeout` to `Invoke-ImmyCommand` so you can override the default 5 minute wait time.

### Bug Fixes

- Fixed an issue where some session logs were failing to save due to issues sanitizing a script's param block
- Fixed an issue where deployments targeting an Azure Group were not applying when the computer's primary user was set during the onboarding stage
- Fixed an issue where executing quick deployments against computers needing onboarding would incorrectly trigger the onboarding stage
- Fixed an issue with the onboarding form's assignment links not bringing users to the specified assignment
- Fixed an issue where reboots were occurring during business hours than spanned over to the following day. e.g 9am - 4am
- Fixed an issue where the Primary User task was running after Set Computer Name and Domain Join. This was causing computers to not get the correct name when the computer is named after the primary user.
- Fixed a long-standing issue where Immy PPKGs wouldn't reliably disable sleep/hibernation when the option was checked on some computers. This has been improved.

## 0.55.11

Released 2023-03-22

### Bug Fixes

- Fixed issues with the websocket connection randomly disconnecting when adhoc deploying to a large number of computers
- Fixed an issue with PowerShell Editor Services continually starting and stopping

## 0.55.10

Released 2023-03-21

### Bug Fixes

- Fixed an issue where adhoc deployed sessions would go over the session limit and cause performance issues
- Fixed an issue in the ImmyBot Agent that would cause devices to rapidly send connected messages to the IoTHub, depleting the quota and preventing new devices from registering

## 0.55.9

Released 2023-03-16

### Improvements

- Using the `[Person()]` attribute on param block parameters now takes into account the selected tenant on the deployment form and only shows people belonging to the selected tenant.
- The computer list page now supports the following query parameters: `filter` and `includeDisconnected`. This can be used to filter the computer list e.g `demo.immy.bot/computers?filter=desktop-R2D2&includeDisconnected=true`

### Bug Fixes

- Fixed an issue with hashtable parameter values not working when provided from the deployment
- Fixed an issue with the CW Control device sync

## 0.55.8

Released 2023-03-15

### Improvements

- Improved performance of syncing devices from all integrations. Automate in particular was failing to sync device updates (online/offline statuses).

### Bug Fixes

- Fixed a WebSocket exception where we were attempting to close the WebSocket after it was already closed

## 0.55.7

Released 2023-03-14

### Improvements

- Parameters for "Not Present" deployments now show up on the deployment edit page.
- Removed 100 and 1000 page sizes from all tables for performance reasons

### Bug Fixes

- Fixed an issue in the azure sync users job that was causing it to fail
- Fixed more issues with the ephemeral agent getting locked up
- Fixed an issue where agent disconnect events would show duplicated in the timeline events table
- Fixed an issue where computers would be moved to needs-onboarding after a new agent connects for an existing online computer
- Fixed issue where newly-installed immy agents would not result in new computers in ImmyBot under some circumstances

## 0.55.6

Released 2023-03-08

### Improvements

- Improved performance of searching the main computer list
- Added a button near maintenance task parameters to copy the parameters as a script param block string. Useful in converting a task to use a script param block

### Bug Fixes

- Fixed an issue where identification logs would sometimes not be sorted by date.
- Fixed an issue where we were not considering case-insensitive serial numbers for trusted manufacturers
- Made non-admins able to delete their tenant's computers
- Made non-admins able to add and remove tags from their tenant's computers
- Fixed an exception that was occurring where the azure sync was trying to delete people who existed as an Immy user.
- Fix issue with PowerShell formatting of `System.Version`

## 0.55.5

Released 2023-02-28

### Improvements

- Improved performance of session counts on session list page

### Bug Fixes

- Fixed an exception that was occurring frequently when the ephemeral agent established a websocket connection
- Fixed an internal error that occurred when we add function scripts to the PowerShell InitialSessionState

## 0.55.4

Released 2023-02-24

### Improvements

- A new application preference has been added: "Allow Non-Admins and Non-MSP Users to Use Terminal and Edit Scripts"
  - Default: disabled (by default, only MSP Admins will be able to use terminals or edit scripts)
- Added ephemeral agent details under the Computer Details Page -> Agents tab with the ability to kill the active ephemeral agent

### Bug Fixes

- The ImmyStarter plan no longer allows maintenance to be run against computers that were added into Immy over 7 days ago.
- Added "Tags" to the default display set returned from `Get-ImmyComputer`

## 0.55.3

Released 2023-02-21

### Improvements

- Syncing azure users now deletes people in Immy that no longer exist in Azure (if the person in Immy has the Azure Object Id set).
- You can now upload .msp, .appx, .appxbundle, .msix, and .msixbundle installer files!

### Bug Fixes

- Fixed an issue related to N-Central providers executing scripts on machines

## 0.55.2

Released 2023-02-14

### Improvements

- Increased the font-weight of heading text in the light theme for better contrast
- Fixed an issue where some global software and tasks were incorrectly failing due to permission issues.
- Updated dynamic version scripts to show logs even when it is already cached
- Removed maintenance task parameter description from onboarding form unless the parameter is being specified
- Made onboarding task/assignment title bar visible when scrolling down on dynamic parameter panels
- Added ability to manually refresh dynamic parameters on onboarding form

### Bug Fixes

- Fixed an issue with loading deployments that targeted people where the deployment wouldn't allow saving
- Fixed an issue where rerunning a session that contained reran actions would fail unexpectedly
- Fixed an issue with binding malformed uri parameters

## 0.55.1

Released 2023-02-09

### Improvements

- Added batch action to maintenance session list to cancel all incomplete sessions.
  - ![image](https://immybot.blob.core.windows.net/release-media/8a26d693-2e55-4f7e-b836-479548315ea5)
- Improved the performance of the integration client's table. Instances with thousands of clients and tenants should now be able to use this page without running into performance issues.
- Updated the ImmyBot backend from .net 6 to .net 7

### Bug Fixes

- Fixed an issue that prevented the maintenance email's reboot now button from rebooting the computer
- Fixed an issue where some assignments using tags would not be resolved to a computer due to using data from a stale cache
- Fixed an issue CW Control integration where it was not forcing https:// on the url

## 0.55.0

Released 2023-02-07

### Stale Computers

A new "Stale" tab has been added to the Computers List page showing devices that have not had a recent agent connection event.
By default, the staleness threshold is 30 days. This value can be configured from the System Preferences page.

![image](https://immybot.blob.core.windows.net/release-media/8d9c4bb5-af75-4aa0-992c-74b0340af3db)

This feature can be used to cleanup old computers when you are coming close to the maximum limit for computers.

### Dynamic Maintenance Task Parameters (PowerShell Param Blocks)

Maintenance task parameters can now be defined dynamically using a script's param() and dynamicparam{} block.

![image](https://immybot.blob.core.windows.net/release-media/f0a4f734-fbf7-4e7e-adae-5ad3c840d20d)

PowerShell has a robust parameter definition and validation engine. By leveraging it, we give ourselves features like:

- Parameter Sets
- Regex Validation
- Conditional/Dynamic Parameters
- Dynamic Values
- Type enforcement

When deploying Onboarding tasks, you can define which parameters should be visible to the technician, while hiding others or setting their defaults in the Deployment.
![image](https://immybot.blob.core.windows.net/release-media/9d29e0d1-4101-4eba-816e-7fc1f5e71aed)

### GDAP Support

"GDAP Customer Syncing" option has been added to the Azure settings page. Enabling this option does the following:

- Adds the _DelegatedAdminRelationship.Read.All_ permission to ImmyBot's default app registration, to allow retrieval of your GDAP customers
- Enables ImmyBot to offer a consent link for each GDAP customer to be synced by ImmyBot

Please see the [GDAP Customer Syncing documentation](https://docs.immy.bot/azure-graph-permissions-setup.html#gdap-customer-syncing) for usage details.

**Important!** If you are using a custom app registration (also known as the CSP App Registration), your app registration must have a Web redirect URI of https://&lt;your-domain&gt;.immy.bot/consent-callback, replacing &lt;your-domain&gt; appropriately. Please see the updated [custom app registration docs](https://docs.immy.bot/azure-graph-permissions-setup.html#create-an-app-registration) for details on how to add the redirect URI

### Other Improvements

- Onboarding only maintenance tasks now have an option to "Ignore during automatic onboarding". This is useful if you have an installer set to automatically onboard the computer and the task requires data that wasn't able to be provided.
- Improved code around establishing Ephemeral Agent connection & eliminated possible race condition.
- Prepend an "[ImmyBot User]" tag for the username that displays for remote session started from a supported provider.
  This makes it clear at a glance who is connected to a machine initiated from an ImmyBot user.
- Removed the need for executing suspicious-looking encoded powershell for N-Central integration which would trigger some AV alerts while also moderately decreasing latency to start ephemeral agent.
- When the Immy Agent fails to update during a maintenance session, it will now retry up to 3 times in case it failed due to a transient error
- You can now assign tags to a computer from its Onboarding form
  - ![image](https://immybot.blob.core.windows.net/release-media/0c452151-e33b-4f4f-9c5a-2ec21c4670a2)
- When we run a script and to establish an ephemeral agent and detect that there are no online agents, we only wait 5 minutes instead of 30 minutes. For integrations like Automate and N-Central and don't support connectivity changed events, a machine would potentially restart so fast the RMM was unaware, therefore we would wait 30 minutes before realizing the machine was actually online.
- Removed execute and verify progress bars when action is a task monitor, and changed the "detect" progress text to "monitor".
- Added the ability to change a computer's primary user from the overview page.
- Improved performance of computer list page when sorting by Date Created
- Added `-IncludeTags` switch parameter to `Get-ImmyComputer` that includes an array of tags containing the tag id and the tag name
- Added a date input to the dashboard page to optionally return actions that were executed on or after the specified date
- Added basic health check functionality to all integrations that were missing health checks
- Added a test suite for the NCentral integration to run in our build pipeline to help reduce bugs
- Made the main scripts table use server-side pagination to decrease the amount of data initially transferred to the page. Global scripts are now showing over 3MB combined.
- Added better error messages when we fail to sync users due to permissions issues
- Improved and simplified some internal logic related to permissions in our Metascript cmdlets

### Bug Fixes

- Fixed an issue with tag acccess levels not saving the limited tenants selected
- Fixed an issue with metacript exception handling where any error with the category `OperationStopped` was being treated as terminating exception
- Fixed an issue with Uri parameter values being inserted into scripts with type `string` instead of type `Uri`
- Fixed an issue where the software upload analysis result description had the wrong color making it impossible to read
- Fixed issue on the computer list -> pending tab where massive exceptions were not limited to a reasonable height
- Fixed issues with SQL queries timing out early than intended
  Fixed a bug that would prevent users from actually using the N-Central integration with servers that are hosted on a non-standard port.
- Fixed an issue where the tenant link on a computer's overview page had a bunch of whitespace that could be accidentally clicked.

## 0.54.8

Released 2023-01-17

### Bug Fixes

- Fixed a potential deadlock that could cause the ephemeral agent to never connect. Potentially isolated to just devices using CW Automate
- Fixed a potential deadlock in the N-Central integration that could cause Immy to hang up
- Fixed some frontend issues where a maintenance action's status and reason would not show correctly for certain values
- Fixed an issue where a terminating exception in a custom download script would get swallowed and allow the install to continue anyway
