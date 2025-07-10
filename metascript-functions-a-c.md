# Metascript Functions A through C

## A

### Add-AppProvisionedSharedPackageContainer

```powershell
Add-AppProvisionedSharedPackageContainer -DefinitionFile <string> -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Add-AppProvisionedSharedPackageContainer -DefinitionFile <string> -Online [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- DefinitionFile <string> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Add-AppSharedPackageContainer

```powershell
Add-AppSharedPackageContainer [-Path] <string> [-ForceApplicationShutdown] [-Merge] [-RequirePackagesPresent] [-Force] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- ForceApplicationShutdown <switch> (Required: false)
- Merge <switch> (Required: false)
- Path <string> (Required: true)
- RequirePackagesPresent <switch> (Required: false)
```

### Add-AppvClientConnectionGroup

```powershell
Add-AppvClientConnectionGroup [-Path] <string> [<CommonParameters>]

PARAMETERS:
- Path <string> (Required: true)
```

### Add-AppvClientPackage

```powershell
Add-AppvClientPackage [-Path] <string> [[-DynamicDeploymentConfiguration] <string>] [<CommonParameters>]

PARAMETERS:
- DynamicDeploymentConfiguration <string> (Required: false)
- Path <string> (Required: true)
```

### Add-AppvPublishingServer

```powershell
Add-AppvPublishingServer [-Name] <string> [-URL] <string> [[-GlobalRefreshEnabled] <bool>] [[-GlobalRefreshOnLogon] <bool>] [[-GlobalRefreshInterval] <uint32>] [[-GlobalRefreshIntervalUnit] <IPublishingServer+IntervalUnit>] [[-UserRefreshEnabled] <bool>] [[-UserRefreshOnLogon] <bool>] [[-UserRefreshInterval] <uint32>] [[-UserRefreshIntervalUnit] <IPublishingServer+IntervalUnit>] [<CommonParameters>]

PARAMETERS:
- GlobalRefreshEnabled <bool> (Required: false)
- GlobalRefreshInterval <uint32> (Required: false)
- GlobalRefreshIntervalUnit <IPublishingServer+IntervalUnit> (Required: false)
- GlobalRefreshOnLogon <bool> (Required: false)
- Name <string> (Required: true)
- URL <string> (Required: true)
- UserRefreshEnabled <bool> (Required: false)
- UserRefreshInterval <uint32> (Required: false)
- UserRefreshIntervalUnit <IPublishingServer+IntervalUnit> (Required: false)
- UserRefreshOnLogon <bool> (Required: false)
```

### Add-AppxPackage

```powershell
Add-AppxPackage [-Path] <string> [-DependencyPath <string[]>] [-RequiredContentGroupOnly] [-ForceApplicationShutdown] [-ForceTargetApplicationShutdown] [-ForceUpdateFromAnyVersion] [-RetainFilesOnFailure] [-InstallAllResources] [-Volume <AppxVolume>] [-ExternalPackages <string[]>] [-OptionalPackages <string[]>] [-RelatedPackages <string[]>] [-ExternalLocation <string>] [-DeferRegistrationWhenPackagesAreInUse] [-StubPackageOption <StubPackageOption>] [-AllowUnsigned] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-AppxPackage [-Path] <string> -AppInstallerFile [-RequiredContentGroupOnly] [-ForceTargetApplicationShutdown] [-InstallAllResources] [-LimitToExistingPackages] [-Volume <AppxVolume>] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-AppxPackage [-Path] <string> -Register [-DependencyPath <string[]>] [-DisableDevelopmentMode] [-ForceApplicationShutdown] [-ForceTargetApplicationShutdown] [-ForceUpdateFromAnyVersion] [-InstallAllResources] [-ExternalLocation <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-AppxPackage [-Path] <string> -Update [-DependencyPath <string[]>] [-RequiredContentGroupOnly] [-ForceApplicationShutdown] [-ForceTargetApplicationShutdown] [-ForceUpdateFromAnyVersion] [-RetainFilesOnFailure] [-InstallAllResources] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-AppxPackage [-Path] <string> -Stage [-DependencyPath <string[]>] [-RequiredContentGroupOnly] [-ForceUpdateFromAnyVersion] [-Volume <AppxVolume>] [-ExternalPackages <string[]>] [-OptionalPackages <string[]>] [-RelatedPackages <string[]>] [-ExternalLocation <string>] [-StubPackageOption <StubPackageOption>] [-AllowUnsigned] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-AppxPackage -MainPackage <string> [-Register] [-DependencyPackages <string[]>] [-ForceApplicationShutdown] [-ForceTargetApplicationShutdown] [-ForceUpdateFromAnyVersion] [-InstallAllResources] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-AppxPackage -RegisterByFamilyName -MainPackage <string> [-DependencyPackages <string[]>] [-ForceApplicationShutdown] [-ForceTargetApplicationShutdown] [-InstallAllResources] [-OptionalPackages <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowUnsigned <switch> (Required: false)
- AppInstallerFile <switch> (Required: true)
- Confirm <switch> (Required: false)
- DeferRegistrationWhenPackagesAreInUse <switch> (Required: false)
- DependencyPackages <string[]> (Required: false)
- DependencyPath <string[]> (Required: false)
- DisableDevelopmentMode <switch> (Required: false)
- ExternalLocation <string> (Required: false)
- ExternalPackages <string[]> (Required: false)
- ForceApplicationShutdown <switch> (Required: false)
- ForceTargetApplicationShutdown <switch> (Required: false)
- ForceUpdateFromAnyVersion <switch> (Required: false)
- InstallAllResources <switch> (Required: false)
- LimitToExistingPackages <switch> (Required: false)
- MainPackage <string> (Required: true)
- OptionalPackages <string[]> (Required: false)
- Path <string> (Required: true)
- Register <switch> (Required: true)
- RegisterByFamilyName <switch> (Required: true)
- RelatedPackages <string[]> (Required: false)
- RequiredContentGroupOnly <switch> (Required: false)
- RetainFilesOnFailure <switch> (Required: false)
- Stage <switch> (Required: true)
- StubPackageOption <StubPackageOption> (Required: false)
- Update <switch> (Required: true)
- Volume <AppxVolume> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-AppxProvisionedPackage

```powershell
Add-AppxProvisionedPackage -Path <string> [-FolderPath <string>] [-PackagePath <string>] [-DependencyPackagePath <string[]>] [-OptionalPackagePath <string[]>] [-LicensePath <string[]>] [-SkipLicense] [-CustomDataPath <string>] [-Regions <string>] [-StubPackageOption <StubPackageOption>] [-FeatureID <uint32>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Add-AppxProvisionedPackage -Online [-FolderPath <string>] [-PackagePath <string>] [-DependencyPackagePath <string[]>] [-OptionalPackagePath <string[]>] [-LicensePath <string[]>] [-SkipLicense] [-CustomDataPath <string>] [-Regions <string>] [-StubPackageOption <StubPackageOption>] [-FeatureID <uint32>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CustomDataPath <string> (Required: false)
- DependencyPackagePath <string[]> (Required: false)
- FeatureID <uint32> (Required: false)
- FolderPath <string> (Required: false)
- LicensePath <string[]> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- OptionalPackagePath <string[]> (Required: false)
- PackagePath <string> (Required: false)
- Path <string> (Required: true)
- Regions <string> (Required: false)
- ScratchDirectory <string> (Required: false)
- SkipLicense <switch> (Required: false)
- StubPackageOption <StubPackageOption> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Add-AppxVolume

```powershell
Add-AppxVolume [-Path] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Path <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Add-BCDataCacheExtension

```powershell
Add-BCDataCacheExtension [[-Percentage] <uint32>] [[-Path] <string>] [-Force] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-BCDataCacheExtension [[-Path] <string>] -SizeBytes <uint64> [-Force] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- PassThru <switch> (Required: false)
- Path <string> (Required: false)
- Percentage <uint32> (Required: false)
- SizeBytes <uint64> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-BitLockerKeyProtector

```powershell
Add-BitLockerKeyProtector [-MountPoint] <string[]> [[-Password] <securestring>] -PasswordProtector [-WhatIf] [-Confirm] [<CommonParameters>]

Add-BitLockerKeyProtector [-MountPoint] <string[]> [[-RecoveryPassword] <string>] -RecoveryPasswordProtector [-WhatIf] [-Confirm] [<CommonParameters>]

Add-BitLockerKeyProtector [-MountPoint] <string[]> [-StartupKeyPath] <string> -StartupKeyProtector [-WhatIf] [-Confirm] [<CommonParameters>]

Add-BitLockerKeyProtector [-MountPoint] <string[]> [-StartupKeyPath] <string> -TpmAndStartupKeyProtector [-WhatIf] [-Confirm] [<CommonParameters>]

Add-BitLockerKeyProtector [-MountPoint] <string[]> [-StartupKeyPath] <string> [[-Pin] <securestring>] -TpmAndPinAndStartupKeyProtector [-WhatIf] [-Confirm] [<CommonParameters>]

Add-BitLockerKeyProtector [-MountPoint] <string[]> [-ADAccountOrGroup] <string> -ADAccountOrGroupProtector [-Service] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-BitLockerKeyProtector [-MountPoint] <string[]> [[-Pin] <securestring>] -TpmAndPinProtector [-WhatIf] [-Confirm] [<CommonParameters>]

Add-BitLockerKeyProtector [-MountPoint] <string[]> -TpmProtector [-WhatIf] [-Confirm] [<CommonParameters>]

Add-BitLockerKeyProtector [-MountPoint] <string[]> [-RecoveryKeyPath] <string> -RecoveryKeyProtector [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ADAccountOrGroup <string> (Required: true)
- ADAccountOrGroupProtector <switch> (Required: true)
- Confirm <switch> (Required: false)
- MountPoint <string[]> (Required: true)
- Password <securestring> (Required: false)
- PasswordProtector <switch> (Required: true)
- Pin <securestring> (Required: false)
- RecoveryKeyPath <string> (Required: true)
- RecoveryKeyProtector <switch> (Required: true)
- RecoveryPassword <string> (Required: false)
- RecoveryPasswordProtector <switch> (Required: true)
- Service <switch> (Required: false)
- StartupKeyPath <string> (Required: true)
- StartupKeyProtector <switch> (Required: true)
- TpmAndPinAndStartupKeyProtector <switch> (Required: true)
- TpmAndPinProtector <switch> (Required: true)
- TpmAndStartupKeyProtector <switch> (Required: true)
- TpmProtector <switch> (Required: true)
- WhatIf <switch> (Required: false)
```

### Add-BitsFile

```powershell
Add-BitsFile [-BitsJob] <BitsJob[]> [-Source] <string[]> [[-Destination] <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- BitsJob <BitsJob[]> (Required: true)
- Confirm <switch> (Required: false)
- Destination <string[]> (Required: false)
- Source <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Add-CertificateEnrollmentPolicyServer

```powershell
Add-CertificateEnrollmentPolicyServer -Url <uri> -context <Context> [-NoClobber] [-RequireStrongValidation] [-Credential <PkiCredential>] [-AutoEnrollmentEnabled] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AutoEnrollmentEnabled <switch> (Required: false)
- Confirm <switch> (Required: false)
- Credential <PkiCredential> (Required: false)
- NoClobber <switch> (Required: false)
- RequireStrongValidation <switch> (Required: false)
- Url <uri> (Required: true)
- WhatIf <switch> (Required: false)
- context <Context> (Required: true)
```

### Add-Computer

```powershell
Add-Computer [-DomainName] <string> -Credential <pscredential> [-ComputerName <string[]>] [-LocalCredential <pscredential>] [-UnjoinDomainCredential <pscredential>] [-OUPath <string>] [-Server <string>] [-Unsecure] [-Options <JoinOptions>] [-Restart] [-PassThru] [-NewName <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-Computer [-WorkgroupName] <string> [-ComputerName <string[]>] [-LocalCredential <pscredential>] [-Credential <pscredential>] [-Restart] [-PassThru] [-NewName <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: true)
- DomainName <string> (Required: true)
- Force <switch> (Required: false)
- LocalCredential <pscredential> (Required: false)
- NewName <string> (Required: false)
- OUPath <string> (Required: false)
- Options <JoinOptions> (Required: false)
- PassThru <switch> (Required: false)
- Restart <switch> (Required: false)
- Server <string> (Required: false)
- UnjoinDomainCredential <pscredential> (Required: false)
- Unsecure <switch> (Required: false)
- WhatIf <switch> (Required: false)
- WorkgroupName <string> (Required: true)
```

### Add-Content

```powershell
Add-Content [-Path] <string[]> [-Value] <Object[]> [-PassThru] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Force] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [-NoNewline] [-Encoding <FileSystemCmdletProviderEncoding>] [-Stream <string>] [<CommonParameters>]

Add-Content [-Value] <Object[]> -LiteralPath <string[]> [-PassThru] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Force] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [-NoNewline] [-Encoding <FileSystemCmdletProviderEncoding>] [-Stream <string>] [<CommonParameters>]

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

### Add-DnsClientDohServerAddress

```powershell
Add-DnsClientDohServerAddress [-ServerAddress] <string> [[-DohTemplate] <string>] [[-AllowFallbackToUdp] <bool>] [[-AutoUpgrade] <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowFallbackToUdp <bool> (Required: false)
- AsJob <switch> (Required: false)
- AutoUpgrade <bool> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DohTemplate <string> (Required: false)
- ServerAddress <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-DnsClientNrptRule

```powershell
Add-DnsClientNrptRule [-Namespace] <string[]> [-GpoName <string>] [-DANameServers <string[]>] [-DAIPsecRequired] [-DAIPsecEncryptionType <string>] [-DAProxyServerName <string>] [-DnsSecEnable] [-DnsSecIPsecRequired] [-DnsSecIPsecEncryptionType <string>] [-NameServers <string[]>] [-NameEncoding <string>] [-Server <string>] [-DAProxyType <string>] [-DnsSecValidationRequired] [-DAEnable] [-IPsecTrustAuthority <string>] [-Comment <string>] [-DisplayName <string>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Comment <string> (Required: false)
- Confirm <switch> (Required: false)
- DAEnable <switch> (Required: false)
- DAIPsecEncryptionType <string> (Required: false)
- DAIPsecRequired <switch> (Required: false)
- DANameServers <string[]> (Required: false)
- DAProxyServerName <string> (Required: false)
- DAProxyType <string> (Required: false)
- DisplayName <string> (Required: false)
- DnsSecEnable <switch> (Required: false)
- DnsSecIPsecEncryptionType <string> (Required: false)
- DnsSecIPsecRequired <switch> (Required: false)
- DnsSecValidationRequired <switch> (Required: false)
- GpoName <string> (Required: false)
- IPsecTrustAuthority <string> (Required: false)
- NameEncoding <string> (Required: false)
- NameServers <string[]> (Required: false)
- Namespace <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Server <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-DtcClusterTMMapping

```powershell
Add-DtcClusterTMMapping -Name <string> -ClusterResourceName <string> -Local <bool> -Service <string> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Add-DtcClusterTMMapping -Name <string> -ClusterResourceName <string> -Local <bool> -ExecutablePath <string> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Add-DtcClusterTMMapping -Name <string> -ClusterResourceName <string> -ComPlusAppId <string> -Local <bool> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClusterResourceName <string> (Required: true)
- ComPlusAppId <string> (Required: true)
- ExecutablePath <string> (Required: true)
- Local <bool> (Required: true)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- Service <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Add-EtwTraceProvider

```powershell
Add-EtwTraceProvider [-Guid] <string> -SessionName <string> [-Level <byte>] [-MatchAnyKeyword <uint64>] [-MatchAllKeyword <uint64>] [-Property <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-EtwTraceProvider [-Guid] <string> -AutologgerName <string> [-Level <byte>] [-MatchAnyKeyword <uint64>] [-MatchAllKeyword <uint64>] [-Property <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AutologgerName <string> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Guid <string> (Required: true)
- Level <byte> (Required: false)
- MatchAllKeyword <uint64> (Required: false)
- MatchAnyKeyword <uint64> (Required: false)
- Property <uint32> (Required: false)
- SessionName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-History

```powershell
Add-History [[-InputObject] <psobject[]>] [-Passthru] [<CommonParameters>]

PARAMETERS:
- InputObject <psobject[]> (Required: false)
- Passthru <switch> (Required: false)
```

### Add-InitiatorIdToMaskingSet

```powershell
Add-InitiatorIdToMaskingSet [-MaskingSetFriendlyName] <string[]> [-InitiatorIds <string[]>] [-HostType <HostType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-InitiatorIdToMaskingSet -MaskingSetUniqueId <string[]> [-InitiatorIds <string[]>] [-HostType <HostType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-InitiatorIdToMaskingSet -InputObject <CimInstance#MSFT_MaskingSet[]> [-InitiatorIds <string[]>] [-HostType <HostType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- HostType <HostType> (Required: false)
- InitiatorIds <string[]> (Required: false)
- InputObject <CimInstance#MSFT_MaskingSet[]> (Required: true)
- MaskingSetFriendlyName <string[]> (Required: true)
- MaskingSetUniqueId <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-JobTrigger

```powershell
Add-JobTrigger [-InputObject] <ScheduledJobDefinition[]> [-Trigger] <ScheduledJobTrigger[]> [<CommonParameters>]

Add-JobTrigger [-Id] <int[]> [-Trigger] <ScheduledJobTrigger[]> [<CommonParameters>]

Add-JobTrigger [-Name] <string[]> [-Trigger] <ScheduledJobTrigger[]> [<CommonParameters>]

PARAMETERS:
- Id <int[]> (Required: true)
- InputObject <ScheduledJobDefinition[]> (Required: true)
- Name <string[]> (Required: true)
- Trigger <ScheduledJobTrigger[]> (Required: true)
```

### Add-KdsRootKey

```powershell
Add-KdsRootKey [[-EffectiveTime] <datetime>] [-LocalTestOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-KdsRootKey -EffectiveImmediately [-LocalTestOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- EffectiveImmediately <switch> (Required: true)
- EffectiveTime <datetime> (Required: false)
- LocalTestOnly <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-LocalGroupMember

```powershell
Add-LocalGroupMember [-Group] <LocalGroup> [-Member] <LocalPrincipal[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Add-LocalGroupMember [-Name] <string> [-Member] <LocalPrincipal[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Add-LocalGroupMember [-SID] <SecurityIdentifier> [-Member] <LocalPrincipal[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Group <LocalGroup> (Required: true)
- Member <LocalPrincipal[]> (Required: true)
- Name <string> (Required: true)
- SID <SecurityIdentifier> (Required: true)
- WhatIf <switch> (Required: false)
```

### Add-Member

```powershell
Add-Member -InputObject <psobject> -TypeName <string> [-PassThru] [<CommonParameters>]

Add-Member [-MemberType] <PSMemberTypes> [-Name] <string> [[-Value] <Object>] [[-SecondValue] <Object>] -InputObject <psobject> [-TypeName <string>] [-Force] [-PassThru] [<CommonParameters>]

Add-Member [-NotePropertyName] <string> [-NotePropertyValue] <Object> -InputObject <psobject> [-TypeName <string>] [-Force] [-PassThru] [<CommonParameters>]

Add-Member [-NotePropertyMembers] <IDictionary> -InputObject <psobject> [-TypeName <string>] [-Force] [-PassThru] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- InputObject <psobject> (Required: true)
- MemberType <PSMemberTypes> (Required: true)
- Name <string> (Required: true)
- NotePropertyMembers <IDictionary> (Required: true)
- NotePropertyName <string> (Required: true)
- NotePropertyValue <Object> (Required: true)
- PassThru <switch> (Required: false)
- SecondValue <Object> (Required: false)
- TypeName <string> (Required: false)
- Value <Object> (Required: false)
```

### Add-MpPreference

```powershell
Add-MpPreference [-ExclusionPath <string[]>] [-ExclusionExtension <string[]>] [-ExclusionProcess <string[]>] [-ExclusionIpAddress <string[]>] [-ThreatIDDefaultAction_Ids <long[]>] [-ThreatIDDefaultAction_Actions <ThreatAction[]>] [-AttackSurfaceReductionOnlyExclusions <string[]>] [-ControlledFolderAccessAllowedApplications <string[]>] [-ControlledFolderAccessProtectedFolders <string[]>] [-AttackSurfaceReductionRules_Ids <string[]>] [-AttackSurfaceReductionRules_Actions <ASRRuleActionType[]>] [-AttackSurfaceReductionRules_RuleSpecificExclusions_Id <string[]>] [-AttackSurfaceReductionRules_RuleSpecificExclusions <string[]>] [-RemoteEncryptionProtectionExclusions <string[]>] [-BruteForceProtectionExclusions <string[]>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AttackSurfaceReductionOnlyExclusions <string[]> (Required: false)
- AttackSurfaceReductionRules_Actions <ASRRuleActionType[]> (Required: false)
- AttackSurfaceReductionRules_Ids <string[]> (Required: false)
- AttackSurfaceReductionRules_RuleSpecificExclusions <string[]> (Required: false)
- AttackSurfaceReductionRules_RuleSpecificExclusions_Id <string[]> (Required: false)
- BruteForceProtectionExclusions <string[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ControlledFolderAccessAllowedApplications <string[]> (Required: false)
- ControlledFolderAccessProtectedFolders <string[]> (Required: false)
- ExclusionExtension <string[]> (Required: false)
- ExclusionIpAddress <string[]> (Required: false)
- ExclusionPath <string[]> (Required: false)
- ExclusionProcess <string[]> (Required: false)
- Force <switch> (Required: false)
- RemoteEncryptionProtectionExclusions <string[]> (Required: false)
- ThreatIDDefaultAction_Actions <ThreatAction[]> (Required: false)
- ThreatIDDefaultAction_Ids <long[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Add-NetEventNetworkAdapter

```powershell
Add-NetEventNetworkAdapter [-Name] <string> [[-PromiscuousMode] <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Name <string> (Required: true)
- PromiscuousMode <bool> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-NetEventPacketCaptureProvider

```powershell
Add-NetEventPacketCaptureProvider [-SessionName] <string> [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-CaptureType] <CaptureType>] [[-MultiLayer] <bool>] [[-LinkLayerAddress] <string[]>] [[-EtherType] <uint16[]>] [[-IpAddresses] <string[]>] [[-IpProtocols] <byte[]>] [[-TruncationLength] <uint16>] [[-VmCaptureDirection] <VmCaptureDirection>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CaptureType <CaptureType> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EtherType <uint16[]> (Required: false)
- IpAddresses <string[]> (Required: false)
- IpProtocols <byte[]> (Required: false)
- Level <byte> (Required: false)
- LinkLayerAddress <string[]> (Required: false)
- MatchAllKeyword <uint64> (Required: false)
- MatchAnyKeyword <uint64> (Required: false)
- MultiLayer <bool> (Required: false)
- SessionName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- TruncationLength <uint16> (Required: false)
- VmCaptureDirection <VmCaptureDirection> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-NetEventProvider

```powershell
Add-NetEventProvider [-Name] <string> [-SessionName] <string> [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Level <byte> (Required: false)
- MatchAllKeyword <uint64> (Required: false)
- MatchAnyKeyword <uint64> (Required: false)
- Name <string> (Required: true)
- SessionName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-NetEventVFPProvider

```powershell
Add-NetEventVFPProvider [-SessionName] <string> [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeywords] <uint64>] [[-DestinationMACAddresses] <string[]>] [[-SourceMACAddresses] <string[]>] [[-VLANIds] <uint16[]>] [[-TenantIds] <uint32[]>] [[-GREKeys] <uint32[]>] [[-SourceIPAddresses] <string[]>] [[-DestinationIPAddresses] <string[]>] [[-IPProtocols] <byte[]>] [[-TCPPorts] <uint16[]>] [[-UDPPorts] <uint16[]>] [[-VFPFlowDirection] <uint32>] [[-SwitchName] <string>] [[-PortIds] <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DestinationIPAddresses <string[]> (Required: false)
- DestinationMACAddresses <string[]> (Required: false)
- GREKeys <uint32[]> (Required: false)
- IPProtocols <byte[]> (Required: false)
- Level <byte> (Required: false)
- MatchAllKeywords <uint64> (Required: false)
- MatchAnyKeyword <uint64> (Required: false)
- PortIds <uint32[]> (Required: false)
- SessionName <string> (Required: true)
- SourceIPAddresses <string[]> (Required: false)
- SourceMACAddresses <string[]> (Required: false)
- SwitchName <string> (Required: false)
- TCPPorts <uint16[]> (Required: false)
- TenantIds <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UDPPorts <uint16[]> (Required: false)
- VFPFlowDirection <uint32> (Required: false)
- VLANIds <uint16[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-NetEventVmNetworkAdapter

```powershell
Add-NetEventVmNetworkAdapter [-Name] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Name <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-NetEventVmSwitch

```powershell
Add-NetEventVmSwitch [-Name] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Name <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-NetEventVmSwitchProvider

```powershell
Add-NetEventVmSwitchProvider [-SessionName] <string> [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeywords] <uint64>] [[-SwitchName] <string>] [[-PortIds] <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Level <byte> (Required: false)
- MatchAllKeywords <uint64> (Required: false)
- MatchAnyKeyword <uint64> (Required: false)
- PortIds <uint32[]> (Required: false)
- SessionName <string> (Required: true)
- SwitchName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-NetEventWFPCaptureProvider

```powershell
Add-NetEventWFPCaptureProvider [-SessionName] <string> [[-Level] <byte>] [[-MatchAnyKeyword] <uint64>] [[-MatchAllKeyword] <uint64>] [[-CaptureLayerSet] <WFPCaptureSet>] [[-IPAddresses] <string[]>] [[-TCPPorts] <uint16[]>] [[-UDPPorts] <uint16[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CaptureLayerSet <WFPCaptureSet> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPAddresses <string[]> (Required: false)
- Level <byte> (Required: false)
- MatchAllKeyword <uint64> (Required: false)
- MatchAnyKeyword <uint64> (Required: false)
- SessionName <string> (Required: true)
- TCPPorts <uint16[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UDPPorts <uint16[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-NetIPHttpsCertBinding

```powershell
Add-NetIPHttpsCertBinding -CertificateHash <string> -ApplicationId <string> -IpPort <string> -CertificateStoreName <string> -NullEncryption <bool> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ApplicationId <string> (Required: true)
- AsJob <switch> (Required: false)
- CertificateHash <string> (Required: true)
- CertificateStoreName <string> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IpPort <string> (Required: true)
- NullEncryption <bool> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-NetLbfoTeamMember

```powershell
Add-NetLbfoTeamMember [-Name] <WildcardPattern> [-Team] <string> [[-AdministrativeMode] <AdminModes>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AdministrativeMode <AdminModes> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Name <WildcardPattern> (Required: true)
- Team <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-NetLbfoTeamNic

```powershell
Add-NetLbfoTeamNic [-Team] <string> [-VlanID] <uint32> [[-Name] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Name <string> (Required: false)
- Team <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- VlanID <uint32> (Required: true)
- WhatIf <switch> (Required: false)
```

### Add-NetNatExternalAddress

```powershell
Add-NetNatExternalAddress [-NatName] <string> -IPAddress <string> [-PortStart <uint16>] [-PortEnd <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPAddress <string> (Required: true)
- NatName <string> (Required: true)
- PortEnd <uint16> (Required: false)
- PortStart <uint16> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-NetNatStaticMapping

```powershell
Add-NetNatStaticMapping [-NatName] <string> -Protocol <Protocol> -ExternalIPAddress <string> -ExternalPort <uint16> -InternalIPAddress <string> [-RemoteExternalIPAddressPrefix <string>] [-InternalPort <uint16>] [-InternalRoutingDomainId <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ExternalIPAddress <string> (Required: true)
- ExternalPort <uint16> (Required: true)
- InternalIPAddress <string> (Required: true)
- InternalPort <uint16> (Required: false)
- InternalRoutingDomainId <string> (Required: false)
- NatName <string> (Required: true)
- Protocol <Protocol> (Required: true)
- RemoteExternalIPAddressPrefix <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-NetSwitchTeamMember

```powershell
Add-NetSwitchTeamMember [-Name] <string> [-Team] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string> (Required: true)
- Team <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Add-OdbcDsn

```powershell
Add-OdbcDsn [-Name] <string> -DriverName <string> -DsnType <string> [-SetPropertyValue <string[]>] [-PassThru] [-Platform <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DriverName <string> (Required: true)
- DsnType <string> (Required: true)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- Platform <string> (Required: false)
- SetPropertyValue <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Add-PartitionAccessPath

```powershell
Add-PartitionAccessPath [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PartitionAccessPath [[-AccessPath] <string>] -DiskId <string[]> -Offset <uint64[]> [-AssignDriveLetter] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PartitionAccessPath [-DiskNumber] <uint32[]> [-PartitionNumber] <uint32[]> [[-AccessPath] <string>] [-AssignDriveLetter] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PartitionAccessPath [[-AccessPath] <string>] -DriveLetter <char[]> [-AssignDriveLetter] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PartitionAccessPath [[-AccessPath] <string>] -InputObject <CimInstance#MSFT_Partition[]> [-AssignDriveLetter] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AccessPath <string> (Required: false)
- AsJob <switch> (Required: false)
- AssignDriveLetter <switch> (Required: false)
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

### Add-PhysicalDisk

```powershell
Add-PhysicalDisk [-StoragePool] <CimInstance#MSFT_StoragePool> -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> [-Usage <Usage>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PhysicalDisk -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> -VirtualDiskUniqueId <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PhysicalDisk -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> -VirtualDiskName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PhysicalDisk -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> -VirtualDiskFriendlyName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PhysicalDisk [-VirtualDisk] <CimInstance#MSFT_VirtualDisk> -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PhysicalDisk -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> -StoragePoolUniqueId <string> [-Usage <Usage>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PhysicalDisk -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> -StoragePoolName <string> [-Usage <Usage>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PhysicalDisk -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> -StoragePoolFriendlyName <string> [-Usage <Usage>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- Usage <Usage> (Required: false)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: true)
- VirtualDiskFriendlyName <string> (Required: true)
- VirtualDiskName <string> (Required: true)
- VirtualDiskUniqueId <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Add-Printer

```powershell
Add-Printer [-ConnectionName] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-Printer [-Comment <string>] [-Datatype <string>] [-UntilTime <uint32>] [-KeepPrintedJobs] [-Location <string>] [-SeparatorPageFile <string>] [-ComputerName <string>] [-Shared] [-ShareName <string>] [-StartTime <uint32>] [-Name <string>] [-PermissionSDDL <string>] [-PrintProcessor <string>] [-Priority <uint32>] [-Published] [-RenderingMode <RenderingModeEnum>] [-DisableBranchOfficeLogging] [-BranchOfficeOfflineLogSizeMB <uint32>] [-WorkflowPolicy <WorkflowPolicyEnum>] [-DeviceURL <string>] [-DeviceUUID <string>] [-IppURL <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-Printer [-Name] <string> [-DriverName] <string> -PortName <string> [-Comment <string>] [-Datatype <string>] [-UntilTime <uint32>] [-KeepPrintedJobs] [-Location <string>] [-SeparatorPageFile <string>] [-ComputerName <string>] [-Shared] [-ShareName <string>] [-StartTime <uint32>] [-PermissionSDDL <string>] [-PrintProcessor <string>] [-Priority <uint32>] [-Published] [-RenderingMode <RenderingModeEnum>] [-DisableBranchOfficeLogging] [-BranchOfficeOfflineLogSizeMB <uint32>] [-WorkflowPolicy <WorkflowPolicyEnum>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BranchOfficeOfflineLogSizeMB <uint32> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Comment <string> (Required: false)
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionName <string> (Required: true)
- Datatype <string> (Required: false)
- DeviceURL <string> (Required: false)
- DeviceUUID <string> (Required: false)
- DisableBranchOfficeLogging <switch> (Required: false)
- DriverName <string> (Required: true)
- IppURL <string> (Required: false)
- KeepPrintedJobs <switch> (Required: false)
- Location <string> (Required: false)
- Name <string> (Required: false)
- PermissionSDDL <string> (Required: false)
- PortName <string> (Required: true)
- PrintProcessor <string> (Required: false)
- Priority <uint32> (Required: false)
- Published <switch> (Required: false)
- RenderingMode <RenderingModeEnum> (Required: false)
- SeparatorPageFile <string> (Required: false)
- ShareName <string> (Required: false)
- Shared <switch> (Required: false)
- StartTime <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- UntilTime <uint32> (Required: false)
- WhatIf <switch> (Required: false)
- WorkflowPolicy <WorkflowPolicyEnum> (Required: false)
```

### Add-PrinterDriver

```powershell
Add-PrinterDriver [-Name] <string> [[-InfPath] <string>] [-PrinterEnvironment <string>] [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- InfPath <string> (Required: false)
- Name <string> (Required: true)
- PrinterEnvironment <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-PrinterPort

```powershell
Add-PrinterPort [-Name] <string> [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PrinterPort [-Name] <string> [-LprHostAddress] <string> [-LprQueueName] <string> [-ComputerName <string>] [-SNMP <uint32>] [-SNMPCommunity <string>] [-LprByteCounting] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PrinterPort [-Name] <string> [-PrinterHostAddress] <string> [-ComputerName <string>] [-PortNumber <uint32>] [-SNMP <uint32>] [-SNMPCommunity <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-PrinterPort [-HostName] <string> [-PrinterName] <string> [-ComputerName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComputerName <string> (Required: false)
- Confirm <switch> (Required: false)
- HostName <string> (Required: true)
- LprByteCounting <switch> (Required: false)
- LprHostAddress <string> (Required: true)
- LprQueueName <string> (Required: true)
- Name <string> (Required: true)
- PortNumber <uint32> (Required: false)
- PrinterHostAddress <string> (Required: true)
- PrinterName <string> (Required: true)
- SNMP <uint32> (Required: false)
- SNMPCommunity <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-PSSnapin

```powershell
Add-PSSnapin [-Name] <string[]> [-PassThru] [<CommonParameters>]

PARAMETERS:
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
```

### Add-SignerRule

```powershell
Add-SignerRule -FilePath <string> -CertificatePath <string> [-Kernel] [-User] [-Update] [-Supplemental] [-Deny] [<CommonParameters>]

Add-SignerRule -FilePath <string> -CertStorePath <string> [-Kernel] [-User] [-Update] [-Supplemental] [-Deny] [<CommonParameters>]

PARAMETERS:
- CertStorePath <string> (Required: true)
- CertificatePath <string> (Required: true)
- Deny <switch> (Required: false)
- FilePath <string> (Required: true)
- Kernel <switch> (Required: false)
- Supplemental <switch> (Required: false)
- Update <switch> (Required: false)
- User <switch> (Required: false)
```

### Add-StorageFaultDomain

```powershell
Add-StorageFaultDomain [-VirtualDisk] <CimInstance#MSFT_VirtualDisk> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Add-StorageFaultDomain -VirtualDiskFriendlyName <string> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Add-StorageFaultDomain -VirtualDiskName <string> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Add-StorageFaultDomain -VirtualDiskUniqueId <string> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Add-StorageFaultDomain [-StorageTier] <CimInstance#MSFT_StorageTier> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Add-StorageFaultDomain -StorageTierFriendlyName <string> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Add-StorageFaultDomain -StorageTierUniqueId <string> [-StorageFaultDomains <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainFriendlyNames <string[]>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

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

### Add-TargetPortToMaskingSet

```powershell
Add-TargetPortToMaskingSet [-MaskingSetFriendlyName] <string[]> [-TargetPortAddresses <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-TargetPortToMaskingSet -MaskingSetUniqueId <string[]> [-TargetPortAddresses <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-TargetPortToMaskingSet -InputObject <CimInstance#MSFT_MaskingSet[]> [-TargetPortAddresses <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Add-Type

```powershell
Add-Type [-TypeDefinition] <string> [-CodeDomProvider <CodeDomProvider>] [-CompilerParameters <CompilerParameters>] [-Language <Language>] [-ReferencedAssemblies <string[]>] [-OutputAssembly <string>] [-OutputType <OutputAssemblyType>] [-PassThru] [-IgnoreWarnings] [<CommonParameters>]

Add-Type [-Name] <string> [-MemberDefinition] <string[]> [-CodeDomProvider <CodeDomProvider>] [-CompilerParameters <CompilerParameters>] [-Namespace <string>] [-UsingNamespace <string[]>] [-Language <Language>] [-ReferencedAssemblies <string[]>] [-OutputAssembly <string>] [-OutputType <OutputAssemblyType>] [-PassThru] [-IgnoreWarnings] [<CommonParameters>]

Add-Type [-Path] <string[]> [-CompilerParameters <CompilerParameters>] [-ReferencedAssemblies <string[]>] [-OutputAssembly <string>] [-OutputType <OutputAssemblyType>] [-PassThru] [-IgnoreWarnings] [<CommonParameters>]

Add-Type -LiteralPath <string[]> [-CompilerParameters <CompilerParameters>] [-ReferencedAssemblies <string[]>] [-OutputAssembly <string>] [-OutputType <OutputAssemblyType>] [-PassThru] [-IgnoreWarnings] [<CommonParameters>]

Add-Type -AssemblyName <string[]> [-PassThru] [-IgnoreWarnings] [<CommonParameters>]

PARAMETERS:
- AssemblyName <string[]> (Required: true)
- CodeDomProvider <CodeDomProvider> (Required: false)
- CompilerParameters <CompilerParameters> (Required: false)
- IgnoreWarnings <switch> (Required: false)
- Language <Language> (Required: false)
- LiteralPath <string[]> (Required: true)
- MemberDefinition <string[]> (Required: true)
- Name <string> (Required: true)
- Namespace <string> (Required: false)
- OutputAssembly <string> (Required: false)
- OutputType <OutputAssemblyType> (Required: false)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- ReferencedAssemblies <string[]> (Required: false)
- TypeDefinition <string> (Required: true)
- UsingNamespace <string[]> (Required: false)
```

### Add-VirtualDiskToMaskingSet

```powershell
Add-VirtualDiskToMaskingSet [-MaskingSetFriendlyName] <string[]> [-VirtualDisknames <string[]>] [-DeviceNumbers <uint16[]>] [-DeviceAccesses <DeviceAccess[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-VirtualDiskToMaskingSet -MaskingSetUniqueId <string[]> [-VirtualDisknames <string[]>] [-DeviceNumbers <uint16[]>] [-DeviceAccesses <DeviceAccess[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-VirtualDiskToMaskingSet -InputObject <CimInstance#MSFT_MaskingSet[]> [-VirtualDisknames <string[]>] [-DeviceNumbers <uint16[]>] [-DeviceAccesses <DeviceAccess[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DeviceAccesses <DeviceAccess[]> (Required: false)
- DeviceNumbers <uint16[]> (Required: false)
- InputObject <CimInstance#MSFT_MaskingSet[]> (Required: true)
- MaskingSetFriendlyName <string[]> (Required: true)
- MaskingSetUniqueId <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- VirtualDisknames <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-VMDirectVirtualDisk

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

        [Microsoft.HyperV.PowerShell.VMDriveController]
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
        $ControllerLocation,

        # Analog to Path parameter in Add-VMHardDiskDrive
        [String]
        [Parameter(
            ParameterSetName  = 'ByVMName',
            Mandatory         = $false)]
        [Parameter(
            ParameterSetName  = 'ByVM',
            Mandatory         = $false)]
        [Parameter(
            ParameterSetName  = 'ByVMDriveController',
            Mandatory         = $false)]
        [ValidateNotNullOrEmpty()]
        $VirtualDiskUniqueId
    )

    Process
    {
        $CimSessionPassed = $true

        try
        {
            # Get the instance VM(s)
            $vms = @()

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
                    $vms = Get-VM -Name $VMDriveController.VMName `
                                  -CimSession $VMDriveController.CimSession `
                                  -ErrorAction Stop
                }
            }

            foreach ($currentVm in $vms)
            {
                # Get the current CIM session
                $currentCimSession = $currentVm.CimSession

                # Get the Virtual System Management Service
                $vmms = Get-CimInstance -ClassName 'Msvm_VirtualSystemManagementService' `
                                        -CimSession $currentCimSession `
                                        -Namespace $VirtualizationNamespace `
                                        -ErrorAction Stop

                if ($null -eq $vmms)
                {
                    $error = CreateErrorRecord -ErrorId "ObjectNotFound" `
                                               -ErrorMessage "Could not find Virtual System Management Service." `
                                               -ErrorCategory ([System.Management.Automation.ErrorCategory]::ObjectNotFound) `
                                               -Exception $null `
                                               -TargetObject $null

                    $psCmdlet.WriteError($error)
                    return
                }

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

                $virtualSystemSettingData = Get-CimAssociatedInstance -InputObject $computerSystem ` `
                                                                      -CimSession $currentCimSession `
                                                                      -ResultClassName 'Msvm_VirtualSystemSettingData' `
                                                                      -ErrorAction Stop

                $virtualSystemSettingData = $virtualSystemSettingData | Where-Object -FilterScript `
                                            {
                                                $_.VirtualSystemType -eq 'Microsoft:Hyper-V:System:Realized'
                                            }

                # Get associated controller resources
                $controllerResources = Get-CimAssociatedInstance -InputObject $virtualSystemSettingData `
                                                                 -CimSession $currentCimSession `
                                                                 -ResultClassName 'Msvm_ResourceAllocationSettingData' `
                                                                 -ErrorAction Stop

                $controllerResources = $controllerResources | Where-Object -FilterScript `
                                       {
                                           $_.ResourceType -eq 6
                                       }

                # Cache VM controllers for later use
                $controllers = Get-VMScsiController -VM $currentVm `
                                                    -ErrorAction Stop

                $controller = $null

                # Get the controller resource associated with the specified controller
                if ($PSBoundParameters.ContainsKey('VMDriveController'))
                {
                    $controller = $VMDriveController
                }

                # Get the controller resource associated with the specified controller number
                if ($PSBoundParameters.ContainsKey('ControllerNumber'))
                {
                    $controller = $controllers | Where-Object -FilterScript `
                    {
                        $_.ControllerNumber -eq $ControllerNumber
                    }

                    if ($null -eq $controller)
                    {
                        $controllerResources = $null
                    }
                }

                if ($null -ne $controller)
                {
                    $controllerResources = $controllerResources | Where-Object -FilterScript `
                                           {
                                               $_.InstanceID -eq $controller.Id
                                           }
                }

                # Hyper-V enforces a max of 64 locations per controller
                $minlocation = 0
                $maxlocation = 63

                if ($PSBoundParameters.ContainsKey('ControllerLocation')) {

                    $minlocation = $ControllerLocation
                    $maxLocation = $ControllerLocation
                }

                $found = $false

                foreach ($controllerResource in $controllerResources)
                {
                    # Get the associated controller
                    $controller = $controllers | Where-Object -FilterScript `
                    {
                        $_.Id -eq $controllerResource.InstanceID
                    }

                    # Get the VM hdds associated with the current controller
                    $vmHdds = $controller | Get-VMHardDiskDrive -ErrorAction Stop

                    # Get the luns associated with the current controller
                    $lunSettingDataEntries = Get-CimAssociatedInstance -InputObject $controllerResource `
                                                                       -CimSession $currentCimSession `
                                                                       -ResultClassName 'Msvm_VirtualLogicalUnitSettingData' `
                                                                       -ErrorAction Stop

                    # Find the next available location on the current controller
                    for ($location = $minlocation; $location -le $maxLocation; $location++)
                    {
                        $vmHdd = $vmHdds | Where-Object -FilterScript `
                        {
                            $_.ControllerLocation -eq $location
                        }

                        $lunSettingData = $lunSettingDataEntries | Where-Object -FilterScript `
                        {
                            $_.AddressOnParent -eq $location
                        }

                        if ($null -eq $vmHdd -and
                            $null -eq $lunSettingData)
                        {
                            $found = $true
                            break
                        }
                    }

                    # No available locations on the current controller
                    if (-not $found)
                    {
                        continue
                    }

                    # Attach the virtual disk
                    $virtualDisk = Get-VirtualDisk -UniqueId $VirtualDiskUniqueId `
                                                   -CimSession $currentCimSession `
                                                   -ErrorAction Stop

                    $poolId        = $virtualDisk.ObjectId.Split('{}')[5]
                    $virtualDiskId = $virtualDisk.ObjectId.Split('{}')[7]

                    $lunAllocationCapabilities = Get-CimInstance -ClassName 'Msvm_AllocationCapabilities' `
                                                                 -CimSession $currentCimSession `
                                                                 -Namespace $VirtualizationNamespace `
                                                                 -Filter "ResourceType=32768 and ResourceSubType='Microsoft:Hyper-V:Storage Logical Unit'" `
                                                                 -ErrorAction Stop

                    $lunSettingsDefineCapabilities = Get-CimInstance -ClassName 'Msvm_SettingsDefineCapabilities' `
                                                                     -CimSession $currentCimSession `
                                                                     -Namespace $VirtualizationNamespace `
                                                                     -ErrorAction Stop

                    $lunSettingsDefineCapabilities = $lunSettingsDefineCapabilities | Where-Object -FilterScript `
                    {
                        $_.GroupComponent.InstanceID -eq $lunAllocationCapabilities.InstanceID -and
                        $_.ValueRange                -eq 0
                    }

                    $lunSettingData = Get-CimInstance -ClassName Msvm_VirtualLogicalUnitSettingData `
                                                      -CimSession $currentCimSession `
                                                      -Namespace $VirtualizationNamespace `
                                                      -ErrorAction Stop

                    $lunSettingData = $lunSettingData | Where-Object -FilterScript `
                    {
                        $_.InstanceID -eq $lunSettingsDefineCapabilities.PartComponent.InstanceID
                    }

                    $lunSettingData.Parent               = "\\$($currentVm.ComputerName)\$($VirtualizationNamespace):Msvm_ResourceAllocationSettingData.InstanceID=`"$($controllerResource.InstanceID.Replace('\', '\\'))`""
                    $lunSettingData.AddressOnParent      = $location
                    $lunSettingData.Connection           = "{$poolId}{$virtualDiskId}"
                    $lunSettingData.StorageSubsystemType = 'space'

                    $cimSerializer = [Microsoft.Management.Infrastructure.Serialization.CimSerializer]::Create()

                    $embeddedInstanceBuffer = $cimSerializer.Serialize($lunSettingData,
                                                                    [Microsoft.Management.Infrastructure.Serialization.InstanceSerializationOptions]::None)

                    $embeddedInstance = [System.Text.Encoding]::Unicode.GetString($embeddedInstanceBuffer)

                    $result = Invoke-CimMethod -InputObject $vmms `
                                               -MethodName 'AddResourceSettings' `
                                               -CimSession $currentCimSession `
                                               -Arguments @{ 'AffectedConfiguration' = $virtualSystemSettingData; 'ResourceSettings' = @($embeddedInstance) } `
                                               -ErrorAction Stop

                    if ($result.ReturnValue -ne 0 -and
                        $result.ReturnValue -ne 4096)
                    {
                        $error = CreateErrorRecord -ErrorId "InvalidOperation" `
                                                   -ErrorMessage "Operation failed with error code $($result.ReturnValue)" `
                                                   -ErrorCategory ([System.Management.Automation.ErrorCategory]::InvalidOperation) `
                                                   -Exception $null `
                                                   -TargetObject $null

                        $psCmdlet.WriteError($error)
                        return
                    }

                    # Wait for the job to complete
                    if ($result.ReturnValue -eq 4096)
                    {
                        $job = $null

                        while ($true)
                        {
                            $job = Get-CimInstance -ClassName Msvm_ConcreteJob `
                                                   -CimSession $currentCimSession `
                                                   -Namespace $VirtualizationNamespace `
                                                   -Filter "InstanceID='$($result.Job.InstanceID)'" `
                                                   -ErrorAction Stop

                            if ($null -eq $job -or
                                $job.JobState -gt 4)
                            {
                                break
                            }

                            Start-Sleep -Seconds 1
                        }

                        if ($null -ne $job -and
                            $job.ErrorCode -ne 0)
                        {
                            $error = CreateErrorRecord -ErrorId "InvalidOperation" `
                                                       -ErrorMessage $job.ErrorDescription `
                                                       -ErrorCategory ([System.Management.Automation.ErrorCategory]::InvalidOperation) `
                                                       -Exception $null `
                                                       -TargetObject $null

                            $psCmdlet.WriteError($error)
                            return
                        }
                    }

                    break
                }

                if (-not $found)
                {
                    $error = CreateErrorRecord -ErrorId "ObjectNotFound" `
                                               -ErrorMessage "The operation could not be completed because no available locations were found on the disk controller." `
                                               -ErrorCategory ([System.Management.Automation.ErrorCategory]::ObjectNotFound) `
                                               -Exception $null `
                                               -TargetObject $null

                    $psCmdlet.WriteError($error)
                    return
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

### Add-VpnConnection

```powershell
Add-VpnConnection [-Name] <string> [-ServerAddress] <string> [-SplitTunneling] [-RememberCredential] [-PlugInApplicationID] <string> -CustomConfiguration <xml> [-Force] [-PassThru] [-ServerList <CimInstance#VpnServerAddress[]>] [-DnsSuffix <string>] [-IdleDisconnectSeconds <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Add-VpnConnection [-Name] <string> [-ServerAddress] <string> [[-TunnelType] <string>] [[-EncryptionLevel] <string>] [[-AuthenticationMethod] <string[]>] [-SplitTunneling] [-AllUserConnection] [[-L2tpPsk] <string>] [-RememberCredential] [-UseWinlogonCredential] [[-EapConfigXmlStream] <xml>] [-Force] [-PassThru] [-ServerList <CimInstance#VpnServerAddress[]>] [-DnsSuffix <string>] [-IdleDisconnectSeconds <uint32>] [-MachineCertificateIssuerFilter <X509Certificate2>] [-MachineCertificateEKUFilter <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllUserConnection <switch> (Required: false)
- AsJob <switch> (Required: false)
- AuthenticationMethod <string[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- CustomConfiguration <xml> (Required: true)
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
- PlugInApplicationID <string> (Required: true)
- RememberCredential <switch> (Required: false)
- ServerAddress <string> (Required: true)
- ServerList <CimInstance#VpnServerAddress[]> (Required: false)
- SplitTunneling <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- TunnelType <string> (Required: false)
- UseWinlogonCredential <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-VpnConnectionRoute

```powershell
Add-VpnConnectionRoute [-ConnectionName] <string> [-DestinationPrefix] <string> [[-RouteMetric] <uint32>] [-AllUserConnection] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllUserConnection <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionName <string> (Required: true)
- DestinationPrefix <string> (Required: true)
- PassThru <switch> (Required: false)
- RouteMetric <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-VpnConnectionTriggerApplication

```powershell
Add-VpnConnectionTriggerApplication [-ConnectionName] <string> [-ApplicationID] <string[]> [-PassThru] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Add-VpnConnectionTriggerDnsConfiguration

```powershell
Add-VpnConnectionTriggerDnsConfiguration [-ConnectionName] <string> [-DnsSuffix] <string> [[-DnsIPAddress] <string[]>] [-PassThru] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionName <string> (Required: true)
- DnsIPAddress <string[]> (Required: false)
- DnsSuffix <string> (Required: true)
- Force <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Add-VpnConnectionTriggerTrustedNetwork

```powershell
Add-VpnConnectionTriggerTrustedNetwork [-ConnectionName] <string> [-DnsSuffix] <string[]> [-PassThru] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Add-WindowsCapability

```powershell
Add-WindowsCapability -Name <string> -Online [-LimitAccess] [-Source <string[]>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Add-WindowsCapability -Name <string> -Path <string> [-LimitAccess] [-Source <string[]>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LimitAccess <switch> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Name <string> (Required: true)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- Source <string[]> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Add-WindowsDriver

```powershell
Add-WindowsDriver -Path <string> [-Recurse] [-ForceUnsigned] [-Driver <string>] [-BasicDriverObject <BasicDriverObject>] [-AdvancedDriverObject <AdvancedDriverObject>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- AdvancedDriverObject <AdvancedDriverObject> (Required: false)
- BasicDriverObject <BasicDriverObject> (Required: false)
- Driver <string> (Required: false)
- ForceUnsigned <switch> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Path <string> (Required: true)
- Recurse <switch> (Required: false)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Add-WindowsImage

```powershell
Add-WindowsImage -ImagePath <string> -CapturePath <string> [-ConfigFilePath <string>] [-Description <string>] [-Name <string>] [-CheckIntegrity] [-NoRpFix] [-Setbootable] [-Verify] [-WIMBoot] [-SupportEa] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CapturePath <string> (Required: true)
- CheckIntegrity <switch> (Required: false)
- ConfigFilePath <string> (Required: false)
- Description <string> (Required: false)
- ImagePath <string> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Name <string> (Required: false)
- NoRpFix <switch> (Required: false)
- ScratchDirectory <string> (Required: false)
- Setbootable <switch> (Required: false)
- SupportEa <switch> (Required: false)
- Verify <switch> (Required: false)
- WIMBoot <switch> (Required: false)
```

### Add-WindowsPackage

```powershell
Add-WindowsPackage -PackagePath <string> -Online [-IgnoreCheck] [-PreventPending] [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Add-WindowsPackage -PackagePath <string> -Path <string> [-IgnoreCheck] [-PreventPending] [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- IgnoreCheck <switch> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- NoRestart <switch> (Required: false)
- Online <switch> (Required: true)
- PackagePath <string> (Required: true)
- Path <string> (Required: true)
- PreventPending <switch> (Required: false)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### AfterAll

```powershell
SYNOPSIS:
Defines a series of steps to perform at the end of every It block within
the current Context or Describe block.

DESCRIPTION:
BeforeEach, AfterEach, BeforeAll, and AfterAll are unique in that they apply
to the entire Context or Describe block, regardless of the order of the
statements in the Context or Describe.

```

### AfterEach

```powershell
SYNOPSIS:
Defines a series of steps to perform at the end of every It block within
the current Context or Describe block.

DESCRIPTION:
BeforeEach, AfterEach, BeforeAll, and AfterAll are unique in that they apply
to the entire Context or Describe block, regardless of the order of the
statements in the Context or Describe.  For a full description of this
behavior, as well as how multiple BeforeEach or AfterEach blocks interact
with each other, please refer to the about_BeforeEach_AfterEach help file.

```

### Assert-MockCalled

```powershell
SYNOPSIS:
Checks if a Mocked command has been called a certain number of times
and throws an exception if it has not.

DESCRIPTION:
This command verifies that a mocked command has been called a certain number
of times.  If the call history of the mocked command does not match the parameters
passed to Assert-MockCalled, Assert-MockCalled will throw an exception.

PARAMETERS:

- CommandName <String> (Required: true)
- Times <Int32> (Required: false)
- ParameterFilter <ScriptBlock> (Required: false)
- ExclusiveFilter <ScriptBlock> (Required: true)
- ModuleName <String> (Required: false)
- Scope <String> (Required: false)
- Exactly <SwitchParameter> (Required: false)

```

### Assert-VerifiableMocks

```powershell
SYNOPSIS:
Checks if any Verifiable Mock has not been invoked. If so, this will throw an exception.

DESCRIPTION:
This can be used in tandem with the -Verifiable switch of the Mock
function. Mock can be used to mock the behavior of an existing command
and optionally take a -Verifiable switch. When Assert-VerifiableMocks
is called, it checks to see if any Mock marked Verifiable has not been
invoked. If any mocks have been found that specified -Verifiable and
have not been invoked, an exception will be thrown.

```

## B

### Backup-BitLockerKeyProtector

```powershell
Backup-BitLockerKeyProtector [-MountPoint] <string[]> [-KeyProtectorId] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- KeyProtectorId <string> (Required: true)
- MountPoint <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### BackupToAAD-BitLockerKeyProtector

```powershell
BackupToAAD-BitLockerKeyProtector [-MountPoint] <string[]> [-KeyProtectorId] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- KeyProtectorId <string> (Required: true)
- MountPoint <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### BeforeAll

```powershell
SYNOPSIS:
Defines a series of steps to perform at the beginning of the current Context
or Describe block.

DESCRIPTION:
BeforeEach, AfterEach, BeforeAll, and AfterAll are unique in that they apply
to the entire Context or Describe block, regardless of the order of the
statements in the Context or Describe.

```

### BeforeEach

```powershell
SYNOPSIS:
Defines a series of steps to perform at the beginning of every It block within
the current Context or Describe block.

DESCRIPTION:
BeforeEach, AfterEach, BeforeAll, and AfterAll are unique in that they apply
to the entire Context or Describe block, regardless of the order of the
statements in the Context or Describe.  For a full description of this
behavior, as well as how multiple BeforeEach or AfterEach blocks interact
with each other, please refer to the about_BeforeEach_AfterEach help file.

```

### Block-FileShareAccess

```powershell
Block-FileShareAccess -Name <string[]> -AccountName <string[]> [-FileServer <CimInstance#MSFT_FileServer>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Block-FileShareAccess -UniqueId <string[]> -AccountName <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Block-FileShareAccess -InputObject <CimInstance#MSFT_FileShare[]> -AccountName <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Block-SmbClientAccessToServer

```powershell
Block-SmbClientAccessToServer [-Name] <string[]> -IdentifierType <IdentifierType> -Identifier <string> [-Description <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Block-SmbClientAccessToServer -InputObject <CimInstance#MSFT_SmbServerCertificateMapping[]> -IdentifierType <IdentifierType> -Identifier <string> [-Description <string>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Block-SmbShareAccess

```powershell
Block-SmbShareAccess [-Name] <string[]> [[-ScopeName] <string[]>] [-SmbInstance <SmbInstance>] [-AccountName <string[]>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Block-SmbShareAccess -InputObject <CimInstance#MSFT_SMBShare[]> [-AccountName <string[]>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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

## C

### Checkpoint-Computer

```powershell
Checkpoint-Computer [-Description] <string> [[-RestorePointType] <string>] [<CommonParameters>]

PARAMETERS:
- Description <string> (Required: true)
- RestorePointType <string> (Required: false)
```

### Clear-AssignedAccess

```powershell
Clear-AssignedAccess [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Clear-BCCache

```powershell
Clear-BCCache [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Clear-BitLockerAutoUnlock

```powershell
Clear-BitLockerAutoUnlock [<CommonParameters>]

```

### Clear-Content

```powershell
Clear-Content [-Path] <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Force] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [-Stream <string>] [<CommonParameters>]

Clear-Content -LiteralPath <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Force] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [-Stream <string>] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- Stream <string> (Required: false)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Clear-Disk

```powershell
Clear-Disk [-Number] <uint32[]> [-RemoveData] [-RemoveOEM] [-Sanitize] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Clear-Disk -UniqueId <string[]> [-RemoveData] [-RemoveOEM] [-Sanitize] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Clear-Disk [-FriendlyName <string[]>] [-RemoveData] [-RemoveOEM] [-Sanitize] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Clear-Disk -Path <string[]> [-RemoveData] [-RemoveOEM] [-Sanitize] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Clear-Disk -InputObject <CimInstance#MSFT_Disk[]> [-RemoveData] [-RemoveOEM] [-Sanitize] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: false)
- InputObject <CimInstance#MSFT_Disk[]> (Required: true)
- Number <uint32[]> (Required: true)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- RemoveData <switch> (Required: false)
- RemoveOEM <switch> (Required: false)
- Sanitize <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Clear-DnsClientCache

```powershell
Clear-DnsClientCache [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Clear-EventLog

```powershell
Clear-EventLog [-LogName] <string[]> [[-ComputerName] <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- LogName <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Clear-FileStorageTier

```powershell
Clear-FileStorageTier -FilePath <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FilePath <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Clear-History

```powershell
Clear-History [[-Id] <int[]>] [[-Count] <int>] [-Newest] [-WhatIf] [-Confirm] [<CommonParameters>]

Clear-History [[-Count] <int>] [-CommandLine <string[]>] [-Newest] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CommandLine <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Count <int> (Required: false)
- Id <int[]> (Required: false)
- Newest <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Clear-Host

```powershell
DESCRIPTION:


```

### Clear-Item

```powershell
Clear-Item [-Path] <string[]> [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Clear-Item -LiteralPath <string[]> [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Clear-ItemProperty

```powershell
Clear-ItemProperty [-Path] <string[]> [-Name] <string> [-PassThru] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Clear-ItemProperty [-Name] <string> -LiteralPath <string[]> [-PassThru] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Clear-KdsCache

```powershell
Clear-KdsCache [-CacheOwnerSid <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CacheOwnerSid <string> (Required: false)
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Clear-PcsvDeviceLog

```powershell
Clear-PcsvDeviceLog [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Clear-PcsvDeviceLog [-TargetAddress] <string> [-Credential] <pscredential> [-ManagementProtocol] <ManagementProtocol> [[-Port] <uint16>] [-Authentication <Authentication>] [-UseSSL] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-TimeoutSec <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Clear-PcsvDeviceLog -InputObject <CimInstance#MSFT_PCSVDevice[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Clear-RecycleBin

```powershell
Clear-RecycleBin [[-DriveLetter] <string[]>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- DriveLetter <string[]> (Required: false)
- Force <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Clear-ReFSDedupSchedule

```powershell
Clear-ReFSDedupSchedule [-Volume] <string> [<CommonParameters>]

PARAMETERS:
- Volume <string> (Required: true)
```

### Clear-ReFSDedupScrubSchedule

```powershell
Clear-ReFSDedupScrubSchedule [-Volume] <string> [<CommonParameters>]

PARAMETERS:
- Volume <string> (Required: true)
```

### Clear-StorageBusDisk

```powershell
Clear-StorageBusDisk -Guid <string> [<CommonParameters>]

Clear-StorageBusDisk -Number <uint16> [<CommonParameters>]

Clear-StorageBusDisk -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> [<CommonParameters>]

PARAMETERS:
- Guid <string> (Required: true)
- Number <uint16> (Required: true)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
```

### Clear-StorageDiagnosticInfo

```powershell
Clear-StorageDiagnosticInfo [-StorageSubSystemFriendlyName] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Clear-StorageDiagnosticInfo -StorageSubSystemUniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Clear-StorageDiagnosticInfo -StorageSubSystemName <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Clear-StorageDiagnosticInfo -InputObject <CimInstance#MSFT_StorageSubSystem[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

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

### Clear-Tpm

```powershell
Clear-Tpm [[-OwnerAuthorization] <string>] [-UsePPI] [<CommonParameters>]

Clear-Tpm -File <string> [<CommonParameters>]

PARAMETERS:
- File <string> (Required: true)
- OwnerAuthorization <string> (Required: false)
- UsePPI <switch> (Required: false)
```

### Clear-UevAppxPackage

```powershell
Clear-UevAppxPackage [-PackageFamilyName] <string[]> [-CurrentComputerUser] [-WhatIf] [-Confirm] [<CommonParameters>]

Clear-UevAppxPackage [-PackageFamilyName] <string[]> -Computer [-WhatIf] [-Confirm] [<CommonParameters>]

Clear-UevAppxPackage -Computer -All [-WhatIf] [-Confirm] [<CommonParameters>]

Clear-UevAppxPackage -All [-CurrentComputerUser] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: true)
- Computer <switch> (Required: true)
- Confirm <switch> (Required: false)
- CurrentComputerUser <switch> (Required: false)
- PackageFamilyName <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Clear-UevConfiguration

```powershell
Clear-UevConfiguration [-CurrentComputerUser] [-MaxPackageSizeInBytes] [-SettingsStoragePath] [-SyncProviderPingEnabled] [-SyncTimeoutInMilliseconds] [-SyncMethod] [-SyncEnabled] [-SyncOverMeteredNetwork] [-SyncOverMeteredNetworkWhenRoaming] [-SettingsImportNotifyEnabled] [-SettingsImportNotifyDelayInSeconds] [-DontSyncWindows8AppSettings] [-WaitForSyncTimeoutInMilliseconds] [-WaitForSyncOnApplicationStart] [-WaitForSyncOnLogon] [-SyncUnlistedWindows8Apps] [-VdiCollectionName] [-WhatIf] [-Confirm] [<CommonParameters>]

Clear-UevConfiguration [-Computer] [-MaxPackageSizeInBytes] [-SettingsStoragePath] [-SettingsTemplateCatalogPath] [-SyncProviderPingEnabled] [-SyncTimeoutInMilliseconds] [-SyncMethod] [-SyncEnabled] [-SyncOverMeteredNetwork] [-SyncOverMeteredNetworkWhenRoaming] [-SettingsImportNotifyEnabled] [-SettingsImportNotifyDelayInSeconds] [-ContactITUrl] [-ContactITDescription] [-TrayIconEnabled] [-FirstUseNotificationEnabled] [-DontSyncWindows8AppSettings] [-WaitForSyncTimeoutInMilliseconds] [-WaitForSyncOnApplicationStart] [-WaitForSyncOnLogon] [-SyncUnlistedWindows8Apps] [-VdiCollectionName] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Computer <switch> (Required: false)
- Confirm <switch> (Required: false)
- ContactITDescription <switch> (Required: false)
- ContactITUrl <switch> (Required: false)
- CurrentComputerUser <switch> (Required: false)
- DontSyncWindows8AppSettings <switch> (Required: false)
- FirstUseNotificationEnabled <switch> (Required: false)
- MaxPackageSizeInBytes <switch> (Required: false)
- SettingsImportNotifyDelayInSeconds <switch> (Required: false)
- SettingsImportNotifyEnabled <switch> (Required: false)
- SettingsStoragePath <switch> (Required: false)
- SettingsTemplateCatalogPath <switch> (Required: false)
- SyncEnabled <switch> (Required: false)
- SyncMethod <switch> (Required: false)
- SyncOverMeteredNetwork <switch> (Required: false)
- SyncOverMeteredNetworkWhenRoaming <switch> (Required: false)
- SyncProviderPingEnabled <switch> (Required: false)
- SyncTimeoutInMilliseconds <switch> (Required: false)
- SyncUnlistedWindows8Apps <switch> (Required: false)
- TrayIconEnabled <switch> (Required: false)
- VdiCollectionName <switch> (Required: false)
- WaitForSyncOnApplicationStart <switch> (Required: false)
- WaitForSyncOnLogon <switch> (Required: false)
- WaitForSyncTimeoutInMilliseconds <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Clear-Variable

```powershell
Clear-Variable [-Name] <string[]> [-Include <string[]>] [-Exclude <string[]>] [-Force] [-PassThru] [-Scope <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Exclude <string[]> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Scope <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Clear-WindowsCorruptMountPoint

```powershell
Clear-WindowsCorruptMountPoint [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- ScratchDirectory <string> (Required: false)
```

### Close-SmbOpenFile

```powershell
Close-SmbOpenFile [[-FileId] <uint64[]>] [-SessionId <uint64[]>] [-ClientComputerName <string[]>] [-ClientUserName <string[]>] [-ScopeName <string[]>] [-ClusterNodeName <string[]>] [-SmbInstance <SmbInstance>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Close-SmbOpenFile -InputObject <CimInstance#MSFT_SMBOpenFile[]> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClientComputerName <string[]> (Required: false)
- ClientUserName <string[]> (Required: false)
- ClusterNodeName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- FileId <uint64[]> (Required: false)
- Force <switch> (Required: false)
- InputObject <CimInstance#MSFT_SMBOpenFile[]> (Required: true)
- PassThru <switch> (Required: false)
- ScopeName <string[]> (Required: false)
- SessionId <uint64[]> (Required: false)
- SmbInstance <SmbInstance> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Close-SmbSession

```powershell
Close-SmbSession [[-SessionId] <uint64[]>] [-ClientComputerName <string[]>] [-ClientUserName <string[]>] [-ScopeName <string[]>] [-ClusterNodeName <string[]>] [-SmbInstance <SmbInstance>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Close-SmbSession -InputObject <CimInstance#MSFT_SMBSession[]> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClientComputerName <string[]> (Required: false)
- ClientUserName <string[]> (Required: false)
- ClusterNodeName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- InputObject <CimInstance#MSFT_SMBSession[]> (Required: true)
- PassThru <switch> (Required: false)
- ScopeName <string[]> (Required: false)
- SessionId <uint64[]> (Required: false)
- SmbInstance <SmbInstance> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Compare-Object

```powershell
Compare-Object [-ReferenceObject] <psobject[]> [-DifferenceObject] <psobject[]> [-SyncWindow <int>] [-Property <Object[]>] [-ExcludeDifferent] [-IncludeEqual] [-PassThru] [-Culture <string>] [-CaseSensitive] [<CommonParameters>]

PARAMETERS:
- CaseSensitive <switch> (Required: false)
- Culture <string> (Required: false)
- DifferenceObject <psobject[]> (Required: true)
- ExcludeDifferent <switch> (Required: false)
- IncludeEqual <switch> (Required: false)
- PassThru <switch> (Required: false)
- Property <Object[]> (Required: false)
- ReferenceObject <psobject[]> (Required: true)
- SyncWindow <int> (Required: false)
```

### Complete-BitsTransfer

```powershell
Complete-BitsTransfer [-BitsJob] <BitsJob[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- BitsJob <BitsJob[]> (Required: true)
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Complete-DtcDiagnosticTransaction

```powershell
Complete-DtcDiagnosticTransaction [-Transaction] <DtcDiagnosticTransaction> [<CommonParameters>]

PARAMETERS:
- Transaction <DtcDiagnosticTransaction> (Required: true)
```

### Complete-Transaction

```powershell
Complete-Transaction [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Compress-Archive

```powershell
Compress-Archive [-Path] <string[]> [-DestinationPath] <string> [-CompressionLevel <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Compress-Archive [-Path] <string[]> [-DestinationPath] <string> -Update [-CompressionLevel <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Compress-Archive [-Path] <string[]> [-DestinationPath] <string> -Force [-CompressionLevel <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Compress-Archive [-DestinationPath] <string> -LiteralPath <string[]> -Update [-CompressionLevel <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Compress-Archive [-DestinationPath] <string> -LiteralPath <string[]> -Force [-CompressionLevel <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Compress-Archive [-DestinationPath] <string> -LiteralPath <string[]> [-CompressionLevel <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CompressionLevel <string> (Required: false)
- Confirm <switch> (Required: false)
- DestinationPath <string> (Required: true)
- Force <switch> (Required: true)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- Update <switch> (Required: true)
- WhatIf <switch> (Required: false)
```

### Configuration

```powershell
Configuration [[-ResourceModuleTuplesToImport] <List[Tuple[string[],ModuleSpecification[],version]]>] [[-OutputPath] <Object>] [[-Name] <Object>] [[-Body] <scriptblock>] [[-ArgsToBody] <hashtable>] [[-ConfigurationData] <hashtable>] [[-InstanceName] <string>] [<CommonParameters>]

PARAMETERS:
- ArgsToBody <hashtable> (Required: false)
- Body <scriptblock> (Required: false)
- ConfigurationData <hashtable> (Required: false)
- InstanceName <string> (Required: false)
- Name <Object> (Required: false)
- OutputPath <Object> (Required: false)
- ResourceModuleTuplesToImport <List[Tuple[string[],ModuleSpecification[],version]]> (Required: false)
```

### Confirm-SecureBootUEFI

```powershell
Confirm-SecureBootUEFI [<CommonParameters>]

```

### Connect-IscsiTarget

```powershell
Connect-IscsiTarget -NodeAddress <string> [-TargetPortalAddress <string>] [-TargetPortalPortNumber <uint16>] [-InitiatorPortalAddress <string>] [-IsDataDigest <bool>] [-IsHeaderDigest <bool>] [-IsPersistent <bool>] [-ReportToPnP <bool>] [-AuthenticationType <string>] [-IsMultipathEnabled <bool>] [-InitiatorInstanceName <string>] [-ChapUsername <string>] [-ChapSecret <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Connect-IscsiTarget -InputObject <ciminstance[]> [-TargetPortalAddress <string>] [-TargetPortalPortNumber <uint16>] [-InitiatorPortalAddress <string>] [-IsDataDigest <bool>] [-IsHeaderDigest <bool>] [-ReportToPnP <bool>] [-AuthenticationType <string>] [-IsMultipathEnabled <bool>] [-InitiatorInstanceName <string>] [-ChapUsername <string>] [-ChapSecret <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AuthenticationType <string> (Required: false)
- ChapSecret <string> (Required: false)
- ChapUsername <string> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InitiatorInstanceName <string> (Required: false)
- InitiatorPortalAddress <string> (Required: false)
- InputObject <ciminstance[]> (Required: true)
- IsDataDigest <bool> (Required: false)
- IsHeaderDigest <bool> (Required: false)
- IsMultipathEnabled <bool> (Required: false)
- IsPersistent <bool> (Required: false)
- NodeAddress <string> (Required: true)
- ReportToPnP <bool> (Required: false)
- TargetPortalAddress <string> (Required: false)
- TargetPortalPortNumber <uint16> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Connect-PSSession

```powershell
Connect-PSSession -Name <string[]> [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Connect-PSSession [-Session] <PSSession[]> [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Connect-PSSession [-ComputerName] <string[]> [-ApplicationName <string>] [-ConfigurationName <string>] [-Name <string[]>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-Port <int>] [-UseSSL] [-SessionOption <PSSessionOption>] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Connect-PSSession -ComputerName <string[]> -InstanceId <guid[]> [-ApplicationName <string>] [-ConfigurationName <string>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-Port <int>] [-UseSSL] [-SessionOption <PSSessionOption>] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Connect-PSSession [-ConnectionUri] <uri[]> -InstanceId <guid[]> [-ConfigurationName <string>] [-AllowRedirection] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-SessionOption <PSSessionOption>] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Connect-PSSession [-ConnectionUri] <uri[]> [-ConfigurationName <string>] [-AllowRedirection] [-Name <string[]>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-SessionOption <PSSessionOption>] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Connect-PSSession -InstanceId <guid[]> [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Connect-PSSession [-Id] <int[]> [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowRedirection <switch> (Required: false)
- ApplicationName <string> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string[]> (Required: true)
- ConfigurationName <string> (Required: false)
- Confirm <switch> (Required: false)
- ConnectionUri <uri[]> (Required: true)
- Credential <pscredential> (Required: false)
- Id <int[]> (Required: true)
- InstanceId <guid[]> (Required: true)
- Name <string[]> (Required: true)
- Port <int> (Required: false)
- Session <PSSession[]> (Required: true)
- SessionOption <PSSessionOption> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseSSL <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Connect-VirtualDisk

```powershell
Connect-VirtualDisk [-FriendlyName] <string[]> [-StorageNodeName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Connect-VirtualDisk -UniqueId <string[]> [-StorageNodeName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Connect-VirtualDisk -Name <string[]> [-StorageNodeName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Connect-VirtualDisk -InputObject <CimInstance#MSFT_VirtualDisk[]> [-StorageNodeName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_VirtualDisk[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- StorageNodeName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
```

### Connect-WSMan

```powershell
Connect-WSMan [[-ComputerName] <string>] [-ApplicationName <string>] [-OptionSet <hashtable>] [-Port <int>] [-SessionOption <SessionOption>] [-UseSSL] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

Connect-WSMan [-ConnectionURI <uri>] [-OptionSet <hashtable>] [-Port <int>] [-SessionOption <SessionOption>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

PARAMETERS:
- ApplicationName <string> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string> (Required: false)
- ConnectionURI <uri> (Required: false)
- Credential <pscredential> (Required: false)
- OptionSet <hashtable> (Required: false)
- Port <int> (Required: false)
- SessionOption <SessionOption> (Required: false)
- UseSSL <switch> (Required: false)
```

### Context

```powershell
SYNOPSIS:
Provides logical grouping of It blocks within a single Describe block. Any Mocks defined
inside a Context are removed at the end of the Context scope, as are any files or folders
added to the TestDrive during the Context block's execution. Any BeforeEach or AfterEach
blocks defined inside a Context also only apply to tests within that Context .

PARAMETERS:

- Name <String> (Required: true)
- Fixture <ScriptBlock> (Required: false)

```

### ConvertFrom-CIPolicy

```powershell
ConvertFrom-CIPolicy [-XmlFilePath] <string> [-BinaryFilePath] <string> [<CommonParameters>]

PARAMETERS:
- BinaryFilePath <string> (Required: true)
- XmlFilePath <string> (Required: true)
```

### ConvertFrom-Csv

```powershell
ConvertFrom-Csv [-InputObject] <psobject[]> [[-Delimiter] <char>] [-Header <string[]>] [<CommonParameters>]

ConvertFrom-Csv [-InputObject] <psobject[]> -UseCulture [-Header <string[]>] [<CommonParameters>]

PARAMETERS:
- Delimiter <char> (Required: false)
- Header <string[]> (Required: false)
- InputObject <psobject[]> (Required: true)
- UseCulture <switch> (Required: true)
```

### ConvertFrom-Json

```powershell
ConvertFrom-Json [-InputObject] <string> [<CommonParameters>]

PARAMETERS:
- InputObject <string> (Required: true)
```

### ConvertFrom-SddlString

```powershell
ConvertFrom-SddlString [-Sddl] <string> [-Type <Object>] [<CommonParameters>]

PARAMETERS:
- Sddl <string> (Required: true)
- Type <Object> (Required: false)
```

### ConvertFrom-SecureString

```powershell
ConvertFrom-SecureString [-SecureString] <securestring> [[-SecureKey] <securestring>] [<CommonParameters>]

ConvertFrom-SecureString [-SecureString] <securestring> [-Key <byte[]>] [<CommonParameters>]

PARAMETERS:
- Key <byte[]> (Required: false)
- SecureKey <securestring> (Required: false)
- SecureString <securestring> (Required: true)
```

### ConvertFrom-String

```powershell
ConvertFrom-String [-InputObject] <string> [-Delimiter <string>] [-PropertyNames <string[]>] [<CommonParameters>]

ConvertFrom-String [-InputObject] <string> [-TemplateFile <string[]>] [-TemplateContent <string[]>] [-IncludeExtent] [-UpdateTemplate] [<CommonParameters>]

PARAMETERS:
- Delimiter <string> (Required: false)
- IncludeExtent <switch> (Required: false)
- InputObject <string> (Required: true)
- PropertyNames <string[]> (Required: false)
- TemplateContent <string[]> (Required: false)
- TemplateFile <string[]> (Required: false)
- UpdateTemplate <switch> (Required: false)
```

### ConvertFrom-StringData

```powershell
ConvertFrom-StringData [-StringData] <string> [<CommonParameters>]

PARAMETERS:
- StringData <string> (Required: true)
```

### Convert-Path

```powershell
Convert-Path [-Path] <string[]> [-UseTransaction] [<CommonParameters>]

Convert-Path -LiteralPath <string[]> [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- UseTransaction <switch> (Required: false)
```

### Convert-PhysicalDisk

```powershell
Convert-PhysicalDisk [-FriendlyName] <string> -Format <Format> -StoragePoolFriendlyName <string> -VirtualDiskFriendlyName <string> [-StoragePoolVersion <PoolVersion>] [-StoragePoolMetadataLength <uint64>] [-StoragePoolMinimumAllocationSize <uint64>] [-VirtualDiskProvisioningType <ProvisioningType>] [-VirtualDiskAllocationUnitSize <uint64>] [-VirtualDiskResiliencySettingName <ResiliencyType>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Convert-PhysicalDisk -UniqueId <string> -Format <Format> -StoragePoolFriendlyName <string> -VirtualDiskFriendlyName <string> [-StoragePoolVersion <PoolVersion>] [-StoragePoolMetadataLength <uint64>] [-StoragePoolMinimumAllocationSize <uint64>] [-VirtualDiskProvisioningType <ProvisioningType>] [-VirtualDiskAllocationUnitSize <uint64>] [-VirtualDiskResiliencySettingName <ResiliencyType>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Convert-PhysicalDisk -InputObject <CimInstance#MSFT_PhysicalDisk[]> -Format <Format> -StoragePoolFriendlyName <string> -VirtualDiskFriendlyName <string> [-StoragePoolVersion <PoolVersion>] [-StoragePoolMetadataLength <uint64>] [-StoragePoolMinimumAllocationSize <uint64>] [-VirtualDiskProvisioningType <ProvisioningType>] [-VirtualDiskAllocationUnitSize <uint64>] [-VirtualDiskResiliencySettingName <ResiliencyType>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- Format <Format> (Required: true)
- FriendlyName <string> (Required: true)
- InputObject <CimInstance#MSFT_PhysicalDisk[]> (Required: true)
- StoragePoolFriendlyName <string> (Required: true)
- StoragePoolMetadataLength <uint64> (Required: false)
- StoragePoolMinimumAllocationSize <uint64> (Required: false)
- StoragePoolVersion <PoolVersion> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
- VirtualDiskAllocationUnitSize <uint64> (Required: false)
- VirtualDiskFriendlyName <string> (Required: true)
- VirtualDiskProvisioningType <ProvisioningType> (Required: false)
- VirtualDiskResiliencySettingName <ResiliencyType> (Required: false)
```

### Convert-String

```powershell
Convert-String -InputObject <string> [-Example <List[psobject]>] [<CommonParameters>]

PARAMETERS:
- Example <List[psobject]> (Required: false)
- InputObject <string> (Required: true)
```

### ConvertTo-Csv

```powershell
ConvertTo-Csv [-InputObject] <psobject> [[-Delimiter] <char>] [-NoTypeInformation] [<CommonParameters>]

ConvertTo-Csv [-InputObject] <psobject> [-UseCulture] [-NoTypeInformation] [<CommonParameters>]

PARAMETERS:
- Delimiter <char> (Required: false)
- InputObject <psobject> (Required: true)
- NoTypeInformation <switch> (Required: false)
- UseCulture <switch> (Required: false)
```

### ConvertTo-Html

```powershell
ConvertTo-Html [[-Property] <Object[]>] [[-Head] <string[]>] [[-Title] <string>] [[-Body] <string[]>] [-InputObject <psobject>] [-As <string>] [-CssUri <uri>] [-PostContent <string[]>] [-PreContent <string[]>] [<CommonParameters>]

ConvertTo-Html [[-Property] <Object[]>] [-InputObject <psobject>] [-As <string>] [-Fragment] [-PostContent <string[]>] [-PreContent <string[]>] [<CommonParameters>]

PARAMETERS:
- As <string> (Required: false)
- Body <string[]> (Required: false)
- CssUri <uri> (Required: false)
- Fragment <switch> (Required: false)
- Head <string[]> (Required: false)
- InputObject <psobject> (Required: false)
- PostContent <string[]> (Required: false)
- PreContent <string[]> (Required: false)
- Property <Object[]> (Required: false)
- Title <string> (Required: false)
```

### ConvertTo-Json

```powershell
ConvertTo-Json [-InputObject] <Object> [-Depth <int>] [-Compress] [<CommonParameters>]

PARAMETERS:
- Compress <switch> (Required: false)
- Depth <int> (Required: false)
- InputObject <Object> (Required: true)
```

### ConvertTo-ProcessMitigationPolicy

```powershell
SYNOPSIS:
Converts an mitigation policy file formats.

DESCRIPTION:
Converts an EMET policy file or pinning rule file to a new Windows 10 format.

PARAMETERS:

- EMETFilePath <String> (Required: true)
- OutputFilePath <String> (Required: true)

```

### ConvertTo-SecureStrin

```powershell
ConvertTo-SecureString [-String] <string> [[-SecureKey] <securestring>] [<CommonParameters>]

ConvertTo-SecureString [-String] <string> [-AsPlainText] [-Force] [<CommonParameters>]

ConvertTo-SecureString [-String] <string> [-Key <byte[]>] [<CommonParameters>]

PARAMETERS:
- AsPlainText <switch> (Required: false)
- Force <switch> (Required: false)
- Key <byte[]> (Required: false)
- SecureKey <securestring> (Required: false)
- String <string> (Required: true)
```

### ConvertTo-TpmOwnerAuth

```powershell
ConvertTo-TpmOwnerAuth [-PassPhrase] <string> [<CommonParameters>]

PARAMETERS:
- PassPhrase <string> (Required: true)
```

### ConvertTo-Xml

```powershell
ConvertTo-Xml [-InputObject] <psobject> [-Depth <int>] [-NoTypeInformation] [-As <string>] [<CommonParameters>]

PARAMETERS:
- As <string> (Required: false)
- Depth <int> (Required: false)
- InputObject <psobject> (Required: true)
- NoTypeInformation <switch> (Required: false)
```

### Copy-BcdEntry

```powershell
Copy-BcdEntry [-SourceEntryId] <string> -TargetStore <BcdStoreInfo[]> [-Description <string>] [-SourceStore <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-BcdEntry [-SourceEntry] <BcdEntryInfo> -TargetStore <BcdStoreInfo[]> [-Description <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- Force <switch> (Required: false)
- SourceEntry <BcdEntryInfo> (Required: true)
- SourceEntryId <string> (Required: true)
- SourceStore <BcdStoreInfo> (Required: false)
- TargetStore <BcdStoreInfo[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Copy-Item

```powershell
Copy-Item [-Path] <string[]> [[-Destination] <string>] [-Container] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Recurse] [-PassThru] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [-FromSession <PSSession>] [-ToSession <PSSession>] [<CommonParameters>]

Copy-Item [[-Destination] <string>] -LiteralPath <string[]> [-Container] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Recurse] [-PassThru] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [-FromSession <PSSession>] [-ToSession <PSSession>] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Container <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Destination <string> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- FromSession <PSSession> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- Recurse <switch> (Required: false)
- ToSession <PSSession> (Required: false)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Copy-ItemProperty

```powershell
Copy-ItemProperty [-Path] <string[]> [-Destination] <string> [-Name] <string> [-PassThru] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Copy-ItemProperty [-Destination] <string> [-Name] <string> -LiteralPath <string[]> [-PassThru] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Destination <string> (Required: true)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Copy-NetFirewallRule

```powershell
Copy-NetFirewallRule [-All] [-PolicyStore <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetFirewallRule [-Name] <string[]> [-PolicyStore <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetFirewallRule -DisplayName <string[]> [-PolicyStore <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetFirewallRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Direction <Direction[]>] [-Action <Action[]>] [-EdgeTraversalPolicy <EdgeTraversal[]>] [-LooseSourceMapping <bool[]>] [-LocalOnlyMapping <bool[]>] [-Owner <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyAppId <string[]>] [-PackageFamilyName <string[]>] [-PolicyStore <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetFirewallRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetFirewallRule -AssociatedNetFirewallApplicationFilter <CimInstance#MSFT_NetApplicationFilter> [-PolicyStore <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetFirewallRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> [-PolicyStore <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetFirewallRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> [-PolicyStore <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetFirewallRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> [-PolicyStore <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetFirewallRule -AssociatedNetFirewallSecurityFilter <CimInstance#MSFT_NetNetworkLayerSecurityFilter> [-PolicyStore <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetFirewallRule -AssociatedNetFirewallServiceFilter <CimInstance#MSFT_NetServiceFilter> [-PolicyStore <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetFirewallRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetFirewallRule -InputObject <CimInstance#MSFT_NetFirewallRule[]> [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- NewGPOSession <string> (Required: false)
- NewName <string> (Required: false)
- NewPolicyStore <string> (Required: false)
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

### Copy-NetIPsecMainModeCryptoSet

```powershell
Copy-NetIPsecMainModeCryptoSet [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeCryptoSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeCryptoSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeCryptoSet [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-MaxMinutes <uint32[]>] [-MaxSessions <uint32[]>] [-ForceDiffieHellman <bool[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeCryptoSet -AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeCryptoSet -InputObject <CimInstance#MSFT_NetIKEMMCryptoSet[]> [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- NewGPOSession <string> (Required: false)
- NewName <string> (Required: false)
- NewPolicyStore <string> (Required: false)
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

### Copy-NetIPsecMainModeRule

```powershell
Copy-NetIPsecMainModeRule [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeRule [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-MainModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeRule -AssociatedNetIPsecMainModeCryptoSet <CimInstance#MSFT_NetIKEMMCryptoSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecMainModeRule -InputObject <CimInstance#MSFT_NetMainModeRule[]> [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- NewGPOSession <string> (Required: false)
- NewName <string> (Required: false)
- NewPolicyStore <string> (Required: false)
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

### Copy-NetIPsecPhase1AuthSet

```powershell
Copy-NetIPsecPhase1AuthSet [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecPhase1AuthSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecPhase1AuthSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecPhase1AuthSet [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecPhase1AuthSet -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecPhase1AuthSet -AssociatedNetIPsecMainModeRule <CimInstance#MSFT_NetMainModeRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecPhase1AuthSet -InputObject <CimInstance#MSFT_NetIKEP1AuthSet[]> [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- NewGPOSession <string> (Required: false)
- NewName <string> (Required: false)
- NewPolicyStore <string> (Required: false)
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

### Copy-NetIPsecPhase2AuthSet

```powershell
Copy-NetIPsecPhase2AuthSet [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecPhase2AuthSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecPhase2AuthSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecPhase2AuthSet [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecPhase2AuthSet -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecPhase2AuthSet -InputObject <CimInstance#MSFT_NetIKEP2AuthSet[]> [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- NewGPOSession <string> (Required: false)
- NewName <string> (Required: false)
- NewPolicyStore <string> (Required: false)
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

### Copy-NetIPsecQuickModeCryptoSet

```powershell
Copy-NetIPsecQuickModeCryptoSet [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecQuickModeCryptoSet [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecQuickModeCryptoSet -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecQuickModeCryptoSet [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-PerfectForwardSecrecyGroup <DiffieHellmanGroup[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecQuickModeCryptoSet -AssociatedNetIPsecRule <CimInstance#MSFT_NetConSecRule> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecQuickModeCryptoSet -InputObject <CimInstance#MSFT_NetIKEQMCryptoSet[]> [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- NewGPOSession <string> (Required: false)
- NewName <string> (Required: false)
- NewPolicyStore <string> (Required: false)
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

### Copy-NetIPsecRule

```powershell
Copy-NetIPsecRule [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecRule [-IPsecRuleName] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Mode <IPsecMode[]>] [-InboundSecurity <SecurityPolicy[]>] [-OutboundSecurity <SecurityPolicy[]>] [-QuickModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-Phase2AuthSet <string[]>] [-KeyModule <KeyModule[]>] [-AllowWatchKey <bool[]>] [-AllowSetKey <bool[]>] [-RemoteTunnelHostname <string[]>] [-ForwardPathLifetime <uint32[]>] [-EncryptedTunnelBypass <bool[]>] [-RequireAuthorization <bool[]>] [-User <string[]>] [-Machine <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecRule -AssociatedNetIPsecPhase2AuthSet <CimInstance#MSFT_NetIKEP2AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecRule -AssociatedNetIPsecQuickModeCryptoSet <CimInstance#MSFT_NetIKEQMCryptoSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Copy-NetIPsecRule -InputObject <CimInstance#MSFT_NetConSecRule[]> [-NewPolicyStore <string>] [-NewGPOSession <string>] [-NewName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- NewGPOSession <string> (Required: false)
- NewName <string> (Required: false)
- NewPolicyStore <string> (Required: false)
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

### Copy-UserInternationalSettingsToSystem

```powershell
Copy-UserInternationalSettingsToSystem [-NewUser] <bool> [<CommonParameters>]

PARAMETERS:
- NewUser <bool> (Required: true)
- WelcomeScreen <bool> (Required: true)
```
