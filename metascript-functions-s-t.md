# Metascript Functions S through T

## S

### SafeGetCommand

```powershell
SYNOPSIS:
This command is used by Pester's Mocking framework.  You do not need to call it directly.

```

### Save-EtwTraceSession

```powershell
Save-EtwTraceSession [-Name] <string> [-OutputFile <FileInfo>] [-OutputFolder <DirectoryInfo>] [-Stop] [-Overwrite] [-CimSession <CimSession>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: false)
- Confirm <switch> (Required: false)
- Name <string> (Required: true)
- OutputFile <FileInfo> (Required: false)
- OutputFolder <DirectoryInfo> (Required: false)
- Overwrite <switch> (Required: false)
- Stop <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Save-Help

```powershell
Save-Help [-DestinationPath] <string[]> [[-Module] <psmoduleinfo[]>] [[-UICulture] <cultureinfo[]>] [-FullyQualifiedModule <ModuleSpecification[]>] [-Credential <pscredential>] [-UseDefaultCredentials] [-Force] [<CommonParameters>]

Save-Help [[-Module] <psmoduleinfo[]>] [[-UICulture] <cultureinfo[]>] -LiteralPath <string[]> [-FullyQualifiedModule <ModuleSpecification[]>] [-Credential <pscredential>] [-UseDefaultCredentials] [-Force] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- DestinationPath <string[]> (Required: true)
- Force <switch> (Required: false)
- FullyQualifiedModule <ModuleSpecification[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Module <psmoduleinfo[]> (Required: false)
- UICulture <cultureinfo[]> (Required: false)
- UseDefaultCredentials <switch> (Required: false)
```

### Save-Module

```powershell
Save-Module [-Name] <string[]> -Path <string> [-MinimumVersion <version>] [-MaximumVersion <version>] [-RequiredVersion <version>] [-Repository <string[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Save-Module [-Name] <string[]> -LiteralPath <string> [-MinimumVersion <version>] [-MaximumVersion <version>] [-RequiredVersion <version>] [-Repository <string[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Save-Module [-InputObject] <psobject[]> -LiteralPath <string> [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Save-Module [-InputObject] <psobject[]> -Path <string> [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- InputObject <psobject[]> (Required: true)
- LiteralPath <string> (Required: true)
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- Name <string[]> (Required: true)
- Path <string> (Required: true)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- Repository <string[]> (Required: false)
- RequiredVersion <version> (Required: false)
- WhatIf <switch> (Required: false)
```

### Save-NetGPO

```powershell
Save-NetGPO [-GPOSession] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Save-NetworkSwitchConfiguration

```powershell
Save-NetworkSwitchConfiguration [-CimSession] <CimSession> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Save-OsImage

```powershell
Save-OsImage -ImagePath <string> -CapturePath <string> [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CapturePath <string> (Required: true)
- ImagePath <string> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- ScratchDirectory <string> (Required: false)
```

### Save-Package

```powershell
Save-Package [-Name] <string[]> [-RequiredVersion <string>] [-MinimumVersion <string>] [-MaximumVersion <string>] [-Source <string[]>] [-Path <string>] [-LiteralPath <string>] [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-ProviderName <string[]>] [<CommonParameters>]

Save-Package -InputObject <SoftwareIdentity> [-Path <string>] [-LiteralPath <string>] [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [<CommonParameters>]

Save-Package [-Path <string>] [-LiteralPath <string>] [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-PackageManagementProvider <string>] [-PublishLocation <string>] [-ScriptSourceLocation <string>] [-ScriptPublishLocation <string>] [-Type <string>] [-Filter <string>] [-Tag <string[]>] [-Includes <string[]>] [-DscResource <string[]>] [-RoleCapability <string[]>] [-Command <string[]>] [<CommonParameters>]

Save-Package [-Path <string>] [-LiteralPath <string>] [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-PackageManagementProvider <string>] [-PublishLocation <string>] [-ScriptSourceLocation <string>] [-ScriptPublishLocation <string>] [-Type <string>] [-Filter <string>] [-Tag <string[]>] [-Includes <string[]>] [-DscResource <string[]>] [-RoleCapability <string[]>] [-Command <string[]>] [<CommonParameters>]

PARAMETERS:
- AllVersions <switch> (Required: false)
- Command <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- DscResource <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- Includes <string[]> (Required: false)
- InputObject <SoftwareIdentity> (Required: true)
- LiteralPath <string> (Required: false)
- MaximumVersion <string> (Required: false)
- MinimumVersion <string> (Required: false)
- Name <string[]> (Required: true)
- PackageManagementProvider <string> (Required: false)
- Path <string> (Required: false)
- ProviderName <string[]> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- PublishLocation <string> (Required: false)
- RequiredVersion <string> (Required: false)
- RoleCapability <string[]> (Required: false)
- ScriptPublishLocation <string> (Required: false)
- ScriptSourceLocation <string> (Required: false)
- Source <string[]> (Required: false)
- Tag <string[]> (Required: false)
- Type <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Save-Script

```powershell
Save-Script [-Name] <string[]> -Path <string> [-MinimumVersion <version>] [-MaximumVersion <version>] [-RequiredVersion <version>] [-Repository <string[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Save-Script [-Name] <string[]> -LiteralPath <string> [-MinimumVersion <version>] [-MaximumVersion <version>] [-RequiredVersion <version>] [-Repository <string[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Save-Script [-InputObject] <psobject[]> -LiteralPath <string> [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Save-Script [-InputObject] <psobject[]> -Path <string> [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- InputObject <psobject[]> (Required: true)
- LiteralPath <string> (Required: true)
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- Name <string[]> (Required: true)
- Path <string> (Required: true)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- Repository <string[]> (Required: false)
- RequiredVersion <version> (Required: false)
- WhatIf <switch> (Required: false)
```

### Save-SoftwareInventory

```powershell
Save-SoftwareInventory -PartitioningScript <string> -ResetConfigXml <string> -Path <string> [-DevicesInf <string>] [-OutputDirectory <string>] [-CSRConfigFile <string>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Save-SoftwareInventory -PartitioningScript <string> -ResetConfigXml <string> -Online [-DevicesInf <string>] [-OutputDirectory <string>] [-CSRConfigFile <string>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CSRConfigFile <string> (Required: false)
- DevicesInf <string> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- OutputDirectory <string> (Required: false)
- PartitioningScript <string> (Required: true)
- Path <string> (Required: true)
- ResetConfigXml <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Save-StorageDataCollection

```powershell
Save-StorageDataCollection -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> -StorageDataCollectionType <StorageDataCollectionType> [<CommonParameters>]

Save-StorageDataCollection -DeviceGuid <string> -StorageDataCollectionType <StorageDataCollectionType> [<CommonParameters>]

Save-StorageDataCollection -DeviceNumber <string> -StorageDataCollectionType <StorageDataCollectionType> [<CommonParameters>]

PARAMETERS:
- DeviceGuid <string> (Required: true)
- DeviceNumber <string> (Required: true)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
- StorageDataCollectionType <StorageDataCollectionType> (Required: true)
```

### Save-WindowsImage

```powershell
Save-WindowsImage -Path <string> [-CheckIntegrity] [-Append] [-SupportEa] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- Append <switch> (Required: false)
- CheckIntegrity <switch> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SupportEa <switch> (Required: false)
```

### Select-Object

```powershell
Select-Object [[-Property] <Object[]>] [-InputObject <psobject>] [-ExcludeProperty <string[]>] [-ExpandProperty <string>] [-Unique] [-Last <int>] [-First <int>] [-Skip <int>] [-Wait] [<CommonParameters>]

Select-Object [[-Property] <Object[]>] [-InputObject <psobject>] [-ExcludeProperty <string[]>] [-ExpandProperty <string>] [-Unique] [-SkipLast <int>] [<CommonParameters>]

Select-Object [-InputObject <psobject>] [-Unique] [-Wait] [-Index <int[]>] [<CommonParameters>]

PARAMETERS:
- ExcludeProperty <string[]> (Required: false)
- ExpandProperty <string> (Required: false)
- First <int> (Required: false)
- Index <int[]> (Required: false)
- InputObject <psobject> (Required: false)
- Last <int> (Required: false)
- Property <Object[]> (Required: false)
- Skip <int> (Required: false)
- SkipLast <int> (Required: false)
- Unique <switch> (Required: false)
- Wait <switch> (Required: false)
```

### Select-String

```powershell
Select-String [-Pattern] <string[]> [-Path] <string[]> [-SimpleMatch] [-CaseSensitive] [-Quiet] [-List] [-Include <string[]>] [-Exclude <string[]>] [-NotMatch] [-AllMatches] [-Encoding <string>] [-Context <int[]>] [<CommonParameters>]

Select-String [-Pattern] <string[]> -InputObject <psobject> [-SimpleMatch] [-CaseSensitive] [-Quiet] [-List] [-Include <string[]>] [-Exclude <string[]>] [-NotMatch] [-AllMatches] [-Encoding <string>] [-Context <int[]>] [<CommonParameters>]

Select-String [-Pattern] <string[]> -LiteralPath <string[]> [-SimpleMatch] [-CaseSensitive] [-Quiet] [-List] [-Include <string[]>] [-Exclude <string[]>] [-NotMatch] [-AllMatches] [-Encoding <string>] [-Context <int[]>] [<CommonParameters>]

PARAMETERS:
- AllMatches <switch> (Required: false)
- CaseSensitive <switch> (Required: false)
- Context <int[]> (Required: false)
- Encoding <string> (Required: false)
- Exclude <string[]> (Required: false)
- Include <string[]> (Required: false)
- InputObject <psobject> (Required: true)
- List <switch> (Required: false)
- LiteralPath <string[]> (Required: true)
- NotMatch <switch> (Required: false)
- Path <string[]> (Required: true)
- Pattern <string[]> (Required: true)
- Quiet <switch> (Required: false)
- SimpleMatch <switch> (Required: false)
```

### Select-Xml

```powershell
Select-Xml [-XPath] <string> [-Xml] <XmlNode[]> [-Namespace <hashtable>] [<CommonParameters>]

Select-Xml [-XPath] <string> [-Path] <string[]> [-Namespace <hashtable>] [<CommonParameters>]

Select-Xml [-XPath] <string> -LiteralPath <string[]> [-Namespace <hashtable>] [<CommonParameters>]

Select-Xml [-XPath] <string> -Content <string[]> [-Namespace <hashtable>] [<CommonParameters>]

PARAMETERS:
- Content <string[]> (Required: true)
- LiteralPath <string[]> (Required: true)
- Namespace <hashtable> (Required: false)
- Path <string[]> (Required: true)
- XPath <string> (Required: true)
- Xml <XmlNode[]> (Required: true)
```

### Send-AppvClientReport

```powershell
Send-AppvClientReport [[-URL] <string>] [-NetworkCostAware] [-DeleteOnSuccess] [<CommonParameters>]

PARAMETERS:
- DeleteOnSuccess <switch> (Required: false)
- NetworkCostAware <switch> (Required: false)
- URL <string> (Required: false)
```

### Send-DtcDiagnosticTransaction

```powershell
Send-DtcDiagnosticTransaction [-Transaction] <DtcDiagnosticTransaction> [[-ComputerName] <string>] [[-Port] <int>] [[-PropagationMethod] <DtcTransactionPropagation>] [<CommonParameters>]

PARAMETERS:
- ComputerName <string> (Required: false)
- Port <int> (Required: false)
- PropagationMethod <DtcTransactionPropagation> (Required: false)
- Transaction <DtcDiagnosticTransaction> (Required: true)
```

### Send-EtwTraceSession

```powershell
Send-EtwTraceSession [-Name] <string[]> -DestinationFolder <string> [-DeleteAfterSend] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Send-EtwTraceSession -InputObject <CimInstance#MSFT_EtwTraceSession[]> -DestinationFolder <string> [-DeleteAfterSend] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DeleteAfterSend <switch> (Required: false)
- DestinationFolder <string> (Required: true)
- InputObject <CimInstance#MSFT_EtwTraceSession[]> (Required: true)
- Name <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Send-MailMessage

```powershell
Send-MailMessage [-To] <string[]> [-Subject] <string> [[-Body] <string>] [[-SmtpServer] <string>] -From <string> [-Attachments <string[]>] [-Bcc <string[]>] [-BodyAsHtml] [-Encoding <Encoding>] [-Cc <string[]>] [-DeliveryNotificationOption <DeliveryNotificationOptions>] [-Priority <MailPriority>] [-Credential <pscredential>] [-UseSsl] [-Port <int>] [<CommonParameters>]

PARAMETERS:
- Attachments <string[]> (Required: false)
- Bcc <string[]> (Required: false)
- Body <string> (Required: false)
- BodyAsHtml <switch> (Required: false)
- Cc <string[]> (Required: false)
- Credential <pscredential> (Required: false)
- DeliveryNotificationOption <DeliveryNotificationOptions> (Required: false)
- Encoding <Encoding> (Required: false)
- From <string> (Required: true)
- Port <int> (Required: false)
- Priority <MailPriority> (Required: false)
- SmtpServer <string> (Required: false)
- Subject <string> (Required: true)
- To <string[]> (Required: true)
- UseSsl <switch> (Required: false)
```

### Set-Acl

```powershell
Set-Acl [-Path] <string[]> [-AclObject] <Object> [[-CentralAccessPolicy] <string>] [-ClearCentralAccessPolicy] [-Passthru] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Set-Acl [-InputObject] <psobject> [-AclObject] <Object> [-Passthru] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Set-Acl [-AclObject] <Object> [[-CentralAccessPolicy] <string>] -LiteralPath <string[]> [-ClearCentralAccessPolicy] [-Passthru] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- AclObject <Object> (Required: true)
- CentralAccessPolicy <string> (Required: false)
- ClearCentralAccessPolicy <switch> (Required: false)
- Confirm <switch> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Include <string[]> (Required: false)
- InputObject <psobject> (Required: true)
- LiteralPath <string[]> (Required: true)
- Passthru <switch> (Required: false)
- Path <string[]> (Required: true)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-Alias

```powershell
Set-Alias [-Name] <string> [-Value] <string> [-Description <string>] [-Option <ScopedItemOptions>] [-PassThru] [-Scope <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- Force <switch> (Required: false)
- Name <string> (Required: true)
- Option <ScopedItemOptions> (Required: false)
- PassThru <switch> (Required: false)
- Scope <string> (Required: false)
- Value <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-AppBackgroundTaskResourcePolicy

```powershell
Set-AppBackgroundTaskResourcePolicy -Mode <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Mode <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-AppLockerPolicy

```powershell
Set-AppLockerPolicy [-XmlPolicy] <string> [-Ldap <string>] [-Merge] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-AppLockerPolicy [-PolicyObject] <AppLockerPolicy> [-Ldap <string>] [-Merge] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Ldap <string> (Required: false)
- Merge <switch> (Required: false)
- PolicyObject <AppLockerPolicy> (Required: true)
- WhatIf <switch> (Required: false)
- XmlPolicy <string> (Required: true)
```

### Set-AppvClientConfiguration

```powershell
Set-AppvClientConfiguration [-AllowHighCostLaunch <bool>] [-AutoLoad <uint32>] [-AutoCleanupEnabled <bool>] [-CertFilterForClientSsl <string>] [-EnablePackageScripts <bool>] [-EnablePublishingRefreshUI <bool>] [-IntegrationRootGlobal <string>] [-IntegrationRootUser <string>] [-LocationProvider <string>] [-MigrationMode <bool>] [-PackageInstallationRoot <string>] [-PackageSourceRoot <string>] [-RequirePublishAsAdmin <bool>] [-ReestablishmentInterval <uint32>] [-ReestablishmentRetries <uint32>] [-ReportingDataBlockSize <uint32>] [-ReportingDataCacheLimit <uint32>] [-ReportingEnabled <bool>] [-ReportingInterval <uint32>] [-ReportingRandomDelay <uint32>] [-ReportingServerURL <string>] [-ReportingStartTime <uint32>] [-RoamingFileExclusions <string>] [-RoamingRegistryExclusions <string>] [-SharedContentStoreMode <bool>] [-VerifyCertificateRevocationList <bool>] [-ExperienceImprovementOptIn <bool>] [-ProcessesUsingVirtualComponents <string[]>] [-EnableDynamicVirtualization <bool>] [-IgnoreLocationProvider <bool>] [-SupportBranchCache <bool>] [-SyncOnBatteriesEnabled <bool>] [<CommonParameters>]

PARAMETERS:
- AllowHighCostLaunch <bool> (Required: false)
- AutoCleanupEnabled <bool> (Required: false)
- AutoLoad <uint32> (Required: false)
- CertFilterForClientSsl <string> (Required: false)
- EnableDynamicVirtualization <bool> (Required: false)
- EnablePackageScripts <bool> (Required: false)
- EnablePublishingRefreshUI <bool> (Required: false)
- ExperienceImprovementOptIn <bool> (Required: false)
- IgnoreLocationProvider <bool> (Required: false)
- IntegrationRootGlobal <string> (Required: false)
- IntegrationRootUser <string> (Required: false)
- LocationProvider <string> (Required: false)
- MigrationMode <bool> (Required: false)
- PackageInstallationRoot <string> (Required: false)
- PackageSourceRoot <string> (Required: false)
- ProcessesUsingVirtualComponents <string[]> (Required: false)
- ReestablishmentInterval <uint32> (Required: false)
- ReestablishmentRetries <uint32> (Required: false)
- ReportingDataBlockSize <uint32> (Required: false)
- ReportingDataCacheLimit <uint32> (Required: false)
- ReportingEnabled <bool> (Required: false)
- ReportingInterval <uint32> (Required: false)
- ReportingRandomDelay <uint32> (Required: false)
- ReportingServerURL <string> (Required: false)
- ReportingStartTime <uint32> (Required: false)
- RequirePublishAsAdmin <bool> (Required: false)
- RoamingFileExclusions <string> (Required: false)
- RoamingRegistryExclusions <string> (Required: false)
- SharedContentStoreMode <bool> (Required: false)
- SupportBranchCache <bool> (Required: false)
- SyncOnBatteriesEnabled <bool> (Required: false)
- VerifyCertificateRevocationList <bool> (Required: false)
```

### Set-AppvClientMode

```powershell
Set-AppvClientMode -Normal [<CommonParameters>]

Set-AppvClientMode -Uninstall [<CommonParameters>]

PARAMETERS:
- Normal <switch> (Required: true)
- Uninstall <switch> (Required: true)
```

### Set-AppvClientPackage

```powershell
Set-AppvClientPackage [-PackageId] <guid> [-VersionId] <guid> [-Path <string>] [-DynamicDeploymentConfiguration <string>] [-UseNoConfiguration] [<CommonParameters>]

Set-AppvClientPackage [-Package] <AppvClientPackage> [-Path <string>] [-DynamicDeploymentConfiguration <string>] [-UseNoConfiguration] [<CommonParameters>]

Set-AppvClientPackage [-Name] <string> [[-Version] <string>] [-Path <string>] [-DynamicDeploymentConfiguration <string>] [-UseNoConfiguration] [<CommonParameters>]

PARAMETERS:
- DynamicDeploymentConfiguration <string> (Required: false)
- Name <string> (Required: true)
- Package <AppvClientPackage> (Required: true)
- PackageId <guid> (Required: true)
- Path <string> (Required: false)
- UseNoConfiguration <switch> (Required: false)
- Version <string> (Required: false)
- VersionId <guid> (Required: true)
```

### Set-AppvPublishingServer

```powershell
Set-AppvPublishingServer [-ServerId] <uint32> [[-GlobalRefreshEnabled] <bool>] [[-GlobalRefreshOnLogon] <bool>] [[-GlobalRefreshInterval] <uint32>] [[-GlobalRefreshIntervalUnit] <IPublishingServer+IntervalUnit>] [[-UserRefreshEnabled] <bool>] [[-UserRefreshOnLogon] <bool>] [[-UserRefreshInterval] <uint32>] [[-UserRefreshIntervalUnit] <IPublishingServer+IntervalUnit>] [<CommonParameters>]

Set-AppvPublishingServer [-Server] <AppvPublishingServer> [[-GlobalRefreshEnabled] <bool>] [[-GlobalRefreshOnLogon] <bool>] [[-GlobalRefreshInterval] <uint32>] [[-GlobalRefreshIntervalUnit] <IPublishingServer+IntervalUnit>] [[-UserRefreshEnabled] <bool>] [[-UserRefreshOnLogon] <bool>] [[-UserRefreshInterval] <uint32>] [[-UserRefreshIntervalUnit] <IPublishingServer+IntervalUnit>] [<CommonParameters>]

PARAMETERS:
- GlobalRefreshEnabled <bool> (Required: false)
- GlobalRefreshInterval <uint32> (Required: false)
- GlobalRefreshIntervalUnit <IPublishingServer+IntervalUnit> (Required: false)
- GlobalRefreshOnLogon <bool> (Required: false)
- Server <AppvPublishingServer> (Required: true)
- ServerId <uint32> (Required: true)
- UserRefreshEnabled <bool> (Required: false)
- UserRefreshInterval <uint32> (Required: false)
- UserRefreshIntervalUnit <IPublishingServer+IntervalUnit> (Required: false)
- UserRefreshOnLogon <bool> (Required: false)
```

### Set-AppxDefaultVolume

```powershell
Set-AppxDefaultVolume [-Volume] <AppxVolume> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Volume <AppxVolume> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-AppxPackageAutoUpdateSettings

```powershell
Set-AppxPackageAutoUpdateSettings [-PackageFamilyName] <string> [-AppInstallerUri <string>] [-UpdateUris <string[]>] [-RepairUris <string[]>] [-OptionalPackages <string[]>] [-DependencyPackages <string[]>] [-EnableAutomaticBackgroundTask <bool>] [-ForceUpdateFromAnyVersion <bool>] [-DisableAutoRepairs <bool>] [-CheckOnLaunch <bool>] [-ShowPrompt <bool>] [-UpdateBlocksActivation <bool>] [-UseSystemPolicySource] [-AllUsers] [-HoursBetweenUpdateChecks <uint32>] [-Version <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-AppxPackageAutoUpdateSettings [-PackageFamilyName] <string> -AppInstallerUri <string> -ClearPreviousSettings [-UpdateUris <string[]>] [-RepairUris <string[]>] [-OptionalPackages <string[]>] [-DependencyPackages <string[]>] [-EnableAutomaticBackgroundTask <bool>] [-ForceUpdateFromAnyVersion <bool>] [-DisableAutoRepairs <bool>] [-CheckOnLaunch <bool>] [-ShowPrompt <bool>] [-UpdateBlocksActivation <bool>] [-UseSystemPolicySource] [-AllUsers] [-HoursBetweenUpdateChecks <uint32>] [-Version <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-AppxPackageAutoUpdateSettings [-PackageFamilyName] <string> -PauseUpdates -HoursToPause <uint32> [-UseSystemPolicySource] [-AllUsers] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllUsers <switch> (Required: false)
- AppInstallerUri <string> (Required: false)
- CheckOnLaunch <bool> (Required: false)
- ClearPreviousSettings <switch> (Required: true)
- Confirm <switch> (Required: false)
- DependencyPackages <string[]> (Required: false)
- DisableAutoRepairs <bool> (Required: false)
- EnableAutomaticBackgroundTask <bool> (Required: false)
- ForceUpdateFromAnyVersion <bool> (Required: false)
- HoursBetweenUpdateChecks <uint32> (Required: false)
- HoursToPause <uint32> (Required: true)
- OptionalPackages <string[]> (Required: false)
- PackageFamilyName <string> (Required: true)
- PauseUpdates <switch> (Required: true)
- RepairUris <string[]> (Required: false)
- ShowPrompt <bool> (Required: false)
- UpdateBlocksActivation <bool> (Required: false)
- UpdateUris <string[]> (Required: false)
- UseSystemPolicySource <switch> (Required: false)
- Version <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-AppXProvisionedDataFile

```powershell
Set-AppXProvisionedDataFile -PackageName <string> -CustomDataPath <string> -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Set-AppXProvisionedDataFile -PackageName <string> -CustomDataPath <string> -Online [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CustomDataPath <string> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- PackageName <string> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Set-AssignedAccess

```powershell
Set-AssignedAccess -UserName <string> -AppName <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Set-AssignedAccess -UserName <string> -AppUserModelId <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Set-AssignedAccess -UserSID <string> -AppUserModelId <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Set-AssignedAccess -UserSID <string> -AppName <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AppName <string> (Required: true)
- AppUserModelId <string> (Required: true)
- Confirm <switch> (Required: false)
- UserName <string> (Required: true)
- UserSID <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-AuthenticodeSignature

```powershell
Set-AuthenticodeSignature [-FilePath] <string[]> [-Certificate] <X509Certificate2> [-IncludeChain <string>] [-TimestampServer <string>] [-HashAlgorithm <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-AuthenticodeSignature [-Certificate] <X509Certificate2> -LiteralPath <string[]> [-IncludeChain <string>] [-TimestampServer <string>] [-HashAlgorithm <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-AuthenticodeSignature [-Certificate] <X509Certificate2> -SourcePathOrExtension <string[]> -Content <byte[]> [-IncludeChain <string>] [-TimestampServer <string>] [-HashAlgorithm <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Certificate <X509Certificate2> (Required: true)
- Confirm <switch> (Required: false)
- Content <byte[]> (Required: true)
- FilePath <string[]> (Required: true)
- Force <switch> (Required: false)
- HashAlgorithm <string> (Required: false)
- IncludeChain <string> (Required: false)
- LiteralPath <string[]> (Required: true)
- SourcePathOrExtension <string[]> (Required: true)
- TimestampServer <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-BCAuthentication

```powershell
Set-BCAuthentication [-Mode] <ClientAuthenticationMode> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Mode <ClientAuthenticationMode> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-BCCache

```powershell
Set-BCCache [[-Path] <string>] [-MoveTo <string>] [-Percentage <uint32>] [-SizeBytes <uint64>] [-Defragment] [-Force] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BCCache [-Cache] <CimInstance#MSFT_NetBranchCacheCache[]> [-MoveTo <string>] [-Percentage <uint32>] [-SizeBytes <uint64>] [-Defragment] [-Force] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Cache <CimInstance#MSFT_NetBranchCacheCache[]> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Defragment <switch> (Required: false)
- Force <switch> (Required: false)
- MoveTo <string> (Required: false)
- PassThru <switch> (Required: false)
- Path <string> (Required: false)
- Percentage <uint32> (Required: false)
- SizeBytes <uint64> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-BCDataCacheEntryMaxAge

```powershell
Set-BCDataCacheEntryMaxAge [-TimeDays] <uint32> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- TimeDays <uint32> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-BcdBootDefault

```powershell
Set-BcdBootDefault [-Id] <string> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootDefault [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-BcdBootDisplayOrder

```powershell
Set-BcdBootDisplayOrder [-Id] <string[]> [[-Store] <BcdStoreInfo>] -AddFirst [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootDisplayOrder [-Entry] <BcdEntryInfo[]> -AddFirst [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootDisplayOrder [-Id] <string[]> [[-Store] <BcdStoreInfo>] -AddLast [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootDisplayOrder [-Entry] <BcdEntryInfo[]> -AddLast [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootDisplayOrder [-Id] <string[]> [[-Store] <BcdStoreInfo>] -Remove [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootDisplayOrder [-Entry] <BcdEntryInfo[]> -Remove [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootDisplayOrder [-Id] <string[]> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootDisplayOrder [-Entry] <BcdEntryInfo[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddFirst <switch> (Required: true)
- AddLast <switch> (Required: true)
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo[]> (Required: true)
- Force <switch> (Required: false)
- Id <string[]> (Required: true)
- Remove <switch> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-BcdBootSequence

```powershell
Set-BcdBootSequence [-Id] <string[]> [[-Store] <BcdStoreInfo>] -AddFirst [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootSequence [-Entry] <BcdEntryInfo[]> -AddFirst [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootSequence [-Id] <string[]> [[-Store] <BcdStoreInfo>] -AddLast [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootSequence [-Entry] <BcdEntryInfo[]> -AddLast [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootSequence [-Id] <string[]> [[-Store] <BcdStoreInfo>] -Remove [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootSequence [-Entry] <BcdEntryInfo[]> -Remove [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootSequence [-Id] <string[]> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootSequence [-Entry] <BcdEntryInfo[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddFirst <switch> (Required: true)
- AddLast <switch> (Required: true)
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo[]> (Required: true)
- Force <switch> (Required: false)
- Id <string[]> (Required: true)
- Remove <switch> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-BcdBootTimeout

```powershell
Set-BcdBootTimeout [-Value] <long> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Store <BcdStoreInfo> (Required: false)
- Value <long> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-BcdBootToolsDisplayOrder

```powershell
Set-BcdBootToolsDisplayOrder [-Id] <string[]> [[-Store] <BcdStoreInfo>] -AddFirst [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootToolsDisplayOrder [-Entry] <BcdEntryInfo[]> -AddFirst [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootToolsDisplayOrder [-Id] <string[]> [[-Store] <BcdStoreInfo>] -AddLast [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootToolsDisplayOrder [-Entry] <BcdEntryInfo[]> -AddLast [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootToolsDisplayOrder [-Id] <string[]> [[-Store] <BcdStoreInfo>] -Remove [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootToolsDisplayOrder [-Entry] <BcdEntryInfo[]> -Remove [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootToolsDisplayOrder [-Id] <string[]> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdBootToolsDisplayOrder [-Entry] <BcdEntryInfo[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddFirst <switch> (Required: true)
- AddLast <switch> (Required: true)
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo[]> (Required: true)
- Force <switch> (Required: false)
- Id <string[]> (Required: true)
- Remove <switch> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-BcdDebugSettings

```powershell
Set-BcdDebugSettings [[-Store] <BcdStoreInfo>] -DebugPort <long> -Serial [-Baudrate <long>] [-StartPolicy <StartPolicy>] [-NoUserModeExceptions] [-Force] [<CommonParameters>]

Set-BcdDebugSettings [[-Store] <BcdStoreInfo>] -Serial [-StartPolicy <StartPolicy>] [-NoUserModeExceptions] [-Force] [<CommonParameters>]

Set-BcdDebugSettings [[-Store] <BcdStoreInfo>] -Port <long> -HostIp <string> -Net -Key <string> [-NoDhcp] [-StartPolicy <StartPolicy>] [-NoUserModeExceptions] [-Force] [<CommonParameters>]

Set-BcdDebugSettings [[-Store] <BcdStoreInfo>] -Port <long> -HostIp <string> -Net [-NewKey] [-NoDhcp] [-StartPolicy <StartPolicy>] [-NoUserModeExceptions] [-Force] [<CommonParameters>]

Set-BcdDebugSettings [[-Store] <BcdStoreInfo>] -Channel <long> -Ieee1394 [-StartPolicy <StartPolicy>] [-NoUserModeExceptions] [-Force] [<CommonParameters>]

Set-BcdDebugSettings [[-Store] <BcdStoreInfo>] -Usb [-TargetName <string>] [-StartPolicy <StartPolicy>] [-NoUserModeExceptions] [-Force] [<CommonParameters>]

Set-BcdDebugSettings [[-Store] <BcdStoreInfo>] -Local [-StartPolicy <StartPolicy>] [-NoUserModeExceptions] [-Force] [<CommonParameters>]

PARAMETERS:
- Baudrate <long> (Required: false)
- Channel <long> (Required: true)
- DebugPort <long> (Required: true)
- Force <switch> (Required: false)
- HostIp <string> (Required: true)
- Ieee1394 <switch> (Required: true)
- Key <string> (Required: true)
- Local <switch> (Required: true)
- Net <switch> (Required: true)
- NewKey <switch> (Required: false)
- NoDhcp <switch> (Required: false)
- NoUserModeExceptions <switch> (Required: false)
- Port <long> (Required: true)
- Serial <switch> (Required: true)
- StartPolicy <StartPolicy> (Required: false)
- Store <BcdStoreInfo> (Required: false)
- TargetName <string> (Required: false)
- Usb <switch> (Required: true)
```

### Set-BcdElement

```powershell
Set-BcdElement [-Element] <string> [[-Id] <string>] [[-Store] <BcdStoreInfo>] -Type <SetBcdElementCommand+ElementType> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdElement [-Element] <string> [[-Id] <string>] [[-Store] <BcdStoreInfo>] -Device <SetBcdElementCommand+DeviceType> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdElement [-Element] <string> [-Entry] <BcdEntryInfo> -Type <SetBcdElementCommand+ElementType> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdElement [-Element] <string> [-Entry] <BcdEntryInfo> -Device <SetBcdElementCommand+DeviceType> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Device <SetBcdElementCommand+DeviceType> (Required: true)
- Element <string> (Required: true)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: false)
- Store <BcdStoreInfo> (Required: false)
- Type <SetBcdElementCommand+ElementType> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-BcdHypervisorSettings

```powershell
Set-BcdHypervisorSettings [[-Store] <BcdStoreInfo>] -DebugPort <long> -Serial [-Baudrate <long>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdHypervisorSettings [[-Store] <BcdStoreInfo>] -Ieee1394 [-Channel <long>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdHypervisorSettings [[-Store] <BcdStoreInfo>] -HostIp <string> -Port <long> -Net [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-BcdHypervisorSettings [[-Store] <BcdStoreInfo>] -Serial [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Baudrate <long> (Required: false)
- Channel <long> (Required: false)
- Confirm <switch> (Required: false)
- DebugPort <long> (Required: true)
- Force <switch> (Required: false)
- HostIp <string> (Required: true)
- Ieee1394 <switch> (Required: true)
- Net <switch> (Required: true)
- Port <long> (Required: true)
- Serial <switch> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-BCMinSMBLatency

```powershell
Set-BCMinSMBLatency [-LatencyMilliseconds] <uint32> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- LatencyMilliseconds <uint32> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-BCSecretKey

```powershell
Set-BCSecretKey [[-Passphrase] <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Passphrase <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-BitsTransfer

```powershell
Set-BitsTransfer [-BitsJob] <BitsJob[]> [-DisplayName <string>] [-Priority <string>] [-Description <string>] [-Dynamic <switch>] [-CustomHeadersWriteOnly] [-HttpMethod <string>] [-ProxyAuthentication <string>] [-RetryInterval <int>] [-RetryTimeout <int>] [-MaxDownloadTime <int>] [-TransferPolicy <CostStates>] [-ACLFlags <ACLFlagValue>] [-SecurityFlags <SecurityFlagValue>] [-UseStoredCredential <AuthenticationTargetValue>] [-Credential <pscredential>] [-ProxyCredential <pscredential>] [-Authentication <string>] [-SetOwnerToCurrentUser] [-ProxyUsage <string>] [-ProxyList <uri[]>] [-ProxyBypass <string[]>] [-CustomHeaders <string[]>] [-NotifyFlags <NotifyFlagValue>] [-NotifyCmdLine <string[]>] [-CertStoreLocation <CertStoreLocationValue>] [-CertStoreName <string>] [-CertHash <byte[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ACLFlags <ACLFlagValue> (Required: false)
- Authentication <string> (Required: false)
- BitsJob <BitsJob[]> (Required: true)
- CertHash <byte[]> (Required: false)
- CertStoreLocation <CertStoreLocationValue> (Required: false)
- CertStoreName <string> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- CustomHeaders <string[]> (Required: false)
- CustomHeadersWriteOnly <switch> (Required: false)
- Description <string> (Required: false)
- DisplayName <string> (Required: false)
- Dynamic <switch> (Required: false)
- HttpMethod <string> (Required: false)
- MaxDownloadTime <int> (Required: false)
- NotifyCmdLine <string[]> (Required: false)
- NotifyFlags <NotifyFlagValue> (Required: false)
- Priority <string> (Required: false)
- ProxyAuthentication <string> (Required: false)
- ProxyBypass <string[]> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- ProxyList <uri[]> (Required: false)
- ProxyUsage <string> (Required: false)
- RetryInterval <int> (Required: false)
- RetryTimeout <int> (Required: false)
- SecurityFlags <SecurityFlagValue> (Required: false)
- SetOwnerToCurrentUser <switch> (Required: false)
- TransferPolicy <CostStates> (Required: false)
- UseStoredCredential <AuthenticationTargetValue> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-CertificateAutoEnrollmentPolicy

```powershell
Set-CertificateAutoEnrollmentPolicy -PolicyState <PolicySetting> -context <Context> [-StoreName <string[]>] [-ExpirationPercentage <int>] [-EnableTemplateCheck] [-EnableMyStoreManagement] [-EnableBalloonNotifications] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-CertificateAutoEnrollmentPolicy -EnableAll -context <Context> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- EnableAll <switch> (Required: true)
- EnableBalloonNotifications <switch> (Required: false)
- EnableMyStoreManagement <switch> (Required: false)
- EnableTemplateCheck <switch> (Required: false)
- ExpirationPercentage <int> (Required: false)
- PolicyState <PolicySetting> (Required: true)
- StoreName <string[]> (Required: false)
- WhatIf <switch> (Required: false)
- context <Context> (Required: true)
```

### Set-CimInstance

```powershell
Set-CimInstance [-InputObject] <ciminstance> [-ComputerName <string[]>] [-ResourceUri <uri>] [-OperationTimeoutSec <uint32>] [-Property <IDictionary>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-CimInstance [-Query] <string> -CimSession <CimSession[]> -Property <IDictionary> [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-QueryDialect <string>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-CimInstance [-InputObject] <ciminstance> -CimSession <CimSession[]> [-ResourceUri <uri>] [-OperationTimeoutSec <uint32>] [-Property <IDictionary>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-CimInstance [-Query] <string> -Property <IDictionary> [-ComputerName <string[]>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-QueryDialect <string>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession[]> (Required: true)
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <ciminstance> (Required: true)
- Namespace <string> (Required: false)
- OperationTimeoutSec <uint32> (Required: false)
- PassThru <switch> (Required: false)
- Property <IDictionary> (Required: false)
- Query <string> (Required: true)
- QueryDialect <string> (Required: false)
- ResourceUri <uri> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-CIPolicyIdInfo

```powershell
Set-CIPolicyIdInfo [-FilePath] <string> [-PolicyName <string>] [-SupplementsBasePolicyID <guid>] [-BasePolicyToSupplementPath <string>] [-ResetPolicyID] [-PolicyId <string>] [-AppIdTaggingPolicy] [-AppIdTaggingKey <string[]>] [-AppIdTaggingValue <string[]>] [<CommonParameters>]

PARAMETERS:
- AppIdTaggingKey <string[]> (Required: false)
- AppIdTaggingPolicy <switch> (Required: false)
- AppIdTaggingValue <string[]> (Required: false)
- BasePolicyToSupplementPath <string> (Required: false)
- FilePath <string> (Required: true)
- PolicyId <string> (Required: false)
- PolicyName <string> (Required: false)
- ResetPolicyID <switch> (Required: false)
- SupplementsBasePolicyID <guid> (Required: false)
```

### Set-CIPolicySetting

```powershell
Set-CIPolicySetting [-FilePath] <string> -Provider <string> -Key <string> -ValueName <string> -ValueType <string> -Value <string> [<CommonParameters>]

Set-CIPolicySetting [-FilePath] <string> -Provider <string> -Key <string> -ValueName <string> -Delete [<CommonParameters>]

PARAMETERS:
- Delete <switch> (Required: true)
- FilePath <string> (Required: true)
- Key <string> (Required: true)
- Provider <string> (Required: true)
- Value <string> (Required: true)
- ValueName <string> (Required: true)
- ValueType <string> (Required: true)
```

### Set-CIPolicyVersion

```powershell
Set-CIPolicyVersion -FilePath <string> -Version <string> [<CommonParameters>]

PARAMETERS:
- FilePath <string> (Required: true)
- Version <string> (Required: true)
```

### Set-Clipboard

```powershell
Set-Clipboard [-Append] [-AsHtml] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Clipboard [-Value] <string[]> [-Append] [-AsHtml] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Clipboard -Path <string[]> [-Append] [-AsHtml] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Clipboard -LiteralPath <string[]> [-Append] [-AsHtml] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Append <switch> (Required: false)
- AsHtml <switch> (Required: false)
- Confirm <switch> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- Value <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-ClusteredScheduledTask

```powershell
Set-ClusteredScheduledTask [-TaskName] <string> [-Xml] <string> [[-Cluster] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-ClusteredScheduledTask [-TaskName] <string> [[-Action] <CimInstance#MSFT_TaskAction[]>] [[-Trigger] <CimInstance#MSFT_TaskTrigger[]>] [[-Settings] <CimInstance#MSFT_TaskSettings>] [[-Description] <string>] [[-Cluster] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-ClusteredScheduledTask [-TaskName] <string> [-InputObject] <CimInstance#MSFT_ScheduledTask> [[-Cluster] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Action <CimInstance#MSFT_TaskAction[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Cluster <string> (Required: false)
- Description <string> (Required: false)
- InputObject <CimInstance#MSFT_ScheduledTask> (Required: true)
- Settings <CimInstance#MSFT_TaskSettings> (Required: false)
- TaskName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- Trigger <CimInstance#MSFT_TaskTrigger[]> (Required: false)
- Xml <string> (Required: true)
```

### Set-Content

```powershell
Set-Content [-Path] <string[]> [-Value] <Object[]> [-PassThru] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Force] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [-NoNewline] [-Encoding <FileSystemCmdletProviderEncoding>] [-Stream <string>] [<CommonParameters>]

Set-Content [-Value] <Object[]> -LiteralPath <string[]> [-PassThru] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Force] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [-NoNewline] [-Encoding <FileSystemCmdletProviderEncoding>] [-Stream <string>] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Encoding <FileSystemCmdletProviderEncoding> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- NoNewline <switch> (Required: false)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- Stream <string> (Required: false)
- UseTransaction <switch> (Required: false)
- Value <Object[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-Culture

```powershell
Set-Culture [-CultureInfo] <cultureinfo> [<CommonParameters>]

PARAMETERS:
- CultureInfo <cultureinfo> (Required: true)
```

### Set-DAClientExperienceConfiguration

```powershell
Set-DAClientExperienceConfiguration [[-CorporateResources] <string[]>] [[-IPsecTunnelEndpoints] <string[]>] [[-PreferLocalNamesAllowed] <bool>] [[-UserInterface] <bool>] [[-SupportEmail] <string>] [[-FriendlyName] <string>] [[-ManualEntryPointSelectionAllowed] <bool>] [[-GslbFqdn] <string>] [[-ForceTunneling] <ForceTunneling>] [[-CustomCommands] <string[]>] [[-PassiveMode] <bool>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-DAClientExperienceConfiguration [[-CorporateResources] <string[]>] [[-IPsecTunnelEndpoints] <string[]>] [[-PreferLocalNamesAllowed] <bool>] [[-UserInterface] <bool>] [[-SupportEmail] <string>] [[-FriendlyName] <string>] [[-ManualEntryPointSelectionAllowed] <bool>] [[-GslbFqdn] <string>] [[-ForceTunneling] <ForceTunneling>] [[-CustomCommands] <string[]>] [[-PassiveMode] <bool>] -InputObject <CimInstance#MSFT_DAClientExperienceConfiguration[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- CorporateResources <string[]> (Required: false)
- CustomCommands <string[]> (Required: false)
- ForceTunneling <ForceTunneling> (Required: false)
- FriendlyName <string> (Required: false)
- GPOSession <string> (Required: false)
- GslbFqdn <string> (Required: false)
- IPsecTunnelEndpoints <string[]> (Required: false)
- InputObject <CimInstance#MSFT_DAClientExperienceConfiguration[]> (Required: true)
- ManualEntryPointSelectionAllowed <bool> (Required: false)
- PassThru <switch> (Required: false)
- PassiveMode <bool> (Required: false)
- PolicyStore <string> (Required: false)
- PreferLocalNamesAllowed <bool> (Required: false)
- SupportEmail <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- UserInterface <bool> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-DAEntryPointTableItem

```powershell
Set-DAEntryPointTableItem -PolicyStore <string> [-EntryPointName <string[]>] [-ADSite <string>] [-EntryPointRange <string[]>] [-TeredoServerIP <string>] [-EntryPointIPAddress <string>] [-GslbIP <string>] [-IPHttpsProfile <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-DAEntryPointTableItem -GPOSession <string> [-EntryPointName <string[]>] [-ADSite <string>] [-EntryPointRange <string[]>] [-TeredoServerIP <string>] [-EntryPointIPAddress <string>] [-GslbIP <string>] [-IPHttpsProfile <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-DAEntryPointTableItem -InputObject <CimInstance#MSFT_DASiteTableEntry[]> [-ADSite <string>] [-EntryPointRange <string[]>] [-TeredoServerIP <string>] [-EntryPointIPAddress <string>] [-GslbIP <string>] [-IPHttpsProfile <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ADSite <string> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EntryPointIPAddress <string> (Required: false)
- EntryPointName <string[]> (Required: false)
- EntryPointRange <string[]> (Required: false)
- GPOSession <string> (Required: true)
- GslbIP <string> (Required: false)
- IPHttpsProfile <string> (Required: false)
- InputObject <CimInstance#MSFT_DASiteTableEntry[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: true)
- TeredoServerIP <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-Date

```powershell
Set-Date [-Date] <datetime> [-DisplayHint <DisplayHintType>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Date [-Adjust] <timespan> [-DisplayHint <DisplayHintType>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Adjust <timespan> (Required: true)
- Confirm <switch> (Required: false)
- Date <datetime> (Required: true)
- DisplayHint <DisplayHintType> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-DeliveryOptimizationStatus

```powershell
DESCRIPTION:


PARAMETERS:
- FileId <String> (Required: false)
- Pin <Nullable`1> (Required: false)
- ExpireOn <DateTime> (Required: false)
```

### Set-Disk

```powershell
Set-Disk [-Number] <uint32> [-IsReadOnly <bool>] [-Signature <uint32>] [-Guid <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Disk -InputObject <ciminstance[]> [-IsReadOnly <bool>] [-Signature <uint32>] [-Guid <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Disk -InputObject <ciminstance[]> [-IsOffline <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Disk -InputObject <ciminstance[]> [-PartitionStyle <PartitionStyle>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Disk [-Number] <uint32> [-PartitionStyle <PartitionStyle>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Disk -Path <string> [-PartitionStyle <PartitionStyle>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Disk -UniqueId <string> [-PartitionStyle <PartitionStyle>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Disk -UniqueId <string> [-IsReadOnly <bool>] [-Signature <uint32>] [-Guid <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Disk -UniqueId <string> [-IsOffline <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Disk -Path <string> [-IsReadOnly <bool>] [-Signature <uint32>] [-Guid <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Disk -Path <string> [-IsOffline <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Disk [-Number] <uint32> [-IsOffline <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Guid <string> (Required: false)
- InputObject <ciminstance[]> (Required: true)
- IsOffline <bool> (Required: false)
- IsReadOnly <bool> (Required: false)
- Number <uint32> (Required: true)
- PartitionStyle <PartitionStyle> (Required: false)
- Path <string> (Required: true)
- Signature <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
```

### Set-DnsClient

```powershell
Set-DnsClient [-InterfaceAlias] <string[]> [-ConnectionSpecificSuffix <string>] [-RegisterThisConnectionsAddress <bool>] [-UseSuffixWhenRegistering <bool>] [-ResetConnectionSpecificSuffix] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-DnsClient -InterfaceIndex <uint32[]> [-ConnectionSpecificSuffix <string>] [-RegisterThisConnectionsAddress <bool>] [-UseSuffixWhenRegistering <bool>] [-ResetConnectionSpecificSuffix] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-DnsClient -InputObject <CimInstance#MSFT_DNSClient[]> [-ConnectionSpecificSuffix <string>] [-RegisterThisConnectionsAddress <bool>] [-UseSuffixWhenRegistering <bool>] [-ResetConnectionSpecificSuffix] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionSpecificSuffix <string> (Required: false)
- InputObject <CimInstance#MSFT_DNSClient[]> (Required: true)
- InterfaceAlias <string[]> (Required: true)
- InterfaceIndex <uint32[]> (Required: true)
- PassThru <switch> (Required: false)
- RegisterThisConnectionsAddress <bool> (Required: false)
- ResetConnectionSpecificSuffix <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseSuffixWhenRegistering <bool> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-DnsClientDohServerAddress

```powershell
Set-DnsClientDohServerAddress [-ServerAddress] <string[]> [[-DohTemplate] <string>] [[-AllowFallbackToUdp] <bool>] [[-AutoUpgrade] <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-DnsClientDohServerAddress [[-DohTemplate] <string>] [[-AllowFallbackToUdp] <bool>] [[-AutoUpgrade] <bool>] -InputObject <CimInstance#MSFT_DNSClientDohServerAddress[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowFallbackToUdp <bool> (Required: false)
- AsJob <switch> (Required: false)
- AutoUpgrade <bool> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DohTemplate <string> (Required: false)
- InputObject <CimInstance#MSFT_DNSClientDohServerAddress[]> (Required: true)
- PassThru <switch> (Required: false)
- ServerAddress <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-DnsClientGlobalSetting

```powershell
Set-DnsClientGlobalSetting [-WhatIf] [-Confirm] [<CommonParameters>]

Set-DnsClientGlobalSetting [-InputObject <CimInstance#MSFT_DNSClientGlobalSetting[]>] [-SuffixSearchList <string[]>] [-UseDevolution <bool>] [-DevolutionLevel <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DevolutionLevel <uint32> (Required: false)
- InputObject <CimInstance#MSFT_DNSClientGlobalSetting[]> (Required: false)
- PassThru <switch> (Required: false)
- SuffixSearchList <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseDevolution <bool> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-DnsClientNrptGlobal

```powershell
Set-DnsClientNrptGlobal [-EnableDAForAllNetworks <string>] [-GpoName <string>] [-SecureNameQueryFallback <string>] [-QueryPolicy <string>] [-Server <string>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EnableDAForAllNetworks <string> (Required: false)
- GpoName <string> (Required: false)
- PassThru <switch> (Required: false)
- QueryPolicy <string> (Required: false)
- SecureNameQueryFallback <string> (Required: false)
- Server <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-DnsClientNrptRule

```powershell
Set-DnsClientNrptRule [-Name] <string> [-DAEnable <bool>] [-DAIPsecEncryptionType <string>] [-DAIPsecRequired <bool>] [-DANameServers <string[]>] [-DAProxyServerName <string>] [-DAProxyType <string>] [-Comment <string>] [-DnsSecEnable <bool>] [-DnsSecIPsecEncryptionType <string>] [-DnsSecIPsecRequired <bool>] [-DnsSecValidationRequired <bool>] [-GpoName <string>] [-IPsecTrustAuthority <string>] [-NameEncoding <string>] [-NameServers <string[]>] [-Namespace <string[]>] [-Server <string>] [-DisplayName <string>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Comment <string> (Required: false)
- Confirm <switch> (Required: false)
- DAEnable <bool> (Required: false)
- DAIPsecEncryptionType <string> (Required: false)
- DAIPsecRequired <bool> (Required: false)
- DANameServers <string[]> (Required: false)
- DAProxyServerName <string> (Required: false)
- DAProxyType <string> (Required: false)
- DisplayName <string> (Required: false)
- DnsSecEnable <bool> (Required: false)
- DnsSecIPsecEncryptionType <string> (Required: false)
- DnsSecIPsecRequired <bool> (Required: false)
- DnsSecValidationRequired <bool> (Required: false)
- GpoName <string> (Required: false)
- IPsecTrustAuthority <string> (Required: false)
- Name <string> (Required: true)
- NameEncoding <string> (Required: false)
- NameServers <string[]> (Required: false)
- Namespace <string[]> (Required: false)
- PassThru <switch> (Required: false)
- Server <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-DnsClientServerAddress

```powershell
Set-DnsClientServerAddress [-InterfaceAlias] <string[]> [-ServerAddresses <string[]>] [-Validate] [-ResetServerAddresses] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-DnsClientServerAddress -InterfaceIndex <uint32[]> [-ServerAddresses <string[]>] [-Validate] [-ResetServerAddresses] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-DnsClientServerAddress -InputObject <CimInstance#MSFT_DNSClientServerAddress[]> [-ServerAddresses <string[]>] [-Validate] [-ResetServerAddresses] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_DNSClientServerAddress[]> (Required: true)
- InterfaceAlias <string[]> (Required: true)
- InterfaceIndex <uint32[]> (Required: true)
- PassThru <switch> (Required: false)
- ResetServerAddresses <switch> (Required: false)
- ServerAddresses <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- Validate <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-DODownloadMode

```powershell
DESCRIPTION:


```

### Set-DOMaxBackgroundBandwidth

```powershell
DESCRIPTION:


PARAMETERS:
- MaxBackgroundBandwidth <Nullable`1> (Required: false)
- Reset <SwitchParameter> (Required: false)
```

### Set-DOMaxForegroundBandwidth

```powershell
DESCRIPTION:


PARAMETERS:
- MaxForegroundBandwidth <Nullable`1> (Required: false)
- Reset <SwitchParameter> (Required: false)
```

### Set-DOPercentageMaxBackgroundBandwidth

```powershell
DESCRIPTION:


PARAMETERS:
- MaxBackgroundBandwidthPercentage <Nullable`1> (Required: false)
- Reset <SwitchParameter> (Required: false)
```

### Set-DOPercentageMaxForegroundBandwidth

```powershell
DESCRIPTION:


PARAMETERS:
- MaxForegroundBandwidthPercentage <Nullable`1> (Required: false)
- Reset <SwitchParameter> (Required: false)
```

### Set-DscLocalConfigurationManager

```powershell
Set-DscLocalConfigurationManager [-Path] <string> [[-ComputerName] <string[]>] [-Force] [-Credential <pscredential>] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-DscLocalConfigurationManager [-Path] <string> -CimSession <CimSession[]> [-Force] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Set-DtcAdvancedHostSetting

```powershell
Set-DtcAdvancedHostSetting -Name <string> -Value <string> -Type <string> [-Subkey <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string> (Required: true)
- Subkey <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- Type <string> (Required: true)
- Value <string> (Required: true)
```

### Set-DtcAdvancedSetting

```powershell
Set-DtcAdvancedSetting -Name <string> -Value <string> -Type <string> [-DtcName <string>] [-Subkey <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DtcName <string> (Required: false)
- Name <string> (Required: true)
- Subkey <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- Type <string> (Required: true)
- Value <string> (Required: true)
```

### Set-DtcClusterDefault

```powershell
Set-DtcClusterDefault -DtcResourceName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DtcResourceName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Set-DtcClusterTMMapping

```powershell
Set-DtcClusterTMMapping -Name <string> -Service <string> [-ClusterResourceName <string>] [-Local <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-DtcClusterTMMapping -Name <string> -ClusterResourceName <string> [-Local <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-DtcClusterTMMapping -Name <string> -Local <bool> [-ClusterResourceName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-DtcClusterTMMapping -Name <string> -ExecutablePath <string> [-ClusterResourceName <string>] [-Local <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-DtcClusterTMMapping -Name <string> -ComPlusAppId <string> [-ClusterResourceName <string>] [-Local <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClusterResourceName <string> (Required: false)
- ComPlusAppId <string> (Required: true)
- ExecutablePath <string> (Required: true)
- Local <bool> (Required: false)
- Name <string> (Required: true)
- Service <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Set-DtcDefault

```powershell
Set-DtcDefault [-ServerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ServerName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Set-DtcLog

```powershell
Set-DtcLog [-DtcName <string>] [-Path <string>] [-SizeInMB <uint32>] [-MaxSizeInMB <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DtcName <string> (Required: false)
- MaxSizeInMB <uint32> (Required: false)
- Path <string> (Required: false)
- SizeInMB <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-DtcNetworkSetting

```powershell
Set-DtcNetworkSetting [-DtcName <string>] [-InboundTransactionsEnabled <bool>] [-OutboundTransactionsEnabled <bool>] [-RemoteClientAccessEnabled <bool>] [-RemoteAdministrationAccessEnabled <bool>] [-XATransactionsEnabled <bool>] [-LUTransactionsEnabled <bool>] [-AuthenticationLevel <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-DtcNetworkSetting -DisableNetworkAccess [-DtcName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AuthenticationLevel <string> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DisableNetworkAccess <switch> (Required: true)
- DtcName <string> (Required: false)
- InboundTransactionsEnabled <bool> (Required: false)
- LUTransactionsEnabled <bool> (Required: false)
- OutboundTransactionsEnabled <bool> (Required: false)
- RemoteAdministrationAccessEnabled <bool> (Required: false)
- RemoteClientAccessEnabled <bool> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
- XATransactionsEnabled <bool> (Required: false)
```

### Set-DtcTransaction

```powershell
Set-DtcTransaction -TransactionId <guid> -Trace [-DtcName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-DtcTransaction -TransactionId <guid> -Forget [-DtcName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-DtcTransaction -TransactionId <guid> -Commit [-DtcName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-DtcTransaction -TransactionId <guid> -Abort [-DtcName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Abort <switch> (Required: true)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Commit <switch> (Required: true)
- DtcName <string> (Required: false)
- Forget <switch> (Required: true)
- ThrottleLimit <int> (Required: false)
- Trace <switch> (Required: true)
- TransactionId <guid> (Required: true)
```

### Set-DtcTransactionsTraceSession

```powershell
Set-DtcTransactionsTraceSession -BufferCount <uint32> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BufferCount <uint32> (Required: true)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Set-DtcTransactionsTraceSetting

```powershell
Set-DtcTransactionsTraceSetting -AllTransactionsTracingEnabled <bool> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-DtcTransactionsTraceSetting [-AbortedTransactionsTracingEnabled <bool>] [-LongLivedTransactionsTracingEnabled <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AbortedTransactionsTracingEnabled <bool> (Required: false)
- AllTransactionsTracingEnabled <bool> (Required: true)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- LongLivedTransactionsTracingEnabled <bool> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Set-DynamicParameterVariables

```powershell
SYNOPSIS:
This command is used by Pester's Mocking framework.  You do not need to call it directly.

PARAMETERS:

- SessionState <SessionState> (Required: true)
- Parameters <Hashtable> (Required: false)
- Metadata <CommandMetadata> (Required: false)

```

### Set-EtwTraceProvider

```powershell
Set-EtwTraceProvider [[-Guid] <string[]>] [-AutologgerName <string[]>] [-Level <byte>] [-MatchAnyKeyword <uint64>] [-MatchAllKeyword <uint64>] [-Property <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-EtwTraceProvider [[-Guid] <string[]>] [-SessionName <string[]>] [-Level <byte>] [-MatchAnyKeyword <uint64>] [-MatchAllKeyword <uint64>] [-Property <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-EtwTraceProvider -InputObject <CimInstance#MSFT_EtwTraceProvider[]> [-Level <byte>] [-MatchAnyKeyword <uint64>] [-MatchAllKeyword <uint64>] [-Property <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AutologgerName <string[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Guid <string[]> (Required: false)
- InputObject <CimInstance#MSFT_EtwTraceProvider[]> (Required: true)
- Level <byte> (Required: false)
- MatchAllKeyword <uint64> (Required: false)
- MatchAnyKeyword <uint64> (Required: false)
- PassThru <switch> (Required: false)
- Property <uint32> (Required: false)
- SessionName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-ExecutionPolicy

```powershell
Set-ExecutionPolicy [-ExecutionPolicy] <ExecutionPolicy> [[-Scope] <ExecutionPolicyScope>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- ExecutionPolicy <ExecutionPolicy> (Required: true)
- Force <switch> (Required: false)
- Scope <ExecutionPolicyScope> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-FileIntegrity

```powershell
Set-FileIntegrity [-FileName] <string> [[-Enable] <bool>] [-Enforce <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Enable <bool> (Required: false)
- Enforce <bool> (Required: false)
- FileName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-FileShare

```powershell
Set-FileShare -UniqueId <string> [-Description <string>] [-EncryptData <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-FileShare [-InputObject] <ciminstance[]> [-Description <string>] [-EncryptData <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-FileShare -Name <string> [-Description <string>] [-EncryptData <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- EncryptData <bool> (Required: false)
- InputObject <ciminstance[]> (Required: true)
- Name <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-FileStorageTier

```powershell
Set-FileStorageTier -FilePath <string> -DesiredStorageTierFriendlyName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-FileStorageTier -FilePath <string> -DesiredStorageTierClass <StorageTierClass> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-FileStorageTier -FilePath <string> -DesiredStorageTier <ciminstance> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-FileStorageTier -FilePath <string> -DesiredStorageTierUniqueId <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DesiredStorageTier <ciminstance> (Required: true)
- DesiredStorageTierClass <StorageTierClass> (Required: true)
- DesiredStorageTierFriendlyName <string> (Required: true)
- DesiredStorageTierUniqueId <string> (Required: true)
- FilePath <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-HVCIOptions

```powershell
Set-HVCIOptions [-FilePath] <string> [-Enabled] [-Strict] [-DebugMode] [-DisableAllowed] [<CommonParameters>]

Set-HVCIOptions [-FilePath] <string> [-None] [<CommonParameters>]

PARAMETERS:
- DebugMode <switch> (Required: false)
- DisableAllowed <switch> (Required: false)
- Enabled <switch> (Required: false)
- FilePath <string> (Required: true)
- None <switch> (Required: false)
- Strict <switch> (Required: false)
```

### Set-InitiatorPort

```powershell
Set-InitiatorPort [-NodeAddress] <string[]> -NewNodeAddress <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-InitiatorPort -ObjectId <string[]> -NewNodeAddress <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-InitiatorPort -InputObject <CimInstance#MSFT_InitiatorPort[]> -NewNodeAddress <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_InitiatorPort[]> (Required: true)
- NewNodeAddress <string> (Required: true)
- NodeAddress <string[]> (Required: true)
- ObjectId <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-IscsiChapSecret

```powershell
Set-IscsiChapSecret [-ChapSecret <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- ChapSecret <string> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Set-Item

```powershell
Set-Item [-Path] <string[]> [[-Value] <Object>] [-Force] [-PassThru] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Set-Item [[-Value] <Object>] -LiteralPath <string[]> [-Force] [-PassThru] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- UseTransaction <switch> (Required: false)
- Value <Object> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-ItemProperty

```powershell
Set-ItemProperty [-Path] <string[]> [-Name] <string> [-Value] <Object> [-PassThru] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Set-ItemProperty [-Path] <string[]> -InputObject <psobject> [-PassThru] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Set-ItemProperty [-Name] <string> [-Value] <Object> -LiteralPath <string[]> [-PassThru] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Set-ItemProperty -LiteralPath <string[]> -InputObject <psobject> [-PassThru] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- InputObject <psobject> (Required: true)
- LiteralPath <string[]> (Required: true)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- UseTransaction <switch> (Required: false)
- Value <Object> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-JobTrigger

```powershell
Set-JobTrigger [-InputObject] <ScheduledJobTrigger[]> [-DaysInterval <int>] [-WeeksInterval <int>] [-RandomDelay <timespan>] [-At <datetime>] [-User <string>] [-DaysOfWeek <DayOfWeek[]>] [-AtStartup] [-AtLogOn] [-Once] [-RepetitionInterval <timespan>] [-RepetitionDuration <timespan>] [-RepeatIndefinitely] [-Daily] [-Weekly] [-PassThru] [<CommonParameters>]

PARAMETERS:
- At <datetime> (Required: false)
- AtLogOn <switch> (Required: false)
- AtStartup <switch> (Required: false)
- Daily <switch> (Required: false)
- DaysInterval <int> (Required: false)
- DaysOfWeek <DayOfWeek[]> (Required: false)
- InputObject <ScheduledJobTrigger[]> (Required: true)
- Once <switch> (Required: false)
- PassThru <switch> (Required: false)
- RandomDelay <timespan> (Required: false)
- RepeatIndefinitely <switch> (Required: false)
- RepetitionDuration <timespan> (Required: false)
- RepetitionInterval <timespan> (Required: false)
- User <string> (Required: false)
- Weekly <switch> (Required: false)
- WeeksInterval <int> (Required: false)
```

### Set-KdsConfiguration

```powershell
Set-KdsConfiguration [-LocalTestOnly] [-SecretAgreementPublicKeyLength <int>] [-SecretAgreementPrivateKeyLength <int>] [-SecretAgreementParameters <byte[]>] [-SecretAgreementAlgorithm <string>] [-KdfParameters <byte[]>] [-KdfAlgorithm <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-KdsConfiguration -RevertToDefault [-LocalTestOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-KdsConfiguration [-InputObject] <KdsServerConfiguration> [-LocalTestOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- InputObject <KdsServerConfiguration> (Required: true)
- KdfAlgorithm <string> (Required: false)
- KdfParameters <byte[]> (Required: false)
- LocalTestOnly <switch> (Required: false)
- RevertToDefault <switch> (Required: true)
- SecretAgreementAlgorithm <string> (Required: false)
- SecretAgreementParameters <byte[]> (Required: false)
- SecretAgreementPrivateKeyLength <int> (Required: false)
- SecretAgreementPublicKeyLength <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-LapsADAuditing

```powershell
Set-LapsADAuditing -Identity <string[]> -AuditedPrincipals <string[]> [-Credential <pscredential>] [-AuditType <AuditFlags>] [-Domain <string>] [-DomainController <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AuditType <AuditFlags> (Required: false)
- AuditedPrincipals <string[]> (Required: true)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Domain <string> (Required: false)
- DomainController <string> (Required: false)
- Identity <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-LapsADComputerSelfPermission

```powershell
Set-LapsADComputerSelfPermission -Identity <string[]> [-Domain <string>] [-DomainController <string>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Domain <string> (Required: false)
- DomainController <string> (Required: false)
- Identity <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-LapsADPasswordExpirationTime

```powershell
Set-LapsADPasswordExpirationTime -Identity <string[]> [-Credential <pscredential>] [-WhenEffective <datetime>] [-Domain <string>] [-DomainController <string>] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- Domain <string> (Required: false)
- DomainController <string> (Required: false)
- Identity <string[]> (Required: true)
- WhenEffective <datetime> (Required: false)
```

### Set-LapsADReadPasswordPermission

```powershell
Set-LapsADReadPasswordPermission -Identity <string[]> -AllowedPrincipals <string[]> [-Credential <pscredential>] [-Domain <string>] [-DomainController <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowedPrincipals <string[]> (Required: true)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Domain <string> (Required: false)
- DomainController <string> (Required: false)
- Identity <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-LapsADResetPasswordPermission

```powershell
Set-LapsADResetPasswordPermission -Identity <string[]> -AllowedPrincipals <string[]> [-Credential <pscredential>] [-Domain <string>] [-DomainController <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowedPrincipals <string[]> (Required: true)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Domain <string> (Required: false)
- DomainController <string> (Required: false)
- Identity <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-LocalGroup

```powershell
Set-LocalGroup [-InputObject] <LocalGroup> -Description <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Set-LocalGroup [-Name] <string> -Description <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Set-LocalGroup [-SID] <SecurityIdentifier> -Description <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Description <string> (Required: true)
- InputObject <LocalGroup> (Required: true)
- Name <string> (Required: true)
- SID <SecurityIdentifier> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-LocalUser

```powershell
Set-LocalUser [-Name] <string> [-AccountExpires <datetime>] [-AccountNeverExpires] [-Description <string>] [-FullName <string>] [-Password <securestring>] [-PasswordNeverExpires <bool>] [-UserMayChangePassword <bool>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-LocalUser [-InputObject] <LocalUser> [-AccountExpires <datetime>] [-AccountNeverExpires] [-Description <string>] [-FullName <string>] [-Password <securestring>] [-PasswordNeverExpires <bool>] [-UserMayChangePassword <bool>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-LocalUser [-SID] <SecurityIdentifier> [-AccountExpires <datetime>] [-AccountNeverExpires] [-Description <string>] [-FullName <string>] [-Password <securestring>] [-PasswordNeverExpires <bool>] [-UserMayChangePassword <bool>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AccountExpires <datetime> (Required: false)
- AccountNeverExpires <switch> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- FullName <string> (Required: false)
- InputObject <LocalUser> (Required: true)
- Name <string> (Required: true)
- Password <securestring> (Required: false)
- PasswordNeverExpires <bool> (Required: false)
- SID <SecurityIdentifier> (Required: true)
- UserMayChangePassword <bool> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-Location

```powershell
Set-Location [[-Path] <string>] [-PassThru] [-UseTransaction] [<CommonParameters>]

Set-Location -LiteralPath <string> [-PassThru] [-UseTransaction] [<CommonParameters>]

Set-Location [-PassThru] [-StackName <string>] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- LiteralPath <string> (Required: true)
- PassThru <switch> (Required: false)
- Path <string> (Required: false)
- StackName <string> (Required: false)
- UseTransaction <switch> (Required: false)
```

### Set-LogProperties

```powershell
Set-LogProperties [-LogDetails] <LogDetails> [-Force] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- LogDetails <LogDetails> (Required: true)
```

### Set-MMAgent

```powershell
Set-MMAgent -MaxOperationAPIFiles <uint32> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- MaxOperationAPIFiles <uint32> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Set-MpPreference

```powershell
Set-MpPreference [-ExclusionPath <string[]>] [-ExclusionExtension <string[]>] [-ExclusionProcess <string[]>] [-ExclusionIpAddress <string[]>] [-RealTimeScanDirection <ScanDirection>] [-QuarantinePurgeItemsAfterDelay <uint32>] [-RemediationScheduleDay <Day>] [-RemediationScheduleTime <datetime>] [-RemoteEncryptionProtectionConfiguredState <NetworkBehaviorProtectionConfiguredState>] [-RemoteEncryptionProtectionMaxBlockTime <uint32>] [-RemoteEncryptionProtectionAggressiveness <Aggressiveness>] [-RemoteEncryptionProtectionExclusions <string[]>] [-BruteForceProtectionConfiguredState <NetworkBehaviorProtectionConfiguredState>] [-BruteForceProtectionMaxBlockTime <uint32>] [-BruteForceProtectionAggressiveness <Aggressiveness>] [-BruteForceProtectionExclusions <string[]>] [-BruteForceProtectionLocalNetworkBlocking <bool>] [-BruteForceProtectionSkipLearningPeriod <bool>] [-ReportingAdditionalActionTimeOut <uint32>] [-ReportingCriticalFailureTimeOut <uint32>] [-ReportingNonCriticalTimeOut <uint32>] [-ServiceHealthReportInterval <uint32>] [-ReportDynamicSignatureDroppedEvent <bool>] [-ScanAvgCPULoadFactor <byte>] [-CheckForSignaturesBeforeRunningScan <bool>] [-ScanPurgeItemsAfterDelay <uint32>] [-ScanOnlyIfIdleEnabled <bool>] [-ScanParameters <ScanType>] [-ScanScheduleDay <Day>] [-ScanScheduleQuickScanTime <datetime>] [-ScanScheduleTime <datetime>] [-ThrottleForScheduledScanOnly <bool>] [-SignatureFirstAuGracePeriod <uint32>] [-SignatureAuGracePeriod <uint32>] [-SignatureDefinitionUpdateFileSharesSources <string>] [-SignatureDisableUpdateOnStartupWithoutEngine <bool>] [-SignatureFallbackOrder <string>] [-SharedSignaturesPath <string>] [-SharedSignaturesPathUpdateAtScheduledTimeOnly <bool>] [-SignatureScheduleDay <Day>] [-SignatureScheduleTime <datetime>] [-SignatureUpdateCatchupInterval <uint32>] [-SignatureUpdateInterval <uint32>] [-SignatureBlobUpdateInterval <uint32>] [-SignatureBlobFileSharesSources <string>] [-MeteredConnectionUpdates <bool>] [-AllowNetworkProtectionOnWinServer <bool>] [-DisableDatagramProcessing <bool>] [-EnableConvertWarnToBlock <bool>] [-DisableCpuThrottleOnIdleScans <bool>] [-MAPSReporting <MAPSReportingType>] [-SubmitSamplesConsent <SubmitSamplesConsentType>] [-DisableAutoExclusions <bool>] [-DisablePrivacyMode <bool>] [-RandomizeScheduleTaskTimes <bool>] [-SchedulerRandomizationTime <uint32>] [-DisableBehaviorMonitoring <bool>] [-DisableIntrusionPreventionSystem <bool>] [-DisableIOAVProtection <bool>] [-DisableRealtimeMonitoring <bool>] [-DisableScriptScanning <bool>] [-DisableArchiveScanning <bool>] [-DisableCatchupFullScan <bool>] [-DisableCatchupQuickScan <bool>] [-DisableEmailScanning <bool>] [-DisableRemovableDriveScanning <bool>] [-DisableRestorePoint <bool>] [-DisableScanningMappedNetworkDrivesForFullScan <bool>] [-DisableScanningNetworkFiles <bool>] [-ApplyDisableNetworkScanningToIOAV <bool>] [-UILockdown <bool>] [-ThreatIDDefaultAction_Ids <long[]>] [-ThreatIDDefaultAction_Actions <ThreatAction[]>] [-UnknownThreatDefaultAction <ThreatAction>] [-LowThreatDefaultAction <ThreatAction>] [-ModerateThreatDefaultAction <ThreatAction>] [-HighThreatDefaultAction <ThreatAction>] [-SevereThreatDefaultAction <ThreatAction>] [-Force] [-DisableBlockAtFirstSeen <bool>] [-PUAProtection <PUAProtectionType>] [-CloudBlockLevel <CloudBlockLevelType>] [-CloudExtendedTimeout <uint32>] [-EnableNetworkProtection <ASRRuleActionType>] [-EnableControlledFolderAccess <ControlledFolderAccessType>] [-AttackSurfaceReductionOnlyExclusions <string[]>] [-ControlledFolderAccessAllowedApplications <string[]>] [-ControlledFolderAccessProtectedFolders <string[]>] [-AttackSurfaceReductionRules_Ids <string[]>] [-AttackSurfaceReductionRules_Actions <ASRRuleActionType[]>] [-EnableLowCpuPriority <bool>] [-EnableFileHashComputation <bool>] [-EnableFullScanOnBatteryPower <bool>] [-ProxyPacUrl <string>] [-ProxyServer <string>] [-ProxyBypass <string[]>] [-ForceUseProxyOnly <bool>] [-DisableTlsParsing <bool>] [-DisableFtpParsing <bool>] [-DisableHttpParsing <bool>] [-DisableDnsParsing <bool>] [-DisableDnsOverTcpParsing <bool>] [-DisableSshParsing <bool>] [-PlatformUpdatesChannel <UpdatesChannelType>] [-EngineUpdatesChannel <UpdatesChannelType>] [-DefinitionUpdatesChannel <DefinitionUpdatesChannelType>] [-DisableGradualRelease <bool>] [-AllowNetworkProtectionDownLevel <bool>] [-AllowDatagramProcessingOnWinServer <bool>] [-EnableDnsSinkhole <bool>] [-DisableInboundConnectionFiltering <bool>] [-DisableRdpParsing <bool>] [-DisableNetworkProtectionPerfTelemetry <bool>] [-TrustLabelProtectionStatus <uint32>] [-AllowSwitchToAsyncInspection <bool>] [-ScanScheduleOffset <uint32>] [-DisableTDTFeature <bool>] [-DisableTamperProtection <bool>] [-DisableSmtpParsing <bool>] [-DisableQuicParsing <bool>] [-NetworkProtectionReputationMode <uint32>] [-EnableUdpSegmentationOffload <bool>] [-EnableUdpReceiveOffload <bool>] [-IntelTDTEnabled <bool>] [-AttackSurfaceReductionRules_RuleSpecificExclusions_Id <string[]>] [-AttackSurfaceReductionRules_RuleSpecificExclusions <string[]>] [-OobeEnableRtpAndSigUpdate <bool>] [-PerformanceModeStatus <PerformanceModeStatusType>] [-QuickScanIncludeExclusions <QuickScanIncludeExclusionsType>] [-DisableCacheMaintenance <bool>] [-RemoveScanningThreadPoolCap <bool>] [-DisableCoreServiceECSIntegration <bool>] [-DisableCoreServiceTelemetry <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AllowDatagramProcessingOnWinServer <bool> (Required: false)
- AllowNetworkProtectionDownLevel <bool> (Required: false)
- AllowNetworkProtectionOnWinServer <bool> (Required: false)
- AllowSwitchToAsyncInspection <bool> (Required: false)
- ApplyDisableNetworkScanningToIOAV <bool> (Required: false)
- AsJob <switch> (Required: false)
- AttackSurfaceReductionOnlyExclusions <string[]> (Required: false)
- AttackSurfaceReductionRules_Actions <ASRRuleActionType[]> (Required: false)
- AttackSurfaceReductionRules_Ids <string[]> (Required: false)
- AttackSurfaceReductionRules_RuleSpecificExclusions <string[]> (Required: false)
- AttackSurfaceReductionRules_RuleSpecificExclusions_Id <string[]> (Required: false)
- BruteForceProtectionAggressiveness <Aggressiveness> (Required: false)
- BruteForceProtectionConfiguredState <NetworkBehaviorProtectionConfiguredState> (Required: false)
- BruteForceProtectionExclusions <string[]> (Required: false)
- BruteForceProtectionLocalNetworkBlocking <bool> (Required: false)
- BruteForceProtectionMaxBlockTime <uint32> (Required: false)
- BruteForceProtectionSkipLearningPeriod <bool> (Required: false)
- CheckForSignaturesBeforeRunningScan <bool> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CloudBlockLevel <CloudBlockLevelType> (Required: false)
- CloudExtendedTimeout <uint32> (Required: false)
- ControlledFolderAccessAllowedApplications <string[]> (Required: false)
- ControlledFolderAccessProtectedFolders <string[]> (Required: false)
- DefinitionUpdatesChannel <DefinitionUpdatesChannelType> (Required: false)
- DisableArchiveScanning <bool> (Required: false)
- DisableAutoExclusions <bool> (Required: false)
- DisableBehaviorMonitoring <bool> (Required: false)
- DisableBlockAtFirstSeen <bool> (Required: false)
- DisableCacheMaintenance <bool> (Required: false)
- DisableCatchupFullScan <bool> (Required: false)
- DisableCatchupQuickScan <bool> (Required: false)
- DisableCoreServiceECSIntegration <bool> (Required: false)
- DisableCoreServiceTelemetry <bool> (Required: false)
- DisableCpuThrottleOnIdleScans <bool> (Required: false)
- DisableDatagramProcessing <bool> (Required: false)
- DisableDnsOverTcpParsing <bool> (Required: false)
- DisableDnsParsing <bool> (Required: false)
- DisableEmailScanning <bool> (Required: false)
- DisableFtpParsing <bool> (Required: false)
- DisableGradualRelease <bool> (Required: false)
- DisableHttpParsing <bool> (Required: false)
- DisableIOAVProtection <bool> (Required: false)
- DisableInboundConnectionFiltering <bool> (Required: false)
- DisableIntrusionPreventionSystem <bool> (Required: false)
- DisableNetworkProtectionPerfTelemetry <bool> (Required: false)
- DisablePrivacyMode <bool> (Required: false)
- DisableQuicParsing <bool> (Required: false)
- DisableRdpParsing <bool> (Required: false)
- DisableRealtimeMonitoring <bool> (Required: false)
- DisableRemovableDriveScanning <bool> (Required: false)
- DisableRestorePoint <bool> (Required: false)
- DisableScanningMappedNetworkDrivesForFullScan <bool> (Required: false)
- DisableScanningNetworkFiles <bool> (Required: false)
- DisableScriptScanning <bool> (Required: false)
- DisableSmtpParsing <bool> (Required: false)
- DisableSshParsing <bool> (Required: false)
- DisableTDTFeature <bool> (Required: false)
- DisableTamperProtection <bool> (Required: false)
- DisableTlsParsing <bool> (Required: false)
- EnableControlledFolderAccess <ControlledFolderAccessType> (Required: false)
- EnableConvertWarnToBlock <bool> (Required: false)
- EnableDnsSinkhole <bool> (Required: false)
- EnableFileHashComputation <bool> (Required: false)
- EnableFullScanOnBatteryPower <bool> (Required: false)
- EnableLowCpuPriority <bool> (Required: false)
- EnableNetworkProtection <ASRRuleActionType> (Required: false)
- EnableUdpReceiveOffload <bool> (Required: false)
- EnableUdpSegmentationOffload <bool> (Required: false)
- EngineUpdatesChannel <UpdatesChannelType> (Required: false)
- ExclusionExtension <string[]> (Required: false)
- ExclusionIpAddress <string[]> (Required: false)
- ExclusionPath <string[]> (Required: false)
- ExclusionProcess <string[]> (Required: false)
- Force <switch> (Required: false)
- ForceUseProxyOnly <bool> (Required: false)
- HighThreatDefaultAction <ThreatAction> (Required: false)
- IntelTDTEnabled <bool> (Required: false)
- LowThreatDefaultAction <ThreatAction> (Required: false)
- MAPSReporting <MAPSReportingType> (Required: false)
- MeteredConnectionUpdates <bool> (Required: false)
- ModerateThreatDefaultAction <ThreatAction> (Required: false)
- NetworkProtectionReputationMode <uint32> (Required: false)
- OobeEnableRtpAndSigUpdate <bool> (Required: false)
- PUAProtection <PUAProtectionType> (Required: false)
- PerformanceModeStatus <PerformanceModeStatusType> (Required: false)
- PlatformUpdatesChannel <UpdatesChannelType> (Required: false)
- ProxyBypass <string[]> (Required: false)
- ProxyPacUrl <string> (Required: false)
- ProxyServer <string> (Required: false)
- QuarantinePurgeItemsAfterDelay <uint32> (Required: false)
- QuickScanIncludeExclusions <QuickScanIncludeExclusionsType> (Required: false)
- RandomizeScheduleTaskTimes <bool> (Required: false)
- RealTimeScanDirection <ScanDirection> (Required: false)
- RemediationScheduleDay <Day> (Required: false)
- RemediationScheduleTime <datetime> (Required: false)
- RemoteEncryptionProtectionAggressiveness <Aggressiveness> (Required: false)
- RemoteEncryptionProtectionConfiguredState <NetworkBehaviorProtectionConfiguredState> (Required: false)
- RemoteEncryptionProtectionExclusions <string[]> (Required: false)
- RemoteEncryptionProtectionMaxBlockTime <uint32> (Required: false)
- RemoveScanningThreadPoolCap <bool> (Required: false)
- ReportDynamicSignatureDroppedEvent <bool> (Required: false)
- ReportingAdditionalActionTimeOut <uint32> (Required: false)
- ReportingCriticalFailureTimeOut <uint32> (Required: false)
- ReportingNonCriticalTimeOut <uint32> (Required: false)
- ScanAvgCPULoadFactor <byte> (Required: false)
- ScanOnlyIfIdleEnabled <bool> (Required: false)
- ScanParameters <ScanType> (Required: false)
- ScanPurgeItemsAfterDelay <uint32> (Required: false)
- ScanScheduleDay <Day> (Required: false)
- ScanScheduleOffset <uint32> (Required: false)
- ScanScheduleQuickScanTime <datetime> (Required: false)
- ScanScheduleTime <datetime> (Required: false)
- SchedulerRandomizationTime <uint32> (Required: false)
- ServiceHealthReportInterval <uint32> (Required: false)
- SevereThreatDefaultAction <ThreatAction> (Required: false)
- SharedSignaturesPath <string> (Required: false)
- SharedSignaturesPathUpdateAtScheduledTimeOnly <bool> (Required: false)
- SignatureAuGracePeriod <uint32> (Required: false)
- SignatureBlobFileSharesSources <string> (Required: false)
- SignatureBlobUpdateInterval <uint32> (Required: false)
- SignatureDefinitionUpdateFileSharesSources <string> (Required: false)
- SignatureDisableUpdateOnStartupWithoutEngine <bool> (Required: false)
- SignatureFallbackOrder <string> (Required: false)
- SignatureFirstAuGracePeriod <uint32> (Required: false)
- SignatureScheduleDay <Day> (Required: false)
- SignatureScheduleTime <datetime> (Required: false)
- SignatureUpdateCatchupInterval <uint32> (Required: false)
- SignatureUpdateInterval <uint32> (Required: false)
- SubmitSamplesConsent <SubmitSamplesConsentType> (Required: false)
- ThreatIDDefaultAction_Actions <ThreatAction[]> (Required: false)
- ThreatIDDefaultAction_Ids <long[]> (Required: false)
- ThrottleForScheduledScanOnly <bool> (Required: false)
- ThrottleLimit <int> (Required: false)
- TrustLabelProtectionStatus <uint32> (Required: false)
- UILockdown <bool> (Required: false)
- UnknownThreatDefaultAction <ThreatAction> (Required: false)
```

### Set-NCSIPolicyConfiguration

```powershell
Set-NCSIPolicyConfiguration [[-CorporateDNSProbeHostAddress] <string>] [[-CorporateDNSProbeHostName] <string>] [[-CorporateSitePrefixList] <string[]>] [[-CorporateWebsiteProbeURL] <string>] [[-DomainLocationDeterminationURL] <string>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NCSIPolicyConfiguration [[-CorporateDNSProbeHostAddress] <string>] [[-CorporateDNSProbeHostName] <string>] [[-CorporateSitePrefixList] <string[]>] [[-CorporateWebsiteProbeURL] <string>] [[-DomainLocationDeterminationURL] <string>] -InputObject <CimInstance#MSFT_NCSIPolicyConfiguration[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- CorporateDNSProbeHostAddress <string> (Required: false)
- CorporateDNSProbeHostName <string> (Required: false)
- CorporateSitePrefixList <string[]> (Required: false)
- CorporateWebsiteProbeURL <string> (Required: false)
- DomainLocationDeterminationURL <string> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NCSIPolicyConfiguration[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-Net6to4Configuration

```powershell
Set-Net6to4Configuration [[-State] <State>] [[-AutoSharing] <State>] [[-RelayName] <string>] [[-RelayState] <State>] [[-ResolutionIntervalSeconds] <uint32>] [-IPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Net6to4Configuration [[-State] <State>] [[-AutoSharing] <State>] [[-RelayName] <string>] [[-RelayState] <State>] [[-ResolutionIntervalSeconds] <uint32>] -InputObject <CimInstance#MSFT_Net6to4Configuration[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AutoSharing <State> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- IPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- InputObject <CimInstance#MSFT_Net6to4Configuration[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- RelayName <string> (Required: false)
- RelayState <State> (Required: false)
- ResolutionIntervalSeconds <uint32> (Required: false)
- State <State> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapter

```powershell
Set-NetAdapter [-Name] <string[]> [-IncludeHidden] [-VlanID <uint16>] [-MacAddress <string>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapter -InterfaceDescription <string[]> [-IncludeHidden] [-VlanID <uint16>] [-MacAddress <string>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapter -InputObject <CimInstance#MSFT_NetAdapter[]> [-VlanID <uint16>] [-MacAddress <string>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapter[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- MacAddress <string> (Required: false)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- VlanID <uint16> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterAdvancedProperty

```powershell
Set-NetAdapterAdvancedProperty [[-Name] <string[]>] [-DisplayName <string[]>] [-RegistryKeyword <string[]>] [-IncludeHidden] [-AllProperties] [-DisplayValue <string>] [-RegistryValue <string[]>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterAdvancedProperty -InterfaceDescription <string[]> [-DisplayName <string[]>] [-RegistryKeyword <string[]>] [-IncludeHidden] [-AllProperties] [-DisplayValue <string>] [-RegistryValue <string[]>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterAdvancedProperty -InputObject <CimInstance#MSFT_NetAdapterAdvancedPropertySettingData[]> [-DisplayValue <string>] [-RegistryValue <string[]>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllProperties <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DisplayName <string[]> (Required: false)
- DisplayValue <string> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterAdvancedPropertySettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- RegistryKeyword <string[]> (Required: false)
- RegistryValue <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterBinding

```powershell
Set-NetAdapterBinding [-Name] <string[]> [-ComponentID <string[]>] [-DisplayName <string[]>] [-IncludeHidden] [-AllBindings] [-Enabled <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterBinding -InterfaceDescription <string[]> [-ComponentID <string[]>] [-DisplayName <string[]>] [-IncludeHidden] [-AllBindings] [-Enabled <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterBinding -InputObject <CimInstance#MSFT_NetAdapterBindingSettingData[]> [-Enabled <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllBindings <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComponentID <string[]> (Required: false)
- Confirm <switch> (Required: false)
- DisplayName <string[]> (Required: false)
- Enabled <bool> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterBindingSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterChecksumOffload

```powershell
Set-NetAdapterChecksumOffload [-Name] <string[]> [-IncludeHidden] [-IpIPv4Enabled <Direction>] [-TcpIPv4Enabled <Direction>] [-TcpIPv6Enabled <Direction>] [-UdpIPv4Enabled <Direction>] [-UdpIPv6Enabled <Direction>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterChecksumOffload -InterfaceDescription <string[]> [-IncludeHidden] [-IpIPv4Enabled <Direction>] [-TcpIPv4Enabled <Direction>] [-TcpIPv6Enabled <Direction>] [-UdpIPv4Enabled <Direction>] [-UdpIPv6Enabled <Direction>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterChecksumOffload -InputObject <CimInstance#MSFT_NetAdapterChecksumOffloadSettingData[]> [-IpIPv4Enabled <Direction>] [-TcpIPv4Enabled <Direction>] [-TcpIPv6Enabled <Direction>] [-UdpIPv4Enabled <Direction>] [-UdpIPv6Enabled <Direction>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterChecksumOffloadSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- IpIPv4Enabled <Direction> (Required: false)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- TcpIPv4Enabled <Direction> (Required: false)
- TcpIPv6Enabled <Direction> (Required: false)
- ThrottleLimit <int> (Required: false)
- UdpIPv4Enabled <Direction> (Required: false)
- UdpIPv6Enabled <Direction> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterDataPathConfiguration

```powershell
Set-NetAdapterDataPathConfiguration [-Name] <string[]> [-IncludeHidden] [-Profile <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterDataPathConfiguration -InterfaceDescription <string[]> [-IncludeHidden] [-Profile <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterDataPathConfiguration -InputObject <CimInstance#MSFT_NetAdapterDataPathConfigurationSettingData[]> [-Profile <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterDataPathConfigurationSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Profile <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterEncapsulatedPacketTaskOffload

```powershell
Set-NetAdapterEncapsulatedPacketTaskOffload [-Name] <string[]> [-IncludeHidden] [-NvgreEncapsulatedPacketTaskOffloadEnabled <bool>] [-VxlanEncapsulatedPacketTaskOffloadEnabled <bool>] [-VxlanUDPPortNumber <uint16>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterEncapsulatedPacketTaskOffload -InterfaceDescription <string[]> [-IncludeHidden] [-NvgreEncapsulatedPacketTaskOffloadEnabled <bool>] [-VxlanEncapsulatedPacketTaskOffloadEnabled <bool>] [-VxlanUDPPortNumber <uint16>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterEncapsulatedPacketTaskOffload -InputObject <CimInstance#MSFT_NetAdapterEncapsulatedPacketTaskOffloadSettingData[]> [-NvgreEncapsulatedPacketTaskOffloadEnabled <bool>] [-VxlanEncapsulatedPacketTaskOffloadEnabled <bool>] [-VxlanUDPPortNumber <uint16>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterEncapsulatedPacketTaskOffloadSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- NvgreEncapsulatedPacketTaskOffloadEnabled <bool> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- VxlanEncapsulatedPacketTaskOffloadEnabled <bool> (Required: false)
- VxlanUDPPortNumber <uint16> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterIPsecOffload

```powershell
Set-NetAdapterIPsecOffload [-Name] <string[]> [-IncludeHidden] [-Enabled <bool>] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterIPsecOffload -InterfaceDescription <string[]> [-IncludeHidden] [-Enabled <bool>] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterIPsecOffload -InputObject <CimInstance#MSFT_NetAdapterIPsecOffloadV2SettingData[]> [-Enabled <bool>] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Enabled <bool> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterIPsecOffloadV2SettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterLso

```powershell
Set-NetAdapterLso [-Name] <string[]> [-IncludeHidden] [-V1IPv4Enabled <bool>] [-IPv4Enabled <bool>] [-IPv6Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterLso -InterfaceDescription <string[]> [-IncludeHidden] [-V1IPv4Enabled <bool>] [-IPv4Enabled <bool>] [-IPv6Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterLso -InputObject <CimInstance#MSFT_NetAdapterLsoSettingData[]> [-V1IPv4Enabled <bool>] [-IPv4Enabled <bool>] [-IPv6Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPv4Enabled <bool> (Required: false)
- IPv6Enabled <bool> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterLsoSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- V1IPv4Enabled <bool> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterPacketDirect

```powershell
Set-NetAdapterPacketDirect [-Name] <string[]> [-IncludeHidden] [-Enabled <bool>] [-DomainId <uint32>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterPacketDirect -InterfaceDescription <string[]> [-IncludeHidden] [-Enabled <bool>] [-DomainId <uint32>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterPacketDirect -InputObject <CimInstance#MSFT_NetAdapterPacketDirectSettingData[]> [-Enabled <bool>] [-DomainId <uint32>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DomainId <uint32> (Required: false)
- Enabled <bool> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterPacketDirectSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterPowerManagement

```powershell
Set-NetAdapterPowerManagement [-Name] <string[]> [-IncludeHidden] [-ArpOffload <Setting>] [-D0PacketCoalescing <Setting>] [-DeviceSleepOnDisconnect <Setting>] [-NSOffload <Setting>] [-RsnRekeyOffload <Setting>] [-SelectiveSuspend <Setting>] [-WakeOnMagicPacket <Setting>] [-WakeOnPattern <Setting>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterPowerManagement -InterfaceDescription <string[]> [-IncludeHidden] [-ArpOffload <Setting>] [-D0PacketCoalescing <Setting>] [-DeviceSleepOnDisconnect <Setting>] [-NSOffload <Setting>] [-RsnRekeyOffload <Setting>] [-SelectiveSuspend <Setting>] [-WakeOnMagicPacket <Setting>] [-WakeOnPattern <Setting>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterPowerManagement -InputObject <CimInstance#MSFT_NetAdapterPowerManagementSettingData[]> [-ArpOffload <Setting>] [-D0PacketCoalescing <Setting>] [-DeviceSleepOnDisconnect <Setting>] [-NSOffload <Setting>] [-RsnRekeyOffload <Setting>] [-SelectiveSuspend <Setting>] [-WakeOnMagicPacket <Setting>] [-WakeOnPattern <Setting>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ArpOffload <Setting> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- D0PacketCoalescing <Setting> (Required: false)
- DeviceSleepOnDisconnect <Setting> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterPowerManagementSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- NSOffload <Setting> (Required: false)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- RsnRekeyOffload <Setting> (Required: false)
- SelectiveSuspend <Setting> (Required: false)
- ThrottleLimit <int> (Required: false)
- WakeOnMagicPacket <Setting> (Required: false)
- WakeOnPattern <Setting> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterQos

```powershell
Set-NetAdapterQos [-Name] <string[]> [-IncludeHidden] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterQos -InterfaceDescription <string[]> [-IncludeHidden] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterQos -InputObject <CimInstance#MSFT_NetAdapterQosSettingData[]> [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Enabled <bool> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterQosSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterRdma

```powershell
Set-NetAdapterRdma [[-Name] <string[]>] [-IncludeHidden] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterRdma -InterfaceDescription <string[]> [-IncludeHidden] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterRdma -InputObject <CimInstance#MSFT_NetAdapterRdmaSettingData[]> [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Enabled <bool> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterRdmaSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterRsc

```powershell
Set-NetAdapterRsc [-Name] <string[]> [-IncludeHidden] [-IPv4Enabled <bool>] [-IPv6Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterRsc -InterfaceDescription <string[]> [-IncludeHidden] [-IPv4Enabled <bool>] [-IPv6Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterRsc -InputObject <CimInstance#MSFT_NetAdapterRscSettingData[]> [-IPv4Enabled <bool>] [-IPv6Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPv4Enabled <bool> (Required: false)
- IPv6Enabled <bool> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterRscSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterRss

```powershell
Set-NetAdapterRss [-Name] <string[]> [-IncludeHidden] [-NumberOfReceiveQueues <uint32>] [-Profile <Profile>] [-BaseProcessorGroup <uint16>] [-BaseProcessorNumber <byte>] [-MaxProcessorGroup <uint16>] [-MaxProcessorNumber <byte>] [-MaxProcessors <uint32>] [-NumaNode <uint16>] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterRss -InterfaceDescription <string[]> [-IncludeHidden] [-NumberOfReceiveQueues <uint32>] [-Profile <Profile>] [-BaseProcessorGroup <uint16>] [-BaseProcessorNumber <byte>] [-MaxProcessorGroup <uint16>] [-MaxProcessorNumber <byte>] [-MaxProcessors <uint32>] [-NumaNode <uint16>] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterRss -InputObject <CimInstance#MSFT_NetAdapterRssSettingData[]> [-NumberOfReceiveQueues <uint32>] [-Profile <Profile>] [-BaseProcessorGroup <uint16>] [-BaseProcessorNumber <byte>] [-MaxProcessorGroup <uint16>] [-MaxProcessorNumber <byte>] [-MaxProcessors <uint32>] [-NumaNode <uint16>] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BaseProcessorGroup <uint16> (Required: false)
- BaseProcessorNumber <byte> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Enabled <bool> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterRssSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- MaxProcessorGroup <uint16> (Required: false)
- MaxProcessorNumber <byte> (Required: false)
- MaxProcessors <uint32> (Required: false)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- NumaNode <uint16> (Required: false)
- NumberOfReceiveQueues <uint32> (Required: false)
- PassThru <switch> (Required: false)
- Profile <Profile> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterSriov

```powershell
Set-NetAdapterSriov [-Name] <string[]> [-IncludeHidden] [-NumVFs <uint32>] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterSriov -InterfaceDescription <string[]> [-IncludeHidden] [-NumVFs <uint32>] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterSriov -InputObject <CimInstance#MSFT_NetAdapterSriovSettingData[]> [-NumVFs <uint32>] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Enabled <bool> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterSriovSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- NumVFs <uint32> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterUro

```powershell
Set-NetAdapterUro [-Name] <string[]> [-IncludeHidden] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterUro -InterfaceDescription <string[]> [-IncludeHidden] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterUro -InputObject <CimInstance#MSFT_NetAdapterUroSettingData[]> [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Enabled <bool> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterUroSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterUso

```powershell
Set-NetAdapterUso [-Name] <string[]> [-IncludeHidden] [-IPv4Enabled <bool>] [-IPv6Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterUso -InterfaceDescription <string[]> [-IncludeHidden] [-IPv4Enabled <bool>] [-IPv6Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterUso -InputObject <CimInstance#MSFT_NetAdapterUsoSettingData[]> [-IPv4Enabled <bool>] [-IPv6Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPv4Enabled <bool> (Required: false)
- IPv6Enabled <bool> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterUsoSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetAdapterVmq

```powershell
Set-NetAdapterVmq [-Name] <string[]> [-IncludeHidden] [-BaseProcessorGroup <uint16>] [-BaseProcessorNumber <byte>] [-MaxProcessors <uint32>] [-MaxProcessorNumber <byte>] [-NumaNode <uint16>] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterVmq -InterfaceDescription <string[]> [-IncludeHidden] [-BaseProcessorGroup <uint16>] [-BaseProcessorNumber <byte>] [-MaxProcessors <uint32>] [-MaxProcessorNumber <byte>] [-NumaNode <uint16>] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetAdapterVmq -InputObject <CimInstance#MSFT_NetAdapterVmqSettingData[]> [-BaseProcessorGroup <uint16>] [-BaseProcessorNumber <byte>] [-MaxProcessors <uint32>] [-MaxProcessorNumber <byte>] [-NumaNode <uint16>] [-Enabled <bool>] [-NoRestart] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BaseProcessorGroup <uint16> (Required: false)
- BaseProcessorNumber <byte> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Enabled <bool> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterVmqSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- MaxProcessorNumber <byte> (Required: false)
- MaxProcessors <uint32> (Required: false)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- NumaNode <uint16> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetConnectionProfile

```powershell
Set-NetConnectionProfile [-Name <string[]>] [-InterfaceAlias <string[]>] [-InterfaceIndex <uint32[]>] [-DomainAuthenticationKind <DomainAuthenticationKind[]>] [-IPv4Connectivity <IPv4Connectivity[]>] [-IPv6Connectivity <IPv6Connectivity[]>] [-NetworkCategory <NetworkCategory>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetConnectionProfile -InputObject <CimInstance#MSFT_NetConnectionProfile[]> [-NetworkCategory <NetworkCategory>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DomainAuthenticationKind <DomainAuthenticationKind[]> (Required: false)
- IPv4Connectivity <IPv4Connectivity[]> (Required: false)
- IPv6Connectivity <IPv6Connectivity[]> (Required: false)
- InputObject <CimInstance#MSFT_NetConnectionProfile[]> (Required: true)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- Name <string[]> (Required: false)
- NetworkCategory <NetworkCategory> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetDnsTransitionConfiguration

```powershell
Set-NetDnsTransitionConfiguration [-Adapter <CimInstance#MSFT_NetAdapter>] [-State <State>] [-OnlySendAQuery <bool>] [-LatencyMilliseconds <uint32>] [-AlwaysSynthesize <bool>] [-AcceptInterface <string[]>] [-SendInterface <string[]>] [-ExclusionList <string[]>] [-PrefixMapping <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetDnsTransitionConfiguration -InputObject <CimInstance#MSFT_NetDnsTransitionConfiguration[]> [-State <State>] [-OnlySendAQuery <bool>] [-LatencyMilliseconds <uint32>] [-AlwaysSynthesize <bool>] [-AcceptInterface <string[]>] [-SendInterface <string[]>] [-ExclusionList <string[]>] [-PrefixMapping <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AcceptInterface <string[]> (Required: false)
- Adapter <CimInstance#MSFT_NetAdapter> (Required: false)
- AlwaysSynthesize <bool> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ExclusionList <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetDnsTransitionConfiguration[]> (Required: true)
- LatencyMilliseconds <uint32> (Required: false)
- OnlySendAQuery <bool> (Required: false)
- PassThru <switch> (Required: false)
- PrefixMapping <string[]> (Required: false)
- SendInterface <string[]> (Required: false)
- State <State> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetEventPacketCaptureProvider

```powershell
Set-NetEventPacketCaptureProvider [[-SessionName] <string[]>] [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-CaptureType] <CaptureType>] [[-MultiLayer] <bool>] [[-LinkLayerAddress] <string[]>] [[-EtherType] <uint16[]>] [[-IpAddresses] <string[]>] [[-IpProtocols] <byte[]>] [[-TruncationLength] <uint16>] [[-VmCaptureDirection] <VmCaptureDirection>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventPacketCaptureProvider [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-CaptureType] <CaptureType>] [[-MultiLayer] <bool>] [[-LinkLayerAddress] <string[]>] [[-EtherType] <uint16[]>] [[-IpAddresses] <string[]>] [[-IpProtocols] <byte[]>] [[-TruncationLength] <uint16>] [[-VmCaptureDirection] <VmCaptureDirection>] [-AssociatedEventSession <CimInstance#MSFT_NetEventSession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventPacketCaptureProvider [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-CaptureType] <CaptureType>] [[-MultiLayer] <bool>] [[-LinkLayerAddress] <string[]>] [[-EtherType] <uint16[]>] [[-IpAddresses] <string[]>] [[-IpProtocols] <byte[]>] [[-TruncationLength] <uint16>] [[-VmCaptureDirection] <VmCaptureDirection>] [-AssociatedCaptureTarget <CimInstance#MSFT_NetEventPacketCaptureTarget>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventPacketCaptureProvider [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-CaptureType] <CaptureType>] [[-MultiLayer] <bool>] [[-LinkLayerAddress] <string[]>] [[-EtherType] <uint16[]>] [[-IpAddresses] <string[]>] [[-IpProtocols] <byte[]>] [[-TruncationLength] <uint16>] [[-VmCaptureDirection] <VmCaptureDirection>] -InputObject <CimInstance#MSFT_NetEventPacketCaptureProvider[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedCaptureTarget <CimInstance#MSFT_NetEventPacketCaptureTarget> (Required: false)
- AssociatedEventSession <CimInstance#MSFT_NetEventSession> (Required: false)
- CaptureType <CaptureType> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EtherType <uint16[]> (Required: false)
- InputObject <CimInstance#MSFT_NetEventPacketCaptureProvider[]> (Required: true)
- IpAddresses <string[]> (Required: false)
- IpProtocols <byte[]> (Required: false)
- Level <byte> (Required: false)
- LinkLayerAddress <string[]> (Required: false)
- MatchAllKeyword <uint64> (Required: false)
- MatchAnyKeyword <uint64> (Required: false)
- MultiLayer <bool> (Required: false)
- PassThru <switch> (Required: false)
- SessionName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TruncationLength <uint16> (Required: false)
- VmCaptureDirection <VmCaptureDirection> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetEventProvider

```powershell
Set-NetEventProvider [[-Name] <string[]>] [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventProvider [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [-AssociatedEventSession <CimInstance#MSFT_NetEventSession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventProvider [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [-AssociatedCaptureTarget <CimInstance#MSFT_NetEventPacketCaptureTarget>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventProvider [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] -InputObject <CimInstance#MSFT_NetEventProvider[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedCaptureTarget <CimInstance#MSFT_NetEventPacketCaptureTarget> (Required: false)
- AssociatedEventSession <CimInstance#MSFT_NetEventSession> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventProvider[]> (Required: true)
- Level <byte> (Required: false)
- MatchAllKeyword <uint64> (Required: false)
- MatchAnyKeyword <uint64> (Required: false)
- Name <string[]> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetEventSession

```powershell
Set-NetEventSession [[-Name] <string[]>] [-CaptureMode <CaptureModes>] [-LocalFilePath <string>] [-MaxFileSize <uint32>] [-MaxNumberOfBuffers <byte>] [-TraceBufferSize <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventSession [-AssociatedEventProvider <CimInstance#MSFT_NetEventProvider>] [-CaptureMode <CaptureModes>] [-LocalFilePath <string>] [-MaxFileSize <uint32>] [-MaxNumberOfBuffers <byte>] [-TraceBufferSize <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventSession -InputObject <CimInstance#MSFT_NetEventSession[]> [-CaptureMode <CaptureModes>] [-LocalFilePath <string>] [-MaxFileSize <uint32>] [-MaxNumberOfBuffers <byte>] [-TraceBufferSize <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedEventProvider <CimInstance#MSFT_NetEventProvider> (Required: false)
- CaptureMode <CaptureModes> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventSession[]> (Required: true)
- LocalFilePath <string> (Required: false)
- MaxFileSize <uint32> (Required: false)
- MaxNumberOfBuffers <byte> (Required: false)
- Name <string[]> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- TraceBufferSize <uint32> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetEventVFPProvider

```powershell
Set-NetEventVFPProvider [[-SessionName] <string[]>] [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-DestinationMACAddresses] <string[]>] [[-SourceMACAddresses] <string[]>] [[-VLANIds] <uint16[]>] [[-TenantIds] <uint32[]>] [[-GREKeys] <uint32[]>] [[-SourceIPAddresses] <string[]>] [[-DestinationIPAddresses] <string[]>] [[-IPProtocols] <byte[]>] [[-TCPPorts] <uint16[]>] [[-UDPPorts] <uint16[]>] [[-VFPFlowDirection] <VFPFlowDirection>] [[-SwitchName] <string>] [[-PortIds] <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventVFPProvider [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-DestinationMACAddresses] <string[]>] [[-SourceMACAddresses] <string[]>] [[-VLANIds] <uint16[]>] [[-TenantIds] <uint32[]>] [[-GREKeys] <uint32[]>] [[-SourceIPAddresses] <string[]>] [[-DestinationIPAddresses] <string[]>] [[-IPProtocols] <byte[]>] [[-TCPPorts] <uint16[]>] [[-UDPPorts] <uint16[]>] [[-VFPFlowDirection] <VFPFlowDirection>] [[-SwitchName] <string>] [[-PortIds] <uint32[]>] [-AssociatedEventSession <CimInstance#MSFT_NetEventSession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventVFPProvider [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-DestinationMACAddresses] <string[]>] [[-SourceMACAddresses] <string[]>] [[-VLANIds] <uint16[]>] [[-TenantIds] <uint32[]>] [[-GREKeys] <uint32[]>] [[-SourceIPAddresses] <string[]>] [[-DestinationIPAddresses] <string[]>] [[-IPProtocols] <byte[]>] [[-TCPPorts] <uint16[]>] [[-UDPPorts] <uint16[]>] [[-VFPFlowDirection] <VFPFlowDirection>] [[-SwitchName] <string>] [[-PortIds] <uint32[]>] -InputObject <CimInstance#MSFT_NetEventVFPProvider[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedEventSession <CimInstance#MSFT_NetEventSession> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DestinationIPAddresses <string[]> (Required: false)
- DestinationMACAddresses <string[]> (Required: false)
- GREKeys <uint32[]> (Required: false)
- IPProtocols <byte[]> (Required: false)
- InputObject <CimInstance#MSFT_NetEventVFPProvider[]> (Required: true)
- Level <byte> (Required: false)
- MatchAllKeyword <uint64> (Required: false)
- MatchAnyKeyword <uint64> (Required: false)
- PassThru <switch> (Required: false)
- PortIds <uint32[]> (Required: false)
- SessionName <string[]> (Required: false)
- SourceIPAddresses <string[]> (Required: false)
- SourceMACAddresses <string[]> (Required: false)
- SwitchName <string> (Required: false)
- TCPPorts <uint16[]> (Required: false)
- TenantIds <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UDPPorts <uint16[]> (Required: false)
- VFPFlowDirection <VFPFlowDirection> (Required: false)
- VLANIds <uint16[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetEventVmSwitchProvider

```powershell
Set-NetEventVmSwitchProvider [[-SessionName] <string[]>] [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-SwitchName] <string>] [[-PortIds] <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventVmSwitchProvider [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-SwitchName] <string>] [[-PortIds] <uint32[]>] [-AssociatedEventSession <CimInstance#MSFT_NetEventSession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventVmSwitchProvider [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-SwitchName] <string>] [[-PortIds] <uint32[]>] -InputObject <CimInstance#MSFT_NetEventVmSwitchProvider[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedEventSession <CimInstance#MSFT_NetEventSession> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventVmSwitchProvider[]> (Required: true)
- Level <byte> (Required: false)
- MatchAllKeyword <uint64> (Required: false)
- MatchAnyKeyword <uint64> (Required: false)
- PassThru <switch> (Required: false)
- PortIds <uint32[]> (Required: false)
- SessionName <string[]> (Required: false)
- SwitchName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetEventWFPCaptureProvider

```powershell
Set-NetEventWFPCaptureProvider [[-SessionName] <string[]>] [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-CaptureLayerSet] <WFPCaptureSet>] [[-IPAddresses] <string[]>] [[-TCPPorts] <uint16[]>] [[-UDPPorts] <uint16[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventWFPCaptureProvider [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-CaptureLayerSet] <WFPCaptureSet>] [[-IPAddresses] <string[]>] [[-TCPPorts] <uint16[]>] [[-UDPPorts] <uint16[]>] [-AssociatedEventSession <CimInstance#MSFT_NetEventSession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetEventWFPCaptureProvider [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-CaptureLayerSet] <WFPCaptureSet>] [[-IPAddresses] <string[]>] [[-TCPPorts] <uint16[]>] [[-UDPPorts] <uint16[]>] -InputObject <CimInstance#MSFT_NetEventWFPCaptureProvider[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedEventSession <CimInstance#MSFT_NetEventSession> (Required: false)
- CaptureLayerSet <WFPCaptureSet> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPAddresses <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetEventWFPCaptureProvider[]> (Required: true)
- Level <byte> (Required: false)
- MatchAllKeyword <uint64> (Required: false)
- MatchAnyKeyword <uint64> (Required: false)
- PassThru <switch> (Required: false)
- SessionName <string[]> (Required: false)
- TCPPorts <uint16[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UDPPorts <uint16[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallAddressFilter

```powershell
Set-NetFirewallAddressFilter [-PolicyStore <string>] [-GPOSession <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallAddressFilter -InputObject <CimInstance#MSFT_NetAddressFilter[]> [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NetAddressFilter[]> (Required: true)
- LocalAddress <string[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- RemoteAddress <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallApplicationFilter

```powershell
Set-NetFirewallApplicationFilter [-PolicyStore <string>] [-GPOSession <string>] [-Program <string>] [-Package <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallApplicationFilter -InputObject <CimInstance#MSFT_NetApplicationFilter[]> [-Program <string>] [-Package <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NetApplicationFilter[]> (Required: true)
- Package <string> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Program <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallHyperVProfile

```powershell
Set-NetFirewallHyperVProfile [-Name] <string[]> [-PolicyStore <string>] [-Profile <Profile>] [-Enabled <GpoBoolean>] [-DefaultInboundAction <Action>] [-DefaultOutboundAction <Action>] [-AllowLocalFirewallRules <GpoBoolean>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallHyperVProfile [-All] [-PolicyStore <string>] [-Profile <Profile>] [-Enabled <GpoBoolean>] [-DefaultInboundAction <Action>] [-DefaultOutboundAction <Action>] [-AllowLocalFirewallRules <GpoBoolean>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallHyperVProfile -InputObject <CimInstance#MSFT_NetFirewallHyperVProfile[]> [-Profile <Profile>] [-Enabled <GpoBoolean>] [-DefaultInboundAction <Action>] [-DefaultOutboundAction <Action>] [-AllowLocalFirewallRules <GpoBoolean>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AllowLocalFirewallRules <GpoBoolean> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DefaultInboundAction <Action> (Required: false)
- DefaultOutboundAction <Action> (Required: false)
- Enabled <GpoBoolean> (Required: false)
- InputObject <CimInstance#MSFT_NetFirewallHyperVProfile[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <Profile> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallHyperVRule

```powershell
Set-NetFirewallHyperVRule [-Name] <string[]> [-PolicyStore <string>] [-NewDisplayName <string>] [-RulePriority <uint16>] [-Direction <Direction>] [-VMCreatorId <string>] [-Protocol <string>] [-LocalAddresses <string[]>] [-LocalPorts <string[]>] [-RemoteAddresses <string[]>] [-RemotePorts <string[]>] [-Action <Action>] [-Enabled <Enabled>] [-Profiles <Profile>] [-PortStatuses <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallHyperVRule -DisplayName <string[]> [-PolicyStore <string>] [-NewDisplayName <string>] [-RulePriority <uint16>] [-Direction <Direction>] [-VMCreatorId <string>] [-Protocol <string>] [-LocalAddresses <string[]>] [-LocalPorts <string[]>] [-RemoteAddresses <string[]>] [-RemotePorts <string[]>] [-Action <Action>] [-Enabled <Enabled>] [-Profiles <Profile>] [-PortStatuses <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallHyperVRule -InputObject <CimInstance#MSFT_NetFirewallHyperVRule[]> [-NewDisplayName <string>] [-RulePriority <uint16>] [-Direction <Direction>] [-VMCreatorId <string>] [-Protocol <string>] [-LocalAddresses <string[]>] [-LocalPorts <string[]>] [-RemoteAddresses <string[]>] [-RemotePorts <string[]>] [-Action <Action>] [-Enabled <Enabled>] [-Profiles <Profile>] [-PortStatuses <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Action <Action> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Direction <Direction> (Required: false)
- DisplayName <string[]> (Required: true)
- Enabled <Enabled> (Required: false)
- InputObject <CimInstance#MSFT_NetFirewallHyperVRule[]> (Required: true)
- LocalAddresses <string[]> (Required: false)
- LocalPorts <string[]> (Required: false)
- Name <string[]> (Required: true)
- NewDisplayName <string> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PortStatuses <ciminstance[]> (Required: false)
- Profiles <Profile> (Required: false)
- Protocol <string> (Required: false)
- RemoteAddresses <string[]> (Required: false)
- RemotePorts <string[]> (Required: false)
- RulePriority <uint16> (Required: false)
- ThrottleLimit <int> (Required: false)
- VMCreatorId <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallHyperVVMSetting

```powershell
Set-NetFirewallHyperVVMSetting [-Name] <string[]> [-PolicyStore <string>] [-Enabled <GpoBoolean>] [-DefaultInboundAction <Action>] [-DefaultOutboundAction <Action>] [-LoopbackEnabled <GpoBoolean>] [-AllowHostPolicyMerge <GpoBoolean>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallHyperVVMSetting -InputObject <CimInstance#MSFT_NetFirewallHyperVVMSetting[]> [-Enabled <GpoBoolean>] [-DefaultInboundAction <Action>] [-DefaultOutboundAction <Action>] [-LoopbackEnabled <GpoBoolean>] [-AllowHostPolicyMerge <GpoBoolean>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowHostPolicyMerge <GpoBoolean> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DefaultInboundAction <Action> (Required: false)
- DefaultOutboundAction <Action> (Required: false)
- Enabled <GpoBoolean> (Required: false)
- InputObject <CimInstance#MSFT_NetFirewallHyperVVMSetting[]> (Required: true)
- LoopbackEnabled <GpoBoolean> (Required: false)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallInterfaceFilter

```powershell
Set-NetFirewallInterfaceFilter [-PolicyStore <string>] [-GPOSession <string>] [-InterfaceAlias <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallInterfaceFilter -InputObject <CimInstance#MSFT_NetInterfaceFilter[]> [-InterfaceAlias <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NetInterfaceFilter[]> (Required: true)
- InterfaceAlias <string[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallInterfaceTypeFilter

```powershell
Set-NetFirewallInterfaceTypeFilter [-PolicyStore <string>] [-GPOSession <string>] [-InterfaceType <InterfaceType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallInterfaceTypeFilter -InputObject <CimInstance#MSFT_NetInterfaceTypeFilter[]> [-InterfaceType <InterfaceType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NetInterfaceTypeFilter[]> (Required: true)
- InterfaceType <InterfaceType> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallPortFilter

```powershell
Set-NetFirewallPortFilter [-PolicyStore <string>] [-GPOSession <string>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-IcmpType <string[]>] [-DynamicTarget <DynamicTransport>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallPortFilter -InputObject <CimInstance#MSFT_NetProtocolPortFilter[]> [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-IcmpType <string[]>] [-DynamicTarget <DynamicTransport>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DynamicTarget <DynamicTransport> (Required: false)
- GPOSession <string> (Required: false)
- IcmpType <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetProtocolPortFilter[]> (Required: true)
- LocalPort <string[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Protocol <string> (Required: false)
- RemotePort <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallProfile

```powershell
Set-NetFirewallProfile [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-Enabled <GpoBoolean>] [-DefaultInboundAction <Action>] [-DefaultOutboundAction <Action>] [-AllowInboundRules <GpoBoolean>] [-AllowLocalFirewallRules <GpoBoolean>] [-AllowLocalIPsecRules <GpoBoolean>] [-AllowUserApps <GpoBoolean>] [-AllowUserPorts <GpoBoolean>] [-AllowUnicastResponseToMulticast <GpoBoolean>] [-NotifyOnListen <GpoBoolean>] [-EnableStealthModeForIPsec <GpoBoolean>] [-LogFileName <string>] [-LogMaxSizeKilobytes <uint64>] [-LogAllowed <GpoBoolean>] [-LogBlocked <GpoBoolean>] [-LogIgnored <GpoBoolean>] [-DisabledInterfaceAliases <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallProfile [-All] [-PolicyStore <string>] [-GPOSession <string>] [-Enabled <GpoBoolean>] [-DefaultInboundAction <Action>] [-DefaultOutboundAction <Action>] [-AllowInboundRules <GpoBoolean>] [-AllowLocalFirewallRules <GpoBoolean>] [-AllowLocalIPsecRules <GpoBoolean>] [-AllowUserApps <GpoBoolean>] [-AllowUserPorts <GpoBoolean>] [-AllowUnicastResponseToMulticast <GpoBoolean>] [-NotifyOnListen <GpoBoolean>] [-EnableStealthModeForIPsec <GpoBoolean>] [-LogFileName <string>] [-LogMaxSizeKilobytes <uint64>] [-LogAllowed <GpoBoolean>] [-LogBlocked <GpoBoolean>] [-LogIgnored <GpoBoolean>] [-DisabledInterfaceAliases <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallProfile -InputObject <CimInstance#MSFT_NetFirewallProfile[]> [-Enabled <GpoBoolean>] [-DefaultInboundAction <Action>] [-DefaultOutboundAction <Action>] [-AllowInboundRules <GpoBoolean>] [-AllowLocalFirewallRules <GpoBoolean>] [-AllowLocalIPsecRules <GpoBoolean>] [-AllowUserApps <GpoBoolean>] [-AllowUserPorts <GpoBoolean>] [-AllowUnicastResponseToMulticast <GpoBoolean>] [-NotifyOnListen <GpoBoolean>] [-EnableStealthModeForIPsec <GpoBoolean>] [-LogFileName <string>] [-LogMaxSizeKilobytes <uint64>] [-LogAllowed <GpoBoolean>] [-LogBlocked <GpoBoolean>] [-LogIgnored <GpoBoolean>] [-DisabledInterfaceAliases <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AllowInboundRules <GpoBoolean> (Required: false)
- AllowLocalFirewallRules <GpoBoolean> (Required: false)
- AllowLocalIPsecRules <GpoBoolean> (Required: false)
- AllowUnicastResponseToMulticast <GpoBoolean> (Required: false)
- AllowUserApps <GpoBoolean> (Required: false)
- AllowUserPorts <GpoBoolean> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DefaultInboundAction <Action> (Required: false)
- DefaultOutboundAction <Action> (Required: false)
- DisabledInterfaceAliases <string[]> (Required: false)
- EnableStealthModeForIPsec <GpoBoolean> (Required: false)
- Enabled <GpoBoolean> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NetFirewallProfile[]> (Required: true)
- LogAllowed <GpoBoolean> (Required: false)
- LogBlocked <GpoBoolean> (Required: false)
- LogFileName <string> (Required: false)
- LogIgnored <GpoBoolean> (Required: false)
- LogMaxSizeKilobytes <uint64> (Required: false)
- Name <string[]> (Required: true)
- NotifyOnListen <GpoBoolean> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallRule

```powershell
Set-NetFirewallRule [-Name] <string[]> [-PolicyStore <string>] [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-Direction <Direction>] [-Action <Action>] [-EdgeTraversalPolicy <EdgeTraversal>] [-LooseSourceMapping <bool>] [-LocalOnlyMapping <bool>] [-Owner <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-IcmpType <string[]>] [-DynamicTarget <DynamicTransport>] [-Program <string>] [-Package <string>] [-Service <string>] [-InterfaceAlias <WildcardPattern[]>] [-InterfaceType <InterfaceType>] [-LocalUser <string>] [-RemoteUser <string>] [-RemoteMachine <string>] [-Authentication <Authentication>] [-Encryption <Encryption>] [-OverrideBlockRules <bool>] [-RemoteDynamicKeywordAddresses <string[]>] [-PolicyAppId <string>] [-PackageFamilyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallRule -DisplayName <string[]> [-PolicyStore <string>] [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-Direction <Direction>] [-Action <Action>] [-EdgeTraversalPolicy <EdgeTraversal>] [-LooseSourceMapping <bool>] [-LocalOnlyMapping <bool>] [-Owner <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-IcmpType <string[]>] [-DynamicTarget <DynamicTransport>] [-Program <string>] [-Package <string>] [-Service <string>] [-InterfaceAlias <WildcardPattern[]>] [-InterfaceType <InterfaceType>] [-LocalUser <string>] [-RemoteUser <string>] [-RemoteMachine <string>] [-Authentication <Authentication>] [-Encryption <Encryption>] [-OverrideBlockRules <bool>] [-RemoteDynamicKeywordAddresses <string[]>] [-PolicyAppId <string>] [-PackageFamilyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallRule -DisplayGroup <string[]> [-PolicyStore <string>] [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-Direction <Direction>] [-Action <Action>] [-EdgeTraversalPolicy <EdgeTraversal>] [-LooseSourceMapping <bool>] [-LocalOnlyMapping <bool>] [-Owner <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-IcmpType <string[]>] [-DynamicTarget <DynamicTransport>] [-Program <string>] [-Package <string>] [-Service <string>] [-InterfaceAlias <WildcardPattern[]>] [-InterfaceType <InterfaceType>] [-LocalUser <string>] [-RemoteUser <string>] [-RemoteMachine <string>] [-Authentication <Authentication>] [-Encryption <Encryption>] [-OverrideBlockRules <bool>] [-RemoteDynamicKeywordAddresses <string[]>] [-PolicyAppId <string>] [-PackageFamilyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallRule -Group <string[]> [-PolicyStore <string>] [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-Direction <Direction>] [-Action <Action>] [-EdgeTraversalPolicy <EdgeTraversal>] [-LooseSourceMapping <bool>] [-LocalOnlyMapping <bool>] [-Owner <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-IcmpType <string[]>] [-DynamicTarget <DynamicTransport>] [-Program <string>] [-Package <string>] [-Service <string>] [-InterfaceAlias <WildcardPattern[]>] [-InterfaceType <InterfaceType>] [-LocalUser <string>] [-RemoteUser <string>] [-RemoteMachine <string>] [-Authentication <Authentication>] [-Encryption <Encryption>] [-OverrideBlockRules <bool>] [-RemoteDynamicKeywordAddresses <string[]>] [-PolicyAppId <string>] [-PackageFamilyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallRule -InputObject <CimInstance#MSFT_NetFirewallRule[]> [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-Direction <Direction>] [-Action <Action>] [-EdgeTraversalPolicy <EdgeTraversal>] [-LooseSourceMapping <bool>] [-LocalOnlyMapping <bool>] [-Owner <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-IcmpType <string[]>] [-DynamicTarget <DynamicTransport>] [-Program <string>] [-Package <string>] [-Service <string>] [-InterfaceAlias <WildcardPattern[]>] [-InterfaceType <InterfaceType>] [-LocalUser <string>] [-RemoteUser <string>] [-RemoteMachine <string>] [-Authentication <Authentication>] [-Encryption <Encryption>] [-OverrideBlockRules <bool>] [-RemoteDynamicKeywordAddresses <string[]>] [-PolicyAppId <string>] [-PackageFamilyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Action <Action> (Required: false)
- AsJob <switch> (Required: false)
- Authentication <Authentication> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- Direction <Direction> (Required: false)
- DisplayGroup <string[]> (Required: true)
- DisplayName <string[]> (Required: true)
- DynamicTarget <DynamicTransport> (Required: false)
- EdgeTraversalPolicy <EdgeTraversal> (Required: false)
- Enabled <Enabled> (Required: false)
- Encryption <Encryption> (Required: false)
- Group <string[]> (Required: true)
- IcmpType <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetFirewallRule[]> (Required: true)
- InterfaceAlias <WildcardPattern[]> (Required: false)
- InterfaceType <InterfaceType> (Required: false)
- LocalAddress <string[]> (Required: false)
- LocalOnlyMapping <bool> (Required: false)
- LocalPort <string[]> (Required: false)
- LocalUser <string> (Required: false)
- LooseSourceMapping <bool> (Required: false)
- Name <string[]> (Required: true)
- NewDisplayName <string> (Required: false)
- OverrideBlockRules <bool> (Required: false)
- Owner <string> (Required: false)
- Package <string> (Required: false)
- PackageFamilyName <string> (Required: false)
- PassThru <switch> (Required: false)
- Platform <string[]> (Required: false)
- PolicyAppId <string> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <Profile> (Required: false)
- Program <string> (Required: false)
- Protocol <string> (Required: false)
- RemoteAddress <string[]> (Required: false)
- RemoteDynamicKeywordAddresses <string[]> (Required: false)
- RemoteMachine <string> (Required: false)
- RemotePort <string[]> (Required: false)
- RemoteUser <string> (Required: false)
- Service <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallSecurityFilter

```powershell
Set-NetFirewallSecurityFilter [-PolicyStore <string>] [-GPOSession <string>] [-Authentication <Authentication>] [-Encryption <Encryption>] [-OverrideBlockRules <bool>] [-LocalUser <string>] [-RemoteUser <string>] [-RemoteMachine <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallSecurityFilter -InputObject <CimInstance#MSFT_NetNetworkLayerSecurityFilter[]> [-Authentication <Authentication>] [-Encryption <Encryption>] [-OverrideBlockRules <bool>] [-LocalUser <string>] [-RemoteUser <string>] [-RemoteMachine <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Authentication <Authentication> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Encryption <Encryption> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NetNetworkLayerSecurityFilter[]> (Required: true)
- LocalUser <string> (Required: false)
- OverrideBlockRules <bool> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- RemoteMachine <string> (Required: false)
- RemoteUser <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallServiceFilter

```powershell
Set-NetFirewallServiceFilter [-PolicyStore <string>] [-GPOSession <string>] [-Service <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallServiceFilter -InputObject <CimInstance#MSFT_NetServiceFilter[]> [-Service <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NetServiceFilter[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Service <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetFirewallSetting

```powershell
Set-NetFirewallSetting [-PolicyStore <string>] [-GPOSession <string>] [-Exemptions <TrafficExemption>] [-EnableStatefulFtp <GpoBoolean>] [-EnableStatefulPptp <GpoBoolean>] [-RemoteMachineTransportAuthorizationList <string>] [-RemoteMachineTunnelAuthorizationList <string>] [-RemoteUserTransportAuthorizationList <string>] [-RemoteUserTunnelAuthorizationList <string>] [-RequireFullAuthSupport <GpoBoolean>] [-CertValidationLevel <CRLCheck>] [-AllowIPsecThroughNAT <IPsecThroughNAT>] [-MaxSAIdleTimeSeconds <uint32>] [-KeyEncoding <KeyEncoding>] [-EnablePacketQueuing <PacketQueuing>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetFirewallSetting -InputObject <CimInstance#MSFT_NetSecuritySettingData[]> [-Exemptions <TrafficExemption>] [-EnableStatefulFtp <GpoBoolean>] [-EnableStatefulPptp <GpoBoolean>] [-RemoteMachineTransportAuthorizationList <string>] [-RemoteMachineTunnelAuthorizationList <string>] [-RemoteUserTransportAuthorizationList <string>] [-RemoteUserTunnelAuthorizationList <string>] [-RequireFullAuthSupport <GpoBoolean>] [-CertValidationLevel <CRLCheck>] [-AllowIPsecThroughNAT <IPsecThroughNAT>] [-MaxSAIdleTimeSeconds <uint32>] [-KeyEncoding <KeyEncoding>] [-EnablePacketQueuing <PacketQueuing>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowIPsecThroughNAT <IPsecThroughNAT> (Required: false)
- AsJob <switch> (Required: false)
- CertValidationLevel <CRLCheck> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EnablePacketQueuing <PacketQueuing> (Required: false)
- EnableStatefulFtp <GpoBoolean> (Required: false)
- EnableStatefulPptp <GpoBoolean> (Required: false)
- Exemptions <TrafficExemption> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NetSecuritySettingData[]> (Required: true)
- KeyEncoding <KeyEncoding> (Required: false)
- MaxSAIdleTimeSeconds <uint32> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- RemoteMachineTransportAuthorizationList <string> (Required: false)
- RemoteMachineTunnelAuthorizationList <string> (Required: false)
- RemoteUserTransportAuthorizationList <string> (Required: false)
- RemoteUserTunnelAuthorizationList <string> (Required: false)
- RequireFullAuthSupport <GpoBoolean> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIPAddress

```powershell
Set-NetIPAddress [[-IPAddress] <string[]>] [-InterfaceIndex <uint32[]>] [-InterfaceAlias <string[]>] [-AddressFamily <AddressFamily[]>] [-Type <Type[]>] [-PrefixOrigin <PrefixOrigin[]>] [-SuffixOrigin <SuffixOrigin[]>] [-AddressState <AddressState[]>] [-PolicyStore <string>] [-IncludeAllCompartments] [-PrefixLength <byte>] [-ValidLifetime <timespan>] [-PreferredLifetime <timespan>] [-SkipAsSource <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPAddress -InputObject <CimInstance#MSFT_NetIPAddress[]> [-PrefixLength <byte>] [-ValidLifetime <timespan>] [-PreferredLifetime <timespan>] [-SkipAsSource <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily[]> (Required: false)
- AddressState <AddressState[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPAddress <string[]> (Required: false)
- IncludeAllCompartments <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetIPAddress[]> (Required: true)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PreferredLifetime <timespan> (Required: false)
- PrefixLength <byte> (Required: false)
- PrefixOrigin <PrefixOrigin[]> (Required: false)
- SkipAsSource <bool> (Required: false)
- SuffixOrigin <SuffixOrigin[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- Type <Type[]> (Required: false)
- ValidLifetime <timespan> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIPHttpsConfiguration

```powershell
Set-NetIPHttpsConfiguration [-Profile <string[]>] [-ProfileActivated <bool[]>] [-PolicyStore <string>] [-State <State>] [-Type <Type>] [-AuthMode <AuthMode>] [-StrongCRLRequired <bool>] [-ServerURL <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPHttpsConfiguration [-Profile <string[]>] [-ProfileActivated <bool[]>] [-GPOSession <string>] [-State <State>] [-Type <Type>] [-AuthMode <AuthMode>] [-StrongCRLRequired <bool>] [-ServerURL <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPHttpsConfiguration -InputObject <CimInstance#MSFT_NetIPHttpsConfiguration[]> [-State <State>] [-Type <Type>] [-AuthMode <AuthMode>] [-StrongCRLRequired <bool>] [-ServerURL <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AuthMode <AuthMode> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- InputObject <CimInstance#MSFT_NetIPHttpsConfiguration[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <string[]> (Required: false)
- ProfileActivated <bool[]> (Required: false)
- ServerURL <string> (Required: false)
- State <State> (Required: false)
- StrongCRLRequired <bool> (Required: false)
- ThrottleLimit <int> (Required: false)
- Type <Type> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIPInterface

```powershell
Set-NetIPInterface [[-InterfaceAlias] <string[]>] [-InterfaceIndex <uint32[]>] [-AddressFamily <AddressFamily[]>] [-ReachableTime <uint32[]>] [-NeighborDiscoverySupported <NeighborDiscoverySupported[]>] [-CompartmentId <uint32[]>] [-PolicyStore <string>] [-IncludeAllCompartments] [-Forwarding <Forwarding>] [-ClampMss <ClampMss>] [-Advertising <Advertising>] [-NlMtuBytes <uint32>] [-InterfaceMetric <uint32>] [-NeighborUnreachabilityDetection <NeighborUnreachabilityDetection>] [-BaseReachableTimeMs <uint32>] [-RetransmitTimeMs <uint32>] [-DadTransmits <uint32>] [-DadRetransmitTimeMs <uint32>] [-RouterDiscovery <RouterDiscovery>] [-ManagedAddressConfiguration <ManagedAddressConfiguration>] [-OtherStatefulConfiguration <OtherStatefulConfiguration>] [-WeakHostSend <WeakHostSend>] [-WeakHostReceive <WeakHostReceive>] [-IgnoreDefaultRoutes <IgnoreDefaultRoutes>] [-AdvertisedRouterLifetime <timespan>] [-AdvertiseDefaultRoute <AdvertiseDefaultRoute>] [-CurrentHopLimit <uint32>] [-ForceArpNdWolPattern <ForceArpNdWolPattern>] [-DirectedMacWolPattern <DirectedMacWolPattern>] [-EcnMarking <EcnMarking>] [-Dhcp <Dhcp>] [-AutomaticMetric <AutomaticMetric>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPInterface -InputObject <CimInstance#MSFT_NetIPInterface[]> [-Forwarding <Forwarding>] [-ClampMss <ClampMss>] [-Advertising <Advertising>] [-NlMtuBytes <uint32>] [-InterfaceMetric <uint32>] [-NeighborUnreachabilityDetection <NeighborUnreachabilityDetection>] [-BaseReachableTimeMs <uint32>] [-RetransmitTimeMs <uint32>] [-DadTransmits <uint32>] [-DadRetransmitTimeMs <uint32>] [-RouterDiscovery <RouterDiscovery>] [-ManagedAddressConfiguration <ManagedAddressConfiguration>] [-OtherStatefulConfiguration <OtherStatefulConfiguration>] [-WeakHostSend <WeakHostSend>] [-WeakHostReceive <WeakHostReceive>] [-IgnoreDefaultRoutes <IgnoreDefaultRoutes>] [-AdvertisedRouterLifetime <timespan>] [-AdvertiseDefaultRoute <AdvertiseDefaultRoute>] [-CurrentHopLimit <uint32>] [-ForceArpNdWolPattern <ForceArpNdWolPattern>] [-DirectedMacWolPattern <DirectedMacWolPattern>] [-EcnMarking <EcnMarking>] [-Dhcp <Dhcp>] [-AutomaticMetric <AutomaticMetric>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily[]> (Required: false)
- AdvertiseDefaultRoute <AdvertiseDefaultRoute> (Required: false)
- AdvertisedRouterLifetime <timespan> (Required: false)
- Advertising <Advertising> (Required: false)
- AsJob <switch> (Required: false)
- AutomaticMetric <AutomaticMetric> (Required: false)
- BaseReachableTimeMs <uint32> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClampMss <ClampMss> (Required: false)
- CompartmentId <uint32[]> (Required: false)
- Confirm <switch> (Required: false)
- CurrentHopLimit <uint32> (Required: false)
- DadRetransmitTimeMs <uint32> (Required: false)
- DadTransmits <uint32> (Required: false)
- Dhcp <Dhcp> (Required: false)
- DirectedMacWolPattern <DirectedMacWolPattern> (Required: false)
- EcnMarking <EcnMarking> (Required: false)
- ForceArpNdWolPattern <ForceArpNdWolPattern> (Required: false)
- Forwarding <Forwarding> (Required: false)
- IgnoreDefaultRoutes <IgnoreDefaultRoutes> (Required: false)
- IncludeAllCompartments <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetIPInterface[]> (Required: true)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- InterfaceMetric <uint32> (Required: false)
- ManagedAddressConfiguration <ManagedAddressConfiguration> (Required: false)
- NeighborDiscoverySupported <NeighborDiscoverySupported[]> (Required: false)
- NeighborUnreachabilityDetection <NeighborUnreachabilityDetection> (Required: false)
- NlMtuBytes <uint32> (Required: false)
- OtherStatefulConfiguration <OtherStatefulConfiguration> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ReachableTime <uint32[]> (Required: false)
- RetransmitTimeMs <uint32> (Required: false)
- RouterDiscovery <RouterDiscovery> (Required: false)
- ThrottleLimit <int> (Required: false)
- WeakHostReceive <WeakHostReceive> (Required: false)
- WeakHostSend <WeakHostSend> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIPsecDospSetting

```powershell
Set-NetIPsecDospSetting [-Name] <string[]> [-StateIdleTimeoutSeconds <uint32>] [-PerIPRateLimitQueueIdleTimeoutSeconds <uint32>] [-IpV6IPsecUnauthDscp <uint32>] [-IpV6IPsecUnauthRateLimitBytesPerSec <uint32>] [-IpV6IPsecUnauthPerIPRateLimitBytesPerSec <uint32>] [-IpV6IPsecAuthDscp <uint16>] [-IpV6IPsecAuthRateLimitBytesPerSec <uint32>] [-IcmpV6Dscp <uint16>] [-IcmpV6RateLimitBytesPerSec <uint32>] [-IpV6FilterExemptDscp <uint32>] [-IpV6FilterExemptRateLimitBytesPerSec <uint32>] [-DefBlockExemptDscp <uint16>] [-DefBlockExemptRateLimitBytesPerSec <uint32>] [-MaxStateEntries <uint32>] [-MaxPerIPRateLimitQueues <uint32>] [-EnabledKeyingModules <DospKeyModules>] [-FilteringFlags <DospFlags>] [-PublicInterfaceAliases <WildcardPattern[]>] [-PrivateInterfaceAliases <WildcardPattern[]>] [-PublicV6Address <string>] [-PrivateV6Address <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecDospSetting -InputObject <CimInstance#MSFT_NetIPsecDoSPSetting[]> [-StateIdleTimeoutSeconds <uint32>] [-PerIPRateLimitQueueIdleTimeoutSeconds <uint32>] [-IpV6IPsecUnauthDscp <uint32>] [-IpV6IPsecUnauthRateLimitBytesPerSec <uint32>] [-IpV6IPsecUnauthPerIPRateLimitBytesPerSec <uint32>] [-IpV6IPsecAuthDscp <uint16>] [-IpV6IPsecAuthRateLimitBytesPerSec <uint32>] [-IcmpV6Dscp <uint16>] [-IcmpV6RateLimitBytesPerSec <uint32>] [-IpV6FilterExemptDscp <uint32>] [-IpV6FilterExemptRateLimitBytesPerSec <uint32>] [-DefBlockExemptDscp <uint16>] [-DefBlockExemptRateLimitBytesPerSec <uint32>] [-MaxStateEntries <uint32>] [-MaxPerIPRateLimitQueues <uint32>] [-EnabledKeyingModules <DospKeyModules>] [-FilteringFlags <DospFlags>] [-PublicInterfaceAliases <WildcardPattern[]>] [-PrivateInterfaceAliases <WildcardPattern[]>] [-PublicV6Address <string>] [-PrivateV6Address <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DefBlockExemptDscp <uint16> (Required: false)
- DefBlockExemptRateLimitBytesPerSec <uint32> (Required: false)
- EnabledKeyingModules <DospKeyModules> (Required: false)
- FilteringFlags <DospFlags> (Required: false)
- IcmpV6Dscp <uint16> (Required: false)
- IcmpV6RateLimitBytesPerSec <uint32> (Required: false)
- InputObject <CimInstance#MSFT_NetIPsecDoSPSetting[]> (Required: true)
- IpV6FilterExemptDscp <uint32> (Required: false)
- IpV6FilterExemptRateLimitBytesPerSec <uint32> (Required: false)
- IpV6IPsecAuthDscp <uint16> (Required: false)
- IpV6IPsecAuthRateLimitBytesPerSec <uint32> (Required: false)
- IpV6IPsecUnauthDscp <uint32> (Required: false)
- IpV6IPsecUnauthPerIPRateLimitBytesPerSec <uint32> (Required: false)
- IpV6IPsecUnauthRateLimitBytesPerSec <uint32> (Required: false)
- MaxPerIPRateLimitQueues <uint32> (Required: false)
- MaxStateEntries <uint32> (Required: false)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- PerIPRateLimitQueueIdleTimeoutSeconds <uint32> (Required: false)
- PrivateInterfaceAliases <WildcardPattern[]> (Required: false)
- PrivateV6Address <string> (Required: false)
- PublicInterfaceAliases <WildcardPattern[]> (Required: false)
- PublicV6Address <string> (Required: false)
- StateIdleTimeoutSeconds <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIPsecMainModeCryptoSet

```powershell
Set-NetIPsecMainModeCryptoSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-MaxMinutes <uint32>] [-MaxSessions <uint32>] [-ForceDiffieHellman <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecMainModeCryptoSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-MaxMinutes <uint32>] [-MaxSessions <uint32>] [-ForceDiffieHellman <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecMainModeCryptoSet -DisplayGroup <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-MaxMinutes <uint32>] [-MaxSessions <uint32>] [-ForceDiffieHellman <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecMainModeCryptoSet -Group <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-MaxMinutes <uint32>] [-MaxSessions <uint32>] [-ForceDiffieHellman <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecMainModeCryptoSet -InputObject <CimInstance#MSFT_NetIKEMMCryptoSet[]> [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-MaxMinutes <uint32>] [-MaxSessions <uint32>] [-ForceDiffieHellman <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- DisplayGroup <string[]> (Required: true)
- DisplayName <string[]> (Required: true)
- ForceDiffieHellman <bool> (Required: false)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: true)
- InputObject <CimInstance#MSFT_NetIKEMMCryptoSet[]> (Required: true)
- MaxMinutes <uint32> (Required: false)
- MaxSessions <uint32> (Required: false)
- Name <string[]> (Required: true)
- NewDisplayName <string> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Proposal <ciminstance[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIPsecMainModeRule

```powershell
Set-NetIPsecMainModeRule [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-MainModeCryptoSet <string>] [-Phase1AuthSet <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecMainModeRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-MainModeCryptoSet <string>] [-Phase1AuthSet <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecMainModeRule -DisplayGroup <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-MainModeCryptoSet <string>] [-Phase1AuthSet <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecMainModeRule -Group <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-MainModeCryptoSet <string>] [-Phase1AuthSet <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecMainModeRule -InputObject <CimInstance#MSFT_NetMainModeRule[]> [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-MainModeCryptoSet <string>] [-Phase1AuthSet <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- DisplayGroup <string[]> (Required: true)
- DisplayName <string[]> (Required: true)
- Enabled <Enabled> (Required: false)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: true)
- InputObject <CimInstance#MSFT_NetMainModeRule[]> (Required: true)
- LocalAddress <string[]> (Required: false)
- MainModeCryptoSet <string> (Required: false)
- Name <string[]> (Required: true)
- NewDisplayName <string> (Required: false)
- PassThru <switch> (Required: false)
- Phase1AuthSet <string> (Required: false)
- Platform <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <Profile> (Required: false)
- RemoteAddress <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIPsecPhase1AuthSet

```powershell
Set-NetIPsecPhase1AuthSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecPhase1AuthSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecPhase1AuthSet -DisplayGroup <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecPhase1AuthSet -Group <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecPhase1AuthSet -InputObject <CimInstance#MSFT_NetIKEP1AuthSet[]> [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- DisplayGroup <string[]> (Required: true)
- DisplayName <string[]> (Required: true)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: true)
- InputObject <CimInstance#MSFT_NetIKEP1AuthSet[]> (Required: true)
- Name <string[]> (Required: true)
- NewDisplayName <string> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Proposal <ciminstance[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIPsecPhase2AuthSet

```powershell
Set-NetIPsecPhase2AuthSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecPhase2AuthSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecPhase2AuthSet -DisplayGroup <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecPhase2AuthSet -Group <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecPhase2AuthSet -InputObject <CimInstance#MSFT_NetIKEP2AuthSet[]> [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- DisplayGroup <string[]> (Required: true)
- DisplayName <string[]> (Required: true)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: true)
- InputObject <CimInstance#MSFT_NetIKEP2AuthSet[]> (Required: true)
- Name <string[]> (Required: true)
- NewDisplayName <string> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Proposal <ciminstance[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIPsecQuickModeCryptoSet

```powershell
Set-NetIPsecQuickModeCryptoSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-PerfectForwardSecrecyGroup <DiffieHellmanGroup>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecQuickModeCryptoSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-PerfectForwardSecrecyGroup <DiffieHellmanGroup>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecQuickModeCryptoSet -DisplayGroup <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-PerfectForwardSecrecyGroup <DiffieHellmanGroup>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecQuickModeCryptoSet -Group <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-PerfectForwardSecrecyGroup <DiffieHellmanGroup>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecQuickModeCryptoSet -InputObject <CimInstance#MSFT_NetIKEQMCryptoSet[]> [-NewDisplayName <string>] [-Description <string>] [-Proposal <ciminstance[]>] [-PerfectForwardSecrecyGroup <DiffieHellmanGroup>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- DisplayGroup <string[]> (Required: true)
- DisplayName <string[]> (Required: true)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: true)
- InputObject <CimInstance#MSFT_NetIKEQMCryptoSet[]> (Required: true)
- Name <string[]> (Required: true)
- NewDisplayName <string> (Required: false)
- PassThru <switch> (Required: false)
- PerfectForwardSecrecyGroup <DiffieHellmanGroup> (Required: false)
- PolicyStore <string> (Required: false)
- Proposal <ciminstance[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIPsecRule

```powershell
Set-NetIPsecRule [-IPsecRuleName] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-Mode <IPsecMode>] [-InboundSecurity <SecurityPolicy>] [-OutboundSecurity <SecurityPolicy>] [-QuickModeCryptoSet <string>] [-Phase1AuthSet <string>] [-Phase2AuthSet <string>] [-KeyModule <KeyModule>] [-AllowWatchKey <bool>] [-AllowSetKey <bool>] [-LocalTunnelEndpoint <string[]>] [-RemoteTunnelEndpoint <string[]>] [-RemoteTunnelHostname <string>] [-ForwardPathLifetime <uint32>] [-EncryptedTunnelBypass <bool>] [-RequireAuthorization <bool>] [-User <string>] [-Machine <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-InterfaceAlias <WildcardPattern[]>] [-InterfaceType <InterfaceType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-Mode <IPsecMode>] [-InboundSecurity <SecurityPolicy>] [-OutboundSecurity <SecurityPolicy>] [-QuickModeCryptoSet <string>] [-Phase1AuthSet <string>] [-Phase2AuthSet <string>] [-KeyModule <KeyModule>] [-AllowWatchKey <bool>] [-AllowSetKey <bool>] [-LocalTunnelEndpoint <string[]>] [-RemoteTunnelEndpoint <string[]>] [-RemoteTunnelHostname <string>] [-ForwardPathLifetime <uint32>] [-EncryptedTunnelBypass <bool>] [-RequireAuthorization <bool>] [-User <string>] [-Machine <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-InterfaceAlias <WildcardPattern[]>] [-InterfaceType <InterfaceType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecRule -DisplayGroup <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-Mode <IPsecMode>] [-InboundSecurity <SecurityPolicy>] [-OutboundSecurity <SecurityPolicy>] [-QuickModeCryptoSet <string>] [-Phase1AuthSet <string>] [-Phase2AuthSet <string>] [-KeyModule <KeyModule>] [-AllowWatchKey <bool>] [-AllowSetKey <bool>] [-LocalTunnelEndpoint <string[]>] [-RemoteTunnelEndpoint <string[]>] [-RemoteTunnelHostname <string>] [-ForwardPathLifetime <uint32>] [-EncryptedTunnelBypass <bool>] [-RequireAuthorization <bool>] [-User <string>] [-Machine <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-InterfaceAlias <WildcardPattern[]>] [-InterfaceType <InterfaceType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecRule -Group <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-Mode <IPsecMode>] [-InboundSecurity <SecurityPolicy>] [-OutboundSecurity <SecurityPolicy>] [-QuickModeCryptoSet <string>] [-Phase1AuthSet <string>] [-Phase2AuthSet <string>] [-KeyModule <KeyModule>] [-AllowWatchKey <bool>] [-AllowSetKey <bool>] [-LocalTunnelEndpoint <string[]>] [-RemoteTunnelEndpoint <string[]>] [-RemoteTunnelHostname <string>] [-ForwardPathLifetime <uint32>] [-EncryptedTunnelBypass <bool>] [-RequireAuthorization <bool>] [-User <string>] [-Machine <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-InterfaceAlias <WildcardPattern[]>] [-InterfaceType <InterfaceType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIPsecRule -InputObject <CimInstance#MSFT_NetConSecRule[]> [-NewDisplayName <string>] [-Description <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-Mode <IPsecMode>] [-InboundSecurity <SecurityPolicy>] [-OutboundSecurity <SecurityPolicy>] [-QuickModeCryptoSet <string>] [-Phase1AuthSet <string>] [-Phase2AuthSet <string>] [-KeyModule <KeyModule>] [-AllowWatchKey <bool>] [-AllowSetKey <bool>] [-LocalTunnelEndpoint <string[]>] [-RemoteTunnelEndpoint <string[]>] [-RemoteTunnelHostname <string>] [-ForwardPathLifetime <uint32>] [-EncryptedTunnelBypass <bool>] [-RequireAuthorization <bool>] [-User <string>] [-Machine <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-InterfaceAlias <WildcardPattern[]>] [-InterfaceType <InterfaceType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowSetKey <bool> (Required: false)
- AllowWatchKey <bool> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- DisplayGroup <string[]> (Required: true)
- DisplayName <string[]> (Required: true)
- Enabled <Enabled> (Required: false)
- EncryptedTunnelBypass <bool> (Required: false)
- ForwardPathLifetime <uint32> (Required: false)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: true)
- IPsecRuleName <string[]> (Required: true)
- InboundSecurity <SecurityPolicy> (Required: false)
- InputObject <CimInstance#MSFT_NetConSecRule[]> (Required: true)
- InterfaceAlias <WildcardPattern[]> (Required: false)
- InterfaceType <InterfaceType> (Required: false)
- KeyModule <KeyModule> (Required: false)
- LocalAddress <string[]> (Required: false)
- LocalPort <string[]> (Required: false)
- LocalTunnelEndpoint <string[]> (Required: false)
- Machine <string> (Required: false)
- Mode <IPsecMode> (Required: false)
- NewDisplayName <string> (Required: false)
- OutboundSecurity <SecurityPolicy> (Required: false)
- PassThru <switch> (Required: false)
- Phase1AuthSet <string> (Required: false)
- Phase2AuthSet <string> (Required: false)
- Platform <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <Profile> (Required: false)
- Protocol <string> (Required: false)
- QuickModeCryptoSet <string> (Required: false)
- RemoteAddress <string[]> (Required: false)
- RemotePort <string[]> (Required: false)
- RemoteTunnelEndpoint <string[]> (Required: false)
- RemoteTunnelHostname <string> (Required: false)
- RequireAuthorization <bool> (Required: false)
- ThrottleLimit <int> (Required: false)
- User <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIPv4Protocol

```powershell
Set-NetIPv4Protocol [-InputObject <CimInstance#MSFT_NetIPv4Protocol[]>] [-DefaultHopLimit <uint32>] [-NeighborCacheLimitEntries <uint32>] [-RouteCacheLimitEntries <uint32>] [-ReassemblyLimitBytes <uint32>] [-IcmpRedirects <IcmpRedirects>] [-SourceRoutingBehavior <SourceRoutingBehavior>] [-DhcpMediaSense <DhcpMediaSense>] [-MediaSenseEventLog <MediaSenseEventLog>] [-IGMPLevel <MldLevel>] [-IGMPVersion <MldVersion>] [-MulticastForwarding <MulticastForwarding>] [-GroupForwardedFragments <GroupForwardedFragments>] [-RandomizeIdentifiers <RandomizeIdentifiers>] [-AddressMaskReply <AddressMaskReply>] [-DeadGatewayDetection <DeadGatewayDetection>] [-MinimumMtu <uint32>] [-MultipleArpAnnouncements <MultipleArpAnnouncements>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressMaskReply <AddressMaskReply> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DeadGatewayDetection <DeadGatewayDetection> (Required: false)
- DefaultHopLimit <uint32> (Required: false)
- DhcpMediaSense <DhcpMediaSense> (Required: false)
- GroupForwardedFragments <GroupForwardedFragments> (Required: false)
- IGMPLevel <MldLevel> (Required: false)
- IGMPVersion <MldVersion> (Required: false)
- IcmpRedirects <IcmpRedirects> (Required: false)
- InputObject <CimInstance#MSFT_NetIPv4Protocol[]> (Required: false)
- MediaSenseEventLog <MediaSenseEventLog> (Required: false)
- MinimumMtu <uint32> (Required: false)
- MulticastForwarding <MulticastForwarding> (Required: false)
- MultipleArpAnnouncements <MultipleArpAnnouncements> (Required: false)
- NeighborCacheLimitEntries <uint32> (Required: false)
- PassThru <switch> (Required: false)
- RandomizeIdentifiers <RandomizeIdentifiers> (Required: false)
- ReassemblyLimitBytes <uint32> (Required: false)
- RouteCacheLimitEntries <uint32> (Required: false)
- SourceRoutingBehavior <SourceRoutingBehavior> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIPv6Protocol

```powershell
Set-NetIPv6Protocol [-InputObject <CimInstance#MSFT_NetIPv6Protocol[]>] [-DefaultHopLimit <uint32>] [-NeighborCacheLimitEntries <uint32>] [-RouteCacheLimitEntries <uint32>] [-ReassemblyLimitBytes <uint32>] [-IcmpRedirects <IcmpRedirects>] [-SourceRoutingBehavior <SourceRoutingBehavior>] [-DhcpMediaSense <DhcpMediaSense>] [-MediaSenseEventLog <MediaSenseEventLog>] [-MldLevel <MldLevel>] [-MldVersion <MldVersion>] [-MulticastForwarding <MulticastForwarding>] [-GroupForwardedFragments <GroupForwardedFragments>] [-RandomizeIdentifiers <RandomizeIdentifiers>] [-AddressMaskReply <AddressMaskReply>] [-DeadGatewayDetection <DeadGatewayDetection>] [-UseTemporaryAddresses <UseTemporaryAddresses>] [-MaxTemporaryDadAttempts <uint32>] [-MaxTemporaryValidLifetime <timespan>] [-MaxTemporaryPreferredLifetime <timespan>] [-TemporaryRegenerateTime <timespan>] [-MaxTemporaryDesyncTime <timespan>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressMaskReply <AddressMaskReply> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DeadGatewayDetection <DeadGatewayDetection> (Required: false)
- DefaultHopLimit <uint32> (Required: false)
- DhcpMediaSense <DhcpMediaSense> (Required: false)
- GroupForwardedFragments <GroupForwardedFragments> (Required: false)
- IcmpRedirects <IcmpRedirects> (Required: false)
- InputObject <CimInstance#MSFT_NetIPv6Protocol[]> (Required: false)
- MaxTemporaryDadAttempts <uint32> (Required: false)
- MaxTemporaryDesyncTime <timespan> (Required: false)
- MaxTemporaryPreferredLifetime <timespan> (Required: false)
- MaxTemporaryValidLifetime <timespan> (Required: false)
- MediaSenseEventLog <MediaSenseEventLog> (Required: false)
- MldLevel <MldLevel> (Required: false)
- MldVersion <MldVersion> (Required: false)
- MulticastForwarding <MulticastForwarding> (Required: false)
- NeighborCacheLimitEntries <uint32> (Required: false)
- PassThru <switch> (Required: false)
- RandomizeIdentifiers <RandomizeIdentifiers> (Required: false)
- ReassemblyLimitBytes <uint32> (Required: false)
- RouteCacheLimitEntries <uint32> (Required: false)
- SourceRoutingBehavior <SourceRoutingBehavior> (Required: false)
- TemporaryRegenerateTime <timespan> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseTemporaryAddresses <UseTemporaryAddresses> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetIsatapConfiguration

```powershell
Set-NetIsatapConfiguration [[-State] <State>] [[-Router] <string>] [[-ResolutionState] <State>] [[-ResolutionIntervalSeconds] <uint32>] [-IPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetIsatapConfiguration [[-State] <State>] [[-Router] <string>] [[-ResolutionState] <State>] [[-ResolutionIntervalSeconds] <uint32>] -InputObject <CimInstance#MSFT_NetISATAPConfiguration[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: false)
- IPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- InputObject <CimInstance#MSFT_NetISATAPConfiguration[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ResolutionIntervalSeconds <uint32> (Required: false)
- ResolutionState <State> (Required: false)
- Router <string> (Required: false)
- State <State> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetLbfoTeam

```powershell
Set-NetLbfoTeam [[-Name] <string[]>] [-TeamingMode <TeamingModes>] [-LoadBalancingAlgorithm <LBAlgos>] [-LacpTimer <LacpTimers>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetLbfoTeam [-MemberOfTheTeam <CimInstance#MSFT_NetLbfoTeamMember>] [-TeamingMode <TeamingModes>] [-LoadBalancingAlgorithm <LBAlgos>] [-LacpTimer <LacpTimers>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetLbfoTeam [-TeamNicForTheTeam <CimInstance#MSFT_NetLbfoTeamNic>] [-TeamingMode <TeamingModes>] [-LoadBalancingAlgorithm <LBAlgos>] [-LacpTimer <LacpTimers>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetLbfoTeam -InputObject <CimInstance#MSFT_NetLbfoTeam[]> [-TeamingMode <TeamingModes>] [-LoadBalancingAlgorithm <LBAlgos>] [-LacpTimer <LacpTimers>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetLbfoTeam[]> (Required: true)
- LacpTimer <LacpTimers> (Required: false)
- LoadBalancingAlgorithm <LBAlgos> (Required: false)
- MemberOfTheTeam <CimInstance#MSFT_NetLbfoTeamMember> (Required: false)
- Name <string[]> (Required: false)
- PassThru <switch> (Required: false)
- TeamNicForTheTeam <CimInstance#MSFT_NetLbfoTeamNic> (Required: false)
- TeamingMode <TeamingModes> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetLbfoTeamMember

```powershell
Set-NetLbfoTeamMember [[-Name] <string[]>] [[-Team] <string[]>] [-AdministrativeMode <AdminModes>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetLbfoTeamMember [-TeamOfTheMember <CimInstance#MSFT_NetLbfoTeam>] [-AdministrativeMode <AdminModes>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetLbfoTeamMember -InputObject <CimInstance#MSFT_NetLbfoTeamMember[]> [-AdministrativeMode <AdminModes>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AdministrativeMode <AdminModes> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetLbfoTeamMember[]> (Required: true)
- Name <string[]> (Required: false)
- PassThru <switch> (Required: false)
- Team <string[]> (Required: false)
- TeamOfTheMember <CimInstance#MSFT_NetLbfoTeam> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetLbfoTeamNic

```powershell
Set-NetLbfoTeamNic [[-Name] <string[]>] [[-Team] <string[]>] [-VlanID <uint32>] [-Default] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetLbfoTeamNic [-TeamOfTheTeamNic <CimInstance#MSFT_NetLbfoTeam>] [-VlanID <uint32>] [-Default] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetLbfoTeamNic -InputObject <CimInstance#MSFT_NetLbfoTeamNic[]> [-VlanID <uint32>] [-Default] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Default <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetLbfoTeamNic[]> (Required: true)
- Name <string[]> (Required: false)
- PassThru <switch> (Required: false)
- Team <string[]> (Required: false)
- TeamOfTheTeamNic <CimInstance#MSFT_NetLbfoTeam> (Required: false)
- ThrottleLimit <int> (Required: false)
- VlanID <uint32> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetNat

```powershell
Set-NetNat [-Name] <string[]> [-IcmpQueryTimeout <uint32>] [-TcpEstablishedConnectionTimeout <uint32>] [-TcpTransientConnectionTimeout <uint32>] [-TcpFilteringBehavior <FilteringBehaviorType>] [-UdpFilteringBehavior <FilteringBehaviorType>] [-UdpIdleSessionTimeout <uint32>] [-UdpInboundRefresh <Boolean>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetNat -InputObject <CimInstance#MSFT_NetNat[]> [-IcmpQueryTimeout <uint32>] [-TcpEstablishedConnectionTimeout <uint32>] [-TcpTransientConnectionTimeout <uint32>] [-TcpFilteringBehavior <FilteringBehaviorType>] [-UdpFilteringBehavior <FilteringBehaviorType>] [-UdpIdleSessionTimeout <uint32>] [-UdpInboundRefresh <Boolean>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IcmpQueryTimeout <uint32> (Required: false)
- InputObject <CimInstance#MSFT_NetNat[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- TcpEstablishedConnectionTimeout <uint32> (Required: false)
- TcpFilteringBehavior <FilteringBehaviorType> (Required: false)
- TcpTransientConnectionTimeout <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- UdpFilteringBehavior <FilteringBehaviorType> (Required: false)
- UdpIdleSessionTimeout <uint32> (Required: false)
- UdpInboundRefresh <Boolean> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetNatGlobal

```powershell
Set-NetNatGlobal -InterRoutingDomainHairpinningMode <InterRoutingDomainHairpinningMode> [-InputObject <CimInstance#MSFT_NetNatGlobal[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetNatGlobal[]> (Required: false)
- InterRoutingDomainHairpinningMode <InterRoutingDomainHairpinningMode> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetNatTransitionConfiguration

```powershell
Set-NetNatTransitionConfiguration [-InstanceName <string[]>] [-PolicyStore <PolicyStore[]>] [-Adapter <CimInstance#MSFT_NetAdapter>] [-State <State>] [-InboundInterface <string[]>] [-OutboundInterface <string[]>] [-PrefixMapping <string[]>] [-IPv4AddressPortPool <string[]>] [-TcpMappingTimeoutSeconds <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetNatTransitionConfiguration -InputObject <CimInstance#MSFT_NetNatTransitionConfiguration[]> [-State <State>] [-InboundInterface <string[]>] [-OutboundInterface <string[]>] [-PrefixMapping <string[]>] [-IPv4AddressPortPool <string[]>] [-TcpMappingTimeoutSeconds <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Adapter <CimInstance#MSFT_NetAdapter> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPv4AddressPortPool <string[]> (Required: false)
- InboundInterface <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetNatTransitionConfiguration[]> (Required: true)
- InstanceName <string[]> (Required: false)
- OutboundInterface <string[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <PolicyStore[]> (Required: false)
- PrefixMapping <string[]> (Required: false)
- State <State> (Required: false)
- TcpMappingTimeoutSeconds <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetNeighbor

```powershell
Set-NetNeighbor [[-IPAddress] <string[]>] [-InterfaceIndex <uint32[]>] [-InterfaceAlias <string[]>] [-State <State[]>] [-AddressFamily <AddressFamily[]>] [-PolicyStore <string>] [-IncludeAllCompartments] [-LinkLayerAddress <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetNeighbor -InputObject <CimInstance#MSFT_NetNeighbor[]> [-LinkLayerAddress <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPAddress <string[]> (Required: false)
- IncludeAllCompartments <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetNeighbor[]> (Required: true)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- LinkLayerAddress <string> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- State <State[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetOffloadGlobalSetting

```powershell
Set-NetOffloadGlobalSetting [-InputObject <CimInstance#MSFT_NetOffloadGlobalSetting[]>] [-ReceiveSideScaling <EnabledDisabledEnum>] [-ReceiveSegmentCoalescing <EnabledDisabledEnum>] [-Chimney <ChimneyEnum>] [-TaskOffload <EnabledDisabledEnum>] [-NetworkDirect <EnabledDisabledEnum>] [-NetworkDirectAcrossIPSubnets <AllowedBlockedEnum>] [-PacketCoalescingFilter <EnabledDisabledEnum>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Chimney <ChimneyEnum> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetOffloadGlobalSetting[]> (Required: false)
- NetworkDirect <EnabledDisabledEnum> (Required: false)
- NetworkDirectAcrossIPSubnets <AllowedBlockedEnum> (Required: false)
- PacketCoalescingFilter <EnabledDisabledEnum> (Required: false)
- PassThru <switch> (Required: false)
- ReceiveSegmentCoalescing <EnabledDisabledEnum> (Required: false)
- ReceiveSideScaling <EnabledDisabledEnum> (Required: false)
- TaskOffload <EnabledDisabledEnum> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetQosPolicy

```powershell
Set-NetQosPolicy [[-Name] <string[]>] [-PolicyStore <string>] [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-TemplateMatchCondition <Template>] [-UserMatchCondition <string>] [-AppPathNameMatchCondition <string>] [-IPProtocolMatchCondition <Protocol>] [-IPPortMatchCondition <uint16>] [-IPSrcPrefixMatchCondition <string>] [-IPSrcPortMatchCondition <uint16>] [-IPSrcPortStartMatchCondition <uint16>] [-IPSrcPortEndMatchCondition <uint16>] [-IPDstPrefixMatchCondition <string>] [-IPDstPortMatchCondition <uint16>] [-IPDstPortStartMatchCondition <uint16>] [-IPDstPortEndMatchCondition <uint16>] [-NetDirectPortMatchCondition <uint16>] [-URIMatchCondition <string>] [-URIRecursiveMatchCondition <bool>] [-PriorityValue8021Action <sbyte>] [-DSCPAction <sbyte>] [-MinBandwidthWeightAction <byte>] [-ThrottleRateActionBitsPerSecond <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetQosPolicy -InputObject <CimInstance#MSFT_NetQosPolicySettingData[]> [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-TemplateMatchCondition <Template>] [-UserMatchCondition <string>] [-AppPathNameMatchCondition <string>] [-IPProtocolMatchCondition <Protocol>] [-IPPortMatchCondition <uint16>] [-IPSrcPrefixMatchCondition <string>] [-IPSrcPortMatchCondition <uint16>] [-IPSrcPortStartMatchCondition <uint16>] [-IPSrcPortEndMatchCondition <uint16>] [-IPDstPrefixMatchCondition <string>] [-IPDstPortMatchCondition <uint16>] [-IPDstPortStartMatchCondition <uint16>] [-IPDstPortEndMatchCondition <uint16>] [-NetDirectPortMatchCondition <uint16>] [-URIMatchCondition <string>] [-URIRecursiveMatchCondition <bool>] [-PriorityValue8021Action <sbyte>] [-DSCPAction <sbyte>] [-MinBandwidthWeightAction <byte>] [-ThrottleRateActionBitsPerSecond <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AppPathNameMatchCondition <string> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DSCPAction <sbyte> (Required: false)
- IPDstPortEndMatchCondition <uint16> (Required: false)
- IPDstPortMatchCondition <uint16> (Required: false)
- IPDstPortStartMatchCondition <uint16> (Required: false)
- IPDstPrefixMatchCondition <string> (Required: false)
- IPPortMatchCondition <uint16> (Required: false)
- IPProtocolMatchCondition <Protocol> (Required: false)
- IPSrcPortEndMatchCondition <uint16> (Required: false)
- IPSrcPortMatchCondition <uint16> (Required: false)
- IPSrcPortStartMatchCondition <uint16> (Required: false)
- IPSrcPrefixMatchCondition <string> (Required: false)
- InputObject <CimInstance#MSFT_NetQosPolicySettingData[]> (Required: true)
- MinBandwidthWeightAction <byte> (Required: false)
- Name <string[]> (Required: false)
- NetDirectPortMatchCondition <uint16> (Required: false)
- NetworkProfile <NetworkProfile> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- Precedence <uint32> (Required: false)
- PriorityValue8021Action <sbyte> (Required: false)
- TemplateMatchCondition <Template> (Required: false)
- ThrottleLimit <int> (Required: false)
- ThrottleRateActionBitsPerSecond <uint64> (Required: false)
- URIMatchCondition <string> (Required: false)
- URIRecursiveMatchCondition <bool> (Required: false)
- UserMatchCondition <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetRoute

```powershell
Set-NetRoute [[-DestinationPrefix] <string[]>] [-InterfaceIndex <uint32[]>] [-InterfaceAlias <string[]>] [-NextHop <string[]>] [-AddressFamily <AddressFamily[]>] [-Protocol <Protocol[]>] [-PolicyStore <string>] [-IncludeAllCompartments] [-Publish <Publish>] [-RouteMetric <uint16>] [-ValidLifetime <timespan>] [-PreferredLifetime <timespan>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetRoute -InputObject <CimInstance#MSFT_NetRoute[]> [-Publish <Publish>] [-RouteMetric <uint16>] [-ValidLifetime <timespan>] [-PreferredLifetime <timespan>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DestinationPrefix <string[]> (Required: false)
- IncludeAllCompartments <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetRoute[]> (Required: true)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- NextHop <string[]> (Required: false)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- PreferredLifetime <timespan> (Required: false)
- Protocol <Protocol[]> (Required: false)
- Publish <Publish> (Required: false)
- RouteMetric <uint16> (Required: false)
- ThrottleLimit <int> (Required: false)
- ValidLifetime <timespan> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetTCPSetting

```powershell
Set-NetTCPSetting [[-SettingName] <string[]>] [-MinRtoMs <uint32>] [-InitialCongestionWindowMss <uint32>] [-CongestionProvider <CongestionProvider>] [-CwndRestart <CwndRestart>] [-DelayedAckTimeoutMs <uint32>] [-DelayedAckFrequency <byte>] [-MemoryPressureProtection <MemoryPressureProtection>] [-AutoTuningLevelLocal <AutoTuningLevelLocal>] [-EcnCapability <EcnCapability>] [-Timestamps <Timestamps>] [-InitialRtoMs <uint32>] [-ScalingHeuristics <ScalingHeuristics>] [-DynamicPortRangeStartPort <uint16>] [-DynamicPortRangeNumberOfPorts <uint16>] [-AutomaticUseCustom <AutomaticUseCustom>] [-NonSackRttResiliency <NonSackRttResiliency>] [-ForceWS <ForceWS>] [-MaxSynRetransmissions <byte>] [-AutoReusePortRangeStartPort <uint16>] [-AutoReusePortRangeNumberOfPorts <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetTCPSetting -InputObject <CimInstance#MSFT_NetTCPSetting[]> [-MinRtoMs <uint32>] [-InitialCongestionWindowMss <uint32>] [-CongestionProvider <CongestionProvider>] [-CwndRestart <CwndRestart>] [-DelayedAckTimeoutMs <uint32>] [-DelayedAckFrequency <byte>] [-MemoryPressureProtection <MemoryPressureProtection>] [-AutoTuningLevelLocal <AutoTuningLevelLocal>] [-EcnCapability <EcnCapability>] [-Timestamps <Timestamps>] [-InitialRtoMs <uint32>] [-ScalingHeuristics <ScalingHeuristics>] [-DynamicPortRangeStartPort <uint16>] [-DynamicPortRangeNumberOfPorts <uint16>] [-AutomaticUseCustom <AutomaticUseCustom>] [-NonSackRttResiliency <NonSackRttResiliency>] [-ForceWS <ForceWS>] [-MaxSynRetransmissions <byte>] [-AutoReusePortRangeStartPort <uint16>] [-AutoReusePortRangeNumberOfPorts <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AutoReusePortRangeNumberOfPorts <uint16> (Required: false)
- AutoReusePortRangeStartPort <uint16> (Required: false)
- AutoTuningLevelLocal <AutoTuningLevelLocal> (Required: false)
- AutomaticUseCustom <AutomaticUseCustom> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- CongestionProvider <CongestionProvider> (Required: false)
- CwndRestart <CwndRestart> (Required: false)
- DelayedAckFrequency <byte> (Required: false)
- DelayedAckTimeoutMs <uint32> (Required: false)
- DynamicPortRangeNumberOfPorts <uint16> (Required: false)
- DynamicPortRangeStartPort <uint16> (Required: false)
- EcnCapability <EcnCapability> (Required: false)
- ForceWS <ForceWS> (Required: false)
- InitialCongestionWindowMss <uint32> (Required: false)
- InitialRtoMs <uint32> (Required: false)
- InputObject <CimInstance#MSFT_NetTCPSetting[]> (Required: true)
- MaxSynRetransmissions <byte> (Required: false)
- MemoryPressureProtection <MemoryPressureProtection> (Required: false)
- MinRtoMs <uint32> (Required: false)
- NonSackRttResiliency <NonSackRttResiliency> (Required: false)
- PassThru <switch> (Required: false)
- ScalingHeuristics <ScalingHeuristics> (Required: false)
- SettingName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- Timestamps <Timestamps> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetTeredoConfiguration

```powershell
Set-NetTeredoConfiguration [[-Type] <Type>] [[-ServerName] <string>] [[-RefreshIntervalSeconds] <uint32>] [[-ClientPort] <uint32>] [[-ServerVirtualIP] <string>] [[-DefaultQualified] <bool>] [[-ServerShunt] <bool>] [-IPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetTeredoConfiguration [[-Type] <Type>] [[-ServerName] <string>] [[-RefreshIntervalSeconds] <uint32>] [[-ClientPort] <uint32>] [[-ServerVirtualIP] <string>] [[-DefaultQualified] <bool>] [[-ServerShunt] <bool>] -InputObject <CimInstance#MSFT_NetTeredoConfiguration[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClientPort <uint32> (Required: false)
- Confirm <switch> (Required: false)
- DefaultQualified <bool> (Required: false)
- GPOSession <string> (Required: false)
- IPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- InputObject <CimInstance#MSFT_NetTeredoConfiguration[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- RefreshIntervalSeconds <uint32> (Required: false)
- ServerName <string> (Required: false)
- ServerShunt <bool> (Required: false)
- ServerVirtualIP <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- Type <Type> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetUDPSetting

```powershell
Set-NetUDPSetting [-InputObject <CimInstance#MSFT_NetUDPSetting[]>] [-DynamicPortRangeStartPort <uint16>] [-DynamicPortRangeNumberOfPorts <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DynamicPortRangeNumberOfPorts <uint16> (Required: false)
- DynamicPortRangeStartPort <uint16> (Required: false)
- InputObject <CimInstance#MSFT_NetUDPSetting[]> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetworkSwitchEthernetPortIPAddress

```powershell
Set-NetworkSwitchEthernetPortIPAddress -CimSession <CimSession> -IpAddress <string> -SubnetAddress <string> -PortNumber <int> [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetworkSwitchEthernetPortIPAddress -CimSession <CimSession> -IpAddress <string> -SubnetAddress <string> -InputObject <ciminstance[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- InputObject <ciminstance[]> (Required: true)
- IpAddress <string> (Required: true)
- PortNumber <int> (Required: true)
- SubnetAddress <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-NetworkSwitchPortMode

```powershell
Set-NetworkSwitchPortMode -CimSession <CimSession> -AccessMode -VlanID <int> -InputObject <ciminstance[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetworkSwitchPortMode -CimSession <CimSession> -RouteMode -IpAddress <string> -SubnetAddress <string> -InputObject <ciminstance[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetworkSwitchPortMode -CimSession <CimSession> -TrunkMode -VlanIDs <uint16[]> -InputObject <ciminstance[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AccessMode <switch> (Required: true)
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- InputObject <ciminstance[]> (Required: true)
- IpAddress <string> (Required: true)
- RouteMode <switch> (Required: true)
- SubnetAddress <string> (Required: true)
- TrunkMode <switch> (Required: true)
- VlanID <int> (Required: true)
- VlanIDs <uint16[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-NetworkSwitchPortProperty

```powershell
Set-NetworkSwitchPortProperty [-CimSession] <CimSession> [[-Property] <hashtable>] [-InputObject] <ciminstance[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- InputObject <ciminstance[]> (Required: true)
- Property <hashtable> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-NetworkSwitchVlanProperty

```powershell
Set-NetworkSwitchVlanProperty -CimSession <CimSession> -VlanId <int[]> [-Property <hashtable>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-NetworkSwitchVlanProperty -CimSession <CimSession> -InputObject <ciminstance[]> [-Property <hashtable>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- InputObject <ciminstance[]> (Required: true)
- Property <hashtable> (Required: false)
- VlanId <int[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-NinjaTag

```powershell
Set-NinjaTag [[-Name] <Object>]

PARAMETERS:
- Name <Object> (Required: false)
```

### Set-NonRemovableAppsPolicy

```powershell
Set-NonRemovableAppsPolicy -PackageFamilyName <string> -NonRemovable <int> -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Set-NonRemovableAppsPolicy -PackageFamilyName <string> -NonRemovable <int> -Online [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- NonRemovable <int> (Required: true)
- Online <switch> (Required: true)
- PackageFamilyName <string> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Set-OdbcDriver

```powershell
Set-OdbcDriver [-InputObject] <CimInstance#MSFT_OdbcDriver[]> [-PassThru] [-SetPropertyValue <string[]>] [-RemovePropertyValue <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-OdbcDriver [-Name] <string> [-PassThru] [-SetPropertyValue <string[]>] [-RemovePropertyValue <string[]>] [-Platform <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_OdbcDriver[]> (Required: true)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- Platform <string> (Required: false)
- RemovePropertyValue <string[]> (Required: false)
- SetPropertyValue <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-OdbcDsn

```powershell
Set-OdbcDsn [-InputObject] <CimInstance#MSFT_OdbcDsn[]> [-PassThru] [-SetPropertyValue <string[]>] [-RemovePropertyValue <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-OdbcDsn [-Name] <string> -DsnType <string> [-PassThru] [-SetPropertyValue <string[]>] [-RemovePropertyValue <string[]>] [-DriverName <string>] [-Platform <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- RemovePropertyValue <string[]> (Required: false)
- SetPropertyValue <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-OsConfigurationDocument

```powershell
Set-OsConfigurationDocument [-Content] <string> [[-SourceId] <string>] [[-FriendlyName] <string>] [-Wait] [[-TimeoutInSeconds] <int>] [-Update] [<CommonParameters>]

PARAMETERS:
- Content <string> (Required: true)
- FriendlyName <string> (Required: false)
- SourceId <string> (Required: false)
- TimeoutInSeconds <int> (Required: false)
- Update <switch> (Required: false)
- Wait <switch> (Required: false)
```

### Set-OsConfigurationProperty

```powershell
Set-OsConfigurationProperty [-Name] <string> [-Value] <string> [[-SourceId] <string>] [[-Id] <string>] [<CommonParameters>]

PARAMETERS:
- FriendlyName <string> (Required: false)
- Id <string> (Required: false)
- Name <string> (Required: true)
- SourceId <string> (Required: false)
- Value <string> (Required: true)
```

### Set-PackageSource

```powershell
Set-PackageSource [[-Name] <string>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Location <string>] [-NewLocation <string>] [-NewName <string>] [-Trusted] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-ProviderName <string>] [<CommonParameters>]

Set-PackageSource -InputObject <PackageSource> [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-NewLocation <string>] [-NewName <string>] [-Trusted] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PackageSource [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-NewLocation <string>] [-NewName <string>] [-Trusted] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-PackageManagementProvider <string>] [-PublishLocation <string>] [-ScriptSourceLocation <string>] [-ScriptPublishLocation <string>] [<CommonParameters>]

Set-PackageSource [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-NewLocation <string>] [-NewName <string>] [-Trusted] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-PackageManagementProvider <string>] [-PublishLocation <string>] [-ScriptSourceLocation <string>] [-ScriptPublishLocation <string>] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- InputObject <PackageSource> (Required: true)
- Location <string> (Required: false)
- Name <string> (Required: false)
- NewLocation <string> (Required: false)
- NewName <string> (Required: false)
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

### Set-Partition

```powershell
Set-Partition [-DiskNumber] <uint32> [-PartitionNumber] <uint32> [-IsReadOnly <bool>] [-NoDefaultDriveLetter <bool>] [-IsActive <bool>] [-IsHidden <bool>] [-IsShadowCopy <bool>] [-IsDAX <bool>] [-MbrType <uint16>] [-GptType <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Partition -InputObject <ciminstance[]> [-NewDriveLetter <char>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Partition -InputObject <ciminstance[]> [-IsOffline <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Partition -InputObject <ciminstance[]> [-IsReadOnly <bool>] [-NoDefaultDriveLetter <bool>] [-IsActive <bool>] [-IsHidden <bool>] [-IsShadowCopy <bool>] [-IsDAX <bool>] [-MbrType <uint16>] [-GptType <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Partition -DriveLetter <char> [-IsReadOnly <bool>] [-NoDefaultDriveLetter <bool>] [-IsActive <bool>] [-IsHidden <bool>] [-IsShadowCopy <bool>] [-IsDAX <bool>] [-MbrType <uint16>] [-GptType <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Partition -DiskId <string> -Offset <uint64> [-IsReadOnly <bool>] [-NoDefaultDriveLetter <bool>] [-IsActive <bool>] [-IsHidden <bool>] [-IsShadowCopy <bool>] [-IsDAX <bool>] [-MbrType <uint16>] [-GptType <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Partition -DiskId <string> -Offset <uint64> [-NewDriveLetter <char>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Partition -DiskId <string> -Offset <uint64> [-IsOffline <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Partition -DriveLetter <char> [-NewDriveLetter <char>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Partition -DriveLetter <char> [-IsOffline <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Partition [-DiskNumber] <uint32> [-PartitionNumber] <uint32> [-NewDriveLetter <char>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Partition [-DiskNumber] <uint32> [-PartitionNumber] <uint32> [-IsOffline <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DiskId <string> (Required: true)
- DiskNumber <uint32> (Required: true)
- DriveLetter <char> (Required: true)
- GptType <string> (Required: false)
- InputObject <ciminstance[]> (Required: true)
- IsActive <bool> (Required: false)
- IsDAX <bool> (Required: false)
- IsHidden <bool> (Required: false)
- IsOffline <bool> (Required: false)
- IsReadOnly <bool> (Required: false)
- IsShadowCopy <bool> (Required: false)
- MbrType <uint16> (Required: false)
- NewDriveLetter <char> (Required: false)
- NoDefaultDriveLetter <bool> (Required: false)
- Offset <uint64> (Required: true)
- PartitionNumber <uint32> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-PcsvDeviceBootConfiguration

```powershell
Set-PcsvDeviceBootConfiguration [[-OneTimeBootSource] <string>] [[-PersistentBootSource] <string[]>] [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PcsvDeviceBootConfiguration [-TargetAddress] <string> [-Credential] <pscredential> [-ManagementProtocol] <ManagementProtocol> [[-Port] <uint16>] [[-OneTimeBootSource] <string>] [[-PersistentBootSource] <string[]>] [-Authentication <Authentication>] [-UseSSL] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PcsvDeviceBootConfiguration [[-OneTimeBootSource] <string>] [[-PersistentBootSource] <string[]>] -InputObject <CimInstance#MSFT_PCSVDevice[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Authentication <Authentication> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: true)
- InputObject <CimInstance#MSFT_PCSVDevice[]> (Required: true)
- ManagementProtocol <ManagementProtocol> (Required: true)
- OneTimeBootSource <string> (Required: false)
- PassThru <switch> (Required: false)
- PersistentBootSource <string[]> (Required: false)
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

### Set-PcsvDeviceNetworkConfiguration

```powershell
Set-PcsvDeviceNetworkConfiguration [-IPv4AddressOrigin] <PossibleIPv4Origins> [-TimeoutSec <uint32>] [-IPv4Address <string>] [-IPv4DefaultGateway <string>] [-IPv4SubnetMask <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PcsvDeviceNetworkConfiguration [-TargetAddress] <string> [-Credential] <pscredential> [-ManagementProtocol] <ManagementProtocol> [[-Port] <uint16>] [-IPv4AddressOrigin] <PossibleIPv4Origins> [-Authentication <Authentication>] [-UseSSL] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-TimeoutSec <uint32>] [-IPv4Address <string>] [-IPv4DefaultGateway <string>] [-IPv4SubnetMask <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PcsvDeviceNetworkConfiguration [-IPv4AddressOrigin] <PossibleIPv4Origins> -InputObject <CimInstance#MSFT_PCSVDevice[]> [-IPv4Address <string>] [-IPv4DefaultGateway <string>] [-IPv4SubnetMask <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Authentication <Authentication> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: true)
- IPv4Address <string> (Required: false)
- IPv4AddressOrigin <PossibleIPv4Origins> (Required: true)
- IPv4DefaultGateway <string> (Required: false)
- IPv4SubnetMask <string> (Required: false)
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

### Set-PcsvDeviceUserPassword

```powershell
Set-PcsvDeviceUserPassword [-CurrentCredential] <pscredential> [-NewPassword] <securestring> [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PcsvDeviceUserPassword [-TargetAddress] <string> [-Credential] <pscredential> [-ManagementProtocol] <ManagementProtocol> [[-Port] <uint16>] [-CurrentCredential] <pscredential> [-NewPassword] <securestring> [-Authentication <Authentication>] [-UseSSL] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PcsvDeviceUserPassword [-CurrentCredential] <pscredential> [-NewPassword] <securestring> -InputObject <CimInstance#MSFT_PCSVDevice[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Authentication <Authentication> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: true)
- CurrentCredential <pscredential> (Required: true)
- InputObject <CimInstance#MSFT_PCSVDevice[]> (Required: true)
- ManagementProtocol <ManagementProtocol> (Required: true)
- NewPassword <securestring> (Required: true)
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

### Set-PhysicalDisk

```powershell
Set-PhysicalDisk -UniqueId <string> [-NewFriendlyName <string>] [-Description <string>] [-Usage <Usage>] [-MediaType <MediaType>] [-StorageEnclosureId <string>] [-StorageScaleUnitId <string>] [-IsHidden <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-PhysicalDisk -InputObject <ciminstance[]> [-NewFriendlyName <string>] [-Description <string>] [-Usage <Usage>] [-MediaType <MediaType>] [-StorageEnclosureId <string>] [-StorageScaleUnitId <string>] [-IsHidden <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-PhysicalDisk [-FriendlyName] <string> [-NewFriendlyName <string>] [-Description <string>] [-Usage <Usage>] [-MediaType <MediaType>] [-StorageEnclosureId <string>] [-StorageScaleUnitId <string>] [-IsHidden <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Description <string> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <ciminstance[]> (Required: true)
- IsHidden <bool> (Required: false)
- MediaType <MediaType> (Required: false)
- NewFriendlyName <string> (Required: false)
- StorageEnclosureId <string> (Required: false)
- StorageScaleUnitId <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
- Usage <Usage> (Required: false)
```

### Set-PrintConfiguration

```powershell
Set-PrintConfiguration [-PrinterObject] <CimInstance#MSFT_Printer> [-Collate <bool>] [-Color <bool>] [-DuplexingMode <DuplexingModeEnum>] [-PaperSize <PaperSizeEnum>] [-PrintTicketXml <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PrintConfiguration [-PrinterName] <string> [-Collate <bool>] [-Color <bool>] [-DuplexingMode <DuplexingModeEnum>] [-PaperSize <PaperSizeEnum>] [-PrintTicketXml <string>] [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PrintConfiguration [-InputObject] <CimInstance#MSFT_PrinterConfiguration> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Collate <bool> (Required: false)
- Color <bool> (Required: false)
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- DuplexingMode <DuplexingModeEnum> (Required: false)
- InputObject <CimInstance#MSFT_PrinterConfiguration> (Required: true)
- PaperSize <PaperSizeEnum> (Required: false)
- PrintTicketXml <string> (Required: false)
- PrinterName <string> (Required: true)
- PrinterObject <CimInstance#MSFT_Printer> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-Printer

```powershell
Set-Printer [-Name] <string[]> [-ComputerName <string>] [-Comment <string>] [-Datatype <string>] [-DriverName <string>] [-UntilTime <uint32>] [-KeepPrintedJobs <bool>] [-Location <string>] [-PermissionSDDL <string>] [-PortName <string>] [-PrintProcessor <string>] [-Priority <uint32>] [-Published <bool>] [-RenderingMode <RenderingModeEnum>] [-SeparatorPageFile <string>] [-Shared <bool>] [-ShareName <string>] [-StartTime <uint32>] [-DisableBranchOfficeLogging <bool>] [-BranchOfficeOfflineLogSizeMB <uint32>] [-WorkflowPolicy <WorkflowPolicyEnum>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Printer -InputObject <CimInstance#MSFT_Printer[]> [-Comment <string>] [-Datatype <string>] [-DriverName <string>] [-UntilTime <uint32>] [-KeepPrintedJobs <bool>] [-Location <string>] [-PermissionSDDL <string>] [-PortName <string>] [-PrintProcessor <string>] [-Priority <uint32>] [-Published <bool>] [-RenderingMode <RenderingModeEnum>] [-SeparatorPageFile <string>] [-Shared <bool>] [-ShareName <string>] [-StartTime <uint32>] [-DisableBranchOfficeLogging <bool>] [-BranchOfficeOfflineLogSizeMB <uint32>] [-WorkflowPolicy <WorkflowPolicyEnum>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BranchOfficeOfflineLogSizeMB <uint32> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Comment <string> (Required: false)
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- Datatype <string> (Required: false)
- DisableBranchOfficeLogging <bool> (Required: false)
- DriverName <string> (Required: false)
- InputObject <CimInstance#MSFT_Printer[]> (Required: true)
- KeepPrintedJobs <bool> (Required: false)
- Location <string> (Required: false)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- PermissionSDDL <string> (Required: false)
- PortName <string> (Required: false)
- PrintProcessor <string> (Required: false)
- Priority <uint32> (Required: false)
- Published <bool> (Required: false)
- RenderingMode <RenderingModeEnum> (Required: false)
- SeparatorPageFile <string> (Required: false)
- ShareName <string> (Required: false)
- Shared <bool> (Required: false)
- StartTime <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- UntilTime <uint32> (Required: false)
- WhatIf <switch> (Required: false)
- WorkflowPolicy <WorkflowPolicyEnum> (Required: false)
```

### Set-PrinterProperty

```powershell
Set-PrinterProperty [-PrinterName] <string> [-PropertyName] <string> [-Value] <string> [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PrinterProperty [-PrinterObject] <CimInstance#MSFT_Printer> [-PropertyName] <string> [-Value] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PrinterProperty [-InputObject] <CimInstance#MSFT_PrinterProperty> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_PrinterProperty> (Required: true)
- PrinterName <string> (Required: true)
- PrinterObject <CimInstance#MSFT_Printer> (Required: true)
- PropertyName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- Value <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-ProcessMitigation

```powershell
SYNOPSIS:
Commands to enable and disable process mitigations or set them in bulk from an XML file.

DESCRIPTION:
Used to turn on and off various process mitigation settings. Can also apply (Or Validate) an XML file to apply settings for many processes at once.

PARAMETERS:

- Disable <String[]> (Required: false)
- EAFModules <String[]> (Required: false)
- Enable <String[]> (Required: false)
- Force <String> (Required: false)
- IsValid <SwitchParameter> (Required: false)
- Name <String> (Required: false)
- PolicyFilePath <String> (Required: true)
- Remove <SwitchParameter> (Required: false)
- Reset <SwitchParameter> (Required: false)
- System <SwitchParameter> (Required: false)

```

### Set-PSBreakpoint

```powershell
Set-PSBreakpoint [-Script] <string[]> [-Line] <int[]> [[-Column] <int>] [-Action <scriptblock>] [<CommonParameters>]

Set-PSBreakpoint [[-Script] <string[]>] -Command <string[]> [-Action <scriptblock>] [<CommonParameters>]

Set-PSBreakpoint [[-Script] <string[]>] -Variable <string[]> [-Action <scriptblock>] [-Mode <VariableAccessMode>] [<CommonParameters>]

PARAMETERS:
- Action <scriptblock> (Required: false)
- Column <int> (Required: false)
- Command <string[]> (Required: true)
- Line <int[]> (Required: true)
- Mode <VariableAccessMode> (Required: false)
- Script <string[]> (Required: true)
- Variable <string[]> (Required: true)
```

### Set-PSDebug

```powershell
Set-PSDebug [-Trace <int>] [-Step] [-Strict] [<CommonParameters>]

Set-PSDebug [-Off] [<CommonParameters>]

PARAMETERS:
- Off <switch> (Required: false)
- Step <switch> (Required: false)
- Strict <switch> (Required: false)
- Trace <int> (Required: false)
```

### Set-PSReadLineKeyHandler

```powershell
Set-PSReadLineKeyHandler [-Chord] <string[]> [-ScriptBlock] <scriptblock> [-BriefDescription <string>] [-Description <string>] [-ViMode <ViMode>] [<CommonParameters>]

Set-PSReadLineKeyHandler [-Chord] <string[]> [-Function] <string> [-ViMode <ViMode>] [<CommonParameters>]

PARAMETERS:
- BriefDescription <string> (Required: false)
- Chord <string[]> (Required: true)
- Description <string> (Required: false)
- Function <string> (Required: true)
- ScriptBlock <scriptblock> (Required: true)
- ViMode <ViMode> (Required: false)
```

### Set-PSReadLineOption

```powershell
Set-PSReadLineOption [-EditMode <EditMode>] [-ContinuationPrompt <string>] [-HistoryNoDuplicates] [-AddToHistoryHandler <Func[string,Object]>] [-CommandValidationHandler <Action[CommandAst]>] [-HistorySearchCursorMovesToEnd] [-MaximumHistoryCount <int>] [-MaximumKillRingCount <int>] [-ShowToolTips] [-ExtraPromptLineCount <int>] [-DingTone <int>] [-DingDuration <int>] [-BellStyle <BellStyle>] [-CompletionQueryItems <int>] [-WordDelimiters <string>] [-HistorySearchCaseSensitive] [-HistorySaveStyle <HistorySaveStyle>] [-HistorySavePath <string>] [-AnsiEscapeTimeout <int>] [-PromptText <string[]>] [-ViModeIndicator <ViModeStyle>] [-ViModeChangeHandler <scriptblock>] [-Colors <hashtable>] [<CommonParameters>]

PARAMETERS:
- AddToHistoryHandler <Func[string,Object]> (Required: false)
- AnsiEscapeTimeout <int> (Required: false)
- BellStyle <BellStyle> (Required: false)
- Colors <hashtable> (Required: false)
- CommandValidationHandler <Action[CommandAst]> (Required: false)
- CompletionQueryItems <int> (Required: false)
- ContinuationPrompt <string> (Required: false)
- DingDuration <int> (Required: false)
- DingTone <int> (Required: false)
- EditMode <EditMode> (Required: false)
- ExtraPromptLineCount <int> (Required: false)
- HistoryNoDuplicates <switch> (Required: false)
- HistorySavePath <string> (Required: false)
- HistorySaveStyle <HistorySaveStyle> (Required: false)
- HistorySearchCaseSensitive <switch> (Required: false)
- HistorySearchCursorMovesToEnd <switch> (Required: false)
- MaximumHistoryCount <int> (Required: false)
- MaximumKillRingCount <int> (Required: false)
- PromptText <string[]> (Required: false)
- ShowToolTips <switch> (Required: false)
- ViModeChangeHandler <scriptblock> (Required: false)
- ViModeIndicator <ViModeStyle> (Required: false)
- WordDelimiters <string> (Required: false)
```

### Set-PSRepository

```powershell
Set-PSRepository [-Name] <string> [[-SourceLocation] <uri>] [-PublishLocation <uri>] [-ScriptSourceLocation <uri>] [-ScriptPublishLocation <uri>] [-Credential <pscredential>] [-InstallationPolicy <string>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-PackageManagementProvider <string>] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- InstallationPolicy <string> (Required: false)
- Name <string> (Required: true)
- PackageManagementProvider <string> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- PublishLocation <uri> (Required: false)
- ScriptPublishLocation <uri> (Required: false)
- ScriptSourceLocation <uri> (Required: false)
- SourceLocation <uri> (Required: false)
```

### Set-PSSessionConfiguration

```powershell
Set-PSSessionConfiguration [-Name] <string> [-ApplicationBase <string>] [-RunAsCredential <pscredential>] [-ThreadApartmentState <ApartmentState>] [-ThreadOptions <PSThreadOptions>] [-AccessMode <PSSessionConfigurationAccessMode>] [-UseSharedProcess] [-StartupScript <string>] [-MaximumReceivedDataSizePerCommandMB <double>] [-MaximumReceivedObjectSizeMB <double>] [-SecurityDescriptorSddl <string>] [-ShowSecurityDescriptorUI] [-Force] [-NoServiceRestart] [-PSVersion <version>] [-SessionTypeOption <PSSessionTypeOption>] [-TransportOption <PSTransportOption>] [-ModulesToImport <Object[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PSSessionConfiguration [-Name] <string> -Path <string> [-RunAsCredential <pscredential>] [-ThreadApartmentState <ApartmentState>] [-ThreadOptions <PSThreadOptions>] [-AccessMode <PSSessionConfigurationAccessMode>] [-UseSharedProcess] [-StartupScript <string>] [-MaximumReceivedDataSizePerCommandMB <double>] [-MaximumReceivedObjectSizeMB <double>] [-SecurityDescriptorSddl <string>] [-ShowSecurityDescriptorUI] [-Force] [-NoServiceRestart] [-TransportOption <PSTransportOption>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-PSSessionConfiguration [-Name] <string> [-AssemblyName] <string> [-ConfigurationTypeName] <string> [-ApplicationBase <string>] [-RunAsCredential <pscredential>] [-ThreadApartmentState <ApartmentState>] [-ThreadOptions <PSThreadOptions>] [-AccessMode <PSSessionConfigurationAccessMode>] [-UseSharedProcess] [-StartupScript <string>] [-MaximumReceivedDataSizePerCommandMB <double>] [-MaximumReceivedObjectSizeMB <double>] [-SecurityDescriptorSddl <string>] [-ShowSecurityDescriptorUI] [-Force] [-NoServiceRestart] [-PSVersion <version>] [-SessionTypeOption <PSSessionTypeOption>] [-TransportOption <PSTransportOption>] [-ModulesToImport <Object[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- RunAsCredential <pscredential> (Required: false)
- SecurityDescriptorSddl <string> (Required: false)
- SessionTypeOption <PSSessionTypeOption> (Required: false)
- ShowSecurityDescriptorUI <switch> (Required: false)
- StartupScript <string> (Required: false)
- ThreadApartmentState <ApartmentState> (Required: false)
- ThreadOptions <PSThreadOptions> (Required: false)
- TransportOption <PSTransportOption> (Required: false)
- UseSharedProcess <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-ReFSDedupSchedule

```powershell
Set-ReFSDedupSchedule [-Volume] <string> -Start <datetime> -Days <DaysOfWeek> [-Duration <timespan>] [-CpuPercentage <uint32>] [-ConcurrentOpenFiles <uint32>] [-MinimumLastModifiedTimeHours <int>] [-ExcludeFileExtension <string[]>] [-ExcludeFolder <string[]>] [-CompressionFormat <Format>] [-CompressionLevel <uint16>] [-CompressionChunkSize <uint32>] [-CompressionTuning <uint32>] [-RecompressionTuning <uint32>] [-DecompressionTuning <uint32>] [<CommonParameters>]

PARAMETERS:
- CompressionChunkSize <uint32> (Required: false)
- CompressionFormat <Format> (Required: false)
- CompressionLevel <uint16> (Required: false)
- CompressionTuning <uint32> (Required: false)
- ConcurrentOpenFiles <uint32> (Required: false)
- CpuPercentage <uint32> (Required: false)
- Days <DaysOfWeek> (Required: true)
- DecompressionTuning <uint32> (Required: false)
- Duration <timespan> (Required: false)
- ExcludeFileExtension <string[]> (Required: false)
- ExcludeFolder <string[]> (Required: false)
- MinimumLastModifiedTimeHours <int> (Required: false)
- RecompressionTuning <uint32> (Required: false)
- Start <datetime> (Required: true)
- Volume <string> (Required: true)
```

### Set-ReFSDedupScrubSchedule

```powershell
Set-ReFSDedupScrubSchedule [-Volume] <string> -Start <datetime> -Days <DaysOfWeek> -WeeksInterval <uint16> [-DedupDataOnly <bool>] [<CommonParameters>]

PARAMETERS:
- Days <DaysOfWeek> (Required: true)
- DedupDataOnly <bool> (Required: false)
- Start <datetime> (Required: true)
- Volume <string> (Required: true)
- WeeksInterval <uint16> (Required: true)
```

### Set-ResiliencySetting

```powershell
Set-ResiliencySetting -Name <string[]> -StoragePool <CimInstance#MSFT_StoragePool> [-NumberOfDataCopiesDefault <uint16>] [-PhysicalDiskRedundancyDefault <uint16>] [-NumberOfColumnsDefault <uint16>] [-AutoNumberOfColumns] [-InterleaveDefault <uint64>] [-NumberOfGroupsDefault <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Set-ResiliencySetting -UniqueId <string[]> [-NumberOfDataCopiesDefault <uint16>] [-PhysicalDiskRedundancyDefault <uint16>] [-NumberOfColumnsDefault <uint16>] [-AutoNumberOfColumns] [-InterleaveDefault <uint64>] [-NumberOfGroupsDefault <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Set-ResiliencySetting -InputObject <CimInstance#MSFT_ResiliencySetting[]> [-NumberOfDataCopiesDefault <uint16>] [-PhysicalDiskRedundancyDefault <uint16>] [-NumberOfColumnsDefault <uint16>] [-AutoNumberOfColumns] [-InterleaveDefault <uint64>] [-NumberOfGroupsDefault <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AutoNumberOfColumns <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_ResiliencySetting[]> (Required: true)
- InterleaveDefault <uint64> (Required: false)
- Name <string[]> (Required: true)
- NumberOfColumnsDefault <uint16> (Required: false)
- NumberOfDataCopiesDefault <uint16> (Required: false)
- NumberOfGroupsDefault <uint16> (Required: false)
- PassThru <switch> (Required: false)
- PhysicalDiskRedundancyDefault <uint16> (Required: false)
- StoragePool <CimInstance#MSFT_StoragePool> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
```

### Set-RuleOption

```powershell
Set-RuleOption [-FilePath] <string> [-Option] <int> [-Delete] [<CommonParameters>]

Set-RuleOption -Help [<CommonParameters>]

PARAMETERS:
- Delete <switch> (Required: false)
- FilePath <string> (Required: true)
- Help <switch> (Required: true)
- Option <int> (Required: true)
```

### Set-ScheduledJob

```powershell
Set-ScheduledJob [-InputObject] <ScheduledJobDefinition> [-Name <string>] [-ScriptBlock <scriptblock>] [-Trigger <ScheduledJobTrigger[]>] [-InitializationScript <scriptblock>] [-RunAs32] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-ScheduledJobOption <ScheduledJobOptions>] [-MaxResultCount <int>] [-PassThru] [-ArgumentList <Object[]>] [-RunNow] [-RunEvery <timespan>] [<CommonParameters>]

Set-ScheduledJob [-InputObject] <ScheduledJobDefinition> [-Name <string>] [-FilePath <string>] [-Trigger <ScheduledJobTrigger[]>] [-InitializationScript <scriptblock>] [-RunAs32] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-ScheduledJobOption <ScheduledJobOptions>] [-MaxResultCount <int>] [-PassThru] [-ArgumentList <Object[]>] [-RunNow] [-RunEvery <timespan>] [<CommonParameters>]

Set-ScheduledJob [-InputObject] <ScheduledJobDefinition> [-ClearExecutionHistory] [-PassThru] [<CommonParameters>]

PARAMETERS:
- ArgumentList <Object[]> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- ClearExecutionHistory <switch> (Required: false)
- Credential <pscredential> (Required: false)
- FilePath <string> (Required: false)
- InitializationScript <scriptblock> (Required: false)
- InputObject <ScheduledJobDefinition> (Required: true)
- MaxResultCount <int> (Required: false)
- Name <string> (Required: false)
- PassThru <switch> (Required: false)
- RunAs32 <switch> (Required: false)
- RunEvery <timespan> (Required: false)
- RunNow <switch> (Required: false)
- ScheduledJobOption <ScheduledJobOptions> (Required: false)
- ScriptBlock <scriptblock> (Required: false)
- Trigger <ScheduledJobTrigger[]> (Required: false)
```

### Set-ScheduledJobOption

```powershell
Set-ScheduledJobOption [-InputObject] <ScheduledJobOptions> [-PassThru] [-RunElevated] [-HideInTaskScheduler] [-RestartOnIdleResume] [-MultipleInstancePolicy <TaskMultipleInstancePolicy>] [-DoNotAllowDemandStart] [-RequireNetwork] [-StopIfGoingOffIdle] [-WakeToRun] [-ContinueIfGoingOnBattery] [-StartIfOnBattery] [-IdleTimeout <timespan>] [-IdleDuration <timespan>] [-StartIfIdle] [<CommonParameters>]

PARAMETERS:
- ContinueIfGoingOnBattery <switch> (Required: false)
- DoNotAllowDemandStart <switch> (Required: false)
- HideInTaskScheduler <switch> (Required: false)
- IdleDuration <timespan> (Required: false)
- IdleTimeout <timespan> (Required: false)
- InputObject <ScheduledJobOptions> (Required: true)
- MultipleInstancePolicy <TaskMultipleInstancePolicy> (Required: false)
- PassThru <switch> (Required: false)
- RequireNetwork <switch> (Required: false)
- RestartOnIdleResume <switch> (Required: false)
- RunElevated <switch> (Required: false)
- StartIfIdle <switch> (Required: false)
- StartIfOnBattery <switch> (Required: false)
- StopIfGoingOffIdle <switch> (Required: false)
- WakeToRun <switch> (Required: false)
```

### Set-ScheduledTask

```powershell
Set-ScheduledTask [-TaskName] <string> [[-TaskPath] <string>] [[-Action] <CimInstance#MSFT_TaskAction[]>] [[-Trigger] <CimInstance#MSFT_TaskTrigger[]>] [[-Settings] <CimInstance#MSFT_TaskSettings>] [[-User] <string>] [[-Password] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-ScheduledTask [-InputObject] <CimInstance#MSFT_ScheduledTask> [[-Password] <string>] [[-User] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-ScheduledTask [-TaskName] <string> [[-TaskPath] <string>] [[-Action] <CimInstance#MSFT_TaskAction[]>] [[-Trigger] <CimInstance#MSFT_TaskTrigger[]>] [[-Settings] <CimInstance#MSFT_TaskSettings>] [[-Principal] <CimInstance#MSFT_TaskPrincipal>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Action <CimInstance#MSFT_TaskAction[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_ScheduledTask> (Required: true)
- Password <string> (Required: false)
- Principal <CimInstance#MSFT_TaskPrincipal> (Required: false)
- Settings <CimInstance#MSFT_TaskSettings> (Required: false)
- TaskName <string> (Required: true)
- TaskPath <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- Trigger <CimInstance#MSFT_TaskTrigger[]> (Required: false)
- User <string> (Required: false)
```

### Set-SecureBootUEFI

```powershell
Set-SecureBootUEFI -Name <string> -Time <string> [-ContentFilePath <string>] [-SignedFilePath <string>] [-AppendWrite] [-OutputFilePath <string>] [<CommonParameters>]

Set-SecureBootUEFI -Name <string> -Time <string> [-Content <byte[]>] [-SignedFilePath <string>] [-AppendWrite] [-OutputFilePath <string>] [<CommonParameters>]

PARAMETERS:
- AppendWrite <switch> (Required: false)
- Content <byte[]> (Required: false)
- ContentFilePath <string> (Required: false)
- Name <string> (Required: true)
- OutputFilePath <string> (Required: false)
- SignedFilePath <string> (Required: false)
- Time <string> (Required: true)
```

### Set-Service

```powershell
Set-Service [-Name] <string> [-ComputerName <string[]>] [-DisplayName <string>] [-Description <string>] [-StartupType <ServiceStartMode>] [-Status <string>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-Service [-ComputerName <string[]>] [-DisplayName <string>] [-Description <string>] [-StartupType <ServiceStartMode>] [-Status <string>] [-InputObject <ServiceController>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- DisplayName <string> (Required: false)
- InputObject <ServiceController> (Required: false)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- StartupType <ServiceStartMode> (Required: false)
- Status <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-SmbBandwidthLimit

```powershell
Set-SmbBandwidthLimit -Category <BandwidthLimitCategory> -BytesPerSecond <uint64> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BytesPerSecond <uint64> (Required: true)
- Category <BandwidthLimitCategory> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-SmbClientCertificateMapping

```powershell
Set-SmbClientCertificateMapping [-Namespace] <string> [-Flags <Flags>] [-Thumbprint <string>] [-StoreName <string>] [-IssuerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Flags <Flags> (Required: false)
- IssuerName <string> (Required: false)
- Namespace <string> (Required: true)
- StoreName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- Thumbprint <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-SmbClientConfiguration

```powershell
Set-SmbClientConfiguration [-AuditInsecureGuestLogon <bool>] [-AuditServerDoesNotSupportEncryption <bool>] [-AuditServerDoesNotSupportSigning <bool>] [-BlockNTLM <bool>] [-BlockNTLMServerExceptionList <string>] [-CompressibilitySamplingSize <uint64>] [-CompressibleThreshold <uint64>] [-ConnectionCountPerRssNetworkInterface <uint32>] [-DirectoryCacheEntriesMax <uint32>] [-DirectoryCacheEntrySizeMax <uint32>] [-DirectoryCacheLifetime <uint32>] [-DisableCompression <bool>] [-DisabledSMBQUICServerExceptionList <string>] [-DormantFileLimit <uint32>] [-EnableBandwidthThrottling <bool>] [-EnableByteRangeLockingOnReadOnlyFiles <bool>] [-EnableCompressibilitySampling <bool>] [-EnableInsecureGuestLogons <bool>] [-EnableLargeMtu <bool>] [-EnableLoadBalanceScaleOut <bool>] [-EnableMailslots <bool>] [-EnableMultiChannel <bool>] [-EnableSecuritySignature <bool>] [-EnableSMBQUIC <bool>] [-EncryptionCiphers <string>] [-ExtendedSessionTimeout <uint32>] [-FileInfoCacheEntriesMax <uint32>] [-FileInfoCacheLifetime <uint32>] [-FileNotFoundCacheEntriesMax <uint32>] [-FileNotFoundCacheLifetime <uint32>] [-ForceSMBEncryptionOverQuic <bool>] [-InvalidAuthenticationCacheLifetime <uint32>] [-KeepConn <uint32>] [-MaxCmds <uint32>] [-MaximumConnectionCountPerServer <uint32>] [-OplocksDisabled <bool>] [-RequestCompression <bool>] [-RequireEncryption <bool>] [-RequireSecuritySignature <bool>] [-SessionTimeout <uint32>] [-SkipCertificateCheck <bool>] [-Smb2DialectMax <Smb2DialectMax>] [-Smb2DialectMin <Smb2DialectMin>] [-UseOpportunisticLocking <bool>] [-WindowSizeThreshold <uint32>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AuditInsecureGuestLogon <bool> (Required: false)
- AuditServerDoesNotSupportEncryption <bool> (Required: false)
- AuditServerDoesNotSupportSigning <bool> (Required: false)
- BlockNTLM <bool> (Required: false)
- BlockNTLMServerExceptionList <string> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CompressibilitySamplingSize <uint64> (Required: false)
- CompressibleThreshold <uint64> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionCountPerRssNetworkInterface <uint32> (Required: false)
- DirectoryCacheEntriesMax <uint32> (Required: false)
- DirectoryCacheEntrySizeMax <uint32> (Required: false)
- DirectoryCacheLifetime <uint32> (Required: false)
- DisableCompression <bool> (Required: false)
- DisabledSMBQUICServerExceptionList <string> (Required: false)
- DormantFileLimit <uint32> (Required: false)
- EnableBandwidthThrottling <bool> (Required: false)
- EnableByteRangeLockingOnReadOnlyFiles <bool> (Required: false)
- EnableCompressibilitySampling <bool> (Required: false)
- EnableInsecureGuestLogons <bool> (Required: false)
- EnableLargeMtu <bool> (Required: false)
- EnableLoadBalanceScaleOut <bool> (Required: false)
- EnableMailslots <bool> (Required: false)
- EnableMultiChannel <bool> (Required: false)
- EnableSMBQUIC <bool> (Required: false)
- EnableSecuritySignature <bool> (Required: false)
- EncryptionCiphers <string> (Required: false)
- ExtendedSessionTimeout <uint32> (Required: false)
- FileInfoCacheEntriesMax <uint32> (Required: false)
- FileInfoCacheLifetime <uint32> (Required: false)
- FileNotFoundCacheEntriesMax <uint32> (Required: false)
- FileNotFoundCacheLifetime <uint32> (Required: false)
- Force <switch> (Required: false)
- ForceSMBEncryptionOverQuic <bool> (Required: false)
- InvalidAuthenticationCacheLifetime <uint32> (Required: false)
- KeepConn <uint32> (Required: false)
- MaxCmds <uint32> (Required: false)
- MaximumConnectionCountPerServer <uint32> (Required: false)
- OplocksDisabled <bool> (Required: false)
- RequestCompression <bool> (Required: false)
- RequireEncryption <bool> (Required: false)
- RequireSecuritySignature <bool> (Required: false)
- SessionTimeout <uint32> (Required: false)
- SkipCertificateCheck <bool> (Required: false)
- Smb2DialectMax <Smb2DialectMax> (Required: false)
- Smb2DialectMin <Smb2DialectMin> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseOpportunisticLocking <bool> (Required: false)
- WhatIf <switch> (Required: false)
- WindowSizeThreshold <uint32> (Required: false)
```

### Set-SmbPathAcl

```powershell
Set-SmbPathAcl [-ShareName] <string> [[-ScopeName] <string>] [<CommonParameters>]

PARAMETERS:
- ScopeName <string> (Required: false)
- ShareName <string> (Required: true)
```

### Set-SmbServerAlternativePort

```powershell
Set-SmbServerAlternativePort [-TransportType] <TransportType> [-Port] <uint16> [-EnableInstances] <Instance> [[-DisableInstances] <Instance>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DisableInstances <Instance> (Required: false)
- EnableInstances <Instance> (Required: true)
- Force <switch> (Required: false)
- Port <uint16> (Required: true)
- ThrottleLimit <int> (Required: false)
- TransportType <TransportType> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-SmbServerCertificateMapping

```powershell
Set-SmbServerCertificateMapping [-Name] <string[]> [-Flags <Flags>] [-Thumbprint <string>] [-StoreName <string>] [-RequireClientAuthentication <bool>] [-SkipClientCertificateAccessCheck <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-SmbServerCertificateMapping -InputObject <CimInstance#MSFT_SmbServerCertificateMapping[]> [-Flags <Flags>] [-Thumbprint <string>] [-StoreName <string>] [-RequireClientAuthentication <bool>] [-SkipClientCertificateAccessCheck <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Flags <Flags> (Required: false)
- InputObject <CimInstance#MSFT_SmbServerCertificateMapping[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- RequireClientAuthentication <bool> (Required: false)
- SkipClientCertificateAccessCheck <bool> (Required: false)
- StoreName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- Thumbprint <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-SmbServerConfiguration

```powershell
Set-SmbServerConfiguration [-AnnounceComment <string>] [-AnnounceServer <bool>] [-AsynchronousCredits <uint32>] [-AuditClientCertificateAccess <bool>] [-AuditClientDoesNotSupportEncryption <bool>] [-AuditClientDoesNotSupportSigning <bool>] [-AuditInsecureGuestLogon <bool>] [-AuditSmb1Access <bool>] [-AutoDisconnectTimeoutInMinutesV1 <uint32>] [-AutoDisconnectTimeoutInSecondsV2 <uint32>] [-AutoShareServer <bool>] [-AutoShareWorkstation <bool>] [-CachedOpenLimit <uint32>] [-EnableDirectoryHandleLeasing <bool>] [-DisableCompression <bool>] [-DisableSmbEncryptionOnSecureConnection <bool>] [-DurableHandleV2TimeoutInSeconds <uint32>] [-EnableAuthenticateUserSharing <bool>] [-EnableAuthRateLimiter <bool>] [-EnableDownlevelTimewarp <bool>] [-EnableForcedLogoff <bool>] [-EnableLeasing <bool>] [-EnableMailslots <bool>] [-EnableMultiChannel <bool>] [-EnableOplocks <bool>] [-EnableSecuritySignature <bool>] [-EnableSMB1Protocol <bool>] [-EnableSMB2Protocol <bool>] [-EnableSMBQUIC <bool>] [-EnableStrictNameChecking <bool>] [-EncryptData <bool>] [-EncryptionCiphers <string>] [-InvalidAuthenticationDelayTimeInMs <uint32>] [-IrpStackSize <uint32>] [-KeepAliveTime <uint32>] [-MaxChannelPerSession <uint32>] [-MaxMpxCount <uint32>] [-MaxSessionPerConnection <uint32>] [-MaxThreadsPerQueue <uint32>] [-MaxWorkItems <uint32>] [-NullSessionPipes <string>] [-NullSessionShares <string>] [-OplockBreakWait <uint32>] [-PendingClientTimeoutInSeconds <uint32>] [-RejectUnencryptedAccess <bool>] [-RequestCompression <bool>] [-RequireSecuritySignature <bool>] [-RestrictNamedpipeAccessViaQuic <bool>] [-ServerHidden <bool>] [-Smb2CreditsMax <uint32>] [-Smb2CreditsMin <uint32>] [-Smb2DialectMax <Smb2DialectMax>] [-Smb2DialectMin <Smb2DialectMin>] [-SmbServerNameHardeningLevel <uint32>] [-TreatHostAsStableStorage <bool>] [-ValidateAliasNotCircular <bool>] [-ValidateShareScope <bool>] [-ValidateShareScopeNotAliased <bool>] [-ValidateTargetName <bool>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AnnounceComment <string> (Required: false)
- AnnounceServer <bool> (Required: false)
- AsJob <switch> (Required: false)
- AsynchronousCredits <uint32> (Required: false)
- AuditClientCertificateAccess <bool> (Required: false)
- AuditClientDoesNotSupportEncryption <bool> (Required: false)
- AuditClientDoesNotSupportSigning <bool> (Required: false)
- AuditInsecureGuestLogon <bool> (Required: false)
- AuditSmb1Access <bool> (Required: false)
- AutoDisconnectTimeoutInMinutesV1 <uint32> (Required: false)
- AutoDisconnectTimeoutInSecondsV2 <uint32> (Required: false)
- AutoShareServer <bool> (Required: false)
- AutoShareWorkstation <bool> (Required: false)
- CachedOpenLimit <uint32> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DisableCompression <bool> (Required: false)
- DisableSmbEncryptionOnSecureConnection <bool> (Required: false)
- DurableHandleV2TimeoutInSeconds <uint32> (Required: false)
- EnableAuthRateLimiter <bool> (Required: false)
- EnableAuthenticateUserSharing <bool> (Required: false)
- EnableDirectoryHandleLeasing <bool> (Required: false)
- EnableDownlevelTimewarp <bool> (Required: false)
- EnableForcedLogoff <bool> (Required: false)
- EnableLeasing <bool> (Required: false)
- EnableMailslots <bool> (Required: false)
- EnableMultiChannel <bool> (Required: false)
- EnableOplocks <bool> (Required: false)
- EnableSMB1Protocol <bool> (Required: false)
- EnableSMB2Protocol <bool> (Required: false)
- EnableSMBQUIC <bool> (Required: false)
- EnableSecuritySignature <bool> (Required: false)
- EnableStrictNameChecking <bool> (Required: false)
- EncryptData <bool> (Required: false)
- EncryptionCiphers <string> (Required: false)
- Force <switch> (Required: false)
- InvalidAuthenticationDelayTimeInMs <uint32> (Required: false)
- IrpStackSize <uint32> (Required: false)
- KeepAliveTime <uint32> (Required: false)
- MaxChannelPerSession <uint32> (Required: false)
- MaxMpxCount <uint32> (Required: false)
- MaxSessionPerConnection <uint32> (Required: false)
- MaxThreadsPerQueue <uint32> (Required: false)
- MaxWorkItems <uint32> (Required: false)
- NullSessionPipes <string> (Required: false)
- NullSessionShares <string> (Required: false)
- OplockBreakWait <uint32> (Required: false)
- PendingClientTimeoutInSeconds <uint32> (Required: false)
- RejectUnencryptedAccess <bool> (Required: false)
- RequestCompression <bool> (Required: false)
- RequireSecuritySignature <bool> (Required: false)
- RestrictNamedpipeAccessViaQuic <bool> (Required: false)
- ServerHidden <bool> (Required: false)
- Smb2CreditsMax <uint32> (Required: false)
- Smb2CreditsMin <uint32> (Required: false)
- Smb2DialectMax <Smb2DialectMax> (Required: false)
- Smb2DialectMin <Smb2DialectMin> (Required: false)
- SmbServerNameHardeningLevel <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- TreatHostAsStableStorage <bool> (Required: false)
- ValidateAliasNotCircular <bool> (Required: false)
- ValidateShareScope <bool> (Required: false)
- ValidateShareScopeNotAliased <bool> (Required: false)
- ValidateTargetName <bool> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-SmbShare

```powershell
Set-SmbShare [-Name] <string[]> [[-ScopeName] <string[]>] [-SmbInstance <SmbInstance>] [-Description <string>] [-ConcurrentUserLimit <uint32>] [-CATimeout <uint32>] [-ContinuouslyAvailable <bool>] [-FolderEnumerationMode <FolderEnumerationMode>] [-CachingMode <CachingMode>] [-SecurityDescriptor <string>] [-EncryptData <bool>] [-CompressData <bool>] [-IsolatedTransport <bool>] [-LeasingMode <LeasingMode>] [-DirectoryHandleLeasing <bool>] [-QoSFlowScope <QoSFlowScope>] [-QoSPolicyId <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-SmbShare -InputObject <CimInstance#MSFT_SMBShare[]> [-Description <string>] [-ConcurrentUserLimit <uint32>] [-CATimeout <uint32>] [-ContinuouslyAvailable <bool>] [-FolderEnumerationMode <FolderEnumerationMode>] [-CachingMode <CachingMode>] [-SecurityDescriptor <string>] [-EncryptData <bool>] [-CompressData <bool>] [-IsolatedTransport <bool>] [-LeasingMode <LeasingMode>] [-DirectoryHandleLeasing <bool>] [-QoSFlowScope <QoSFlowScope>] [-QoSPolicyId <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CATimeout <uint32> (Required: false)
- CachingMode <CachingMode> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CompressData <bool> (Required: false)
- ConcurrentUserLimit <uint32> (Required: false)
- Confirm <switch> (Required: false)
- ContinuouslyAvailable <bool> (Required: false)
- Description <string> (Required: false)
- DirectoryHandleLeasing <bool> (Required: false)
- EncryptData <bool> (Required: false)
- FolderEnumerationMode <FolderEnumerationMode> (Required: false)
- Force <switch> (Required: false)
- InputObject <CimInstance#MSFT_SMBShare[]> (Required: true)
- IsolatedTransport <bool> (Required: false)
- LeasingMode <LeasingMode> (Required: false)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- QoSFlowScope <QoSFlowScope> (Required: false)
- QoSPolicyId <string> (Required: false)
- ScopeName <string[]> (Required: false)
- SecurityDescriptor <string> (Required: false)
- SmbInstance <SmbInstance> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-StorageBusCache

```powershell
Set-StorageBusCache [[-CacheMetadataReserveBytes] <uint64>] [[-CacheModeHDD] <CacheModeSet>] [[-CacheModeSSD] <CacheModeSet>] [[-CachePageSizeKBytes] <uint32>] [[-SharedCachePercent] <uint32>] [[-ProvisionMode] <ProvisionMode>] [<CommonParameters>]

PARAMETERS:
- CacheMetadataReserveBytes <uint64> (Required: false)
- CacheModeHDD <CacheModeSet> (Required: false)
- CacheModeSSD <CacheModeSet> (Required: false)
- CachePageSizeKBytes <uint32> (Required: false)
- ProvisionMode <ProvisionMode> (Required: false)
- SharedCachePercent <uint32> (Required: false)
```

### Set-StorageBusProfile

```powershell
Set-StorageBusProfile [[-ClaimFlash] <bool>] [[-AutoConfig] <bool>] [<CommonParameters>]

PARAMETERS:
- AutoConfig <bool> (Required: false)
- ClaimFlash <bool> (Required: false)
```

### Set-StorageFileServer

```powershell
Set-StorageFileServer -NewFriendlyName <string> [-FriendlyName <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-StorageFileServer -UniqueId <string[]> -NewFriendlyName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-StorageFileServer -InputObject <CimInstance#MSFT_FileServer[]> -NewFriendlyName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: false)
- InputObject <CimInstance#MSFT_FileServer[]> (Required: true)
- NewFriendlyName <string> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-StorageHealthSetting

```powershell
Set-StorageHealthSetting -InputObject <CimInstance#MSFT_StorageSubSystem> -Name <string> -Value <string> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- InputObject <CimInstance#MSFT_StorageSubSystem> (Required: true)
- Name <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- Value <string> (Required: true)
```

### Set-StoragePool

```powershell
Set-StoragePool -UniqueId <string> [-NewFriendlyName <string>] [-ClearOnDeallocate <bool>] [-IsPowerProtected <bool>] [-RepairPolicy <RepairPolicy>] [-RetireMissingPhysicalDisks <RetireMissingPhysicalDisks>] [-Usage <Usage>] [-OtherUsageDescription <string>] [-ThinProvisioningAlertThresholds <uint16[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StoragePool [-InputObject] <ciminstance[]> [-IsReadOnly <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StoragePool [-InputObject] <ciminstance[]> [-ProvisioningTypeDefault <ProvisioningType>] [-MediaTypeDefault <MediaType>] [-ResiliencySettingNameDefault <string>] [-EnclosureAwareDefault <bool>] [-FaultDomainAwarenessDefault <FaultDomainType>] [-WriteCacheSizeDefault <uint64>] [-AutoWriteCacheSize <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StoragePool [-InputObject] <ciminstance[]> [-NewFriendlyName <string>] [-ClearOnDeallocate <bool>] [-IsPowerProtected <bool>] [-RepairPolicy <RepairPolicy>] [-RetireMissingPhysicalDisks <RetireMissingPhysicalDisks>] [-Usage <Usage>] [-OtherUsageDescription <string>] [-ThinProvisioningAlertThresholds <uint16[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StoragePool [-FriendlyName] <string> [-NewFriendlyName <string>] [-ClearOnDeallocate <bool>] [-IsPowerProtected <bool>] [-RepairPolicy <RepairPolicy>] [-RetireMissingPhysicalDisks <RetireMissingPhysicalDisks>] [-Usage <Usage>] [-OtherUsageDescription <string>] [-ThinProvisioningAlertThresholds <uint16[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StoragePool -Name <string> [-NewFriendlyName <string>] [-ClearOnDeallocate <bool>] [-IsPowerProtected <bool>] [-RepairPolicy <RepairPolicy>] [-RetireMissingPhysicalDisks <RetireMissingPhysicalDisks>] [-Usage <Usage>] [-OtherUsageDescription <string>] [-ThinProvisioningAlertThresholds <uint16[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StoragePool -UniqueId <string> [-IsReadOnly <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StoragePool -UniqueId <string> [-ProvisioningTypeDefault <ProvisioningType>] [-MediaTypeDefault <MediaType>] [-ResiliencySettingNameDefault <string>] [-EnclosureAwareDefault <bool>] [-FaultDomainAwarenessDefault <FaultDomainType>] [-WriteCacheSizeDefault <uint64>] [-AutoWriteCacheSize <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StoragePool -Name <string> [-IsReadOnly <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StoragePool -Name <string> [-ProvisioningTypeDefault <ProvisioningType>] [-MediaTypeDefault <MediaType>] [-ResiliencySettingNameDefault <string>] [-EnclosureAwareDefault <bool>] [-FaultDomainAwarenessDefault <FaultDomainType>] [-WriteCacheSizeDefault <uint64>] [-AutoWriteCacheSize <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StoragePool [-FriendlyName] <string> [-IsReadOnly <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StoragePool [-FriendlyName] <string> [-ProvisioningTypeDefault <ProvisioningType>] [-MediaTypeDefault <MediaType>] [-ResiliencySettingNameDefault <string>] [-EnclosureAwareDefault <bool>] [-FaultDomainAwarenessDefault <FaultDomainType>] [-WriteCacheSizeDefault <uint64>] [-AutoWriteCacheSize <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AutoWriteCacheSize <bool> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClearOnDeallocate <bool> (Required: false)
- EnclosureAwareDefault <bool> (Required: false)
- FaultDomainAwarenessDefault <FaultDomainType> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <ciminstance[]> (Required: true)
- IsPowerProtected <bool> (Required: false)
- IsReadOnly <bool> (Required: false)
- MediaTypeDefault <MediaType> (Required: false)
- Name <string> (Required: true)
- NewFriendlyName <string> (Required: false)
- OtherUsageDescription <string> (Required: false)
- ProvisioningTypeDefault <ProvisioningType> (Required: false)
- RepairPolicy <RepairPolicy> (Required: false)
- ResiliencySettingNameDefault <string> (Required: false)
- RetireMissingPhysicalDisks <RetireMissingPhysicalDisks> (Required: false)
- ThinProvisioningAlertThresholds <uint16[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
- Usage <Usage> (Required: false)
- WriteCacheSizeDefault <uint64> (Required: false)
```

### Set-StorageProvider

```powershell
Set-StorageProvider [-ProviderName] <string[]> [-RemoteSubsystemCacheMode <RemoteSubsystemCacheMode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Set-StorageProvider -ProviderUniqueId <string[]> [-RemoteSubsystemCacheMode <RemoteSubsystemCacheMode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Set-StorageProvider -InputObject <CimInstance#MSFT_StorageProvider[]> [-RemoteSubsystemCacheMode <RemoteSubsystemCacheMode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_StorageProvider[]> (Required: true)
- PassThru <switch> (Required: false)
- ProviderName <string[]> (Required: true)
- ProviderUniqueId <string[]> (Required: true)
- RemoteSubsystemCacheMode <RemoteSubsystemCacheMode> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Set-StorageSetting

```powershell
Set-StorageSetting [-NewDiskPolicy <NewDiskPolicy>] [-ScrubPolicy <ScrubPolicy>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- NewDiskPolicy <NewDiskPolicy> (Required: false)
- ScrubPolicy <ScrubPolicy> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Set-StorageSubSystem

```powershell
Set-StorageSubSystem -UniqueId <string> [-Description <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageSubSystem [-InputObject] <ciminstance[]> [-AutomaticClusteringEnabled <bool>] [-VirtualDiskRepairQueueDepth <RepairPriority>] [-FaultDomainAwarenessDefault <FaultDomainType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageSubSystem [-InputObject] <ciminstance[]> [-Description <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageSubSystem -Name <string> [-Description <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageSubSystem [-FriendlyName] <string> [-Description <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageSubSystem -UniqueId <string> [-AutomaticClusteringEnabled <bool>] [-VirtualDiskRepairQueueDepth <RepairPriority>] [-FaultDomainAwarenessDefault <FaultDomainType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageSubSystem [-FriendlyName] <string> [-AutomaticClusteringEnabled <bool>] [-VirtualDiskRepairQueueDepth <RepairPriority>] [-FaultDomainAwarenessDefault <FaultDomainType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageSubSystem -Name <string> [-AutomaticClusteringEnabled <bool>] [-VirtualDiskRepairQueueDepth <RepairPriority>] [-FaultDomainAwarenessDefault <FaultDomainType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AutomaticClusteringEnabled <bool> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Description <string> (Required: false)
- FaultDomainAwarenessDefault <FaultDomainType> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <ciminstance[]> (Required: true)
- Name <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
- VirtualDiskRepairQueueDepth <RepairPriority> (Required: false)
```

### Set-StorageTier

```powershell
Set-StorageTier -UniqueId <string> [-NewFriendlyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageTier -InputObject <ciminstance[]> [-Description <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageTier -InputObject <ciminstance[]> [-ProvisioningType <ProvisioningType>] [-AllocationUnitSize <uint64>] [-MediaType <MediaType>] [-FaultDomainAwareness <FaultDomainType>] [-ColumnIsolation <FaultDomainType>] [-ResiliencySettingName <string>] [-Usage <StorageTierUsage>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfGroups <uint16>] [-NumberOfColumns <uint16>] [-Interleave <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageTier -InputObject <ciminstance[]> [-NewFriendlyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageTier [-FriendlyName] <string> [-NewFriendlyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageTier [-FriendlyName] <string> [-ProvisioningType <ProvisioningType>] [-AllocationUnitSize <uint64>] [-MediaType <MediaType>] [-FaultDomainAwareness <FaultDomainType>] [-ColumnIsolation <FaultDomainType>] [-ResiliencySettingName <string>] [-Usage <StorageTierUsage>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfGroups <uint16>] [-NumberOfColumns <uint16>] [-Interleave <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageTier -UniqueId <string> [-ProvisioningType <ProvisioningType>] [-AllocationUnitSize <uint64>] [-MediaType <MediaType>] [-FaultDomainAwareness <FaultDomainType>] [-ColumnIsolation <FaultDomainType>] [-ResiliencySettingName <string>] [-Usage <StorageTierUsage>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfGroups <uint16>] [-NumberOfColumns <uint16>] [-Interleave <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageTier [-FriendlyName] <string> [-Description <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-StorageTier -UniqueId <string> [-Description <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AllocationUnitSize <uint64> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ColumnIsolation <FaultDomainType> (Required: false)
- Description <string> (Required: false)
- FaultDomainAwareness <FaultDomainType> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <ciminstance[]> (Required: true)
- Interleave <uint64> (Required: false)
- MediaType <MediaType> (Required: false)
- NewFriendlyName <string> (Required: false)
- NumberOfColumns <uint16> (Required: false)
- NumberOfDataCopies <uint16> (Required: false)
- NumberOfGroups <uint16> (Required: false)
- PhysicalDiskRedundancy <uint16> (Required: false)
- ProvisioningType <ProvisioningType> (Required: false)
- ResiliencySettingName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
- Usage <StorageTierUsage> (Required: false)
```

### Set-StrictMode

```powershell
Set-StrictMode -Version <version> [<CommonParameters>]

Set-StrictMode -Off [<CommonParameters>]

PARAMETERS:
- Off <switch> (Required: true)
- Version <version> (Required: true)
```

### Set-SystemPreferredUILanguage

```powershell
Set-SystemPreferredUILanguage [-Language] <string> [-PassThru] [<CommonParameters>]

PARAMETERS:
- Language <string> (Required: true)
- PassThru <switch> (Required: false)
```

### Set-TestInconclusive

```powershell
Set-TestInconclusive [[-Message] <string>]

PARAMETERS:
- Message <string> (Required: false)
```

### Set-TimeZone

```powershell
Set-TimeZone [-Name] <string> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-TimeZone -Id <string> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-TimeZone [-InputObject] <TimeZoneInfo> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Id <string> (Required: true)
- InputObject <TimeZoneInfo> (Required: true)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-TpmOwnerAuth

```powershell
Set-TpmOwnerAuth -File <string> -NewFile <string> [<CommonParameters>]

Set-TpmOwnerAuth -File <string> -NewOwnerAuthorization <string> [<CommonParameters>]

Set-TpmOwnerAuth [[-OwnerAuthorization] <string>] -NewOwnerAuthorization <string> [<CommonParameters>]

Set-TpmOwnerAuth [[-OwnerAuthorization] <string>] -NewFile <string> [<CommonParameters>]

PARAMETERS:
- File <string> (Required: true)
- NewFile <string> (Required: true)
- NewOwnerAuthorization <string> (Required: true)
- OwnerAuthorization <string> (Required: false)
```

### Set-TraceSource

```powershell
Set-TraceSource [-Name] <string[]> [[-Option] <PSTraceSourceOptions>] [-ListenerOption <TraceOptions>] [-FilePath <string>] [-Force] [-Debugger] [-PSHost] [-PassThru] [<CommonParameters>]

Set-TraceSource [-Name] <string[]> [-RemoveListener <string[]>] [<CommonParameters>]

Set-TraceSource [-Name] <string[]> [-RemoveFileListener <string[]>] [<CommonParameters>]

PARAMETERS:
- Debugger <switch> (Required: false)
- FilePath <string> (Required: false)
- Force <switch> (Required: false)
- ListenerOption <TraceOptions> (Required: false)
- Name <string[]> (Required: true)
- Option <PSTraceSourceOptions> (Required: false)
- PSHost <switch> (Required: false)
- PassThru <switch> (Required: false)
- RemoveFileListener <string[]> (Required: false)
- RemoveListener <string[]> (Required: false)
```

### Set-UevConfiguration

```powershell
Set-UevConfiguration [-CurrentComputerUser] [-MaxPackageSizeInBytes <int>] [-SettingsStoragePath <string>] [-EnableSyncProviderPing] [-DisableSyncProviderPing] [-SyncTimeoutInMilliseconds <int>] [-SyncMethod <string>] [-EnableSync] [-DisableSync] [-EnableSyncOverMeteredNetwork] [-DisableSyncOverMeteredNetwork] [-EnableSyncOverMeteredNetworkWhenRoaming] [-DisableSyncOverMeteredNetworkWhenRoaming] [-EnableSettingsImportNotify] [-DisableSettingsImportNotify] [-SettingsImportNotifyDelayInSeconds <int>] [-EnableDontSyncWindows8AppSettings] [-DisableDontSyncWindows8AppSettings] [-WaitForSyncTimeoutInMilliseconds <int>] [-EnableWaitForSyncOnApplicationStart] [-DisableWaitForSyncOnApplicationStart] [-EnableWaitForSyncOnLogon] [-DisableWaitForSyncOnLogon] [-EnableSyncUnlistedWindows8Apps] [-DisableSyncUnlistedWindows8Apps] [-VdiCollectionName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-UevConfiguration [-Computer] [-MaxPackageSizeInBytes <int>] [-SettingsStoragePath <string>] [-SettingsTemplateCatalogPath <string>] [-EnableSyncProviderPing] [-DisableSyncProviderPing] [-SyncTimeoutInMilliseconds <int>] [-SyncMethod <string>] [-EnableSync] [-DisableSync] [-EnableSyncOverMeteredNetwork] [-DisableSyncOverMeteredNetwork] [-EnableSyncOverMeteredNetworkWhenRoaming] [-DisableSyncOverMeteredNetworkWhenRoaming] [-EnableSettingsImportNotify] [-DisableSettingsImportNotify] [-SettingsImportNotifyDelayInSeconds <int>] [-ContactITUrl <string>] [-ContactITDescription <string>] [-EnableTrayIcon] [-DisableTrayIcon] [-EnableFirstUseNotification] [-DisableFirstUseNotification] [-EnableDontSyncWindows8AppSettings] [-DisableDontSyncWindows8AppSettings] [-WaitForSyncTimeoutInMilliseconds <int>] [-EnableWaitForSyncOnApplicationStart] [-DisableWaitForSyncOnApplicationStart] [-EnableWaitForSyncOnLogon] [-DisableWaitForSyncOnLogon] [-EnableSyncUnlistedWindows8Apps] [-DisableSyncUnlistedWindows8Apps] [-VdiCollectionName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Computer <switch> (Required: false)
- Confirm <switch> (Required: false)
- ContactITDescription <string> (Required: false)
- ContactITUrl <string> (Required: false)
- CurrentComputerUser <switch> (Required: false)
- DisableDontSyncWindows8AppSettings <switch> (Required: false)
- DisableFirstUseNotification <switch> (Required: false)
- DisableSettingsImportNotify <switch> (Required: false)
- DisableSync <switch> (Required: false)
- DisableSyncOverMeteredNetwork <switch> (Required: false)
- DisableSyncOverMeteredNetworkWhenRoaming <switch> (Required: false)
- DisableSyncProviderPing <switch> (Required: false)
- DisableSyncUnlistedWindows8Apps <switch> (Required: false)
- DisableTrayIcon <switch> (Required: false)
- DisableWaitForSyncOnApplicationStart <switch> (Required: false)
- DisableWaitForSyncOnLogon <switch> (Required: false)
- EnableDontSyncWindows8AppSettings <switch> (Required: false)
- EnableFirstUseNotification <switch> (Required: false)
- EnableSettingsImportNotify <switch> (Required: false)
- EnableSync <switch> (Required: false)
- EnableSyncOverMeteredNetwork <switch> (Required: false)
- EnableSyncOverMeteredNetworkWhenRoaming <switch> (Required: false)
- EnableSyncProviderPing <switch> (Required: false)
- EnableSyncUnlistedWindows8Apps <switch> (Required: false)
- EnableTrayIcon <switch> (Required: false)
- EnableWaitForSyncOnApplicationStart <switch> (Required: false)
- EnableWaitForSyncOnLogon <switch> (Required: false)
- MaxPackageSizeInBytes <int> (Required: false)
- SettingsImportNotifyDelayInSeconds <int> (Required: false)
- SettingsStoragePath <string> (Required: false)
- SettingsTemplateCatalogPath <string> (Required: false)
- SyncMethod <string> (Required: false)
- SyncTimeoutInMilliseconds <int> (Required: false)
- VdiCollectionName <string> (Required: false)
- WaitForSyncTimeoutInMilliseconds <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-UevTemplateProfile

```powershell
Set-UevTemplateProfile -ID <string> -Profile <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- ID <string> (Required: true)
- Profile <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Setup

```powershell
Setup [[-Path] <Object>] [[-Content] <Object>] [-Dir] [-File] [-PassThru]

PARAMETERS:
- Content <Object> (Required: false)
- Dir <switch> (Required: false)
- File <switch> (Required: false)
- PassThru <switch> (Required: false)
- Path <Object> (Required: false)
```

### Set-Variable

```powershell
Set-Variable [-Name] <string[]> [[-Value] <Object>] [-Include <string[]>] [-Exclude <string[]>] [-Description <string>] [-Option <ScopedItemOptions>] [-Force] [-Visibility <SessionStateEntryVisibility>] [-PassThru] [-Scope <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- Exclude <string[]> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- Name <string[]> (Required: true)
- Option <ScopedItemOptions> (Required: false)
- PassThru <switch> (Required: false)
- Scope <string> (Required: false)
- Value <Object> (Required: false)
- Visibility <SessionStateEntryVisibility> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-VirtualDisk

```powershell
Set-VirtualDisk -UniqueId <string> [-NewFriendlyName <string>] [-Usage <Usage>] [-OtherUsageDescription <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-VirtualDisk [-InputObject] <ciminstance[]> [-ProvisioningType <ProvisioningType>] [-FaultDomainAwareness <FaultDomainType>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-MaxIops <uint64>] [-MaxIoBandwidth <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-VirtualDisk [-InputObject] <ciminstance[]> [-IsManualAttach <bool>] [-StorageNodeName <string>] [-Access <Access>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-VirtualDisk [-InputObject] <ciminstance[]> [-NewFriendlyName <string>] [-Usage <Usage>] [-OtherUsageDescription <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-VirtualDisk -Name <string> [-NewFriendlyName <string>] [-Usage <Usage>] [-OtherUsageDescription <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-VirtualDisk [-FriendlyName] <string> [-NewFriendlyName <string>] [-Usage <Usage>] [-OtherUsageDescription <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-VirtualDisk -UniqueId <string> [-ProvisioningType <ProvisioningType>] [-FaultDomainAwareness <FaultDomainType>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-MaxIops <uint64>] [-MaxIoBandwidth <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-VirtualDisk -UniqueId <string> [-IsManualAttach <bool>] [-StorageNodeName <string>] [-Access <Access>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-VirtualDisk [-FriendlyName] <string> [-ProvisioningType <ProvisioningType>] [-FaultDomainAwareness <FaultDomainType>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-MaxIops <uint64>] [-MaxIoBandwidth <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-VirtualDisk [-FriendlyName] <string> [-IsManualAttach <bool>] [-StorageNodeName <string>] [-Access <Access>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-VirtualDisk -Name <string> [-ProvisioningType <ProvisioningType>] [-FaultDomainAwareness <FaultDomainType>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-MaxIops <uint64>] [-MaxIoBandwidth <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-VirtualDisk -Name <string> [-IsManualAttach <bool>] [-StorageNodeName <string>] [-Access <Access>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Access <Access> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FaultDomainAwareness <FaultDomainType> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <ciminstance[]> (Required: true)
- IsManualAttach <bool> (Required: false)
- MaxIoBandwidth <uint64> (Required: false)
- MaxIops <uint64> (Required: false)
- Name <string> (Required: true)
- NewFriendlyName <string> (Required: false)
- NumberOfDataCopies <uint16> (Required: false)
- OtherUsageDescription <string> (Required: false)
- PhysicalDiskRedundancy <uint16> (Required: false)
- ProvisioningType <ProvisioningType> (Required: false)
- StorageNodeName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
- Usage <Usage> (Required: false)
```

### Set-Volume

```powershell
Set-Volume -DriveLetter <char> [-NewFileSystemLabel <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Volume -InputObject <ciminstance[]> [-DedupMode <DedupMode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Volume -InputObject <ciminstance[]> [-NewFileSystemLabel <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Volume -FileSystemLabel <string> [-NewFileSystemLabel <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Volume -Path <string> [-NewFileSystemLabel <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Volume -UniqueId <string> [-NewFileSystemLabel <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Volume -UniqueId <string> [-DedupMode <DedupMode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Volume -Path <string> [-DedupMode <DedupMode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Volume -FileSystemLabel <string> [-DedupMode <DedupMode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Set-Volume -DriveLetter <char> [-DedupMode <DedupMode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DedupMode <DedupMode> (Required: false)
- DriveLetter <char> (Required: true)
- FileSystemLabel <string> (Required: true)
- InputObject <ciminstance[]> (Required: true)
- NewFileSystemLabel <string> (Required: false)
- Path <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
```

### Set-VolumeScrubPolicy

```powershell
Set-VolumeScrubPolicy [-DriveLetter] <char[]> [[-Enable] <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Set-VolumeScrubPolicy [[-Enable] <bool>] -ObjectId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Set-VolumeScrubPolicy [[-Enable] <bool>] -Path <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Set-VolumeScrubPolicy [[-Enable] <bool>] -FileSystemLabel <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Set-VolumeScrubPolicy [[-Enable] <bool>] -InputObject <CimInstance#MSFT_Volume[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DriveLetter <char[]> (Required: true)
- Enable <bool> (Required: false)
- FileSystemLabel <string[]> (Required: true)
- InputObject <CimInstance#MSFT_Volume[]> (Required: true)
- ObjectId <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Set-VpnConnection

```powershell
Set-VpnConnection [-Name] <string> [[-ServerAddress] <string>] [[-TunnelType] <string>] [[-EncryptionLevel] <string>] [[-AuthenticationMethod] <string[]>] [[-SplitTunneling] <bool>] [-AllUserConnection] [[-L2tpPsk] <string>] [[-RememberCredential] <bool>] [[-UseWinlogonCredential] <bool>] [[-EapConfigXmlStream] <xml>] [-PassThru] [-Force] [-MachineCertificateEKUFilter <string[]>] [-MachineCertificateIssuerFilter <X509Certificate2>] [-ServerList <CimInstance#VpnServerAddress[]>] [-IdleDisconnectSeconds <uint32>] [-DnsSuffix <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-VpnConnection [-Name] <string> [[-ServerAddress] <string>] [-ThirdPartyVpn] [[-SplitTunneling] <bool>] [[-RememberCredential] <bool>] [[-PlugInApplicationID] <string>] [-PassThru] [-Force] [-ServerList <CimInstance#VpnServerAddress[]>] [-IdleDisconnectSeconds <uint32>] [-DnsSuffix <string>] [-CustomConfiguration <xml>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllUserConnection <switch> (Required: false)
- AsJob <switch> (Required: false)
- AuthenticationMethod <string[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- CustomConfiguration <xml> (Required: false)
- DnsSuffix <string> (Required: false)
- EapConfigXmlStream <xml> (Required: false)
- EncryptionLevel <string> (Required: false)
- Force <switch> (Required: false)
- IdleDisconnectSeconds <uint32> (Required: false)
- L2tpPsk <string> (Required: false)
- MachineCertificateEKUFilter <string[]> (Required: false)
- MachineCertificateIssuerFilter <X509Certificate2> (Required: false)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- PlugInApplicationID <string> (Required: false)
- RememberCredential <bool> (Required: false)
- ServerAddress <string> (Required: false)
- ServerList <CimInstance#VpnServerAddress[]> (Required: false)
- SplitTunneling <bool> (Required: false)
- ThirdPartyVpn <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- TunnelType <string> (Required: false)
- UseWinlogonCredential <bool> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-VpnConnectionIPsecConfiguration

```powershell
Set-VpnConnectionIPsecConfiguration [-ConnectionName] <string> -RevertToDefault [-Force] [-AllUserConnection] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-VpnConnectionIPsecConfiguration [-ConnectionName] <string> [-AuthenticationTransformConstants] <AuthenticationTransformConstants> [-CipherTransformConstants] <CipherTransformConstants> [-DHGroup] <DHGroup> [-EncryptionMethod] <EncryptionMethod> [-IntegrityCheckMethod] <IntegrityCheckMethod> [-PfsGroup] <PfsGroup> [-PassThru] [-Force] [-AllUserConnection] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllUserConnection <switch> (Required: false)
- AsJob <switch> (Required: false)
- AuthenticationTransformConstants <AuthenticationTransformConstants> (Required: true)
- CimSession <CimSession[]> (Required: false)
- CipherTransformConstants <CipherTransformConstants> (Required: true)
- Confirm <switch> (Required: false)
- ConnectionName <string> (Required: true)
- DHGroup <DHGroup> (Required: true)
- EncryptionMethod <EncryptionMethod> (Required: true)
- Force <switch> (Required: false)
- IntegrityCheckMethod <IntegrityCheckMethod> (Required: true)
- PassThru <switch> (Required: false)
- PfsGroup <PfsGroup> (Required: true)
- RevertToDefault <switch> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-VpnConnectionProxy

```powershell
Set-VpnConnectionProxy [-ConnectionName] <string> [-AutoDetect] [-AutoConfigurationScript <string>] [-ProxyServer <string>] [-BypassProxyForLocal] [-ExceptionPrefix <string[]>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AutoConfigurationScript <string> (Required: false)
- AutoDetect <switch> (Required: false)
- BypassProxyForLocal <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionName <string> (Required: true)
- ExceptionPrefix <string[]> (Required: false)
- PassThru <switch> (Required: false)
- ProxyServer <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-VpnConnectionTriggerDnsConfiguration

```powershell
Set-VpnConnectionTriggerDnsConfiguration [-ConnectionName] <string> [[-DnsSuffix] <string>] [[-DnsIPAddress] <string[]>] [[-DnsSuffixSearchList] <string[]>] [-PassThru] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionName <string> (Required: true)
- DnsIPAddress <string[]> (Required: false)
- DnsSuffix <string> (Required: false)
- DnsSuffixSearchList <string[]> (Required: false)
- Force <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-VpnConnectionTriggerTrustedNetwork

```powershell
Set-VpnConnectionTriggerTrustedNetwork [-ConnectionName] <string> -DefaultDnsSuffixes [-PassThru] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionName <string> (Required: true)
- DefaultDnsSuffixes <switch> (Required: true)
- Force <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-WheaMemoryPolicy

```powershell
Set-WheaMemoryPolicy [-ComputerName <string>] [-DisableOffline <bool>] [-DisablePFA <bool>] [-PersistMemoryOffline <bool>] [-PFAPageCount <uint32>] [-PFAErrorThreshold <uint32>] [-PFATimeout <uint32>] [<CommonParameters>]

PARAMETERS:
- ComputerName <string> (Required: false)
- DisableOffline <bool> (Required: false)
- DisablePFA <bool> (Required: false)
- PFAErrorThreshold <uint32> (Required: false)
- PFAPageCount <uint32> (Required: false)
- PFATimeout <uint32> (Required: false)
- PersistMemoryOffline <bool> (Required: false)
```

### Set-WinAcceptLanguageFromLanguageListOptOut

```powershell
Set-WinAcceptLanguageFromLanguageListOptOut [-OptOut] <bool> [<CommonParameters>]

PARAMETERS:
- OptOut <bool> (Required: true)
```

### Set-WinCultureFromLanguageListOptOut

```powershell
Set-WinCultureFromLanguageListOptOut [-OptOut] <bool> [<CommonParameters>]

PARAMETERS:
- OptOut <bool> (Required: true)
```

### Set-WinDefaultInputMethodOverride

```powershell
Set-WinDefaultInputMethodOverride [[-InputTip] <string>] [<CommonParameters>]

PARAMETERS:
- InputTip <string> (Required: false)
```

### Set-WindowsEdition

```powershell
Set-WindowsEdition -Edition <string> -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- Edition <string> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Set-WindowsProductKey

```powershell
Set-WindowsProductKey -ProductKey <string> -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Path <string> (Required: true)
- ProductKey <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Set-WindowsReservedStorageState

```powershell
Set-WindowsReservedStorageState -State <ReservedStorageState> [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- ScratchDirectory <string> (Required: false)
- State <ReservedStorageState> (Required: true)
```

### Set-WindowsSearchSetting

```powershell
Set-WindowsSearchSetting [-EnableWebResultsSetting <bool>] [-EnableMeteredWebResultsSetting <bool>] [-SearchExperienceSetting <string>] [-SafeSearchSetting <string>] [<CommonParameters>]

PARAMETERS:
- EnableMeteredWebResultsSetting <bool> (Required: false)
- EnableWebResultsSetting <bool> (Required: false)
- SafeSearchSetting <string> (Required: false)
- SearchExperienceSetting <string> (Required: false)
```

### Set-WinHomeLocation

```powershell
Set-WinHomeLocation [-GeoId] <int> [<CommonParameters>]

PARAMETERS:
- GeoId <int> (Required: true)
```

### Set-WinhttpProxy

```powershell
SYNOPSIS:
Configures WinHTTP proxy settings.

DESCRIPTION:
Configures WinHTTP proxy settings.

PARAMETERS:

- ProxyServer <String> (Required: true)
- BypassList <String> (Required: false)
- SettingScope <String> (Required: true)
- Proxy <String> (Required: false)
- ProxyBypass <String> (Required: false)
- AutoconfigUrl <String> (Required: false)
- AutoDetect <SwitchParameter> (Required: false)

```

### Set-WinLanguageBarOption

```powershell
Set-WinLanguageBarOption [-UseLegacySwitchMode] [-UseLegacyLanguageBar] [<CommonParameters>]

PARAMETERS:
- UseLegacyLanguageBar <switch> (Required: false)
- UseLegacySwitchMode <switch> (Required: false)
```

### Set-WinSystemLocale

```powershell
Set-WinSystemLocale [-SystemLocale] <cultureinfo> [<CommonParameters>]

PARAMETERS:
- SystemLocale <cultureinfo> (Required: true)
```

### Set-WinUILanguageOverride

```powershell
Set-WinUILanguageOverride [[-Language] <cultureinfo>] [<CommonParameters>]

PARAMETERS:
- Language <cultureinfo> (Required: false)
```

### Set-WinUserLanguageList

```powershell
Set-WinUserLanguageList [-LanguageList] <List[WinUserLanguage]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- LanguageList <List[WinUserLanguage]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Set-WmiInstance

```powershell
Set-WmiInstance [-Class] <string> [[-Arguments] <hashtable>] [-PutType <PutType>] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-WmiInstance -InputObject <wmi> [-Arguments <hashtable>] [-PutType <PutType>] [-AsJob] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-WmiInstance -Path <string> [-Arguments <hashtable>] [-PutType <PutType>] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-WmiInstance [-PutType <PutType>] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-WmiInstance [-PutType <PutType>] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Set-WmiInstance [-PutType <PutType>] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Arguments <hashtable> (Required: false)
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
- PutType <PutType> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Set-WSManInstance

```powershell
Set-WSManInstance [-ResourceURI] <uri> [[-SelectorSet] <hashtable>] [-ApplicationName <string>] [-ComputerName <string>] [-Dialect <uri>] [-FilePath <string>] [-Fragment <string>] [-OptionSet <hashtable>] [-Port <int>] [-SessionOption <SessionOption>] [-UseSSL] [-ValueSet <hashtable>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

Set-WSManInstance [-ResourceURI] <uri> [[-SelectorSet] <hashtable>] [-ConnectionURI <uri>] [-Dialect <uri>] [-FilePath <string>] [-Fragment <string>] [-OptionSet <hashtable>] [-SessionOption <SessionOption>] [-ValueSet <hashtable>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

PARAMETERS:
- ApplicationName <string> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string> (Required: false)
- ConnectionURI <uri> (Required: false)
- Credential <pscredential> (Required: false)
- Dialect <uri> (Required: false)
- FilePath <string> (Required: false)
- Fragment <string> (Required: false)
- OptionSet <hashtable> (Required: false)
- Port <int> (Required: false)
- ResourceURI <uri> (Required: true)
- SelectorSet <hashtable> (Required: false)
- SessionOption <SessionOption> (Required: false)
- UseSSL <switch> (Required: false)
- ValueSet <hashtable> (Required: false)
```

### Set-WSManQuickConfig

```powershell
Set-WSManQuickConfig [-UseSSL] [-Force] [-SkipNetworkProfileCheck] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- SkipNetworkProfileCheck <switch> (Required: false)
- UseSSL <switch> (Required: false)
```

### Should

```powershell
Should

```

### Show-Command

```powershell
Show-Command [[-Name] <string>] [-Height <double>] [-Width <double>] [-NoCommonParameter] [-ErrorPopup] [-PassThru] [<CommonParameters>]

PARAMETERS:
- ErrorPopup <switch> (Required: false)
- Height <double> (Required: false)
- Name <string> (Required: false)
- NoCommonParameter <switch> (Required: false)
- PassThru <switch> (Required: false)
- Width <double> (Required: false)
```

### Show-ControlPanelItem

```powershell
Show-ControlPanelItem [-Name] <string[]> [<CommonParameters>]

Show-ControlPanelItem -CanonicalName <string[]> [<CommonParameters>]

Show-ControlPanelItem [[-InputObject] <ControlPanelItem[]>] [<CommonParameters>]

PARAMETERS:
- CanonicalName <string[]> (Required: true)
- InputObject <ControlPanelItem[]> (Required: false)
- Name <string[]> (Required: true)
```

### Show-EventLog

```powershell
Show-EventLog [[-ComputerName] <string>] [<CommonParameters>]

PARAMETERS:
- ComputerName <string> (Required: false)
```

### Show-NetFirewallRule

```powershell
Show-NetFirewallRule [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Show-NetIPsecRule

```powershell
Show-NetIPsecRule [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Show-StorageHistory

```powershell
Show-StorageHistory [-Objects] <ArrayList> [-Title <string>] [-DisplayAvgLatency] [-DisplayMaxLatency] [<CommonParameters>]

PARAMETERS:
- DisplayAvgLatency <switch> (Required: false)
- DisplayMaxLatency <switch> (Required: false)
- Objects <ArrayList> (Required: true)
- Title <string> (Required: false)
```

### Show-VirtualDisk

```powershell
Show-VirtualDisk [-FriendlyName] <string[]> [-TargetPortAddresses <string[]>] [-InitiatorAddress <string>] [-HostType <HostType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Show-VirtualDisk -UniqueId <string[]> [-TargetPortAddresses <string[]>] [-InitiatorAddress <string>] [-HostType <HostType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Show-VirtualDisk -Name <string[]> [-TargetPortAddresses <string[]>] [-InitiatorAddress <string>] [-HostType <HostType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Show-VirtualDisk -InputObject <CimInstance#MSFT_VirtualDisk[]> [-TargetPortAddresses <string[]>] [-InitiatorAddress <string>] [-HostType <HostType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: true)
- HostType <HostType> (Required: false)
- InitiatorAddress <string> (Required: false)
- InputObject <CimInstance#MSFT_VirtualDisk[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- TargetPortAddresses <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Show-WindowsDeveloperLicenseRegistration

```powershell
Show-WindowsDeveloperLicenseRegistration [<CommonParameters>]

```

### Sort-Object

```powershell
Sort-Object [[-Property] <Object[]>] [-Descending] [-Unique] [-InputObject <psobject>] [-Culture <string>] [-CaseSensitive] [<CommonParameters>]

PARAMETERS:
- CaseSensitive <switch> (Required: false)
- Culture <string> (Required: false)
- Descending <switch> (Required: false)
- InputObject <psobject> (Required: false)
- Property <Object[]> (Required: false)
- Unique <switch> (Required: false)
```

### Split-Path

```powershell
Split-Path [-Path] <string[]> [-Parent] [-Resolve] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

Split-Path [-Path] <string[]> [-Qualifier] [-Resolve] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

Split-Path [-Path] <string[]> [-Leaf] [-Resolve] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

Split-Path [-Path] <string[]> [-NoQualifier] [-Resolve] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

Split-Path [-Path] <string[]> [-Resolve] [-IsAbsolute] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

Split-Path -LiteralPath <string[]> [-Resolve] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- IsAbsolute <switch> (Required: false)
- Leaf <switch> (Required: false)
- LiteralPath <string[]> (Required: true)
- NoQualifier <switch> (Required: false)
- Parent <switch> (Required: false)
- Path <string[]> (Required: true)
- Qualifier <switch> (Required: false)
- Resolve <switch> (Required: false)
- UseTransaction <switch> (Required: false)
```

### Split-WindowsImage

```powershell
Split-WindowsImage -ImagePath <string> -SplitImagePath <string> -FileSize <uint64> [-CheckIntegrity] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CheckIntegrity <switch> (Required: false)
- FileSize <uint64> (Required: true)
- ImagePath <string> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- ScratchDirectory <string> (Required: false)
- SplitImagePath <string> (Required: true)
```

### Start-AppBackgroundTask

```powershell
Start-AppBackgroundTask -TaskID <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- TaskID <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Start-AppvVirtualProcess

```powershell
Start-AppvVirtualProcess [-FilePath] <string> [[-ArgumentList] <string[]>] -AppvClientObject <Object> [-Credential <pscredential>] [-WorkingDirectory <string>] [-LoadUserProfile] [-NoNewWindow] [-PassThru] [-RedirectStandardError <string>] [-RedirectStandardInput <string>] [-RedirectStandardOutput <string>] [-Wait] [-UseNewEnvironment] [<CommonParameters>]

Start-AppvVirtualProcess [-FilePath] <string> [[-ArgumentList] <string[]>] -AppvClientObject <Object> [-WorkingDirectory <string>] [-PassThru] [-Verb <string>] [-Wait] [-WindowStyle <ProcessWindowStyle>] [<CommonParameters>]

PARAMETERS:
- AppvClientObject <Object> (Required: true)
- ArgumentList <string[]> (Required: false)
- Credential <pscredential> (Required: false)
- FilePath <string> (Required: true)
- LoadUserProfile <switch> (Required: false)
- NoNewWindow <switch> (Required: false)
- PassThru <switch> (Required: false)
- RedirectStandardError <string> (Required: false)
- RedirectStandardInput <string> (Required: false)
- RedirectStandardOutput <string> (Required: false)
- UseNewEnvironment <switch> (Required: false)
- Verb <string> (Required: false)
- Wait <switch> (Required: false)
- WindowStyle <ProcessWindowStyle> (Required: false)
- WorkingDirectory <string> (Required: false)
```

### Start-AutologgerConfig

### Start-BitsTransfer

```powershell
Start-BitsTransfer [-Source] <string[]> [[-Destination] <string[]>] [-Asynchronous] [-Dynamic] [-CustomHeadersWriteOnly] [-Authentication <string>] [-Credential <pscredential>] [-Description <string>] [-HttpMethod <string>] [-DisplayName <string>] [-Priority <string>] [-TransferPolicy <CostStates>] [-ACLFlags <ACLFlagValue>] [-SecurityFlags <SecurityFlagValue>] [-UseStoredCredential <AuthenticationTargetValue>] [-ProxyAuthentication <string>] [-ProxyBypass <string[]>] [-ProxyCredential <pscredential>] [-ProxyList <uri[]>] [-ProxyUsage <string>] [-RetryInterval <int>] [-RetryTimeout <int>] [-MaxDownloadTime <int>] [-Suspended] [-TransferType <string>] [-CustomHeaders <string[]>] [-NotifyFlags <NotifyFlagValue>] [-NotifyCmdLine <string[]>] [-CertStoreLocation <CertStoreLocationValue>] [-CertStoreName <string>] [-CertHash <byte[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ACLFlags <ACLFlagValue> (Required: false)
- Asynchronous <switch> (Required: false)
- Authentication <string> (Required: false)
- CertHash <byte[]> (Required: false)
- CertStoreLocation <CertStoreLocationValue> (Required: false)
- CertStoreName <string> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- CustomHeaders <string[]> (Required: false)
- CustomHeadersWriteOnly <switch> (Required: false)
- Description <string> (Required: false)
- Destination <string[]> (Required: false)
- DisplayName <string> (Required: false)
- Dynamic <switch> (Required: false)
- HttpMethod <string> (Required: false)
- MaxDownloadTime <int> (Required: false)
- NotifyCmdLine <string[]> (Required: false)
- NotifyFlags <NotifyFlagValue> (Required: false)
- Priority <string> (Required: false)
- ProxyAuthentication <string> (Required: false)
- ProxyBypass <string[]> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- ProxyList <uri[]> (Required: false)
- ProxyUsage <string> (Required: false)
- RetryInterval <int> (Required: false)
- RetryTimeout <int> (Required: false)
- SecurityFlags <SecurityFlagValue> (Required: false)
- Source <string[]> (Required: true)
- Suspended <switch> (Required: false)
- TransferPolicy <CostStates> (Required: false)
- TransferType <string> (Required: false)
- UseStoredCredential <AuthenticationTargetValue> (Required: false)
- WhatIf <switch> (Required: false)
```

### Start-DscConfiguration

```powershell
Start-DscConfiguration [[-Path] <string>] [[-ComputerName] <string[]>] [-Wait] [-Force] [-Credential <pscredential>] [-ThrottleLimit <int>] [-JobName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Start-DscConfiguration [[-Path] <string>] -CimSession <CimSession[]> [-Wait] [-Force] [-ThrottleLimit <int>] [-JobName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Start-DscConfiguration [[-ComputerName] <string[]>] -UseExisting [-Wait] [-Force] [-Credential <pscredential>] [-ThrottleLimit <int>] [-JobName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Start-DscConfiguration -CimSession <CimSession[]> -UseExisting [-Wait] [-Force] [-ThrottleLimit <int>] [-JobName <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession[]> (Required: true)
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- JobName <string> (Required: false)
- Path <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseExisting <switch> (Required: true)
- Wait <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Start-Dtc

```powershell
Start-Dtc [-DtcName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DtcName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Start-DtcDiagnosticResourceManager

```powershell
Start-DtcDiagnosticResourceManager [[-Port] <int>] [[-Name] <string>] [<CommonParameters>]

PARAMETERS:
- Name <string> (Required: false)
- Port <int> (Required: false)
```

### Start-DtcTransactionsTraceSession

```powershell
Start-DtcTransactionsTraceSession [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Start-EtwTraceSession

```powershell
Start-EtwTraceSession [-Name] <string> [-LogFileMode <uint32>] [-LocalFilePath <string>] [-MaximumFileSize <uint32>] [-BufferSize <uint32>] [-MinimumBuffers <uint32>] [-MaximumBuffers <uint32>] [-FlushTimer <uint32>] [-ClockType <string>] [-FileMode <string>] [-Compress] [-RealTime] [-NonPaged] [-CimSession <CimSession>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- BufferSize <uint32> (Required: false)
- CimSession <CimSession> (Required: false)
- ClockType <string> (Required: false)
- Compress <switch> (Required: false)
- Confirm <switch> (Required: false)
- FileMode <string> (Required: false)
- FlushTimer <uint32> (Required: false)
- LocalFilePath <string> (Required: false)
- LogFileMode <uint32> (Required: false)
- MaximumBuffers <uint32> (Required: false)
- MaximumFileSize <uint32> (Required: false)
- MinimumBuffers <uint32> (Required: false)
- Name <string> (Required: true)
- NonPaged <switch> (Required: false)
- RealTime <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Start-Job

```powershell
Start-Job [-ScriptBlock] <scriptblock> [[-InitializationScript] <scriptblock>] [-Name <string>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-RunAs32] [-PSVersion <version>] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

Start-Job [-DefinitionName] <string> [[-DefinitionPath] <string>] [[-Type] <string>] [<CommonParameters>]

Start-Job [[-InitializationScript] <scriptblock>] -LiteralPath <string> [-Name <string>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-RunAs32] [-PSVersion <version>] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

Start-Job [-FilePath] <string> [[-InitializationScript] <scriptblock>] [-Name <string>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-RunAs32] [-PSVersion <version>] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

PARAMETERS:
- ArgumentList <Object[]> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- Credential <pscredential> (Required: false)
- DefinitionName <string> (Required: true)
- DefinitionPath <string> (Required: false)
- FilePath <string> (Required: true)
- InitializationScript <scriptblock> (Required: false)
- InputObject <psobject> (Required: false)
- LiteralPath <string> (Required: true)
- Name <string> (Required: false)
- PSVersion <version> (Required: false)
- RunAs32 <switch> (Required: false)
- ScriptBlock <scriptblock> (Required: true)
- Type <string> (Required: false)
```

### Start-MpRollback

```powershell
Start-MpRollback [-Engine] [-Platform] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Engine <switch> (Required: false)
- Platform <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Start-MpScan

```powershell
Start-MpScan [-ScanPath <string>] [-ScanType <ScanType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ScanPath <string> (Required: false)
- ScanType <ScanType> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Start-MpWDOScan

```powershell
Start-MpWDOScan [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Start-NetEventSession

```powershell
Start-NetEventSession [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Start-NetEventSession -InputObject <CimInstance#MSFT_NetEventSession[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventSession[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Start-OSUninstall

```powershell
Start-OSUninstall -Path <string> [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Start-OSUninstall -Online [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- NoRestart <switch> (Required: false)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Start-PcsvDevice

```powershell
Start-PcsvDevice [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Start-PcsvDevice [-TargetAddress] <string> [-Credential] <pscredential> [-ManagementProtocol] <ManagementProtocol> [[-Port] <uint16>] [-Authentication <Authentication>] [-UseSSL] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Start-PcsvDevice -InputObject <CimInstance#MSFT_PCSVDevice[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Start-Process

```powershell
Start-Process [-FilePath] <string> [[-ArgumentList] <string[]>] [-Credential <pscredential>] [-WorkingDirectory <string>] [-LoadUserProfile] [-NoNewWindow] [-PassThru] [-RedirectStandardError <string>] [-RedirectStandardInput <string>] [-RedirectStandardOutput <string>] [-WindowStyle <ProcessWindowStyle>] [-Wait] [-UseNewEnvironment] [<CommonParameters>]

Start-Process [-FilePath] <string> [[-ArgumentList] <string[]>] [-WorkingDirectory <string>] [-PassThru] [-Verb <string>] [-WindowStyle <ProcessWindowStyle>] [-Wait] [<CommonParameters>]

PARAMETERS:
- ArgumentList <string[]> (Required: false)
- Credential <pscredential> (Required: false)
- FilePath <string> (Required: true)
- LoadUserProfile <switch> (Required: false)
- NoNewWindow <switch> (Required: false)
- PassThru <switch> (Required: false)
- RedirectStandardError <string> (Required: false)
- RedirectStandardInput <string> (Required: false)
- RedirectStandardOutput <string> (Required: false)
- UseNewEnvironment <switch> (Required: false)
- Verb <string> (Required: false)
- Wait <switch> (Required: false)
- WindowStyle <ProcessWindowStyle> (Required: false)
- WorkingDirectory <string> (Required: false)
```

### Start-ReFSDedupJob

```powershell
Start-ReFSDedupJob [-Volume] <string> [-Duration <timespan>] [-FullRun] [-CpuPercentage <uint32>] [-ConcurrentOpenFiles <uint32>] [-MinimumLastModifiedTimeHours <int>] [-ExcludeFileExtension <string[]>] [-ExcludeFolder <string[]>] [-CompressionFormat <Format>] [-CompressionLevel <uint16>] [-CompressionChunkSize <uint32>] [-CompressionTuning <uint32>] [-RecompressionTuning <uint32>] [-DecompressionTuning <uint32>] [<CommonParameters>]

PARAMETERS:
- CompressionChunkSize <uint32> (Required: false)
- CompressionFormat <Format> (Required: false)
- CompressionLevel <uint16> (Required: false)
- CompressionTuning <uint32> (Required: false)
- ConcurrentOpenFiles <uint32> (Required: false)
- CpuPercentage <uint32> (Required: false)
- DecompressionTuning <uint32> (Required: false)
- Duration <timespan> (Required: false)
- ExcludeFileExtension <string[]> (Required: false)
- ExcludeFolder <string[]> (Required: false)
- FullRun <switch> (Required: false)
- MinimumLastModifiedTimeHours <int> (Required: false)
- RecompressionTuning <uint32> (Required: false)
- Volume <string> (Required: true)
```

### Start-ScheduledTask

```powershell
Start-ScheduledTask [-TaskName] <string> [[-TaskPath] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Start-ScheduledTask [-InputObject] <CimInstance#MSFT_ScheduledTask> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_ScheduledTask> (Required: true)
- TaskName <string> (Required: true)
- TaskPath <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Start-Service

```powershell
Start-Service [-InputObject] <ServiceController[]> [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Start-Service [-Name] <string[]> [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Start-Service -DisplayName <string[]> [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Start-Sleep

```powershell
Start-Sleep [-Seconds] <int> [<CommonParameters>]

Start-Sleep -Milliseconds <int> [<CommonParameters>]

PARAMETERS:
- Milliseconds <int> (Required: true)
- Seconds <int> (Required: true)
```

### Start-StorageDiagnosticLog

```powershell
Start-StorageDiagnosticLog [-StorageSubSystemFriendlyName] <string[]> [-Level <Level>] [-MaxLogSize <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Start-StorageDiagnosticLog -StorageSubSystemUniqueId <string[]> [-Level <Level>] [-MaxLogSize <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Start-StorageDiagnosticLog -StorageSubSystemName <string[]> [-Level <Level>] [-MaxLogSize <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Start-StorageDiagnosticLog -InputObject <CimInstance#MSFT_StorageSubSystem[]> [-Level <Level>] [-MaxLogSize <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_StorageSubSystem[]> (Required: true)
- Level <Level> (Required: false)
- MaxLogSize <uint64> (Required: false)
- PassThru <switch> (Required: false)
- StorageSubSystemFriendlyName <string[]> (Required: true)
- StorageSubSystemName <string[]> (Required: true)
- StorageSubSystemUniqueId <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Start-Trace

```powershell
Start-Trace [-SessionName] <string> [[-OutputFilePath] <string>] [[-ProviderFilePath] <string>] [-ETS] [-Format <Object>] [-MinBuffers <int>] [-MaxBuffers <int>] [-BufferSizeInKB <int>] [-MaxLogFileSizeInMB <int>] [<CommonParameters>]

PARAMETERS:
- BufferSizeInKB <int> (Required: false)
- ETS <switch> (Required: false)
- Format <Object> (Required: false)
- MaxBuffers <int> (Required: false)
- MaxLogFileSizeInMB <int> (Required: false)
- MinBuffers <int> (Required: false)
- OutputFilePath <string> (Required: false)
- ProviderFilePath <string> (Required: false)
- SessionName <string> (Required: true)
```

### Start-Transaction

```powershell
Start-Transaction [-Timeout <int>] [-Independent] [-RollbackPreference <RollbackSeverity>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Independent <switch> (Required: false)
- RollbackPreference <RollbackSeverity> (Required: false)
- Timeout <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Start-Transcript

```powershell
Start-Transcript [[-Path] <string>] [-Append] [-Force] [-NoClobber] [-IncludeInvocationHeader] [-WhatIf] [-Confirm] [<CommonParameters>]

Start-Transcript [[-LiteralPath] <string>] [-Append] [-Force] [-NoClobber] [-IncludeInvocationHeader] [-WhatIf] [-Confirm] [<CommonParameters>]

Start-Transcript [[-OutputDirectory] <string>] [-Append] [-Force] [-NoClobber] [-IncludeInvocationHeader] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Append <switch> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- IncludeInvocationHeader <switch> (Required: false)
- LiteralPath <string> (Required: false)
- NoClobber <switch> (Required: false)
- OutputDirectory <string> (Required: false)
- Path <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Stop-AppvClientConnectionGroup

```powershell
Stop-AppvClientConnectionGroup [-GroupId] <guid> [-VersionId] <guid> [-Global] [<CommonParameters>]

Stop-AppvClientConnectionGroup [-Name] <string> [-Global] [<CommonParameters>]

Stop-AppvClientConnectionGroup [-ConnectionGroup] <AppvClientConnectionGroup> [-Global] [<CommonParameters>]

PARAMETERS:
- ConnectionGroup <AppvClientConnectionGroup> (Required: true)
- Global <switch> (Required: false)
- GroupId <guid> (Required: true)
- Name <string> (Required: true)
- VersionId <guid> (Required: true)
```

### Stop-AppvClientPackage

```powershell
Stop-AppvClientPackage [-PackageId] <guid> [-VersionId] <guid> [-Global] [<CommonParameters>]

Stop-AppvClientPackage [-Package] <AppvClientPackage> [-Global] [<CommonParameters>]

Stop-AppvClientPackage [-Name] <string> [[-Version] <string>] [-Global] [<CommonParameters>]

PARAMETERS:
- Global <switch> (Required: false)
- Name <string> (Required: true)
- Package <AppvClientPackage> (Required: true)
- PackageId <guid> (Required: true)
- Version <string> (Required: false)
- VersionId <guid> (Required: true)
```

### Stop-Computer

```powershell
Stop-Computer [[-ComputerName] <string[]>] [[-Credential] <pscredential>] [-AsJob] [-DcomAuthentication <AuthenticationLevel>] [-WsmanAuthentication <string>] [-Protocol <string>] [-Impersonation <ImpersonationLevel>] [-ThrottleLimit <int>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- DcomAuthentication <AuthenticationLevel> (Required: false)
- Force <switch> (Required: false)
- Impersonation <ImpersonationLevel> (Required: false)
- Protocol <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
- WsmanAuthentication <string> (Required: false)
```

### Stop-DscConfiguration

```powershell
Stop-DscConfiguration [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Stop-Dtc

```powershell
Stop-Dtc [-DtcName <string>] [-Recursive] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DtcName <string> (Required: false)
- Recursive <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Stop-DtcDiagnosticResourceManager

```powershell
Stop-DtcDiagnosticResourceManager [[-Job] <DtcDiagnosticResourceManagerJob>] [<CommonParameters>]

Stop-DtcDiagnosticResourceManager [[-Name] <string>] [<CommonParameters>]

Stop-DtcDiagnosticResourceManager [[-InstanceId] <guid>] [<CommonParameters>]

PARAMETERS:
- InstanceId <guid> (Required: false)
- Job <DtcDiagnosticResourceManagerJob> (Required: false)
- Name <string> (Required: false)
```

### Stop-DtcTransactionsTraceSession

```powershell
Stop-DtcTransactionsTraceSession [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Stop-EtwTraceSession

```powershell
Stop-EtwTraceSession [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-EtwTraceSession -InputObject <CimInstance#MSFT_EtwTraceSession[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_EtwTraceSession[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Stop-Job

```powershell
Stop-Job [-Id] <int[]> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-Job [-Job] <Job[]> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-Job [-Name] <string[]> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-Job [-InstanceId] <guid[]> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-Job [-State] <JobState> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-Job [-Filter] <hashtable> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Filter <hashtable> (Required: true)
- Id <int[]> (Required: true)
- InstanceId <guid[]> (Required: true)
- Job <Job[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- State <JobState> (Required: true)
- WhatIf <switch> (Required: false)
```

### Stop-NetEventSession

```powershell
Stop-NetEventSession [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-NetEventSession -InputObject <CimInstance#MSFT_NetEventSession[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetEventSession[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Stop-PcsvDevice

```powershell
Stop-PcsvDevice [-TimeoutSec <uint32>] [-ShutdownType <PossibleShutdownTypes>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-PcsvDevice [-TargetAddress] <string> [-Credential] <pscredential> [-ManagementProtocol] <ManagementProtocol> [[-Port] <uint16>] [-Authentication <Authentication>] [-UseSSL] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-TimeoutSec <uint32>] [-ShutdownType <PossibleShutdownTypes>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-PcsvDevice -InputObject <CimInstance#MSFT_PCSVDevice[]> [-ShutdownType <PossibleShutdownTypes>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- ShutdownType <PossibleShutdownTypes> (Required: false)
- SkipCACheck <switch> (Required: false)
- SkipCNCheck <switch> (Required: false)
- SkipRevocationCheck <switch> (Required: false)
- TargetAddress <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- TimeoutSec <uint32> (Required: false)
- UseSSL <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Stop-Process

```powershell
Stop-Process [-Id] <int[]> [-PassThru] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-Process -Name <string[]> [-PassThru] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-Process [-InputObject] <Process[]> [-PassThru] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Id <int[]> (Required: true)
- InputObject <Process[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Stop-ReFSDedupJob

```powershell
Stop-ReFSDedupJob [-Volume] <string> [<CommonParameters>]

PARAMETERS:
- Volume <string> (Required: true)
```

### Stop-ScheduledTask

```powershell
Stop-ScheduledTask [-TaskName] <string> [[-TaskPath] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Stop-ScheduledTask [-InputObject] <CimInstance#MSFT_ScheduledTask> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_ScheduledTask> (Required: true)
- TaskName <string> (Required: true)
- TaskPath <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Stop-Service

```powershell
Stop-Service [-InputObject] <ServiceController[]> [-Force] [-NoWait] [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-Service [-Name] <string[]> [-Force] [-NoWait] [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-Service -DisplayName <string[]> [-Force] [-NoWait] [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- DisplayName <string[]> (Required: true)
- Exclude <string[]> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- InputObject <ServiceController[]> (Required: true)
- Name <string[]> (Required: true)
- NoWait <switch> (Required: false)
- PassThru <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Stop-StorageDiagnosticLog

```powershell
Stop-StorageDiagnosticLog [-StorageSubSystemFriendlyName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Stop-StorageDiagnosticLog -StorageSubSystemUniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Stop-StorageDiagnosticLog -StorageSubSystemName <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Stop-StorageDiagnosticLog -InputObject <CimInstance#MSFT_StorageSubSystem[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_StorageSubSystem[]> (Required: true)
- PassThru <switch> (Required: false)
- StorageSubSystemFriendlyName <string[]> (Required: true)
- StorageSubSystemName <string[]> (Required: true)
- StorageSubSystemUniqueId <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Stop-StorageJob

```powershell
Stop-StorageJob [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-StorageJob -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-StorageJob -Name <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Stop-StorageJob -InputObject <CimInstance#MSFT_StorageJob[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_StorageJob[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Stop-Trace

```powershell
Stop-Trace [-SessionName] <Object> [-ETS] [<CommonParameters>]

PARAMETERS:
- ETS <switch> (Required: false)
- SessionName <Object> (Required: true)
```

### Stop-Transcript

```powershell
Stop-Transcript [<CommonParameters>]

```

### Suspend-BitLocker

```powershell
Suspend-BitLocker [-MountPoint] <string[]> [[-RebootCount] <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- MountPoint <string[]> (Required: true)
- RebootCount <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Suspend-BitsTransfer

```powershell
Suspend-BitsTransfer [-BitsJob] <BitsJob[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- BitsJob <BitsJob[]> (Required: true)
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Suspend-Job

```powershell
Suspend-Job [-Id] <int[]> [-Force] [-Wait] [-WhatIf] [-Confirm] [<CommonParameters>]

Suspend-Job [-Job] <Job[]> [-Force] [-Wait] [-WhatIf] [-Confirm] [<CommonParameters>]

Suspend-Job [-Name] <string[]> [-Force] [-Wait] [-WhatIf] [-Confirm] [<CommonParameters>]

Suspend-Job [-InstanceId] <guid[]> [-Force] [-Wait] [-WhatIf] [-Confirm] [<CommonParameters>]

Suspend-Job [-Filter] <hashtable> [-Force] [-Wait] [-WhatIf] [-Confirm] [<CommonParameters>]

Suspend-Job [-State] <JobState> [-Force] [-Wait] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Filter <hashtable> (Required: true)
- Force <switch> (Required: false)
- Id <int[]> (Required: true)
- InstanceId <guid[]> (Required: true)
- Job <Job[]> (Required: true)
- Name <string[]> (Required: true)
- State <JobState> (Required: true)
- Wait <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Suspend-PrintJob

```powershell
Suspend-PrintJob [-InputObject] <CimInstance#MSFT_PrintJob> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Suspend-PrintJob [-PrinterName] <string> [-ID] <uint32> [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Suspend-PrintJob [-PrinterObject] <CimInstance#MSFT_Printer> [-ID] <uint32> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Suspend-ReFSDedupSchedule

```powershell
Suspend-ReFSDedupSchedule [-Volume] <string> [<CommonParameters>]

PARAMETERS:
- Volume <string> (Required: true)
```

### Suspend-Service

```powershell
Suspend-Service [-InputObject] <ServiceController[]> [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Suspend-Service [-Name] <string[]> [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Suspend-Service -DisplayName <string[]> [-PassThru] [-Include <string[]>] [-Exclude <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Suspend-StorageBusDisk

```powershell
Suspend-StorageBusDisk -Guid <string> [<CommonParameters>]

Suspend-StorageBusDisk -Number <uint16> [<CommonParameters>]

Suspend-StorageBusDisk -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> [<CommonParameters>]

PARAMETERS:
- Guid <string> (Required: true)
- Number <uint16> (Required: true)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
```

### Switch-Certificate

```powershell
Switch-Certificate [-OldCert] <Certificate> [-NewCert] <Certificate> [-NotifyOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- NewCert <Certificate> (Required: true)
- NotifyOnly <switch> (Required: false)
- OldCert <Certificate> (Required: true)
- WhatIf <switch> (Required: false)
```

### Sync-AppvPublishingServer

```powershell
Sync-AppvPublishingServer [-ServerId] <uint32> [-Global] [-Force] [-NetworkCostAware] [-HidePublishingRefreshUI] [<CommonParameters>]

Sync-AppvPublishingServer [-Server] <AppvPublishingServer> [-Global] [-Force] [-NetworkCostAware] [-HidePublishingRefreshUI] [<CommonParameters>]

Sync-AppvPublishingServer [[-Name] <string>] [[-URL] <string>] [-Global] [-Force] [-NetworkCostAware] [-HidePublishingRefreshUI] [<CommonParameters>]

Sync-AppvPublishingServer [-PublishFromXML] [-Global] [-NetworkCostAware] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- Global <switch> (Required: false)
- HidePublishingRefreshUI <switch> (Required: false)
- Name <string> (Required: false)
- NetworkCostAware <switch> (Required: false)
- PublishFromXML <switch> (Required: false)
- Server <AppvPublishingServer> (Required: true)
- ServerId <uint32> (Required: true)
- URL <string> (Required: false)
```

### Sync-NetIPsecRule

```powershell
Sync-NetIPsecRule [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Sync-NetIPsecRule [-IPsecRuleName] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Sync-NetIPsecRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Sync-NetIPsecRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Mode <IPsecMode[]>] [-InboundSecurity <SecurityPolicy[]>] [-OutboundSecurity <SecurityPolicy[]>] [-QuickModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-Phase2AuthSet <string[]>] [-KeyModule <KeyModule[]>] [-AllowWatchKey <bool[]>] [-AllowSetKey <bool[]>] [-RemoteTunnelHostname <string[]>] [-ForwardPathLifetime <uint32[]>] [-EncryptedTunnelBypass <bool[]>] [-RequireAuthorization <bool[]>] [-User <string[]>] [-Machine <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Sync-NetIPsecRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Sync-NetIPsecRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Sync-NetIPsecRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Sync-NetIPsecRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Sync-NetIPsecRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Sync-NetIPsecRule -AssociatedNetIPsecPhase2AuthSet <CimInstance#MSFT_NetIKEP2AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Sync-NetIPsecRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Sync-NetIPsecRule -AssociatedNetIPsecQuickModeCryptoSet <CimInstance#MSFT_NetIKEQMCryptoSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Sync-NetIPsecRule -InputObject <CimInstance#MSFT_NetConSecRule[]> [-Servers <string[]>] [-Domains <string[]>] [-EndpointType <EndpointType>] [-AddressType <AddressVersion>] [-DnsServers <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressType <AddressVersion> (Required: false)
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
- DnsServers <string[]> (Required: false)
- Domains <string[]> (Required: false)
- Enabled <Enabled[]> (Required: false)
- EncryptedTunnelBypass <bool[]> (Required: false)
- EndpointType <EndpointType> (Required: false)
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
- Phase1AuthSet <string[]> (Required: false)
- Phase2AuthSet <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- QuickModeCryptoSet <string[]> (Required: false)
- RemoteTunnelHostname <string[]> (Required: false)
- RequireAuthorization <bool[]> (Required: false)
- Servers <string[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- User <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

## T

### TabExpansion2

```powershell
TabExpansion2 [-inputScript] <string> [-cursorColumn] <int> [[-options] <hashtable>] [<CommonParameters>]

TabExpansion2 [-ast] <Ast> [-tokens] <Token[]> [-positionOfCursor] <IScriptPosition> [[-options] <hashtable>] [<CommonParameters>]

PARAMETERS:
- ast <Ast> (Required: true)
- cursorColumn <int> (Required: true)
- inputScript <string> (Required: true)
- options <hashtable> (Required: false)
- positionOfCursor <IScriptPosition> (Required: true)
- tokens <Token[]> (Required: true)
```

### Tee-Object

```powershell
Tee-Object [-FilePath] <string> [-InputObject <psobject>] [-Append] [<CommonParameters>]

Tee-Object -LiteralPath <string> [-InputObject <psobject>] [<CommonParameters>]

Tee-Object -Variable <string> [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- Append <switch> (Required: false)
- FilePath <string> (Required: true)
- InputObject <psobject> (Required: false)
- LiteralPath <string> (Required: true)
- Variable <string> (Required: true)
```

### Tee-Output

```powershell
Tee-Output [-InputObject] <array> [[-BinaryWriter] <BinaryWriter>] [[-LogStreamWriter] <StreamWriter>] [-Test] [<CommonParameters>]

PARAMETERS:
- BinaryWriter <BinaryWriter> (Required: false)
- InputObject <array> (Required: true)
- LogStreamWriter <StreamWriter> (Required: false)
- Test <switch> (Required: false)
```

### Test-AppLockerPolicy

```powershell
Test-AppLockerPolicy [-XmlPolicy] <string> -Path <List[string]> [-User <string>] [-Filter <List[PolicyDecision]>] [<CommonParameters>]

Test-AppLockerPolicy [-XmlPolicy] <string> -Packages <List[AppxPackage]> [-User <string>] [-Filter <List[PolicyDecision]>] [<CommonParameters>]

Test-AppLockerPolicy [-PolicyObject] <AppLockerPolicy> -Path <List[string]> [-User <string>] [-Filter <List[PolicyDecision]>] [<CommonParameters>]

PARAMETERS:
- Filter <List[PolicyDecision]> (Required: false)
- Packages <List[AppxPackage]> (Required: true)
- Path <List[string]> (Required: true)
- PolicyObject <AppLockerPolicy> (Required: true)
- User <string> (Required: false)
- XmlPolicy <string> (Required: true)
```

### Test-Certificate

```powershell
Test-Certificate [-Cert] <Certificate> [-Policy <TestCertificatePolicy>] [-User] [-EKU <string[]>] [-DNSName <string>] [-AllowUntrustedRoot] [<CommonParameters>]

PARAMETERS:
- AllowUntrustedRoot <switch> (Required: false)
- Cert <Certificate> (Required: true)
- DNSName <string> (Required: false)
- EKU <string[]> (Required: false)
- Policy <TestCertificatePolicy> (Required: false)
- User <switch> (Required: false)
```

### Test-ComputerSecureChannel

```powershell
Test-ComputerSecureChannel [-Repair] [-Server <string>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Repair <switch> (Required: false)
- Server <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Test-Connection

```powershell
Test-Connection [-ComputerName] <string[]> [-AsJob] [-DcomAuthentication <AuthenticationLevel>] [-WsmanAuthentication <string>] [-Protocol <string>] [-BufferSize <int>] [-Count <int>] [-Impersonation <ImpersonationLevel>] [-ThrottleLimit <int>] [-TimeToLive <int>] [-Delay <int>] [<CommonParameters>]

Test-Connection [-ComputerName] <string[]> [-Source] <string[]> [-AsJob] [-DcomAuthentication <AuthenticationLevel>] [-WsmanAuthentication <string>] [-Protocol <string>] [-BufferSize <int>] [-Count <int>] [-Credential <pscredential>] [-Impersonation <ImpersonationLevel>] [-ThrottleLimit <int>] [-TimeToLive <int>] [-Delay <int>] [<CommonParameters>]

Test-Connection [-ComputerName] <string[]> [-DcomAuthentication <AuthenticationLevel>] [-WsmanAuthentication <string>] [-Protocol <string>] [-BufferSize <int>] [-Count <int>] [-Impersonation <ImpersonationLevel>] [-TimeToLive <int>] [-Delay <int>] [-Quiet] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BufferSize <int> (Required: false)
- ComputerName <string[]> (Required: true)
- Count <int> (Required: false)
- Credential <pscredential> (Required: false)
- DcomAuthentication <AuthenticationLevel> (Required: false)
- Delay <int> (Required: false)
- Impersonation <ImpersonationLevel> (Required: false)
- Protocol <string> (Required: false)
- Quiet <switch> (Required: false)
- Source <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- TimeToLive <int> (Required: false)
- WsmanAuthentication <string> (Required: false)
```

### Test-DscConfiguration

```powershell
Test-DscConfiguration [[-ComputerName] <string[]>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-AsJob] [-Detailed] [<CommonParameters>]

Test-DscConfiguration [-Path] <string> [[-ComputerName] <string[]>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Test-DscConfiguration [[-ComputerName] <string[]>] -ReferenceConfiguration <string> [-Credential <pscredential>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Test-DscConfiguration [-Path] <string> -CimSession <CimSession[]> [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Test-DscConfiguration -CimSession <CimSession[]> -ReferenceConfiguration <string> [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Test-DscConfiguration -CimSession <CimSession[]> [-ThrottleLimit <int>] [-AsJob] [-Detailed] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: true)
- ComputerName <string[]> (Required: false)
- Credential <pscredential> (Required: false)
- Detailed <switch> (Required: false)
- Path <string> (Required: true)
- ReferenceConfiguration <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Test-Dtc

```powershell
DESCRIPTION:


PARAMETERS:
- LocalComputerName <String> (Required: false)
- RemoteComputerName <String> (Required: false)
- ResourceManagerPort <Int32> (Required: false)
- WhatIf <SwitchParameter> (Required: false)
- Confirm <SwitchParameter> (Required: false)
```

### Test-FileCatalog

```powershell
Test-FileCatalog [-CatalogFilePath] <string> [[-Path] <string[]>] [-Detailed] [-FilesToSkip <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CatalogFilePath <string> (Required: true)
- Confirm <switch> (Required: false)
- Detailed <switch> (Required: false)
- FilesToSkip <string[]> (Required: false)
- Path <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Test-KdsRootKey

```powershell
Test-KdsRootKey [-KeyId] <guid> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- KeyId <guid> (Required: true)
- WhatIf <switch> (Required: false)
```

### Test-ModuleManifest

```powershell
Test-ModuleManifest [-Path] <string> [<CommonParameters>]

PARAMETERS:
- Path <string> (Required: true)
```

### Test-NetConnection

```powershell
Test-NetConnection [[-ComputerName] <string>] [-TraceRoute] [-Hops <int>] [-InformationLevel <string>] [<CommonParameters>]

Test-NetConnection [[-ComputerName] <string>] [-CommonTCPPort] <string> [-InformationLevel <string>] [<CommonParameters>]

Test-NetConnection [[-ComputerName] <string>] -Port <int> [-InformationLevel <string>] [<CommonParameters>]

Test-NetConnection [[-ComputerName] <string>] -DiagnoseRouting [-ConstrainSourceAddress <string>] [-ConstrainInterface <uint32>] [-InformationLevel <string>] [<CommonParameters>]

PARAMETERS:
- CommonTCPPort <string> (Required: true)
- ComputerName <string> (Required: false)
- ConstrainInterface <uint32> (Required: false)
- ConstrainSourceAddress <string> (Required: false)
- DiagnoseRouting <switch> (Required: true)
- Hops <int> (Required: false)
- InformationLevel <string> (Required: false)
- Port <int> (Required: true)
- TraceRoute <switch> (Required: false)
```

### Test-Path

```powershell
Test-Path [-Path] <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-PathType <TestPathType>] [-IsValid] [-Credential <pscredential>] [-UseTransaction] [-OlderThan <datetime>] [-NewerThan <datetime>] [<CommonParameters>]

Test-Path -LiteralPath <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-PathType <TestPathType>] [-IsValid] [-Credential <pscredential>] [-UseTransaction] [-OlderThan <datetime>] [-NewerThan <datetime>] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Include <string[]> (Required: false)
- IsValid <switch> (Required: false)
- LiteralPath <string[]> (Required: true)
- NewerThan <datetime> (Required: false)
- OlderThan <datetime> (Required: false)
- Path <string[]> (Required: true)
- PathType <TestPathType> (Required: false)
- UseTransaction <switch> (Required: false)
```

### Test-PSSessionConfigurationFile

```powershell
Test-PSSessionConfigurationFile [-Path] <string> [<CommonParameters>]

PARAMETERS:
- Path <string> (Required: true)
```

### Test-ScriptFileInfo

```powershell
Test-ScriptFileInfo [-Path] <string> [<CommonParameters>]

Test-ScriptFileInfo -LiteralPath <string> [<CommonParameters>]

PARAMETERS:
- LiteralPath <string> (Required: true)
- Path <string> (Required: true)
```

### Test-UevTemplate

```powershell
Test-UevTemplate [-Path] <string[]> [<CommonParameters>]

Test-UevTemplate -LiteralPath <string[]> [<CommonParameters>]

PARAMETERS:
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
```

### Test-WSMan

```powershell
Test-WSMan [[-ComputerName] <string>] [-Authentication <AuthenticationMechanism>] [-Port <int>] [-UseSSL] [-ApplicationName <string>] [-Credential <pscredential>] [-CertificateThumbprint <string>] [<CommonParameters>]

PARAMETERS:
- ApplicationName <string> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string> (Required: false)
- Credential <pscredential> (Required: false)
- Port <int> (Required: false)
- UseSSL <switch> (Required: false)
```

### Trace-Command

```powershell
Trace-Command [-Name] <string[]> [-Expression] <scriptblock> [[-Option] <PSTraceSourceOptions>] [-InputObject <psobject>] [-ListenerOption <TraceOptions>] [-FilePath <string>] [-Force] [-Debugger] [-PSHost] [<CommonParameters>]

Trace-Command [-Name] <string[]> [-Command] <string> [[-Option] <PSTraceSourceOptions>] [-InputObject <psobject>] [-ArgumentList <Object[]>] [-ListenerOption <TraceOptions>] [-FilePath <string>] [-Force] [-Debugger] [-PSHost] [<CommonParameters>]

PARAMETERS:
- ArgumentList <Object[]> (Required: false)
- Command <string> (Required: true)
- Debugger <switch> (Required: false)
- Expression <scriptblock> (Required: true)
- FilePath <string> (Required: false)
- Force <switch> (Required: false)
- InputObject <psobject> (Required: false)
- ListenerOption <TraceOptions> (Required: false)
- Name <string[]> (Required: true)
- Option <PSTraceSourceOptions> (Required: false)
- PSHost <switch> (Required: false)
```
