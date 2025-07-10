# Metascript Functions O through R

## O

### Open-NetGPO

```powershell
Open-NetGPO [-PolicyStore] <string> [-DomainController <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DomainController <string> (Required: false)
- PolicyStore <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Optimize-AppxProvisionedPackages

```powershell
Optimize-AppXProvisionedPackages -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Optimize-AppXProvisionedPackages -Online [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Optimize-StoragePool

```powershell
Optimize-StoragePool [-FriendlyName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Optimize-StoragePool -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Optimize-StoragePool -Name <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Optimize-StoragePool -InputObject <CimInstance#MSFT_StoragePool[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_StoragePool[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Optimize-Volume

```powershell
Optimize-Volume [-DriveLetter] <char[]> [-ReTrim] [-Analyze] [-Defrag] [-SlabConsolidate] [-TierOptimize] [-NormalPriority] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Optimize-Volume -ObjectId <string[]> [-ReTrim] [-Analyze] [-Defrag] [-SlabConsolidate] [-TierOptimize] [-NormalPriority] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Optimize-Volume -Path <string[]> [-ReTrim] [-Analyze] [-Defrag] [-SlabConsolidate] [-TierOptimize] [-NormalPriority] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Optimize-Volume -FileSystemLabel <string[]> [-ReTrim] [-Analyze] [-Defrag] [-SlabConsolidate] [-TierOptimize] [-NormalPriority] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Optimize-Volume -InputObject <CimInstance#MSFT_Volume[]> [-ReTrim] [-Analyze] [-Defrag] [-SlabConsolidate] [-TierOptimize] [-NormalPriority] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Analyze <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Defrag <switch> (Required: false)
- DriveLetter <char[]> (Required: true)
- FileSystemLabel <string[]> (Required: true)
- InputObject <CimInstance#MSFT_Volume[]> (Required: true)
- NormalPriority <switch> (Required: false)
- ObjectId <string[]> (Required: true)
- Path <string[]> (Required: true)
- ReTrim <switch> (Required: false)
- SlabConsolidate <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- TierOptimize <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Optimize-WindowsImage

```powershell
Optimize-WindowsImage -OptimizationTarget <string> -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- OptimizationTarget <string> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Options-NinjaTag

```powershell
Options-NinjaTag

```

### oss

```powershell
Out-String [-Stream] [-Width <int>] [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- InputObject <psobject> (Required: false)
- Stream <switch> (Required: false)
- Width <int> (Required: false)
```

### Out-Default

```powershell
Out-Default [-Transcript] [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- InputObject <psobject> (Required: false)
- Transcript <switch> (Required: false)
```

### Out-File

```powershell
Out-File [-FilePath] <string> [[-Encoding] <string>] [-Append] [-Force] [-NoClobber] [-Width <int>] [-NoNewline] [-InputObject <psobject>] [-WhatIf] [-Confirm] [<CommonParameters>]

Out-File [[-Encoding] <string>] -LiteralPath <string> [-Append] [-Force] [-NoClobber] [-Width <int>] [-NoNewline] [-InputObject <psobject>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Append <switch> (Required: false)
- Confirm <switch> (Required: false)
- Encoding <string> (Required: false)
- FilePath <string> (Required: true)
- Force <switch> (Required: false)
- InputObject <psobject> (Required: false)
- LiteralPath <string> (Required: true)
- NoClobber <switch> (Required: false)
- NoNewline <switch> (Required: false)
- WhatIf <switch> (Required: false)
- Width <int> (Required: false)
```

### Out-GridView

```powershell
Out-GridView [-InputObject <psobject>] [-Title <string>] [-PassThru] [<CommonParameters>]

Out-GridView [-InputObject <psobject>] [-Title <string>] [-Wait] [<CommonParameters>]

Out-GridView [-InputObject <psobject>] [-Title <string>] [-OutputMode <OutputModeOption>] [<CommonParameters>]

PARAMETERS:
- InputObject <psobject> (Required: false)
- OutputMode <OutputModeOption> (Required: false)
- PassThru <switch> (Required: false)
- Title <string> (Required: false)
- Wait <switch> (Required: false)
```

### Out-Host

```powershell
Out-Host [-Paging] [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- InputObject <psobject> (Required: false)
- Paging <switch> (Required: false)
```

### Out-Null

```powershell
Out-Null [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- InputObject <psobject> (Required: false)
```

### Out-Printer

```powershell
Out-Printer [[-Name] <string>] [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- InputObject <psobject> (Required: false)
- Name <string> (Required: false)
```

### Out-String

```powershell
Out-String [-Stream] [-Width <int>] [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- InputObject <psobject> (Required: false)
- Stream <switch> (Required: false)
- Width <int> (Required: false)
```

## P

### Pause

```powershell
Pause
```

### Pop-Location

```powershell
Pop-Location [-PassThru] [-StackName <string>] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- PassThru <switch> (Required: false)
- StackName <string> (Required: false)
- UseTransaction <switch> (Required: false)
```

### prompt

```powershell
DESCRIPTION:


```

### Protect-CmsMessage

```powershell
Protect-CmsMessage [-To] <CmsMessageRecipient[]> [-Content] <psobject> [[-OutFile] <string>] [<CommonParameters>]

Protect-CmsMessage [-To] <CmsMessageRecipient[]> [-Path] <string> [[-OutFile] <string>] [<CommonParameters>]

Protect-CmsMessage [-To] <CmsMessageRecipient[]> [-LiteralPath] <string> [[-OutFile] <string>] [<CommonParameters>]

PARAMETERS:
- Content <psobject> (Required: true)
- LiteralPath <string> (Required: true)
- OutFile <string> (Required: false)
- Path <string> (Required: true)
- To <CmsMessageRecipient[]> (Required: true)
```

### PSConsoleHostReadLine

```powershell
PSConsoleHostReadLine

```

### Publish-AppvClientPackage

```powershell
Publish-AppvClientPackage [-PackageId] <guid> [-VersionId] <guid> [[-DynamicUserConfigurationPath] <string>] [-Global] [-UserSID <string>] [-DynamicUserConfigurationType <DynamicUserConfiguration>] [<CommonParameters>]

Publish-AppvClientPackage [-Package] <AppvClientPackage> [[-DynamicUserConfigurationPath] <string>] [-Global] [-UserSID <string>] [-DynamicUserConfigurationType <DynamicUserConfiguration>] [<CommonParameters>]

Publish-AppvClientPackage [-Name] <string> [[-Version] <string>] [-Global] [-UserSID <string>] [-DynamicUserConfigurationPath <string>] [-DynamicUserConfigurationType <DynamicUserConfiguration>] [<CommonParameters>]

PARAMETERS:
- DynamicUserConfigurationPath <string> (Required: false)
- DynamicUserConfigurationType <DynamicUserConfiguration> (Required: false)
- Global <switch> (Required: false)
- Name <string> (Required: true)
- Package <AppvClientPackage> (Required: true)
- PackageId <guid> (Required: true)
- UserSID <string> (Required: false)
- Version <string> (Required: false)
- VersionId <guid> (Required: true)
```

### Publish-BCFileContent

```powershell
Publish-BCFileContent [-Path] <string[]> [-UseVersion <uint32>] [-StageData] [-StagingPath <string>] [-ReferenceFile <string>] [-Force] [-Recurse] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Path <string[]> (Required: true)
- Recurse <switch> (Required: false)
- ReferenceFile <string> (Required: false)
- StageData <switch> (Required: false)
- StagingPath <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseVersion <uint32> (Required: false)
- WhatIf <switch> (Required: false)
```

### Publish-BCWebContent

```powershell
Publish-BCWebContent [-Path] <string[]> [-UseVersion <uint32>] [-StageData] [-StagingPath <string>] [-ReferenceFile <string>] [-Force] [-Recurse] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Path <string[]> (Required: true)
- Recurse <switch> (Required: false)
- ReferenceFile <string> (Required: false)
- StageData <switch> (Required: false)
- StagingPath <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseVersion <uint32> (Required: false)
- WhatIf <switch> (Required: false)
```

### Publish-DscConfiguration

```powershell
Publish-DscConfiguration [-Path] <string> [[-ComputerName] <string[]>] [-Force] [-Credential <pscredential>] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Publish-DscConfiguration [-Path] <string> -CimSession <CimSession[]> [-Force] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession[]> (Required: true)
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- Path <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Publish-Module

```powershell
Publish-Module -Name <string> [-RequiredVersion <version>] [-NuGetApiKey <string>] [-Repository <string>] [-Credential <pscredential>] [-FormatVersion <version>] [-ReleaseNotes <string[]>] [-Tags <string[]>] [-LicenseUri <uri>] [-IconUri <uri>] [-ProjectUri <uri>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Publish-Module -Path <string> [-NuGetApiKey <string>] [-Repository <string>] [-Credential <pscredential>] [-FormatVersion <version>] [-ReleaseNotes <string[]>] [-Tags <string[]>] [-LicenseUri <uri>] [-IconUri <uri>] [-ProjectUri <uri>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- FormatVersion <version> (Required: false)
- IconUri <uri> (Required: false)
- LicenseUri <uri> (Required: false)
- Name <string> (Required: true)
- NuGetApiKey <string> (Required: false)
- Path <string> (Required: true)
- ProjectUri <uri> (Required: false)
- ReleaseNotes <string[]> (Required: false)
- Repository <string> (Required: false)
- RequiredVersion <version> (Required: false)
- Tags <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Publish-Script

```powershell
Publish-Script -Path <string> [-NuGetApiKey <string>] [-Repository <string>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Publish-Script -LiteralPath <string> [-NuGetApiKey <string>] [-Repository <string>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- LiteralPath <string> (Required: true)
- NuGetApiKey <string> (Required: false)
- Path <string> (Required: true)
- Repository <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Push-Location

```powershell
Push-Location [[-Path] <string>] [-PassThru] [-StackName <string>] [-UseTransaction] [<CommonParameters>]

Push-Location [-LiteralPath <string>] [-PassThru] [-StackName <string>] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- LiteralPath <string> (Required: false)
- PassThru <switch> (Required: false)
- Path <string> (Required: false)
- StackName <string> (Required: false)
- UseTransaction <switch> (Required: false)
```

## Q

## R

### Read-Host

```powershell
Read-Host [[-Prompt] <Object>] [-AsSecureString] [<CommonParameters>]

PARAMETERS:
- AsSecureString <switch> (Required: false)
- Prompt <Object> (Required: false)
```

### Read-PrinterNfcTag

```powershell
Read-PrinterNfcTag [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Receive-DtcDiagnosticTransaction

```powershell
Receive-DtcDiagnosticTransaction [[-ComputerName] <string>] [[-Port] <int>] [[-PropagationMethod] <DtcTransactionPropagation>] [<CommonParameters>]

PARAMETERS:
- ComputerName <string> (Required: false)
- Port <int> (Required: false)
- PropagationMethod <DtcTransactionPropagation> (Required: false)
```

### Receive-Job

```powershell
Receive-Job [-Job] <Job[]> [[-Location] <string[]>] [-Keep] [-NoRecurse] [-Force] [-Wait] [-AutoRemoveJob] [-WriteEvents] [-WriteJobInResults] [<CommonParameters>]

Receive-Job [-Job] <Job[]> [[-ComputerName] <string[]>] [-Keep] [-NoRecurse] [-Force] [-Wait] [-AutoRemoveJob] [-WriteEvents] [-WriteJobInResults] [<CommonParameters>]

Receive-Job [-Job] <Job[]> [[-Session] <PSSession[]>] [-Keep] [-NoRecurse] [-Force] [-Wait] [-AutoRemoveJob] [-WriteEvents] [-WriteJobInResults] [<CommonParameters>]

Receive-Job [-Name] <string[]> [-Keep] [-NoRecurse] [-Force] [-Wait] [-AutoRemoveJob] [-WriteEvents] [-WriteJobInResults] [<CommonParameters>]

Receive-Job [-InstanceId] <guid[]> [-Keep] [-NoRecurse] [-Force] [-Wait] [-AutoRemoveJob] [-WriteEvents] [-WriteJobInResults] [<CommonParameters>]

Receive-Job [-Id] <int[]> [-Keep] [-NoRecurse] [-Force] [-Wait] [-AutoRemoveJob] [-WriteEvents] [-WriteJobInResults] [<CommonParameters>]

PARAMETERS:
- AutoRemoveJob <switch> (Required: false)
- ComputerName <string[]> (Required: false)
- Force <switch> (Required: false)
- Id <int[]> (Required: true)
- InstanceId <guid[]> (Required: true)
- Job <Job[]> (Required: true)
- Keep <switch> (Required: false)
- Location <string[]> (Required: false)
- Name <string[]> (Required: true)
- NoRecurse <switch> (Required: false)
- Session <PSSession[]> (Required: false)
- Wait <switch> (Required: false)
- WriteEvents <switch> (Required: false)
- WriteJobInResults <switch> (Required: false)
```

### Receive-PSSession

```powershell
Receive-PSSession [-Session] <PSSession> [-OutTarget <OutTarget>] [-JobName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Receive-PSSession [-Id] <int> [-OutTarget <OutTarget>] [-JobName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Receive-PSSession [-ComputerName] <string> -InstanceId <guid> [-ApplicationName <string>] [-ConfigurationName <string>] [-OutTarget <OutTarget>] [-JobName <string>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-Port <int>] [-UseSSL] [-SessionOption <PSSessionOption>] [-WhatIf] [-Confirm] [<CommonParameters>]

Receive-PSSession [-ComputerName] <string> -Name <string> [-ApplicationName <string>] [-ConfigurationName <string>] [-OutTarget <OutTarget>] [-JobName <string>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-Port <int>] [-UseSSL] [-SessionOption <PSSessionOption>] [-WhatIf] [-Confirm] [<CommonParameters>]

Receive-PSSession [-ConnectionUri] <uri> -Name <string> [-ConfigurationName <string>] [-AllowRedirection] [-OutTarget <OutTarget>] [-JobName <string>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-SessionOption <PSSessionOption>] [-WhatIf] [-Confirm] [<CommonParameters>]

Receive-PSSession [-ConnectionUri] <uri> -InstanceId <guid> [-ConfigurationName <string>] [-AllowRedirection] [-OutTarget <OutTarget>] [-JobName <string>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-SessionOption <PSSessionOption>] [-WhatIf] [-Confirm] [<CommonParameters>]

Receive-PSSession [-InstanceId] <guid> [-OutTarget <OutTarget>] [-JobName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Receive-PSSession [-Name] <string> [-OutTarget <OutTarget>] [-JobName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowRedirection <switch> (Required: false)
- ApplicationName <string> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string> (Required: true)
- ConfigurationName <string> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionUri <uri> (Required: true)
- Credential <pscredential> (Required: false)
- Id <int> (Required: true)
- InstanceId <guid> (Required: true)
- JobName <string> (Required: false)
- Name <string> (Required: true)
- OutTarget <OutTarget> (Required: false)
- Port <int> (Required: false)
- Session <PSSession> (Required: true)
- SessionOption <PSSessionOption> (Required: false)
- UseSSL <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Register-ArgumentCompleter

```powershell
Register-ArgumentCompleter -CommandName <string[]> -ScriptBlock <scriptblock> [-Native] [<CommonParameters>]

Register-ArgumentCompleter -ParameterName <string> -ScriptBlock <scriptblock> [-CommandName <string[]>] [<CommonParameters>]

PARAMETERS:
- CommandName <string[]> (Required: true)
- Native <switch> (Required: false)
- ParameterName <string> (Required: true)
- ScriptBlock <scriptblock> (Required: true)
```

### Register-CimIndicationEvent

```powershell
Register-CimIndicationEvent [-ClassName] <string> [[-SourceIdentifier] <string>] [[-Action] <scriptblock>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-ComputerName <string>] [-MessageData <psobject>] [-SupportEvent] [-Forward] [-MaxTriggerCount <int>] [<CommonParameters>]

Register-CimIndicationEvent [-ClassName] <string> [[-SourceIdentifier] <string>] [[-Action] <scriptblock>] -CimSession <CimSession> [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-MessageData <psobject>] [-SupportEvent] [-Forward] [-MaxTriggerCount <int>] [<CommonParameters>]

Register-CimIndicationEvent [-Query] <string> [[-SourceIdentifier] <string>] [[-Action] <scriptblock>] -CimSession <CimSession> [-Namespace <string>] [-QueryDialect <string>] [-OperationTimeoutSec <uint32>] [-MessageData <psobject>] [-SupportEvent] [-Forward] [-MaxTriggerCount <int>] [<CommonParameters>]

Register-CimIndicationEvent [-Query] <string> [[-SourceIdentifier] <string>] [[-Action] <scriptblock>] [-Namespace <string>] [-QueryDialect <string>] [-OperationTimeoutSec <uint32>] [-ComputerName <string>] [-MessageData <psobject>] [-SupportEvent] [-Forward] [-MaxTriggerCount <int>] [<CommonParameters>]

PARAMETERS:
- Action <scriptblock> (Required: false)
- CimSession <CimSession> (Required: true)
- ClassName <string> (Required: true)
- ComputerName <string> (Required: false)
- Forward <switch> (Required: false)
- MaxTriggerCount <int> (Required: false)
- MessageData <psobject> (Required: false)
- Namespace <string> (Required: false)
- OperationTimeoutSec <uint32> (Required: false)
- Query <string> (Required: true)
- QueryDialect <string> (Required: false)
- SourceIdentifier <string> (Required: false)
- SupportEvent <switch> (Required: false)
```

### Register-ClusteredScheduledTask

```powershell
Register-ClusteredScheduledTask [-TaskName] <string> [[-TaskType] <ClusterTaskTypeEnum>] [-InputObject] <CimInstance#MSFT_ScheduledTask> [[-Cluster] <string>] [[-Resource] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Register-ClusteredScheduledTask [-TaskName] <string> [[-TaskType] <ClusterTaskTypeEnum>] [-Xml] <string> [[-Cluster] <string>] [[-Resource] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Register-ClusteredScheduledTask [-TaskName] <string> [[-TaskType] <ClusterTaskTypeEnum>] [-Action] <CimInstance#MSFT_TaskAction[]> [[-Trigger] <CimInstance#MSFT_TaskTrigger[]>] [[-Settings] <CimInstance#MSFT_TaskSettings>] [[-Description] <string>] [[-Cluster] <string>] [[-Resource] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Action <CimInstance#MSFT_TaskAction[]> (Required: true)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Cluster <string> (Required: false)
- Description <string> (Required: false)
- InputObject <CimInstance#MSFT_ScheduledTask> (Required: true)
- Resource <string> (Required: false)
- Settings <CimInstance#MSFT_TaskSettings> (Required: false)
- TaskName <string> (Required: true)
- TaskType <ClusterTaskTypeEnum> (Required: false)
- ThrottleLimit <int> (Required: false)
- Trigger <CimInstance#MSFT_TaskTrigger[]> (Required: false)
- Xml <string> (Required: true)
```

### Register-DnsClient

```powershell
Register-DnsClient [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Register-EngineEvent

```powershell
Register-EngineEvent [-SourceIdentifier] <string> [[-Action] <scriptblock>] [-MessageData <psobject>] [-SupportEvent] [-Forward] [-MaxTriggerCount <int>] [<CommonParameters>]

PARAMETERS:
- Action <scriptblock> (Required: false)
- Forward <switch> (Required: false)
- MaxTriggerCount <int> (Required: false)
- MessageData <psobject> (Required: false)
- SourceIdentifier <string> (Required: true)
- SupportEvent <switch> (Required: false)
```

### Register-IscsiSession

```powershell
Register-IscsiSession -SessionIdentifier <string[]> [-IsMultipathEnabled <bool>] [-ChapUsername <string>] [-ChapSecret <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Register-IscsiSession -InputObject <CimInstance#MSFT_iSCSISession[]> [-IsMultipathEnabled <bool>] [-ChapUsername <string>] [-ChapSecret <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- ChapSecret <string> (Required: false)
- ChapUsername <string> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_iSCSISession[]> (Required: true)
- IsMultipathEnabled <bool> (Required: false)
- PassThru <switch> (Required: false)
- SessionIdentifier <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Register-ObjectEvent

```powershell
Register-ObjectEvent [-InputObject] <psobject> [-EventName] <string> [[-SourceIdentifier] <string>] [[-Action] <scriptblock>] [-MessageData <psobject>] [-SupportEvent] [-Forward] [-MaxTriggerCount <int>] [<CommonParameters>]

PARAMETERS:
- Action <scriptblock> (Required: false)
- EventName <string> (Required: true)
- Forward <switch> (Required: false)
- InputObject <psobject> (Required: true)
- MaxTriggerCount <int> (Required: false)
- MessageData <psobject> (Required: false)
- SourceIdentifier <string> (Required: false)
- SupportEvent <switch> (Required: false)
```

### Register-PackageSource

```powershell
Register-PackageSource [[-Name] <string>] [[-Location] <string>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Trusted] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-ProviderName <string>] [<CommonParameters>]

Register-PackageSource [[-Name] <string>] [[-Location] <string>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Trusted] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-PackageManagementProvider <string>] [-PublishLocation <string>] [-ScriptSourceLocation <string>] [-ScriptPublishLocation <string>] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- Location <string> (Required: false)
- Name <string> (Required: false)
- PackageManagementProvider <string> (Required: false)
- ProviderName <string> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- PublishLocation <string> (Required: false)
- ScriptPublishLocation <string> (Required: false)
- ScriptSourceLocation <string> (Required: false)
- Trusted <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Register-PSRepository

```powershell
Register-PSRepository [-Name] <string> [-SourceLocation] <uri> [-PublishLocation <uri>] [-ScriptSourceLocation <uri>] [-ScriptPublishLocation <uri>] [-Credential <pscredential>] [-InstallationPolicy <string>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-PackageManagementProvider <string>] [<CommonParameters>]

Register-PSRepository -Default [-InstallationPolicy <string>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- Default <switch> (Required: true)
- InstallationPolicy <string> (Required: false)
- Name <string> (Required: true)
- PackageManagementProvider <string> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- PublishLocation <uri> (Required: false)
- ScriptPublishLocation <uri> (Required: false)
- ScriptSourceLocation <uri> (Required: false)
- SourceLocation <uri> (Required: true)
```

### Register-PSSessionConfiguration

```powershell
Register-PSSessionConfiguration [-Name] <string> [-ProcessorArchitecture <string>] [-SessionType <PSSessionType>] [-ApplicationBase <string>] [-RunAsCredential <pscredential>] [-ThreadApartmentState <ApartmentState>] [-ThreadOptions <PSThreadOptions>] [-AccessMode <PSSessionConfigurationAccessMode>] [-UseSharedProcess] [-StartupScript <string>] [-MaximumReceivedDataSizePerCommandMB <double>] [-MaximumReceivedObjectSizeMB <double>] [-SecurityDescriptorSddl <string>] [-ShowSecurityDescriptorUI] [-Force] [-NoServiceRestart] [-PSVersion <version>] [-SessionTypeOption <PSSessionTypeOption>] [-TransportOption <PSTransportOption>] [-ModulesToImport <Object[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Register-PSSessionConfiguration [-Name] <string> -Path <string> [-ProcessorArchitecture <string>] [-RunAsCredential <pscredential>] [-ThreadApartmentState <ApartmentState>] [-ThreadOptions <PSThreadOptions>] [-AccessMode <PSSessionConfigurationAccessMode>] [-UseSharedProcess] [-StartupScript <string>] [-MaximumReceivedDataSizePerCommandMB <double>] [-MaximumReceivedObjectSizeMB <double>] [-SecurityDescriptorSddl <string>] [-ShowSecurityDescriptorUI] [-Force] [-NoServiceRestart] [-TransportOption <PSTransportOption>] [-WhatIf] [-Confirm] [<CommonParameters>]

Register-PSSessionConfiguration [-Name] <string> [-AssemblyName] <string> [-ConfigurationTypeName] <string> [-ProcessorArchitecture <string>] [-ApplicationBase <string>] [-RunAsCredential <pscredential>] [-ThreadApartmentState <ApartmentState>] [-ThreadOptions <PSThreadOptions>] [-AccessMode <PSSessionConfigurationAccessMode>] [-UseSharedProcess] [-StartupScript <string>] [-MaximumReceivedDataSizePerCommandMB <double>] [-MaximumReceivedObjectSizeMB <double>] [-SecurityDescriptorSddl <string>] [-ShowSecurityDescriptorUI] [-Force] [-NoServiceRestart] [-PSVersion <version>] [-SessionTypeOption <PSSessionTypeOption>] [-TransportOption <PSTransportOption>] [-ModulesToImport <Object[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AccessMode <PSSessionConfigurationAccessMode> (Required: false)
- ApplicationBase <string> (Required: false)
- AssemblyName <string> (Required: true)
- ConfigurationTypeName <string> (Required: true)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- MaximumReceivedDataSizePerCommandMB <double> (Required: false)
- MaximumReceivedObjectSizeMB <double> (Required: false)
- ModulesToImport <Object[]> (Required: false)
- Name <string> (Required: true)
- NoServiceRestart <switch> (Required: false)
- PSVersion <version> (Required: false)
- Path <string> (Required: true)
- ProcessorArchitecture <string> (Required: false)
- RunAsCredential <pscredential> (Required: false)
- SecurityDescriptorSddl <string> (Required: false)
- SessionType <PSSessionType> (Required: false)
- SessionTypeOption <PSSessionTypeOption> (Required: false)
- ShowSecurityDescriptorUI <switch> (Required: false)
- StartupScript <string> (Required: false)
- ThreadApartmentState <ApartmentState> (Required: false)
- ThreadOptions <PSThreadOptions> (Required: false)
- TransportOption <PSTransportOption> (Required: false)
- UseSharedProcess <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Register-ScheduledJob

```powershell
Register-ScheduledJob [-Name] <string> [-ScriptBlock] <scriptblock> [-Trigger <ScheduledJobTrigger[]>] [-InitializationScript <scriptblock>] [-RunAs32] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-ScheduledJobOption <ScheduledJobOptions>] [-ArgumentList <Object[]>] [-MaxResultCount <int>] [-RunNow] [-RunEvery <timespan>] [-WhatIf] [-Confirm] [<CommonParameters>]

Register-ScheduledJob [-Name] <string> [-FilePath] <string> [-Trigger <ScheduledJobTrigger[]>] [-InitializationScript <scriptblock>] [-RunAs32] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-ScheduledJobOption <ScheduledJobOptions>] [-ArgumentList <Object[]>] [-MaxResultCount <int>] [-RunNow] [-RunEvery <timespan>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ArgumentList <Object[]> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- FilePath <string> (Required: true)
- InitializationScript <scriptblock> (Required: false)
- MaxResultCount <int> (Required: false)
- Name <string> (Required: true)
- RunAs32 <switch> (Required: false)
- RunEvery <timespan> (Required: false)
- RunNow <switch> (Required: false)
- ScheduledJobOption <ScheduledJobOptions> (Required: false)
- ScriptBlock <scriptblock> (Required: true)
- Trigger <ScheduledJobTrigger[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Register-ScheduledTask

```powershell
Register-ScheduledTask [-TaskName] <string> [[-TaskPath] <string>] [-Action] <CimInstance#MSFT_TaskAction[]> [[-Trigger] <CimInstance#MSFT_TaskTrigger[]>] [[-Settings] <CimInstance#MSFT_TaskSettings>] [[-User] <string>] [[-Password] <string>] [[-RunLevel] <RunLevelEnum>] [[-Description] <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Register-ScheduledTask [-TaskName] <string> [[-TaskPath] <string>] [-Xml] <string> [[-User] <string>] [[-Password] <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Register-ScheduledTask [-TaskName] <string> [[-TaskPath] <string>] [-Action] <CimInstance#MSFT_TaskAction[]> [[-Trigger] <CimInstance#MSFT_TaskTrigger[]>] [[-Settings] <CimInstance#MSFT_TaskSettings>] [[-Principal] <CimInstance#MSFT_TaskPrincipal>] [[-Description] <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Register-ScheduledTask [[-TaskName] <string>] [[-TaskPath] <string>] [-InputObject] <CimInstance#MSFT_ScheduledTask> [[-User] <string>] [[-Password] <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Action <CimInstance#MSFT_TaskAction[]> (Required: true)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Description <string> (Required: false)
- Force <switch> (Required: false)
- InputObject <CimInstance#MSFT_ScheduledTask> (Required: true)
- Password <string> (Required: false)
- Principal <CimInstance#MSFT_TaskPrincipal> (Required: false)
- RunLevel <RunLevelEnum> (Required: false)
- Settings <CimInstance#MSFT_TaskSettings> (Required: false)
- TaskName <string> (Required: true)
- TaskPath <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- Trigger <CimInstance#MSFT_TaskTrigger[]> (Required: false)
- User <string> (Required: false)
- Xml <string> (Required: true)
```

### Register-StorageSubsystem

```powershell
Register-StorageSubsystem [-ProviderName] <string[]> -ComputerName <string> [-Credential <pscredential>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Register-StorageSubsystem -ProviderUniqueId <string[]> -ComputerName <string> [-Credential <pscredential>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Register-StorageSubsystem -InputObject <CimInstance#MSFT_StorageProvider[]> -ComputerName <string> [-Credential <pscredential>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: true)
- Credential <pscredential> (Required: false)
- InputObject <CimInstance#MSFT_StorageProvider[]> (Required: true)
- ProviderName <string[]> (Required: true)
- ProviderUniqueId <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Register-UevTemplate

```powershell
Register-UevTemplate [-Path] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Register-UevTemplate -LiteralPath <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Register-WmiEvent

```powershell
Register-WmiEvent [-Class] <string> [[-SourceIdentifier] <string>] [[-Action] <scriptblock>] [-Namespace <string>] [-Credential <pscredential>] [-ComputerName <string>] [-Timeout <long>] [-MessageData <psobject>] [-SupportEvent] [-Forward] [-MaxTriggerCount <int>] [<CommonParameters>]

Register-WmiEvent [-Query] <string> [[-SourceIdentifier] <string>] [[-Action] <scriptblock>] [-Namespace <string>] [-Credential <pscredential>] [-ComputerName <string>] [-Timeout <long>] [-MessageData <psobject>] [-SupportEvent] [-Forward] [-MaxTriggerCount <int>] [<CommonParameters>]

PARAMETERS:
- Action <scriptblock> (Required: false)
- Class <string> (Required: true)
- ComputerName <string> (Required: false)
- Credential <pscredential> (Required: false)
- Forward <switch> (Required: false)
- MaxTriggerCount <int> (Required: false)
- MessageData <psobject> (Required: false)
- Namespace <string> (Required: false)
- Query <string> (Required: true)
- SourceIdentifier <string> (Required: false)
- SupportEvent <switch> (Required: false)
- Timeout <long> (Required: false)
```

### Remove-AppProvisionedSharedPackageContainer

```powershell
Remove-AppProvisionedSharedPackageContainer -Name <string> -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Remove-AppProvisionedSharedPackageContainer -Name <string> -Online [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Name <string> (Required: true)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Remove-AppSharedPackageContainer

```powershell
Remove-AppSharedPackageContainer [-Name] <string> [-ForceApplicationShutdown] [<CommonParameters>]

PARAMETERS:
- ForceApplicationShutdown <switch> (Required: false)
- Name <string> (Required: true)
```

### Remove-AppvClientConnectionGroup

```powershell
Remove-AppvClientConnectionGroup [-GroupId] <guid> [-VersionId] <guid> [<CommonParameters>]

Remove-AppvClientConnectionGroup [-Name] <string> [<CommonParameters>]

Remove-AppvClientConnectionGroup [-ConnectionGroup] <AppvClientConnectionGroup> [<CommonParameters>]

PARAMETERS:
- ConnectionGroup <AppvClientConnectionGroup> (Required: true)
- GroupId <guid> (Required: true)
- Name <string> (Required: true)
- VersionId <guid> (Required: true)
```

### Remove-AppvClientPackage

```powershell
Remove-AppvClientPackage [-PackageId] <guid> [-VersionId] <guid> [<CommonParameters>]

Remove-AppvClientPackage [-Package] <AppvClientPackage> [<CommonParameters>]

Remove-AppvClientPackage [-Name] <string> [[-Version] <string>] [<CommonParameters>]

PARAMETERS:
- Name <string> (Required: true)
- Package <AppvClientPackage> (Required: true)
- PackageId <guid> (Required: true)
- Safe <switch> (Required: false)
- Version <string> (Required: false)
- VersionId <guid> (Required: true)
```

### Remove-AppvPublishingServer

```powershell
Remove-AppvPublishingServer [-ServerId] <uint32> [<CommonParameters>]

Remove-AppvPublishingServer [-Server] <AppvPublishingServer> [<CommonParameters>]

Remove-AppvPublishingServer [[-Name] <string>] [[-URL] <string>] [<CommonParameters>]

PARAMETERS:
- Name <string> (Required: false)
- Server <AppvPublishingServer> (Required: true)
- ServerId <uint32> (Required: true)
- URL <string> (Required: false)
```

### Remove-AppxPackage

```powershell
Remove-AppxPackage [-Package] <string> [-PreserveApplicationData] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-AppxPackage [-Package] <string> [-PreserveRoamableApplicationData] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-AppxPackage [-Package] <string> [-AllUsers] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-AppxPackage [-Package] <string> -User <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllUsers <switch> (Required: false)
- Confirm <switch> (Required: false)
- Package <string> (Required: true)
- PreserveApplicationData <switch> (Required: false)
- PreserveRoamableApplicationData <switch> (Required: false)
- User <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-AppxPackageAutoUpdateSettings

```powershell
Remove-AppxPackageAutoUpdateSettings [-PackageFamilyName] <string> [-UseSystemPolicySource] [-AllUsers] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllUsers <switch> (Required: false)
- Confirm <switch> (Required: false)
- PackageFamilyName <string> (Required: true)
- UseSystemPolicySource <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-AppxProvisionedPackage

```powershell
Remove-AppxProvisionedPackage -PackageName <string> -Online [-AllUsers] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Remove-AppxProvisionedPackage -PackageName <string> -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- AllUsers <switch> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- PackageName <string> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Remove-AppxVolume

```powershell
Remove-AppxVolume [-Volume] <AppxVolume[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Volume <AppxVolume[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-AutologgerConfig

```powershell
Remove-AutologgerConfig [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-AutologgerConfig -InputObject <CimInstance#MSFT_AutologgerConfig[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_AutologgerConfig[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-BCDataCacheExtension

```powershell
Remove-BCDataCacheExtension [-Path] <string> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-BCDataCacheExtension [-DataCacheExtension] <CimInstance#MSFT_NetBranchCacheDataCacheExtension[]> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DataCacheExtension <CimInstance#MSFT_NetBranchCacheDataCacheExtension[]> (Required: true)
- Force <switch> (Required: false)
- Path <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-BcdElement

```powershell
Remove-BcdElement [-Element] <string> [[-Id] <string>] [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-BcdElement [-Element] <string> [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Element <string> (Required: true)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: false)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-BcdEntry

```powershell
Remove-BcdEntry [-Id] <string> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-BcdEntry [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-BitLockerKeyProtector

```powershell
Remove-BitLockerKeyProtector [-MountPoint] <string[]> [-KeyProtectorId] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- KeyProtectorId <string> (Required: true)
- MountPoint <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-BitsTransfer

```powershell
Remove-BitsTransfer [-BitsJob] <BitsJob[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- BitsJob <BitsJob[]> (Required: true)
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-CertificateEnrollmentPolicyServer

```powershell
Remove-CertificateEnrollmentPolicyServer [-Url] <uri> -context <Context> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Url <uri> (Required: true)
- WhatIf <switch> (Required: false)
- context <Context> (Required: true)
```

### Remove-CertificateNotificationTask

```powershell
Remove-CertificateNotificationTask [-Name] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Name <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-CimInstance

```powershell
Remove-CimInstance [-InputObject] <ciminstance> [-ResourceUri <uri>] [-ComputerName <string[]>] [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-CimInstance [-InputObject] <ciminstance> -CimSession <CimSession[]> [-ResourceUri <uri>] [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-CimInstance [-Query] <string> [[-Namespace] <string>] -CimSession <CimSession[]> [-OperationTimeoutSec <uint32>] [-QueryDialect <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-CimInstance [-Query] <string> [[-Namespace] <string>] [-ComputerName <string[]>] [-OperationTimeoutSec <uint32>] [-QueryDialect <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession[]> (Required: true)
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <ciminstance> (Required: true)
- Namespace <string> (Required: false)
- OperationTimeoutSec <uint32> (Required: false)
- Query <string> (Required: true)
- QueryDialect <string> (Required: false)
- ResourceUri <uri> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-CimSession

```powershell
Remove-CimSession [-CimSession] <CimSession[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-CimSession [-ComputerName] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-CimSession [-Id] <uint32[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-CimSession -InstanceId <guid[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-CimSession -Name <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession[]> (Required: true)
- ComputerName <string[]> (Required: true)
- Confirm <switch> (Required: false)
- Id <uint32[]> (Required: true)
- InstanceId <guid[]> (Required: true)
- Name <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-CIPolicyRule

```powershell
Remove-CIPolicyRule [-Id] <string> -FilePath <string> [<CommonParameters>]

PARAMETERS:
- FilePath <string> (Required: true)
- Id <string> (Required: true)
```

### Remove-Computer

```powershell
Remove-Computer [[-UnjoinDomainCredential] <pscredential>] [-Restart] [-Force] [-PassThru] [-WorkgroupName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Computer -UnjoinDomainCredential <pscredential> [-LocalCredential <pscredential>] [-Restart] [-ComputerName <string[]>] [-Force] [-PassThru] [-WorkgroupName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- LocalCredential <pscredential> (Required: false)
- PassThru <switch> (Required: false)
- Restart <switch> (Required: false)
- UnjoinDomainCredential <pscredential> (Required: true)
- WhatIf <switch> (Required: false)
- WorkgroupName <string> (Required: false)
```

### Remove-DAEntryPointTableItem

```powershell
Remove-DAEntryPointTableItem -PolicyStore <string> [-EntryPointName <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-DAEntryPointTableItem -GPOSession <string> [-EntryPointName <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-DAEntryPointTableItem -InputObject <CimInstance#MSFT_DASiteTableEntry[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EntryPointName <string[]> (Required: false)
- GPOSession <string> (Required: true)
- InputObject <CimInstance#MSFT_DASiteTableEntry[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-DnsClientDohServerAddress

```powershell
Remove-DnsClientDohServerAddress [-ServerAddress] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-DnsClientDohServerAddress -InputObject <CimInstance#MSFT_DNSClientDohServerAddress[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_DNSClientDohServerAddress[]> (Required: true)
- PassThru <switch> (Required: false)
- ServerAddress <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-DnsClientNrptRule

```powershell
Remove-DnsClientNrptRule [-Name] <string> [-GpoName <string>] [-PassThru] [-Server <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- GpoName <string> (Required: false)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- Server <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-DscConfigurationDocument

```powershell
Remove-DscConfigurationDocument -Stage <Stage> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Stage <Stage> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-DtcClusterTMMapping

```powershell
Remove-DtcClusterTMMapping -All [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-DtcClusterTMMapping -Name <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: true)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Name <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-EtwTraceProvider

```powershell
Remove-EtwTraceProvider [[-Guid] <string[]>] [-AutologgerName <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-EtwTraceProvider [[-Guid] <string[]>] [-SessionName <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-EtwTraceProvider -InputObject <CimInstance#MSFT_EtwTraceProvider[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AutologgerName <string[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Guid <string[]> (Required: false)
- InputObject <CimInstance#MSFT_EtwTraceProvider[]> (Required: true)
- PassThru <switch> (Required: false)
- SessionName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-Event

```powershell
Remove-Event [-SourceIdentifier] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Event [-EventIdentifier] <int> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- EventIdentifier <int> (Required: true)
- SourceIdentifier <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-EventLog

```powershell
Remove-EventLog [-LogName] <string[]> [[-ComputerName] <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-EventLog [[-ComputerName] <string[]>] [-Source <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- LogName <string[]> (Required: true)
- Source <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-FileShare

```powershell
Remove-FileShare -Name <string[]> [-FileServer <CimInstance#MSFT_FileServer>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-FileShare -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-FileShare -InputObject <CimInstance#MSFT_FileShare[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FileServer <CimInstance#MSFT_FileServer> (Required: false)
- InputObject <CimInstance#MSFT_FileShare[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-InitiatorId

```powershell
Remove-InitiatorId [-InitiatorAddress] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-InitiatorId -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-InitiatorId -InputObject <CimInstance#MSFT_InitiatorId[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InitiatorAddress <string[]> (Required: true)
- InputObject <CimInstance#MSFT_InitiatorId[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-InitiatorIdFromMaskingSet

```powershell
Remove-InitiatorIdFromMaskingSet [-MaskingSetFriendlyName] <string[]> [-InitiatorIds <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-InitiatorIdFromMaskingSet -MaskingSetUniqueId <string[]> [-InitiatorIds <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-InitiatorIdFromMaskingSet -InputObject <CimInstance#MSFT_MaskingSet[]> [-InitiatorIds <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InitiatorIds <string[]> (Required: false)
- InputObject <CimInstance#MSFT_MaskingSet[]> (Required: true)
- MaskingSetFriendlyName <string[]> (Required: true)
- MaskingSetUniqueId <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-IscsiTargetPortal

```powershell
Remove-IscsiTargetPortal -TargetPortalAddress <string[]> [-InitiatorInstanceName <string>] [-InitiatorPortalAddress <string>] [-TargetPortalPortNumber <int>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-IscsiTargetPortal -InputObject <CimInstance#MSFT_iSCSITargetPortal[]> [-InitiatorInstanceName <string>] [-InitiatorPortalAddress <string>] [-TargetPortalPortNumber <int>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InitiatorInstanceName <string> (Required: false)
- InitiatorPortalAddress <string> (Required: false)
- InputObject <CimInstance#MSFT_iSCSITargetPortal[]> (Required: true)
- PassThru <switch> (Required: false)
- TargetPortalAddress <string[]> (Required: true)
- TargetPortalPortNumber <int> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-Item

```powershell
Remove-Item [-Path] <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Recurse] [-Force] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [-Stream <string[]>] [<CommonParameters>]

Remove-Item -LiteralPath <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Recurse] [-Force] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [-Stream <string[]>] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- Recurse <switch> (Required: false)
- Stream <string[]> (Required: false)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-ItemProperty

```powershell
Remove-ItemProperty [-Path] <string[]> [-Name] <string[]> [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Remove-ItemProperty [-Name] <string[]> -LiteralPath <string[]> [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Name <string[]> (Required: true)
- Path <string[]> (Required: true)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-Job

```powershell
Remove-Job [-Id] <int[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Job [-Job] <Job[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Job [-Name] <string[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Job [-Filter] <hashtable> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Job [-InstanceId] <guid[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Job [-State] <JobState> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Job [-Command <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Command <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Filter <hashtable> (Required: true)
- Force <switch> (Required: false)
- Id <int[]> (Required: true)
- InstanceId <guid[]> (Required: true)
- Job <Job[]> (Required: true)
- Name <string[]> (Required: true)
- State <JobState> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-JobTrigger

```powershell
Remove-JobTrigger [-InputObject] <ScheduledJobDefinition[]> [-TriggerId <int[]>] [<CommonParameters>]

Remove-JobTrigger [-Id] <int[]> [-TriggerId <int[]>] [<CommonParameters>]

Remove-JobTrigger [-Name] <string[]> [-TriggerId <int[]>] [<CommonParameters>]

PARAMETERS:
- Id <int[]> (Required: true)
- InputObject <ScheduledJobDefinition[]> (Required: true)
- Name <string[]> (Required: true)
- TriggerId <int[]> (Required: false)
```

### Remove-LocalGroup

```powershell
Remove-LocalGroup [-InputObject] <LocalGroup[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-LocalGroup [-Name] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-LocalGroup [-SID] <SecurityIdentifier[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- InputObject <LocalGroup[]> (Required: true)
- Name <string[]> (Required: true)
- SID <SecurityIdentifier[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-LocalGroupMember

```powershell
Remove-LocalGroupMember [-Group] <LocalGroup> [-Member] <LocalPrincipal[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-LocalGroupMember [-Name] <string> [-Member] <LocalPrincipal[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-LocalGroupMember [-SID] <SecurityIdentifier> [-Member] <LocalPrincipal[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Group <LocalGroup> (Required: true)
- Member <LocalPrincipal[]> (Required: true)
- Name <string> (Required: true)
- SID <SecurityIdentifier> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-LocalUser

```powershell
Remove-LocalUser [-InputObject] <LocalUser[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-LocalUser [-Name] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-LocalUser [-SID] <SecurityIdentifier[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- InputObject <LocalUser[]> (Required: true)
- Name <string[]> (Required: true)
- SID <SecurityIdentifier[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-MaskingSet

```powershell
Remove-MaskingSet [-FriendlyName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-MaskingSet -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-MaskingSet -InputObject <CimInstance#MSFT_MaskingSet[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_MaskingSet[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-Module

```powershell
Remove-Module [-Name] <string[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Module [-FullyQualifiedName] <ModuleSpecification[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Module [-ModuleInfo] <psmoduleinfo[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- FullyQualifiedName <ModuleSpecification[]> (Required: true)
- ModuleInfo <psmoduleinfo[]> (Required: true)
- Name <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-MpBehavioralNetworkBlockingRules

```powershell
Remove-MpBehavioralNetworkBlockingRules [-FilterGUID <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FilterGUID <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Remove-MpPreference

```powershell
Remove-MpPreference [-ExclusionPath <string[]>] [-ExclusionExtension <string[]>] [-ExclusionProcess <string[]>] [-ExclusionIpAddress <string[]>] [-RealTimeScanDirection] [-QuarantinePurgeItemsAfterDelay] [-RemediationScheduleDay] [-RemediationScheduleTime] [-RemoteEncryptionProtectionConfiguredState] [-RemoteEncryptionProtectionMaxBlockTime] [-RemoteEncryptionProtectionAggressiveness] [-RemoteEncryptionProtectionExclusions <string[]>] [-BruteForceProtectionConfiguredState] [-BruteForceProtectionMaxBlockTime] [-BruteForceProtectionAggressiveness] [-BruteForceProtectionExclusions <string[]>] [-BruteForceProtectionLocalNetworkBlocking] [-BruteForceProtectionSkipLearningPeriod] [-ReportingAdditionalActionTimeOut] [-ReportingCriticalFailureTimeOut] [-ReportingNonCriticalTimeOut] [-ServiceHealthReportInterval] [-ReportDynamicSignatureDroppedEvent] [-ScanAvgCPULoadFactor] [-CheckForSignaturesBeforeRunningScan] [-ScanPurgeItemsAfterDelay] [-ScanOnlyIfIdleEnabled] [-ScanParameters] [-ScanScheduleDay] [-ScanScheduleQuickScanTime] [-ScanScheduleTime] [-ThrottleForScheduledScanOnly] [-SignatureFirstAuGracePeriod] [-SignatureAuGracePeriod] [-SignatureDefinitionUpdateFileSharesSources] [-SignatureDisableUpdateOnStartupWithoutEngine] [-SignatureFallbackOrder] [-SharedSignaturesPath] [-SharedSignaturesPathUpdateAtScheduledTimeOnly] [-SignatureScheduleDay] [-SignatureScheduleTime] [-SignatureUpdateCatchupInterval] [-SignatureUpdateInterval] [-SignatureBlobUpdateInterval] [-SignatureBlobFileSharesSources] [-MeteredConnectionUpdates] [-AllowNetworkProtectionOnWinServer] [-DisableDatagramProcessing] [-EnableConvertWarnToBlock] [-DisableCpuThrottleOnIdleScans] [-MAPSReporting] [-SubmitSamplesConsent] [-DisableAutoExclusions] [-DisablePrivacyMode] [-RandomizeScheduleTaskTimes] [-SchedulerRandomizationTime] [-DisableBehaviorMonitoring] [-DisableIntrusionPreventionSystem] [-DisableIOAVProtection] [-DisableRealtimeMonitoring] [-DisableScriptScanning] [-DisableArchiveScanning] [-DisableCatchupFullScan] [-DisableCatchupQuickScan] [-DisableEmailScanning] [-DisableRemovableDriveScanning] [-DisableRestorePoint] [-DisableScanningMappedNetworkDrivesForFullScan] [-DisableScanningNetworkFiles] [-ApplyDisableNetworkScanningToIOAV] [-UILockdown] [-ThreatIDDefaultAction_Ids <long[]>] [-ThreatIDDefaultAction_Actions <ThreatAction[]>] [-UnknownThreatDefaultAction] [-LowThreatDefaultAction] [-ModerateThreatDefaultAction] [-HighThreatDefaultAction] [-SevereThreatDefaultAction] [-DisableBlockAtFirstSeen] [-PUAProtection] [-CloudBlockLevel] [-CloudExtendedTimeout] [-EnableNetworkProtection] [-EnableControlledFolderAccess] [-AttackSurfaceReductionOnlyExclusions <string[]>] [-ControlledFolderAccessAllowedApplications <string[]>] [-ControlledFolderAccessProtectedFolders <string[]>] [-AttackSurfaceReductionRules_Ids <string[]>] [-AttackSurfaceReductionRules_Actions <ASRRuleActionType[]>] [-EnableLowCpuPriority] [-EnableFileHashComputation] [-EnableFullScanOnBatteryPower] [-ProxyPacUrl] [-ProxyServer] [-ProxyBypass] [-ForceUseProxyOnly] [-DisableTlsParsing] [-DisableFtpParsing] [-DisableHttpParsing] [-DisableDnsParsing] [-DisableDnsOverTcpParsing] [-DisableSshParsing] [-PlatformUpdatesChannel] [-EngineUpdatesChannel] [-DefinitionUpdatesChannel] [-DisableGradualRelease] [-AllowNetworkProtectionDownLevel] [-AllowDatagramProcessingOnWinServer] [-EnableDnsSinkhole] [-DisableInboundConnectionFiltering] [-DisableRdpParsing] [-DisableNetworkProtectionPerfTelemetry] [-TrustLabelProtectionStatus] [-AllowSwitchToAsyncInspection] [-ScanScheduleOffset] [-DisableTDTFeature] [-DisableSmtpParsing] [-DisableQuicParsing] [-NetworkProtectionReputationMode] [-EnableUdpSegmentationOffload] [-EnableUdpReceiveOffload] [-IntelTDTEnabled] [-AttackSurfaceReductionRules_RuleSpecificExclusions_Id <string>] [-AttackSurfaceReductionRules_RuleSpecificExclusions <string>] [-OobeEnableRtpAndSigUpdate] [-PerformanceModeStatus] [-QuickScanIncludeExclusions] [-DisableCacheMaintenance] [-Force] [-RemoveScanningThreadPoolCap] [-DisableCoreServiceECSIntegration] [-DisableCoreServiceTelemetry] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AllowDatagramProcessingOnWinServer <switch> (Required: false)
- AllowNetworkProtectionDownLevel <switch> (Required: false)
- AllowNetworkProtectionOnWinServer <switch> (Required: false)
- AllowSwitchToAsyncInspection <switch> (Required: false)
- ApplyDisableNetworkScanningToIOAV <switch> (Required: false)
- AsJob <switch> (Required: false)
- AttackSurfaceReductionOnlyExclusions <string[]> (Required: false)
- AttackSurfaceReductionRules_Actions <ASRRuleActionType[]> (Required: false)
- AttackSurfaceReductionRules_Ids <string[]> (Required: false)
- AttackSurfaceReductionRules_RuleSpecificExclusions <string> (Required: false)
- AttackSurfaceReductionRules_RuleSpecificExclusions_Id <string> (Required: false)
- BruteForceProtectionAggressiveness <switch> (Required: false)
- BruteForceProtectionConfiguredState <switch> (Required: false)
- BruteForceProtectionExclusions <string[]> (Required: false)
- BruteForceProtectionLocalNetworkBlocking <switch> (Required: false)
- BruteForceProtectionMaxBlockTime <switch> (Required: false)
- BruteForceProtectionSkipLearningPeriod <switch> (Required: false)
- CheckForSignaturesBeforeRunningScan <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CloudBlockLevel <switch> (Required: false)
- CloudExtendedTimeout <switch> (Required: false)
- ControlledFolderAccessAllowedApplications <string[]> (Required: false)
- ControlledFolderAccessProtectedFolders <string[]> (Required: false)
- DefinitionUpdatesChannel <switch> (Required: false)
- DisableArchiveScanning <switch> (Required: false)
- DisableAutoExclusions <switch> (Required: false)
- DisableBehaviorMonitoring <switch> (Required: false)
- DisableBlockAtFirstSeen <switch> (Required: false)
- DisableCacheMaintenance <switch> (Required: false)
- DisableCatchupFullScan <switch> (Required: false)
- DisableCatchupQuickScan <switch> (Required: false)
- DisableCoreServiceECSIntegration <switch> (Required: false)
- DisableCoreServiceTelemetry <switch> (Required: false)
- DisableCpuThrottleOnIdleScans <switch> (Required: false)
- DisableDatagramProcessing <switch> (Required: false)
- DisableDnsOverTcpParsing <switch> (Required: false)
- DisableDnsParsing <switch> (Required: false)
- DisableEmailScanning <switch> (Required: false)
- DisableFtpParsing <switch> (Required: false)
- DisableGradualRelease <switch> (Required: false)
- DisableHttpParsing <switch> (Required: false)
- DisableIOAVProtection <switch> (Required: false)
- DisableInboundConnectionFiltering <switch> (Required: false)
- DisableIntrusionPreventionSystem <switch> (Required: false)
- DisableNetworkProtectionPerfTelemetry <switch> (Required: false)
- DisablePrivacyMode <switch> (Required: false)
- DisableQuicParsing <switch> (Required: false)
- DisableRdpParsing <switch> (Required: false)
- DisableRealtimeMonitoring <switch> (Required: false)
- DisableRemovableDriveScanning <switch> (Required: false)
- DisableRestorePoint <switch> (Required: false)
- DisableScanningMappedNetworkDrivesForFullScan <switch> (Required: false)
- DisableScanningNetworkFiles <switch> (Required: false)
- DisableScriptScanning <switch> (Required: false)
- DisableSmtpParsing <switch> (Required: false)
- DisableSshParsing <switch> (Required: false)
- DisableTDTFeature <switch> (Required: false)
- DisableTlsParsing <switch> (Required: false)
- EnableControlledFolderAccess <switch> (Required: false)
- EnableConvertWarnToBlock <switch> (Required: false)
- EnableDnsSinkhole <switch> (Required: false)
- EnableFileHashComputation <switch> (Required: false)
- EnableFullScanOnBatteryPower <switch> (Required: false)
- EnableLowCpuPriority <switch> (Required: false)
- EnableNetworkProtection <switch> (Required: false)
- EnableUdpReceiveOffload <switch> (Required: false)
- EnableUdpSegmentationOffload <switch> (Required: false)
- EngineUpdatesChannel <switch> (Required: false)
- ExclusionExtension <string[]> (Required: false)
- ExclusionIpAddress <string[]> (Required: false)
- ExclusionPath <string[]> (Required: false)
- ExclusionProcess <string[]> (Required: false)
- Force <switch> (Required: false)
- ForceUseProxyOnly <switch> (Required: false)
- HighThreatDefaultAction <switch> (Required: false)
- IntelTDTEnabled <switch> (Required: false)
- LowThreatDefaultAction <switch> (Required: false)
- MAPSReporting <switch> (Required: false)
- MeteredConnectionUpdates <switch> (Required: false)
- ModerateThreatDefaultAction <switch> (Required: false)
- NetworkProtectionReputationMode <switch> (Required: false)
- OobeEnableRtpAndSigUpdate <switch> (Required: false)
- PUAProtection <switch> (Required: false)
- PerformanceModeStatus <switch> (Required: false)
- PlatformUpdatesChannel <switch> (Required: false)
- ProxyBypass <switch> (Required: false)
- ProxyPacUrl <switch> (Required: false)
- ProxyServer <switch> (Required: false)
- QuarantinePurgeItemsAfterDelay <switch> (Required: false)
- QuickScanIncludeExclusions <switch> (Required: false)
- RandomizeScheduleTaskTimes <switch> (Required: false)
- RealTimeScanDirection <switch> (Required: false)
- RemediationScheduleDay <switch> (Required: false)
- RemediationScheduleTime <switch> (Required: false)
- RemoteEncryptionProtectionAggressiveness <switch> (Required: false)
- RemoteEncryptionProtectionConfiguredState <switch> (Required: false)
- RemoteEncryptionProtectionExclusions <string[]> (Required: false)
- RemoteEncryptionProtectionMaxBlockTime <switch> (Required: false)
- RemoveScanningThreadPoolCap <switch> (Required: false)
- ReportDynamicSignatureDroppedEvent <switch> (Required: false)
- ReportingAdditionalActionTimeOut <switch> (Required: false)
- ReportingCriticalFailureTimeOut <switch> (Required: false)
- ReportingNonCriticalTimeOut <switch> (Required: false)
- ScanAvgCPULoadFactor <switch> (Required: false)
- ScanOnlyIfIdleEnabled <switch> (Required: false)
- ScanParameters <switch> (Required: false)
- ScanPurgeItemsAfterDelay <switch> (Required: false)
- ScanScheduleDay <switch> (Required: false)
- ScanScheduleOffset <switch> (Required: false)
- ScanScheduleQuickScanTime <switch> (Required: false)
- ScanScheduleTime <switch> (Required: false)
- SchedulerRandomizationTime <switch> (Required: false)
- ServiceHealthReportInterval <switch> (Required: false)
- SevereThreatDefaultAction <switch> (Required: false)
- SharedSignaturesPath <switch> (Required: false)
- SharedSignaturesPathUpdateAtScheduledTimeOnly <switch> (Required: false)
- SignatureAuGracePeriod <switch> (Required: false)
- SignatureBlobFileSharesSources <switch> (Required: false)
- SignatureBlobUpdateInterval <switch> (Required: false)
- SignatureDefinitionUpdateFileSharesSources <switch> (Required: false)
- SignatureDisableUpdateOnStartupWithoutEngine <switch> (Required: false)
- SignatureFallbackOrder <switch> (Required: false)
- SignatureFirstAuGracePeriod <switch> (Required: false)
- SignatureScheduleDay <switch> (Required: false)
- SignatureScheduleTime <switch> (Required: false)
- SignatureUpdateCatchupInterval <switch> (Required: false)
- SignatureUpdateInterval <switch> (Required: false)
- SubmitSamplesConsent <switch> (Required: false)
- ThreatIDDefaultAction_Actions <ThreatAction[]> (Required: false)
- ThreatIDDefaultAction_Ids <long[]> (Required: false)
- ThrottleForScheduledScanOnly <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- TrustLabelProtectionStatus <switch> (Required: false)
- UILockdown <switch> (Required: false)
- UnknownThreatDefaultAction <switch> (Required: false)
```

### Remove-MpThreat

```powershell
Remove-MpThreat [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Remove-NetAdapterAdvancedProperty

```powershell
Remove-NetAdapterAdvancedProperty [[-Name] <string[]>] -RegistryKeyword <string[]> [-IncludeHidden] [-AllProperties] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetAdapterAdvancedProperty -InterfaceDescription <string[]> -RegistryKeyword <string[]> [-IncludeHidden] [-AllProperties] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetAdapterAdvancedProperty -InputObject <CimInstance#MSFT_NetAdapterAdvancedPropertySettingData[]> [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllProperties <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterAdvancedPropertySettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- RegistryKeyword <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetEventNetworkAdapter

```powershell
Remove-NetEventNetworkAdapter [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetEventNetworkAdapter [-ProviderName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetEventNetworkAdapter -InputObject <CimInstance#MSFT_NetEventNetworkAdapter[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventNetworkAdapter[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ProviderName <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetEventPacketCaptureProvider

```powershell
Remove-NetEventPacketCaptureProvider [-SessionName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetEventPacketCaptureProvider -InputObject <CimInstance#MSFT_NetEventPacketCaptureProvider[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventPacketCaptureProvider[]> (Required: true)
- PassThru <switch> (Required: false)
- SessionName <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetEventProvider

```powershell
Remove-NetEventProvider [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetEventProvider -InputObject <CimInstance#MSFT_NetEventProvider[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventProvider[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetEventSession

```powershell
Remove-NetEventSession [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetEventSession [-AssociatedEventProvider <CimInstance#MSFT_NetEventProvider>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetEventSession -InputObject <CimInstance#MSFT_NetEventSession[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedEventProvider <CimInstance#MSFT_NetEventProvider> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventSession[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetEventVFPProvider

```powershell
Remove-NetEventVFPProvider [-SessionName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetEventVFPProvider -InputObject <CimInstance#MSFT_NetEventVFPProvider[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventVFPProvider[]> (Required: true)
- PassThru <switch> (Required: false)
- SessionName <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetEventVmNetworkAdapter

```powershell
Remove-NetEventVmNetworkAdapter [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetEventVmNetworkAdapter -InputObject <CimInstance#MSFT_NetEventVmNetworkAdapter[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventVmNetworkAdapter[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetEventVmSwitch

```powershell
Remove-NetEventVmSwitch [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetEventVmSwitch -InputObject <CimInstance#MSFT_NetEventVmSwitch[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventVmSwitch[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetEventVmSwitchProvider

```powershell
Remove-NetEventVmSwitchProvider [-SessionName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetEventVmSwitchProvider -InputObject <CimInstance#MSFT_NetEventVmSwitchProvider[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventVmSwitchProvider[]> (Required: true)
- PassThru <switch> (Required: false)
- SessionName <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetEventWFPCaptureProvider

```powershell
Remove-NetEventWFPCaptureProvider [-SessionName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetEventWFPCaptureProvider -InputObject <CimInstance#MSFT_NetEventWFPCaptureProvider[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventWFPCaptureProvider[]> (Required: true)
- PassThru <switch> (Required: false)
- SessionName <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetFirewallDynamicKeywordAddress

```powershell
Remove-NetFirewallDynamicKeywordAddress [-All] [-PolicyStore <string>] [-AllAutoResolve] [-AllNonAutoResolve] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallDynamicKeywordAddress [-Id] <string[]> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallDynamicKeywordAddress -InputObject <CimInstance#MSFT_NetFirewallDynamicKeywordAddress[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AllAutoResolve <switch> (Required: false)
- AllNonAutoResolve <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Id <string[]> (Required: true)
- InputObject <CimInstance#MSFT_NetFirewallDynamicKeywordAddress[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetFirewallHyperVProfile

```powershell
Remove-NetFirewallHyperVProfile [-All] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallHyperVProfile [[-Name] <string[]>] [-Profile <Profile[]>] [-Enabled <GpoBoolean[]>] [-DefaultInboundAction <Action[]>] [-DefaultOutboundAction <Action[]>] [-AllowLocalFirewallRules <GpoBoolean[]>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallHyperVProfile -InputObject <CimInstance#MSFT_NetFirewallHyperVProfile[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AllowLocalFirewallRules <GpoBoolean[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DefaultInboundAction <Action[]> (Required: false)
- DefaultOutboundAction <Action[]> (Required: false)
- Enabled <GpoBoolean[]> (Required: false)
- InputObject <CimInstance#MSFT_NetFirewallHyperVProfile[]> (Required: true)
- Name <string[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <Profile[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetFirewallHyperVRule

```powershell
Remove-NetFirewallHyperVRule [-All] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallHyperVRule [-Name] <string[]> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallHyperVRule -DisplayName <string[]> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallHyperVRule [-RulePriority <uint16[]>] [-Direction <Direction[]>] [-VMCreatorId <string[]>] [-Protocol <string[]>] [-Action <Action[]>] [-Enabled <Enabled[]>] [-EnforcementStatus <HyperVRuleStatus[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallHyperVRule -InputObject <CimInstance#MSFT_NetFirewallHyperVRule[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Action <Action[]> (Required: false)
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Direction <Direction[]> (Required: false)
- DisplayName <string[]> (Required: true)
- Enabled <Enabled[]> (Required: false)
- EnforcementStatus <HyperVRuleStatus[]> (Required: false)
- InputObject <CimInstance#MSFT_NetFirewallHyperVRule[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- Protocol <string[]> (Required: false)
- RulePriority <uint16[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- VMCreatorId <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetFirewallHyperVVMSetting

```powershell
Remove-NetFirewallHyperVVMSetting [-All] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallHyperVVMSetting [-Name] <string[]> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallHyperVVMSetting -InputObject <CimInstance#MSFT_NetFirewallHyperVVMSetting[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetFirewallHyperVVMSetting[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetFirewallRule

```powershell
Remove-NetFirewallRule [-All] [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallRule [-Name] <string[]> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallRule -DisplayName <string[]> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Direction <Direction[]>] [-Action <Action[]>] [-EdgeTraversalPolicy <EdgeTraversal[]>] [-LooseSourceMapping <bool[]>] [-LocalOnlyMapping <bool[]>] [-Owner <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyAppId <string[]>] [-PackageFamilyName <string[]>] [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallRule -AssociatedNetFirewallApplicationFilter <CimInstance#MSFT_NetApplicationFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallRule -AssociatedNetFirewallSecurityFilter <CimInstance#MSFT_NetNetworkLayerSecurityFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallRule -AssociatedNetFirewallServiceFilter <CimInstance#MSFT_NetServiceFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetFirewallRule -InputObject <CimInstance#MSFT_NetFirewallRule[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Action <Action[]> (Required: false)
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> (Required: true)
- AssociatedNetFirewallApplicationFilter <CimInstance#MSFT_NetApplicationFilter> (Required: true)
- AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> (Required: true)
- AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> (Required: true)
- AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> (Required: true)
- AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> (Required: true)
- AssociatedNetFirewallSecurityFilter <CimInstance#MSFT_NetNetworkLayerSecurityFilter> (Required: true)
- AssociatedNetFirewallServiceFilter <CimInstance#MSFT_NetServiceFilter> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- Direction <Direction[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- EdgeTraversalPolicy <EdgeTraversal[]> (Required: false)
- Enabled <Enabled[]> (Required: false)
- Group <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetFirewallRule[]> (Required: true)
- LocalOnlyMapping <bool[]> (Required: false)
- LooseSourceMapping <bool[]> (Required: false)
- Name <string[]> (Required: true)
- Owner <string[]> (Required: false)
- PackageFamilyName <string[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyAppId <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetIPAddress

```powershell
Remove-NetIPAddress [[-IPAddress] <string[]>] [-InterfaceIndex <uint32[]>] [-InterfaceAlias <string[]>] [-AddressFamily <AddressFamily[]>] [-Type <Type[]>] [-PrefixLength <byte[]>] [-PrefixOrigin <PrefixOrigin[]>] [-SuffixOrigin <SuffixOrigin[]>] [-AddressState <AddressState[]>] [-ValidLifetime <timespan[]>] [-PreferredLifetime <timespan[]>] [-SkipAsSource <bool[]>] [-PolicyStore <string>] [-DefaultGateway <string>] [-IncludeAllCompartments] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPAddress -InputObject <CimInstance#MSFT_NetIPAddress[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily[]> (Required: false)
- AddressState <AddressState[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DefaultGateway <string> (Required: false)
- IPAddress <string[]> (Required: false)
- IncludeAllCompartments <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetIPAddress[]> (Required: true)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PreferredLifetime <timespan[]> (Required: false)
- PrefixLength <byte[]> (Required: false)
- PrefixOrigin <PrefixOrigin[]> (Required: false)
- SkipAsSource <bool[]> (Required: false)
- SuffixOrigin <SuffixOrigin[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- Type <Type[]> (Required: false)
- ValidLifetime <timespan[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetIPHttpsCertBinding

```powershell
Remove-NetIPHttpsCertBinding [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetIPHttpsConfiguration

```powershell
Remove-NetIPHttpsConfiguration [-Profile <string[]>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPHttpsConfiguration -InputObject <CimInstance#MSFT_NetIPHttpsConfiguration[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NetIPHttpsConfiguration[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetIPsecDospSetting

```powershell
Remove-NetIPsecDospSetting [-All] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecDospSetting [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecDospSetting -InputObject <CimInstance#MSFT_NetIPsecDoSPSetting[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetIPsecDoSPSetting[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetIPsecMainModeCryptoSet

```powershell
Remove-NetIPsecMainModeCryptoSet [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeCryptoSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeCryptoSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeCryptoSet [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-MaxMinutes <uint32[]>] [-MaxSessions <uint32[]>] [-ForceDiffieHellman <bool[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeCryptoSet -AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeCryptoSet -InputObject <CimInstance#MSFT_NetIKEMMCryptoSet[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- ForceDiffieHellman <bool[]> (Required: false)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetIKEMMCryptoSet[]> (Required: true)
- MaxMinutes <uint32[]> (Required: false)
- MaxSessions <uint32[]> (Required: false)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetIPsecMainModeRule

```powershell
Remove-NetIPsecMainModeRule [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeRule [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-MainModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeRule -AssociatedNetIPsecMainModeCryptoSet <CimInstance#MSFT_NetIKEMMCryptoSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeRule -InputObject <CimInstance#MSFT_NetMainModeRule[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> (Required: true)
- AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> (Required: true)
- AssociatedNetIPsecMainModeCryptoSet <CimInstance#MSFT_NetIKEMMCryptoSet> (Required: true)
- AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- Enabled <Enabled[]> (Required: false)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetMainModeRule[]> (Required: true)
- MainModeCryptoSet <string[]> (Required: false)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Phase1AuthSet <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetIPsecMainModeSA

```powershell
Remove-NetIPsecMainModeSA [-All] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeSA [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeSA -AssociatedNetIPsecQuickModeSA <CimInstance#MSFT_NetQuickModeSA> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecMainModeSA -InputObject <CimInstance#MSFT_NetMainModeSA[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecQuickModeSA <CimInstance#MSFT_NetQuickModeSA> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetMainModeSA[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetIPsecPhase1AuthSet

```powershell
Remove-NetIPsecPhase1AuthSet [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecPhase1AuthSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecPhase1AuthSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecPhase1AuthSet [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecPhase1AuthSet -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecPhase1AuthSet -AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecPhase1AuthSet -InputObject <CimInstance#MSFT_NetIKEP1AuthSet[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> (Required: true)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetIKEP1AuthSet[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetIPsecPhase2AuthSet

```powershell
Remove-NetIPsecPhase2AuthSet [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecPhase2AuthSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecPhase2AuthSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecPhase2AuthSet [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecPhase2AuthSet -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecPhase2AuthSet -InputObject <CimInstance#MSFT_NetIKEP2AuthSet[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetIKEP2AuthSet[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetIPsecQuickModeCryptoSet

```powershell
Remove-NetIPsecQuickModeCryptoSet [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecQuickModeCryptoSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecQuickModeCryptoSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecQuickModeCryptoSet [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-PerfectForwardSecrecyGroup <DiffieHellmanGroup[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecQuickModeCryptoSet -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecQuickModeCryptoSet -InputObject <CimInstance#MSFT_NetIKEQMCryptoSet[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetIKEQMCryptoSet[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- PerfectForwardSecrecyGroup <DiffieHellmanGroup[]> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetIPsecQuickModeSA

```powershell
Remove-NetIPsecQuickModeSA [-All] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecQuickModeSA [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecQuickModeSA -AssociatedNetIPsecMainModeSA <CimInstance#MSFT_NetMainModeSA> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecQuickModeSA -InputObject <CimInstance#MSFT_NetQuickModeSA[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecMainModeSA <CimInstance#MSFT_NetMainModeSA> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetQuickModeSA[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetIPsecRule

```powershell
Remove-NetIPsecRule [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecRule [-IPsecRuleName] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Mode <IPsecMode[]>] [-InboundSecurity <SecurityPolicy[]>] [-OutboundSecurity <SecurityPolicy[]>] [-QuickModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-Phase2AuthSet <string[]>] [-KeyModule <KeyModule[]>] [-AllowWatchKey <bool[]>] [-AllowSetKey <bool[]>] [-RemoteTunnelHostname <string[]>] [-ForwardPathLifetime <uint32[]>] [-EncryptedTunnelBypass <bool[]>] [-RequireAuthorization <bool[]>] [-User <string[]>] [-Machine <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecRule -AssociatedNetIPsecPhase2AuthSet <CimInstance#MSFT_NetIKEP2AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecRule -AssociatedNetIPsecQuickModeCryptoSet <CimInstance#MSFT_NetIKEQMCryptoSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetIPsecRule -InputObject <CimInstance#MSFT_NetConSecRule[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AllowSetKey <bool[]> (Required: false)
- AllowWatchKey <bool[]> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> (Required: true)
- AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> (Required: true)
- AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> (Required: true)
- AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> (Required: true)
- AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> (Required: true)
- AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> (Required: true)
- AssociatedNetIPsecPhase2AuthSet <CimInstance#MSFT_NetIKEP2AuthSet> (Required: true)
- AssociatedNetIPsecQuickModeCryptoSet <CimInstance#MSFT_NetIKEQMCryptoSet> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- Enabled <Enabled[]> (Required: false)
- EncryptedTunnelBypass <bool[]> (Required: false)
- ForwardPathLifetime <uint32[]> (Required: false)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- IPsecRuleName <string[]> (Required: true)
- InboundSecurity <SecurityPolicy[]> (Required: false)
- InputObject <CimInstance#MSFT_NetConSecRule[]> (Required: true)
- KeyModule <KeyModule[]> (Required: false)
- Machine <string[]> (Required: false)
- Mode <IPsecMode[]> (Required: false)
- OutboundSecurity <SecurityPolicy[]> (Required: false)
- PassThru <switch> (Required: false)
- Phase1AuthSet <string[]> (Required: false)
- Phase2AuthSet <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- QuickModeCryptoSet <string[]> (Required: false)
- RemoteTunnelHostname <string[]> (Required: false)
- RequireAuthorization <bool[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- User <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetLbfoTeam

```powershell
Remove-NetLbfoTeam [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetLbfoTeam -InputObject <CimInstance#MSFT_NetLbfoTeam[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetLbfoTeam[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetLbfoTeamMember

```powershell
Remove-NetLbfoTeamMember [-Name] <string[]> [-Team] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetLbfoTeamMember -InputObject <CimInstance#MSFT_NetLbfoTeamMember[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetLbfoTeamMember[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Team <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetLbfoTeamNic

```powershell
Remove-NetLbfoTeamNic [-Team] <string[]> [-VlanID] <uint32[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetLbfoTeamNic -InputObject <CimInstance#MSFT_NetLbfoTeamNic[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetLbfoTeamNic[]> (Required: true)
- PassThru <switch> (Required: false)
- Team <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- VlanID <uint32[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-NetNat

```powershell
Remove-NetNat [[-Name] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetNat -InputObject <CimInstance#MSFT_NetNat[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetNat[]> (Required: true)
- Name <string[]> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetNatExternalAddress

```powershell
Remove-NetNatExternalAddress [[-NatName] <string[]>] [-ExternalAddressID <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetNatExternalAddress -InputObject <CimInstance#MSFT_NetNatExternalAddress[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ExternalAddressID <uint32[]> (Required: false)
- InputObject <CimInstance#MSFT_NetNatExternalAddress[]> (Required: true)
- NatName <string[]> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetNatStaticMapping

```powershell
Remove-NetNatStaticMapping [[-NatName] <string[]>] [-StaticMappingID <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetNatStaticMapping -InputObject <CimInstance#MSFT_NetNatStaticMapping[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetNatStaticMapping[]> (Required: true)
- NatName <string[]> (Required: false)
- PassThru <switch> (Required: false)
- StaticMappingID <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetNatTransitionConfiguration

```powershell
Remove-NetNatTransitionConfiguration [-InstanceName <string[]>] [-PolicyStore <PolicyStore[]>] [-Adapter <CimInstance#MSFT_NetAdapter>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetNatTransitionConfiguration -InputObject <CimInstance#MSFT_NetNatTransitionConfiguration[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Adapter <CimInstance#MSFT_NetAdapter> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetNatTransitionConfiguration[]> (Required: true)
- InstanceName <string[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <PolicyStore[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetNeighbor

```powershell
Remove-NetNeighbor [[-IPAddress] <string[]>] [-InterfaceIndex <uint32[]>] [-InterfaceAlias <string[]>] [-LinkLayerAddress <string[]>] [-State <State[]>] [-AddressFamily <AddressFamily[]>] [-AssociatedIPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-IncludeAllCompartments] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetNeighbor -InputObject <CimInstance#MSFT_NetNeighbor[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily[]> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedIPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPAddress <string[]> (Required: false)
- IncludeAllCompartments <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetNeighbor[]> (Required: true)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- LinkLayerAddress <string[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- State <State[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetQosPolicy

```powershell
Remove-NetQosPolicy [[-Name] <string[]>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetQosPolicy -InputObject <CimInstance#MSFT_NetQosPolicySettingData[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetQosPolicySettingData[]> (Required: true)
- Name <string[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetRoute

```powershell
Remove-NetRoute [[-DestinationPrefix] <string[]>] [-InterfaceIndex <uint32[]>] [-InterfaceAlias <string[]>] [-NextHop <string[]>] [-AddressFamily <AddressFamily[]>] [-Publish <Publish[]>] [-RouteMetric <uint16[]>] [-Protocol <Protocol[]>] [-CompartmentId <uint32[]>] [-ValidLifetime <timespan[]>] [-PreferredLifetime <timespan[]>] [-State <State[]>] [-InterfaceMetric <uint32[]>] [-AssociatedIPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-IncludeAllCompartments] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetRoute -InputObject <CimInstance#MSFT_NetRoute[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily[]> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedIPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CompartmentId <uint32[]> (Required: false)
- Confirm <switch> (Required: false)
- DestinationPrefix <string[]> (Required: false)
- IncludeAllCompartments <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetRoute[]> (Required: true)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- InterfaceMetric <uint32[]> (Required: false)
- NextHop <string[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PreferredLifetime <timespan[]> (Required: false)
- Protocol <Protocol[]> (Required: false)
- Publish <Publish[]> (Required: false)
- RouteMetric <uint16[]> (Required: false)
- State <State[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- ValidLifetime <timespan[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetSwitchTeam

```powershell
Remove-NetSwitchTeam [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetSwitchTeam -InputObject <CimInstance#MSFT_NetSwitchTeam[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetSwitchTeam[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetSwitchTeamMember

```powershell
Remove-NetSwitchTeamMember [-Name] <string> [-Team] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string> (Required: true)
- Team <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Remove-NetTransportFilter

```powershell
Remove-NetTransportFilter [-SettingName <string[]>] [-Protocol <Protocol[]>] [-LocalPortStart <uint16[]>] [-LocalPortEnd <uint16[]>] [-RemotePortStart <uint16[]>] [-RemotePortEnd <uint16[]>] [-DestinationPrefix <string[]>] [-AssociatedTCPSetting <CimInstance#MSFT_NetTCPSetting>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetTransportFilter -InputObject <CimInstance#MSFT_NetTransportFilter[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedTCPSetting <CimInstance#MSFT_NetTCPSetting> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DestinationPrefix <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetTransportFilter[]> (Required: true)
- LocalPortEnd <uint16[]> (Required: false)
- LocalPortStart <uint16[]> (Required: false)
- PassThru <switch> (Required: false)
- Protocol <Protocol[]> (Required: false)
- RemotePortEnd <uint16[]> (Required: false)
- RemotePortStart <uint16[]> (Required: false)
- SettingName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NetworkSwitchEthernetPortIPAddress

```powershell
Remove-NetworkSwitchEthernetPortIPAddress -CimSession <CimSession> -PortNumber <int> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetworkSwitchEthernetPortIPAddress -CimSession <CimSession> -InputObject <ciminstance[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- InputObject <ciminstance[]> (Required: true)
- PortNumber <int> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-NetworkSwitchVlan

```powershell
Remove-NetworkSwitchVlan -CimSession <CimSession> [-InstanceId <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetworkSwitchVlan -CimSession <CimSession> [-Name <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetworkSwitchVlan -CimSession <CimSession> [-VlanId <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-NetworkSwitchVlan -CimSession <CimSession> -InputObject <ciminstance[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- InputObject <ciminstance[]> (Required: true)
- InstanceId <string> (Required: false)
- Name <string> (Required: false)
- VlanId <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-NinjaTag

```powershell
Remove-NinjaTag [[-Name] <Object>]

PARAMETERS:
- Name <Object> (Required: false)
```

### Remove-OdbcDsn

```powershell
Remove-OdbcDsn [-InputObject] <CimInstance#MSFT_OdbcDsn[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-OdbcDsn [-Name] <string> -DsnType <string> [-PassThru] [-DriverName <string>] [-Platform <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DriverName <string> (Required: false)
- DsnType <string> (Required: true)
- InputObject <CimInstance#MSFT_OdbcDsn[]> (Required: true)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- Platform <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-OsConfigurationDocument

```powershell
Remove-OsConfigurationDocument [-Id] <string> [[-SourceId] <string>] [[-FriendlyName] <string>] [-Wait] [[-TimeoutInSeconds] <int>] [<CommonParameters>]

PARAMETERS:
- FriendlyName <string> (Required: false)
- Id <string> (Required: true)
- SourceId <string> (Required: false)
- TimeoutInSeconds <int> (Required: false)
- Wait <switch> (Required: false)
```

### Remove-Partition

```powershell
Remove-Partition [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Partition -DiskId <string[]> -Offset <uint64[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Partition [-DiskNumber] <uint32[]> [-PartitionNumber] <uint32[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Partition -DriveLetter <char[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Partition -InputObject <CimInstance#MSFT_Partition[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DiskId <string[]> (Required: true)
- DiskNumber <uint32[]> (Required: true)
- DriveLetter <char[]> (Required: true)
- InputObject <CimInstance#MSFT_Partition[]> (Required: true)
- Offset <uint64[]> (Required: true)
- PartitionNumber <uint32[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-PartitionAccessPath

```powershell
Remove-PartitionAccessPath [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PartitionAccessPath [[-AccessPath] <string>] -DiskId <string[]> -Offset <uint64[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PartitionAccessPath [-DiskNumber] <uint32[]> [-PartitionNumber] <uint32[]> [[-AccessPath] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PartitionAccessPath [[-AccessPath] <string>] -DriveLetter <char[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PartitionAccessPath [[-AccessPath] <string>] -InputObject <CimInstance#MSFT_Partition[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AccessPath <string> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DiskId <string[]> (Required: true)
- DiskNumber <uint32[]> (Required: true)
- DriveLetter <char[]> (Required: true)
- InputObject <CimInstance#MSFT_Partition[]> (Required: true)
- Offset <uint64[]> (Required: true)
- PartitionNumber <uint32[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-PhysicalDisk

```powershell
Remove-PhysicalDisk [-StoragePool] <CimInstance#MSFT_StoragePool> -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PhysicalDisk -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> -VirtualDiskUniqueId <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PhysicalDisk -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> -VirtualDiskName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PhysicalDisk -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> -VirtualDiskFriendlyName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PhysicalDisk [-VirtualDisk] <CimInstance#MSFT_VirtualDisk> -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PhysicalDisk -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> -StoragePoolUniqueId <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PhysicalDisk -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> -StoragePoolName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PhysicalDisk -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> -StoragePoolFriendlyName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> (Required: true)
- StoragePool <CimInstance#MSFT_StoragePool> (Required: true)
- StoragePoolFriendlyName <string> (Required: true)
- StoragePoolName <string> (Required: true)
- StoragePoolUniqueId <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: true)
- VirtualDiskFriendlyName <string> (Required: true)
- VirtualDiskName <string> (Required: true)
- VirtualDiskUniqueId <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-PmemDedicatedMemory

```powershell
Remove-PmemDedicatedMemory -DeviceNumber <uint32> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- DeviceNumber <uint32> (Required: true)
- Force <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-PmemDisk

```powershell
Remove-PmemDisk -DiskNumber <uint32> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PmemDisk -Simulated [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- DiskNumber <uint32> (Required: true)
- Force <switch> (Required: false)
- Simulated <switch> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-Printer

```powershell
Remove-Printer [-Name] <string[]> [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-Printer -InputObject <CimInstance#MSFT_Printer[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_Printer[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-PrinterDriver

```powershell
Remove-PrinterDriver [-Name] <string[]> [[-PrinterEnvironment] <string[]>] [-ComputerName <string>] [-RemoveFromDriverStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PrinterDriver -InputObject <CimInstance#MSFT_PrinterDriver[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_PrinterDriver[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- PrinterEnvironment <string[]> (Required: false)
- RemoveFromDriverStore <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-PrinterPort

```powershell
Remove-PrinterPort [-Name] <string[]> [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PrinterPort -InputObject <CimInstance#MSFT_PrinterPort[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_PrinterPort[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-PrintJob

```powershell
Remove-PrintJob [-InputObject] <CimInstance#MSFT_PrintJob> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PrintJob [-PrinterName] <string> [-ID] <uint32> [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PrintJob [-PrinterObject] <CimInstance#MSFT_Printer> [-ID] <uint32> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- ID <uint32> (Required: true)
- InputObject <CimInstance#MSFT_PrintJob> (Required: true)
- PrinterName <string> (Required: true)
- PrinterObject <CimInstance#MSFT_Printer> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-PSBreakpoint

```powershell
Remove-PSBreakpoint [-Breakpoint] <Breakpoint[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PSBreakpoint [-Id] <int[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Breakpoint <Breakpoint[]> (Required: true)
- Confirm <switch> (Required: false)
- Id <int[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-PSDrive

```powershell
Remove-PSDrive [-Name] <string[]> [-PSProvider <string[]>] [-Scope <string>] [-Force] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Remove-PSDrive [-LiteralName] <string[]> [-PSProvider <string[]>] [-Scope <string>] [-Force] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- LiteralName <string[]> (Required: true)
- Name <string[]> (Required: true)
- PSProvider <string[]> (Required: false)
- Scope <string> (Required: false)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-PSReadLineKeyHandler

```powershell
Remove-PSReadLineKeyHandler [-Chord] <string[]> [-ViMode <ViMode>] [<CommonParameters>]

PARAMETERS:
- Chord <string[]> (Required: true)
- ViMode <ViMode> (Required: false)
```

### Remove-PSSession

```powershell
Remove-PSSession [-Id] <int[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PSSession [-Session] <PSSession[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PSSession -ContainerId <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PSSession -VMId <guid[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PSSession -VMName <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PSSession -InstanceId <guid[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PSSession -Name <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-PSSession [-ComputerName] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: true)
- Confirm <switch> (Required: false)
- ContainerId <string[]> (Required: true)
- Id <int[]> (Required: true)
- InstanceId <guid[]> (Required: true)
- Name <string[]> (Required: true)
- Session <PSSession[]> (Required: true)
- VMId <guid[]> (Required: true)
- VMName <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-PSSnapin

```powershell
Remove-PSSnapin [-Name] <string[]> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-SmbBandwidthLimit

```powershell
Remove-SmbBandwidthLimit [[-Category] <BandwidthLimitCategory[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Remove-SmbBandwidthLimit -InputObject <CimInstance#MSFT_SmbBandwidthLimit[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Category <BandwidthLimitCategory[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_SmbBandwidthLimit[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Remove-SmbClientCertificateMapping

```powershell
Remove-SmbClientCertificateMapping [-Namespace] <string[]> [[-Subject] <string[]>] [[-Thumbprint] <string[]>] [[-DisplayName] <string[]>] [[-IssuerName] <string[]>] [[-Type] <Type[]>] [[-Flags] <Flags[]>] [-IncludeHidden] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-SmbClientCertificateMapping -InputObject <CimInstance#MSFT_SmbClientCertificateMapping[]> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DisplayName <string[]> (Required: false)
- Flags <Flags[]> (Required: false)
- Force <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_SmbClientCertificateMapping[]> (Required: true)
- IssuerName <string[]> (Required: false)
- Namespace <string[]> (Required: true)
- PassThru <switch> (Required: false)
- StoreName <string[]> (Required: false)
- Subject <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- Thumbprint <string[]> (Required: false)
- Type <Type[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-SMBComponent

```powershell
Remove-SmbComponent [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Name <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-SmbGlobalMapping

```powershell
Remove-SmbGlobalMapping [[-LocalPath] <string[]>] [[-RemotePath] <string[]>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-SmbGlobalMapping -InputObject <CimInstance#MSFT_SmbGlobalMapping[]> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- InputObject <CimInstance#MSFT_SmbGlobalMapping[]> (Required: true)
- LocalPath <string[]> (Required: false)
- PassThru <switch> (Required: false)
- RemotePath <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-SmbMapping

```powershell
Remove-SmbMapping [[-LocalPath] <string[]>] [[-RemotePath] <string[]>] [-UpdateProfile] [-Force] [-GlobalMapping] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-SmbMapping -InputObject <CimInstance#MSFT_SmbMapping[]> [-UpdateProfile] [-Force] [-GlobalMapping] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- GlobalMapping <switch> (Required: false)
- InputObject <CimInstance#MSFT_SmbMapping[]> (Required: true)
- LocalPath <string[]> (Required: false)
- PassThru <switch> (Required: false)
- RemotePath <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UpdateProfile <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-SmbMultichannelConstraint

```powershell
Remove-SmbMultichannelConstraint [-ServerName] <string[]> [[-InterfaceIndex] <uint32[]>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-SmbMultichannelConstraint [-ServerName] <string[]> [[-InterfaceAlias] <string[]>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-SmbMultichannelConstraint -InputObject <CimInstance#MSFT_SmbMultichannelConstraint[]> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- InputObject <CimInstance#MSFT_SmbMultichannelConstraint[]> (Required: true)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- PassThru <switch> (Required: false)
- ServerName <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-SmbServerAlternativePort

```powershell
Remove-SmbServerAlternativePort [-TransportType] <TransportType[]> [-Port] <uint16[]> [-IncludeHidden] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-SmbServerAlternativePort -InputObject <CimInstance#MSFT_SmbServerAlternativePort[]> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_SmbServerAlternativePort[]> (Required: true)
- PassThru <switch> (Required: false)
- Port <uint16[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- TransportType <TransportType[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-SmbServerCertificateMapping

```powershell
Remove-SmbServerCertificateMapping [-Name] <string[]> [[-Subject] <string[]>] [[-Thumbprint] <string[]>] [[-DisplayName] <string[]>] [[-StoreName] <string[]>] [[-Type] <Type[]>] [[-Flags] <Flags[]>] [[-RequireClientAuthentication] <bool[]>] [[-SkipClientCertificateAccessCheck] <bool[]>] [-IncludeHidden] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-SmbServerCertificateMapping -InputObject <CimInstance#MSFT_SmbServerCertificateMapping[]> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DisplayName <string[]> (Required: false)
- Flags <Flags[]> (Required: false)
- Force <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_SmbServerCertificateMapping[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- RequireClientAuthentication <bool[]> (Required: false)
- SkipClientCertificateAccessCheck <bool[]> (Required: false)
- StoreName <string[]> (Required: false)
- Subject <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- Thumbprint <string[]> (Required: false)
- Type <Type[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-SmbShare

```powershell
Remove-SmbShare [-Name] <string[]> [[-ScopeName] <string[]>] [-SmbInstance <SmbInstance>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-SmbShare -InputObject <CimInstance#MSFT_SMBShare[]> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- InputObject <CimInstance#MSFT_SMBShare[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ScopeName <string[]> (Required: false)
- SmbInstance <SmbInstance> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-StorageBusBinding

```powershell
Remove-StorageBusBinding -Guid <string> [<CommonParameters>]

Remove-StorageBusBinding -Number <uint16> [<CommonParameters>]

Remove-StorageBusBinding -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> [<CommonParameters>]

Remove-StorageBusBinding -Binding <StorageBusBinding> [<CommonParameters>]

PARAMETERS:
- Binding <StorageBusBinding> (Required: true)
- Guid <string> (Required: true)
- Number <uint16> (Required: true)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
```

### Remove-StorageFaultDomain

```powershell
Remove-StorageFaultDomain [-VirtualDisk] <CimInstance#MSFT_VirtualDisk> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Remove-StorageFaultDomain -VirtualDiskFriendlyName <string> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Remove-StorageFaultDomain -VirtualDiskName <string> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Remove-StorageFaultDomain -VirtualDiskUniqueId <string> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Remove-StorageFaultDomain [-StorageTier] <CimInstance#MSFT_StorageTier> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Remove-StorageFaultDomain -StorageTierFriendlyName <string> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Remove-StorageFaultDomain -StorageTierUniqueId <string> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- StorageFaultDomainFriendlyNames <string[]> (Required: false)
- StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]> (Required: false)
- StorageTier <CimInstance#MSFT_StorageTier> (Required: true)
- StorageTierFriendlyName <string> (Required: true)
- StorageTierUniqueId <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: true)
- VirtualDiskFriendlyName <string> (Required: true)
- VirtualDiskName <string> (Required: true)
- VirtualDiskUniqueId <string> (Required: true)
```

### Remove-StorageFileServer

```powershell
Remove-StorageFileServer [-FriendlyName <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-StorageFileServer -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-StorageFileServer -InputObject <CimInstance#MSFT_FileServer[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: false)
- InputObject <CimInstance#MSFT_FileServer[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-StorageHealthIntent

```powershell
Remove-StorageHealthIntent -InputObject <CimInstance#MSFT_StorageObject> [-CimSession <CimSession>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_StorageObject> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-StorageHealthSetting

```powershell
Remove-StorageHealthSetting -InputObject <CimInstance#MSFT_StorageSubSystem> -Name <string> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- InputObject <CimInstance#MSFT_StorageSubSystem> (Required: true)
- Name <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Remove-StoragePool

```powershell
Remove-StoragePool [-FriendlyName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-StoragePool -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-StoragePool -Name <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-StoragePool -InputObject <CimInstance#MSFT_StoragePool[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_StoragePool[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-StorageTier

```powershell
Remove-StorageTier [-FriendlyName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-StorageTier -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-StorageTier -InputObject <CimInstance#MSFT_StorageTier[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_StorageTier[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-TargetPortFromMaskingSet

```powershell
Remove-TargetPortFromMaskingSet [-MaskingSetFriendlyName] <string[]> [-TargetPortAddresses <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-TargetPortFromMaskingSet -MaskingSetUniqueId <string[]> [-TargetPortAddresses <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-TargetPortFromMaskingSet -InputObject <CimInstance#MSFT_MaskingSet[]> [-TargetPortAddresses <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_MaskingSet[]> (Required: true)
- MaskingSetFriendlyName <string[]> (Required: true)
- MaskingSetUniqueId <string[]> (Required: true)
- PassThru <switch> (Required: false)
- TargetPortAddresses <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-TypeData

```powershell
Remove-TypeData -TypeData <TypeData> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-TypeData [-TypeName] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-TypeData -Path <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Path <string[]> (Required: true)
- TypeData <TypeData> (Required: true)
- TypeName <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-Variable

```powershell
Remove-Variable [-Name] <string[]> [-Include <string[]>] [-Exclude <string[]>] [-Force] [-Scope <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Exclude <string[]> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- Name <string[]> (Required: true)
- Scope <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-VirtualDisk

```powershell
Remove-VirtualDisk [-FriendlyName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-VirtualDisk -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-VirtualDisk -Name <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-VirtualDisk -InputObject <CimInstance#MSFT_VirtualDisk[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_VirtualDisk[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Remove-VirtualDiskFromMaskingSet

```powershell
Remove-VirtualDiskFromMaskingSet [-MaskingSetFriendlyName] <string[]> [-VirtualDiskNames <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-VirtualDiskFromMaskingSet -MaskingSetUniqueId <string[]> [-VirtualDiskNames <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-VirtualDiskFromMaskingSet -InputObject <CimInstance#MSFT_MaskingSet[]> [-VirtualDiskNames <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_MaskingSet[]> (Required: true)
- MaskingSetFriendlyName <string[]> (Required: true)
- MaskingSetUniqueId <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- VirtualDiskNames <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-VMDirectVirtualDisk

```powershell
Remove-VMDirectVirtualDisk [-VMName] <string> [-ControllerType] <ControllerType> [-ControllerNumber] <int> [-ControllerLocation] <int> [-CimSession <CimSession[]>] [<CommonParameters>]

Remove-VMDirectVirtualDisk [-VirtualDisk] <VMDirectVirtualDisk[]> [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession[]> (Required: false)
- ControllerLocation <int> (Required: true)
- ControllerNumber <int> (Required: true)
- ControllerType <ControllerType> (Required: true)
- VMName <string> (Required: true)
- VirtualDisk <VMDirectVirtualDisk[]> (Required: true)
```

### Remove-VpnConnection

```powershell
Remove-VpnConnection [-Name] <string[]> [-Force] [-PassThru] [-AllUserConnection] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllUserConnection <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-VpnConnectionRoute

```powershell
Remove-VpnConnectionRoute [-ConnectionName] <string> [-DestinationPrefix] <string> [-AllUserConnection] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllUserConnection <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionName <string> (Required: true)
- DestinationPrefix <string> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-VpnConnectionTriggerApplication

```powershell
Remove-VpnConnectionTriggerApplication [-ConnectionName] <string> [-ApplicationID] <string[]> [-PassThru] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ApplicationID <string[]> (Required: true)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionName <string> (Required: true)
- Force <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-VpnConnectionTriggerDnsConfiguration

```powershell
Remove-VpnConnectionTriggerDnsConfiguration [-ConnectionName] <string> [-DnsSuffix] <string[]> [-PassThru] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionName <string> (Required: true)
- DnsSuffix <string[]> (Required: true)
- Force <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-VpnConnectionTriggerTrustedNetwork

```powershell
Remove-VpnConnectionTriggerTrustedNetwork [-ConnectionName] <string> [-DnsSuffix] <string[]> [-PassThru] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionName <string> (Required: true)
- DnsSuffix <string[]> (Required: true)
- Force <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-WindowsCapability

```powershell
Remove-WindowsCapability -Name <string> -Online [-DelayExecutionIfPending] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Remove-WindowsCapability -Name <string> -Path <string> [-DelayExecutionIfPending] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- DelayExecutionIfPending <switch> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Name <string> (Required: true)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Remove-WindowsDriver

```powershell
Remove-WindowsDriver -Driver <string> -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- Driver <string> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Remove-WindowsImage

```powershell
Remove-WindowsImage -ImagePath <string> -Name <string> [-CheckIntegrity] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Remove-WindowsImage -ImagePath <string> -Index <uint32> [-CheckIntegrity] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CheckIntegrity <switch> (Required: false)
- ImagePath <string> (Required: true)
- Index <uint32> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Name <string> (Required: true)
- ScratchDirectory <string> (Required: false)
```

### Remove-WindowsPackage

```powershell
Remove-WindowsPackage -Path <string> [-PackagePath <string>] [-PackageName <string>] [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Remove-WindowsPackage -Online [-PackagePath <string>] [-PackageName <string>] [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- NoRestart <switch> (Required: false)
- Online <switch> (Required: true)
- PackageName <string> (Required: false)
- PackagePath <string> (Required: false)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Remove-WmiObject

```powershell
Remove-WmiObject [-Class] <string> [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-WmiObject -InputObject <wmi> [-AsJob] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-WmiObject -Path <string> [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-WmiObject [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-WmiObject [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Remove-WmiObject [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Authentication <AuthenticationLevel> (Required: false)
- Authority <string> (Required: false)
- Class <string> (Required: true)
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- EnableAllPrivileges <switch> (Required: false)
- Impersonation <ImpersonationLevel> (Required: false)
- InputObject <wmi> (Required: true)
- Locale <string> (Required: false)
- Namespace <string> (Required: false)
- Path <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Remove-WSManInstance

```powershell
Remove-WSManInstance [-ResourceURI] <uri> [-SelectorSet] <hashtable> [-ApplicationName <string>] [-ComputerName <string>] [-OptionSet <hashtable>] [-Port <int>] [-SessionOption <SessionOption>] [-UseSSL] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

Remove-WSManInstance [-ResourceURI] <uri> [-SelectorSet] <hashtable> [-ConnectionURI <uri>] [-OptionSet <hashtable>] [-SessionOption <SessionOption>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

PARAMETERS:
- ApplicationName <string> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string> (Required: false)
- ConnectionURI <uri> (Required: false)
- Credential <pscredential> (Required: false)
- OptionSet <hashtable> (Required: false)
- Port <int> (Required: false)
- ResourceURI <uri> (Required: true)
- SelectorSet <hashtable> (Required: true)
- SessionOption <SessionOption> (Required: false)
- UseSSL <switch> (Required: false)
```

### Rename-Computer

```powershell
Rename-Computer [-NewName] <string> [-ComputerName <string>] [-PassThru] [-DomainCredential <pscredential>] [-LocalCredential <pscredential>] [-Force] [-Restart] [-WsmanAuthentication <string>] [-Protocol <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- DomainCredential <pscredential> (Required: false)
- Force <switch> (Required: false)
- LocalCredential <pscredential> (Required: false)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- Protocol <string> (Required: false)
- Restart <switch> (Required: false)
- WhatIf <switch> (Required: false)
- WsmanAuthentication <string> (Required: false)
```

### Rename-DAEntryPointTableItem

```powershell
Rename-DAEntryPointTableItem -PolicyStore <string> -NewName <string> [-EntryPointName <string[]>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-DAEntryPointTableItem -GPOSession <string> -NewName <string> [-EntryPointName <string[]>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-DAEntryPointTableItem -InputObject <CimInstance#MSFT_DASiteTableEntry[]> -NewName <string> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EntryPointName <string[]> (Required: false)
- GPOSession <string> (Required: true)
- InputObject <CimInstance#MSFT_DASiteTableEntry[]> (Required: true)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-Item

```powershell
Rename-Item [-Path] <string> [-NewName] <string> [-Force] [-PassThru] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Rename-Item [-NewName] <string> -LiteralPath <string> [-Force] [-PassThru] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- LiteralPath <string> (Required: true)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- Path <string> (Required: true)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-ItemProperty

```powershell
Rename-ItemProperty [-Path] <string> [-Name] <string> [-NewName] <string> [-PassThru] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Rename-ItemProperty [-Name] <string> [-NewName] <string> -LiteralPath <string> [-PassThru] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string> (Required: true)
- Name <string> (Required: true)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- Path <string> (Required: true)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-LocalGroup

```powershell
Rename-LocalGroup [-InputObject] <LocalGroup> [-NewName] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-LocalGroup [-Name] <string> [-NewName] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-LocalGroup [-SID] <SecurityIdentifier> [-NewName] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- InputObject <LocalGroup> (Required: true)
- Name <string> (Required: true)
- NewName <string> (Required: true)
- SID <SecurityIdentifier> (Required: true)
- WhatIf <switch> (Required: false)
```

### Rename-LocalUser

```powershell
Rename-LocalUser [-InputObject] <LocalUser> [-NewName] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-LocalUser [-Name] <string> [-NewName] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-LocalUser [-SID] <SecurityIdentifier> [-NewName] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- InputObject <LocalUser> (Required: true)
- Name <string> (Required: true)
- NewName <string> (Required: true)
- SID <SecurityIdentifier> (Required: true)
- WhatIf <switch> (Required: false)
```

### Rename-MaskingSet

```powershell
Rename-MaskingSet [-FriendlyName] <string[]> -NewFriendlyName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-MaskingSet -UniqueId <string[]> -NewFriendlyName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-MaskingSet -InputObject <CimInstance#MSFT_MaskingSet[]> -NewFriendlyName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_MaskingSet[]> (Required: true)
- NewFriendlyName <string> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Rename-NetAdapter

```powershell
Rename-NetAdapter [-Name] <string[]> [-NewName] <string> [-IncludeHidden] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetAdapter [-NewName] <string> -InterfaceDescription <string[]> [-IncludeHidden] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetAdapter [-NewName] <string> -InputObject <CimInstance#MSFT_NetAdapter[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapter[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-NetFirewallHyperVRule

```powershell
Rename-NetFirewallHyperVRule -NewName <string> [-All] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallHyperVRule [-Name] <string[]> -NewName <string> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallHyperVRule -DisplayName <string[]> -NewName <string> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallHyperVRule -NewName <string> [-RulePriority <uint16[]>] [-Direction <Direction[]>] [-VMCreatorId <string[]>] [-Protocol <string[]>] [-Action <Action[]>] [-Enabled <Enabled[]>] [-EnforcementStatus <HyperVRuleStatus[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallHyperVRule -InputObject <CimInstance#MSFT_NetFirewallHyperVRule[]> -NewName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Action <Action[]> (Required: false)
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Direction <Direction[]> (Required: false)
- DisplayName <string[]> (Required: true)
- Enabled <Enabled[]> (Required: false)
- EnforcementStatus <HyperVRuleStatus[]> (Required: false)
- InputObject <CimInstance#MSFT_NetFirewallHyperVRule[]> (Required: true)
- Name <string[]> (Required: true)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- Protocol <string[]> (Required: false)
- RulePriority <uint16[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- VMCreatorId <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-NetFirewallRule

```powershell
Rename-NetFirewallRule -NewName <string> [-All] [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallRule [-Name] <string[]> -NewName <string> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallRule -DisplayName <string[]> -NewName <string> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallRule -NewName <string> [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Direction <Direction[]>] [-Action <Action[]>] [-EdgeTraversalPolicy <EdgeTraversal[]>] [-LooseSourceMapping <bool[]>] [-LocalOnlyMapping <bool[]>] [-Owner <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyAppId <string[]>] [-PackageFamilyName <string[]>] [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> -NewName <string> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallRule -AssociatedNetFirewallApplicationFilter <CimInstance#MSFT_NetApplicationFilter> -NewName <string> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> -NewName <string> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> -NewName <string> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> -NewName <string> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallRule -AssociatedNetFirewallSecurityFilter <CimInstance#MSFT_NetNetworkLayerSecurityFilter> -NewName <string> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallRule -AssociatedNetFirewallServiceFilter <CimInstance#MSFT_NetServiceFilter> -NewName <string> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> -NewName <string> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetFirewallRule -InputObject <CimInstance#MSFT_NetFirewallRule[]> -NewName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Action <Action[]> (Required: false)
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> (Required: true)
- AssociatedNetFirewallApplicationFilter <CimInstance#MSFT_NetApplicationFilter> (Required: true)
- AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> (Required: true)
- AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> (Required: true)
- AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> (Required: true)
- AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> (Required: true)
- AssociatedNetFirewallSecurityFilter <CimInstance#MSFT_NetNetworkLayerSecurityFilter> (Required: true)
- AssociatedNetFirewallServiceFilter <CimInstance#MSFT_NetServiceFilter> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- Direction <Direction[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- EdgeTraversalPolicy <EdgeTraversal[]> (Required: false)
- Enabled <Enabled[]> (Required: false)
- Group <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetFirewallRule[]> (Required: true)
- LocalOnlyMapping <bool[]> (Required: false)
- LooseSourceMapping <bool[]> (Required: false)
- Name <string[]> (Required: true)
- NewName <string> (Required: true)
- Owner <string[]> (Required: false)
- PackageFamilyName <string[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyAppId <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-NetIPHttpsConfiguration

```powershell
Rename-NetIPHttpsConfiguration -NewName <string> [-Profile <string[]>] [-ProfileActivated <bool[]>] [-PolicyStore <string>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPHttpsConfiguration -NewName <string> [-Profile <string[]>] [-ProfileActivated <bool[]>] [-GPOSession <string>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPHttpsConfiguration -InputObject <CimInstance#MSFT_NetIPHttpsConfiguration[]> -NewName <string> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NetIPHttpsConfiguration[]> (Required: true)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <string[]> (Required: false)
- ProfileActivated <bool[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-NetIPsecMainModeCryptoSet

```powershell
Rename-NetIPsecMainModeCryptoSet -NewName <string> [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeCryptoSet [-Name] <string[]> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeCryptoSet -DisplayName <string[]> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeCryptoSet -NewName <string> [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-MaxMinutes <uint32[]>] [-MaxSessions <uint32[]>] [-ForceDiffieHellman <bool[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeCryptoSet -AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeCryptoSet -InputObject <CimInstance#MSFT_NetIKEMMCryptoSet[]> -NewName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- ForceDiffieHellman <bool[]> (Required: false)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetIKEMMCryptoSet[]> (Required: true)
- MaxMinutes <uint32[]> (Required: false)
- MaxSessions <uint32[]> (Required: false)
- Name <string[]> (Required: true)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-NetIPsecMainModeRule

```powershell
Rename-NetIPsecMainModeRule -NewName <string> [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeRule [-Name] <string[]> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeRule -DisplayName <string[]> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeRule -NewName <string> [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-MainModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeRule -AssociatedNetIPsecMainModeCryptoSet <CimInstance#MSFT_NetIKEMMCryptoSet> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecMainModeRule -InputObject <CimInstance#MSFT_NetMainModeRule[]> -NewName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> (Required: true)
- AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> (Required: true)
- AssociatedNetIPsecMainModeCryptoSet <CimInstance#MSFT_NetIKEMMCryptoSet> (Required: true)
- AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- Enabled <Enabled[]> (Required: false)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetMainModeRule[]> (Required: true)
- MainModeCryptoSet <string[]> (Required: false)
- Name <string[]> (Required: true)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- Phase1AuthSet <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-NetIPsecPhase1AuthSet

```powershell
Rename-NetIPsecPhase1AuthSet -NewName <string> [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecPhase1AuthSet [-Name] <string[]> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecPhase1AuthSet -DisplayName <string[]> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecPhase1AuthSet -NewName <string> [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecPhase1AuthSet -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecPhase1AuthSet -AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecPhase1AuthSet -InputObject <CimInstance#MSFT_NetIKEP1AuthSet[]> -NewName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> (Required: true)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetIKEP1AuthSet[]> (Required: true)
- Name <string[]> (Required: true)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-NetIPsecPhase2AuthSet

```powershell
Rename-NetIPsecPhase2AuthSet -NewName <string> [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecPhase2AuthSet [-Name] <string[]> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecPhase2AuthSet -DisplayName <string[]> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecPhase2AuthSet -NewName <string> [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecPhase2AuthSet -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecPhase2AuthSet -InputObject <CimInstance#MSFT_NetIKEP2AuthSet[]> -NewName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetIKEP2AuthSet[]> (Required: true)
- Name <string[]> (Required: true)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-NetIPsecQuickModeCryptoSet

```powershell
Rename-NetIPsecQuickModeCryptoSet -NewName <string> [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecQuickModeCryptoSet [-Name] <string[]> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecQuickModeCryptoSet -DisplayName <string[]> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecQuickModeCryptoSet -NewName <string> [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-PerfectForwardSecrecyGroup <DiffieHellmanGroup[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecQuickModeCryptoSet -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecQuickModeCryptoSet -InputObject <CimInstance#MSFT_NetIKEQMCryptoSet[]> -NewName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetIKEQMCryptoSet[]> (Required: true)
- Name <string[]> (Required: true)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- PerfectForwardSecrecyGroup <DiffieHellmanGroup[]> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-NetIPsecRule

```powershell
Rename-NetIPsecRule -NewName <string> [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecRule [-IPsecRuleName] <string[]> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecRule -DisplayName <string[]> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecRule -NewName <string> [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Mode <IPsecMode[]>] [-InboundSecurity <SecurityPolicy[]>] [-OutboundSecurity <SecurityPolicy[]>] [-QuickModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-Phase2AuthSet <string[]>] [-KeyModule <KeyModule[]>] [-AllowWatchKey <bool[]>] [-AllowSetKey <bool[]>] [-RemoteTunnelHostname <string[]>] [-ForwardPathLifetime <uint32[]>] [-EncryptedTunnelBypass <bool[]>] [-RequireAuthorization <bool[]>] [-User <string[]>] [-Machine <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecRule -AssociatedNetIPsecPhase2AuthSet <CimInstance#MSFT_NetIKEP2AuthSet> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecRule -AssociatedNetIPsecQuickModeCryptoSet <CimInstance#MSFT_NetIKEQMCryptoSet> -NewName <string> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-NetIPsecRule -InputObject <CimInstance#MSFT_NetConSecRule[]> -NewName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AllowSetKey <bool[]> (Required: false)
- AllowWatchKey <bool[]> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> (Required: true)
- AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> (Required: true)
- AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> (Required: true)
- AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> (Required: true)
- AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> (Required: true)
- AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> (Required: true)
- AssociatedNetIPsecPhase2AuthSet <CimInstance#MSFT_NetIKEP2AuthSet> (Required: true)
- AssociatedNetIPsecQuickModeCryptoSet <CimInstance#MSFT_NetIKEQMCryptoSet> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- Enabled <Enabled[]> (Required: false)
- EncryptedTunnelBypass <bool[]> (Required: false)
- ForwardPathLifetime <uint32[]> (Required: false)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- IPsecRuleName <string[]> (Required: true)
- InboundSecurity <SecurityPolicy[]> (Required: false)
- InputObject <CimInstance#MSFT_NetConSecRule[]> (Required: true)
- KeyModule <KeyModule[]> (Required: false)
- Machine <string[]> (Required: false)
- Mode <IPsecMode[]> (Required: false)
- NewName <string> (Required: true)
- OutboundSecurity <SecurityPolicy[]> (Required: false)
- PassThru <switch> (Required: false)
- Phase1AuthSet <string[]> (Required: false)
- Phase2AuthSet <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- QuickModeCryptoSet <string[]> (Required: false)
- RemoteTunnelHostname <string[]> (Required: false)
- RequireAuthorization <bool[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- User <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-NetLbfoTeam

```powershell
Rename-NetLbfoTeam [-Name] <string> [-NewName] <string> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Name <string> (Required: true)
- NewName <string> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Rename-NetSwitchTeam

```powershell
Rename-NetSwitchTeam [-Name] <string> [-NewName] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string> (Required: true)
- NewName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Rename-Printer

```powershell
Rename-Printer [-Name] <string> [-NewName] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Rename-Printer [-InputObject] <CimInstance#MSFT_Printer> [-NewName] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_Printer> (Required: true)
- Name <string> (Required: true)
- NewName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Repair-AppvClientConnectionGroup

```powershell
Repair-AppvClientConnectionGroup [-GroupId] <guid> [-VersionId] <guid> [-Global] [-UserState] [-Extensions] [<CommonParameters>]

Repair-AppvClientConnectionGroup [-Name] <string> [-Global] [-UserState] [-Extensions] [<CommonParameters>]

Repair-AppvClientConnectionGroup [-ConnectionGroup] <AppvClientConnectionGroup> [-Global] [-UserState] [-Extensions] [<CommonParameters>]

PARAMETERS:
- ConnectionGroup <AppvClientConnectionGroup> (Required: true)
- Extensions <switch> (Required: false)
- Global <switch> (Required: false)
- GroupId <guid> (Required: true)
- Name <string> (Required: true)
- UserState <switch> (Required: false)
- VersionId <guid> (Required: true)
```

### Repair-AppvClientPackage

```powershell
Repair-AppvClientPackage [-PackageId] <guid> [-VersionId] <guid> [-Global] [-UserState] [-Extensions] [<CommonParameters>]

Repair-AppvClientPackage [-Package] <AppvClientPackage> [-Global] [-UserState] [-Extensions] [<CommonParameters>]

Repair-AppvClientPackage [-Name] <string> [[-Version] <string>] [-Global] [-UserState] [-Extensions] [<CommonParameters>]

PARAMETERS:
- Extensions <switch> (Required: false)
- Global <switch> (Required: false)
- Name <string> (Required: true)
- Package <AppvClientPackage> (Required: true)
- PackageId <guid> (Required: true)
- UserState <switch> (Required: false)
- Version <string> (Required: false)
- VersionId <guid> (Required: true)
```

### Repair-FileIntegrity

```powershell
Repair-FileIntegrity [-FileName] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FileName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Repair-UevTemplateIndex

```powershell
Repair-UevTemplateIndex [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Repair-VirtualDisk

```powershell
Repair-VirtualDisk [-FriendlyName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Repair-VirtualDisk -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Repair-VirtualDisk -Name <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Repair-VirtualDisk -InputObject <CimInstance#MSFT_VirtualDisk[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_VirtualDisk[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Repair-Volume

```powershell
Repair-Volume [-DriveLetter] <char[]> [-OfflineScanAndFix] [-Scan] [-SpotFix] [-DetectLeaks <DetectLeakMode>] [-ScratchFile <string>] [-Threads <uint32>] [-Triage] [-DirectoryIds <uint64[]>] [-Salvage <SalvageMode>] [-ScratchDir <string>] [-TargetFile <string>] [-TargetDir <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Repair-Volume -ObjectId <string[]> [-OfflineScanAndFix] [-Scan] [-SpotFix] [-DetectLeaks <DetectLeakMode>] [-ScratchFile <string>] [-Threads <uint32>] [-Triage] [-DirectoryIds <uint64[]>] [-Salvage <SalvageMode>] [-ScratchDir <string>] [-TargetFile <string>] [-TargetDir <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Repair-Volume -Path <string[]> [-OfflineScanAndFix] [-Scan] [-SpotFix] [-DetectLeaks <DetectLeakMode>] [-ScratchFile <string>] [-Threads <uint32>] [-Triage] [-DirectoryIds <uint64[]>] [-Salvage <SalvageMode>] [-ScratchDir <string>] [-TargetFile <string>] [-TargetDir <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Repair-Volume -FileSystemLabel <string[]> [-OfflineScanAndFix] [-Scan] [-SpotFix] [-DetectLeaks <DetectLeakMode>] [-ScratchFile <string>] [-Threads <uint32>] [-Triage] [-DirectoryIds <uint64[]>] [-Salvage <SalvageMode>] [-ScratchDir <string>] [-TargetFile <string>] [-TargetDir <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Repair-Volume -InputObject <CimInstance#MSFT_Volume[]> [-OfflineScanAndFix] [-Scan] [-SpotFix] [-DetectLeaks <DetectLeakMode>] [-ScratchFile <string>] [-Threads <uint32>] [-Triage] [-DirectoryIds <uint64[]>] [-Salvage <SalvageMode>] [-ScratchDir <string>] [-TargetFile <string>] [-TargetDir <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DetectLeaks <DetectLeakMode> (Required: false)
- DirectoryIds <uint64[]> (Required: false)
- DriveLetter <char[]> (Required: true)
- FileSystemLabel <string[]> (Required: true)
- InputObject <CimInstance#MSFT_Volume[]> (Required: true)
- ObjectId <string[]> (Required: true)
- OfflineScanAndFix <switch> (Required: false)
- Path <string[]> (Required: true)
- Salvage <SalvageMode> (Required: false)
- Scan <switch> (Required: false)
- ScratchDir <string> (Required: false)
- ScratchFile <string> (Required: false)
- SpotFix <switch> (Required: false)
- TargetDir <string> (Required: false)
- TargetFile <string> (Required: false)
- Threads <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- Triage <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Repair-WindowsImage

```powershell
Repair-WindowsImage -Path <string> [-CheckHealth] [-ScanHealth] [-RestoreHealth] [-StartComponentCleanup] [-LimitAccess] [-ResetBase] [-Defer] [-Source <string[]>] [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Repair-WindowsImage -Online [-CheckHealth] [-ScanHealth] [-RestoreHealth] [-StartComponentCleanup] [-LimitAccess] [-ResetBase] [-Defer] [-Source <string[]>] [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CheckHealth <switch> (Required: false)
- Defer <switch> (Required: false)
- LimitAccess <switch> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- NoRestart <switch> (Required: false)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ResetBase <switch> (Required: false)
- RestoreHealth <switch> (Required: false)
- ScanHealth <switch> (Required: false)
- ScratchDirectory <string> (Required: false)
- Source <string[]> (Required: false)
- StartComponentCleanup <switch> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Reset-AppSharedPackageContainer

```powershell
Reset-AppSharedPackageContainer [-Name] <string> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Name <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Reset-AppxPackage

```powershell
Reset-AppxPackage [-Package] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Package <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Reset-BC

```powershell
Reset-BC [-ResetFWRulesOnly] [-ResetPerfCountersOnly] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ResetFWRulesOnly <switch> (Required: false)
- ResetPerfCountersOnly <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-ComputerMachinePassword

```powershell
Reset-ComputerMachinePassword [-Server <string>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Server <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-DAClientExperienceConfiguration

```powershell
Reset-DAClientExperienceConfiguration [-PolicyStore <string>] [-GPOSession <string>] [-CorporateResources] [-IPsecTunnelEndpoints] [-PreferLocalNamesAllowed] [-UserInterface] [-SupportEmail] [-FriendlyName] [-ManualEntryPointSelectionAllowed] [-GslbFqdn] [-ForceTunneling] [-CustomCommands] [-PassiveMode] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Reset-DAClientExperienceConfiguration -InputObject <CimInstance#MSFT_DAClientExperienceConfiguration[]> [-CorporateResources] [-IPsecTunnelEndpoints] [-PreferLocalNamesAllowed] [-UserInterface] [-SupportEmail] [-FriendlyName] [-ManualEntryPointSelectionAllowed] [-GslbFqdn] [-ForceTunneling] [-CustomCommands] [-PassiveMode] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- CorporateResources <switch> (Required: false)
- CustomCommands <switch> (Required: false)
- ForceTunneling <switch> (Required: false)
- FriendlyName <switch> (Required: false)
- GPOSession <string> (Required: false)
- GslbFqdn <switch> (Required: false)
- IPsecTunnelEndpoints <switch> (Required: false)
- InputObject <CimInstance#MSFT_DAClientExperienceConfiguration[]> (Required: true)
- ManualEntryPointSelectionAllowed <switch> (Required: false)
- PassThru <switch> (Required: false)
- PassiveMode <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PreferLocalNamesAllowed <switch> (Required: false)
- SupportEmail <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UserInterface <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-DAEntryPointTableItem

```powershell
Reset-DAEntryPointTableItem -PolicyStore <string> [-EntryPointName <string[]>] [-TeredoServerIP] [-IPHttpsProfile] [-GslbIP] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Reset-DAEntryPointTableItem -GPOSession <string> [-EntryPointName <string[]>] [-TeredoServerIP] [-IPHttpsProfile] [-GslbIP] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Reset-DAEntryPointTableItem -InputObject <CimInstance#MSFT_DASiteTableEntry[]> [-TeredoServerIP] [-IPHttpsProfile] [-GslbIP] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EntryPointName <string[]> (Required: false)
- GPOSession <string> (Required: true)
- GslbIP <switch> (Required: false)
- IPHttpsProfile <switch> (Required: false)
- InputObject <CimInstance#MSFT_DASiteTableEntry[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: true)
- TeredoServerIP <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-DtcLog

```powershell
Reset-DtcLog [-DtcName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DtcName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-LapsPassword

```powershell
Reset-LapsPassword [<CommonParameters>]

```

### Reset-NCSIPolicyConfiguration

```powershell
Reset-NCSIPolicyConfiguration [-PolicyStore <string>] [-GPOSession <string>] [-CorporateDNSProbeHostAddress] [-CorporateDNSProbeHostName] [-CorporateSitePrefixList] [-CorporateWebsiteProbeURL] [-DomainLocationDeterminationURL] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Reset-NCSIPolicyConfiguration -InputObject <CimInstance#MSFT_NCSIPolicyConfiguration[]> [-CorporateDNSProbeHostAddress] [-CorporateDNSProbeHostName] [-CorporateSitePrefixList] [-CorporateWebsiteProbeURL] [-DomainLocationDeterminationURL] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- CorporateDNSProbeHostAddress <switch> (Required: false)
- CorporateDNSProbeHostName <switch> (Required: false)
- CorporateSitePrefixList <switch> (Required: false)
- CorporateWebsiteProbeURL <switch> (Required: false)
- DomainLocationDeterminationURL <switch> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NCSIPolicyConfiguration[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-Net6to4Configuration

```powershell
Reset-Net6to4Configuration [-IPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-GPOSession <string>] [-State] [-AutoSharing] [-RelayName] [-RelayState] [-ResolutionIntervalSeconds] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Reset-Net6to4Configuration -InputObject <CimInstance#MSFT_Net6to4Configuration[]> [-State] [-AutoSharing] [-RelayName] [-RelayState] [-ResolutionIntervalSeconds] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AutoSharing <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- IPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- InputObject <CimInstance#MSFT_Net6to4Configuration[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- RelayName <switch> (Required: false)
- RelayState <switch> (Required: false)
- ResolutionIntervalSeconds <switch> (Required: false)
- State <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-NetAdapterAdvancedProperty

```powershell
Reset-NetAdapterAdvancedProperty [[-Name] <string[]>] -DisplayName <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Reset-NetAdapterAdvancedProperty -InterfaceDescription <string[]> -DisplayName <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Reset-NetAdapterAdvancedProperty -InputObject <CimInstance#MSFT_NetAdapterAdvancedPropertySettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DisplayName <string[]> (Required: true)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterAdvancedPropertySettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-NetDnsTransitionConfiguration

```powershell
Reset-NetDnsTransitionConfiguration [-Adapter <CimInstance#MSFT_NetAdapter>] [-State] [-OnlySendAQuery] [-LatencyMilliseconds] [-AlwaysSynthesize] [-AcceptInterface] [-SendInterface] [-ExclusionList] [-PrefixMapping] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Reset-NetDnsTransitionConfiguration -InputObject <CimInstance#MSFT_NetDnsTransitionConfiguration[]> [-State] [-OnlySendAQuery] [-LatencyMilliseconds] [-AlwaysSynthesize] [-AcceptInterface] [-SendInterface] [-ExclusionList] [-PrefixMapping] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AcceptInterface <switch> (Required: false)
- Adapter <CimInstance#MSFT_NetAdapter> (Required: false)
- AlwaysSynthesize <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ExclusionList <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetDnsTransitionConfiguration[]> (Required: true)
- LatencyMilliseconds <switch> (Required: false)
- OnlySendAQuery <switch> (Required: false)
- PassThru <switch> (Required: false)
- PrefixMapping <switch> (Required: false)
- SendInterface <switch> (Required: false)
- State <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-NetIPHttpsConfiguration

```powershell
Reset-NetIPHttpsConfiguration [-Profile <string[]>] [-ProfileActivated <bool[]>] [-PolicyStore <string>] [-State] [-AuthMode] [-StrongCRLRequired] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Reset-NetIPHttpsConfiguration [-Profile <string[]>] [-ProfileActivated <bool[]>] [-GPOSession <string>] [-State] [-AuthMode] [-StrongCRLRequired] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Reset-NetIPHttpsConfiguration -InputObject <CimInstance#MSFT_NetIPHttpsConfiguration[]> [-State] [-AuthMode] [-StrongCRLRequired] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AuthMode <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NetIPHttpsConfiguration[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <string[]> (Required: false)
- ProfileActivated <bool[]> (Required: false)
- State <switch> (Required: false)
- StrongCRLRequired <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-NetIsatapConfiguration

```powershell
Reset-NetIsatapConfiguration [-IPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-GPOSession <string>] [-State] [-Router] [-ResolutionState] [-ResolutionIntervalSeconds] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Reset-NetIsatapConfiguration -InputObject <CimInstance#MSFT_NetISATAPConfiguration[]> [-State] [-Router] [-ResolutionState] [-ResolutionIntervalSeconds] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- IPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- InputObject <CimInstance#MSFT_NetISATAPConfiguration[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ResolutionIntervalSeconds <switch> (Required: false)
- ResolutionState <switch> (Required: false)
- Router <switch> (Required: false)
- State <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-NetTeredoConfiguration

```powershell
Reset-NetTeredoConfiguration [-IPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-GPOSession <string>] [-Type] [-ServerName] [-RefreshIntervalSeconds] [-ClientPort] [-ServerVirtualIP] [-DefaultQualified] [-ServerShunt] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Reset-NetTeredoConfiguration -InputObject <CimInstance#MSFT_NetTeredoConfiguration[]> [-Type] [-ServerName] [-RefreshIntervalSeconds] [-ClientPort] [-ServerVirtualIP] [-DefaultQualified] [-ServerShunt] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClientPort <switch> (Required: false)
- Confirm <switch> (Required: false)
- DefaultQualified <switch> (Required: false)
- GPOSession <string> (Required: false)
- IPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- InputObject <CimInstance#MSFT_NetTeredoConfiguration[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- RefreshIntervalSeconds <switch> (Required: false)
- ServerName <switch> (Required: false)
- ServerShunt <switch> (Required: false)
- ServerVirtualIP <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- Type <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-PhysicalDisk

```powershell
Reset-PhysicalDisk [-FriendlyName] <string> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Reset-PhysicalDisk -UniqueId <string> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Reset-PhysicalDisk -InputObject <CimInstance#MSFT_PhysicalDisk[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <CimInstance#MSFT_PhysicalDisk[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
```

### Reset-SmbClientConfiguration

```powershell
Reset-SmbClientConfiguration [-All] [-AuditInsecureGuestLogon] [-AuditServerDoesNotSupportEncryption] [-AuditServerDoesNotSupportSigning] [-BlockNTLM] [-BlockNTLMServerExceptionList] [-CompressibilitySampling] [-ConnectionCountPerRssNetworkInterface] [-DirectoryCacheEntriesMax] [-DirectoryCacheEntrySizeMax] [-DirectoryCacheLifetime] [-DisableCompression] [-DisabledSMBQUICServerExceptionList] [-DormantFileLimit] [-EnableBandwidthThrottling] [-EnableByteRangeLockingOnReadOnlyFiles] [-EnableLargeMtu] [-EnableLoadBalanceScaleOut] [-EnableMailslots] [-EnableMultiChannel] [-EnableSMBQUIC] [-EncryptionCiphers] [-ExtendedSessionTimeout] [-FileInfoCacheEntriesMax] [-FileInfoCacheLifetime] [-FileNotFoundCacheEntriesMax] [-FileNotFoundCacheLifetime] [-ForceSMBEncryptionOverQuic] [-InvalidAuthenticationCacheLifetime] [-KeepConn] [-MaxCmds] [-MaximumConnectionCountPerServer] [-OplocksDisabled] [-RequestCompression] [-RequireEncryption] [-SessionTimeout] [-SkipCertificateCheck] [-Smb2DialectMax] [-Smb2DialectMin] [-UseOpportunisticLocking] [-WindowSizeThreshold] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AuditInsecureGuestLogon <switch> (Required: false)
- AuditServerDoesNotSupportEncryption <switch> (Required: false)
- AuditServerDoesNotSupportSigning <switch> (Required: false)
- BlockNTLM <switch> (Required: false)
- BlockNTLMServerExceptionList <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CompressibilitySampling <switch> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionCountPerRssNetworkInterface <switch> (Required: false)
- DirectoryCacheEntriesMax <switch> (Required: false)
- DirectoryCacheEntrySizeMax <switch> (Required: false)
- DirectoryCacheLifetime <switch> (Required: false)
- DisableCompression <switch> (Required: false)
- DisabledSMBQUICServerExceptionList <switch> (Required: false)
- DormantFileLimit <switch> (Required: false)
- EnableBandwidthThrottling <switch> (Required: false)
- EnableByteRangeLockingOnReadOnlyFiles <switch> (Required: false)
- EnableLargeMtu <switch> (Required: false)
- EnableLoadBalanceScaleOut <switch> (Required: false)
- EnableMailslots <switch> (Required: false)
- EnableMultiChannel <switch> (Required: false)
- EnableSMBQUIC <switch> (Required: false)
- EncryptionCiphers <switch> (Required: false)
- ExtendedSessionTimeout <switch> (Required: false)
- FileInfoCacheEntriesMax <switch> (Required: false)
- FileInfoCacheLifetime <switch> (Required: false)
- FileNotFoundCacheEntriesMax <switch> (Required: false)
- FileNotFoundCacheLifetime <switch> (Required: false)
- Force <switch> (Required: false)
- ForceSMBEncryptionOverQuic <switch> (Required: false)
- InvalidAuthenticationCacheLifetime <switch> (Required: false)
- KeepConn <switch> (Required: false)
- MaxCmds <switch> (Required: false)
- MaximumConnectionCountPerServer <switch> (Required: false)
- OplocksDisabled <switch> (Required: false)
- RequestCompression <switch> (Required: false)
- RequireEncryption <switch> (Required: false)
- SessionTimeout <switch> (Required: false)
- SkipCertificateCheck <switch> (Required: false)
- Smb2DialectMax <switch> (Required: false)
- Smb2DialectMin <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseOpportunisticLocking <switch> (Required: false)
- WhatIf <switch> (Required: false)
- WindowSizeThreshold <switch> (Required: false)
```

### Reset-SmbServerConfiguration

```powershell
Reset-SmbServerConfiguration [-All] [-AnnounceComment] [-AnnounceServer] [-AsynchronousCredits] [-AuditClientCertificateAccess] [-AuditClientDoesNotSupportEncryption] [-AuditClientDoesNotSupportSigning] [-AuditInsecureGuestLogon] [-AuditSmb1Access] [-AutoShareServer] [-AutoShareWorkstation] [-CachedOpenLimit] [-DisableCompression] [-DisableSmbEncryptionOnSecureConnection] [-DurableHandleV2TimeoutInSeconds] [-EnableAuthRateLimiter] [-EnableDirectoryHandleLeasing] [-EnableDownlevelTimewarp] [-EnableLeasing] [-EnableMailslots] [-EnableMultiChannel] [-EnableOplocks] [-EnableSMB2Protocol] [-EnableSMBQUIC] [-EnableStrictNameChecking] [-EncryptData] [-EncryptionCiphers] [-IrpStackSize] [-KeepAliveTime] [-MaxChannelPerSession] [-MaxMpxCount] [-MaxSessionPerConnection] [-MaxThreadsPerQueue] [-MaxWorkItems] [-NullSessionShares] [-OplockBreakWait] [-PendingClientTimeoutInSeconds] [-RejectUnencryptedAccess] [-RequestCompression] [-RestrictNamedpipeAccessViaQuic] [-ServerHidden] [-Smb2CreditsMax] [-Smb2CreditsMin] [-Smb2DialectMax] [-Smb2DialectMin] [-SmbServerNameHardeningLevel] [-TreatHostAsStableStorage] [-ValidateAliasNotCircular] [-ValidateShareScope] [-ValidateShareScopeNotAliased] [-ValidateTargetName] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AnnounceComment <switch> (Required: false)
- AnnounceServer <switch> (Required: false)
- AsJob <switch> (Required: false)
- AsynchronousCredits <switch> (Required: false)
- AuditClientCertificateAccess <switch> (Required: false)
- AuditClientDoesNotSupportEncryption <switch> (Required: false)
- AuditClientDoesNotSupportSigning <switch> (Required: false)
- AuditInsecureGuestLogon <switch> (Required: false)
- AuditSmb1Access <switch> (Required: false)
- AutoShareServer <switch> (Required: false)
- AutoShareWorkstation <switch> (Required: false)
- CachedOpenLimit <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DisableCompression <switch> (Required: false)
- DisableSmbEncryptionOnSecureConnection <switch> (Required: false)
- DurableHandleV2TimeoutInSeconds <switch> (Required: false)
- EnableAuthRateLimiter <switch> (Required: false)
- EnableDirectoryHandleLeasing <switch> (Required: false)
- EnableDownlevelTimewarp <switch> (Required: false)
- EnableLeasing <switch> (Required: false)
- EnableMailslots <switch> (Required: false)
- EnableMultiChannel <switch> (Required: false)
- EnableOplocks <switch> (Required: false)
- EnableSMB2Protocol <switch> (Required: false)
- EnableSMBQUIC <switch> (Required: false)
- EnableStrictNameChecking <switch> (Required: false)
- EncryptData <switch> (Required: false)
- EncryptionCiphers <switch> (Required: false)
- Force <switch> (Required: false)
- IrpStackSize <switch> (Required: false)
- KeepAliveTime <switch> (Required: false)
- MaxChannelPerSession <switch> (Required: false)
- MaxMpxCount <switch> (Required: false)
- MaxSessionPerConnection <switch> (Required: false)
- MaxThreadsPerQueue <switch> (Required: false)
- MaxWorkItems <switch> (Required: false)
- NullSessionShares <switch> (Required: false)
- OplockBreakWait <switch> (Required: false)
- PendingClientTimeoutInSeconds <switch> (Required: false)
- RejectUnencryptedAccess <switch> (Required: false)
- RequestCompression <switch> (Required: false)
- RestrictNamedpipeAccessViaQuic <switch> (Required: false)
- ServerHidden <switch> (Required: false)
- Smb2CreditsMax <switch> (Required: false)
- Smb2CreditsMin <switch> (Required: false)
- Smb2DialectMax <switch> (Required: false)
- Smb2DialectMin <switch> (Required: false)
- SmbServerNameHardeningLevel <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- TreatHostAsStableStorage <switch> (Required: false)
- ValidateAliasNotCircular <switch> (Required: false)
- ValidateShareScope <switch> (Required: false)
- ValidateShareScopeNotAliased <switch> (Required: false)
- ValidateTargetName <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Reset-StorageReliabilityCounter

```powershell
Reset-StorageReliabilityCounter -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Reset-StorageReliabilityCounter -Disk <CimInstance#MSFT_Disk> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Reset-StorageReliabilityCounter -InputObject <CimInstance#MSFT_StorageReliabilityCounter[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Disk <CimInstance#MSFT_Disk> (Required: true)
- InputObject <CimInstance#MSFT_StorageReliabilityCounter[]> (Required: true)
- PassThru <switch> (Required: false)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Reset-WinhttpProxy

```powershell
SYNOPSIS:
Resets WinHTTP proxy settings.

DESCRIPTION:
Resets WinHTTP proxy settings.

PARAMETERS:

- Auto <SwitchParameter> (Required: true)
- Direct <SwitchParameter> (Required: true)

```

### Resize-Partition

```powershell
Resize-Partition [-WhatIf] [-Confirm] [<CommonParameters>]

Resize-Partition [-Size] <uint64> -DiskId <string[]> -Offset <uint64[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Resize-Partition [-DiskNumber] <uint32[]> [-PartitionNumber] <uint32[]> [-Size] <uint64> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Resize-Partition [-Size] <uint64> -DriveLetter <char[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Resize-Partition [-Size] <uint64> -InputObject <CimInstance#MSFT_Partition[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DiskId <string[]> (Required: true)
- DiskNumber <uint32[]> (Required: true)
- DriveLetter <char[]> (Required: true)
- InputObject <CimInstance#MSFT_Partition[]> (Required: true)
- Offset <uint64[]> (Required: true)
- PartitionNumber <uint32[]> (Required: true)
- PassThru <switch> (Required: false)
- Size <uint64> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Resize-StorageTier

```powershell
Resize-StorageTier [-FriendlyName] <string[]> [-Size <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Resize-StorageTier -UniqueId <string[]> [-Size <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Resize-StorageTier -InputObject <CimInstance#MSFT_StorageTier[]> [-Size <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_StorageTier[]> (Required: true)
- PassThru <switch> (Required: false)
- Size <uint64> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Resize-VirtualDisk

```powershell
Resize-VirtualDisk [-FriendlyName] <string[]> [-Size <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Resize-VirtualDisk -UniqueId <string[]> [-Size <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Resize-VirtualDisk -Name <string[]> [-Size <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Resize-VirtualDisk -InputObject <CimInstance#MSFT_VirtualDisk[]> [-Size <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_VirtualDisk[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Size <uint64> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Resolve-DnsName

```powershell
Resolve-DnsName [-Name] <string> [[-Type] <RecordType>] [-Server <string[]>] [-DohServer <string[][]>] [-DotServer <string[][]>] [-DnsOnly] [-CacheOnly] [-DnssecOk] [-DnssecCd] [-NoHostsFile] [-LlmnrNetbiosOnly] [-LlmnrFallback] [-LlmnrOnly] [-NetbiosFallback] [-NoIdn] [-NoRecursion] [-QuickTimeout] [-TcpOnly] [-CheckCache] [<CommonParameters>]

PARAMETERS:
- CacheOnly <switch> (Required: false)
- CheckCache <switch> (Required: false)
- DnsOnly <switch> (Required: false)
- DnssecCd <switch> (Required: false)
- DnssecOk <switch> (Required: false)
- DohServer <string[][]> (Required: false)
- DotServer <string[][]> (Required: false)
- LlmnrFallback <switch> (Required: false)
- LlmnrNetbiosOnly <switch> (Required: false)
- LlmnrOnly <switch> (Required: false)
- Name <string> (Required: true)
- NetbiosFallback <switch> (Required: false)
- NoHostsFile <switch> (Required: false)
- NoIdn <switch> (Required: false)
- NoRecursion <switch> (Required: false)
- QuickTimeout <switch> (Required: false)
- Server <string[]> (Required: false)
- TcpOnly <switch> (Required: false)
- Type <RecordType> (Required: false)
```

### Resolve-Path

```powershell
Resolve-Path [-Path] <string[]> [-Relative] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

Resolve-Path -LiteralPath <string[]> [-Relative] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- Relative <switch> (Required: false)
- UseTransaction <switch> (Required: false)
```

### Restart-Computer

```powershell
Restart-Computer [[-ComputerName] <string[]>] [[-Credential] <pscredential>] [-DcomAuthentication <AuthenticationLevel>] [-Impersonation <ImpersonationLevel>] [-WsmanAuthentication <string>] [-Protocol <string>] [-Force] [-Wait] [-Timeout <int>] [-For <WaitForServiceTypes>] [-Delay <int16>] [-WhatIf] [-Confirm] [<CommonParameters>]

Restart-Computer [[-ComputerName] <string[]>] [[-Credential] <pscredential>] [-AsJob] [-DcomAuthentication <AuthenticationLevel>] [-Impersonation <ImpersonationLevel>] [-Force] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- DcomAuthentication <AuthenticationLevel> (Required: false)
- Delay <int16> (Required: false)
- For <WaitForServiceTypes> (Required: false)
- Force <switch> (Required: false)
- Impersonation <ImpersonationLevel> (Required: false)
- Protocol <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- Timeout <int> (Required: false)
- Wait <switch> (Required: false)
- WhatIf <switch> (Required: false)
- WsmanAuthentication <string> (Required: false)
```

### Restart-NetAdapter

```powershell
Restart-NetAdapter [-Name] <string[]> [-IncludeHidden] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Restart-NetAdapter -InterfaceDescription <string[]> [-IncludeHidden] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Restart-NetAdapter -InputObject <CimInstance#MSFT_NetAdapter[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapter[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Restart-PcsvDevice

```powershell
Restart-PcsvDevice [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Restart-PcsvDevice [-TargetAddress] <string> [-Credential] <pscredential> [-ManagementProtocol] <ManagementProtocol> [[-Port] <uint16>] [-Authentication <Authentication>] [-UseSSL] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Restart-PcsvDevice -InputObject <CimInstance#MSFT_PCSVDevice[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Authentication <Authentication> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: true)
- InputObject <CimInstance#MSFT_PCSVDevice[]> (Required: true)
- ManagementProtocol <ManagementProtocol> (Required: true)
- PassThru <switch> (Required: false)
- Port <uint16> (Required: false)
- SkipCACheck <switch> (Required: false)
- SkipCNCheck <switch> (Required: false)
- SkipRevocationCheck <switch> (Required: false)
- TargetAddress <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- TimeoutSec <uint32> (Required: false)
- UseSSL <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Restart-PrintJob

```powershell
Restart-PrintJob [-InputObject] <CimInstance#MSFT_PrintJob> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Restart-PrintJob [-PrinterName] <string> [-ID] <uint32> [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Restart-PrintJob [-PrinterObject] <CimInstance#MSFT_Printer> [-ID] <uint32> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- ID <uint32> (Required: true)
- InputObject <CimInstance#MSFT_PrintJob> (Required: true)
- PrinterName <string> (Required: true)
- PrinterObject <CimInstance#MSFT_Printer> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Restart-Service

```powershell
Restart-Service [-InputObject] <ServiceController[]> [-Force] [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Restart-Service [-Name] <string[]> [-Force] [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Restart-Service -DisplayName <string[]> [-Force] [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- DisplayName <string[]> (Required: true)
- Exclude <string[]> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- InputObject <ServiceController[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Restore-Computer

```powershell
Restore-Computer [-RestorePoint] <int> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- RestorePoint <int> (Required: true)
- WhatIf <switch> (Required: false)
```

### Restore-DscConfiguration

```powershell
Restore-DscConfiguration [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Restore-NetworkSwitchConfiguration

```powershell
Restore-NetworkSwitchConfiguration [-CimSession] <CimSession> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Restore-UevBackup

```powershell
Restore-UevBackup [-ComputerName] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ComputerName <string> (Required: true)
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Restore-UevUserSetting

```powershell
Restore-UevUserSetting -Application <string> [-Force] [-LastKnownGood] [-WhatIf] [-Confirm] [<CommonParameters>]

Restore-UevUserSetting [-TemplateId] <string> [-LastKnownGood] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Application <string> (Required: true)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- LastKnownGood <switch> (Required: false)
- TemplateId <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Resume-BitLocker

```powershell
Resume-BitLocker [-MountPoint] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- MountPoint <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Resume-BitsTransfer

```powershell
Resume-BitsTransfer [-BitsJob] <BitsJob[]> [-Asynchronous] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Asynchronous <switch> (Required: false)
- BitsJob <BitsJob[]> (Required: true)
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Resume-Job

```powershell
Resume-Job [-Id] <int[]> [-Wait] [-WhatIf] [-Confirm] [<CommonParameters>]

Resume-Job [-Job] <Job[]> [-Wait] [-WhatIf] [-Confirm] [<CommonParameters>]

Resume-Job [-Name] <string[]> [-Wait] [-WhatIf] [-Confirm] [<CommonParameters>]

Resume-Job [-InstanceId] <guid[]> [-Wait] [-WhatIf] [-Confirm] [<CommonParameters>]

Resume-Job [-State] <JobState> [-Wait] [-WhatIf] [-Confirm] [<CommonParameters>]

Resume-Job [-Filter] <hashtable> [-Wait] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Filter <hashtable> (Required: true)
- Id <int[]> (Required: true)
- InstanceId <guid[]> (Required: true)
- Job <Job[]> (Required: true)
- Name <string[]> (Required: true)
- State <JobState> (Required: true)
- Wait <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Resume-PrintJob

```powershell
Resume-PrintJob [-InputObject] <CimInstance#MSFT_PrintJob> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Resume-PrintJob [-ID] <uint32> [-PrinterName] <string> [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Resume-PrintJob [-PrinterObject] <CimInstance#MSFT_Printer> [-ID] <uint32> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- ID <uint32> (Required: true)
- InputObject <CimInstance#MSFT_PrintJob> (Required: true)
- PrinterName <string> (Required: true)
- PrinterObject <CimInstance#MSFT_Printer> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Resume-ProvisioningSession

### Resume-ReFSDedupSchedule

```powershell
Resume-ReFSDedupSchedule [-Volume] <string> [<CommonParameters>]

PARAMETERS:
- Volume <string> (Required: true)
```

### Resume-Service

```powershell
Resume-Service [-InputObject] <ServiceController[]> [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Resume-Service [-Name] <string[]> [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Resume-Service -DisplayName <string[]> [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- DisplayName <string[]> (Required: true)
- Exclude <string[]> (Required: false)
- Include <string[]> (Required: false)
- InputObject <ServiceController[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Resume-StorageBusDisk

```powershell
Resume-StorageBusDisk -Guid <string> [<CommonParameters>]

Resume-StorageBusDisk -Number <uint16> [<CommonParameters>]

Resume-StorageBusDisk -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> [<CommonParameters>]

PARAMETERS:
- Guid <string> (Required: true)
- Number <uint16> (Required: true)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
```

### Revoke-FileShareAccess

```powershell
Revoke-FileShareAccess -Name <string[]> -AccountName <string[]> [-FileServer <CimInstance#MSFT_FileServer>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Revoke-FileShareAccess -UniqueId <string[]> -AccountName <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Revoke-FileShareAccess -InputObject <CimInstance#MSFT_FileShare[]> -AccountName <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AccountName <string[]> (Required: true)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FileServer <CimInstance#MSFT_FileServer> (Required: false)
- InputObject <CimInstance#MSFT_FileShare[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Revoke-SmbClientAccessToServer

```powershell
Revoke-SmbClientAccessToServer [-Name] <string[]> -IdentifierType <IdentifierType> -Identifier <string> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Revoke-SmbClientAccessToServer -InputObject <CimInstance#MSFT_SmbServerCertificateMapping[]> -IdentifierType <IdentifierType> -Identifier <string> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Identifier <string> (Required: true)
- IdentifierType <IdentifierType> (Required: true)
- InputObject <CimInstance#MSFT_SmbServerCertificateMapping[]> (Required: true)
- Name <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Revoke-SmbShareAccess

```powershell
Revoke-SmbShareAccess [-Name] <string[]> [[-ScopeName] <string[]>] [-SmbInstance <SmbInstance>] [-AccountName <string[]>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Revoke-SmbShareAccess -InputObject <CimInstance#MSFT_SMBShare[]> [-AccountName <string[]>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AccountName <string[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- InputObject <CimInstance#MSFT_SMBShare[]> (Required: true)
- Name <string[]> (Required: true)
- ScopeName <string[]> (Required: false)
- SmbInstance <SmbInstance> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```
