# Metascript Functions U through Z

## U

### Unblock-File

```powershell
Unblock-File [-Path] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Unblock-File -LiteralPath <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Unblock-FileShareAccess

```powershell
Unblock-FileShareAccess -Name <string[]> -AccountName <string[]> [-FileServer <CimInstance#MSFT_FileServer>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Unblock-FileShareAccess -UniqueId <string[]> -AccountName <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Unblock-FileShareAccess -InputObject <CimInstance#MSFT_FileShare[]> -AccountName <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Unblock-SmbClientAccessToServer

```powershell
Unblock-SmbClientAccessToServer [-Name] <string[]> -IdentifierType <IdentifierType> -Identifier <string> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Unblock-SmbClientAccessToServer -InputObject <CimInstance#MSFT_SmbServerCertificateMapping[]> -IdentifierType <IdentifierType> -Identifier <string> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Unblock-SmbShareAccess

```powershell
Unblock-SmbShareAccess [-Name] <string[]> [[-ScopeName] <string[]>] [-SmbInstance <SmbInstance>] [-AccountName <string[]>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Unblock-SmbShareAccess -InputObject <CimInstance#MSFT_SMBShare[]> [-AccountName <string[]>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Unblock-Tpm

```powershell
Unblock-Tpm [[-OwnerAuthorization] <string>] [<CommonParameters>]

Unblock-Tpm -File <string> [<CommonParameters>]

PARAMETERS:
- File <string> (Required: true)
- OwnerAuthorization <string> (Required: false)
```

### Undo-DtcDiagnosticTransaction

```powershell
Undo-DtcDiagnosticTransaction [-Transaction] <DtcDiagnosticTransaction> [<CommonParameters>]

PARAMETERS:
- Transaction <DtcDiagnosticTransaction> (Required: true)
```

### Undo-Transaction

```powershell
Undo-Transaction [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Uninstall-Dtc

```powershell
Uninstall-Dtc [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Uninstall-Language

```powershell
Uninstall-Language [-Language] <string> [-PassThru] [<CommonParameters>]

PARAMETERS:
- Language <string> (Required: true)
- PassThru <switch> (Required: false)
```

### Uninstall-Module

```powershell
Uninstall-Module [-Name] <string[]> [-MinimumVersion <version>] [-RequiredVersion <version>] [-MaximumVersion <version>] [-AllVersions] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Uninstall-Module [-InputObject] <psobject[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllVersions <switch> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- InputObject <psobject[]> (Required: true)
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- Name <string[]> (Required: true)
- RequiredVersion <version> (Required: false)
- WhatIf <switch> (Required: false)
```

### Uninstall-Package

```powershell
Uninstall-Package [-InputObject] <SoftwareIdentity[]> [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [<CommonParameters>]

Uninstall-Package [-Name] <string[]> [-RequiredVersion <string>] [-MinimumVersion <string>] [-MaximumVersion <string>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-ProviderName <string[]>] [<CommonParameters>]

Uninstall-Package [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-IncludeWindowsInstaller] [-IncludeSystemComponent] [<CommonParameters>]

Uninstall-Package [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-IncludeWindowsInstaller] [-IncludeSystemComponent] [<CommonParameters>]

Uninstall-Package [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-AdditionalArguments <string[]>] [<CommonParameters>]

Uninstall-Package [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-AdditionalArguments <string[]>] [<CommonParameters>]

Uninstall-Package [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-PackageManagementProvider <string>] [-Type <string>] [-Scope <string>] [-AllowClobber] [-SkipPublisherCheck] [-InstallUpdate] [-NoPathUpdate] [<CommonParameters>]

Uninstall-Package [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-PackageManagementProvider <string>] [-Type <string>] [-Scope <string>] [-AllowClobber] [-SkipPublisherCheck] [-InstallUpdate] [-NoPathUpdate] [<CommonParameters>]

PARAMETERS:
- AdditionalArguments <string[]> (Required: false)
- AllVersions <switch> (Required: false)
- AllowClobber <switch> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- IncludeSystemComponent <switch> (Required: false)
- IncludeWindowsInstaller <switch> (Required: false)
- InputObject <SoftwareIdentity[]> (Required: true)
- InstallUpdate <switch> (Required: false)
- MaximumVersion <string> (Required: false)
- MinimumVersion <string> (Required: false)
- Name <string[]> (Required: true)
- NoPathUpdate <switch> (Required: false)
- PackageManagementProvider <string> (Required: false)
- ProviderName <string[]> (Required: false)
- RequiredVersion <string> (Required: false)
- Scope <string> (Required: false)
- SkipPublisherCheck <switch> (Required: false)
- Type <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Uninstall-ProvisioningPackage

```powershell
Uninstall-ProvisioningPackage [-PackageId] <string> [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

Uninstall-ProvisioningPackage -PackagePath <string> [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

Uninstall-ProvisioningPackage -AllInstalledPackages [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

Uninstall-ProvisioningPackage [-RuntimeMetadata] <RuntimeProvPackageMetadata> [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

PARAMETERS:
- AllInstalledPackages <switch> (Required: true)
- ConnectedDevice <switch> (Required: false)
- LogsDirectoryPath <string> (Required: false)
- PackageId <string> (Required: true)
- PackagePath <string> (Required: true)
- RuntimeMetadata <RuntimeProvPackageMetadata> (Required: true)
- WprpFile <string> (Required: false)
```

### Uninstall-Script

```powershell
Uninstall-Script [-Name] <string[]> [-MinimumVersion <version>] [-RequiredVersion <version>] [-MaximumVersion <version>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Uninstall-Script [-InputObject] <psobject[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- InputObject <psobject[]> (Required: true)
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- Name <string[]> (Required: true)
- RequiredVersion <version> (Required: false)
- WhatIf <switch> (Required: false)
```

### Uninstall-TrustedProvisioningCertificate

```powershell
Uninstall-TrustedProvisioningCertificate [-Thumbprint] <string> [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

PARAMETERS:
- ConnectedDevice <switch> (Required: false)
- LogsDirectoryPath <string> (Required: false)
- Thumbprint <string> (Required: true)
- WprpFile <string> (Required: false)
```

### Unlock-BitLocker

```powershell
Unlock-BitLocker [-MountPoint] <string[]> -Password <securestring> [-WhatIf] [-Confirm] [<CommonParameters>]

Unlock-BitLocker [-MountPoint] <string[]> -RecoveryPassword <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Unlock-BitLocker [-MountPoint] <string[]> -RecoveryKeyPath <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Unlock-BitLocker [-MountPoint] <string[]> -AdAccountOrGroup [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AdAccountOrGroup <switch> (Required: true)
- Confirm <switch> (Required: false)
- MountPoint <string[]> (Required: true)
- Password <securestring> (Required: true)
- RecoveryKeyPath <string> (Required: true)
- RecoveryPassword <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Unprotect-CmsMessage

```powershell
Unprotect-CmsMessage [-EventLogRecord] <EventLogRecord> [[-To] <CmsMessageRecipient[]>] [-IncludeContext] [<CommonParameters>]

Unprotect-CmsMessage [-Content] <string> [[-To] <CmsMessageRecipient[]>] [-IncludeContext] [<CommonParameters>]

Unprotect-CmsMessage [-Path] <string> [[-To] <CmsMessageRecipient[]>] [-IncludeContext] [<CommonParameters>]

Unprotect-CmsMessage [-LiteralPath] <string> [[-To] <CmsMessageRecipient[]>] [-IncludeContext] [<CommonParameters>]

PARAMETERS:
- Content <string> (Required: true)
- EventLogRecord <EventLogRecord> (Required: true)
- IncludeContext <switch> (Required: false)
- LiteralPath <string> (Required: true)
- Path <string> (Required: true)
- To <CmsMessageRecipient[]> (Required: false)
```

### Unpublish-AppvClientPackage

```powershell
Unpublish-AppvClientPackage [-PackageId] <guid> [-VersionId] <guid> [-Global] [-UserSID <string>] [<CommonParameters>]

Unpublish-AppvClientPackage [-Package] <AppvClientPackage> [-Global] [-UserSID <string>] [<CommonParameters>]

Unpublish-AppvClientPackage [-Name] <string> [[-Version] <string>] [-Global] [-UserSID <string>] [<CommonParameters>]

PARAMETERS:
- Global <switch> (Required: false)
- Name <string> (Required: true)
- Package <AppvClientPackage> (Required: true)
- PackageId <guid> (Required: true)
- UserSID <string> (Required: false)
- Version <string> (Required: false)
- VersionId <guid> (Required: true)
```

### Unregister-AppBackgroundTask

```powershell
Unregister-AppBackgroundTask -TaskID <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- TaskID <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Unregister-ClusteredScheduledTask

```powershell
Unregister-ClusteredScheduledTask [-TaskName] <string> [[-Cluster] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Unregister-ClusteredScheduledTask [[-InputObject] <CimInstance#MSFT_ClusteredScheduledTask>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Cluster <string> (Required: false)
- InputObject <CimInstance#MSFT_ClusteredScheduledTask> (Required: false)
- TaskName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Unregister-Event

```powershell
Unregister-Event [-SourceIdentifier] <string> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Unregister-Event [-SubscriptionId] <int> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- SourceIdentifier <string> (Required: true)
- SubscriptionId <int> (Required: true)
- WhatIf <switch> (Required: false)
```

### Unregister-IscsiSession

```powershell
Unregister-IscsiSession -SessionIdentifier <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Unregister-IscsiSession -InputObject <CimInstance#MSFT_iSCSISession[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_iSCSISession[]> (Required: true)
- PassThru <switch> (Required: false)
- SessionIdentifier <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Unregister-PackageSource

```powershell
Unregister-PackageSource [[-Source] <string>] [-Location <string>] [-Credential <pscredential>] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-ProviderName <string>] [<CommonParameters>]

Unregister-PackageSource -InputObject <PackageSource[]> [-Credential <pscredential>] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [<CommonParameters>]

Unregister-PackageSource [-Credential <pscredential>] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-PackageManagementProvider <string>] [-PublishLocation <string>] [-ScriptSourceLocation <string>] [-ScriptPublishLocation <string>] [<CommonParameters>]

Unregister-PackageSource [-Credential <pscredential>] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-PackageManagementProvider <string>] [-PublishLocation <string>] [-ScriptSourceLocation <string>] [-ScriptPublishLocation <string>] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- InputObject <PackageSource[]> (Required: true)
- Location <string> (Required: false)
- PackageManagementProvider <string> (Required: false)
- ProviderName <string> (Required: false)
- PublishLocation <string> (Required: false)
- ScriptPublishLocation <string> (Required: false)
- ScriptSourceLocation <string> (Required: false)
- Source <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Unregister-PSRepository

```powershell
Unregister-PSRepository [-Name] <string[]> [<CommonParameters>]

PARAMETERS:
- Name <string[]> (Required: true)
```

### Unregister-PSSessionConfiguration

```powershell
Unregister-PSSessionConfiguration [-Name] <string> [-Force] [-NoServiceRestart] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Name <string> (Required: true)
- NoServiceRestart <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Unregister-ScheduledJob

```powershell
Unregister-ScheduledJob [-InputObject] <ScheduledJobDefinition[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Unregister-ScheduledJob [-Id] <int[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Unregister-ScheduledJob [-Name] <string[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Id <int[]> (Required: true)
- InputObject <ScheduledJobDefinition[]> (Required: true)
- Name <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Unregister-ScheduledTask

```powershell
Unregister-ScheduledTask [[-TaskName] <string[]>] [[-TaskPath] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Unregister-ScheduledTask -InputObject <CimInstance#MSFT_ScheduledTask[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_ScheduledTask[]> (Required: true)
- PassThru <switch> (Required: false)
- TaskName <string[]> (Required: false)
- TaskPath <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Unregister-StorageSubsystem

```powershell
Unregister-StorageSubsystem [-ProviderName] <string[]> [-StorageSubSystemUniqueId <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Unregister-StorageSubsystem -ProviderUniqueId <string[]> [-StorageSubSystemUniqueId <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Unregister-StorageSubsystem -InputObject <CimInstance#MSFT_StorageProvider[]> [-StorageSubSystemUniqueId <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Force <switch> (Required: false)
- InputObject <CimInstance#MSFT_StorageProvider[]> (Required: true)
- PassThru <switch> (Required: false)
- ProviderName <string[]> (Required: true)
- ProviderUniqueId <string[]> (Required: true)
- StorageSubSystemUniqueId <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Unregister-UevTemplate

```powershell
Unregister-UevTemplate [-ID] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Unregister-UevTemplate -All [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: true)
- Confirm <switch> (Required: false)
- ID <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Unregister-WindowsDeveloperLicense

```powershell
Unregister-WindowsDeveloperLicense [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-AutologgerConfig

```powershell
Update-AutologgerConfig [-Name] <string[]> [-BufferSize <uint32>] [-ClockType <ClockType>] [-DisableRealtimePersistence <uint32>] [-LocalFilePath <string>] [-FileMax <uint32>] [-FlushTimer <uint32>] [-Guid <string>] [-LogFileMode <uint32>] [-MaximumFileSize <uint32>] [-MaximumBuffers <uint32>] [-MinimumBuffers <uint32>] [-Start <uint32>] [-InitStatus <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Update-AutologgerConfig -InputObject <CimInstance#MSFT_AutologgerConfig[]> [-BufferSize <uint32>] [-ClockType <ClockType>] [-DisableRealtimePersistence <uint32>] [-LocalFilePath <string>] [-FileMax <uint32>] [-FlushTimer <uint32>] [-Guid <string>] [-LogFileMode <uint32>] [-MaximumFileSize <uint32>] [-MaximumBuffers <uint32>] [-MinimumBuffers <uint32>] [-Start <uint32>] [-InitStatus <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BufferSize <uint32> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClockType <ClockType> (Required: false)
- Confirm <switch> (Required: false)
- DisableRealtimePersistence <uint32> (Required: false)
- FileMax <uint32> (Required: false)
- FlushTimer <uint32> (Required: false)
- Guid <string> (Required: false)
- InitStatus <uint32> (Required: false)
- InputObject <CimInstance#MSFT_AutologgerConfig[]> (Required: true)
- LocalFilePath <string> (Required: false)
- LogFileMode <uint32> (Required: false)
- MaximumBuffers <uint32> (Required: false)
- MaximumFileSize <uint32> (Required: false)
- MinimumBuffers <uint32> (Required: false)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Start <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-Disk

```powershell
Update-Disk [-Number] <uint32[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-Disk -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-Disk [-FriendlyName <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-Disk -Path <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-Disk -InputObject <CimInstance#MSFT_Disk[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: false)
- InputObject <CimInstance#MSFT_Disk[]> (Required: true)
- Number <uint32[]> (Required: true)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
```

### Update-DscConfiguration

```powershell
Update-DscConfiguration [[-ComputerName] <string[]>] [-Wait] [-JobName <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Update-DscConfiguration -CimSession <CimSession[]> [-Wait] [-JobName <string>] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession[]> (Required: true)
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- JobName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- Wait <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-EtwTraceSession

```powershell
Update-EtwTraceSession [-Name] <string[]> [-LogFileMode <uint32>] [-LocalFilePath <string>] [-MaximumFileSize <uint32>] [-BufferSize <uint32>] [-MaximumBuffers <uint32>] [-FlushTimer <uint32>] [-ClockType <ClockType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Update-EtwTraceSession -InputObject <CimInstance#MSFT_EtwTraceSession[]> [-LogFileMode <uint32>] [-LocalFilePath <string>] [-MaximumFileSize <uint32>] [-BufferSize <uint32>] [-MaximumBuffers <uint32>] [-FlushTimer <uint32>] [-ClockType <ClockType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BufferSize <uint32> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClockType <ClockType> (Required: false)
- Confirm <switch> (Required: false)
- FlushTimer <uint32> (Required: false)
- InputObject <CimInstance#MSFT_EtwTraceSession[]> (Required: true)
- LocalFilePath <string> (Required: false)
- LogFileMode <uint32> (Required: false)
- MaximumBuffers <uint32> (Required: false)
- MaximumFileSize <uint32> (Required: false)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-FormatData

```powershell
Update-FormatData [[-AppendPath] <string[]>] [-PrependPath <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AppendPath <string[]> (Required: false)
- Confirm <switch> (Required: false)
- PrependPath <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-Help

```powershell
Update-Help [[-Module] <string[]>] [[-SourcePath] <string[]>] [[-UICulture] <cultureinfo[]>] [-FullyQualifiedModule <ModuleSpecification[]>] [-Recurse] [-Credential <pscredential>] [-UseDefaultCredentials] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Update-Help [[-Module] <string[]>] [[-UICulture] <cultureinfo[]>] [-FullyQualifiedModule <ModuleSpecification[]>] [-LiteralPath <string[]>] [-Recurse] [-Credential <pscredential>] [-UseDefaultCredentials] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- FullyQualifiedModule <ModuleSpecification[]> (Required: false)
- LiteralPath <string[]> (Required: false)
- Module <string[]> (Required: false)
- Recurse <switch> (Required: false)
- SourcePath <string[]> (Required: false)
- UICulture <cultureinfo[]> (Required: false)
- UseDefaultCredentials <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-HostStorageCache

```powershell
Update-HostStorageCache [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Update-IscsiTarget

```powershell
Update-IscsiTarget [-NodeAddress <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-IscsiTarget [-IscsiConnection <CimInstance#MSFT_iSCSIConnection>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-IscsiTarget [-IscsiSession <CimInstance#MSFT_iSCSISession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-IscsiTarget [-IscsiTargetPortal <CimInstance#MSFT_iSCSITargetPortal>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-IscsiTarget [-InitiatorPort <CimInstance#MSFT_InitiatorPort>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-IscsiTarget -InputObject <CimInstance#MSFT_iSCSITarget[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InitiatorPort <CimInstance#MSFT_InitiatorPort> (Required: false)
- InputObject <CimInstance#MSFT_iSCSITarget[]> (Required: true)
- IscsiConnection <CimInstance#MSFT_iSCSIConnection> (Required: false)
- IscsiSession <CimInstance#MSFT_iSCSISession> (Required: false)
- IscsiTargetPortal <CimInstance#MSFT_iSCSITargetPortal> (Required: false)
- NodeAddress <string[]> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Update-IscsiTargetPortal

```powershell
Update-IscsiTargetPortal [-TargetPortalAddress] <string[]> [-InitiatorInstanceName <string>] [-InitiatorPortalAddress <string>] [-TargetPortalPortNumber <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-IscsiTargetPortal -InputObject <CimInstance#MSFT_iSCSITargetPortal[]> [-InitiatorInstanceName <string>] [-InitiatorPortalAddress <string>] [-TargetPortalPortNumber <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InitiatorInstanceName <string> (Required: false)
- InitiatorPortalAddress <string> (Required: false)
- InputObject <CimInstance#MSFT_iSCSITargetPortal[]> (Required: true)
- PassThru <switch> (Required: false)
- TargetPortalAddress <string[]> (Required: true)
- TargetPortalPortNumber <uint16> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Update-LapsADSchema

```powershell
Update-LapsADSchema [-Credential <pscredential>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-List

```powershell
Update-List [[-Property] <string>] [-Add <Object[]>] [-Remove <Object[]>] [-InputObject <psobject>] [<CommonParameters>]

Update-List [[-Property] <string>] -Replace <Object[]> [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- Add <Object[]> (Required: false)
- InputObject <psobject> (Required: false)
- Property <string> (Required: false)
- Remove <Object[]> (Required: false)
- Replace <Object[]> (Required: true)
```

### Update-Module

```powershell
Update-Module [[-Name] <string[]>] [-RequiredVersion <version>] [-MaximumVersion <version>] [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- MaximumVersion <version> (Required: false)
- Name <string[]> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- RequiredVersion <version> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-ModuleManifest

```powershell
Update-ModuleManifest [-Path] <string> [-NestedModules <Object[]>] [-Guid <guid>] [-Author <string>] [-CompanyName <string>] [-Copyright <string>] [-RootModule <string>] [-ModuleVersion <version>] [-Description <string>] [-ProcessorArchitecture <ProcessorArchitecture>] [-CompatiblePSEditions <string[]>] [-PowerShellVersion <version>] [-ClrVersion <version>] [-DotNetFrameworkVersion <version>] [-PowerShellHostName <string>] [-PowerShellHostVersion <version>] [-RequiredModules <Object[]>] [-TypesToProcess <string[]>] [-FormatsToProcess <string[]>] [-ScriptsToProcess <string[]>] [-RequiredAssemblies <string[]>] [-FileList <string[]>] [-ModuleList <Object[]>] [-FunctionsToExport <string[]>] [-AliasesToExport <string[]>] [-VariablesToExport <string[]>] [-CmdletsToExport <string[]>] [-DscResourcesToExport <string[]>] [-PrivateData <hashtable>] [-Tags <string[]>] [-ProjectUri <uri>] [-LicenseUri <uri>] [-IconUri <uri>] [-ReleaseNotes <string[]>] [-HelpInfoUri <uri>] [-PassThru] [-DefaultCommandPrefix <string>] [-ExternalModuleDependencies <string[]>] [-PackageManagementProviders <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AliasesToExport <string[]> (Required: false)
- Author <string> (Required: false)
- ClrVersion <version> (Required: false)
- CmdletsToExport <string[]> (Required: false)
- CompanyName <string> (Required: false)
- CompatiblePSEditions <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Copyright <string> (Required: false)
- DefaultCommandPrefix <string> (Required: false)
- Description <string> (Required: false)
- DotNetFrameworkVersion <version> (Required: false)
- DscResourcesToExport <string[]> (Required: false)
- ExternalModuleDependencies <string[]> (Required: false)
- FileList <string[]> (Required: false)
- FormatsToProcess <string[]> (Required: false)
- FunctionsToExport <string[]> (Required: false)
- Guid <guid> (Required: false)
- HelpInfoUri <uri> (Required: false)
- IconUri <uri> (Required: false)
- LicenseUri <uri> (Required: false)
- ModuleList <Object[]> (Required: false)
- ModuleVersion <version> (Required: false)
- NestedModules <Object[]> (Required: false)
- PackageManagementProviders <string[]> (Required: false)
- PassThru <switch> (Required: false)
- Path <string> (Required: true)
- PowerShellHostName <string> (Required: false)
- PowerShellHostVersion <version> (Required: false)
- PowerShellVersion <version> (Required: false)
- PrivateData <hashtable> (Required: false)
- ProcessorArchitecture <ProcessorArchitecture> (Required: false)
- ProjectUri <uri> (Required: false)
- ReleaseNotes <string[]> (Required: false)
- RequiredAssemblies <string[]> (Required: false)
- RequiredModules <Object[]> (Required: false)
- RootModule <string> (Required: false)
- ScriptsToProcess <string[]> (Required: false)
- Tags <string[]> (Required: false)
- TypesToProcess <string[]> (Required: false)
- VariablesToExport <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-MpSignature

```powershell
Update-MpSignature [-UpdateSource <UpdateSource>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UpdateSource <UpdateSource> (Required: false)
```

### Update-NetFirewallDynamicKeywordAddress

```powershell
Update-NetFirewallDynamicKeywordAddress [-Id <string>] [-Addresses <string>] [-Append <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Addresses <string> (Required: false)
- Append <bool> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Id <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Update-NetIPsecRule

```powershell
Update-NetIPsecRule -IPsecRuleName <string[]> -Action <ChangeAction> -EndpointType <EndpointType> [-PolicyStore <string>] [-GPOSession <string>] [-IPv6Addresses <string[]>] [-IPv4Addresses <string[]>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Update-NetIPsecRule -InputObject <CimInstance#MSFT_NetConSecRule[]> -Action <ChangeAction> -EndpointType <EndpointType> [-IPv6Addresses <string[]>] [-IPv4Addresses <string[]>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Action <ChangeAction> (Required: true)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EndpointType <EndpointType> (Required: true)
- GPOSession <string> (Required: false)
- IPsecRuleName <string[]> (Required: true)
- IPv4Addresses <string[]> (Required: false)
- IPv6Addresses <string[]> (Required: false)
- InputObject <CimInstance#MSFT_NetConSecRule[]> (Required: true)
- PassThru <switch> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-Script

```powershell
Update-Script [[-Name] <string[]>] [-RequiredVersion <version>] [-MaximumVersion <version>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- MaximumVersion <version> (Required: false)
- Name <string[]> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- RequiredVersion <version> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-ScriptFileInfo

```powershell
Update-ScriptFileInfo [-Path] <string> [-Version <version>] [-Author <string>] [-Guid <guid>] [-Description <string>] [-CompanyName <string>] [-Copyright <string>] [-RequiredModules <Object[]>] [-ExternalModuleDependencies <string[]>] [-RequiredScripts <string[]>] [-ExternalScriptDependencies <string[]>] [-Tags <string[]>] [-ProjectUri <uri>] [-LicenseUri <uri>] [-IconUri <uri>] [-ReleaseNotes <string[]>] [-PassThru] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Update-ScriptFileInfo [-LiteralPath] <string> [-Version <version>] [-Author <string>] [-Guid <guid>] [-Description <string>] [-CompanyName <string>] [-Copyright <string>] [-RequiredModules <Object[]>] [-ExternalModuleDependencies <string[]>] [-RequiredScripts <string[]>] [-ExternalScriptDependencies <string[]>] [-Tags <string[]>] [-ProjectUri <uri>] [-LicenseUri <uri>] [-IconUri <uri>] [-ReleaseNotes <string[]>] [-PassThru] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Author <string> (Required: false)
- CompanyName <string> (Required: false)
- Confirm <switch> (Required: false)
- Copyright <string> (Required: false)
- Description <string> (Required: false)
- ExternalModuleDependencies <string[]> (Required: false)
- ExternalScriptDependencies <string[]> (Required: false)
- Force <switch> (Required: false)
- Guid <guid> (Required: false)
- IconUri <uri> (Required: false)
- LicenseUri <uri> (Required: false)
- LiteralPath <string> (Required: true)
- PassThru <switch> (Required: false)
- Path <string> (Required: true)
- ProjectUri <uri> (Required: false)
- ReleaseNotes <string[]> (Required: false)
- RequiredModules <Object[]> (Required: false)
- RequiredScripts <string[]> (Required: false)
- Tags <string[]> (Required: false)
- Version <version> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-SmbMultichannelConnection

```powershell
Update-SmbMultichannelConnection [[-ServerName] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ServerName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Update-StorageBusCache

```powershell
Update-StorageBusCache [-NoBind] [-NoPool] [-NoCacheUsage] [-NoTiers] [<CommonParameters>]

PARAMETERS:
- NoBind <switch> (Required: false)
- NoCacheUsage <switch> (Required: false)
- NoPool <switch> (Required: false)
- NoTiers <switch> (Required: false)
```

### Update-StorageFirmware

```powershell
Update-StorageFirmware [-FriendlyName] <string> [-ImagePath <string>] [-SlotNumber <uint16>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Update-StorageFirmware -UniqueId <string> [-ImagePath <string>] [-SlotNumber <uint16>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Update-StorageFirmware -InputObject <CimInstance#MSFT_PhysicalDisk> [-ImagePath <string>] [-SlotNumber <uint16>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Update-StorageFirmware -StorageEnclosureUniqueId <string> [-ImagePath <string>] [-SlotNumber <uint16>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Update-StorageFirmware [-StorageEnclosureFriendlyName] <string> [-ImagePath <string>] [-SlotNumber <uint16>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Update-StorageFirmware -StorageEnclosure <CimInstance#MSFT_StorageEnclosure> [-ImagePath <string>] [-SlotNumber <uint16>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- FriendlyName <string> (Required: true)
- ImagePath <string> (Required: false)
- InputObject <CimInstance#MSFT_PhysicalDisk> (Required: true)
- SlotNumber <uint16> (Required: false)
- StorageEnclosure <CimInstance#MSFT_StorageEnclosure> (Required: true)
- StorageEnclosureFriendlyName <string> (Required: true)
- StorageEnclosureUniqueId <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
```

### Update-StoragePool

```powershell
Update-StoragePool [-FriendlyName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Update-StoragePool -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Update-StoragePool -Name <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Update-StoragePool -InputObject <CimInstance#MSFT_StoragePool[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Update-StorageProviderCache

```powershell
Update-StorageProviderCache [[-Name] <string[]>] [-Manufacturer <string[]>] [-DiscoveryLevel <DiscoveryLevel>] [-RootObject <ref>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-StorageProviderCache [-UniqueId <string[]>] [-DiscoveryLevel <DiscoveryLevel>] [-RootObject <ref>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-StorageProviderCache [-Manufacturer <string[]>] [-URI <uri[]>] [-DiscoveryLevel <DiscoveryLevel>] [-RootObject <ref>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-StorageProviderCache [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-DiscoveryLevel <DiscoveryLevel>] [-RootObject <ref>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Update-StorageProviderCache -InputObject <CimInstance#MSFT_StorageProvider[]> [-DiscoveryLevel <DiscoveryLevel>] [-RootObject <ref>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DiscoveryLevel <DiscoveryLevel> (Required: false)
- InputObject <CimInstance#MSFT_StorageProvider[]> (Required: true)
- Manufacturer <string[]> (Required: false)
- Name <string[]> (Required: false)
- PassThru <switch> (Required: false)
- RootObject <ref> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- ThrottleLimit <int> (Required: false)
- URI <uri[]> (Required: false)
- UniqueId <string[]> (Required: false)
```

### Update-TypeData

```powershell
Update-TypeData [[-AppendPath] <string[]>] [-PrependPath <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

Update-TypeData -TypeName <string> [-MemberType <PSMemberTypes>] [-MemberName <string>] [-Value <Object>] [-SecondValue <Object>] [-TypeConverter <type>] [-TypeAdapter <type>] [-SerializationMethod <string>] [-TargetTypeForDeserialization <type>] [-SerializationDepth <int>] [-DefaultDisplayProperty <string>] [-InheritPropertySerializationSet <bool>] [-StringSerializationSource <string>] [-DefaultDisplayPropertySet <string[]>] [-DefaultKeyPropertySet <string[]>] [-PropertySerializationSet <string[]>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Update-TypeData [-TypeData] <TypeData[]> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AppendPath <string[]> (Required: false)
- Confirm <switch> (Required: false)
- DefaultDisplayProperty <string> (Required: false)
- DefaultDisplayPropertySet <string[]> (Required: false)
- DefaultKeyPropertySet <string[]> (Required: false)
- Force <switch> (Required: false)
- InheritPropertySerializationSet <bool> (Required: false)
- MemberName <string> (Required: false)
- MemberType <PSMemberTypes> (Required: false)
- PrependPath <string[]> (Required: false)
- PropertySerializationSet <string[]> (Required: false)
- SecondValue <Object> (Required: false)
- SerializationDepth <int> (Required: false)
- SerializationMethod <string> (Required: false)
- StringSerializationSource <string> (Required: false)
- TargetTypeForDeserialization <type> (Required: false)
- TypeAdapter <type> (Required: false)
- TypeConverter <type> (Required: false)
- TypeData <TypeData[]> (Required: true)
- TypeName <string> (Required: true)
- Value <Object> (Required: false)
- WhatIf <switch> (Required: false)
```

### Update-UevTemplate

```powershell
Update-UevTemplate [-Path] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Update-UevTemplate -LiteralPath <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Update-WIMBootEntry

```powershell
Update-WIMBootEntry -Path <string> -ImagePath <string> -DataSourceID <long> [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- DataSourceID <long> (Required: true)
- ImagePath <string> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
```

### Use-Transaction

```powershell
Use-Transaction [-TransactedScript] <scriptblock> [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- TransactedScript <scriptblock> (Required: true)
- UseTransaction <switch> (Required: false)
```

### Use-WindowsUnattend

```powershell
Use-WindowsUnattend -UnattendPath <string> -Path <string> [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Use-WindowsUnattend -UnattendPath <string> -Online [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- NoRestart <switch> (Required: false)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- UnattendPath <string> (Required: true)
- WindowsDirectory <string> (Required: false)
```

## V

## W

### Wait-Debugger

```powershell
Wait-Debugger [<CommonParameters>]

```

### Wait-Event

```powershell
Wait-Event [[-SourceIdentifier] <string>] [-Timeout <int>] [<CommonParameters>]

PARAMETERS:
- SourceIdentifier <string> (Required: false)
- Timeout <int> (Required: false)
```

### Wait-Job

```powershell
Wait-Job [-Id] <int[]> [-Any] [-Timeout <int>] [-Force] [<CommonParameters>]

Wait-Job [-Job] <Job[]> [-Any] [-Timeout <int>] [-Force] [<CommonParameters>]

Wait-Job [-Name] <string[]> [-Any] [-Timeout <int>] [-Force] [<CommonParameters>]

Wait-Job [-InstanceId] <guid[]> [-Any] [-Timeout <int>] [-Force] [<CommonParameters>]

Wait-Job [-State] <JobState> [-Any] [-Timeout <int>] [-Force] [<CommonParameters>]

Wait-Job [-Filter] <hashtable> [-Any] [-Timeout <int>] [-Force] [<CommonParameters>]

PARAMETERS:
- Any <switch> (Required: false)
- Filter <hashtable> (Required: true)
- Force <switch> (Required: false)
- Id <int[]> (Required: true)
- InstanceId <guid[]> (Required: true)
- Job <Job[]> (Required: true)
- Name <string[]> (Required: true)
- State <JobState> (Required: true)
- Timeout <int> (Required: false)
```

### Wait-Process

```powershell
Wait-Process [-Name] <string[]> [[-Timeout] <int>] [<CommonParameters>]

Wait-Process [-Id] <int[]> [[-Timeout] <int>] [<CommonParameters>]

Wait-Process [[-Timeout] <int>] -InputObject <Process[]> [<CommonParameters>]

PARAMETERS:
- Id <int[]> (Required: true)
- InputObject <Process[]> (Required: true)
- Name <string[]> (Required: true)
- Timeout <int> (Required: false)
```

### Where-Object

```powershell
Where-Object [-Property] <string> [[-Value] <Object>] [-InputObject <psobject>] [-EQ] [<CommonParameters>]

Where-Object [-FilterScript] <scriptblock> [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CEQ [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -NE [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CNE [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -GT [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CGT [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -LT [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CLT [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -GE [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CGE [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -LE [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CLE [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -Like [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CLike [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -NotLike [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CNotLike [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -Match [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CMatch [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -NotMatch [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CNotMatch [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -Contains [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CContains [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -NotContains [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CNotContains [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -In [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CIn [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -NotIn [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -CNotIn [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -Is [-InputObject <psobject>] [<CommonParameters>]

Where-Object [-Property] <string> [[-Value] <Object>] -IsNot [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- CContains <switch> (Required: true)
- CEQ <switch> (Required: true)
- CGE <switch> (Required: true)
- CGT <switch> (Required: true)
- CIn <switch> (Required: true)
- CLE <switch> (Required: true)
- CLT <switch> (Required: true)
- CLike <switch> (Required: true)
- CMatch <switch> (Required: true)
- CNE <switch> (Required: true)
- CNotContains <switch> (Required: true)
- CNotIn <switch> (Required: true)
- CNotLike <switch> (Required: true)
- CNotMatch <switch> (Required: true)
- Contains <switch> (Required: true)
- EQ <switch> (Required: false)
- FilterScript <scriptblock> (Required: true)
- GE <switch> (Required: true)
- GT <switch> (Required: true)
- In <switch> (Required: true)
- InputObject <psobject> (Required: false)
- Is <switch> (Required: true)
- IsNot <switch> (Required: true)
- LE <switch> (Required: true)
- LT <switch> (Required: true)
- Like <switch> (Required: true)
- Match <switch> (Required: true)
- NE <switch> (Required: true)
- NotContains <switch> (Required: true)
- NotIn <switch> (Required: true)
- NotLike <switch> (Required: true)
- NotMatch <switch> (Required: true)
- Property <string> (Required: true)
- Value <Object> (Required: false)
```

### Write-Debug

```powershell
Write-Debug [-Message] <string> [<CommonParameters>]

PARAMETERS:
- Message <string> (Required: true)
```

### Write-DtcTransactionsTraceSession

```powershell
Write-DtcTransactionsTraceSession [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Write-Error

```powershell
Write-Error [-Message] <string> [-Category <ErrorCategory>] [-ErrorId <string>] [-TargetObject <Object>] [-RecommendedAction <string>] [-CategoryActivity <string>] [-CategoryReason <string>] [-CategoryTargetName <string>] [-CategoryTargetType <string>] [<CommonParameters>]

Write-Error -Exception <Exception> [-Message <string>] [-Category <ErrorCategory>] [-ErrorId <string>] [-TargetObject <Object>] [-RecommendedAction <string>] [-CategoryActivity <string>] [-CategoryReason <string>] [-CategoryTargetName <string>] [-CategoryTargetType <string>] [<CommonParameters>]

Write-Error -ErrorRecord <ErrorRecord> [-RecommendedAction <string>] [-CategoryActivity <string>] [-CategoryReason <string>] [-CategoryTargetName <string>] [-CategoryTargetType <string>] [<CommonParameters>]

Write-Error [-Message] <string> [-Category <ErrorCategory>] [-ErrorId <string>] [-TargetObject <Object>] [-RecommendedAction <string>] [-CategoryActivity <string>] [-CategoryReason <string>] [-CategoryTargetName <string>] [-CategoryTargetType <string>] [<CommonParameters>]

Write-Error -Exception <Exception> [-Message <string>] [-Category <ErrorCategory>] [-ErrorId <string>] [-TargetObject <Object>] [-RecommendedAction <string>] [-CategoryActivity <string>] [-CategoryReason <string>] [-CategoryTargetName <string>] [-CategoryTargetType <string>] [<CommonParameters>]

Write-Error -ErrorRecord <ErrorRecord> [-RecommendedAction <string>] [-CategoryActivity <string>] [-CategoryReason <string>] [-CategoryTargetName <string>] [-CategoryTargetType <string>] [<CommonParameters>]

PARAMETERS:
- Category <ErrorCategory> (Required: false)
- CategoryActivity <string> (Required: false)
- CategoryReason <string> (Required: false)
- CategoryTargetName <string> (Required: false)
- CategoryTargetType <string> (Required: false)
- ErrorId <string> (Required: false)
- ErrorRecord <ErrorRecord> (Required: true)
- Exception <Exception> (Required: true)
- Message <string> (Required: false)
- RecommendedAction <string> (Required: false)
- TargetObject <Object> (Required: false)
- Category <ErrorCategory> (Required: false)
- CategoryActivity <string> (Required: false)
- CategoryReason <string> (Required: false)
- CategoryTargetName <string> (Required: false)
- CategoryTargetType <string> (Required: false)
- ErrorId <string> (Required: false)
- ErrorRecord <ErrorRecord> (Required: true)
- Exception <Exception> (Required: true)
- Message <string> (Required: true)
- RecommendedAction <string> (Required: false)
- TargetObject <Object> (Required: false)
```

### Write-EventLog

```powershell
Write-EventLog [-LogName] <string> [-Source] <string> [-EventId] <int> [[-EntryType] <EventLogEntryType>] [-Message] <string> [-Category <int16>] [-RawData <byte[]>] [-ComputerName <string>] [<CommonParameters>]

PARAMETERS:
- Category <int16> (Required: false)
- ComputerName <string> (Required: false)
- EntryType <EventLogEntryType> (Required: false)
- EventId <int> (Required: true)
- LogName <string> (Required: true)
- Message <string> (Required: true)
- RawData <byte[]> (Required: false)
- Source <string> (Required: true)
```

### Write-Host

```powershell
Write-Host [[-Object] <Object>] [-NoNewline] [-Separator <Object>] [-ForegroundColor <ConsoleColor>] [-BackgroundColor <ConsoleColor>] [<CommonParameters>]

PARAMETERS:
- BackgroundColor <ConsoleColor> (Required: false)
- ForegroundColor <ConsoleColor> (Required: false)
- NoNewline <switch> (Required: false)
- Object <Object> (Required: false)
- Separator <Object> (Required: false)
```

### Write-Information

```powershell
Write-Information [-MessageData] <Object> [[-Tags] <string[]>] [<CommonParameters>]

PARAMETERS:
- MessageData <Object> (Required: true)
- Tags <string[]> (Required: false)
```

### Write-Output

```powershell
Write-Output [-InputObject] <psobject[]> [-NoEnumerate] [<CommonParameters>]

PARAMETERS:
- InputObject <psobject[]> (Required: true)
- NoEnumerate <switch> (Required: false)
```

### Write-PrinterNfcTag

```powershell
Write-PrinterNfcTag [[-SharePath] <string[]>] [[-WsdAddress] <string[]>] [-Lock] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Write-PrinterNfcTag [-InputObject] <CimInstance#MSFT_PrinterNfcTag> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_PrinterNfcTag> (Required: true)
- Lock <switch> (Required: false)
- SharePath <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WsdAddress <string[]> (Required: false)
```

### Write-Progress

```powershell
Write-Progress [-Activity] <string> [[-Status] <string>] [[-Id] <int>] [-PercentComplete <int>] [-SecondsRemaining <int>] [-CurrentOperation <string>] [-ParentId <int>] [-Completed] [-SourceId <int>] [<CommonParameters>]

PARAMETERS:
- Activity <String> (Required: true)
- Status <String> (Required: false)
- Id <Int32> (Required: false)
- PercentComplete <Int32> (Required: false)
- SecondsRemaining <Int32> (Required: false)
- CurrentOperation <String> (Required: false)
- ParentId <Int32> (Required: false)
- Completed <SwitchParameter> (Required: false)
- SourceId <Int32> (Required: false)
- Activity <string> (Required: true)
- Completed <switch> (Required: false)
- CurrentOperation <string> (Required: false)
- Id <int> (Required: false)
- ParentId <int> (Required: false)
- PercentComplete <int> (Required: false)
- SecondsRemaining <int> (Required: false)
- SourceId <int> (Required: false)
- Status <string> (Required: false)
```

### Write-StructuredLog

```powershell
Write-StructuredLog [-MsgTemplate] <string> [[-LogLevel] <string>] [[-Err] <Object>] [[-TemplateProps] <hashtable>] [[-ContextTag] <string>] [[-CorrelationId] <string>] [[-LogStreamWriter] <StreamWriter>] [<CommonParameters>]

PARAMETERS:
- ContextTag <string> (Required: false)
- CorrelationId <string> (Required: false)
- Err <Object> (Required: false)
- LogLevel <string> (Required: false)
- LogStreamWriter <StreamWriter> (Required: false)
- MsgTemplate <string> (Required: true)
- TemplateProps <hashtable> (Required: false)
```

### Write-Verbose

```powershell
Write-Verbose [-Message] <string> [<CommonParameters>]

PARAMETERS:
- Message <string> (Required: true)
```

### Write-VolumeCache

```powershell
Write-VolumeCache [-DriveLetter] <char[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Write-VolumeCache -ObjectId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Write-VolumeCache -Path <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Write-VolumeCache -FileSystemLabel <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Write-VolumeCache -InputObject <CimInstance#MSFT_Volume[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DriveLetter <char[]> (Required: true)
- FileSystemLabel <string[]> (Required: true)
- InputObject <CimInstance#MSFT_Volume[]> (Required: true)
- ObjectId <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Write-Warning

```powershell
Write-Warning [-Message] <string> [<CommonParameters>]

PARAMETERS:
- Message <string> (Required: true)
```

## X

## Y

## Z
