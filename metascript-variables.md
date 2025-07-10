# Metascript Variables

## Passing Variables to Metascript Context

In order to pass variables to the metascript context, you have to create a Task in the Software
Library workflow. See "SentinelOne - Custom" Library installation for reference.

## Discovering Variables in Metascript Context

The following a harness script that can be used to determine what variables are being passed into
the current execution context

```powershell
# Diagnostic Harness Script: Enumerate All Available Variables
#
# PURPOSE:
# To be run as a custom script in a Library Software Deployment step to determine the variables
# being passed to the current step execution context.

$VerbosePreference = 'Continue'
Write-Host "--- Diagnostic Harness Script Started: Enumerating all available variables ---"

try {
    # Get all variables, sort them by name for readability.
    # Format-List is used to handle multi-line values cleanly.
    # Out-String converts the formatted list into a single block of text.
    $variableDump = Get-Variable | Sort-Object -Property Name | Format-List | Out-String

    Write-Host "--- BEGIN VARIABLE DUMP ---"
    Write-Host $variableDump
    Write-Host "--- END VARIABLE DUMP ---"

    # Intentionally throw an error at the end so the task
    # still registers as 'failed' but only after we've seen the output.
    # This prevents it from being marked as a success, which would be misleading.
    throw "Harness script completed successfully. See log for variable dump."

} catch {
    # Re-throw the exception to ensure the task fails correctly in ImmyBot.
    # This will catch our intentional throw from above.
    Write-Error "DIAGNOSTIC SCRIPT: $_"
    throw
}
```

### Installation Phase Variables

```Log Output


### Variables Passed from Test to Uninstall

```Log
--- Diagnostic Script Started: Enumerating all available variables ---
--- BEGIN VARIABLE DUMP ---
Value       : True
Name        : ?
Description : Status of last command
Visibility  : Public
Module      :
ModuleName  :
Options     : ReadOnly, AllScope
Attributes  : {}

Name        : ActionDesiredSoftwareState
Description : The desired software state
Value       : AnyVersion
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ActionDesiredVersion
Description : The desired version
Value       : 24.2.471
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ActionDetectedVersion
Description : The detected version
Value       : 24.2.471
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ActionId
Description : Id of the maintenance action
Value       : 1164376
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ActionName
Description : Name of the maintenance action
Value       : SentinelOne - Custom
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ActionParameters
Description : The parameters supplied by the call to Add-ImmyMaintenanceActionChild
Value       :
Visibility  : Public
Module      :
ModuleName  :
Options     : ReadOnly
Attributes  : {}

Name        : ActionReason
Description : Reason for the status of the maintenance action
Value       : TestFailed
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ActionResult
Description : Result of the maintenance action
Value       : Pending
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ActionResultReason
Description : Reason for the result of the maintenance action
Value       :
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ActionStatus
Description : Status of the maintenance action
Value       : Downloading
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ActionType
Description : Script variable injected by ImmyBot
Value       : Reinstall
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : ApiKey
Description : Script variable injected by ImmyBot
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Options     : None
Value       : {}
Name        : args
Description :
Visibility  : Public
Module      :
ModuleName  :
Attributes  : {}

Name        : AssignmentId
Description : Script variable injected by ImmyBot
Value       : 1077
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : AssignmentScope
Description : Script variable injected by ImmyBot
Value       : SingleTenant
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : AssignmentType
Description : Script variable injected by ImmyBot
Value       : Local
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : AutoConsentToReboots
Description : Script variable injected by ImmyBot
Value       : False
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : AzureTenantId
Description : Script variable injected by ImmyBot
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : CanAccessParentTenant
Description : Can Access Parent Tenant
Value       : True
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : Computer
Description : Computer
Value       : Immybot.Backend.Application.Interface.MetaScripts.PSComputer
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : ComputerName
Description : Script variable injected by ImmyBot
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : ConfirmPreference
Description : Dictates when confirmation should be requested. Confirmation is requested when the ConfirmImpact of the operation is equal to or greater than $ConfirmPreference. If $ConfirmPreference is None, actions will only be confirmed when Confirm is specified.
Value       : High
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {System.Management.Automation.ArgumentTypeConverterAttribute}

Name        : CreateSiteIfMissing
Description : Script variable injected by ImmyBot
Value       : False
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : DebugPreference
Description : Dictates the action taken when a Debug message is delivered
Value       : SilentlyContinue
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {System.Management.Automation.ArgumentTypeConverterAttribute}

Name        : DesiredState
Description : Script variable injected by ImmyBot
Value       : AnyVersion
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : DetectionString
Description : Script variable injected by ImmyBot
Value       : ^Sentinel Agent$
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : DeviceId
Description : Script variable injected by ImmyBot
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : DynamicIntegrationTypeProperties
Description : Dynamic Integration Type Properties
Value       :
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : EnabledExperimentalFeatures
Description : Variable to hold the enabled experimental feature names
Value       : {}
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant, AllScope
Attributes  : {}

Name        : Error
Description :
Value       : {}
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ErrorActionPreference
Description : Dictates the action taken when an error message is delivered
Value       : Continue
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {System.Management.Automation.ArgumentTypeConverterAttribute}

Name        : ErrorView
Description : Dictates the view mode to use when displaying errors
Value       : ConciseView
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : ExecutionContext
Description : The run objects available to cmdlets
Value       : System.Management.Automation.EngineIntrinsics
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant, AllScope
Attributes  : {}

Name        : false
Description : Boolean False
Value       : False
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant, AllScope
Attributes  : {}

Name        : FormatEnumerationLimit
Description : Dictates the limit of enumeration on formatting IEnumerable objects
Value       : 4
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : GroupNameOverride
Description : Script variable injected by ImmyBot
Value       :
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : HOME
Description : Folder containing the current user's profile
Value       : /home
Visibility  : Public
Module      :
ModuleName  :
Options     : ReadOnly, AllScope
Attributes  : {}

Name        : Host
Description : A reference to the host of the current runspace
Value       : System.Management.Automation.Internal.Host.InternalHost
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant, AllScope
Attributes  : {}

Name        : ImmyBotVersion
Description : ImmyBot Version
Value       : 0.69.1-build.40670
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ImmyScriptPath
Description : Path relative to %PROGRAMDATA%\ImmyBot\Scripts wherein Immy scripts and logs are placed
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : InformationPreference
Description : Dictates the action taken when a command generates an item in the Information stream
Value       : SilentlyContinue
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {System.Management.Automation.ArgumentTypeConverterAttribute}

Options     : None
Value       : System.Collections.ArrayList+ArrayListEnumeratorSimple
Name        : input
Description :
Visibility  : Public
Module      :
ModuleName  :
Attributes  : {}

Name        : IntegrationContext
Description : Integration Context
Value       :
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : IsPortable
Description : Script variable injected by ImmyBot
Value       : False
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : IsServer
Description : Script variable injected by ImmyBot
Value       : False
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : MaintenanceTaskName
Description : Script variable injected by ImmyBot
Value       : Configure SentinelOne - Custom
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Options     : None
Value       : System.Management.Automation.InvocationInfo
Name        : MyInvocation
Description :
Visibility  : Public
Module      :
ModuleName  :
Attributes  : {}

Name        : NestedPromptLevel
Description : Dictates what type of prompt should be displayed for the current nesting level
Value       : 0
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Value       :
Description : References to the null variable always return the null value. Assignments have no effect.
Options     : None
Name        : null
Visibility  : Public
Module      :
ModuleName  :
Attributes  : {}

Name        : OutputEncoding
Description : The text encoding used when piping text to a native executable file
Value       : System.Text.UTF8Encoding+UTF8EncodingSealed
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {System.Management.Automation.ArgumentTypeConverterAttribute}

Name        : Passphrase
Description : Script variable injected by ImmyBot
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : PID
Description : Current process ID
Value       : 1102
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant, AllScope
Attributes  : {}

Name        : PrimaryPersonAzurePrincipalId
Description : Script variable injected by ImmyBot
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : PrimaryPersonEmail
Description : Script variable injected by ImmyBot
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : ProgressPreference
Description : Dictates the action taken when progress records are delivered
Value       : Continue
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {System.Management.Automation.ArgumentTypeConverterAttribute}

Name        : PromptTimeout
Description : Script variable injected by ImmyBot
Value       : 00:05:00
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : PromptTimeoutAction
Description : Script variable injected by ImmyBot
Value       : Suppress
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Options     : None
Value       : {}
Name        : PSBoundParameters
Description :
Visibility  : Public
Module      :
ModuleName  :
Attributes  : {}

Options     : None
Value       :
Name        : PSCommandPath
Description :
Visibility  : Public
Module      :
ModuleName  :
Attributes  : {}

Value       :
Name        : PSCulture
Description : Culture of the current PowerShell session
Visibility  : Public
Module      :
ModuleName  :
Options     : ReadOnly, AllScope
Attributes  : {}

Name        : PSDefaultParameterValues
Description : Variable to hold all default <cmdlet:parameter, value> pairs
Value       : {}
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {System.Management.Automation.ArgumentTypeConverterAttribute}

Name        : PSEdition
Description : Edition information for the current PowerShell session
Value       : Core
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant, AllScope
Attributes  : {}

Name        : PSHOME
Description : Parent folder of the host application of the current runspace
Value       : /home/site/wwwroot/runtimes/unix/lib/net8.0
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant, AllScope
Attributes  : {}

Name        : PSModuleAutoLoadingPreference
Description : Defines the preference options for the Module Auto-loading feature
Value       : None
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Options     : None
Value       :
Name        : PSScriptRoot
Description :
Visibility  : Public
Module      :
ModuleName  :
Attributes  : {}

Value       :
Name        : PSUICulture
Description : UI culture of the current PowerShell session
Visibility  : Public
Module      :
ModuleName  :
Options     : ReadOnly, AllScope
Attributes  : {}

Name        : PSVersionTable
Description : Version information for current PowerShell session
Value       : {[PSVersion, 7.4.0], [PSEdition, Core], [GitCommitId, 7.4.0], [OS, Debian GNU/Linux 12 (bookworm)]…}
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant, AllScope
Attributes  : {}

Name        : RebootPreference
Description : Script variable injected by ImmyBot
Value       : Suppress
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : ScriptName
Description : Script name injected by ImmyBot
Value       : SentinelOne - Custom Uninstallation Script
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ScriptVariables
Description : Script variables injected by ImmyBot
Value       : {[ApiKey, *redacted*], [Passphrase, *redacted*], [CreateSiteIfMissing, False], [SentinelOneUri, *redacted*]…}
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : SentinelOneUri
Description : Script variable injected by ImmyBot
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : ServerProxy
Description : Script variable injected by ImmyBot
Value       :
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : SessionGroupID
Description : Used to correlate groups of sessions that were all spawned by the same Schedule
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : SessionId
Description : Id of the maintenance session
Value       : 90378
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : SessionIsRepairing
Description : Is this a repair session
Value       : False
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant
Attributes  : {}

Name        : ShellId
Description : The ShellID identifies the current shell.  This is used by #Requires.
Value       : Microsoft.PowerShell
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant, AllScope
Attributes  : {}

Name        : ShouldUseParentTenant
Description : Script variable injected by ImmyBot
Value       : False
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : SiteNameOverride
Description : Script variable injected by ImmyBot
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : SoftwareName
Description : Script variable injected by ImmyBot
Value       : SentinelOne - Custom
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : TenantId
Description : Script variable injected by ImmyBot
Value       : 1
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : TenantName
Description : Script variable injected by ImmyBot
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : TenantSlug
Description : Script variable injected by ImmyBot
Value       : *redacted*
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : true
Description : Boolean True
Value       : True
Visibility  : Public
Module      :
ModuleName  :
Options     : Constant, AllScope
Attributes  : {}

Name        : UpgradeCode
Description : Script variable injected by ImmyBot
Value       :
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

Name        : VerbosePreference
Description : Dictates the action taken when a Verbose message is delivered
Value       : Continue
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {System.Management.Automation.ArgumentTypeConverterAttribute}

Name        : WarningPreference
Description : Dictates the action taken when a Warning message is delivered
Value       : Continue
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {System.Management.Automation.ArgumentTypeConverterAttribute}

Name        : WhatIfPreference
Description : If true, WhatIf is considered to be enabled for all commands.
Value       : False
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}
--- END VARIABLE DUMP ---
