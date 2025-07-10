# Metascript Functions G through H

## G

### Get-Acl

```powershell
Get-Acl [[-Path] <string[]>] [-Audit] [-AllCentralAccessPolicies] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-UseTransaction] [<CommonParameters>]

Get-Acl -InputObject <psobject> [-Audit] [-AllCentralAccessPolicies] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-UseTransaction] [<CommonParameters>]

Get-Acl [-LiteralPath <string[]>] [-Audit] [-AllCentralAccessPolicies] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- AllCentralAccessPolicies <switch> (Required: false)
- Audit <switch> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Include <string[]> (Required: false)
- InputObject <psobject> (Required: true)
- LiteralPath <string[]> (Required: false)
- Path <string[]> (Required: false)
- UseTransaction <switch> (Required: false)
```

### Get-Alias

```powershell
Get-Alias [[-Name] <string[]>] [-Exclude <string[]>] [-Scope <string>] [<CommonParameters>]

Get-Alias [-Exclude <string[]>] [-Scope <string>] [-Definition <string[]>] [<CommonParameters>]

PARAMETERS:
- Definition <string[]> (Required: false)
- Exclude <string[]> (Required: false)
- Name <string[]> (Required: false)
- Scope <string> (Required: false)
```

### Get-AppBackgroundTask

```powershell
Get-AppBackgroundTask [-PackageFamilyName <string>] [-IncludeResourceUsage] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeResourceUsage <switch> (Required: false)
- PackageFamilyName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-AppLockerFileInformation

```powershell
Get-AppLockerFileInformation [[-Path] <List[string]>] [<CommonParameters>]

Get-AppLockerFileInformation [[-Packages] <List[AppxPackage]>] [<CommonParameters>]

Get-AppLockerFileInformation -Directory <string> [-FileType <List[AppLockerFileType]>] [-Recurse] [<CommonParameters>]

Get-AppLockerFileInformation -EventLog [-LogPath <string>] [-EventType <List[AppLockerEventType]>] [-Statistics] [<CommonParameters>]

PARAMETERS:
- Directory <string> (Required: true)
- EventLog <switch> (Required: true)
- EventType <List[AppLockerEventType]> (Required: false)
- FileType <List[AppLockerFileType]> (Required: false)
- LogPath <string> (Required: false)
- Packages <List[AppxPackage]> (Required: false)
- Path <List[string]> (Required: false)
- Recurse <switch> (Required: false)
- Statistics <switch> (Required: false)
```

### Get-AppLockerPolicy

```powershell
Get-AppLockerPolicy -Local [-Xml] [<CommonParameters>]

Get-AppLockerPolicy -Domain -Ldap <string> [-Xml] [<CommonParameters>]

Get-AppLockerPolicy -Effective [-Xml] [<CommonParameters>]

PARAMETERS:
- Domain <switch> (Required: true)
- Effective <switch> (Required: true)
- Ldap <string> (Required: true)
- Local <switch> (Required: true)
- Xml <switch> (Required: false)
```

### Get-AppProvisionedSharedPackageContainer

```powershell
Get-AppProvisionedSharedPackageContainer -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-AppProvisionedSharedPackageContainer -Online [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Get-AppSharedPackageContainer

```powershell
Get-AppSharedPackageContainer [[-Name] <string>] [[-Id] <string>] [<CommonParameters>]

PARAMETERS:
- Id <string> (Required: false)
- Name <string> (Required: false)
```

### Get-AppvClientApplication

```powershell
Get-AppvClientApplication [[-Name] <string>] [[-Version] <string>] [-All] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- Name <string> (Required: false)
- Version <string> (Required: false)
```

### Get-AppvClientConfiguration

```powershell
Get-AppvClientConfiguration [[-Name] <string>] [<CommonParameters>]

PARAMETERS:
- Name <string> (Required: false)
```

### Get-AppvClientConnectionGroup

```powershell
Get-AppvClientConnectionGroup [[-Name] <string>] [-All] [<CommonParameters>]

Get-AppvClientConnectionGroup [-GroupId] <guid> [[-VersionId] <guid>] [-All] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- GroupId <guid> (Required: true)
- Name <string> (Required: false)
- VersionId <guid> (Required: false)
```

### Get-AppvClientMode

```powershell
Get-AppvClientMode [<CommonParameters>]

```

### Get-AppvClientPackage

```powershell
Get-AppvClientPackage [[-Name] <string>] [[-Version] <string>] [-All] [<CommonParameters>]

Get-AppvClientPackage [-PackageId] <guid> [[-VersionId] <guid>] [-All] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- Name <string> (Required: false)
- PackageId <guid> (Required: true)
- Version <string> (Required: false)
- VersionId <guid> (Required: false)
```

### Get-AppvPublishingServer

```powershell
Get-AppvPublishingServer [[-ServerId] <uint32>] [<CommonParameters>]

Get-AppvPublishingServer [[-Name] <string>] [[-URL] <string>] [<CommonParameters>]

PARAMETERS:
- Name <string> (Required: false)
- ServerId <uint32> (Required: false)
- URL <string> (Required: false)
```

### Get-AppvStatus

```powershell
Get-AppvStatus [<CommonParameters>]

```

### Get-AppvVirtualProcess

```powershell
Get-AppvVirtualProcess [[-Name] <string[]>] [-ComputerName <string[]>] [-Module] [-FileVersionInfo] [<CommonParameters>]

Get-AppvVirtualProcess -Id <int[]> [-ComputerName <string[]>] [-Module] [-FileVersionInfo] [<CommonParameters>]

Get-AppvVirtualProcess -InputObject <Process[]> [-ComputerName <string[]>] [-Module] [-FileVersionInfo] [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: false)
- FileVersionInfo <switch> (Required: false)
- Id <int[]> (Required: true)
- InputObject <Process[]> (Required: true)
- Module <switch> (Required: false)
- Name <string[]> (Required: false)
```

### Get-AppxDefaultVolume

```powershell
Get-AppxDefaultVolume [<CommonParameters>]

```

### Get-AppxLastError

```powershell
Get-AppxLastError [<CommonParameters>]

```

### Get-AppxLog

```powershell
Get-AppxLog [-All] [<CommonParameters>]

Get-AppxLog [-ActivityId <string>] [<CommonParameters>]

PARAMETERS:
- ActivityId <string> (Required: false)
- All <switch> (Required: false)
```

### Get-AppxPackage

```powershell
Get-AppxPackage [[-Name] <string>] [[-Publisher] <string>] [-AllUsers] [-PackageTypeFilter <PackageTypes>] [-User <string>] [-Volume <AppxVolume>] [<CommonParameters>]

PARAMETERS:
- AllUsers <switch> (Required: false)
- Name <string> (Required: false)
- PackageTypeFilter <PackageTypes> (Required: false)
- Publisher <string> (Required: false)
- User <string> (Required: false)
- Volume <AppxVolume> (Required: false)
```

### Get-AppxPackageAutoUpdateSettings

```powershell
Get-AppxPackageAutoUpdateSettings [[-PackageFamilyName] <string>] [-ShowUpdateAvailability] [-AllUsers] [<CommonParameters>]

PARAMETERS:
- AllUsers <switch> (Required: false)
- PackageFamilyName <string> (Required: false)
- ShowUpdateAvailability <switch> (Required: false)
```

### Get-AppxPackageManifest

```powershell
Get-AppxPackageManifest [-Package] <string> [[-User] <string>] [<CommonParameters>]

PARAMETERS:
- Package <string> (Required: true)
- User <string> (Required: false)
```

### Get-AppxProvisionedPackage

```powershell
Get-AppxProvisionedPackage -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-AppxProvisionedPackage -Online [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Get-AppxVolume

```powershell
Get-AppxVolume [[-Path] <string>] [<CommonParameters>]

Get-AppxVolume -Online [-Path <string>] [<CommonParameters>]

Get-AppxVolume -Offline [-Path <string>] [<CommonParameters>]

PARAMETERS:
- Offline <switch> (Required: true)
- Online <switch> (Required: true)
- Path <string> (Required: false)
```

### Get-AssignedAccess

```powershell
Get-AssignedAccess [<CommonParameters>]

```

### Get-AuthenticodeSignature

```powershell
Get-AuthenticodeSignature [-FilePath] <string[]> [<CommonParameters>]

Get-AuthenticodeSignature -LiteralPath <string[]> [<CommonParameters>]

Get-AuthenticodeSignature -SourcePathOrExtension <string[]> -Content <byte[]> [<CommonParameters>]

PARAMETERS:
- Content <byte[]> (Required: true)
- FilePath <string[]> (Required: true)
- LiteralPath <string[]> (Required: true)
- SourcePathOrExtension <string[]> (Required: true)
```

### Get-AutologgerConfig

```powershell
Get-AutologgerConfig [[-Name] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-BCClientConfiguration

```powershell
Get-BCClientConfiguration [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-BCContentServerConfiguration

```powershell
Get-BCContentServerConfiguration [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-BCDataCache

```powershell
Get-BCDataCache [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-BCDataCacheExtension

```powershell
Get-BCDataCacheExtension [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-BcdEntry

```powershell
Get-BcdEntry [[-Id] <string>] [[-Store] <BcdStoreInfo>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Id <string> (Required: false)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Get-BcdEntryDebugSettings

```powershell
Get-BcdEntryDebugSettings [[-Store] <BcdStoreInfo>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Get-BcdEntryHypervisorSettings

```powershell
Get-BcdEntryHypervisorSettings [[-Store] <BcdStoreInfo>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Get-BcdStore

```powershell
Get-BcdStore [[-Path] <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Path <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Get-BCHashCache

```powershell
Get-BCHashCache [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-BCHostedCacheServerConfiguration

```powershell
Get-BCHostedCacheServerConfiguration [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-BCNetworkConfiguration

```powershell
Get-BCNetworkConfiguration [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-BCStatus

```powershell
Get-BCStatus [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-BitLockerVolume

```powershell
Get-BitLockerVolume [[-MountPoint] <string[]>] [<CommonParameters>]

PARAMETERS:
- MountPoint <string[]> (Required: false)
```

### Get-BitsTransfer

```powershell
Get-BitsTransfer [[-Name] <string[]>] [-AllUsers] [<CommonParameters>]

Get-BitsTransfer [-JobId] <guid[]> [<CommonParameters>]

PARAMETERS:
- AllUsers <switch> (Required: false)
- JobId <guid[]> (Required: true)
- Name <string[]> (Required: false)
```

### Get-Certificate

```powershell
Get-Certificate -Template <string> [-Url <uri>] [-SubjectName <string>] [-DnsName <string[]>] [-Credential <PkiCredential>] [-CertStoreLocation <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Get-Certificate -Request <Certificate> [-Credential <PkiCredential>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CertStoreLocation <string> (Required: false)
- Confirm <switch> (Required: false)
- Credential <PkiCredential> (Required: false)
- DnsName <string[]> (Required: false)
- Request <Certificate> (Required: true)
- SubjectName <string> (Required: false)
- Template <string> (Required: true)
- Url <uri> (Required: false)
- WhatIf <switch> (Required: false)
```

### Get-CertificateAutoEnrollmentPolicy

```powershell
Get-CertificateAutoEnrollmentPolicy -Scope <AutoEnrollmentPolicyScope> -context <Context> [<CommonParameters>]

PARAMETERS:
- Scope <AutoEnrollmentPolicyScope> (Required: true)
- context <Context> (Required: true)
```

### Get-CertificateEnrollmentPolicyServer

```powershell
Get-CertificateEnrollmentPolicyServer -Scope <EnrollmentPolicyServerScope> -context <Context> [-Url <uri>] [<CommonParameters>]

PARAMETERS:
- Scope <EnrollmentPolicyServerScope> (Required: true)
- Url <uri> (Required: false)
- context <Context> (Required: true)
```

### Get-CertificateNotificationTask

```powershell
Get-CertificateNotificationTask [<CommonParameters>]

```

### Get-ChildItem

```powershell
Get-ChildItem [[-Path] <string[]>] [[-Filter] <string>] [-Include <string[]>] [-Exclude <string[]>] [-Recurse] [-Depth <uint32>] [-Force] [-Name] [-UseTransaction] [-Attributes <FlagsExpression[FileAttributes]>] [-FollowSymlink] [-Directory] [-File] [-Hidden] [-ReadOnly] [-System] [<CommonParameters>]

Get-ChildItem [[-Filter] <string>] -LiteralPath <string[]> [-Include <string[]>] [-Exclude <string[]>] [-Recurse] [-Depth <uint32>] [-Force] [-Name] [-UseTransaction] [-Attributes <FlagsExpression[FileAttributes]>] [-FollowSymlink] [-Directory] [-File] [-Hidden] [-ReadOnly] [-System] [<CommonParameters>]

PARAMETERS:
- Attributes <FlagsExpression[FileAttributes]> (Required: false)
- Depth <uint32> (Required: false)
- Directory <switch> (Required: false)
- Exclude <string[]> (Required: false)
- File <switch> (Required: false)
- Filter <string> (Required: false)
- FollowSymlink <switch> (Required: false)
- Force <switch> (Required: false)
- Hidden <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Name <switch> (Required: false)
- Path <string[]> (Required: false)
- ReadOnly <switch> (Required: false)
- Recurse <switch> (Required: false)
- System <switch> (Required: false)
- UseTransaction <switch> (Required: false)
```

### Get-CimAssociatedInstance

```powershell
Get-CimAssociatedInstance [-InputObject] <ciminstance> [[-Association] <string>] [-ResultClassName <string>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-ResourceUri <uri>] [-ComputerName <string[]>] [-KeyOnly] [<CommonParameters>]

Get-CimAssociatedInstance [-InputObject] <ciminstance> [[-Association] <string>] -CimSession <CimSession[]> [-ResultClassName <string>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-ResourceUri <uri>] [-KeyOnly] [<CommonParameters>]

PARAMETERS:
- Association <string> (Required: false)
- CimSession <CimSession[]> (Required: true)
- ComputerName <string[]> (Required: false)
- InputObject <ciminstance> (Required: true)
- KeyOnly <switch> (Required: false)
- Namespace <string> (Required: false)
- OperationTimeoutSec <uint32> (Required: false)
- ResourceUri <uri> (Required: false)
- ResultClassName <string> (Required: false)
```

### Get-CimClass

```powershell
Get-CimClass [[-ClassName] <string>] [[-Namespace] <string>] [-OperationTimeoutSec <uint32>] [-ComputerName <string[]>] [-MethodName <string>] [-PropertyName <string>] [-QualifierName <string>] [<CommonParameters>]

Get-CimClass [[-ClassName] <string>] [[-Namespace] <string>] -CimSession <CimSession[]> [-OperationTimeoutSec <uint32>] [-MethodName <string>] [-PropertyName <string>] [-QualifierName <string>] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession[]> (Required: true)
- ClassName <string> (Required: false)
- ComputerName <string[]> (Required: false)
- MethodName <string> (Required: false)
- Namespace <string> (Required: false)
- OperationTimeoutSec <uint32> (Required: false)
- PropertyName <string> (Required: false)
- QualifierName <string> (Required: false)
```

### Get-CimInstance

```powershell
Get-CimInstance [-ClassName] <string> [-ComputerName <string[]>] [-KeyOnly] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-QueryDialect <string>] [-Shallow] [-Filter <string>] [-Property <string[]>] [<CommonParameters>]

Get-CimInstance -CimSession <CimSession[]> -ResourceUri <uri> [-KeyOnly] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-Shallow] [-Filter <string>] [-Property <string[]>] [<CommonParameters>]

Get-CimInstance -CimSession <CimSession[]> -Query <string> [-ResourceUri <uri>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-QueryDialect <string>] [-Shallow] [<CommonParameters>]

Get-CimInstance [-ClassName] <string> -CimSession <CimSession[]> [-KeyOnly] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-QueryDialect <string>] [-Shallow] [-Filter <string>] [-Property <string[]>] [<CommonParameters>]

Get-CimInstance [-InputObject] <ciminstance> -CimSession <CimSession[]> [-ResourceUri <uri>] [-OperationTimeoutSec <uint32>] [<CommonParameters>]

Get-CimInstance [-InputObject] <ciminstance> [-ResourceUri <uri>] [-ComputerName <string[]>] [-OperationTimeoutSec <uint32>] [<CommonParameters>]

Get-CimInstance -ResourceUri <uri> [-ComputerName <string[]>] [-KeyOnly] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-Shallow] [-Filter <string>] [-Property <string[]>] [<CommonParameters>]

Get-CimInstance -Query <string> [-ResourceUri <uri>] [-ComputerName <string[]>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-QueryDialect <string>] [-Shallow] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession[]> (Required: true)
- ClassName <string> (Required: true)
- ComputerName <string[]> (Required: false)
- Filter <string> (Required: false)
- InputObject <ciminstance> (Required: true)
- KeyOnly <switch> (Required: false)
- Namespace <string> (Required: false)
- OperationTimeoutSec <uint32> (Required: false)
- Property <string[]> (Required: false)
- Query <string> (Required: true)
- QueryDialect <string> (Required: false)
- ResourceUri <uri> (Required: false)
- Shallow <switch> (Required: false)
```

### Get-CimSession

```powershell
Get-CimSession [[-ComputerName] <string[]>] [<CommonParameters>]

Get-CimSession [-Id] <uint32[]> [<CommonParameters>]

Get-CimSession -InstanceId <guid[]> [<CommonParameters>]

Get-CimSession -Name <string[]> [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: false)
- Id <uint32[]> (Required: true)
- InstanceId <guid[]> (Required: true)
- Name <string[]> (Required: true)
```

### Get-CIPolicy

```powershell
Get-CIPolicy [-FilePath] <string> [<CommonParameters>]

PARAMETERS:
- FilePath <string> (Required: true)
```

### Get-CIPolicyIdInfo

```powershell
Get-CIPolicyIdInfo [-FilePath] <string> [<CommonParameters>]

PARAMETERS:
- FilePath <string> (Required: true)
```

### Get-CIPolicyInfo

```powershell
Get-CIPolicyInfo [<CommonParameters>]

```

### Get-Clipboard

```powershell
Get-Clipboard [-Format <ClipboardFormat>] [-TextFormatType <TextDataFormat>] [-Raw] [<CommonParameters>]

PARAMETERS:
- Format <ClipboardFormat> (Required: false)
- Raw <switch> (Required: false)
- TextFormatType <TextDataFormat> (Required: false)
```

### Get-ClusteredScheduledTask

```powershell
Get-ClusteredScheduledTask [[-TaskName] <string>] [[-Cluster] <string>] [[-TaskType] <ClusterTaskTypeEnum>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Cluster <string> (Required: false)
- TaskName <string> (Required: false)
- TaskType <ClusterTaskTypeEnum> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-CmsMessage

```powershell
Get-CmsMessage [-Content] <string> [<CommonParameters>]

Get-CmsMessage [-Path] <string> [<CommonParameters>]

Get-CmsMessage [-LiteralPath] <string> [<CommonParameters>]

PARAMETERS:
- Content <string> (Required: true)
- LiteralPath <string> (Required: true)
- Path <string> (Required: true)
```

### Get-Command

```powershell
Get-Command [[-ArgumentList] <Object[]>] [-Verb <string[]>] [-Noun <string[]>] [-Module <string[]>] [-FullyQualifiedModule <ModuleSpecification[]>] [-TotalCount <int>] [-Syntax] [-ShowCommandInfo] [-All] [-ListImported] [-ParameterName <string[]>] [-ParameterType <PSTypeName[]>] [<CommonParameters>]

Get-Command [[-Name] <string[]>] [[-ArgumentList] <Object[]>] [-Module <string[]>] [-FullyQualifiedModule <ModuleSpecification[]>] [-CommandType <CommandTypes>] [-TotalCount <int>] [-Syntax] [-ShowCommandInfo] [-All] [-ListImported] [-ParameterName <string[]>] [-ParameterType <PSTypeName[]>] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- ArgumentList <Object[]> (Required: false)
- CommandType <CommandTypes> (Required: false)
- FullyQualifiedModule <ModuleSpecification[]> (Required: false)
- ListImported <switch> (Required: false)
- Module <string[]> (Required: false)
- Name <string[]> (Required: false)
- Noun <string[]> (Required: false)
- ParameterName <string[]> (Required: false)
- ParameterType <PSTypeName[]> (Required: false)
- ShowCommandInfo <switch> (Required: false)
- Syntax <switch> (Required: false)
- TotalCount <int> (Required: false)
- Verb <string[]> (Required: false)
```

### Get-ComputerInfo

```powershell
Get-ComputerInfo [[-Property] <string[]>] [<CommonParameters>]

PARAMETERS:
- Property <string[]> (Required: false)
```

### Get-ComputerRestorePoint

```powershell
Get-ComputerRestorePoint [[-RestorePoint] <int[]>] [<CommonParameters>]

Get-ComputerRestorePoint -LastStatus [<CommonParameters>]

PARAMETERS:
- LastStatus <switch> (Required: true)
- RestorePoint <int[]> (Required: false)
```

### Get-Content

```powershell
Get-Content [-Path] <string[]> [-ReadCount <long>] [-TotalCount <long>] [-Tail <int>] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Force] [-Credential <pscredential>] [-UseTransaction] [-Delimiter <string>] [-Wait] [-Raw] [-Encoding <FileSystemCmdletProviderEncoding>] [-Stream <string>] [<CommonParameters>]

Get-Content -LiteralPath <string[]> [-ReadCount <long>] [-TotalCount <long>] [-Tail <int>] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Force] [-Credential <pscredential>] [-UseTransaction] [-Delimiter <string>] [-Wait] [-Raw] [-Encoding <FileSystemCmdletProviderEncoding>] [-Stream <string>] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- Delimiter <string> (Required: false)
- Encoding <FileSystemCmdletProviderEncoding> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- Raw <switch> (Required: false)
- ReadCount <long> (Required: false)
- Stream <string> (Required: false)
- Tail <int> (Required: false)
- TotalCount <long> (Required: false)
- UseTransaction <switch> (Required: false)
- Wait <switch> (Required: false)
```

### Get-ControlPanelItem

```powershell
Get-ControlPanelItem [[-Name] <string[]>] [-Category <string[]>] [<CommonParameters>]

Get-ControlPanelItem -CanonicalName <string[]> [-Category <string[]>] [<CommonParameters>]

PARAMETERS:
- CanonicalName <string[]> (Required: true)
- Category <string[]> (Required: false)
- Name <string[]> (Required: false)
```

### Get-Counter

```powershell
Get-Counter [[-Counter] <string[]>] [-SampleInterval <int>] [-MaxSamples <long>] [-Continuous] [-ComputerName <string[]>] [<CommonParameters>]

Get-Counter [-ListSet] <string[]> [-ComputerName <string[]>] [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: false)
- Continuous <switch> (Required: false)
- Counter <string[]> (Required: false)
- ListSet <string[]> (Required: true)
- MaxSamples <long> (Required: false)
- SampleInterval <int> (Required: false)
```

### Get-Credential

```powershell
Get-Credential [-Credential] <pscredential> [<CommonParameters>]

Get-Credential [[-UserName] <string>] -Message <string> [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: true)
- Message <string> (Required: true)
- UserName <string> (Required: false)
```

### Get-Culture

```powershell
Get-Culture [<CommonParameters>]

```

### Get-DAClientExperienceConfiguration

```powershell
Get-DAClientExperienceConfiguration [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DAConnectionStatus

```powershell
Get-DAConnectionStatus [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DAEntryPointTableItem

```powershell
Get-DAEntryPointTableItem [-EntryPointName <string[]>] [-State <State[]>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-DAEntryPointTableItem [-EntryPointName <string[]>] [-State <State[]>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- EntryPointName <string[]> (Required: false)
- GPOSession <string> (Required: false)
- PolicyStore <string> (Required: false)
- State <State[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DAPolicyChange

```powershell
Get-DAPolicyChange [[-Servers] <string[]>] [[-Domains] <string[]>] [-DisplayName] <string> [[-PolicyStore] <string>] [-PSLocation] <string> [-EndpointType] <string> [[-DnsServers] <string[]>] [<CommonParameters>]

PARAMETERS:
- DisplayName <string> (Required: true)
- DnsServers <string[]> (Required: false)
- Domains <string[]> (Required: false)
- EndpointType <string> (Required: true)
- PSLocation <string> (Required: true)
- PolicyStore <string> (Required: false)
- Servers <string[]> (Required: false)
```

### Get-Date

```powershell
Get-Date [[-Date] <datetime>] [-Year <int>] [-Month <int>] [-Day <int>] [-Hour <int>] [-Minute <int>] [-Second <int>] [-Millisecond <int>] [-DisplayHint <DisplayHintType>] [-Format <string>] [<CommonParameters>]

Get-Date [[-Date] <datetime>] [-Year <int>] [-Month <int>] [-Day <int>] [-Hour <int>] [-Minute <int>] [-Second <int>] [-Millisecond <int>] [-DisplayHint <DisplayHintType>] [-UFormat <string>] [<CommonParameters>]

PARAMETERS:
- Date <datetime> (Required: false)
- Day <int> (Required: false)
- DisplayHint <DisplayHintType> (Required: false)
- Format <string> (Required: false)
- Hour <int> (Required: false)
- Millisecond <int> (Required: false)
- Minute <int> (Required: false)
- Month <int> (Required: false)
- Second <int> (Required: false)
- UFormat <string> (Required: false)
- Year <int> (Required: false)
```

### Get-DedupProperties

```powershell
Get-DedupProperties [-DriveLetter] <char[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-DedupProperties -ObjectId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-DedupProperties -Path <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-DedupProperties -FileSystemLabel <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-DedupProperties -InputObject <CimInstance#MSFT_Volume[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DriveLetter <char[]> (Required: true)
- FileSystemLabel <string[]> (Required: true)
- InputObject <CimInstance#MSFT_Volume[]> (Required: true)
- ObjectId <string[]> (Required: true)
- Path <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-DeliveryOptimizationLog

```powershell
Get-DeliveryOptimizationLog [[-Path] <string[]>] [-LevelFilter <uint32>] [-Provider <ProviderType>] [-Flush] [<CommonParameters>]

PARAMETERS:
- Flush <switch> (Required: false)
- LevelFilter <uint32> (Required: false)
- Path <string[]> (Required: false)
- Provider <ProviderType> (Required: false)
```

### Get-DeliveryOptimizationLogAnalysis

```powershell
Get-DeliveryOptimizationLogAnalysis [[-Path] <string[]>] [-ListConnections] [-Flush] [<CommonParameters>]

PARAMETERS:
- Flush <switch> (Required: false)
- ListConnections <switch> (Required: false)
- Path <string[]> (Required: false)
```

### Get-DeliveryOptimizationPerfSnap

```powershell
DESCRIPTION:


```

### Get-DeliveryOptimizationPerfSnapThisMonth

```powershell
DESCRIPTION:


```

### Get-DeliveryOptimizationStatus

```powershell
DESCRIPTION:


PARAMETERS:
- PeerInfo <SwitchParameter> (Required: false)
- AsObject <SwitchParameter> (Required: false)
- SelectPeerCount <Int32> (Required: false)
```

### Get-Disk

```powershell
Get-Disk [[-Number] <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Disk [-UniqueId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Disk [-FriendlyName <string[]>] [-SerialNumber <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Disk [-Path <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Disk [-Partition <CimInstance#MSFT_Partition>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Disk [-VirtualDisk <CimInstance#MSFT_VirtualDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Disk [-iSCSISession <CimInstance#MSFT_iSCSISession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Disk [-iSCSIConnection <CimInstance#MSFT_iSCSIConnection>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Disk [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Disk [-StorageNode <CimInstance#MSFT_StorageNode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Disk [-StorageJob <CimInstance#MSFT_StorageJob>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: false)
- Number <uint32[]> (Required: false)
- Partition <CimInstance#MSFT_Partition> (Required: false)
- Path <string[]> (Required: false)
- SerialNumber <string[]> (Required: false)
- StorageJob <CimInstance#MSFT_StorageJob> (Required: false)
- StorageNode <CimInstance#MSFT_StorageNode> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
- iSCSIConnection <CimInstance#MSFT_iSCSIConnection> (Required: false)
- iSCSISession <CimInstance#MSFT_iSCSISession> (Required: false)
```

### Get-DiskImage

```powershell
Get-DiskImage [-ImagePath] <string[]> [-StorageType <StorageType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-DiskImage [-Volume <CimInstance#MSFT_Volume>] [-StorageType <StorageType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-DiskImage -DevicePath <string[]> [-StorageType <StorageType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DevicePath <string[]> (Required: true)
- ImagePath <string[]> (Required: true)
- StorageType <StorageType> (Required: false)
- ThrottleLimit <int> (Required: false)
- Volume <CimInstance#MSFT_Volume> (Required: false)
```

### Get-DiskStorageNodeView

```powershell
Get-DiskStorageNodeView [[-StorageNode] <CimInstance#MSFT_StorageNode>] [[-Disk] <CimInstance#MSFT_Disk>] [[-CimSession] <CimSession>] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: false)
- Disk <CimInstance#MSFT_Disk> (Required: false)
- StorageNode <CimInstance#MSFT_StorageNode> (Required: false)
```

### Get-DnsClient

```powershell
Get-DnsClient [[-InterfaceAlias] <string[]>] [-InterfaceIndex <uint32[]>] [-ConnectionSpecificSuffix <string[]>] [-RegisterThisConnectionsAddress <bool[]>] [-UseSuffixWhenRegistering <bool[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ConnectionSpecificSuffix <string[]> (Required: false)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- RegisterThisConnectionsAddress <bool[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseSuffixWhenRegistering <bool[]> (Required: false)
```

### Get-DnsClientCache

```powershell
Get-DnsClientCache [[-Entry] <string[]>] [-Name <string[]>] [-Type <Type[]>] [-Status <Status[]>] [-Section <Section[]>] [-TimeToLive <uint32[]>] [-DataLength <uint16[]>] [-Data <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Data <string[]> (Required: false)
- DataLength <uint16[]> (Required: false)
- Entry <string[]> (Required: false)
- Name <string[]> (Required: false)
- Section <Section[]> (Required: false)
- Status <Status[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TimeToLive <uint32[]> (Required: false)
- Type <Type[]> (Required: false)
```

### Get-DnsClientDohServerAddress

```powershell
Get-DnsClientDohServerAddress [[-ServerAddress] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ServerAddress <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DnsClientGlobalSetting

```powershell
Get-DnsClientGlobalSetting [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DnsClientNrptGlobal

```powershell
Get-DnsClientNrptGlobal [-Server <string>] [-GpoName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GpoName <string> (Required: false)
- Server <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DnsClientNrptPolicy

```powershell
Get-DnsClientNrptPolicy [[-Namespace] <string>] [-Effective] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Effective <switch> (Required: false)
- Namespace <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DnsClientNrptRule

```powershell
Get-DnsClientNrptRule [[-Name] <string[]>] [-GpoName <string>] [-Server <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GpoName <string> (Required: false)
- Name <string[]> (Required: false)
- Server <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DnsClientServerAddress

```powershell
Get-DnsClientServerAddress [[-InterfaceAlias] <string[]>] [-InterfaceIndex <uint32[]>] [-AddressFamily <AddressFamily[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DOConfig

```powershell
DESCRIPTION:


```

### Get-DODownloadMode

```powershell
DESCRIPTION:


```

### Get-DOPercentageMaxBackgroundBandwidth

```powershell
DESCRIPTION:


```

### Get-DOPercentageMaxForegroundBandwidth

```powershell
DESCRIPTION:


```

### Get-DscConfiguration

```powershell
Get-DscConfiguration [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DscConfigurationStatus

```powershell
Get-DscConfigurationStatus [-All] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DscLocalConfigurationManager

```powershell
Get-DscLocalConfigurationManager [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DscResource

```powershell
Get-DscResource [[-Name] <string[]>] [[-Module] <Object>] [-Syntax] [<CommonParameters>]

PARAMETERS:
- Module <Object> (Required: false)
- Name <string[]> (Required: false)
- Syntax <switch> (Required: false)
```

### Get-Dtc

```powershell
Get-Dtc [-DtcName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DtcName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DtcAdvancedHostSetting

```powershell
Get-DtcAdvancedHostSetting -Name <string> [-Subkey <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string> (Required: true)
- Subkey <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DtcAdvancedSetting

```powershell
Get-DtcAdvancedSetting -Name <string> [-DtcName <string>] [-Subkey <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DtcName <string> (Required: false)
- Name <string> (Required: true)
- Subkey <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DtcClusterDefault

```powershell
Get-DtcClusterDefault [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DtcClusterTMMapping

```powershell
Get-DtcClusterTMMapping [-Name <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DtcDefault

```powershell
Get-DtcDefault [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DtcLog

```powershell
Get-DtcLog [-DtcName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DtcName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DtcNetworkSetting

```powershell
Get-DtcNetworkSetting [-DtcName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DtcName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DtcTransaction

```powershell
Get-DtcTransaction [-DtcName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DtcName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DtcTransactionsStatistics

```powershell
Get-DtcTransactionsStatistics [-DtcName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DtcName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DtcTransactionsTraceSession

```powershell
Get-DtcTransactionsTraceSession [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-DtcTransactionsTraceSetting

```powershell
Get-DtcTransactionsTraceSetting [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-EtwTraceProvider

```powershell
Get-EtwTraceProvider [[-Guid] <string[]>] [-AutologgerName <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-EtwTraceProvider [[-Guid] <string[]>] [-SessionName <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AutologgerName <string[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Guid <string[]> (Required: false)
- SessionName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-EtwTraceSession

```powershell
Get-EtwTraceSession [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-Event

```powershell
Get-Event [[-SourceIdentifier] <string>] [<CommonParameters>]

Get-Event [-EventIdentifier] <int> [<CommonParameters>]

PARAMETERS:
- EventIdentifier <int> (Required: true)
- SourceIdentifier <string> (Required: false)
```

### Get-EventLog

```powershell
Get-EventLog [-LogName] <string> [[-InstanceId] <long[]>] [-ComputerName <string[]>] [-Newest <int>] [-After <datetime>] [-Before <datetime>] [-UserName <string[]>] [-Index <int[]>] [-EntryType <string[]>] [-Source <string[]>] [-Message <string>] [-AsBaseObject] [<CommonParameters>]

Get-EventLog [-ComputerName <string[]>] [-List] [-AsString] [<CommonParameters>]

PARAMETERS:
- After <datetime> (Required: false)
- AsBaseObject <switch> (Required: false)
- AsString <switch> (Required: false)
- Before <datetime> (Required: false)
- ComputerName <string[]> (Required: false)
- EntryType <string[]> (Required: false)
- Index <int[]> (Required: false)
- InstanceId <long[]> (Required: false)
- List <switch> (Required: false)
- LogName <string> (Required: true)
- Message <string> (Required: false)
- Newest <int> (Required: false)
- Source <string[]> (Required: false)
- UserName <string[]> (Required: false)
```

### Get-EventSubscriber

```powershell
Get-EventSubscriber [[-SourceIdentifier] <string>] [-Force] [<CommonParameters>]

Get-EventSubscriber [-SubscriptionId] <int> [-Force] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- SourceIdentifier <string> (Required: false)
- SubscriptionId <int> (Required: true)
```

### Get-ExecutionPolicy

```powershell
Get-ExecutionPolicy [[-Scope] <ExecutionPolicyScope>] [-List] [<CommonParameters>]

PARAMETERS:
- List <switch> (Required: false)
- Scope <ExecutionPolicyScope> (Required: false)
```

### Get-FileHash

```powershell
Get-FileHash [-Path] <string[]> [-Algorithm <string>] [<CommonParameters>]

Get-FileHash -LiteralPath <string[]> [-Algorithm <string>] [<CommonParameters>]

Get-FileHash -InputStream <Stream> [-Algorithm <string>] [<CommonParameters>]

PARAMETERS:
- Algorithm <string> (Required: false)
- InputStream <Stream> (Required: true)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
```

### Get-FileIntegrity

```powershell
Get-FileIntegrity [-FileName] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FileName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-FileShare

```powershell
Get-FileShare [-Name <string[]>] [-Protocol <FileSharingProtocol[]>] [-FileServer <CimInstance#MSFT_FileServer>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-FileShare [-UniqueId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-FileShare [-Name <string[]>] [-Protocol <FileSharingProtocol[]>] [-Volume <CimInstance#MSFT_Volume>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-FileShare [-Name <string[]>] [-Protocol <FileSharingProtocol[]>] [-Subsystem <CimInstance#MSFT_StorageSubsystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FileServer <CimInstance#MSFT_FileServer> (Required: false)
- Name <string[]> (Required: false)
- Protocol <FileSharingProtocol[]> (Required: false)
- Subsystem <CimInstance#MSFT_StorageSubsystem> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
- Volume <CimInstance#MSFT_Volume> (Required: false)
```

### Get-FileShareAccessControlEntry

```powershell
Get-FileShareAccessControlEntry -Name <string[]> [-FileServer <CimInstance#MSFT_FileServer>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-FileShareAccessControlEntry -UniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-FileShareAccessControlEntry -InputObject <CimInstance#MSFT_FileShare[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FileServer <CimInstance#MSFT_FileServer> (Required: false)
- InputObject <CimInstance#MSFT_FileShare[]> (Required: true)
- Name <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
```

### Get-FileStorageTier

```powershell
Get-FileStorageTier -VolumeDriveLetter <char> [-PinnedState <PinnedState>] [-PinnedStorageTierClass <StorageTierClass>] [-AllocatedStorageTierClass <StorageTierClass>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-FileStorageTier -FilePath <string> [-PinnedState <PinnedState>] [-PinnedStorageTierClass <StorageTierClass>] [-AllocatedStorageTierClass <StorageTierClass>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-FileStorageTier -Volume <ciminstance> [-PinnedState <PinnedState>] [-PinnedStorageTierClass <StorageTierClass>] [-AllocatedStorageTierClass <StorageTierClass>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-FileStorageTier -VolumePath <string> [-PinnedState <PinnedState>] [-PinnedStorageTierClass <StorageTierClass>] [-AllocatedStorageTierClass <StorageTierClass>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AllocatedStorageTierClass <StorageTierClass> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FilePath <string> (Required: true)
- PinnedState <PinnedState> (Required: false)
- PinnedStorageTierClass <StorageTierClass> (Required: false)
- ThrottleLimit <int> (Required: false)
- Volume <ciminstance> (Required: true)
- VolumeDriveLetter <char> (Required: true)
- VolumePath <string> (Required: true)
```

### Get-FormatData

```powershell
Get-FormatData [[-TypeName] <string[]>] [-PowerShellVersion <version>] [<CommonParameters>]

PARAMETERS:
- PowerShellVersion <version> (Required: false)
- TypeName <string[]> (Required: false)
```

### Get-Help

```powershell
Get-Help [[-Name] <string>] [-Path <string>] [-Category <string[]>] [-Component <string[]>] [-Functionality <string[]>] [-Role <string[]>] [-Full] [<CommonParameters>]

Get-Help [[-Name] <string>] -Detailed [-Path <string>] [-Category <string[]>] [-Component <string[]>] [-Functionality <string[]>] [-Role <string[]>] [<CommonParameters>]

Get-Help [[-Name] <string>] -Examples [-Path <string>] [-Category <string[]>] [-Component <string[]>] [-Functionality <string[]>] [-Role <string[]>] [<CommonParameters>]

Get-Help [[-Name] <string>] -Parameter <string> [-Path <string>] [-Category <string[]>] [-Component <string[]>] [-Functionality <string[]>] [-Role <string[]>] [<CommonParameters>]

Get-Help [[-Name] <string>] -Online [-Path <string>] [-Category <string[]>] [-Component <string[]>] [-Functionality <string[]>] [-Role <string[]>] [<CommonParameters>]

Get-Help [[-Name] <string>] -ShowWindow [-Path <string>] [-Category <string[]>] [-Component <string[]>] [-Functionality <string[]>] [-Role <string[]>] [<CommonParameters>]

PARAMETERS:
- Category <string[]> (Required: false)
- Component <string[]> (Required: false)
- Detailed <switch> (Required: true)
- Examples <switch> (Required: true)
- Full <switch> (Required: false)
- Functionality <string[]> (Required: false)
- Name <string> (Required: false)
- Online <switch> (Required: true)
- Parameter <string> (Required: true)
- Path <string> (Required: false)
- Role <string[]> (Required: false)
- ShowWindow <switch> (Required: true)
```

### Get-History

```powershell
Get-History [[-Id] <long[]>] [[-Count] <int>] [<CommonParameters>]

PARAMETERS:
- Count <int> (Required: false)
- Id <long[]> (Required: false)
```

### Get-Host

```powershell
Get-Host [<CommonParameters>]

```

### Get-HotFix

```powershell
Get-HotFix [[-Id] <string[]>] [-ComputerName <string[]>] [-Credential <pscredential>] [<CommonParameters>]

Get-HotFix [-Description <string[]>] [-ComputerName <string[]>] [-Credential <pscredential>] [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: false)
- Credential <pscredential> (Required: false)
- Description <string[]> (Required: false)
- Id <string[]> (Required: false)
```

### Get-InitiatorId

```powershell
Get-InitiatorId [[-InitiatorAddress] <string[]>] [-HostType <HostType[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-InitiatorId [-UniqueId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-InitiatorId [-MaskingSet <CimInstance#MSFT_MaskingSet>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-InitiatorId [-VirtualDisk <CimInstance#MSFT_VirtualDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-InitiatorId [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- HostType <HostType[]> (Required: false)
- InitiatorAddress <string[]> (Required: false)
- MaskingSet <CimInstance#MSFT_MaskingSet> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
```

### Get-InitiatorPort

```powershell
Get-InitiatorPort [[-NodeAddress] <string[]>] [-ConnectionType <ConnectionType[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-InitiatorPort [-ObjectId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-InitiatorPort [-InstanceName <string[]>] [-ConnectionType <ConnectionType[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-InitiatorPort [-VirtualDisk <CimInstance#MSFT_VirtualDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-InitiatorPort [-iSCSISession <CimInstance#MSFT_iSCSISession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-InitiatorPort [-iSCSIConnection <CimInstance#MSFT_iSCSIConnection>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-InitiatorPort [-iSCSITarget <CimInstance#MSFT_iSCSITarget>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ConnectionType <ConnectionType[]> (Required: false)
- InstanceName <string[]> (Required: false)
- NodeAddress <string[]> (Required: false)
- ObjectId <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
- iSCSIConnection <CimInstance#MSFT_iSCSIConnection> (Required: false)
- iSCSISession <CimInstance#MSFT_iSCSISession> (Required: false)
- iSCSITarget <CimInstance#MSFT_iSCSITarget> (Required: false)
```

### Get-InstalledLanguage

```powershell
Get-InstalledLanguage [[-Language] <string>] [<CommonParameters>]

PARAMETERS:
- Language <string> (Required: false)
```

### Get-InstalledModule

```powershell
Get-InstalledModule [[-Name] <string[]>] [-MinimumVersion <version>] [-RequiredVersion <version>] [-MaximumVersion <version>] [-AllVersions] [<CommonParameters>]

PARAMETERS:
- AllVersions <switch> (Required: false)
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- Name <string[]> (Required: false)
- RequiredVersion <version> (Required: false)
```

### Get-InstalledScript

```powershell
Get-InstalledScript [[-Name] <string[]>] [-MinimumVersion <version>] [-RequiredVersion <version>] [-MaximumVersion <version>] [<CommonParameters>]

PARAMETERS:
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- Name <string[]> (Required: false)
- RequiredVersion <version> (Required: false)
```

### Get-IscsiConnection

```powershell
Get-IscsiConnection [-ConnectionIdentifier <string[]>] [-InitiatorPortalPortNumber <uint16[]>] [-InititorIPAdressListNumber <uint16[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiConnection [-InitiatorSideIdentifier <string[]>] [-InitiatorPortalPortNumber <uint16[]>] [-InititorIPAdressListNumber <uint16[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiConnection [-TargetSideIdentifier <string[]>] [-InitiatorPortalPortNumber <uint16[]>] [-InititorIPAdressListNumber <uint16[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiConnection [-InitiatorPortalAddress <string[]>] [-InitiatorPortalPortNumber <uint16[]>] [-InititorIPAdressListNumber <uint16[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiConnection [-InitiatorPortalPortNumber <uint16[]>] [-InititorIPAdressListNumber <uint16[]>] [-IscsiTarget <CimInstance#MSFT_iSCSITarget>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiConnection [-InitiatorPortalPortNumber <uint16[]>] [-InititorIPAdressListNumber <uint16[]>] [-InitiatorPort <CimInstance#MSFT_InitiatorPort>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiConnection [-InitiatorPortalPortNumber <uint16[]>] [-InititorIPAdressListNumber <uint16[]>] [-IscsiSession <CimInstance#MSFT_iSCSISession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiConnection [-InitiatorPortalPortNumber <uint16[]>] [-InititorIPAdressListNumber <uint16[]>] [-iSCSITargetPortal <CimInstance#MSFT_iSCSITargetPortal>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiConnection [-InitiatorPortalPortNumber <uint16[]>] [-InititorIPAdressListNumber <uint16[]>] [-Disk <CimInstance#MSFT_Disk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ConnectionIdentifier <string[]> (Required: false)
- Disk <CimInstance#MSFT_Disk> (Required: false)
- InitiatorPort <CimInstance#MSFT_InitiatorPort> (Required: false)
- InitiatorPortalAddress <string[]> (Required: false)
- InitiatorPortalPortNumber <uint16[]> (Required: false)
- InitiatorSideIdentifier <string[]> (Required: false)
- InititorIPAdressListNumber <uint16[]> (Required: false)
- IscsiSession <CimInstance#MSFT_iSCSISession> (Required: false)
- IscsiTarget <CimInstance#MSFT_iSCSITarget> (Required: false)
- TargetSideIdentifier <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- iSCSITargetPortal <CimInstance#MSFT_iSCSITargetPortal> (Required: false)
```

### Get-IscsiSession

```powershell
Get-IscsiSession [<CommonParameters>]

Get-IscsiSession [-SessionIdentifier <string[]>] [-TargetSideIdentifier <string[]>] [-NumberOfConnections <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiSession [-InitiatorSideIdentifier <string[]>] [-NumberOfConnections <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiSession [-NumberOfConnections <uint32[]>] [-IscsiTarget <CimInstance#MSFT_iSCSITarget>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiSession [-NumberOfConnections <uint32[]>] [-InitiatorPort <CimInstance#MSFT_InitiatorPort>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiSession [-NumberOfConnections <uint32[]>] [-IscsiTargetPortal <CimInstance#MSFT_iSCSITargetPortal>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiSession [-NumberOfConnections <uint32[]>] [-Disk <CimInstance#MSFT_Disk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiSession [-NumberOfConnections <uint32[]>] [-IscsiConnection <CimInstance#MSFT_iSCSIConnection>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Disk <CimInstance#MSFT_Disk> (Required: false)
- InitiatorPort <CimInstance#MSFT_InitiatorPort> (Required: false)
- InitiatorSideIdentifier <string[]> (Required: false)
- IscsiConnection <CimInstance#MSFT_iSCSIConnection> (Required: false)
- IscsiTarget <CimInstance#MSFT_iSCSITarget> (Required: false)
- IscsiTargetPortal <CimInstance#MSFT_iSCSITargetPortal> (Required: false)
- NumberOfConnections <uint32[]> (Required: false)
- SessionIdentifier <string[]> (Required: false)
- TargetSideIdentifier <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-IscsiTarget

```powershell
Get-IscsiTarget [-NodeAddress <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiTarget [-IscsiConnection <CimInstance#MSFT_iSCSIConnection>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiTarget [-IscsiSession <CimInstance#MSFT_iSCSISession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiTarget [-IscsiTargetPortal <CimInstance#MSFT_iSCSITargetPortal>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiTarget [-InitiatorPort <CimInstance#MSFT_InitiatorPort>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InitiatorPort <CimInstance#MSFT_InitiatorPort> (Required: false)
- IscsiConnection <CimInstance#MSFT_iSCSIConnection> (Required: false)
- IscsiSession <CimInstance#MSFT_iSCSISession> (Required: false)
- IscsiTargetPortal <CimInstance#MSFT_iSCSITargetPortal> (Required: false)
- NodeAddress <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-IscsiTargetPortal

```powershell
Get-IscsiTargetPortal [[-TargetPortalAddress] <string[]>] [-InitiatorPortalAddress <string[]>] [-InitiatorInstanceName <string[]>] [-TargetPortalPortNumber <uint16[]>] [-IsHeaderDigest <bool[]>] [-IsDataDigest <bool[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiTargetPortal [-iSCSISession <CimInstance#MSFT_iSCSISession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiTargetPortal [-iSCSIConnection <CimInstance#MSFT_iSCSIConnection>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-IscsiTargetPortal [-iSCSITarget <CimInstance#MSFT_iSCSITarget>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InitiatorInstanceName <string[]> (Required: false)
- InitiatorPortalAddress <string[]> (Required: false)
- IsDataDigest <bool[]> (Required: false)
- IsHeaderDigest <bool[]> (Required: false)
- TargetPortalAddress <string[]> (Required: false)
- TargetPortalPortNumber <uint16[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- iSCSIConnection <CimInstance#MSFT_iSCSIConnection> (Required: false)
- iSCSISession <CimInstance#MSFT_iSCSISession> (Required: false)
- iSCSITarget <CimInstance#MSFT_iSCSITarget> (Required: false)
```

### Get-IseSnippet

```powershell
Get-IseSnippet

```

### Get-Item

```powershell
Get-Item [-Path] <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Force] [-Credential <pscredential>] [-UseTransaction] [-Stream <string[]>] [<CommonParameters>]

Get-Item -LiteralPath <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Force] [-Credential <pscredential>] [-UseTransaction] [-Stream <string[]>] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- Stream <string[]> (Required: false)
- UseTransaction <switch> (Required: false)
```

### Get-ItemProperty

```powershell
Get-ItemProperty [-Path] <string[]> [[-Name] <string[]>] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

Get-ItemProperty [[-Name] <string[]>] -LiteralPath <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Name <string[]> (Required: false)
- Path <string[]> (Required: true)
- UseTransaction <switch> (Required: false)
```

### Get-ItemPropertyValue

```powershell
Get-ItemPropertyValue [[-Path] <string[]>] [-Name] <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

Get-ItemPropertyValue [-Name] <string[]> -LiteralPath <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Name <string[]> (Required: true)
- Path <string[]> (Required: false)
- UseTransaction <switch> (Required: false)
```

### Get-Job

```powershell
Get-Job [[-Id] <int[]>] [-IncludeChildJob] [-ChildJobState <JobState>] [-HasMoreData <bool>] [-Before <datetime>] [-After <datetime>] [-Newest <int>] [<CommonParameters>]

Get-Job [-State] <JobState> [-IncludeChildJob] [-ChildJobState <JobState>] [-HasMoreData <bool>] [-Before <datetime>] [-After <datetime>] [-Newest <int>] [<CommonParameters>]

Get-Job [-InstanceId] <guid[]> [-IncludeChildJob] [-ChildJobState <JobState>] [-HasMoreData <bool>] [-Before <datetime>] [-After <datetime>] [-Newest <int>] [<CommonParameters>]

Get-Job [-Name] <string[]> [-IncludeChildJob] [-ChildJobState <JobState>] [-HasMoreData <bool>] [-Before <datetime>] [-After <datetime>] [-Newest <int>] [<CommonParameters>]

Get-Job [-IncludeChildJob] [-ChildJobState <JobState>] [-HasMoreData <bool>] [-Before <datetime>] [-After <datetime>] [-Newest <int>] [-Command <string[]>] [<CommonParameters>]

Get-Job [-Filter] <hashtable> [<CommonParameters>]

PARAMETERS:
- After <datetime> (Required: false)
- Before <datetime> (Required: false)
- ChildJobState <JobState> (Required: false)
- Command <string[]> (Required: false)
- Filter <hashtable> (Required: true)
- HasMoreData <bool> (Required: false)
- Id <int[]> (Required: false)
- IncludeChildJob <switch> (Required: false)
- InstanceId <guid[]> (Required: true)
- Name <string[]> (Required: true)
- Newest <int> (Required: false)
- State <JobState> (Required: true)
```

### Get-JobTrigger

```powershell
Get-JobTrigger [-InputObject] <ScheduledJobDefinition> [[-TriggerId] <int[]>] [<CommonParameters>]

Get-JobTrigger [-Id] <int> [[-TriggerId] <int[]>] [<CommonParameters>]

Get-JobTrigger [-Name] <string> [[-TriggerId] <int[]>] [<CommonParameters>]

PARAMETERS:
- Id <int> (Required: true)
- InputObject <ScheduledJobDefinition> (Required: true)
- Name <string> (Required: true)
- TriggerId <int[]> (Required: false)
```

### Get-KdsConfiguration

```powershell
Get-KdsConfiguration [<CommonParameters>]

```

### Get-KdsRootKey

```powershell
Get-KdsRootKey [<CommonParameters>]

```

### Get-LapsAADPassword

```powershell
Get-LapsAADPassword -DeviceIds <string[]> [-IncludePasswords] [-IncludeHistory] [-AsPlainText] [<CommonParameters>]

PARAMETERS:
- AsPlainText <switch> (Required: false)
- DeviceIds <string[]> (Required: true)
- IncludeHistory <switch> (Required: false)
- IncludePasswords <switch> (Required: false)
```

### Get-LapsADPassword

```powershell
Get-LapsADPassword [-Identity] <string[]> [-Credential <pscredential>] [-DecryptionCredential <pscredential>] [-IncludeHistory] [-AsPlainText] [<CommonParameters>]

Get-LapsADPassword [-Identity] <string[]> -Domain <string> [-Credential <pscredential>] [-DecryptionCredential <pscredential>] [-IncludeHistory] [-AsPlainText] [<CommonParameters>]

Get-LapsADPassword [-Identity] <string[]> -DomainController <string> [-Credential <pscredential>] [-DecryptionCredential <pscredential>] [-IncludeHistory] [-AsPlainText] [<CommonParameters>]

Get-LapsADPassword [-Identity] <string[]> -Port <int> [-Credential <pscredential>] [-DecryptionCredential <pscredential>] [-IncludeHistory] [-AsPlainText] [-DomainController <string>] [<CommonParameters>]

Get-LapsADPassword [-Identity] <string[]> -RecoveryMode [-IncludeHistory] [-AsPlainText] [<CommonParameters>]

Get-LapsADPassword [-Identity] <string[]> -RecoveryMode -Port <int> [-IncludeHistory] [-AsPlainText] [<CommonParameters>]

PARAMETERS:
- AsPlainText <switch> (Required: false)
- Credential <pscredential> (Required: false)
- DecryptionCredential <pscredential> (Required: false)
- Domain <string> (Required: true)
- DomainController <string> (Required: true)
- Identity <string[]> (Required: true)
- IncludeHistory <switch> (Required: false)
- Port <int> (Required: true)
- RecoveryMode <switch> (Required: true)
```

### Get-LapsDiagnostics

```powershell
Get-LapsDiagnostics [[-OutputFolder] <string>] [-CollectNetworkTrace] [-ResetPassword] [<CommonParameters>]

PARAMETERS:
- CollectNetworkTrace <switch> (Required: false)
- OutputFolder <string> (Required: false)
- ResetPassword <switch> (Required: false)
```

### Get-LocalGroup

```powershell
Get-LocalGroup [[-Name] <string[]>] [<CommonParameters>]

Get-LocalGroup [[-SID] <SecurityIdentifier[]>] [<CommonParameters>]

PARAMETERS:
- Name <string[]> (Required: false)
- SID <SecurityIdentifier[]> (Required: false)
```

### Get-LocalGroupMember

```powershell
Get-LocalGroupMember [-Name] <string> [[-Member] <string>] [<CommonParameters>]

Get-LocalGroupMember [-Group] <LocalGroup> [[-Member] <string>] [<CommonParameters>]

Get-LocalGroupMember [-SID] <SecurityIdentifier> [[-Member] <string>] [<CommonParameters>]

PARAMETERS:
- Group <LocalGroup> (Required: true)
- Member <string> (Required: false)
- Name <string> (Required: true)
- SID <SecurityIdentifier> (Required: true)
```

### Get-LocalUser

```powershell
Get-LocalUser [[-Name] <string[]>] [<CommonParameters>]

Get-LocalUser [[-SID] <SecurityIdentifier[]>] [<CommonParameters>]

PARAMETERS:
- Name <string[]> (Required: false)
- SID <SecurityIdentifier[]> (Required: false)
```

### Get-Location

```powershell
Get-Location [-PSProvider <string[]>] [-PSDrive <string[]>] [-UseTransaction] [<CommonParameters>]

Get-Location [-Stack] [-StackName <string[]>] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- PSDrive <string[]> (Required: false)
- PSProvider <string[]> (Required: false)
- Stack <switch> (Required: false)
- StackName <string[]> (Required: false)
- UseTransaction <switch> (Required: false)
```

### Get-LogProperties

```powershell
Get-LogProperties [-Name] <Object> [<CommonParameters>]

PARAMETERS:
- Name <Object> (Required: true)
```

### Get-MaskingSet

```powershell
Get-MaskingSet [[-FriendlyName] <string[]>] [-HostType <HostType[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-MaskingSet [-UniqueId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-MaskingSet [-TargetPort <CimInstance#MSFT_TargetPort>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-MaskingSet [-InitiatorId <CimInstance#MSFT_InitiatorId>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-MaskingSet [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-MaskingSet [-VirtualDisk <CimInstance#MSFT_VirtualDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: false)
- HostType <HostType[]> (Required: false)
- InitiatorId <CimInstance#MSFT_InitiatorId> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- TargetPort <CimInstance#MSFT_TargetPort> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
```

### Get-Member

```powershell
Get-Member [[-Name] <string[]>] [-InputObject <psobject>] [-MemberType <PSMemberTypes>] [-View <PSMemberViewTypes>] [-Static] [-Force] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- InputObject <psobject> (Required: false)
- MemberType <PSMemberTypes> (Required: false)
- Name <string[]> (Required: false)
- Static <switch> (Required: false)
- View <PSMemberViewTypes> (Required: false)
```

### Get-MMAgent

```powershell
Get-MMAgent [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-MockDynamicParameters

```powershell
SYNOPSIS:
This command is used by Pester's Mocking framework.  You do not need to call it directly.

PARAMETERS:

- CmdletName <String> (Required: true)
- FunctionName <String> (Required: true)
- ModuleName <String> (Required: false)
- Parameters <Hashtable> (Required: false)
- Cmdlet <Object> (Required: false)

```

### Get-Module

```powershell
Get-Module [[-Name] <string[]>] [-FullyQualifiedName <ModuleSpecification[]>] [-All] [<CommonParameters>]

Get-Module [[-Name] <string[]>] -ListAvailable [-FullyQualifiedName <ModuleSpecification[]>] [-All] [-PSEdition <string>] [-Refresh] [<CommonParameters>]

Get-Module [[-Name] <string[]>] -PSSession <PSSession> [-FullyQualifiedName <ModuleSpecification[]>] [-ListAvailable] [-PSEdition <string>] [-Refresh] [<CommonParameters>]

Get-Module [[-Name] <string[]>] -CimSession <CimSession> [-FullyQualifiedName <ModuleSpecification[]>] [-ListAvailable] [-Refresh] [-CimResourceUri <uri>] [-CimNamespace <string>] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- CimNamespace <string> (Required: false)
- CimResourceUri <uri> (Required: false)
- CimSession <CimSession> (Required: true)
- FullyQualifiedName <ModuleSpecification[]> (Required: false)
- ListAvailable <switch> (Required: true)
- Name <string[]> (Required: false)
- PSEdition <string> (Required: false)
- PSSession <PSSession> (Required: true)
- Refresh <switch> (Required: false)
```

### Get-MpBehavioralNetworkBlockingRules

```powershell
Get-MpBehavioralNetworkBlockingRules [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-MpComputerStatus

```powershell
Get-MpComputerStatus [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-MpPerformanceReport

```powershell
SYNOPSIS:
This cmdlet reports the file paths, file extensions, and processes that cause
the highest impact to Microsoft Defender Antivirus scans.

DESCRIPTION:
This cmdlet analyzes a previously collected Microsoft Defender Antivirus
performance recording and reports the file paths, file extensions and processes
that cause the highest impact to Microsoft Defender Antivirus scans.

The performance analyzer provides insight into problematic files that could
cause performance degradation of Microsoft Defender Antivirus. This tool is
provided "AS IS", and is not intended to provide suggestions on exclusions.
Exclusions can reduce the level of protection on your endpoints. Exclusions,
if any, should be defined with caution.

PARAMETERS:

- Path <String> (Required: true)
- TopFiles <Int32> (Required: false)
- TopScansPerFile <Int32> (Required: false)
- TopProcessesPerFile <Int32> (Required: false)
- TopScansPerProcessPerFile <Int32> (Required: false)
- TopPaths <Int32> (Required: false)
- TopPathsDepth <Int32> (Required: false)
- TopScansPerPath <Int32> (Required: false)
- TopFilesPerPath <Int32> (Required: false)
- TopScansPerFilePerPath <Int32> (Required: false)
- TopExtensionsPerPath <Int32> (Required: false)
- TopScansPerExtensionPerPath <Int32> (Required: false)
- TopProcessesPerPath <Int32> (Required: false)
- TopScansPerProcessPerPath <Int32> (Required: false)
- TopExtensions <Int32> (Required: false)
- TopScansPerExtension <Int32> (Required: false)
- TopPathsPerExtension <Int32> (Required: false)
- TopScansPerPathPerExtension <Int32> (Required: false)
- TopFilesPerExtension <Int32> (Required: false)
- TopScansPerFilePerExtension <Int32> (Required: false)
- TopProcessesPerExtension <Int32> (Required: false)
- TopScansPerProcessPerExtension <Int32> (Required: false)
- TopProcesses <Int32> (Required: false)
- TopScansPerProcess <Int32> (Required: false)
- TopFilesPerProcess <Int32> (Required: false)
- TopScansPerFilePerProcess <Int32> (Required: false)
- TopExtensionsPerProcess <Int32> (Required: false)
- TopScansPerExtensionPerProcess <Int32> (Required: false)
- TopPathsPerProcess <Int32> (Required: false)
- TopScansPerPathPerProcess <Int32> (Required: false)
- TopScans <Int32> (Required: false)
- MinDuration <String> (Required: false)
- MinStartTime <DateTime> (Required: false)
- MinEndTime <DateTime> (Required: false)
- MaxStartTime <DateTime> (Required: false)
- MaxEndTime <DateTime> (Required: false)
- Overview <SwitchParameter> (Required: false)
- Raw <SwitchParameter> (Required: false)

```

### Get-MpPreference

```powershell
Get-MpPreference [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-MpThreat

```powershell
Get-MpThreat [<CommonParameters>]

Get-MpThreat [-ThreatID <long[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThreatID <long[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-MpThreatCatalog

```powershell
Get-MpThreatCatalog [<CommonParameters>]

Get-MpThreatCatalog [-ThreatID <long[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThreatID <long[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-MpThreatDetection

```powershell
Get-MpThreatDetection [<CommonParameters>]

Get-MpThreatDetection [-ThreatID <long[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThreatID <long[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NCSIPolicyConfiguration

```powershell
Get-NCSIPolicyConfiguration [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-Net6to4Configuration

```powershell
Get-Net6to4Configuration [-IPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- IPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapter

```powershell
Get-NetAdapter [[-Name] <string[]>] [-IncludeHidden] [-Physical] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapter -InterfaceDescription <string[]> [-IncludeHidden] [-Physical] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapter -InterfaceIndex <uint32[]> [-IncludeHidden] [-Physical] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- InterfaceIndex <uint32[]> (Required: true)
- Name <string[]> (Required: false)
- Physical <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterAdvancedProperty

```powershell
Get-NetAdapterAdvancedProperty [[-Name] <string[]>] [-IncludeHidden] [-AllProperties] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterAdvancedProperty [[-Name] <string[]>] -RegistryKeyword <string[]> [-IncludeHidden] [-AllProperties] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterAdvancedProperty [[-Name] <string[]>] -DisplayName <string[]> [-IncludeHidden] [-AllProperties] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterAdvancedProperty -InterfaceDescription <string[]> -RegistryKeyword <string[]> [-IncludeHidden] [-AllProperties] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterAdvancedProperty -InterfaceDescription <string[]> -DisplayName <string[]> [-IncludeHidden] [-AllProperties] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterAdvancedProperty -InterfaceDescription <string[]> [-IncludeHidden] [-AllProperties] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AllProperties <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DisplayName <string[]> (Required: true)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- RegistryKeyword <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterBinding

```powershell
Get-NetAdapterBinding [[-Name] <string[]>] [-ComponentID <string[]>] [-DisplayName <string[]>] [-IncludeHidden] [-AllBindings] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterBinding -InterfaceDescription <string[]> [-ComponentID <string[]>] [-DisplayName <string[]>] [-IncludeHidden] [-AllBindings] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AllBindings <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComponentID <string[]> (Required: false)
- DisplayName <string[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterChecksumOffload

```powershell
Get-NetAdapterChecksumOffload [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterChecksumOffload -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterDataPathConfiguration

```powershell
Get-NetAdapterDataPathConfiguration [[-Name] <string[]>] [-Profile <string[]>] [-ProfileSource <uint32[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterDataPathConfiguration -InterfaceDescription <string[]> [-Profile <string[]>] [-ProfileSource <uint32[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- Profile <string[]> (Required: false)
- ProfileSource <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterEncapsulatedPacketTaskOffload

```powershell
Get-NetAdapterEncapsulatedPacketTaskOffload [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterEncapsulatedPacketTaskOffload -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterHardwareInfo

```powershell
Get-NetAdapterHardwareInfo [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterHardwareInfo -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterIPsecOffload

```powershell
Get-NetAdapterIPsecOffload [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterIPsecOffload -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterLso

```powershell
Get-NetAdapterLso [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterLso -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterPacketDirect

```powershell
Get-NetAdapterPacketDirect [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterPacketDirect -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterPowerManagement

```powershell
Get-NetAdapterPowerManagement [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterPowerManagement -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterQos

```powershell
Get-NetAdapterQos [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterQos -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterRdma

```powershell
Get-NetAdapterRdma [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterRdma -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterRsc

```powershell
Get-NetAdapterRsc [[-Name] <string[]>] [-IPv4OperationalState <bool[]>] [-IPv6OperationalState <bool[]>] [-IPv4FailureReason <FailureReason[]>] [-IPv6FailureReason <FailureReason[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterRsc -InterfaceDescription <string[]> [-IPv4OperationalState <bool[]>] [-IPv6OperationalState <bool[]>] [-IPv4FailureReason <FailureReason[]>] [-IPv6FailureReason <FailureReason[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IPv4FailureReason <FailureReason[]> (Required: false)
- IPv4OperationalState <bool[]> (Required: false)
- IPv6FailureReason <FailureReason[]> (Required: false)
- IPv6OperationalState <bool[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterRss

```powershell
Get-NetAdapterRss [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterRss -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterSriov

```powershell
Get-NetAdapterSriov [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterSriov -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterSriovVf

```powershell
Get-NetAdapterSriovVf [[-Name] <string[]>] [-SwitchID <uint32[]>] [-FunctionID <uint16[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterSriovVf -InterfaceDescription <string[]> [-SwitchID <uint32[]>] [-FunctionID <uint16[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FunctionID <uint16[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- SwitchID <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterStatistics

```powershell
Get-NetAdapterStatistics [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterStatistics -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterUro

```powershell
Get-NetAdapterUro [[-Name] <string[]>] [-Enabled <bool[]>] [-Operational <bool[]>] [-FailureReason <FailureReason[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterUro -InterfaceDescription <string[]> [-Enabled <bool[]>] [-Operational <bool[]>] [-FailureReason <FailureReason[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Enabled <bool[]> (Required: false)
- FailureReason <FailureReason[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- Operational <bool[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterUso

```powershell
Get-NetAdapterUso [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterUso -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterVmq

```powershell
Get-NetAdapterVmq [[-Name] <string[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterVmq -InterfaceDescription <string[]> [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterVMQQueue

```powershell
Get-NetAdapterVmqQueue [[-Name] <string[]>] [-Id <uint32[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterVmqQueue -InterfaceDescription <string[]> [-Id <uint32[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Id <uint32[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetAdapterVPort

```powershell
Get-NetAdapterVPort [[-Name] <string[]>] [-VPortID <uint32[]>] [-SwitchID <uint32[]>] [-FunctionID <uint16[]>] [-PhysicalFunction] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetAdapterVPort -InterfaceDescription <string[]> [-VPortID <uint32[]>] [-SwitchID <uint32[]>] [-FunctionID <uint16[]>] [-PhysicalFunction] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FunctionID <uint16[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- PhysicalFunction <switch> (Required: false)
- SwitchID <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- VPortID <uint32[]> (Required: false)
```

### Get-NetCompartment

```powershell
Get-NetCompartment [-CompartmentId <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CompartmentId <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetConnectionProfile

```powershell
Get-NetConnectionProfile [-Name <string[]>] [-InterfaceAlias <string[]>] [-InterfaceIndex <uint32[]>] [-NetworkCategory <NetworkCategory[]>] [-DomainAuthenticationKind <DomainAuthenticationKind[]>] [-IPv4Connectivity <IPv4Connectivity[]>] [-IPv6Connectivity <IPv6Connectivity[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DomainAuthenticationKind <DomainAuthenticationKind[]> (Required: false)
- IPv4Connectivity <IPv4Connectivity[]> (Required: false)
- IPv6Connectivity <IPv6Connectivity[]> (Required: false)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- Name <string[]> (Required: false)
- NetworkCategory <NetworkCategory[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetDnsTransitionConfiguration

```powershell
Get-NetDnsTransitionConfiguration [-Adapter <CimInstance#MSFT_NetAdapter>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Adapter <CimInstance#MSFT_NetAdapter> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetDnsTransitionMonitoring

```powershell
Get-NetDnsTransitionMonitoring [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetEventNetworkAdapter

```powershell
Get-NetEventNetworkAdapter [[-Name] <string[]>] [-ShowInstalled] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetEventNetworkAdapter [-AssociatedPacketCaptureProvider <CimInstance#MSFT_NetEventPacketCaptureProvider>] [-ShowInstalled] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedPacketCaptureProvider <CimInstance#MSFT_NetEventPacketCaptureProvider> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- ShowInstalled <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetEventPacketCaptureProvider

```powershell
Get-NetEventPacketCaptureProvider [[-SessionName] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetEventPacketCaptureProvider [-AssociatedEventSession <CimInstance#MSFT_NetEventSession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetEventPacketCaptureProvider [-AssociatedCaptureTarget <CimInstance#MSFT_NetEventPacketCaptureTarget>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedCaptureTarget <CimInstance#MSFT_NetEventPacketCaptureTarget> (Required: false)
- AssociatedEventSession <CimInstance#MSFT_NetEventSession> (Required: false)
- CimSession <CimSession[]> (Required: false)
- SessionName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetEventProvider

```powershell
Get-NetEventProvider [[-Name] <string[]>] [-ShowInstalled] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetEventProvider [-AssociatedEventSession <CimInstance#MSFT_NetEventSession>] [-ShowInstalled] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetEventProvider [-AssociatedCaptureTarget <CimInstance#MSFT_NetEventPacketCaptureTarget>] [-ShowInstalled] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedCaptureTarget <CimInstance#MSFT_NetEventPacketCaptureTarget> (Required: false)
- AssociatedEventSession <CimInstance#MSFT_NetEventSession> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- ShowInstalled <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetEventSession

```powershell
Get-NetEventSession [[-Name] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetEventSession [-AssociatedEventProvider <CimInstance#MSFT_NetEventProvider>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedEventProvider <CimInstance#MSFT_NetEventProvider> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetEventVFPProvider

```powershell
Get-NetEventVFPProvider [[-SessionName] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetEventVFPProvider [-AssociatedEventSession <CimInstance#MSFT_NetEventSession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedEventSession <CimInstance#MSFT_NetEventSession> (Required: false)
- CimSession <CimSession[]> (Required: false)
- SessionName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetEventVmNetworkAdapter

```powershell
Get-NetEventVmNetworkAdapter [[-Name] <string[]>] [-ShowInstalled] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetEventVmNetworkAdapter [-AssociatedPacketCaptureProvider <CimInstance#MSFT_NetEventPacketCaptureProvider>] [-ShowInstalled] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedPacketCaptureProvider <CimInstance#MSFT_NetEventPacketCaptureProvider> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- ShowInstalled <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetEventVmSwitch

```powershell
Get-NetEventVmSwitch [[-Name] <string[]>] [-ShowInstalled] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetEventVmSwitch [-AssociatedPacketCaptureProvider <CimInstance#MSFT_NetEventPacketCaptureProvider>] [-ShowInstalled] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedPacketCaptureProvider <CimInstance#MSFT_NetEventPacketCaptureProvider> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- ShowInstalled <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetEventVmSwitchProvider

```powershell
Get-NetEventVmSwitchProvider [[-SessionName] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetEventVmSwitchProvider [-AssociatedEventSession <CimInstance#MSFT_NetEventSession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedEventSession <CimInstance#MSFT_NetEventSession> (Required: false)
- CimSession <CimSession[]> (Required: false)
- SessionName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetEventWFPCaptureProvider

```powershell
Get-NetEventWFPCaptureProvider [[-SessionName] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetEventWFPCaptureProvider [-AssociatedEventSession <CimInstance#MSFT_NetEventSession>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedEventSession <CimInstance#MSFT_NetEventSession> (Required: false)
- CimSession <CimSession[]> (Required: false)
- SessionName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetFirewallAddressFilter

```powershell
Get-NetFirewallAddressFilter [-All] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallAddressFilter -AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallAddressFilter -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallAddressFilter -AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> (Required: true)
- AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> (Required: true)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetFirewallApplicationFilter

```powershell
Get-NetFirewallApplicationFilter [-All] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallApplicationFilter [-Program <string[]>] [-Package <string[]>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallApplicationFilter -AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- Package <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- Program <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetFirewallDynamicKeywordAddress

```powershell
Get-NetFirewallDynamicKeywordAddress [-All] [-PolicyStore <string>] [-AllAutoResolve] [-AllNonAutoResolve] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallDynamicKeywordAddress [-Id] <string[]> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AllAutoResolve <switch> (Required: false)
- AllNonAutoResolve <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Id <string[]> (Required: true)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetFirewallHyperVPort

```powershell
Get-NetFirewallHyperVPort [-All] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallHyperVPort [-SwitchName <string[]>] [-PortName <string[]>] [-VMCreatorId <string[]>] [-InterfaceGuid <string[]>] [-PartitionGuid <string[]>] [-Constrained <ConstrainedInterfaceType[]>] [-Profile <Profile[]>] [-NetworkType <NetworkType[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Constrained <ConstrainedInterfaceType[]> (Required: false)
- InterfaceGuid <string[]> (Required: false)
- NetworkType <NetworkType[]> (Required: false)
- PartitionGuid <string[]> (Required: false)
- PortName <string[]> (Required: false)
- Profile <Profile[]> (Required: false)
- SwitchName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- VMCreatorId <string[]> (Required: false)
```

### Get-NetFirewallHyperVProfile

```powershell
Get-NetFirewallHyperVProfile [-All] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallHyperVProfile [[-Name] <string[]>] [-Profile <Profile[]>] [-Enabled <GpoBoolean[]>] [-DefaultInboundAction <Action[]>] [-DefaultOutboundAction <Action[]>] [-AllowLocalFirewallRules <GpoBoolean[]>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AllowLocalFirewallRules <GpoBoolean[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DefaultInboundAction <Action[]> (Required: false)
- DefaultOutboundAction <Action[]> (Required: false)
- Enabled <GpoBoolean[]> (Required: false)
- Name <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <Profile[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetFirewallHyperVRule

```powershell
Get-NetFirewallHyperVRule [-All] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallHyperVRule [-Name] <string[]> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallHyperVRule -DisplayName <string[]> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallHyperVRule [-RulePriority <uint16[]>] [-Direction <Direction[]>] [-VMCreatorId <string[]>] [-Protocol <string[]>] [-Action <Action[]>] [-Enabled <Enabled[]>] [-EnforcementStatus <HyperVRuleStatus[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Action <Action[]> (Required: false)
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Direction <Direction[]> (Required: false)
- DisplayName <string[]> (Required: true)
- Enabled <Enabled[]> (Required: false)
- EnforcementStatus <HyperVRuleStatus[]> (Required: false)
- Name <string[]> (Required: true)
- PolicyStore <string> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- Protocol <string[]> (Required: false)
- RulePriority <uint16[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- VMCreatorId <string[]> (Required: false)
```

### Get-NetFirewallHyperVVMCreator

```powershell
Get-NetFirewallHyperVVMCreator [-All] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallHyperVVMCreator [-VMCreatorId] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- VMCreatorId <string[]> (Required: true)
```

### Get-NetFirewallHyperVVMSetting

```powershell
Get-NetFirewallHyperVVMSetting [-All] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallHyperVVMSetting [-Name] <string[]> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: true)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetFirewallInterfaceFilter

```powershell
Get-NetFirewallInterfaceFilter [-All] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallInterfaceFilter -AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallInterfaceFilter -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> (Required: true)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetFirewallInterfaceTypeFilter

```powershell
Get-NetFirewallInterfaceTypeFilter [-All] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallInterfaceTypeFilter [-InterfaceType <InterfaceType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallInterfaceTypeFilter -AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallInterfaceTypeFilter -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> (Required: true)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- InterfaceType <InterfaceType[]> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetFirewallPortFilter

```powershell
Get-NetFirewallPortFilter [-All] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallPortFilter [-Protocol <string[]>] [-DynamicTarget <DynamicTransport[]>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallPortFilter -AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallPortFilter -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> (Required: true)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- DynamicTarget <DynamicTransport[]> (Required: false)
- GPOSession <string> (Required: false)
- PolicyStore <string> (Required: false)
- Protocol <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetFirewallProfile

```powershell
Get-NetFirewallProfile [-All] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallProfile [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallProfile -AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallProfile -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallProfile -AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> (Required: true)
- AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> (Required: true)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- Name <string[]> (Required: true)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetFirewallRule

```powershell
Get-NetFirewallRule [-All] [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallRule [-Name] <string[]> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallRule -DisplayName <string[]> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Direction <Direction[]>] [-Action <Action[]>] [-EdgeTraversalPolicy <EdgeTraversal[]>] [-LooseSourceMapping <bool[]>] [-LocalOnlyMapping <bool[]>] [-Owner <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyAppId <string[]>] [-PackageFamilyName <string[]>] [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallRule -AssociatedNetFirewallApplicationFilter <CimInstance#MSFT_NetApplicationFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallRule -AssociatedNetFirewallSecurityFilter <CimInstance#MSFT_NetNetworkLayerSecurityFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallRule -AssociatedNetFirewallServiceFilter <CimInstance#MSFT_NetServiceFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

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
- Description <string[]> (Required: false)
- Direction <Direction[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- EdgeTraversalPolicy <EdgeTraversal[]> (Required: false)
- Enabled <Enabled[]> (Required: false)
- Group <string[]> (Required: false)
- LocalOnlyMapping <bool[]> (Required: false)
- LooseSourceMapping <bool[]> (Required: false)
- Name <string[]> (Required: true)
- Owner <string[]> (Required: false)
- PackageFamilyName <string[]> (Required: false)
- PolicyAppId <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
```

### Get-NetFirewallSecurityFilter

```powershell
Get-NetFirewallSecurityFilter [-All] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallSecurityFilter [-Authentication <Authentication[]>] [-Encryption <Encryption[]>] [-OverrideBlockRules <bool[]>] [-LocalUser <string[]>] [-RemoteUser <string[]>] [-RemoteMachine <string[]>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallSecurityFilter -AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> (Required: true)
- Authentication <Authentication[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Encryption <Encryption[]> (Required: false)
- GPOSession <string> (Required: false)
- LocalUser <string[]> (Required: false)
- OverrideBlockRules <bool[]> (Required: false)
- PolicyStore <string> (Required: false)
- RemoteMachine <string[]> (Required: false)
- RemoteUser <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetFirewallServiceFilter

```powershell
Get-NetFirewallServiceFilter [-All] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallServiceFilter [-Service <string[]>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetFirewallServiceFilter -AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallRule <CimInstance#MSFT_NetFirewallRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- PolicyStore <string> (Required: false)
- Service <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetFirewallSetting

```powershell
Get-NetFirewallSetting [-All] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetIPAddress

```powershell
Get-NetIPAddress [[-IPAddress] <string[]>] [-InterfaceIndex <uint32[]>] [-InterfaceAlias <string[]>] [-AddressFamily <AddressFamily[]>] [-Type <Type[]>] [-PrefixLength <byte[]>] [-PrefixOrigin <PrefixOrigin[]>] [-SuffixOrigin <SuffixOrigin[]>] [-AddressState <AddressState[]>] [-ValidLifetime <timespan[]>] [-PreferredLifetime <timespan[]>] [-SkipAsSource <bool[]>] [-AssociatedIPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-IncludeAllCompartments] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily[]> (Required: false)
- AddressState <AddressState[]> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedIPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IPAddress <string[]> (Required: false)
- IncludeAllCompartments <switch> (Required: false)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- PolicyStore <string> (Required: false)
- PreferredLifetime <timespan[]> (Required: false)
- PrefixLength <byte[]> (Required: false)
- PrefixOrigin <PrefixOrigin[]> (Required: false)
- SkipAsSource <bool[]> (Required: false)
- SuffixOrigin <SuffixOrigin[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- Type <Type[]> (Required: false)
- ValidLifetime <timespan[]> (Required: false)
```

### Get-NetIPConfiguration

```powershell
DESCRIPTION:


PARAMETERS:
- InterfaceAlias <String> (Required: false)
- InterfaceIndex <Int32> (Required: true)
- All <SwitchParameter> (Required: true)
- AllCompartments <SwitchParameter> (Required: false)
- CompartmentId <Int32> (Required: false)
- Detailed <SwitchParameter> (Required: false)
- CimSession <CimSession> (Required: false)
```

### Get-NetIPHttpsConfiguration

```powershell
Get-NetIPHttpsConfiguration [-Profile <string[]>] [-ProfileActivated <bool[]>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPHttpsConfiguration [-Profile <string[]>] [-ProfileActivated <bool[]>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <string[]> (Required: false)
- ProfileActivated <bool[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetIPHttpsState

```powershell
Get-NetIPHttpsState [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetIPInterface

```powershell
Get-NetIPInterface [[-InterfaceAlias] <string[]>] [-InterfaceIndex <uint32[]>] [-AddressFamily <AddressFamily[]>] [-Forwarding <Forwarding[]>] [-ClampMss <ClampMss[]>] [-Advertising <Advertising[]>] [-NlMtuBytes <uint32[]>] [-InterfaceMetric <uint32[]>] [-NeighborUnreachabilityDetection <NeighborUnreachabilityDetection[]>] [-BaseReachableTimeMs <uint32[]>] [-ReachableTimeMs <uint32[]>] [-RetransmitTimeMs <uint32[]>] [-DadTransmits <uint32[]>] [-DadRetransmitTimeMs <uint32[]>] [-RouterDiscovery <RouterDiscovery[]>] [-ManagedAddressConfiguration <ManagedAddressConfiguration[]>] [-OtherStatefulConfiguration <OtherStatefulConfiguration[]>] [-WeakHostSend <WeakHostSend[]>] [-WeakHostReceive <WeakHostReceive[]>] [-IgnoreDefaultRoutes <IgnoreDefaultRoutes[]>] [-AdvertisedRouterLifetime <timespan[]>] [-AdvertiseDefaultRoute <AdvertiseDefaultRoute[]>] [-CurrentHopLimit <uint32[]>] [-ForceArpNdWolPattern <ForceArpNdWolPattern[]>] [-DirectedMacWolPattern <DirectedMacWolPattern[]>] [-EcnMarking <EcnMarking[]>] [-Dhcp <Dhcp[]>] [-ConnectionState <ConnectionState[]>] [-AutomaticMetric <AutomaticMetric[]>] [-NeighborDiscoverySupported <NeighborDiscoverySupported[]>] [-CompartmentId <uint32[]>] [-PolicyStore <string>] [-IncludeAllCompartments] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPInterface [-AssociatedRoute <CimInstance#MSFT_NetRoute>] [-IncludeAllCompartments] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPInterface [-AssociatedIPAddress <CimInstance#MSFT_NetIPAddress>] [-IncludeAllCompartments] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPInterface [-AssociatedNeighbor <CimInstance#MSFT_NetNeighbor>] [-IncludeAllCompartments] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPInterface [-AssociatedAdapter <CimInstance#MSFT_NetAdapter>] [-IncludeAllCompartments] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily[]> (Required: false)
- AdvertiseDefaultRoute <AdvertiseDefaultRoute[]> (Required: false)
- AdvertisedRouterLifetime <timespan[]> (Required: false)
- Advertising <Advertising[]> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedAdapter <CimInstance#MSFT_NetAdapter> (Required: false)
- AssociatedIPAddress <CimInstance#MSFT_NetIPAddress> (Required: false)
- AssociatedNeighbor <CimInstance#MSFT_NetNeighbor> (Required: false)
- AssociatedRoute <CimInstance#MSFT_NetRoute> (Required: false)
- AutomaticMetric <AutomaticMetric[]> (Required: false)
- BaseReachableTimeMs <uint32[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClampMss <ClampMss[]> (Required: false)
- CompartmentId <uint32[]> (Required: false)
- ConnectionState <ConnectionState[]> (Required: false)
- CurrentHopLimit <uint32[]> (Required: false)
- DadRetransmitTimeMs <uint32[]> (Required: false)
- DadTransmits <uint32[]> (Required: false)
- Dhcp <Dhcp[]> (Required: false)
- DirectedMacWolPattern <DirectedMacWolPattern[]> (Required: false)
- EcnMarking <EcnMarking[]> (Required: false)
- ForceArpNdWolPattern <ForceArpNdWolPattern[]> (Required: false)
- Forwarding <Forwarding[]> (Required: false)
- IgnoreDefaultRoutes <IgnoreDefaultRoutes[]> (Required: false)
- IncludeAllCompartments <switch> (Required: false)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- InterfaceMetric <uint32[]> (Required: false)
- ManagedAddressConfiguration <ManagedAddressConfiguration[]> (Required: false)
- NeighborDiscoverySupported <NeighborDiscoverySupported[]> (Required: false)
- NeighborUnreachabilityDetection <NeighborUnreachabilityDetection[]> (Required: false)
- NlMtuBytes <uint32[]> (Required: false)
- OtherStatefulConfiguration <OtherStatefulConfiguration[]> (Required: false)
- PolicyStore <string> (Required: false)
- ReachableTimeMs <uint32[]> (Required: false)
- RetransmitTimeMs <uint32[]> (Required: false)
- RouterDiscovery <RouterDiscovery[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WeakHostReceive <WeakHostReceive[]> (Required: false)
- WeakHostSend <WeakHostSend[]> (Required: false)
```

### Get-NetIPsecDospSetting

```powershell
Get-NetIPsecDospSetting [-All] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecDospSetting [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-NetIPsecMainModeCryptoSet

```powershell
Get-NetIPsecMainModeCryptoSet [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeCryptoSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeCryptoSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeCryptoSet [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-MaxMinutes <uint32[]>] [-MaxSessions <uint32[]>] [-ForceDiffieHellman <bool[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeCryptoSet -AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- ForceDiffieHellman <bool[]> (Required: false)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- MaxMinutes <uint32[]> (Required: false)
- MaxSessions <uint32[]> (Required: false)
- Name <string[]> (Required: true)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
```

### Get-NetIPsecMainModeRule

```powershell
Get-NetIPsecMainModeRule [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeRule [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-MainModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeRule -AssociatedNetIPsecMainModeCryptoSet <CimInstance#MSFT_NetIKEMMCryptoSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> (Required: true)
- AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> (Required: true)
- AssociatedNetIPsecMainModeCryptoSet <CimInstance#MSFT_NetIKEMMCryptoSet> (Required: true)
- AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- Enabled <Enabled[]> (Required: false)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- MainModeCryptoSet <string[]> (Required: false)
- Name <string[]> (Required: true)
- Phase1AuthSet <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
```

### Get-NetIPsecMainModeSA

```powershell
Get-NetIPsecMainModeSA [-All] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeSA [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecMainModeSA -AssociatedNetIPsecQuickModeSA <CimInstance#MSFT_NetQuickModeSA> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecQuickModeSA <CimInstance#MSFT_NetQuickModeSA> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-NetIPsecPhase1AuthSet

```powershell
Get-NetIPsecPhase1AuthSet [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecPhase1AuthSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecPhase1AuthSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecPhase1AuthSet [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecPhase1AuthSet -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecPhase1AuthSet -AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> (Required: true)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- Name <string[]> (Required: true)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
```

### Get-NetIPsecPhase2AuthSet

```powershell
Get-NetIPsecPhase2AuthSet [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecPhase2AuthSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecPhase2AuthSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecPhase2AuthSet [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecPhase2AuthSet -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- Name <string[]> (Required: true)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
```

### Get-NetIPsecQuickModeCryptoSet

```powershell
Get-NetIPsecQuickModeCryptoSet [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecQuickModeCryptoSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecQuickModeCryptoSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecQuickModeCryptoSet [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-PerfectForwardSecrecyGroup <DiffieHellmanGroup[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecQuickModeCryptoSet -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Description <string[]> (Required: false)
- DisplayGroup <string[]> (Required: false)
- DisplayName <string[]> (Required: true)
- GPOSession <string> (Required: false)
- Group <string[]> (Required: false)
- Name <string[]> (Required: true)
- PerfectForwardSecrecyGroup <DiffieHellmanGroup[]> (Required: false)
- PolicyStore <string> (Required: false)
- PolicyStoreSource <string[]> (Required: false)
- PolicyStoreSourceType <PolicyStoreType[]> (Required: false)
- PrimaryStatus <PrimaryStatus[]> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
```

### Get-NetIPsecQuickModeSA

```powershell
Get-NetIPsecQuickModeSA [-All] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecQuickModeSA [-Name] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecQuickModeSA -AssociatedNetIPsecMainModeSA <CimInstance#MSFT_NetMainModeSA> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedNetIPsecMainModeSA <CimInstance#MSFT_NetMainModeSA> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-NetIPsecRule

```powershell
Get-NetIPsecRule [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecRule [-IPsecRuleName] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Mode <IPsecMode[]>] [-InboundSecurity <SecurityPolicy[]>] [-OutboundSecurity <SecurityPolicy[]>] [-QuickModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-Phase2AuthSet <string[]>] [-KeyModule <KeyModule[]>] [-AllowWatchKey <bool[]>] [-AllowSetKey <bool[]>] [-RemoteTunnelHostname <string[]>] [-ForwardPathLifetime <uint32[]>] [-EncryptedTunnelBypass <bool[]>] [-RequireAuthorization <bool[]>] [-User <string[]>] [-Machine <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecRule -AssociatedNetIPsecPhase2AuthSet <CimInstance#MSFT_NetIKEP2AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetIPsecRule -AssociatedNetIPsecQuickModeCryptoSet <CimInstance#MSFT_NetIKEQMCryptoSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

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
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TracePolicyStore <switch> (Required: false)
- User <string[]> (Required: false)
```

### Get-NetIPv4Protocol

```powershell
Get-NetIPv4Protocol [-DefaultHopLimit <uint32[]>] [-NeighborCacheLimitEntries <uint32[]>] [-RouteCacheLimitEntries <uint32[]>] [-ReassemblyLimitBytes <uint32[]>] [-IcmpRedirects <IcmpRedirects[]>] [-SourceRoutingBehavior <SourceRoutingBehavior[]>] [-DhcpMediaSense <DhcpMediaSense[]>] [-MediaSenseEventLog <MediaSenseEventLog[]>] [-IGMPLevel <MldLevel[]>] [-IGMPVersion <MldVersion[]>] [-MulticastForwarding <MulticastForwarding[]>] [-GroupForwardedFragments <GroupForwardedFragments[]>] [-RandomizeIdentifiers <RandomizeIdentifiers[]>] [-AddressMaskReply <AddressMaskReply[]>] [-DeadGatewayDetection <DeadGatewayDetection[]>] [-MinimumMtu <uint32[]>] [-MultipleArpAnnouncements <MultipleArpAnnouncements[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AddressMaskReply <AddressMaskReply[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DeadGatewayDetection <DeadGatewayDetection[]> (Required: false)
- DefaultHopLimit <uint32[]> (Required: false)
- DhcpMediaSense <DhcpMediaSense[]> (Required: false)
- GroupForwardedFragments <GroupForwardedFragments[]> (Required: false)
- IGMPLevel <MldLevel[]> (Required: false)
- IGMPVersion <MldVersion[]> (Required: false)
- IcmpRedirects <IcmpRedirects[]> (Required: false)
- MediaSenseEventLog <MediaSenseEventLog[]> (Required: false)
- MinimumMtu <uint32[]> (Required: false)
- MulticastForwarding <MulticastForwarding[]> (Required: false)
- MultipleArpAnnouncements <MultipleArpAnnouncements[]> (Required: false)
- NeighborCacheLimitEntries <uint32[]> (Required: false)
- RandomizeIdentifiers <RandomizeIdentifiers[]> (Required: false)
- ReassemblyLimitBytes <uint32[]> (Required: false)
- RouteCacheLimitEntries <uint32[]> (Required: false)
- SourceRoutingBehavior <SourceRoutingBehavior[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetIPv6Protocol

```powershell
Get-NetIPv6Protocol [-DefaultHopLimit <uint32[]>] [-NeighborCacheLimitEntries <uint32[]>] [-RouteCacheLimitEntries <uint32[]>] [-ReassemblyLimitBytes <uint32[]>] [-IcmpRedirects <IcmpRedirects[]>] [-SourceRoutingBehavior <SourceRoutingBehavior[]>] [-DhcpMediaSense <DhcpMediaSense[]>] [-MediaSenseEventLog <MediaSenseEventLog[]>] [-MldLevel <MldLevel[]>] [-MldVersion <MldVersion[]>] [-MulticastForwarding <MulticastForwarding[]>] [-GroupForwardedFragments <GroupForwardedFragments[]>] [-RandomizeIdentifiers <RandomizeIdentifiers[]>] [-AddressMaskReply <AddressMaskReply[]>] [-DeadGatewayDetection <DeadGatewayDetection[]>] [-UseTemporaryAddresses <UseTemporaryAddresses[]>] [-MaxTemporaryDadAttempts <uint32[]>] [-MaxTemporaryValidLifetime <timespan[]>] [-MaxTemporaryPreferredLifetime <timespan[]>] [-TemporaryRegenerateTime <timespan[]>] [-MaxTemporaryDesyncTime <timespan[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AddressMaskReply <AddressMaskReply[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DeadGatewayDetection <DeadGatewayDetection[]> (Required: false)
- DefaultHopLimit <uint32[]> (Required: false)
- DhcpMediaSense <DhcpMediaSense[]> (Required: false)
- GroupForwardedFragments <GroupForwardedFragments[]> (Required: false)
- IcmpRedirects <IcmpRedirects[]> (Required: false)
- MaxTemporaryDadAttempts <uint32[]> (Required: false)
- MaxTemporaryDesyncTime <timespan[]> (Required: false)
- MaxTemporaryPreferredLifetime <timespan[]> (Required: false)
- MaxTemporaryValidLifetime <timespan[]> (Required: false)
- MediaSenseEventLog <MediaSenseEventLog[]> (Required: false)
- MldLevel <MldLevel[]> (Required: false)
- MldVersion <MldVersion[]> (Required: false)
- MulticastForwarding <MulticastForwarding[]> (Required: false)
- NeighborCacheLimitEntries <uint32[]> (Required: false)
- RandomizeIdentifiers <RandomizeIdentifiers[]> (Required: false)
- ReassemblyLimitBytes <uint32[]> (Required: false)
- RouteCacheLimitEntries <uint32[]> (Required: false)
- SourceRoutingBehavior <SourceRoutingBehavior[]> (Required: false)
- TemporaryRegenerateTime <timespan[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseTemporaryAddresses <UseTemporaryAddresses[]> (Required: false)
```

### Get-NetIsatapConfiguration

```powershell
Get-NetIsatapConfiguration [-IPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- IPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetLbfoTeam

```powershell
Get-NetLbfoTeam [[-Name] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetLbfoTeam [-MemberOfTheTeam <CimInstance#MSFT_NetLbfoTeamMember>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetLbfoTeam [-TeamNicForTheTeam <CimInstance#MSFT_NetLbfoTeamNic>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- MemberOfTheTeam <CimInstance#MSFT_NetLbfoTeamMember> (Required: false)
- Name <string[]> (Required: false)
- TeamNicForTheTeam <CimInstance#MSFT_NetLbfoTeamNic> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetLbfoTeamMember

```powershell
Get-NetLbfoTeamMember [[-Name] <string[]>] [[-Team] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetLbfoTeamMember [-TeamOfTheMember <CimInstance#MSFT_NetLbfoTeam>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- Team <string[]> (Required: false)
- TeamOfTheMember <CimInstance#MSFT_NetLbfoTeam> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetLbfoTeamNic

```powershell
Get-NetLbfoTeamNic [[-Name] <string[]>] [[-Team] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetLbfoTeamNic [-TeamOfTheTeamNic <CimInstance#MSFT_NetLbfoTeam>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- Team <string[]> (Required: false)
- TeamOfTheTeamNic <CimInstance#MSFT_NetLbfoTeam> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetNat

```powershell
Get-NetNat [[-Name] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetNatExternalAddress

```powershell
Get-NetNatExternalAddress [[-NatName] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- NatName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetNatGlobal

```powershell
Get-NetNatGlobal [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetNatSession

```powershell
Get-NetNatSession [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetNatStaticMapping

```powershell
Get-NetNatStaticMapping [[-NatName] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- NatName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetNatTransitionConfiguration

```powershell
Get-NetNatTransitionConfiguration [-InstanceName <string[]>] [-PolicyStore <PolicyStore[]>] [-Adapter <CimInstance#MSFT_NetAdapter>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Adapter <CimInstance#MSFT_NetAdapter> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InstanceName <string[]> (Required: false)
- PolicyStore <PolicyStore[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetNatTransitionMonitoring

```powershell
Get-NetNatTransitionMonitoring [-TransportProtocol <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TransportProtocol <uint32[]> (Required: false)
```

### Get-NetNeighbor

```powershell
Get-NetNeighbor [[-IPAddress] <string[]>] [-InterfaceIndex <uint32[]>] [-InterfaceAlias <string[]>] [-LinkLayerAddress <string[]>] [-State <State[]>] [-AddressFamily <AddressFamily[]>] [-AssociatedIPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-IncludeAllCompartments] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily[]> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedIPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IPAddress <string[]> (Required: false)
- IncludeAllCompartments <switch> (Required: false)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- LinkLayerAddress <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- State <State[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetOffloadGlobalSetting

```powershell
Get-NetOffloadGlobalSetting [-ReceiveSideScaling <EnabledDisabledEnum[]>] [-ReceiveSegmentCoalescing <EnabledDisabledEnum[]>] [-Chimney <ChimneyEnum[]>] [-TaskOffload <EnabledDisabledEnum[]>] [-NetworkDirect <EnabledDisabledEnum[]>] [-NetworkDirectAcrossIPSubnets <AllowedBlockedEnum[]>] [-PacketCoalescingFilter <EnabledDisabledEnum[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Chimney <ChimneyEnum[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- NetworkDirect <EnabledDisabledEnum[]> (Required: false)
- NetworkDirectAcrossIPSubnets <AllowedBlockedEnum[]> (Required: false)
- PacketCoalescingFilter <EnabledDisabledEnum[]> (Required: false)
- ReceiveSegmentCoalescing <EnabledDisabledEnum[]> (Required: false)
- ReceiveSideScaling <EnabledDisabledEnum[]> (Required: false)
- TaskOffload <EnabledDisabledEnum[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetPrefixPolicy

```powershell
Get-NetPrefixPolicy [[-Prefix] <string[]>] [-Precedence <uint32[]>] [-Label <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Label <uint32[]> (Required: false)
- Precedence <uint32[]> (Required: false)
- Prefix <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetQosPolicy

```powershell
Get-NetQosPolicy [[-Name] <string[]>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetRoute

```powershell
Get-NetRoute [[-DestinationPrefix] <string[]>] [-InterfaceIndex <uint32[]>] [-InterfaceAlias <string[]>] [-NextHop <string[]>] [-AddressFamily <AddressFamily[]>] [-Publish <Publish[]>] [-RouteMetric <uint16[]>] [-Protocol <Protocol[]>] [-CompartmentId <uint32[]>] [-ValidLifetime <timespan[]>] [-PreferredLifetime <timespan[]>] [-State <State[]>] [-InterfaceMetric <uint32[]>] [-AssociatedIPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-IncludeAllCompartments] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily[]> (Required: false)
- AsJob <switch> (Required: false)
- AssociatedIPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CompartmentId <uint32[]> (Required: false)
- DestinationPrefix <string[]> (Required: false)
- IncludeAllCompartments <switch> (Required: false)
- InterfaceAlias <string[]> (Required: false)
- InterfaceIndex <uint32[]> (Required: false)
- InterfaceMetric <uint32[]> (Required: false)
- NextHop <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- PreferredLifetime <timespan[]> (Required: false)
- Protocol <Protocol[]> (Required: false)
- Publish <Publish[]> (Required: false)
- RouteMetric <uint16[]> (Required: false)
- State <State[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- ValidLifetime <timespan[]> (Required: false)
```

### Get-NetSwitchTeam

```powershell
Get-NetSwitchTeam [[-Name] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-NetSwitchTeam [-Member <CimInstance#MSFT_NetSwitchTeamMember>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Member <CimInstance#MSFT_NetSwitchTeamMember> (Required: false)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetSwitchTeamMember

```powershell
Get-NetSwitchTeamMember [[-Name] <string[]>] [[-Team] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- Team <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetTCPConnection

```powershell
Get-NetTCPConnection [[-LocalAddress] <string[]>] [[-LocalPort] <uint16[]>] [-RemoteAddress <string[]>] [-RemotePort <uint16[]>] [-State <State[]>] [-AppliedSetting <AppliedSetting[]>] [-OwningProcess <uint32[]>] [-CreationTime <datetime[]>] [-OffloadState <OffloadState[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AppliedSetting <AppliedSetting[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CreationTime <datetime[]> (Required: false)
- LocalAddress <string[]> (Required: false)
- LocalPort <uint16[]> (Required: false)
- OffloadState <OffloadState[]> (Required: false)
- OwningProcess <uint32[]> (Required: false)
- RemoteAddress <string[]> (Required: false)
- RemotePort <uint16[]> (Required: false)
- State <State[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetTCPSetting

```powershell
Get-NetTCPSetting [[-SettingName] <string[]>] [-MinRtoMs <uint32[]>] [-InitialCongestionWindowMss <uint32[]>] [-CongestionProvider <CongestionProvider[]>] [-CwndRestart <CwndRestart[]>] [-DelayedAckTimeoutMs <uint32[]>] [-DelayedAckFrequency <byte[]>] [-MemoryPressureProtection <MemoryPressureProtection[]>] [-AutoTuningLevelLocal <AutoTuningLevelLocal[]>] [-AutoTuningLevelGroupPolicy <AutoTuningLevelGroupPolicy[]>] [-AutoTuningLevelEffective <AutoTuningLevelEffective[]>] [-EcnCapability <EcnCapability[]>] [-Timestamps <Timestamps[]>] [-InitialRtoMs <uint32[]>] [-ScalingHeuristics <ScalingHeuristics[]>] [-DynamicPortRangeStartPort <uint16[]>] [-DynamicPortRangeNumberOfPorts <uint16[]>] [-AutomaticUseCustom <AutomaticUseCustom[]>] [-NonSackRttResiliency <NonSackRttResiliency[]>] [-ForceWS <ForceWS[]>] [-MaxSynRetransmissions <byte[]>] [-AutoReusePortRangeStartPort <uint16[]>] [-AutoReusePortRangeNumberOfPorts <uint16[]>] [-AssociatedTransportFilter <CimInstance#MSFT_NetTransportFilter>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedTransportFilter <CimInstance#MSFT_NetTransportFilter> (Required: false)
- AutoReusePortRangeNumberOfPorts <uint16[]> (Required: false)
- AutoReusePortRangeStartPort <uint16[]> (Required: false)
- AutoTuningLevelEffective <AutoTuningLevelEffective[]> (Required: false)
- AutoTuningLevelGroupPolicy <AutoTuningLevelGroupPolicy[]> (Required: false)
- AutoTuningLevelLocal <AutoTuningLevelLocal[]> (Required: false)
- AutomaticUseCustom <AutomaticUseCustom[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CongestionProvider <CongestionProvider[]> (Required: false)
- CwndRestart <CwndRestart[]> (Required: false)
- DelayedAckFrequency <byte[]> (Required: false)
- DelayedAckTimeoutMs <uint32[]> (Required: false)
- DynamicPortRangeNumberOfPorts <uint16[]> (Required: false)
- DynamicPortRangeStartPort <uint16[]> (Required: false)
- EcnCapability <EcnCapability[]> (Required: false)
- ForceWS <ForceWS[]> (Required: false)
- InitialCongestionWindowMss <uint32[]> (Required: false)
- InitialRtoMs <uint32[]> (Required: false)
- MaxSynRetransmissions <byte[]> (Required: false)
- MemoryPressureProtection <MemoryPressureProtection[]> (Required: false)
- MinRtoMs <uint32[]> (Required: false)
- NonSackRttResiliency <NonSackRttResiliency[]> (Required: false)
- ScalingHeuristics <ScalingHeuristics[]> (Required: false)
- SettingName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- Timestamps <Timestamps[]> (Required: false)
```

### Get-NetTeredoConfiguration

```powershell
Get-NetTeredoConfiguration [-IPInterface <CimInstance#MSFT_NetIPInterface>] [-PolicyStore <string>] [-GPOSession <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GPOSession <string> (Required: false)
- IPInterface <CimInstance#MSFT_NetIPInterface> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetTeredoState

```powershell
Get-NetTeredoState [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetTransportFilter

```powershell
Get-NetTransportFilter [-SettingName <string[]>] [-Protocol <Protocol[]>] [-LocalPortStart <uint16[]>] [-LocalPortEnd <uint16[]>] [-RemotePortStart <uint16[]>] [-RemotePortEnd <uint16[]>] [-DestinationPrefix <string[]>] [-AssociatedTCPSetting <CimInstance#MSFT_NetTCPSetting>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedTCPSetting <CimInstance#MSFT_NetTCPSetting> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DestinationPrefix <string[]> (Required: false)
- LocalPortEnd <uint16[]> (Required: false)
- LocalPortStart <uint16[]> (Required: false)
- Protocol <Protocol[]> (Required: false)
- RemotePortEnd <uint16[]> (Required: false)
- RemotePortStart <uint16[]> (Required: false)
- SettingName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetUDPEndpoint

```powershell
Get-NetUDPEndpoint [[-LocalAddress] <string[]>] [[-LocalPort] <uint16[]>] [-OwningProcess <uint32[]>] [-CreationTime <datetime[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CreationTime <datetime[]> (Required: false)
- LocalAddress <string[]> (Required: false)
- LocalPort <uint16[]> (Required: false)
- OwningProcess <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetUDPSetting

```powershell
Get-NetUDPSetting [[-DynamicPortRangeStartPort] <uint16[]>] [[-DynamicPortRangeNumberOfPorts] <uint16[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DynamicPortRangeNumberOfPorts <uint16[]> (Required: false)
- DynamicPortRangeStartPort <uint16[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-NetView

```powershell
SYNOPSIS:
Collects data on system and network configuration for diagnosing Microsoft Networking.

DESCRIPTION:
Collects comprehensive configuration data to aid in troubleshooting Microsoft Network issues.
Data is collected from the following sources:
    - Get-NetView metadata (path, args, etc.)
    - Environment (OS, hardware, domain, hostname, etc.)
    - Physical, virtual, Container, NICs
    - Network Configuration, IP Addresses, MAC Addresses, Neighbors, Routes
    - Physical Switch configuration, QOS polices
    - Virtual Machine configuration
    - Virtual Switches, Bridges, NATs
    - Device Drivers
    - Performance Counters
    - Logs, Traces, etc.
    - System and Application Events

The data is collected in a folder on the Desktop (by default), which is zipped on completion.
Use Feedback hub to submit a new feedback.  Select one of these Categories:
    Network and Internet -> Virtual Networking
    Network and Internet -> Connecting to an Ethernet Network.
Attach the Zip file to the feedback and submit.

Do not share the zip file over email or other file sharing tools.  Only submit the file through the feedback hub.

The output is most easily viewed with Visual Studio Code or similar editor with a navigation panel.

PARAMETERS:

- OutputDirectory <String> (Required: false)
- ExtraCommands <ScriptBlock[]> (Required: false)
- BackgroundThreads <Int32> (Required: false)
- Timeout <Int32> (Required: false)
- ExecutionRate <Double> (Required: false)
- SkipAdminCheck <SwitchParameter> (Required: false)
- SkipLogs <SwitchParameter> (Required: false)
- SkipNetsh <SwitchParameter> (Required: false)
- SkipNetshTrace <SwitchParameter> (Required: false)
- SkipCounters <SwitchParameter> (Required: false)
- SkipWindowsRegistry <SwitchParameter> (Required: false)
- SkipVm <SwitchParameter> (Required: false)

```

### Get-NetworkSwitchEthernetPort

```powershell
Get-NetworkSwitchEthernetPort -CimSession <CimSession> [-DeviceId <string>] [<CommonParameters>]

Get-NetworkSwitchEthernetPort -CimSession <CimSession> -FullDuplexEnabled [<CommonParameters>]

Get-NetworkSwitchEthernetPort -CimSession <CimSession> -FullDuplexDisabled [<CommonParameters>]

Get-NetworkSwitchEthernetPort -CimSession <CimSession> -PortNumber <int> [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- DeviceId <string> (Required: false)
- FullDuplexDisabled <switch> (Required: true)
- FullDuplexEnabled <switch> (Required: true)
- PortNumber <int> (Required: true)
```

### Get-NetworkSwitchFeature

```powershell
Get-NetworkSwitchFeature -CimSession <CimSession> [-Name <string>] [<CommonParameters>]

Get-NetworkSwitchFeature -CimSession <CimSession> -Enabled [<CommonParameters>]

Get-NetworkSwitchFeature -CimSession <CimSession> -Disabled [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Disabled <switch> (Required: true)
- Enabled <switch> (Required: true)
- Name <string> (Required: false)
```

### Get-NetworkSwitchGlobalData

```powershell
Get-NetworkSwitchGlobalData [-CimSession] <CimSession> [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
```

### Get-NetworkSwitchVlan

```powershell
Get-NetworkSwitchVlan -CimSession <CimSession> [-Name <string>] [<CommonParameters>]

Get-NetworkSwitchVlan -CimSession <CimSession> -VlanId <int> [<CommonParameters>]

Get-NetworkSwitchVlan -CimSession <CimSession> -InstanceId <string> [<CommonParameters>]

Get-NetworkSwitchVlan -CimSession <CimSession> -Caption <string> [<CommonParameters>]

Get-NetworkSwitchVlan -CimSession <CimSession> -Description <string> [<CommonParameters>]

PARAMETERS:
- Caption <string> (Required: true)
- CimSession <CimSession> (Required: true)
- Description <string> (Required: true)
- InstanceId <string> (Required: true)
- Name <string> (Required: false)
- VlanId <int> (Required: true)
```

### Get-NinjaTag

```powershell
Get-NinjaTag

```

### Get-NonRemovableAppsPolicy

```powershell
Get-NonRemovableAppsPolicy -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-NonRemovableAppsPolicy -Online [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Get-OdbcDriver

```powershell
Get-OdbcDriver [[-Name] <string>] [-Platform <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string> (Required: false)
- Platform <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-OdbcDsn

```powershell
Get-OdbcDsn [[-Name] <string>] [-DriverName <string>] [-Platform <string>] [-DsnType <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DriverName <string> (Required: false)
- DsnType <string> (Required: false)
- Name <string> (Required: false)
- Platform <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-OdbcPerfCounter

```powershell
Get-OdbcPerfCounter [[-Platform] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Platform <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-OffloadDataTransferSetting

```powershell
Get-OffloadDataTransferSetting [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-OperationValidation

```powershell
Get-OperationValidation [[-ModuleName] <string[]>] [-TestType <string[]>] [<CommonParameters>]

PARAMETERS:
- ModuleName <string[]> (Required: false)
- TestType <string[]> (Required: false)
```

### Get-OSConfiguration

```powershell
Get-OSConfiguration [[-SourceId] <string>] [[-FriendlyName] <string>] [<CommonParameters>]

PARAMETERS:
- FriendlyName <string> (Required: false)
- SourceId <string> (Required: false)
```

### Get-OsConfigurationDocument

```powershell
Get-OsConfigurationDocument [[-SourceId] <string>] [[-FriendlyName] <string>] [<CommonParameters>]

Get-OsConfigurationDocument [[-Id] <string>] [[-SourceId] <string>] [[-FriendlyName] <string>] [<CommonParameters>]

PARAMETERS:
- FriendlyName <string> (Required: false)
- Id <string> (Required: false)
- SourceId <string> (Required: false)
```

### Get-OsConfigurationDocumentContent

```powershell
Get-OsConfigurationDocumentContent [-Id] <string> [[-SourceId] <string>] [[-FriendlyName] <string>] [<CommonParameters>]

PARAMETERS:
- FriendlyName <string> (Required: false)
- Id <string> (Required: true)
- SourceId <string> (Required: false)
```

### Get-OsConfigurationDocumentResult

```powershell
Get-OsConfigurationDocumentResult [-Id] <string> [[-SourceId] <string>] [[-FriendlyName] <string>] [[-VerboseOption] <string>] [<CommonParameters>]

PARAMETERS:
- FriendlyName <string> (Required: false)
- Id <string> (Required: true)
- SourceId <string> (Required: false)
- VerboseOption <string> (Required: false)
```

### Get-OsConfigurationProperty

```powershell
Get-OsConfigurationProperty [-Name] <string> [[-SourceId] <string>] [[-FriendlyName] <string>] [[-Id] <string>] [<CommonParameters>]

PARAMETERS:
- FriendlyName <string> (Required: false)
- Id <string> (Required: false)
- Name <string> (Required: true)
- SourceId <string> (Required: false)
```

### Get-Package

```powershell
Get-Package [[-Name] <string[]>] [-RequiredVersion <string>] [-MinimumVersion <string>] [-MaximumVersion <string>] [-AllVersions] [-Force] [-ForceBootstrap] [-ProviderName <string[]>] [-IncludeWindowsInstaller] [-IncludeSystemComponent] [<CommonParameters>]

Get-Package [[-Name] <string[]>] [-RequiredVersion <string>] [-MinimumVersion <string>] [-MaximumVersion <string>] [-AllVersions] [-Force] [-ForceBootstrap] [-ProviderName <string[]>] [-AdditionalArguments <string[]>] [<CommonParameters>]

Get-Package [[-Name] <string[]>] [-RequiredVersion <string>] [-MinimumVersion <string>] [-MaximumVersion <string>] [-AllVersions] [-Force] [-ForceBootstrap] [-ProviderName <string[]>] [-PackageManagementProvider <string>] [-Type <string>] [-Scope <string>] [-AllowClobber] [-SkipPublisherCheck] [-InstallUpdate] [-NoPathUpdate] [<CommonParameters>]

PARAMETERS:
- AdditionalArguments <string[]> (Required: false)
- AllVersions <switch> (Required: false)
- AllowClobber <switch> (Required: false)
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- IncludeSystemComponent <switch> (Required: false)
- IncludeWindowsInstaller <switch> (Required: false)
- InstallUpdate <switch> (Required: false)
- MaximumVersion <string> (Required: false)
- MinimumVersion <string> (Required: false)
- Name <string[]> (Required: false)
- NoPathUpdate <switch> (Required: false)
- PackageManagementProvider <string> (Required: false)
- ProviderName <string[]> (Required: false)
- RequiredVersion <string> (Required: false)
- Scope <string> (Required: false)
- SkipPublisherCheck <switch> (Required: false)
- Type <string> (Required: false)
```

### Get-PackageProvider

```powershell
Get-PackageProvider [[-Name] <string[]>] [-ListAvailable] [-Force] [-ForceBootstrap] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- ListAvailable <switch> (Required: false)
- Name <string[]> (Required: false)
```

### Get-PackageSource

```powershell
Get-PackageSource [[-Name] <string>] [-Location <string>] [-Force] [-ForceBootstrap] [-ProviderName <string[]>] [-PackageManagementProvider <string>] [-PublishLocation <string>] [-ScriptSourceLocation <string>] [-ScriptPublishLocation <string>] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- Location <string> (Required: false)
- Name <string> (Required: false)
- PackageManagementProvider <string> (Required: false)
- ProviderName <string[]> (Required: false)
- PublishLocation <string> (Required: false)
- ScriptPublishLocation <string> (Required: false)
- ScriptSourceLocation <string> (Required: false)
```

### Get-Partition

```powershell
Get-Partition [-UniqueId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Partition -DiskId <string[]> [-Offset <uint64[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Partition [[-DiskNumber] <uint32[]>] [[-PartitionNumber] <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Partition [-DriveLetter <char[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Partition [-Disk <CimInstance#MSFT_Disk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Partition [-Volume <CimInstance#MSFT_Volume>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Partition [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Disk <CimInstance#MSFT_Disk> (Required: false)
- DiskId <string[]> (Required: true)
- DiskNumber <uint32[]> (Required: false)
- DriveLetter <char[]> (Required: false)
- Offset <uint64[]> (Required: false)
- PartitionNumber <uint32[]> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
- Volume <CimInstance#MSFT_Volume> (Required: false)
```

### Get-PartitionSupportedSize

```powershell
Get-PartitionSupportedSize [<CommonParameters>]

Get-PartitionSupportedSize -DiskId <string[]> [-Offset <uint64[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-PartitionSupportedSize [-DiskNumber] <uint32[]> [[-PartitionNumber] <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-PartitionSupportedSize -DriveLetter <char[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-PartitionSupportedSize -InputObject <CimInstance#MSFT_Partition[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DiskId <string[]> (Required: true)
- DiskNumber <uint32[]> (Required: true)
- DriveLetter <char[]> (Required: true)
- InputObject <CimInstance#MSFT_Partition[]> (Required: true)
- Offset <uint64[]> (Required: false)
- PartitionNumber <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-PcsvDevice

```powershell
Get-PcsvDevice [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-PcsvDevice [-TargetAddress] <string> [-Credential] <pscredential> [-ManagementProtocol] <ManagementProtocol> [[-Port] <uint16>] [-Authentication <Authentication>] [-UseSSL] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Authentication <Authentication> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Credential <pscredential> (Required: true)
- ManagementProtocol <ManagementProtocol> (Required: true)
- Port <uint16> (Required: false)
- SkipCACheck <switch> (Required: false)
- SkipCNCheck <switch> (Required: false)
- SkipRevocationCheck <switch> (Required: false)
- TargetAddress <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- TimeoutSec <uint32> (Required: false)
- UseSSL <switch> (Required: false)
```

### Get-PcsvDeviceLog

```powershell
Get-PcsvDeviceLog [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-PcsvDeviceLog [-TargetAddress] <string> [-Credential] <pscredential> [-ManagementProtocol] <ManagementProtocol> [[-Port] <uint16>] [-Authentication <Authentication>] [-UseSSL] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-PcsvDeviceLog -InputObject <CimInstance#MSFT_PCSVDevice[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Authentication <Authentication> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Credential <pscredential> (Required: true)
- InputObject <CimInstance#MSFT_PCSVDevice[]> (Required: true)
- ManagementProtocol <ManagementProtocol> (Required: true)
- Port <uint16> (Required: false)
- SkipCACheck <switch> (Required: false)
- SkipCNCheck <switch> (Required: false)
- SkipRevocationCheck <switch> (Required: false)
- TargetAddress <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- TimeoutSec <uint32> (Required: false)
- UseSSL <switch> (Required: false)
```

### Get-PfxCertificate

```powershell
Get-PfxCertificate [-FilePath] <string[]> [<CommonParameters>]

Get-PfxCertificate -LiteralPath <string[]> [<CommonParameters>]

PARAMETERS:
- FilePath <string[]> (Required: true)
- LiteralPath <string[]> (Required: true)
```

### Get-PfxData

```powershell
Get-PfxData [-FilePath] <string> [-Password <securestring>] [<CommonParameters>]

PARAMETERS:
- FilePath <string> (Required: true)
- Password <securestring> (Required: false)
```

### Get-PhysicalDisk

```powershell
Get-PhysicalDisk [-UniqueId <string>] [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk [-ObjectId <string>] [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk [-DeviceNumber <string>] [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk [[-FriendlyName] <string>] [[-SerialNumber] <string>] [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk -InputObject <CimInstance#MSFT_PhysicalDisk> [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk -StorageSubsystem <CimInstance#MSFT_StorageSubsystem> [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk -StorageEnclosure <CimInstance#MSFT_StorageEnclosure> [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk -StorageScaleUnit <CimInstance#MSFT_StorageScaleUnit> [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk -StorageChassis <CimInstance#MSFT_StorageChassis> [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk -StorageRack <CimInstance#MSFT_StorageRack> [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk -StorageSite <CimInstance#MSFT_StorageSite> [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk -StorageNode <CimInstance#MSFT_StorageNode> [-PhysicallyConnected] [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk -StoragePool <CimInstance#MSFT_StoragePool> [-HasMetadata] [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalDisk -VirtualDisk <CimInstance#MSFT_VirtualDisk> [-VirtualRangeMin <uint64>] [-VirtualRangeMax <uint64>] [-HasAllocations <bool>] [-SelectedForUse <bool>] [-NoRedundancy] [-HasMetadata] [-Usage <PhysicalDiskUsage>] [-Description <string>] [-Manufacturer <string>] [-Model <string>] [-CanPool <bool>] [-HealthStatus <PhysicalDiskHealthStatus>] [-CimSession <CimSession>] [<CommonParameters>]

PARAMETERS:
- CanPool <bool> (Required: false)
- CimSession <CimSession> (Required: false)
- Description <string> (Required: false)
- DeviceNumber <string> (Required: false)
- FriendlyName <string> (Required: false)
- HasAllocations <bool> (Required: false)
- HasMetadata <switch> (Required: false)
- HealthStatus <PhysicalDiskHealthStatus> (Required: false)
- InputObject <CimInstance#MSFT_PhysicalDisk> (Required: true)
- Manufacturer <string> (Required: false)
- Model <string> (Required: false)
- NoRedundancy <switch> (Required: false)
- ObjectId <string> (Required: false)
- PhysicallyConnected <switch> (Required: false)
- SelectedForUse <bool> (Required: false)
- SerialNumber <string> (Required: false)
- StorageChassis <CimInstance#MSFT_StorageChassis> (Required: true)
- StorageEnclosure <CimInstance#MSFT_StorageEnclosure> (Required: true)
- StorageNode <CimInstance#MSFT_StorageNode> (Required: true)
- StoragePool <CimInstance#MSFT_StoragePool> (Required: true)
- StorageRack <CimInstance#MSFT_StorageRack> (Required: true)
- StorageScaleUnit <CimInstance#MSFT_StorageScaleUnit> (Required: true)
- StorageSite <CimInstance#MSFT_StorageSite> (Required: true)
- StorageSubsystem <CimInstance#MSFT_StorageSubsystem> (Required: true)
- UniqueId <string> (Required: false)
- Usage <PhysicalDiskUsage> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: true)
- VirtualRangeMax <uint64> (Required: false)
- VirtualRangeMin <uint64> (Required: false)
```

### Get-PhysicalDiskStorageNodeView

```powershell
Get-PhysicalDiskStorageNodeView [[-StorageNode] <CimInstance#MSFT_StorageNode>] [[-PhysicalDisk] <CimInstance#MSFT_PhysicalDisk>] [[-CimSession] <CimSession>] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: false)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: false)
- StorageNode <CimInstance#MSFT_StorageNode> (Required: false)
```

### Get-PhysicalExtent

```powershell
Get-PhysicalExtent -VirtualDisk <CimInstance#MSFT_VirtualDisk> [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalExtent -StorageTier <CimInstance#MSFT_StorageTier> [-CimSession <CimSession>] [<CommonParameters>]

Get-PhysicalExtent -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> [-CimSession <CimSession>] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: false)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
- StorageTier <CimInstance#MSFT_StorageTier> (Required: true)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: true)
```

### Get-PhysicalExtentAssociation

```powershell
Get-PhysicalExtentAssociation -InputObject <CimInstance#MSFT_PhysicalExtent> [-CimSession <CimSession>] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: false)
- InputObject <CimInstance#MSFT_PhysicalExtent> (Required: true)
```

### Get-PmemDedicatedMemory

```powershell
Get-PmemDedicatedMemory [<CommonParameters>]

Get-PmemDedicatedMemory [[-DeviceNumber] <uint32[]>] [<CommonParameters>]

PARAMETERS:
- DeviceNumber <uint32[]> (Required: false)
```

### Get-PmemDisk

```powershell
Get-PmemDisk [<CommonParameters>]

Get-PmemDisk [[-DiskNumber] <uint32[]>] [<CommonParameters>]

Get-PmemDisk [-PhysicalDevice <PmemPhysicalDevice>] [<CommonParameters>]

Get-PmemDisk [-PhysicalDeviceId <string[]>] [<CommonParameters>]

Get-PmemDisk [-InputObject <ciminstance>] [<CommonParameters>]

PARAMETERS:
- DiskNumber <uint32[]> (Required: false)
- InputObject <ciminstance> (Required: false)
- PhysicalDevice <PmemPhysicalDevice> (Required: false)
- PhysicalDeviceId <string[]> (Required: false)
```

### Get-PmemPhysicalDevice

```powershell
Get-PmemPhysicalDevice [<CommonParameters>]

Get-PmemPhysicalDevice [[-DeviceId] <string[]>] [<CommonParameters>]

Get-PmemPhysicalDevice [-LogicalDisk <PmemDisk>] [<CommonParameters>]

Get-PmemPhysicalDevice [-DiskNumber <uint32>] [<CommonParameters>]

Get-PmemPhysicalDevice [-InputObject <ciminstance>] [<CommonParameters>]

PARAMETERS:
- DeviceId <string[]> (Required: false)
- DiskNumber <uint32> (Required: false)
- InputObject <ciminstance> (Required: false)
- LogicalDisk <PmemDisk> (Required: false)
```

### Get-PmemUnusedRegion

```powershell
Get-PmemUnusedRegion [[-RegionId] <uint32[]>] [<CommonParameters>]

PARAMETERS:
- RegionId <uint32[]> (Required: false)
```

### Get-PnpDevice

```powershell
Get-PnpDevice [[-InstanceId] <string[]>] [-Class <string[]>] [-PresentOnly] [-Status <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-PnpDevice [-FriendlyName <string[]>] [-Class <string[]>] [-PresentOnly] [-Status <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-PnpDevice [-Class <string[]>] [-PresentOnly] [-Status <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-PnpDevice [-Class <string[]>] [-PresentOnly] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-PnpDevice [-Status <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Class <string[]> (Required: false)
- FriendlyName <string[]> (Required: false)
- InstanceId <string[]> (Required: false)
- PresentOnly <switch> (Required: false)
- Status <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-PnpDeviceProperty

```powershell
Get-PnpDeviceProperty [[-KeyName] <string[]>] -InstanceId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Get-PnpDeviceProperty [[-KeyName] <string[]>] -InputObject <CimInstance#Win32_PnPEntity[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#Win32_PnPEntity[]> (Required: true)
- InstanceId <string[]> (Required: true)
- KeyName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Get-PrintConfiguration

```powershell
Get-PrintConfiguration [-PrinterName] <string> [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-PrintConfiguration [-PrinterObject] <CimInstance#MSFT_Printer> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- PrinterName <string> (Required: true)
- PrinterObject <CimInstance#MSFT_Printer> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-Printer

```powershell
Get-Printer [[-Name] <string[]>] [-ComputerName <string>] [-Full] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- Full <switch> (Required: false)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-PrinterDriver

```powershell
Get-PrinterDriver [[-Name] <string[]>] [-PrinterEnvironment <string[]>] [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- Name <string[]> (Required: false)
- PrinterEnvironment <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-PrinterPort

```powershell
Get-PrinterPort [[-Name] <string[]>] [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-PrinterProperty

```powershell
Get-PrinterProperty [-PrinterName] <string> [[-PropertyName] <string[]>] [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- PrinterName <string> (Required: true)
- PropertyName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-PrintJob

```powershell
Get-PrintJob [-PrinterName] <string> [-ComputerName <string>] [-ID <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-PrintJob [-PrinterObject] <CimInstance#MSFT_Printer> [-ID <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- ID <uint32> (Required: false)
- PrinterName <string> (Required: true)
- PrinterObject <CimInstance#MSFT_Printer> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-Process

```powershell
Get-Process [[-Name] <string[]>] [-ComputerName <string[]>] [-Module] [-FileVersionInfo] [<CommonParameters>]

Get-Process [[-Name] <string[]>] -IncludeUserName [<CommonParameters>]

Get-Process -Id <int[]> -IncludeUserName [<CommonParameters>]

Get-Process -Id <int[]> [-ComputerName <string[]>] [-Module] [-FileVersionInfo] [<CommonParameters>]

Get-Process -InputObject <Process[]> -IncludeUserName [<CommonParameters>]

Get-Process -InputObject <Process[]> [-ComputerName <string[]>] [-Module] [-FileVersionInfo] [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: false)
- FileVersionInfo <switch> (Required: false)
- Id <int[]> (Required: true)
- IncludeUserName <switch> (Required: true)
- InputObject <Process[]> (Required: true)
- Module <switch> (Required: false)
- Name <string[]> (Required: false)
```

### Get-ProcessMitigation

```powershell
SYNOPSIS:
Gets the current process mitigation settings, either from the registry, from a running process, or saves all to a XML.

DESCRIPTION:
Gets all process mitigation settings either by process name (either running or from -Registry), or by process ID. Can also save all settings to an XML file.

PARAMETERS:

- FullPolicy <SwitchParameter> (Required: false)
- Id <Int32[]> (Required: true)
- Name <String> (Required: true)
- RegistryConfigFilePath <String> (Required: false)
- RunningProcesses <SwitchParameter> (Required: false)
- System <SwitchParameter> (Required: false)

```

### Get-ProvisioningPackage

```powershell
Get-ProvisioningPackage [-PackageId] <string> [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

Get-ProvisioningPackage [-PackagePath] <string> [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

Get-ProvisioningPackage [-AllInstalledPackages] [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

PARAMETERS:
- AllInstalledPackages <switch> (Required: false)
- ConnectedDevice <switch> (Required: false)
- LogsDirectoryPath <string> (Required: false)
- PackageId <string> (Required: true)
- PackagePath <string> (Required: true)
- WprpFile <string> (Required: false)
```

### Get-PSBreakpoint

```powershell
Get-PSBreakpoint [[-Script] <string[]>] [<CommonParameters>]

Get-PSBreakpoint -Variable <string[]> [-Script <string[]>] [<CommonParameters>]

Get-PSBreakpoint -Command <string[]> [-Script <string[]>] [<CommonParameters>]

Get-PSBreakpoint [-Type] <BreakpointType[]> [-Script <string[]>] [<CommonParameters>]

Get-PSBreakpoint [-Id] <int[]> [<CommonParameters>]

PARAMETERS:
- Command <string[]> (Required: true)
- Id <int[]> (Required: true)
- Script <string[]> (Required: false)
- Type <BreakpointType[]> (Required: true)
- Variable <string[]> (Required: true)
```

### Get-PSCallStack

```powershell
Get-PSCallStack [<CommonParameters>]

```

### Get-PSDrive

```powershell
Get-PSDrive [[-Name] <string[]>] [-Scope <string>] [-PSProvider <string[]>] [-UseTransaction] [<CommonParameters>]

Get-PSDrive [-LiteralName] <string[]> [-Scope <string>] [-PSProvider <string[]>] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- LiteralName <string[]> (Required: true)
- Name <string[]> (Required: false)
- PSProvider <string[]> (Required: false)
- Scope <string> (Required: false)
- UseTransaction <switch> (Required: false)
```

### Get-PSHostProcessInfo

```powershell
Get-PSHostProcessInfo [[-Name] <string[]>] [<CommonParameters>]

Get-PSHostProcessInfo [-Process] <Process[]> [<CommonParameters>]

Get-PSHostProcessInfo [-Id] <int[]> [<CommonParameters>]

PARAMETERS:
- Id <int[]> (Required: true)
- Name <string[]> (Required: false)
- Process <Process[]> (Required: true)
```

### Get-PSProvider

```powershell
Get-PSProvider [[-PSProvider] <string[]>] [<CommonParameters>]

PARAMETERS:
- PSProvider <string[]> (Required: false)
```

### Get-PSReadLineKeyHandler

```powershell
Get-PSReadLineKeyHandler [-Bound] [-Unbound] [<CommonParameters>]

PARAMETERS:
- Bound <switch> (Required: false)
- Unbound <switch> (Required: false)
```

### Get-PSReadLineOption

```powershell
Get-PSReadLineOption [<CommonParameters>]

```

### Get-PSRepository

```powershell
Get-PSRepository [[-Name] <string[]>] [<CommonParameters>]

PARAMETERS:
- Name <string[]> (Required: false)
```

### Get-PSSession

```powershell
Get-PSSession [-Name <string[]>] [<CommonParameters>]

Get-PSSession [-ComputerName] <string[]> -InstanceId <guid[]> [-ApplicationName <string>] [-ConfigurationName <string>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-Port <int>] [-UseSSL] [-ThrottleLimit <int>] [-State <SessionFilterState>] [-SessionOption <PSSessionOption>] [<CommonParameters>]

Get-PSSession [-ComputerName] <string[]> [-ApplicationName <string>] [-ConfigurationName <string>] [-Name <string[]>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-Port <int>] [-UseSSL] [-ThrottleLimit <int>] [-State <SessionFilterState>] [-SessionOption <PSSessionOption>] [<CommonParameters>]

Get-PSSession [-ConnectionUri] <uri[]> [-ConfigurationName <string>] [-AllowRedirection] [-Name <string[]>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-ThrottleLimit <int>] [-State <SessionFilterState>] [-SessionOption <PSSessionOption>] [<CommonParameters>]

Get-PSSession [-ConnectionUri] <uri[]> -InstanceId <guid[]> [-ConfigurationName <string>] [-AllowRedirection] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-ThrottleLimit <int>] [-State <SessionFilterState>] [-SessionOption <PSSessionOption>] [<CommonParameters>]

Get-PSSession -ContainerId <string[]> [-ConfigurationName <string>] [-Name <string[]>] [-State <SessionFilterState>] [<CommonParameters>]

Get-PSSession -InstanceId <guid[]> -ContainerId <string[]> [-ConfigurationName <string>] [-State <SessionFilterState>] [<CommonParameters>]

Get-PSSession -VMId <guid[]> [-ConfigurationName <string>] [-Name <string[]>] [-State <SessionFilterState>] [<CommonParameters>]

Get-PSSession -InstanceId <guid[]> -VMId <guid[]> [-ConfigurationName <string>] [-State <SessionFilterState>] [<CommonParameters>]

Get-PSSession -VMName <string[]> [-ConfigurationName <string>] [-Name <string[]>] [-State <SessionFilterState>] [<CommonParameters>]

Get-PSSession -InstanceId <guid[]> -VMName <string[]> [-ConfigurationName <string>] [-State <SessionFilterState>] [<CommonParameters>]

Get-PSSession [-InstanceId <guid[]>] [<CommonParameters>]

Get-PSSession [-Id] <int[]> [<CommonParameters>]

PARAMETERS:
- AllowRedirection <switch> (Required: false)
- ApplicationName <string> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string[]> (Required: true)
- ConfigurationName <string> (Required: false)
- ConnectionUri <uri[]> (Required: true)
- ContainerId <string[]> (Required: true)
- Credential <pscredential> (Required: false)
- Id <int[]> (Required: true)
- InstanceId <guid[]> (Required: false)
- Name <string[]> (Required: false)
- Port <int> (Required: false)
- SessionOption <PSSessionOption> (Required: false)
- State <SessionFilterState> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseSSL <switch> (Required: false)
- VMId <guid[]> (Required: true)
- VMName <string[]> (Required: true)
```

### Get-PSSessionCapability

```powershell
Get-PSSessionCapability [-ConfigurationName] <string> [-Username] <string> [-Full] [<CommonParameters>]

PARAMETERS:
- ConfigurationName <string> (Required: true)
- Full <switch> (Required: false)
- Username <string> (Required: true)
```

### Get-PSSessionConfiguration

```powershell
Get-PSSessionConfiguration [[-Name] <string[]>] [-Force] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- Name <string[]> (Required: false)
```

### Get-PSSnapin

```powershell
Get-PSSnapin [[-Name] <string[]>] [-Registered] [<CommonParameters>]

PARAMETERS:
- Name <string[]> (Required: false)
- Registered <switch> (Required: false)
```

### Get-Random

```powershell
Get-Random [[-Maximum] <Object>] [-SetSeed <int>] [-Minimum <Object>] [<CommonParameters>]

Get-Random [-InputObject] <Object[]> [-SetSeed <int>] [-Count <int>] [<CommonParameters>]

PARAMETERS:
- Count <int> (Required: false)
- InputObject <Object[]> (Required: true)
- Maximum <Object> (Required: false)
- Minimum <Object> (Required: false)
- SetSeed <int> (Required: false)
```

### Get-ReFSDedupSchedule

```powershell
Get-ReFSDedupSchedule [-Volume] <string> [<CommonParameters>]

PARAMETERS:
- Volume <string> (Required: true)
```

### Get-ReFSDedupScrubSchedule

```powershell
Get-ReFSDedupScrubSchedule [-Volume] <string> [<CommonParameters>]

PARAMETERS:
- Volume <string> (Required: true)
```

### Get-ReFSDedupStatus

```powershell
Get-ReFSDedupStatus [-Volume] <string> [<CommonParameters>]

PARAMETERS:
- Volume <string> (Required: true)
```

### Get-ResiliencySetting

```powershell
Get-ResiliencySetting [-Name <string[]>] [-StoragePool <CimInstance#MSFT_StoragePool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-ResiliencySetting [-UniqueId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- StoragePool <CimInstance#MSFT_StoragePool> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
```

### Get-Runspace

```powershell
Get-Runspace [[-Name] <string[]>] [<CommonParameters>]

Get-Runspace [-Id] <int[]> [<CommonParameters>]

Get-Runspace [-InstanceId] <guid[]> [<CommonParameters>]

PARAMETERS:
- Id <int[]> (Required: true)
- InstanceId <guid[]> (Required: true)
- Name <string[]> (Required: false)
```

### Get-RunspaceDebug

```powershell
Get-RunspaceDebug [[-RunspaceName] <string[]>] [<CommonParameters>]

Get-RunspaceDebug [-Runspace] <runspace[]> [<CommonParameters>]

Get-RunspaceDebug [-RunspaceId] <int[]> [<CommonParameters>]

Get-RunspaceDebug [-RunspaceInstanceId] <guid[]> [<CommonParameters>]

Get-RunspaceDebug [[-ProcessName] <string>] [[-AppDomainName] <string[]>] [<CommonParameters>]

PARAMETERS:
- AppDomainName <string[]> (Required: false)
- ProcessName <string> (Required: false)
- Runspace <runspace[]> (Required: true)
- RunspaceId <int[]> (Required: true)
- RunspaceInstanceId <guid[]> (Required: true)
- RunspaceName <string[]> (Required: false)
```

### Get-ScheduledJob

```powershell
Get-ScheduledJob [[-Id] <int[]>] [<CommonParameters>]

Get-ScheduledJob [-Name] <string[]> [<CommonParameters>]

PARAMETERS:
- Id <int[]> (Required: false)
- Name <string[]> (Required: true)
```

### Get-ScheduledJobOption

```powershell
Get-ScheduledJobOption [-InputObject] <ScheduledJobDefinition> [<CommonParameters>]

Get-ScheduledJobOption [-Id] <int> [<CommonParameters>]

Get-ScheduledJobOption [-Name] <string> [<CommonParameters>]

PARAMETERS:
- Id <int> (Required: true)
- InputObject <ScheduledJobDefinition> (Required: true)
- Name <string> (Required: true)
```

### Get-ScheduledTask

```powershell
Get-ScheduledTask [[-TaskName] <string[]>] [[-TaskPath] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- TaskName <string[]> (Required: false)
- TaskPath <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-ScheduledTaskInfo

```powershell
Get-ScheduledTaskInfo [-TaskName] <string> [[-TaskPath] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-ScheduledTaskInfo [-InputObject] <CimInstance#MSFT_ScheduledTask> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_ScheduledTask> (Required: true)
- TaskName <string> (Required: true)
- TaskPath <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-SecureBootPolicy

```powershell
Get-SecureBootPolicy [<CommonParameters>]

```

### Get-SecureBootUEFI

```powershell
Get-SecureBootUEFI [-Name] <string> [-OutputFilePath <string>] [<CommonParameters>]

PARAMETERS:
- Name <string> (Required: true)
- OutputFilePath <string> (Required: false)
```

### Get-Service

```powershell
Get-Service [[-Name] <string[]>] [-ComputerName <string[]>] [-DependentServices] [-RequiredServices] [-Include <string[]>] [-Exclude <string[]>] [<CommonParameters>]

Get-Service -DisplayName <string[]> [-ComputerName <string[]>] [-DependentServices] [-RequiredServices] [-Include <string[]>] [-Exclude <string[]>] [<CommonParameters>]

Get-Service [-ComputerName <string[]>] [-DependentServices] [-RequiredServices] [-Include <string[]>] [-Exclude <string[]>] [-InputObject <ServiceController[]>] [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: false)
- DependentServices <switch> (Required: false)
- DisplayName <string[]> (Required: true)
- Exclude <string[]> (Required: false)
- Include <string[]> (Required: false)
- InputObject <ServiceController[]> (Required: false)
- Name <string[]> (Required: false)
- RequiredServices <switch> (Required: false)
```

### Get-SmbBandWidthLimit

```powershell
Get-SmbBandwidthLimit [[-Category] <BandwidthLimitCategory[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- Category <BandwidthLimitCategory[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-SmbClientAccessToServer

```powershell
Get-SmbClientAccessToServer [-Name] <string[]> [[-IdentifierType] <IdentifierType>] [[-Identifier] <string>] [[-AccessControlType] <AccessControlType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Get-SmbClientAccessToServer [[-IdentifierType] <IdentifierType>] [[-Identifier] <string>] [[-AccessControlType] <AccessControlType>] -InputObject <CimInstance#MSFT_SmbServerCertificateMapping[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AccessControlType <AccessControlType> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Identifier <string> (Required: false)
- IdentifierType <IdentifierType> (Required: false)
- InputObject <CimInstance#MSFT_SmbServerCertificateMapping[]> (Required: true)
- Name <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Get-SmbClientCertificateMapping

```powershell
Get-SmbClientCertificateMapping [[-Namespace] <string[]>] [[-Subject] <string[]>] [-IssuerName <string[]>] [-Thumbprint <string[]>] [-DisplayName <string[]>] [-StoreName <string[]>] [-Type <Type[]>] [-Flags <Flags[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DisplayName <string[]> (Required: false)
- Flags <Flags[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- IssuerName <string[]> (Required: false)
- Namespace <string[]> (Required: false)
- StoreName <string[]> (Required: false)
- Subject <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- Thumbprint <string[]> (Required: false)
- Type <Type[]> (Required: false)
```

### Get-SmbClientConfiguration

```powershell
Get-SmbClientConfiguration [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Get-SmbClientNetworkInterface

```powershell
Get-SmbClientNetworkInterface [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-SmbConnection

```powershell
Get-SmbConnection [[-ServerName] <string[]>] [[-UserName] <string[]>] [-SmbInstance <SmbInstance>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ServerName <string[]> (Required: false)
- SmbInstance <SmbInstance> (Required: false)
- ThrottleLimit <int> (Required: false)
- UserName <string[]> (Required: false)
```

### Get-SmbDelegation

```powershell
Get-SmbDelegation [-SmbServer] <string> [<CommonParameters>]

PARAMETERS:
- SmbServer <string> (Required: true)
```

### Get-SmbGlobalMapping

```powershell
Get-SmbGlobalMapping [[-LocalPath] <string[]>] [[-RemotePath] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- LocalPath <string[]> (Required: false)
- RemotePath <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-SmbMapping

```powershell
Get-SmbMapping [[-LocalPath] <string[]>] [[-RemotePath] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- LocalPath <string[]> (Required: false)
- RemotePath <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-SmbMultichannelConnection

```powershell
Get-SmbMultichannelConnection [[-ServerName] <string[]>] [-IncludeNotSelected] [-SmbInstance <SmbInstance>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeNotSelected <switch> (Required: false)
- ServerName <string[]> (Required: false)
- SmbInstance <SmbInstance> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-SmbMultichannelConstraint

```powershell
Get-SmbMultichannelConstraint [[-ServerName] <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ServerName <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-SmbOpenFile

```powershell
Get-SmbOpenFile [[-FileId] <uint64[]>] [[-SessionId] <uint64[]>] [[-ClientComputerName] <string[]>] [[-ClientUserName] <string[]>] [[-ScopeName] <string[]>] [[-ClusterNodeName] <string[]>] [-IncludeHidden] [-SmbInstance <SmbInstance>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClientComputerName <string[]> (Required: false)
- ClientUserName <string[]> (Required: false)
- ClusterNodeName <string[]> (Required: false)
- FileId <uint64[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- ScopeName <string[]> (Required: false)
- SessionId <uint64[]> (Required: false)
- SmbInstance <SmbInstance> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-SmbServerAlternativePort

```powershell
Get-SmbServerAlternativePort [[-TransportType] <TransportType[]>] [[-Port] <uint16[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- Port <uint16[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TransportType <TransportType[]> (Required: false)
```

### Get-SmbServerCertificateMapping

```powershell
Get-SmbServerCertificateMapping [[-Name] <string[]>] [[-Subject] <string[]>] [-Thumbprint <string[]>] [-DisplayName <string[]>] [-StoreName <string[]>] [-Type <Type[]>] [-Flags <Flags[]>] [-RequireClientAuthentication <bool[]>] [-SkipClientCertificateAccessCheck <bool[]>] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DisplayName <string[]> (Required: false)
- Flags <Flags[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- Name <string[]> (Required: false)
- RequireClientAuthentication <bool[]> (Required: false)
- SkipClientCertificateAccessCheck <bool[]> (Required: false)
- StoreName <string[]> (Required: false)
- Subject <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- Thumbprint <string[]> (Required: false)
- Type <Type[]> (Required: false)
```

### Get-SmbServerCertProps

```powershell
Get-SmbServerCertProps [-Name] <string> [-Force] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- Name <string> (Required: true)
```

### Get-SmbServerConfiguration

```powershell
Get-SmbServerConfiguration [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Get-SmbServerNetworkInterface

```powershell
Get-SmbServerNetworkInterface [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-SmbSession

```powershell
Get-SmbSession [[-SessionId] <uint64[]>] [[-ClientComputerName] <string[]>] [[-ClientUserName] <string[]>] [[-ScopeName] <string[]>] [[-ClusterNodeName] <string[]>] [-IncludeHidden] [-SmbInstance <SmbInstance>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClientComputerName <string[]> (Required: false)
- ClientUserName <string[]> (Required: false)
- ClusterNodeName <string[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- ScopeName <string[]> (Required: false)
- SessionId <uint64[]> (Required: false)
- SmbInstance <SmbInstance> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-SmbShare

```powershell
Get-SmbShare [[-Name] <string[]>] [[-ScopeName] <string[]>] [-Scoped <bool[]>] [-Special <bool[]>] [-ContinuouslyAvailable <bool[]>] [-ShareState <ShareState[]>] [-FolderEnumerationMode <FolderEnumerationMode[]>] [-CachingMode <CachingMode[]>] [-LeasingMode <LeasingMode[]>] [-DirectoryHandleLeasing <bool[]>] [-ConcurrentUserLimit <uint32[]>] [-AvailabilityType <AvailabilityType[]>] [-CaTimeout <uint32[]>] [-EncryptData <bool[]>] [-CompressData <bool[]>] [-IsolatedTransport <bool[]>] [-QoSFlowScope <QoSFlowScope[]>] [-QoSPolicyId <string[]>] [-IncludeHidden] [-SmbInstance <SmbInstance>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AvailabilityType <AvailabilityType[]> (Required: false)
- CaTimeout <uint32[]> (Required: false)
- CachingMode <CachingMode[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CompressData <bool[]> (Required: false)
- ConcurrentUserLimit <uint32[]> (Required: false)
- ContinuouslyAvailable <bool[]> (Required: false)
- DirectoryHandleLeasing <bool[]> (Required: false)
- EncryptData <bool[]> (Required: false)
- FolderEnumerationMode <FolderEnumerationMode[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- IsolatedTransport <bool[]> (Required: false)
- LeasingMode <LeasingMode[]> (Required: false)
- Name <string[]> (Required: false)
- QoSFlowScope <QoSFlowScope[]> (Required: false)
- QoSPolicyId <string[]> (Required: false)
- ScopeName <string[]> (Required: false)
- Scoped <bool[]> (Required: false)
- ShareState <ShareState[]> (Required: false)
- SmbInstance <SmbInstance> (Required: false)
- Special <bool[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-SmbShareAccess

```powershell
Get-SmbShareAccess [-Name] <string[]> [[-ScopeName] <string[]>] [-SmbInstance <SmbInstance>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Get-SmbShareAccess -InputObject <CimInstance#MSFT_SMBShare[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_SMBShare[]> (Required: true)
- Name <string[]> (Required: true)
- ScopeName <string[]> (Required: false)
- SmbInstance <SmbInstance> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Get-SmbWitnessClient

```powershell
Get-SmbWitnessClient [[-ClientName] <string[]>] [-State <State[]>] [-Flags <Flags[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClientName <string[]> (Required: false)
- Flags <Flags[]> (Required: false)
- State <State[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-StartApps

```powershell
Get-StartApps [[-Name] <string>] [[-SortOrder] <string>]

PARAMETERS:
- Name <string> (Required: false)
- SortOrder <string> (Required: false)
```

### Get-StorageAdvancedProperty

```powershell
Get-StorageAdvancedProperty -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> [<CommonParameters>]

PARAMETERS:
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
```

### Get-StorageBusBinding

```powershell
Get-StorageBusBinding [-Guid <string>] [<CommonParameters>]

Get-StorageBusBinding -Number <uint16> [<CommonParameters>]

Get-StorageBusBinding -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> [<CommonParameters>]

PARAMETERS:
- Guid <string> (Required: false)
- Number <uint16> (Required: true)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
```

### Get-StorageBusCache

```powershell
Get-StorageBusCache [<CommonParameters>]

```

### Get-StorageBusClientDevice

```powershell
Get-StorageBusClientDevice [[-DeviceState] <DeviceState[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageBusClientDevice [[-DeviceType] <DeviceType[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DeviceState <DeviceState[]> (Required: false)
- DeviceType <DeviceType[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-StorageBusDisk

```powershell
Get-StorageBusDisk [-Guid <string>] [<CommonParameters>]

Get-StorageBusDisk [-Number <uint32>] [<CommonParameters>]

Get-StorageBusDisk [-PhysicalDisk <CimInstance#MSFT_PhysicalDisk>] [<CommonParameters>]

PARAMETERS:
- Guid <string> (Required: false)
- Number <uint32> (Required: false)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: false)
```

### Get-StorageBusTargetCacheStore

```powershell
Get-StorageBusTargetCacheStore

```

### Get-StorageBusTargetCacheStoresInstance

```powershell
Get-StorageBusTargetCacheStoresInstance [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-StorageBusTargetDevice

```powershell
Get-StorageBusTargetDevice

```

### Get-StorageBusTargetDeviceInstance

```powershell
Get-StorageBusTargetDeviceInstance [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-StorageChassis

```powershell
Get-StorageChassis [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

Get-StorageChassis -StorageSubsystem <CimInstance#MSFT_StorageSubsystem> [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

Get-StorageChassis -StorageFaultDomain <CimInstance#MSFT_StorageFaultDomain> [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: false)
- FriendlyName <string> (Required: false)
- PhysicalLocation <string> (Required: false)
- SerialNumber <string> (Required: false)
- StorageFaultDomain <CimInstance#MSFT_StorageFaultDomain> (Required: true)
- StorageSubsystem <CimInstance#MSFT_StorageSubsystem> (Required: true)
```

### Get-StorageDataCollection

```powershell
Get-StorageDataCollection -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> -StorageDataCollectionType <StorageDataCollectionType> [-Count <uint32>] [-Oldest] [<CommonParameters>]

Get-StorageDataCollection -DeviceGuid <string> -StorageDataCollectionType <StorageDataCollectionType> [-Count <uint32>] [-Oldest] [<CommonParameters>]

Get-StorageDataCollection -DeviceNumber <string> -StorageDataCollectionType <StorageDataCollectionType> [-Count <uint32>] [-Oldest] [<CommonParameters>]

PARAMETERS:
- Count <uint32> (Required: false)
- DeviceGuid <string> (Required: true)
- DeviceNumber <string> (Required: true)
- Oldest <switch> (Required: false)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
- StorageDataCollectionType <StorageDataCollectionType> (Required: true)
```

### Get-StorageDiagnosticInfo

```powershell
Get-StorageDiagnosticInfo -InputObject <CimInstance#MSFT_StorageSubSystem> -DestinationPath <string> [-TimeSpan <uint32>] [-ActivityId <string>] [-ExcludeOperationalLog] [-ExcludeDiagnosticLog] [-IncludeLiveDump] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageDiagnosticInfo [-StorageSubSystemFriendlyName] <string> -DestinationPath <string> [-TimeSpan <uint32>] [-ActivityId <string>] [-ExcludeOperationalLog] [-ExcludeDiagnosticLog] [-IncludeLiveDump] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageDiagnosticInfo -StorageSubSystemName <string> -DestinationPath <string> [-TimeSpan <uint32>] [-ActivityId <string>] [-ExcludeOperationalLog] [-ExcludeDiagnosticLog] [-IncludeLiveDump] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageDiagnosticInfo -StorageSubSystemUniqueId <string> -DestinationPath <string> [-TimeSpan <uint32>] [-ActivityId <string>] [-ExcludeOperationalLog] [-ExcludeDiagnosticLog] [-IncludeLiveDump] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- ActivityId <string> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- DestinationPath <string> (Required: true)
- ExcludeDiagnosticLog <switch> (Required: false)
- ExcludeOperationalLog <switch> (Required: false)
- IncludeLiveDump <switch> (Required: false)
- InputObject <CimInstance#MSFT_StorageSubSystem> (Required: true)
- StorageSubSystemFriendlyName <string> (Required: true)
- StorageSubSystemName <string> (Required: true)
- StorageSubSystemUniqueId <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- TimeSpan <uint32> (Required: false)
```

### Get-StorageEnclosure

```powershell
Get-StorageEnclosure [-UniqueId <string[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-HealthStatus <HealthStatus[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageEnclosure [[-FriendlyName] <string[]>] [[-SerialNumber] <string[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-HealthStatus <HealthStatus[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageEnclosure [-Manufacturer <string[]>] [-Model <string[]>] [-HealthStatus <HealthStatus[]>] [-PhysicalDisk <CimInstance#MSFT_PhysicalDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageEnclosure [-Manufacturer <string[]>] [-Model <string[]>] [-HealthStatus <HealthStatus[]>] [-StorageNode <CimInstance#MSFT_StorageNode>] [-PhysicallyConnected] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageEnclosure [-Manufacturer <string[]>] [-Model <string[]>] [-HealthStatus <HealthStatus[]>] [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: false)
- HealthStatus <HealthStatus[]> (Required: false)
- Manufacturer <string[]> (Required: false)
- Model <string[]> (Required: false)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: false)
- PhysicallyConnected <switch> (Required: false)
- SerialNumber <string[]> (Required: false)
- StorageNode <CimInstance#MSFT_StorageNode> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
```

### Get-StorageEnclosureStorageNodeView

```powershell
Get-StorageEnclosureStorageNodeView [[-StorageNode] <CimInstance#MSFT_StorageNode>] [[-StorageEnclosure] <CimInstance#MSFT_StorageEnclosure>] [[-CimSession] <CimSession>] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: false)
- StorageEnclosure <CimInstance#MSFT_StorageEnclosure> (Required: false)
- StorageNode <CimInstance#MSFT_StorageNode> (Required: false)
```

### Get-StorageEnclosureVendorData

```powershell
Get-StorageEnclosureVendorData [-FriendlyName] <string[]> -PageNumber <uint16> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageEnclosureVendorData -UniqueId <string[]> -PageNumber <uint16> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageEnclosureVendorData -InputObject <CimInstance#MSFT_StorageEnclosure[]> -PageNumber <uint16> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_StorageEnclosure[]> (Required: true)
- PageNumber <uint16> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
```

### Get-StorageExtendedStatus

```powershell
Get-StorageExtendedStatus -StorageJob <CimInstance#MSFT_StorageJob> [-CimSession <CimSession>] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: false)
- StorageJob <CimInstance#MSFT_StorageJob> (Required: true)
```

### Get-StorageFaultDomain

```powershell
Get-StorageFaultDomain [-FriendlyName <string>] [-SerialNumber <string>] [-Type <StorageFaultDomainType>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

Get-StorageFaultDomain -StorageSubsystem <CimInstance#MSFT_StorageSubsystem> [-FriendlyName <string>] [-SerialNumber <string>] [-Type <StorageFaultDomainType>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

Get-StorageFaultDomain -StorageFaultDomain <CimInstance#MSFT_StorageFaultDomain> [-FriendlyName <string>] [-SerialNumber <string>] [-Type <StorageFaultDomainType>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

Get-StorageFaultDomain -VirtualDisk <CimInstance#MSFT_VirtualDisk> [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: false)
- FriendlyName <string> (Required: false)
- PhysicalLocation <string> (Required: false)
- SerialNumber <string> (Required: false)
- StorageFaultDomain <CimInstance#MSFT_StorageFaultDomain> (Required: true)
- StorageSubsystem <CimInstance#MSFT_StorageSubsystem> (Required: true)
- Type <StorageFaultDomainType> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: true)
```

### Get-StorageFileServer

```powershell
Get-StorageFileServer [-FriendlyName <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageFileServer [-UniqueId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageFileServer [-Subsystem <CimInstance#MSFT_StorageSubsystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: false)
- Subsystem <CimInstance#MSFT_StorageSubsystem> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
```

### Get-StorageFirmwareInformation

```powershell
Get-StorageFirmwareInformation [-FriendlyName] <string> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageFirmwareInformation -UniqueId <string> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageFirmwareInformation -InputObject <CimInstance#MSFT_PhysicalDisk> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageFirmwareInformation -StorageEnclosureUniqueId <string> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageFirmwareInformation [-StorageEnclosureFriendlyName] <string> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageFirmwareInformation -StorageEnclosure <CimInstance#MSFT_StorageEnclosure> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <CimInstance#MSFT_PhysicalDisk> (Required: true)
- StorageEnclosure <CimInstance#MSFT_StorageEnclosure> (Required: true)
- StorageEnclosureFriendlyName <string> (Required: true)
- StorageEnclosureUniqueId <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
```

### Get-StorageHealthAction

```powershell
Get-StorageHealthAction -UniqueId <string[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageHealthAction [-InputObject <ciminstance>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- InputObject <ciminstance> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
```

### Get-StorageHealthReport

```powershell
Get-StorageHealthReport -InputObject <CimInstance#MSFT_StorageObject> [-Count <int>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- Count <int> (Required: false)
- InputObject <CimInstance#MSFT_StorageObject> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-StorageHealthSetting

```powershell
Get-StorageHealthSetting -InputObject <CimInstance#MSFT_StorageSubSystem> [-Name <string>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- InputObject <CimInstance#MSFT_StorageSubSystem> (Required: true)
- Name <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-StorageHistory

```powershell
Get-StorageHistory -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> [-Credential <pscredential>] [-LogFile <string>] [-NumberOfHours <uint32>] [-Disaggregate] [-Errors] [<CommonParameters>]

Get-StorageHistory -DeviceGuid <string> [-LogFile <string>] [-NumberOfHours <uint32>] [-Disaggregate] [-Errors] [<CommonParameters>]

Get-StorageHistory -DeviceNumber <string> [-LogFile <string>] [-NumberOfHours <uint32>] [-Disaggregate] [-Errors] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- DeviceGuid <string> (Required: true)
- DeviceNumber <string> (Required: true)
- Disaggregate <switch> (Required: false)
- Errors <switch> (Required: false)
- LogFile <string> (Required: false)
- NumberOfHours <uint32> (Required: false)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
```

### Get-StorageJob

```powershell
Get-StorageJob [-Name <string[]>] [-JobState <JobState[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageJob [-UniqueId <string[]>] [-JobState <JobState[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageJob [-JobState <JobState[]>] [-Volume <CimInstance#MSFT_Volume>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageJob [-JobState <JobState[]>] [-Disk <CimInstance#MSFT_Disk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageJob [-JobState <JobState[]>] [-VirtualDisk <CimInstance#MSFT_VirtualDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageJob [-JobState <JobState[]>] [-StoragePool <CimInstance#MSFT_StoragePool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageJob [-JobState <JobState[]>] [-StorageSubsystem <CimInstance#MSFT_StorageSubsystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Disk <CimInstance#MSFT_Disk> (Required: false)
- JobState <JobState[]> (Required: false)
- Name <string[]> (Required: false)
- StoragePool <CimInstance#MSFT_StoragePool> (Required: false)
- StorageSubsystem <CimInstance#MSFT_StorageSubsystem> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
- Volume <CimInstance#MSFT_Volume> (Required: false)
```

### Get-StorageNode

```powershell
Get-StorageNode [[-Name] <string[]>] [-OperationalStatus <OperationalStatus[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageNode [-UniqueId <string[]>] [-OperationalStatus <OperationalStatus[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageNode [-ObjectId <string[]>] [-OperationalStatus <OperationalStatus[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageNode [-OperationalStatus <OperationalStatus[]>] [-Volume <CimInstance#MSFT_Volume>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageNode [-OperationalStatus <OperationalStatus[]>] [-VirtualDisk <CimInstance#MSFT_VirtualDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageNode [-OperationalStatus <OperationalStatus[]>] [-PhysicalDisk <CimInstance#MSFT_PhysicalDisk>] [-PhysicallyConnected] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageNode [-OperationalStatus <OperationalStatus[]>] [-StoragePool <CimInstance#MSFT_StoragePool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageNode [-OperationalStatus <OperationalStatus[]>] [-StorageEnclosure <CimInstance#MSFT_StorageEnclosure>] [-PhysicallyConnected] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageNode [-OperationalStatus <OperationalStatus[]>] [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageNode [-OperationalStatus <OperationalStatus[]>] [-Disk <CimInstance#MSFT_Disk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Disk <CimInstance#MSFT_Disk> (Required: false)
- Name <string[]> (Required: false)
- ObjectId <string[]> (Required: false)
- OperationalStatus <OperationalStatus[]> (Required: false)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: false)
- PhysicallyConnected <switch> (Required: false)
- StorageEnclosure <CimInstance#MSFT_StorageEnclosure> (Required: false)
- StoragePool <CimInstance#MSFT_StoragePool> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
- Volume <CimInstance#MSFT_Volume> (Required: false)
```

### Get-StoragePool

```powershell
Get-StoragePool [[-FriendlyName] <string[]>] [-Usage <Usage[]>] [-IsPrimordial <bool[]>] [-HealthStatus <HealthStatus[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StoragePool [-UniqueId <string[]>] [-IsPrimordial <bool[]>] [-HealthStatus <HealthStatus[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StoragePool [-Name <string[]>] [-IsPrimordial <bool[]>] [-HealthStatus <HealthStatus[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StoragePool [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsPrimordial <bool[]>] [-HealthStatus <HealthStatus[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StoragePool [-IsPrimordial <bool[]>] [-HealthStatus <HealthStatus[]>] [-StorageJob <CimInstance#MSFT_StorageJob>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StoragePool [-IsPrimordial <bool[]>] [-HealthStatus <HealthStatus[]>] [-Volume <CimInstance#MSFT_Volume>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StoragePool [-IsPrimordial <bool[]>] [-HealthStatus <HealthStatus[]>] [-StorageTier <CimInstance#MSFT_StorageTier>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StoragePool [-IsPrimordial <bool[]>] [-HealthStatus <HealthStatus[]>] [-ResiliencySetting <CimInstance#MSFT_ResiliencySetting>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StoragePool [-IsPrimordial <bool[]>] [-HealthStatus <HealthStatus[]>] [-VirtualDisk <CimInstance#MSFT_VirtualDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StoragePool [-IsPrimordial <bool[]>] [-HealthStatus <HealthStatus[]>] [-PhysicalDisk <CimInstance#MSFT_PhysicalDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StoragePool [-IsPrimordial <bool[]>] [-HealthStatus <HealthStatus[]>] [-StorageNode <CimInstance#MSFT_StorageNode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StoragePool [-IsPrimordial <bool[]>] [-HealthStatus <HealthStatus[]>] [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: false)
- HealthStatus <HealthStatus[]> (Required: false)
- IsPrimordial <bool[]> (Required: false)
- Name <string[]> (Required: false)
- OtherUsageDescription <string[]> (Required: false)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: false)
- ResiliencySetting <CimInstance#MSFT_ResiliencySetting> (Required: false)
- StorageJob <CimInstance#MSFT_StorageJob> (Required: false)
- StorageNode <CimInstance#MSFT_StorageNode> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- StorageTier <CimInstance#MSFT_StorageTier> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
- Usage <Usage[]> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
- Volume <CimInstance#MSFT_Volume> (Required: false)
```

### Get-StorageProvider

```powershell
Get-StorageProvider [[-Name] <string[]>] [-Manufacturer <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageProvider [-UniqueId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageProvider [-Manufacturer <string[]>] [-URI <uri[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageProvider [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Manufacturer <string[]> (Required: false)
- Name <string[]> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- ThrottleLimit <int> (Required: false)
- URI <uri[]> (Required: false)
- UniqueId <string[]> (Required: false)
```

### Get-StorageRack

```powershell
Get-StorageRack [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

Get-StorageRack -StorageSubsystem <CimInstance#MSFT_StorageSubsystem> [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

Get-StorageRack -StorageFaultDomain <CimInstance#MSFT_StorageFaultDomain> [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: false)
- FriendlyName <string> (Required: false)
- PhysicalLocation <string> (Required: false)
- SerialNumber <string> (Required: false)
- StorageFaultDomain <CimInstance#MSFT_StorageFaultDomain> (Required: true)
- StorageSubsystem <CimInstance#MSFT_StorageSubsystem> (Required: true)
```

### Get-StorageReliabilityCounter

```powershell
Get-StorageReliabilityCounter -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageReliabilityCounter -Disk <CimInstance#MSFT_Disk> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Disk <CimInstance#MSFT_Disk> (Required: true)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-StorageScaleUnit

```powershell
Get-StorageScaleUnit [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

Get-StorageScaleUnit -StorageSubsystem <CimInstance#MSFT_StorageSubsystem> [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

Get-StorageScaleUnit -StorageFaultDomain <CimInstance#MSFT_StorageFaultDomain> [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: false)
- FriendlyName <string> (Required: false)
- PhysicalLocation <string> (Required: false)
- SerialNumber <string> (Required: false)
- StorageFaultDomain <CimInstance#MSFT_StorageFaultDomain> (Required: true)
- StorageSubsystem <CimInstance#MSFT_StorageSubsystem> (Required: true)
```

### Get-StorageSetting

```powershell
Get-StorageSetting [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-StorageSite

```powershell
Get-StorageSite [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

Get-StorageSite -StorageSubsystem <CimInstance#MSFT_StorageSubsystem> [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

Get-StorageSite -StorageFaultDomain <CimInstance#MSFT_StorageFaultDomain> [-FriendlyName <string>] [-SerialNumber <string>] [-PhysicalLocation <string>] [-CimSession <CimSession>] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: false)
- FriendlyName <string> (Required: false)
- PhysicalLocation <string> (Required: false)
- SerialNumber <string> (Required: false)
- StorageFaultDomain <CimInstance#MSFT_StorageFaultDomain> (Required: true)
- StorageSubsystem <CimInstance#MSFT_StorageSubsystem> (Required: true)
```

### Get-StorageSubSystem

```powershell
Get-StorageSubSystem [[-FriendlyName] <string[]>] [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-UniqueId <string[]>] [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-Name <string[]>] [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-StorageFaultDomain <CimInstance#MSFT_StorageFaultDomain>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-FileServer <CimInstance#MSFT_FileServer>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-Volume <CimInstance#MSFT_Volume>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-Partition <CimInstance#MSFT_Partition>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-Disk <CimInstance#MSFT_Disk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-OffloadDataTransferSetting <CimInstance#MSFT_OffloadDataTransferSetting>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-InitiatorId <CimInstance#MSFT_InitiatorId>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-TargetPortal <CimInstance#MSFT_TargetPortal>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-TargetPort <CimInstance#MSFT_TargetPort>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-MaskingSet <CimInstance#MSFT_MaskingSet>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-VirtualDisk <CimInstance#MSFT_VirtualDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-StoragePool <CimInstance#MSFT_StoragePool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-StorageNode <CimInstance#MSFT_StorageNode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageSubSystem [-HealthStatus <HealthStatus[]>] [-Manufacturer <string[]>] [-Model <string[]>] [-StorageProvider <CimInstance#MSFT_StorageProvider>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Disk <CimInstance#MSFT_Disk> (Required: false)
- FileServer <CimInstance#MSFT_FileServer> (Required: false)
- FriendlyName <string[]> (Required: false)
- HealthStatus <HealthStatus[]> (Required: false)
- InitiatorId <CimInstance#MSFT_InitiatorId> (Required: false)
- Manufacturer <string[]> (Required: false)
- MaskingSet <CimInstance#MSFT_MaskingSet> (Required: false)
- Model <string[]> (Required: false)
- Name <string[]> (Required: false)
- OffloadDataTransferSetting <CimInstance#MSFT_OffloadDataTransferSetting> (Required: false)
- Partition <CimInstance#MSFT_Partition> (Required: false)
- StorageFaultDomain <CimInstance#MSFT_StorageFaultDomain> (Required: false)
- StorageNode <CimInstance#MSFT_StorageNode> (Required: false)
- StoragePool <CimInstance#MSFT_StoragePool> (Required: false)
- StorageProvider <CimInstance#MSFT_StorageProvider> (Required: false)
- TargetPort <CimInstance#MSFT_TargetPort> (Required: false)
- TargetPortal <CimInstance#MSFT_TargetPortal> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
- Volume <CimInstance#MSFT_Volume> (Required: false)
```

### Get-StorageTier

```powershell
Get-StorageTier [[-FriendlyName] <string[]>] [-MediaType <MediaType[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageTier [-UniqueId <string[]>] [-MediaType <MediaType[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageTier [-MediaType <MediaType[]>] [-VirtualDisk <CimInstance#MSFT_VirtualDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageTier [-MediaType <MediaType[]>] [-StoragePool <CimInstance#MSFT_StoragePool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: false)
- MediaType <MediaType[]> (Required: false)
- StoragePool <CimInstance#MSFT_StoragePool> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
```

### Get-StorageTierSupportedSize

```powershell
Get-StorageTierSupportedSize [-FriendlyName] <string[]> [-ResiliencySettingName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageTierSupportedSize -UniqueId <string[]> [-ResiliencySettingName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-StorageTierSupportedSize -InputObject <CimInstance#MSFT_StorageTier[]> [-ResiliencySettingName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_StorageTier[]> (Required: true)
- ResiliencySettingName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
```

### Get-SupportedClusterSizes

```powershell
Get-SupportedClusterSizes [-DriveLetter] <char[]> -FileSystem <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-SupportedClusterSizes -ObjectId <string[]> -FileSystem <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-SupportedClusterSizes -Path <string[]> -FileSystem <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-SupportedClusterSizes -FileSystemLabel <string[]> -FileSystem <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-SupportedClusterSizes -InputObject <CimInstance#MSFT_Volume[]> -FileSystem <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DriveLetter <char[]> (Required: true)
- FileSystem <string> (Required: true)
- FileSystemLabel <string[]> (Required: true)
- InputObject <CimInstance#MSFT_Volume[]> (Required: true)
- ObjectId <string[]> (Required: true)
- Path <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-SupportedFileSystems

```powershell
Get-SupportedFileSystems [-DriveLetter] <char[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-SupportedFileSystems -ObjectId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-SupportedFileSystems -Path <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-SupportedFileSystems -FileSystemLabel <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-SupportedFileSystems -InputObject <CimInstance#MSFT_Volume[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DriveLetter <char[]> (Required: true)
- FileSystemLabel <string[]> (Required: true)
- InputObject <CimInstance#MSFT_Volume[]> (Required: true)
- ObjectId <string[]> (Required: true)
- Path <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-SystemDriver

```powershell
Get-SystemDriver [-Audit] [-ScanPath <string>] [-UserPEs] [-NoScript] [-NoShadowCopy] [-OmitPaths <string[]>] [-PathToCatroot <string>] [-ScriptFileNames] [<CommonParameters>]

PARAMETERS:
- Audit <switch> (Required: false)
- NoScript <switch> (Required: false)
- NoShadowCopy <switch> (Required: false)
- OmitPaths <string[]> (Required: false)
- PathToCatroot <string> (Required: false)
- ScanPath <string> (Required: false)
- ScriptFileNames <switch> (Required: false)
- UserPEs <switch> (Required: false)
```

### Get-SystemPreferredUILanguage

```powershell
Get-SystemPreferredUILanguage [<CommonParameters>]

```

### Get-TargetPort

```powershell
Get-TargetPort [[-FriendlyName] <string[]>] [-ConnectionType <ConnectionType[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-TargetPort [-UniqueId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-TargetPort [-PortAddress <string[]>] [-ConnectionType <ConnectionType[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-TargetPort [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-TargetPort [-MaskingSet <CimInstance#MSFT_MaskingSet>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-TargetPort [-TargetPortal <CimInstance#MSFT_TargetPortal>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-TargetPort [-VirtualDisk <CimInstance#MSFT_VirtualDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ConnectionType <ConnectionType[]> (Required: false)
- FriendlyName <string[]> (Required: false)
- MaskingSet <CimInstance#MSFT_MaskingSet> (Required: false)
- PortAddress <string[]> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- TargetPortal <CimInstance#MSFT_TargetPortal> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
```

### Get-TargetPortal

```powershell
Get-TargetPortal [-UniqueId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-TargetPortal [-IPv4Address <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-TargetPortal [-IPv6Address <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-TargetPortal [-TargetPort <CimInstance#MSFT_TargetPort>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-TargetPortal [-StorageSubsystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- IPv4Address <string[]> (Required: false)
- IPv6Address <string[]> (Required: false)
- StorageSubsystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- TargetPort <CimInstance#MSFT_TargetPort> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
```

### Get-TestDriveItem

```powershell
Get-TestDriveItem [[-Path] <string>]

PARAMETERS:
- Path <string> (Required: false)
```

### Get-TimeZone

```powershell
Get-TimeZone [[-Name] <string[]>] [<CommonParameters>]

Get-TimeZone -Id <string[]> [<CommonParameters>]

Get-TimeZone -ListAvailable [<CommonParameters>]

PARAMETERS:
- Id <string[]> (Required: true)
- ListAvailable <switch> (Required: true)
- Name <string[]> (Required: false)
```

### Get-TlsCipherSuite

```powershell
Get-TlsCipherSuite [[-Name] <string>] [<CommonParameters>]

PARAMETERS:
- Name <string> (Required: false)
```

### Get-TlsEccCurve

```powershell
Get-TlsEccCurve [[-Name] <string>] [<CommonParameters>]

PARAMETERS:
- Name <string> (Required: false)
```

### Get-Tpm

```powershell
Get-Tpm [<CommonParameters>]

```

### Get-TpmEndorsementKeyInfo

```powershell
Get-TpmEndorsementKeyInfo [[-HashAlgorithm] <string>] [<CommonParameters>]

PARAMETERS:
- HashAlgorithm <string> (Required: false)
```

### Get-TpmSupportedFeature

```powershell
Get-TpmSupportedFeature [[-FeatureList] <StringCollection>] [<CommonParameters>]

PARAMETERS:
- FeatureList <StringCollection> (Required: false)
```

### Get-TraceSource

```powershell
Get-TraceSource [[-Name] <string[]>] [<CommonParameters>]

PARAMETERS:
- Name <string[]> (Required: false)
```

### Get-Transaction

```powershell
Get-Transaction [<CommonParameters>]

```

### Get-TroubleshootingPack

```powershell
Get-TroubleshootingPack [-Path] <string> [-AnswerFile <string>] [<CommonParameters>]

PARAMETERS:
- AnswerFile <string> (Required: false)
- Path <string> (Required: true)
```

### Get-TrustedProvisioningCertificate

```powershell
Get-TrustedProvisioningCertificate [[-Thumbprint] <string>] [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

PARAMETERS:
- ConnectedDevice <switch> (Required: false)
- LogsDirectoryPath <string> (Required: false)
- Thumbprint <string> (Required: false)
- WprpFile <string> (Required: false)
```

### Get-TypeData

```powershell
Get-TypeData [[-TypeName] <string[]>] [<CommonParameters>]

PARAMETERS:
- TypeName <string[]> (Required: false)
```

### Get-UevAppxPackage

```powershell
Get-UevAppxPackage [<CommonParameters>]

Get-UevAppxPackage -Computer [<CommonParameters>]

Get-UevAppxPackage -CurrentComputerUser [<CommonParameters>]

PARAMETERS:
- Computer <switch> (Required: true)
- CurrentComputerUser <switch> (Required: true)
```

### Get-UevConfiguration

```powershell
Get-UevConfiguration [<CommonParameters>]

Get-UevConfiguration -Computer [<CommonParameters>]

Get-UevConfiguration -CurrentComputerUser [<CommonParameters>]

Get-UevConfiguration -Details [<CommonParameters>]

PARAMETERS:
- Computer <switch> (Required: true)
- CurrentComputerUser <switch> (Required: true)
- Details <switch> (Required: true)
```

### Get-UevStatus

```powershell
Get-UevStatus [<CommonParameters>]

```

### Get-UevTemplate

```powershell
Get-UevTemplate [<CommonParameters>]

Get-UevTemplate -Application <string> [<CommonParameters>]

Get-UevTemplate -TemplateID <string> [<CommonParameters>]

Get-UevTemplate -Profile <string> [<CommonParameters>]

Get-UevTemplate [-ApplicationOrTemplateID] <string> [<CommonParameters>]

PARAMETERS:
- Application <string> (Required: true)
- ApplicationOrTemplateID <string> (Required: true)
- Profile <string> (Required: true)
- TemplateID <string> (Required: true)
```

### Get-UevTemplateProgram

```powershell
Get-UevTemplateProgram [-ID] <string> [<CommonParameters>]

PARAMETERS:
- ID <string> (Required: true)
```

### Get-UICulture

```powershell
Get-UICulture [<CommonParameters>]

```

### Get-Unique

```powershell
Get-Unique [-InputObject <psobject>] [-AsString] [<CommonParameters>]

Get-Unique [-InputObject <psobject>] [-OnType] [<CommonParameters>]

PARAMETERS:
- AsString <switch> (Required: false)
- InputObject <psobject> (Required: false)
- OnType <switch> (Required: false)
```

### Get-Variable

```powershell
Get-Variable [[-Name] <string[]>] [-ValueOnly] [-Include <string[]>] [-Exclude <string[]>] [-Scope <string>] [<CommonParameters>]

PARAMETERS:
- Exclude <string[]> (Required: false)
- Include <string[]> (Required: false)
- Name <string[]> (Required: false)
- Scope <string> (Required: false)
- ValueOnly <switch> (Required: false)
```

### Get-Verb

```powershell
DESCRIPTION:


```

### Get-VirtualDisk

```powershell
Get-VirtualDisk [[-FriendlyName] <string[]>] [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-UniqueId <string[]>] [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Name <string[]>] [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-StorageJob <CimInstance#MSFT_StorageJob>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-TargetVirtualDisk <CimInstance#MSFT_VirtualDisk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-SourceVirtualDisk <CimInstance#MSFT_VirtualDisk>] [-AssociatedObjects] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-TargetPort <CimInstance#MSFT_TargetPort>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-InitiatorId <CimInstance#MSFT_InitiatorId>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-MaskingSet <CimInstance#MSFT_MaskingSet>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-InitiatorPort <CimInstance#MSFT_InitiatorPort>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-Disk <CimInstance#MSFT_Disk>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-StorageTier <CimInstance#MSFT_StorageTier>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-StorageRack <CimInstance#MSFT_StorageRack>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-StorageChassis <CimInstance#MSFT_StorageChassis>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-StorageScaleUnit <CimInstance#MSFT_StorageScaleUnit>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-StorageEnclosure <CimInstance#MSFT_StorageEnclosure>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-PhysicalDisk <CimInstance#MSFT_PhysicalDisk>] [-PhysicalRangeMin <uint64>] [-PhysicalRangeMax <uint64>] [-NoRedundancy] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-StoragePool <CimInstance#MSFT_StoragePool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-StorageNode <CimInstance#MSFT_StorageNode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDisk [-Usage <Usage[]>] [-OtherUsageDescription <string[]>] [-IsSnapshot <bool[]>] [-HealthStatus <HealthStatus[]>] [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AssociatedObjects <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Disk <CimInstance#MSFT_Disk> (Required: false)
- FriendlyName <string[]> (Required: false)
- HealthStatus <HealthStatus[]> (Required: false)
- InitiatorId <CimInstance#MSFT_InitiatorId> (Required: false)
- InitiatorPort <CimInstance#MSFT_InitiatorPort> (Required: false)
- IsSnapshot <bool[]> (Required: false)
- MaskingSet <CimInstance#MSFT_MaskingSet> (Required: false)
- Name <string[]> (Required: false)
- NoRedundancy <switch> (Required: false)
- OtherUsageDescription <string[]> (Required: false)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: false)
- PhysicalRangeMax <uint64> (Required: false)
- PhysicalRangeMin <uint64> (Required: false)
- SourceVirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
- StorageChassis <CimInstance#MSFT_StorageChassis> (Required: false)
- StorageEnclosure <CimInstance#MSFT_StorageEnclosure> (Required: false)
- StorageJob <CimInstance#MSFT_StorageJob> (Required: false)
- StorageNode <CimInstance#MSFT_StorageNode> (Required: false)
- StoragePool <CimInstance#MSFT_StoragePool> (Required: false)
- StorageRack <CimInstance#MSFT_StorageRack> (Required: false)
- StorageScaleUnit <CimInstance#MSFT_StorageScaleUnit> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- StorageTier <CimInstance#MSFT_StorageTier> (Required: false)
- TargetPort <CimInstance#MSFT_TargetPort> (Required: false)
- TargetVirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
- Usage <Usage[]> (Required: false)
```

### Get-VirtualDiskSupportedSize

```powershell
Get-VirtualDiskSupportedSize [-StoragePoolFriendlyName] <string[]> [-ResiliencySettingName <string>] [-FaultDomainAwareness <FaultDomainType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDiskSupportedSize -StoragePoolUniqueId <string[]> [-ResiliencySettingName <string>] [-FaultDomainAwareness <FaultDomainType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDiskSupportedSize -StoragePoolName <string[]> [-ResiliencySettingName <string>] [-FaultDomainAwareness <FaultDomainType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VirtualDiskSupportedSize -InputObject <CimInstance#MSFT_StoragePool[]> [-ResiliencySettingName <string>] [-FaultDomainAwareness <FaultDomainType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FaultDomainAwareness <FaultDomainType> (Required: false)
- InputObject <CimInstance#MSFT_StoragePool[]> (Required: true)
- ResiliencySettingName <string> (Required: false)
- StoragePoolFriendlyName <string[]> (Required: true)
- StoragePoolName <string[]> (Required: true)
- StoragePoolUniqueId <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-VMDirectVirtualDisk

```powershell
SYNTAX DEFINITION:

    Param
    (
        #### --------------------------------- Parameter Sets --------------------------------- ####

        [System.String[]]
        [Parameter(
            ParameterSetName  = 'ByVMName',
            ValueFromPipeline = $true,
            Mandatory         = $true,
            Position          = 0)]
        [ValidateNotNullOrEmpty()]
        $VMName,

        [Microsoft.HyperV.PowerShell.VirtualMachine[]]
        [Parameter(
            ParameterSetName  = 'ByVM',
            ValueFromPipeline = $true,
            Mandatory         = $true,
            Position          = 0)]
        [ValidateNotNullOrEmpty()]
        $VM,

        [Microsoft.HyperV.PowerShell.VMDriveController[]]
        [Parameter(
            ParameterSetName  = 'ByVMDriveController',
            ValueFromPipeline = $true,
            Mandatory         = $true,
            Position          = 0)]
        [ValidateNotNullOrEmpty()]
        $VMDriveController,

        #### ----------------------------- Common Method Parameters ----------------------------- ####

        [CimSession[]]
        [Parameter(
            ParameterSetName  = 'ByVMName',
            Mandatory         = $false)]
        $CimSession,

        [ControllerType]
        [Parameter(
            ParameterSetName  = 'ByVMName',
            Mandatory         = $false,
            Position          = 1)]
        [Parameter(
            ParameterSetName  = 'ByVM',
            Mandatory         = $false,
            Position          = 1)]
        $ControllerType,

        [System.Int32]
        [Parameter(
            ParameterSetName  = 'ByVMName',
            Mandatory         = $false,
            Position          = 2)]
        [Parameter(
            ParameterSetName  = 'ByVM',
            Mandatory         = $false,
            Position          = 2)]
        $ControllerNumber,

        [System.Int32]
        [Parameter(
            ParameterSetName  = 'ByVMName',
            Mandatory         = $false,
            Position          = 3)]
        [Parameter(
            ParameterSetName  = 'ByVM',
            Mandatory         = $false,
            Position          = 3)]
        [Parameter(
            ParameterSetName  = 'ByVMDriveController',
            Mandatory         = $false)]
        $ControllerLocation
    )

    Process
    {
        $CimSessionPassed = $true

        try
        {
            # Get the instance controllers
            $vms         = @()
            $controllers = @()

            switch ($psCmdlet.ParameterSetName)
            {
                "ByVMName"
                {
                    if (!$PSBoundParameters.ContainsKey('CimSession'))
                    {
                        $CimSession       = New-CimSession -ErrorAction Stop
                        $CimSessionPassed = $false
                    }

                    $vms = Get-VM -Name $VMName `
                                  -CimSession $CimSession `
                                  -ErrorAction Stop
                }

                "ByVM"
                {
                    $vms = $VM
                }

                "ByVMDriveController"
                {
                    $controllers = $VMDriveController
                }
            }

            if ($controllers.Count -eq 0)
            {
                if ($PSBoundParameters.ContainsKey('ControllerNumber'))
                {
                    $controllers = Get-VMScsiController -VM $vms `
                                                        -ControllerNumber $ControllerNumber `
                                                        -ErrorAction Stop
                }
                else
                {
                    $controllers = Get-VMScsiController -VM $vms `
                                                        -ErrorAction Stop
                }
            }

            foreach ($controller in $controllers)
            {
                # Get the current CIM session
                $currentCimSession = $controller.CimSession

                # Cache virtual disks in the current CIM session for later use
                $virtualDisks = Get-VirtualDisk -CimSession $currentCimSession `
                                                -ErrorAction Stop

                # No virtual disks were found in the current CIM session
                if ($null -eq $virtualDisks -or
                    $virtualDisks.Count -eq 0)
                {
                    continue
                }

                # Get the current VM
                $currentVm = Get-VM -Id $controller.VMId `
                                    -CimSession $currentCimSession `
                                    -ErrorAction Stop

                # Get the associated controller resource
                $computerSystem = Get-CimInstance -ClassName 'Msvm_ComputerSystem' `
                                                  -CimSession $currentCimSession `
                                                  -Namespace $VirtualizationNamespace `
                                                  -Filter "Name='$($currentVm.Id)'" `
                                                  -ErrorAction Stop

                if ($null -eq $computerSystem)
                {
                    $error = CreateErrorRecord -ErrorId "ObjectNotFound" `
                                               -ErrorMessage "No virtual machines found with id equal to '$($currentVm.Id)'." `
                                               -ErrorCategory ([System.Management.Automation.ErrorCategory]::ObjectNotFound) `
                                               -Exception $null `
                                               -TargetObject $null

                    $psCmdlet.WriteError($error)
                    return
                }

                $virtualSystemSettingData = Get-CimAssociatedInstance -InputObject $computerSystem `
                                                                      -CimSession $currentCimSession `
                                                                      -ResultClassName 'Msvm_VirtualSystemSettingData' `
                                                                      -ErrorAction Stop

                $virtualSystemSettingData = $virtualSystemSettingData | Where-Object -FilterScript `
                                            {
                                                $_.VirtualSystemType -eq 'Microsoft:Hyper-V:System:Realized'
                                            }

                $controllerResource = Get-CimAssociatedInstance -InputObject $virtualSystemSettingData `
                                                                -CimSession $currentCimSession `
                                                                -ResultClassName 'Msvm_ResourceAllocationSettingData' `
                                                                -ErrorAction Stop

                $controllerResource = $controllerResource | Where-Object -FilterScript `
                                    {
                                        $_.ResourceType -eq 6 -and
                                        $_.InstanceID   -eq $controller.Id
                                    }

                # Get the associated luns
                $lunSettingDataEntries = Get-CimAssociatedInstance -InputObject $controllerResource `
                                                                   -CimSession $currentCimSession `
                                                                   -ResultClassName 'Msvm_VirtualLogicalUnitSettingData' `
                                                                   -ErrorAction Stop

                # Filter luns by controller location
                if ($PSBoundParameters.ContainsKey('ControllerLocation'))
                {
                    $lunSettingDataEntries = $lunSettingDataEntries | Where-Object -FilterScript `
                                            {
                                                $_.AddressOnParent -eq $ControllerLocation
                                            }
                }

                # Enumerate virtual disks with an associated lun
                foreach ($virtualDisk in $virtualDisks)
                {
                    # Ignore luns not associated with a virtual disk
                    $virtualDiskId = $virtualDisk.ObjectId.Split('{}')[7]

                    $lunSettingData = $lunSettingDataEntries | Where-Object -FilterScript `
                    {
                        $_.Connection -like "*$virtualDiskId*"
                    }

                    if ($null -eq $lunSettingData)
                    {
                        continue
                    }

                    $vmDirectVirtualDisk = [VMDirectVirtualDisk]::new()

                    $vmDirectVirtualDisk.VirtualDiskUniqueId     = $virtualDisk.UniqueId
                    $vmDirectVirtualDisk.VirtualDiskFriendlyName = $virtualDisk.FriendlyName
                    $vmDirectVirtualDisk.ControllerLocation      = $lunSettingData.AddressOnParent
                    $vmDirectVirtualDisk.ControllerNumber        = $controller.ControllerNumber
                    $vmDirectVirtualDisk.ControllerType          = [ControllerType]::SCSI
                    $vmDirectVirtualDisk.Id                      = $lunSettingData.InstanceID
                    $vmDirectVirtualDisk.VMId                    = $currentVm.VMId
                    $vmDirectVirtualDisk.VMName                  = $currentVm.Name
                    $vmDirectVirtualDisk.CimSession              = $currentCimSession
                    $vmDirectVirtualDisk.ComputerName            = $currentVm.ComputerName

                    $vmDirectVirtualDisk
                }
            }
        }
        finally
        {
            if ((-not $CimSessionPassed) -and
                $CimSession)
            {
                $CimSession | Remove-CimSession
                $CimSession = $null
            }
        }
    }

```

### Get-Volume

```powershell
Get-Volume [[-DriveLetter] <char[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-ObjectId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-UniqueId <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-Path <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-FileSystemLabel <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-Partition <CimInstance#MSFT_Partition>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-DiskImage <CimInstance#MSFT_DiskImage>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-StorageSubSystem <CimInstance#MSFT_StorageSubSystem>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-StoragePool <CimInstance#MSFT_StoragePool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-StorageNode <CimInstance#MSFT_StorageNode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-StorageFileServer <CimInstance#MSFT_FileServer>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-FileShare <CimInstance#MSFT_FileShare>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-StorageJob <CimInstance#MSFT_StorageJob>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-Volume [-FilePath <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DiskImage <CimInstance#MSFT_DiskImage> (Required: false)
- DriveLetter <char[]> (Required: false)
- FilePath <string> (Required: false)
- FileShare <CimInstance#MSFT_FileShare> (Required: false)
- FileSystemLabel <string[]> (Required: false)
- ObjectId <string[]> (Required: false)
- Partition <CimInstance#MSFT_Partition> (Required: false)
- Path <string[]> (Required: false)
- StorageFileServer <CimInstance#MSFT_FileServer> (Required: false)
- StorageJob <CimInstance#MSFT_StorageJob> (Required: false)
- StorageNode <CimInstance#MSFT_StorageNode> (Required: false)
- StoragePool <CimInstance#MSFT_StoragePool> (Required: false)
- StorageSubSystem <CimInstance#MSFT_StorageSubSystem> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: false)
```

### Get-VolumeCorruptionCount

```powershell
Get-VolumeCorruptionCount [-DriveLetter] <char[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VolumeCorruptionCount -ObjectId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VolumeCorruptionCount -Path <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VolumeCorruptionCount -FileSystemLabel <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VolumeCorruptionCount -InputObject <CimInstance#MSFT_Volume[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DriveLetter <char[]> (Required: true)
- FileSystemLabel <string[]> (Required: true)
- InputObject <CimInstance#MSFT_Volume[]> (Required: true)
- ObjectId <string[]> (Required: true)
- Path <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-VolumeScrubPolicy

```powershell
Get-VolumeScrubPolicy [-DriveLetter] <char[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VolumeScrubPolicy -ObjectId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VolumeScrubPolicy -Path <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VolumeScrubPolicy -FileSystemLabel <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-VolumeScrubPolicy -InputObject <CimInstance#MSFT_Volume[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DriveLetter <char[]> (Required: true)
- FileSystemLabel <string[]> (Required: true)
- InputObject <CimInstance#MSFT_Volume[]> (Required: true)
- ObjectId <string[]> (Required: true)
- Path <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-VpnConnection

```powershell
Get-VpnConnection [[-Name] <string[]>] [-AllUserConnection] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AllUserConnection <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-VpnConnectionTrigger

```powershell
Get-VpnConnectionTrigger [-ConnectionName] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ConnectionName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Get-WdacBidTrace

```powershell
Get-WdacBidTrace [[-Path] <string>] [-Platform <string>] [-ProcessId <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-WdacBidTrace -Folder <string> [-Platform <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Get-WdacBidTrace -IncludeAllApplications [-Platform <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Folder <string> (Required: true)
- IncludeAllApplications <switch> (Required: true)
- Path <string> (Required: false)
- Platform <string> (Required: false)
- ProcessId <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-WheaMemoryPolicy

```powershell
Get-WheaMemoryPolicy [-ComputerName <string>] [<CommonParameters>]

PARAMETERS:
- ComputerName <string> (Required: false)
```

### Get-WIMBootEntry

```powershell
Get-WIMBootEntry -Path <string> [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
```

### Get-WinAcceptLanguageFromLanguageListOptOut

```powershell
Get-WinAcceptLanguageFromLanguageListOptOut [<CommonParameters>]

```

### Get-WinCultureFromLanguageListOptOut

```powershell
Get-WinCultureFromLanguageListOptOut [<CommonParameters>]

```

### Get-WinDefaultInputMethodOverride

```powershell
Get-WinDefaultInputMethodOverride [<CommonParameters>]

```

### Get-WindowsCapability

```powershell
Get-WindowsCapability -Path <string> [-Name <string>] [-LimitAccess] [-Source <string[]>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-WindowsCapability -Online [-Name <string>] [-LimitAccess] [-Source <string[]>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LimitAccess <switch> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Name <string> (Required: false)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- Source <string[]> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Get-WindowsDeveloperLicense

```powershell
Get-WindowsDeveloperLicense [<CommonParameters>]

```

### Get-WindowsDriver

```powershell
Get-WindowsDriver -Path <string> [-All] [-Driver <string>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-WindowsDriver -Online [-All] [-Driver <string>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- Driver <string> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Get-WindowsEdition

```powershell
Get-WindowsEdition -Path <string> [-Target] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-WindowsEdition -Online [-Target] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- Target <switch> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Get-WindowsErrorReporting

```powershell
Get-WindowsErrorReporting [<CommonParameters>]

```

### Get-WindowsImage

```powershell
Get-WindowsImage -ImagePath <string> [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-WindowsImage -ImagePath <string> -Name <string> [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-WindowsImage -ImagePath <string> -Index <uint32> [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-WindowsImage -Mounted [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- ImagePath <string> (Required: true)
- Index <uint32> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Mounted <switch> (Required: true)
- Name <string> (Required: true)
- ScratchDirectory <string> (Required: false)
```

### Get-WindowsImageContent

```powershell
Get-WindowsImageContent -ImagePath <string> -Name <string> [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-WindowsImageContent -ImagePath <string> -Index <uint32> [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-WindowsImageContent -ImagePath <string> [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- ImagePath <string> (Required: true)
- Index <uint32> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Name <string> (Required: true)
- ScratchDirectory <string> (Required: false)
```

### Get-WindowsOptionalFeature

```powershell
Get-WindowsOptionalFeature -Path <string> [-FeatureName <string>] [-PackageName <string>] [-PackagePath <string>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-WindowsOptionalFeature -Online [-FeatureName <string>] [-PackageName <string>] [-PackagePath <string>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- FeatureName <string> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- PackageName <string> (Required: false)
- PackagePath <string> (Required: false)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Get-WindowsPackage

```powershell
Get-WindowsPackage -Path <string> [-PackagePath <string>] [-PackageName <string>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Get-WindowsPackage -Online [-PackagePath <string>] [-PackageName <string>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- PackageName <string> (Required: false)
- PackagePath <string> (Required: false)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Get-WindowsReservedStorageState

```powershell
Get-WindowsReservedStorageState [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- ScratchDirectory <string> (Required: false)
```

### Get-WindowsSearchSetting

```powershell
Get-WindowsSearchSetting [<CommonParameters>]

```

### Get-WindowsUpdateLog

```powershell
Get-WindowsUpdateLog [[-ETLPath] <string[]>] [[-LogPath] <string>] [-ProcessingType <string>] [-ForceFlush] [-WhatIf] [-Confirm] [<CommonParameters>]

Get-WindowsUpdateLog [-IncludeAllLogs] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- ETLPath <string[]> (Required: false)
- ForceFlush <switch> (Required: false)
- IncludeAllLogs <switch> (Required: false)
- LogPath <string> (Required: false)
- ProcessingType <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Get-WinEvent

```powershell
Get-WinEvent [[-LogName] <string[]>] [-MaxEvents <long>] [-ComputerName <string>] [-Credential <pscredential>] [-FilterXPath <string>] [-Force] [-Oldest] [<CommonParameters>]

Get-WinEvent [-ListLog] <string[]> [-ComputerName <string>] [-Credential <pscredential>] [-Force] [<CommonParameters>]

Get-WinEvent [-ListProvider] <string[]> [-ComputerName <string>] [-Credential <pscredential>] [<CommonParameters>]

Get-WinEvent [-ProviderName] <string[]> [-MaxEvents <long>] [-ComputerName <string>] [-Credential <pscredential>] [-FilterXPath <string>] [-Force] [-Oldest] [<CommonParameters>]

Get-WinEvent [-Path] <string[]> [-MaxEvents <long>] [-Credential <pscredential>] [-FilterXPath <string>] [-Oldest] [<CommonParameters>]

Get-WinEvent [-FilterHashtable] <hashtable[]> [-MaxEvents <long>] [-ComputerName <string>] [-Credential <pscredential>] [-Force] [-Oldest] [<CommonParameters>]

Get-WinEvent [-FilterXml] <xml> [-MaxEvents <long>] [-ComputerName <string>] [-Credential <pscredential>] [-Oldest] [<CommonParameters>]

PARAMETERS:
- ComputerName <string> (Required: false)
- Credential <pscredential> (Required: false)
- FilterHashtable <hashtable[]> (Required: true)
- FilterXPath <string> (Required: false)
- FilterXml <xml> (Required: true)
- Force <switch> (Required: false)
- ListLog <string[]> (Required: true)
- ListProvider <string[]> (Required: true)
- LogName <string[]> (Required: false)
- MaxEvents <long> (Required: false)
- Oldest <switch> (Required: false)
- Path <string[]> (Required: true)
- ProviderName <string[]> (Required: true)
```

### Get-WinHomeLocation

```powershell
Get-WinHomeLocation [<CommonParameters>]

```

### Get-WinhttpProxy

```powershell
SYNOPSIS:
Displays current WinHTTP proxy setting.

DESCRIPTION:
Displays current WinHTTP proxy setting.

PARAMETERS:

- Default <SwitchParameter> (Required: true)
- Advanced <SwitchParameter> (Required: true)

```

### Get-WinLanguageBarOption

```powershell
Get-WinLanguageBarOption [<CommonParameters>]

```

### Get-WinSystemLocale

```powershell
Get-WinSystemLocale [<CommonParameters>]

```

### Get-WinUILanguageOverride

```powershell
Get-WinUILanguageOverride [<CommonParameters>]

```

### Get-WinUserLanguageList

```powershell
Get-WinUserLanguageList [<CommonParameters>]

```

### Get-WmiObject

```powershell
Get-WmiObject [-Class] <string> [[-Property] <string[]>] [-Filter <string>] [-Amended] [-DirectRead] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [<CommonParameters>]

Get-WmiObject [[-Class] <string>] [-Recurse] [-Amended] [-List] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [<CommonParameters>]

Get-WmiObject -Query <string> [-Amended] [-DirectRead] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [<CommonParameters>]

Get-WmiObject [-Amended] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [<CommonParameters>]

Get-WmiObject [-Amended] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [<CommonParameters>]

PARAMETERS:
- Amended <switch> (Required: false)
- AsJob <switch> (Required: false)
- Authentication <AuthenticationLevel> (Required: false)
- Authority <string> (Required: false)
- Class <string> (Required: false)
- ComputerName <string[]> (Required: false)
- Credential <pscredential> (Required: false)
- DirectRead <switch> (Required: false)
- EnableAllPrivileges <switch> (Required: false)
- Filter <string> (Required: false)
- Impersonation <ImpersonationLevel> (Required: false)
- List <switch> (Required: false)
- Locale <string> (Required: false)
- Namespace <string> (Required: false)
- Property <string[]> (Required: false)
- Query <string> (Required: true)
- Recurse <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Get-WSManCredSSP

```powershell
Get-WSManCredSSP [<CommonParameters>]

```

### Get-WSManInstance

```powershell
Get-WSManInstance [-ResourceURI] <uri> [-ApplicationName <string>] [-ComputerName <string>] [-ConnectionURI <uri>] [-Dialect <uri>] [-Fragment <string>] [-OptionSet <hashtable>] [-Port <int>] [-SelectorSet <hashtable>] [-SessionOption <SessionOption>] [-UseSSL] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

Get-WSManInstance [-ResourceURI] <uri> -Enumerate [-ApplicationName <string>] [-BasePropertiesOnly] [-ComputerName <string>] [-ConnectionURI <uri>] [-Dialect <uri>] [-Filter <string>] [-OptionSet <hashtable>] [-Port <int>] [-Associations] [-ReturnType <string>] [-SessionOption <SessionOption>] [-Shallow] [-UseSSL] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

PARAMETERS:
- ApplicationName <string> (Required: false)
- Associations <switch> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- BasePropertiesOnly <switch> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string> (Required: false)
- ConnectionURI <uri> (Required: false)
- Credential <pscredential> (Required: false)
- Dialect <uri> (Required: false)
- Enumerate <switch> (Required: true)
- Filter <string> (Required: false)
- Fragment <string> (Required: false)
- OptionSet <hashtable> (Required: false)
- Port <int> (Required: false)
- ResourceURI <uri> (Required: true)
- ReturnType <string> (Required: false)
- SelectorSet <hashtable> (Required: false)
- SessionOption <SessionOption> (Required: false)
- Shallow <switch> (Required: false)
- UseSSL <switch> (Required: false)
```

### Grant-FileShareAccess

```powershell
Grant-FileShareAccess -Name <string[]> -AccountName <string[]> -AccessRight <AccessRight> [-FileServer <CimInstance#MSFT_FileServer>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Grant-FileShareAccess -UniqueId <string[]> -AccountName <string[]> -AccessRight <AccessRight> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Grant-FileShareAccess -InputObject <CimInstance#MSFT_FileShare[]> -AccountName <string[]> -AccessRight <AccessRight> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AccessRight <AccessRight> (Required: true)
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

### Grant-SmbClientAccessToServer

```powershell
Grant-SmbClientAccessToServer [-Name] <string[]> -IdentifierType <IdentifierType> -Identifier <string> [-Description <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Grant-SmbClientAccessToServer -InputObject <CimInstance#MSFT_SmbServerCertificateMapping[]> -IdentifierType <IdentifierType> -Identifier <string> [-Description <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- Force <switch> (Required: false)
- Identifier <string> (Required: true)
- IdentifierType <IdentifierType> (Required: true)
- InputObject <CimInstance#MSFT_SmbServerCertificateMapping[]> (Required: true)
- Name <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Grant-SmbShareAccess

```powershell
Grant-SmbShareAccess [-Name] <string[]> [[-ScopeName] <string[]>] [-SmbInstance <SmbInstance>] [-AccountName <string[]>] [-AccessRight <ShareAccessRight>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Grant-SmbShareAccess -InputObject <CimInstance#MSFT_SMBShare[]> [-AccountName <string[]>] [-AccessRight <ShareAccessRight>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AccessRight <ShareAccessRight> (Required: false)
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

### Group-Object

```powershell
Group-Object [[-Property] <Object[]>] [-NoElement] [-AsHashTable] [-AsString] [-InputObject <psobject>] [-Culture <string>] [-CaseSensitive] [<CommonParameters>]

PARAMETERS:
- AsHashTable <switch> (Required: false)
- AsString <switch> (Required: false)
- CaseSensitive <switch> (Required: false)
- Culture <string> (Required: false)
- InputObject <psobject> (Required: false)
- NoElement <switch> (Required: false)
- Property <Object[]> (Required: false)
```

## H

### Hide-VirtualDisk

```powershell
Hide-VirtualDisk [-FriendlyName] <string[]> [-TargetPortAddresses <string[]>] [-InitiatorAddress <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Hide-VirtualDisk -UniqueId <string[]> [-TargetPortAddresses <string[]>] [-InitiatorAddress <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Hide-VirtualDisk -Name <string[]> [-TargetPortAddresses <string[]>] [-InitiatorAddress <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Hide-VirtualDisk -InputObject <CimInstance#MSFT_VirtualDisk[]> [-TargetPortAddresses <string[]>] [-InitiatorAddress <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: true)
- InitiatorAddress <string> (Required: false)
- InputObject <CimInstance#MSFT_VirtualDisk[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- TargetPortAddresses <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```
