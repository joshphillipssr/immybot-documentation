# Metascript Functions D through F

## D

### Debug-FileShare

```powershell
Debug-FileShare [-Name] <string[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Debug-FileShare -UniqueId <string[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Debug-FileShare -InputObject <CimInstance#MSFT_FileShare> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- InputObject <CimInstance#MSFT_FileShare> (Required: true)
- Name <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
```

### Debug-Job

```powershell
Debug-Job [-Job] <Job> [-WhatIf] [-Confirm] [<CommonParameters>]

Debug-Job [-Name] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Debug-Job [-Id] <int> [-WhatIf] [-Confirm] [<CommonParameters>]

Debug-Job [-InstanceId] <guid> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Id <int> (Required: true)
- InstanceId <guid> (Required: true)
- Job <Job> (Required: true)
- Name <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Debug-MMAppPrelaunch

```powershell
Debug-MMAppPrelaunch -PackageFullName <string> -PackageRelativeAppId <string> [-DisableDebugMode] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DisableDebugMode <switch> (Required: false)
- PackageFullName <string> (Required: true)
- PackageRelativeAppId <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Debug-Process

```powershell
Debug-Process [-Name] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Debug-Process [-Id] <int[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Debug-Process -InputObject <Process[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Id <int[]> (Required: true)
- InputObject <Process[]> (Required: true)
- Name <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Debug-Runspace

```powershell
Debug-Runspace [-Runspace] <runspace> [-WhatIf] [-Confirm] [<CommonParameters>]

Debug-Runspace [-Name] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Debug-Runspace [-Id] <int> [-WhatIf] [-Confirm] [<CommonParameters>]

Debug-Runspace [-InstanceId] <guid> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Id <int> (Required: true)
- InstanceId <guid> (Required: true)
- Name <string> (Required: true)
- Runspace <runspace> (Required: true)
- WhatIf <switch> (Required: false)
```

### Debug-StorageSubSystem

```powershell
Debug-StorageSubSystem [-StorageSubSystemFriendlyName] <string[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Debug-StorageSubSystem -StorageSubSystemUniqueId <string[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Debug-StorageSubSystem -StorageSubSystemName <string[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Debug-StorageSubSystem -InputObject <CimInstance#MSFT_StorageSubSystem> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- InputObject <CimInstance#MSFT_StorageSubSystem> (Required: true)
- StorageSubSystemFriendlyName <string[]> (Required: true)
- StorageSubSystemName <string[]> (Required: true)
- StorageSubSystemUniqueId <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Debug-Volume

```powershell
Debug-Volume [-DriveLetter] <char[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Debug-Volume -ObjectId <string[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Debug-Volume -Path <string[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Debug-Volume -FileSystemLabel <string[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Debug-Volume -InputObject <CimInstance#MSFT_Volume> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- DriveLetter <char[]> (Required: true)
- FileSystemLabel <string[]> (Required: true)
- InputObject <CimInstance#MSFT_Volume> (Required: true)
- ObjectId <string[]> (Required: true)
- Path <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Delete-DeliveryOptimizationCache

```powershell
DESCRIPTION:


PARAMETERS:
- FileId <String> (Required: false)
- IncludePinnedFiles <SwitchParameter> (Required: false)
- Force <SwitchParameter> (Required: false)
```

### Describe

```powershell
SYNOPSIS:
Creates a logical group of tests.  All Mocks and TestDrive contents
defined within a Describe block are scoped to that Describe; they
will no longer be present when the Describe block exits.  A Describe
block may contain any number of Context and It blocks.

PARAMETERS:

- Name <String> (Required: true)
- Tags <Object> (Required: false)
- Fixture <ScriptBlock> (Required: false)

```

### Disable-AppBackgroundTaskDiagnosticLog

```powershell
Disable-AppBackgroundTaskDiagnosticLog [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-Appv

```powershell
Disable-Appv [<CommonParameters>]

```

### Disable-AppvClientConnectionGroup

```powershell
Disable-AppvClientConnectionGroup [-GroupId] <guid> [-VersionId] <guid> [-Global] [-UserSID <string>] [<CommonParameters>]

Disable-AppvClientConnectionGroup [-Name] <string> [-Global] [-UserSID <string>] [<CommonParameters>]

Disable-AppvClientConnectionGroup [-ConnectionGroup] <AppvClientConnectionGroup> [-Global] [-UserSID <string>] [<CommonParameters>]

PARAMETERS:
- ConnectionGroup <AppvClientConnectionGroup> (Required: true)
- Global <switch> (Required: false)
- GroupId <guid> (Required: true)
- Name <string> (Required: true)
- UserSID <string> (Required: false)
- VersionId <guid> (Required: true)
```

### Disable-BC

```powershell
Disable-BC [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-BcdElementBootDebug

```powershell
Disable-BcdElementBootDebug [-Id] <string> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-BcdElementBootDebug [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-BcdElementBootEms

```powershell
Disable-BcdElementBootEms [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-BcdElementBootEms [-Id] <string> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-BcdElementBootEms [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-BcdElementDebug

```powershell
Disable-BcdElementDebug [[-Id] <string>] [-Store <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-BcdElementDebug [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: false)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-BcdElementEms

```powershell
Disable-BcdElementEms [-Id] <string> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-BcdElementEms [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-BcdElementEventLogging

```powershell
Disable-BcdElementEventLogging [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-BcdElementEventLogging [-Id] <string> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-BcdElementEventLogging [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-BcdElementHypervisorDebug

```powershell
Disable-BcdElementHypervisorDebug [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-BcdElementHypervisorDebug [-Id] <string> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-BcdElementHypervisorDebug [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-BCDowngrading

```powershell
Disable-BCDowngrading [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-BCServeOnBattery

```powershell
Disable-BCServeOnBattery [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-BitLocker

```powershell
Disable-BitLocker [-MountPoint] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- MountPoint <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Disable-BitLockerAutoUnlock

```powershell
Disable-BitLockerAutoUnlock [-MountPoint] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- MountPoint <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Disable-ComputerRestore

```powershell
Disable-ComputerRestore [-Drive] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Drive <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Disable-DAManualEntryPointSelection

```powershell
Disable-DAManualEntryPointSelection [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-DeliveryOptimizationVerboseLogs

```powershell
DESCRIPTION:


```

### Disable-DscDebug

```powershell
Disable-DscDebug [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-JobTrigger

```powershell
Disable-JobTrigger [-InputObject] <ScheduledJobTrigger[]> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- InputObject <ScheduledJobTrigger[]> (Required: true)
- PassThru <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-LocalUser

```powershell
Disable-LocalUser [-InputObject] <LocalUser[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-LocalUser [-Name] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-LocalUser [-SID] <SecurityIdentifier[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- InputObject <LocalUser[]> (Required: true)
- Name <string[]> (Required: true)
- SID <SecurityIdentifier[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Disable-MMAgent

```powershell
Disable-MMAgent [-ApplicationLaunchPrefetching] [-ApplicationPreLaunch] [-OperationAPI] [-PageCombining] [-MemoryCompression] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- ApplicationLaunchPrefetching <switch> (Required: false)
- ApplicationPreLaunch <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- MemoryCompression <switch> (Required: false)
- OperationAPI <switch> (Required: false)
- PageCombining <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Disable-NetAdapter

```powershell
Disable-NetAdapter [-Name] <string[]> [-IncludeHidden] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapter -InterfaceDescription <string[]> [-IncludeHidden] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapter -InputObject <CimInstance#MSFT_NetAdapter[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Disable-NetAdapterBinding

```powershell
Disable-NetAdapterBinding [-Name] <string[]> [-ComponentID <string[]>] [-DisplayName <string[]>] [-IncludeHidden] [-AllBindings] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterBinding -InterfaceDescription <string[]> [-ComponentID <string[]>] [-DisplayName <string[]>] [-IncludeHidden] [-AllBindings] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterBinding -InputObject <CimInstance#MSFT_NetAdapterBindingSettingData[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllBindings <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComponentID <string[]> (Required: false)
- Confirm <switch> (Required: false)
- DisplayName <string[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterBindingSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterChecksumOffload

```powershell
Disable-NetAdapterChecksumOffload [-Name] <string[]> [-IncludeHidden] [-IpIPv4] [-TcpIPv4] [-TcpIPv6] [-UdpIPv4] [-UdpIPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterChecksumOffload -InterfaceDescription <string[]> [-IncludeHidden] [-IpIPv4] [-TcpIPv4] [-TcpIPv6] [-UdpIPv4] [-UdpIPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterChecksumOffload -InputObject <CimInstance#MSFT_NetAdapterChecksumOffloadSettingData[]> [-IpIPv4] [-TcpIPv4] [-TcpIPv6] [-UdpIPv4] [-UdpIPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterChecksumOffloadSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- IpIPv4 <switch> (Required: false)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- TcpIPv4 <switch> (Required: false)
- TcpIPv6 <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UdpIPv4 <switch> (Required: false)
- UdpIPv6 <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterEncapsulatedPacketTaskOffload

```powershell
Disable-NetAdapterEncapsulatedPacketTaskOffload [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-EncapsulationType <EncapsulationType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterEncapsulatedPacketTaskOffload -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-EncapsulationType <EncapsulationType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterEncapsulatedPacketTaskOffload -InputObject <CimInstance#MSFT_NetAdapterEncapsulatedPacketTaskOffloadSettingData[]> [-NoRestart] [-PassThru] [-EncapsulationType <EncapsulationType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EncapsulationType <EncapsulationType> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterEncapsulatedPacketTaskOffloadSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterIPsecOffload

```powershell
Disable-NetAdapterIPsecOffload [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterIPsecOffload -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterIPsecOffload -InputObject <CimInstance#MSFT_NetAdapterIPsecOffloadV2SettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterIPsecOffloadV2SettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterLso

```powershell
Disable-NetAdapterLso [-Name] <string[]> [-IncludeHidden] [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterLso -InterfaceDescription <string[]> [-IncludeHidden] [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterLso -InputObject <CimInstance#MSFT_NetAdapterLsoSettingData[]> [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPv4 <switch> (Required: false)
- IPv6 <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterLsoSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterPacketDirect

```powershell
Disable-NetAdapterPacketDirect [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterPacketDirect -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterPacketDirect -InputObject <CimInstance#MSFT_NetAdapterPacketDirectSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterPacketDirectSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterPowerManagement

```powershell
Disable-NetAdapterPowerManagement [-Name] <string[]> [-IncludeHidden] [-ArpOffload] [-D0PacketCoalescing] [-DeviceSleepOnDisconnect] [-NSOffload] [-RsnRekeyOffload] [-SelectiveSuspend] [-WakeOnMagicPacket] [-WakeOnPattern] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterPowerManagement -InterfaceDescription <string[]> [-IncludeHidden] [-ArpOffload] [-D0PacketCoalescing] [-DeviceSleepOnDisconnect] [-NSOffload] [-RsnRekeyOffload] [-SelectiveSuspend] [-WakeOnMagicPacket] [-WakeOnPattern] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterPowerManagement -InputObject <CimInstance#MSFT_NetAdapterPowerManagementSettingData[]> [-ArpOffload] [-D0PacketCoalescing] [-DeviceSleepOnDisconnect] [-NSOffload] [-RsnRekeyOffload] [-SelectiveSuspend] [-WakeOnMagicPacket] [-WakeOnPattern] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ArpOffload <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- D0PacketCoalescing <switch> (Required: false)
- DeviceSleepOnDisconnect <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterPowerManagementSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- NSOffload <switch> (Required: false)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- RsnRekeyOffload <switch> (Required: false)
- SelectiveSuspend <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WakeOnMagicPacket <switch> (Required: false)
- WakeOnPattern <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterQos

```powershell
Disable-NetAdapterQos [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterQos -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterQos -InputObject <CimInstance#MSFT_NetAdapterQosSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterQosSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterRdma

```powershell
Disable-NetAdapterRdma [[-Name] <string[]>] [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterRdma -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterRdma -InputObject <CimInstance#MSFT_NetAdapterRdmaSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterRdmaSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterRsc

```powershell
Disable-NetAdapterRsc [-Name] <string[]> [-IncludeHidden] [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterRsc -InterfaceDescription <string[]> [-IncludeHidden] [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterRsc -InputObject <CimInstance#MSFT_NetAdapterRscSettingData[]> [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPv4 <switch> (Required: false)
- IPv6 <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterRscSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterRss

```powershell
Disable-NetAdapterRss [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterRss -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterRss -InputObject <CimInstance#MSFT_NetAdapterRssSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterRssSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterSriov

```powershell
Disable-NetAdapterSriov [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterSriov -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterSriov -InputObject <CimInstance#MSFT_NetAdapterSriovSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterSriovSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterUro

```powershell
Disable-NetAdapterUro [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterUro -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterUro -InputObject <CimInstance#MSFT_NetAdapterUroSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterUroSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterUso

```powershell
Disable-NetAdapterUso [-Name] <string[]> [-IncludeHidden] [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterUso -InterfaceDescription <string[]> [-IncludeHidden] [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterUso -InputObject <CimInstance#MSFT_NetAdapterUsoSettingData[]> [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPv4 <switch> (Required: false)
- IPv6 <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterUsoSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetAdapterVmq

```powershell
Disable-NetAdapterVmq [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterVmq -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetAdapterVmq -InputObject <CimInstance#MSFT_NetAdapterVmqSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterVmqSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetDnsTransitionConfiguration

```powershell
Disable-NetDnsTransitionConfiguration [-Adapter <CimInstance#MSFT_NetAdapter>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetDnsTransitionConfiguration -InputObject <CimInstance#MSFT_NetDnsTransitionConfiguration[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Adapter <CimInstance#MSFT_NetAdapter> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetDnsTransitionConfiguration[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetFirewallHyperVRule

```powershell
Disable-NetFirewallHyperVRule [-All] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallHyperVRule [-Name] <string[]> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallHyperVRule -DisplayName <string[]> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallHyperVRule [-RulePriority <uint16[]>] [-Direction <Direction[]>] [-VMCreatorId <string[]>] [-Protocol <string[]>] [-Action <Action[]>] [-Enabled <Enabled[]>] [-EnforcementStatus <HyperVRuleStatus[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallHyperVRule -InputObject <CimInstance#MSFT_NetFirewallHyperVRule[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Disable-NetFirewallRule

```powershell
Disable-NetFirewallRule [-All] [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallRule [-Name] <string[]> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallRule -DisplayName <string[]> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Direction <Direction[]>] [-Action <Action[]>] [-EdgeTraversalPolicy <EdgeTraversal[]>] [-LooseSourceMapping <bool[]>] [-LocalOnlyMapping <bool[]>] [-Owner <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyAppId <string[]>] [-PackageFamilyName <string[]>] [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallRule -AssociatedNetFirewallApplicationFilter <CimInstance#MSFT_NetApplicationFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallRule -AssociatedNetFirewallSecurityFilter <CimInstance#MSFT_NetNetworkLayerSecurityFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallRule -AssociatedNetFirewallServiceFilter <CimInstance#MSFT_NetServiceFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetFirewallRule -InputObject <CimInstance#MSFT_NetFirewallRule[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Disable-NetIPHttpsProfile

```powershell
Disable-NetIPHttpsProfile [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-NetIPsecMainModeRule

```powershell
Disable-NetIPsecMainModeRule [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecMainModeRule [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecMainModeRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecMainModeRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-MainModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecMainModeRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecMainModeRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecMainModeRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecMainModeRule -AssociatedNetIPsecMainModeCryptoSet <CimInstance#MSFT_NetIKEMMCryptoSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecMainModeRule -InputObject <CimInstance#MSFT_NetMainModeRule[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Disable-NetIPsecRule

```powershell
Disable-NetIPsecRule [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecRule [-IPsecRuleName] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Mode <IPsecMode[]>] [-InboundSecurity <SecurityPolicy[]>] [-OutboundSecurity <SecurityPolicy[]>] [-QuickModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-Phase2AuthSet <string[]>] [-KeyModule <KeyModule[]>] [-AllowWatchKey <bool[]>] [-AllowSetKey <bool[]>] [-RemoteTunnelHostname <string[]>] [-ForwardPathLifetime <uint32[]>] [-EncryptedTunnelBypass <bool[]>] [-RequireAuthorization <bool[]>] [-User <string[]>] [-Machine <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecRule -AssociatedNetIPsecPhase2AuthSet <CimInstance#MSFT_NetIKEP2AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecRule -AssociatedNetIPsecQuickModeCryptoSet <CimInstance#MSFT_NetIKEQMCryptoSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetIPsecRule -InputObject <CimInstance#MSFT_NetConSecRule[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Disable-NetNatTransitionConfiguration

```powershell
Disable-NetNatTransitionConfiguration [-InstanceName <string[]>] [-PolicyStore <PolicyStore[]>] [-Adapter <CimInstance#MSFT_NetAdapter>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetNatTransitionConfiguration -InputObject <CimInstance#MSFT_NetNatTransitionConfiguration[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Disable-NetworkSwitchEthernetPort

```powershell
Disable-NetworkSwitchEthernetPort -CimSession <CimSession> -DeviceID <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetworkSwitchEthernetPort -CimSession <CimSession> -PortNumber <int> [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetworkSwitchEthernetPort -CimSession <CimSession> -InputObject <ciminstance[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- DeviceID <string> (Required: true)
- InputObject <ciminstance[]> (Required: true)
- PortNumber <int> (Required: true)
- WhatIf <switch> (Required: false)
```

### Disable-NetworkSwitchFeature

```powershell
Disable-NetworkSwitchFeature -CimSession <CimSession> -FeatureName <int> [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetworkSwitchFeature -CimSession <CimSession> -Name <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetworkSwitchFeature -CimSession <CimSession> -InstanceId <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetworkSwitchFeature -CimSession <CimSession> -InputObject <ciminstance[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- FeatureName <int> (Required: true)
- InputObject <ciminstance[]> (Required: true)
- InstanceId <string> (Required: true)
- Name <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Disable-NetworkSwitchVlan

```powershell
Disable-NetworkSwitchVlan -CimSession <CimSession> -InstanceId <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetworkSwitchVlan -CimSession <CimSession> -Name <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-NetworkSwitchVlan -CimSession <CimSession> -VlanID <int> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- InstanceId <string> (Required: true)
- Name <string> (Required: true)
- VlanID <int> (Required: true)
- WhatIf <switch> (Required: false)
```

### Disable-OdbcPerfCounter

```powershell
Disable-OdbcPerfCounter [-InputObject] <CimInstance#MSFT_OdbcPerfCounter[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-OdbcPerfCounter [[-Platform] <string>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_OdbcPerfCounter[]> (Required: true)
- PassThru <switch> (Required: false)
- Platform <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-PhysicalDiskIdentification

```powershell
Disable-PhysicalDiskIdentification [-FriendlyName] <string> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Disable-PhysicalDiskIdentification -UniqueId <string> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Disable-PhysicalDiskIdentification -InputObject <CimInstance#MSFT_PhysicalDisk[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <CimInstance#MSFT_PhysicalDisk[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
```

### Disable-PnpDevice

```powershell
Disable-PnpDevice [-InstanceId] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-PnpDevice -InputObject <CimInstance#Win32_PnPEntity[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#Win32_PnPEntity[]> (Required: true)
- InstanceId <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-PSBreakpoint

```powershell
Disable-PSBreakpoint [-Breakpoint] <Breakpoint[]> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-PSBreakpoint [-Id] <int[]> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Breakpoint <Breakpoint[]> (Required: true)
- Confirm <switch> (Required: false)
- Id <int[]> (Required: true)
- PassThru <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-PSRemoting

```powershell
Disable-PSRemoting [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-PSSessionConfiguration

```powershell
Disable-PSSessionConfiguration [[-Name] <string[]>] [-Force] [-NoServiceRestart] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Name <string[]> (Required: false)
- NoServiceRestart <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-PSTrace

```powershell
Disable-PSTrace [-AnalyticOnly]

PARAMETERS:
- AnalyticOnly <switch> (Required: false)
```

### Disable-PSWSManCombinedTrace

```powershell
Disable-PSWSManCombinedTrace

```

### Disable-ReFSDedup

```powershell
Disable-ReFSDedup [-Volume] <string> [<CommonParameters>]

PARAMETERS:
- Volume <string> (Required: true)
```

### Disable-RunspaceDebug

```powershell
Disable-RunspaceDebug [[-RunspaceName] <string[]>] [<CommonParameters>]

Disable-RunspaceDebug [-Runspace] <runspace[]> [<CommonParameters>]

Disable-RunspaceDebug [-RunspaceId] <int[]> [<CommonParameters>]

Disable-RunspaceDebug [-RunspaceInstanceId] <guid[]> [<CommonParameters>]

Disable-RunspaceDebug [[-ProcessName] <string>] [[-AppDomainName] <string[]>] [<CommonParameters>]

PARAMETERS:
- AppDomainName <string[]> (Required: false)
- ProcessName <string> (Required: false)
- Runspace <runspace[]> (Required: true)
- RunspaceId <int[]> (Required: true)
- RunspaceInstanceId <guid[]> (Required: true)
- RunspaceName <string[]> (Required: false)
```

### Disable-ScheduledJob

```powershell
Disable-ScheduledJob [-InputObject] <ScheduledJobDefinition> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-ScheduledJob [-Id] <int> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-ScheduledJob [-Name] <string> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Id <int> (Required: true)
- InputObject <ScheduledJobDefinition> (Required: true)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-ScheduledTask

```powershell
Disable-ScheduledTask [-TaskName] <string> [[-TaskPath] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Disable-ScheduledTask [-InputObject] <CimInstance#MSFT_ScheduledTask> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_ScheduledTask> (Required: true)
- TaskName <string> (Required: true)
- TaskPath <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Disable-SmbDelegation

```powershell
Disable-SmbDelegation [[-SmbClient] <string>] [-SmbServer] <string> [-Force] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- SmbClient <string> (Required: false)
- SmbServer <string> (Required: true)
```

### Disable-StorageBusCache

```powershell
Disable-StorageBusCache [[-Timeout] <int>] [-Force] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- Timeout <int> (Required: false)
```

### Disable-StorageBusDisk

```powershell
Disable-StorageBusDisk -Guid <string> [<CommonParameters>]

Disable-StorageBusDisk -Number <uint16> [<CommonParameters>]

Disable-StorageBusDisk -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> [<CommonParameters>]

PARAMETERS:
- Guid <string> (Required: true)
- Number <uint16> (Required: true)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
```

### Disable-StorageDataCollection

```powershell
Disable-StorageDataCollection -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> -StorageDataCollectionType <StorageDataCollectionType> [<CommonParameters>]

Disable-StorageDataCollection -DeviceGuid <string> -StorageDataCollectionType <StorageDataCollectionType> [<CommonParameters>]

Disable-StorageDataCollection -DeviceNumber <string> -StorageDataCollectionType <StorageDataCollectionType> [<CommonParameters>]

PARAMETERS:
- DeviceGuid <string> (Required: true)
- DeviceNumber <string> (Required: true)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
- StorageDataCollectionType <StorageDataCollectionType> (Required: true)
```

### Disable-StorageEnclosureIdentification

```powershell
Disable-StorageEnclosureIdentification [-FriendlyName] <string[]> [-SlotNumbers <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Disable-StorageEnclosureIdentification -UniqueId <string[]> [-SlotNumbers <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Disable-StorageEnclosureIdentification -InputObject <CimInstance#MSFT_StorageEnclosure[]> [-SlotNumbers <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_StorageEnclosure[]> (Required: true)
- PassThru <switch> (Required: false)
- SlotNumbers <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
```

### Disable-StorageEnclosurePower

```powershell
Disable-StorageEnclosurePower [-FriendlyName] <string[]> [-SlotNumbers <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Disable-StorageEnclosurePower -UniqueId <string[]> [-SlotNumbers <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Disable-StorageEnclosurePower -InputObject <CimInstance#MSFT_StorageEnclosure[]> [-SlotNumbers <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_StorageEnclosure[]> (Required: true)
- PassThru <switch> (Required: false)
- SlotNumbers <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
```

### Disable-StorageHighAvailability

```powershell
Disable-StorageHighAvailability [-DiskNumber] <uint32[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Disable-StorageHighAvailability -DiskUniqueId <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Disable-StorageHighAvailability -DiskFriendlyName <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Disable-StorageHighAvailability -DiskPath <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Disable-StorageHighAvailability -InputObject <CimInstance#MSFT_Disk[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DiskFriendlyName <string[]> (Required: true)
- DiskNumber <uint32[]> (Required: true)
- DiskPath <string[]> (Required: true)
- DiskUniqueId <string[]> (Required: true)
- InputObject <CimInstance#MSFT_Disk[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Disable-StorageMaintenanceMode

```powershell
Disable-StorageMaintenanceMode -InputObject <CimInstance#MSFT_StorageFaultDomain> [-Model <string>] [-Manufacturer <string>] [-CimSession <CimSession>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- InputObject <CimInstance#MSFT_StorageFaultDomain> (Required: true)
- Manufacturer <string> (Required: false)
- Model <string> (Required: false)
```

### Disable-TlsCipherSuite

```powershell
Disable-TlsCipherSuite [-Name] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Name <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Disable-TlsEccCurve

```powershell
Disable-TlsEccCurve [-Name] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Name <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Disable-TlsSessionTicketKey

```powershell
Disable-TlsSessionTicketKey [-ServiceAccountName] <NTAccount> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- ServiceAccountName <NTAccount> (Required: true)
- WhatIf <switch> (Required: false)
```

### Disable-TpmAutoProvisioning

```powershell
Disable-TpmAutoProvisioning [-OnlyForNextRestart] [<CommonParameters>]

PARAMETERS:
- OnlyForNextRestart <switch> (Required: false)
```

### Disable-Uev

```powershell
Disable-Uev [<CommonParameters>]

```

### Disable-UevAppxPackage

```powershell
Disable-UevAppxPackage [-PackageFamilyName] <string[]> [-CurrentComputerUser] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-UevAppxPackage [-PackageFamilyName] <string[]> -Computer [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Computer <switch> (Required: true)
- Confirm <switch> (Required: false)
- CurrentComputerUser <switch> (Required: false)
- PackageFamilyName <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Disable-UevTemplate

```powershell
Disable-UevTemplate [-ID] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- ID <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Disable-WdacBidTrace

```powershell
Disable-WdacBidTrace [-InputObject] <CimInstance#MSFT_WdacBidTrace[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-WdacBidTrace [-Path] <string> [-PassThru] [-Platform <string>] [-ProcessId <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-WdacBidTrace -Folder <string> [-PassThru] [-Platform <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Disable-WdacBidTrace -IncludeAllApplications [-PassThru] [-Platform <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Folder <string> (Required: true)
- IncludeAllApplications <switch> (Required: true)
- InputObject <CimInstance#MSFT_WdacBidTrace[]> (Required: true)
- PassThru <switch> (Required: false)
- Path <string> (Required: true)
- Platform <string> (Required: false)
- ProcessId <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disable-WindowsErrorReporting

```powershell
Disable-WindowsErrorReporting [<CommonParameters>]

```

### Disable-WindowsOptionalFeature

```powershell
Disable-WindowsOptionalFeature -FeatureName <string[]> -Online [-PackageName <string>] [-Remove] [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Disable-WindowsOptionalFeature -FeatureName <string[]> -Path <string> [-PackageName <string>] [-Remove] [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- FeatureName <string[]> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- NoRestart <switch> (Required: false)
- Online <switch> (Required: true)
- PackageName <string> (Required: false)
- Path <string> (Required: true)
- Remove <switch> (Required: false)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Disable-WSManCredSSP

```powershell
Disable-WSManCredSSP [-Role] <string> [<CommonParameters>]

PARAMETERS:
- Role <string> (Required: true)
```

### Disable-WSManTrace

```powershell
Disable-WSManTrace

```

### Disconnect-IscsiTarget

```powershell
Disconnect-IscsiTarget [-NodeAddress <string[]>] [-SessionIdentifier <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Disconnect-IscsiTarget -InputObject <CimInstance#MSFT_iSCSITarget[]> [-SessionIdentifier <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_iSCSITarget[]> (Required: true)
- NodeAddress <string[]> (Required: false)
- PassThru <switch> (Required: false)
- SessionIdentifier <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disconnect-PSSession

```powershell
Disconnect-PSSession [-Session] <PSSession[]> [-IdleTimeoutSec <int>] [-OutputBufferingMode <OutputBufferingMode>] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Disconnect-PSSession -InstanceId <guid[]> [-IdleTimeoutSec <int>] [-OutputBufferingMode <OutputBufferingMode>] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Disconnect-PSSession -Name <string[]> [-IdleTimeoutSec <int>] [-OutputBufferingMode <OutputBufferingMode>] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Disconnect-PSSession [-Id] <int[]> [-IdleTimeoutSec <int>] [-OutputBufferingMode <OutputBufferingMode>] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Id <int[]> (Required: true)
- IdleTimeoutSec <int> (Required: false)
- InstanceId <guid[]> (Required: true)
- Name <string[]> (Required: true)
- OutputBufferingMode <OutputBufferingMode> (Required: false)
- Session <PSSession[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Disconnect-VirtualDisk

```powershell
Disconnect-VirtualDisk [-FriendlyName] <string[]> [-StorageNodeName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Disconnect-VirtualDisk -UniqueId <string[]> [-StorageNodeName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Disconnect-VirtualDisk -Name <string[]> [-StorageNodeName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Disconnect-VirtualDisk -InputObject <CimInstance#MSFT_VirtualDisk[]> [-StorageNodeName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

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

### Disconnect-WSMan

```powershell
Disconnect-WSMan [[-ComputerName] <string>] [<CommonParameters>]

PARAMETERS:
- ComputerName <string> (Required: false)
```

### Dismount-AppxVolume

```powershell
Dismount-AppxVolume [-Volume] <AppxVolume[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Volume <AppxVolume[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Dismount-DiskImage

```powershell
Dismount-DiskImage [-ImagePath] <string[]> [-StorageType <StorageType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Dismount-DiskImage -DevicePath <string[]> [-StorageType <StorageType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Dismount-DiskImage -InputObject <CimInstance#MSFT_DiskImage[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DevicePath <string[]> (Required: true)
- ImagePath <string[]> (Required: true)
- InputObject <CimInstance#MSFT_DiskImage[]> (Required: true)
- StorageType <StorageType> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Dismount-WindowsImage

```powershell
Dismount-WindowsImage -Path <string> -Discard [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Dismount-WindowsImage -Path <string> -Save [-CheckIntegrity] [-Append] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- Append <switch> (Required: false)
- CheckIntegrity <switch> (Required: false)
- Discard <switch> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Path <string> (Required: true)
- Save <switch> (Required: true)
- ScratchDirectory <string> (Required: false)
```

## E

### Edit-CIPolicyRule

```powershell
Edit-CIPolicyRule [-Id] <string> -FilePath <string> [-Name <string>] [-RType <string>] [-FileName <string>] [-Version <string>] [-HashPath <string>] [<CommonParameters>]

Edit-CIPolicyRule [-Id] <string> -FilePath <string> [-Name <string>] [-RType <string>] [-Root <string>] [-AddEkus <string[]>] [-RemoveEkus <string[]>] [-Issuer <string>] [-Publisher <string>] [-OemId <string>] [-AddExceptions <string[]>] [-RemoveExceptions <string[]>] [<CommonParameters>]

PARAMETERS:
- AddEkus <string[]> (Required: false)
- AddExceptions <string[]> (Required: false)
- FileName <string> (Required: false)
- FilePath <string> (Required: true)
- HashPath <string> (Required: false)
- Id <string> (Required: true)
- Issuer <string> (Required: false)
- Name <string> (Required: false)
- OemId <string> (Required: false)
- Publisher <string> (Required: false)
- RType <string> (Required: false)
- RemoveEkus <string[]> (Required: false)
- RemoveExceptions <string[]> (Required: false)
- Root <string> (Required: false)
- Version <string> (Required: false)
```

### Enable-AppBackgroundTaskDiagnosticLog

```powershell
Enable-AppBackgroundTaskDiagnosticLog [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-Appv

```powershell
Enable-Appv [<CommonParameters>]

```

### Enable-AppvClientConnectionGroup

```powershell
Enable-AppvClientConnectionGroup [-GroupId] <guid> [-VersionId] <guid> [-Global] [-UserSID <string>] [<CommonParameters>]

Enable-AppvClientConnectionGroup [-Name] <string> [-Global] [-UserSID <string>] [<CommonParameters>]

Enable-AppvClientConnectionGroup [-ConnectionGroup] <AppvClientConnectionGroup> [-Global] [-UserSID <string>] [<CommonParameters>]

PARAMETERS:
- ConnectionGroup <AppvClientConnectionGroup> (Required: true)
- Global <switch> (Required: false)
- GroupId <guid> (Required: true)
- Name <string> (Required: true)
- UserSID <string> (Required: false)
- VersionId <guid> (Required: true)
```

### Enable-BcdElementBootDebug

```powershell
Enable-BcdElementBootDebug [-Id] <string> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BcdElementBootDebug [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BcdElementBootEms

```powershell
Enable-BcdElementBootEms [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BcdElementBootEms [-Id] <string> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BcdElementBootEms [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BcdElementDebug

```powershell
Enable-BcdElementDebug [[-Id] <string>] [-Store <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BcdElementDebug [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: false)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BcdElementEms

```powershell
Enable-BcdElementEms [-Id] <string> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BcdElementEms [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BcdElementEventLogging

```powershell
Enable-BcdElementEventLogging [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BcdElementEventLogging [-Id] <string> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BcdElementEventLogging [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BcdElementHypervisorDebug

```powershell
Enable-BcdElementHypervisorDebug [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BcdElementHypervisorDebug [-Id] <string> [[-Store] <BcdStoreInfo>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BcdElementHypervisorDebug [-Entry] <BcdEntryInfo> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Entry <BcdEntryInfo> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BCDistributed

```powershell
Enable-BCDistributed [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BCDowngrading

```powershell
Enable-BCDowngrading [[-Version] <PreferredContentInformationVersion>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- Version <PreferredContentInformationVersion> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BCHostedClient

```powershell
Enable-BCHostedClient [-ServerNames] <string[]> [-Force] [-UseVersion <HostedCacheVersion>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BCHostedClient -UseSCP [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ServerNames <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- UseSCP <switch> (Required: true)
- UseVersion <HostedCacheVersion> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BCHostedServer

```powershell
Enable-BCHostedServer [-Force] [-RegisterSCP] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- RegisterSCP <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BCLocal

```powershell
Enable-BCLocal [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BCServeOnBattery

```powershell
Enable-BCServeOnBattery [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BitLocker

```powershell
Enable-BitLocker [-MountPoint] <string[]> [[-Password] <securestring>] -PasswordProtector [-EncryptionMethod <BitLockerVolumeEncryptionMethodOnEnable>] [-HardwareEncryption] [-SkipHardwareTest] [-UsedSpaceOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BitLocker [-MountPoint] <string[]> [[-RecoveryPassword] <string>] -RecoveryPasswordProtector [-EncryptionMethod <BitLockerVolumeEncryptionMethodOnEnable>] [-HardwareEncryption] [-SkipHardwareTest] [-UsedSpaceOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BitLocker [-MountPoint] <string[]> [-StartupKeyPath] <string> -StartupKeyProtector [-EncryptionMethod <BitLockerVolumeEncryptionMethodOnEnable>] [-HardwareEncryption] [-SkipHardwareTest] [-UsedSpaceOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BitLocker [-MountPoint] <string[]> [-StartupKeyPath] <string> -TpmAndStartupKeyProtector [-EncryptionMethod <BitLockerVolumeEncryptionMethodOnEnable>] [-HardwareEncryption] [-SkipHardwareTest] [-UsedSpaceOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BitLocker [-MountPoint] <string[]> [-StartupKeyPath] <string> [[-Pin] <securestring>] -TpmAndPinAndStartupKeyProtector [-EncryptionMethod <BitLockerVolumeEncryptionMethodOnEnable>] [-HardwareEncryption] [-SkipHardwareTest] [-UsedSpaceOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BitLocker [-MountPoint] <string[]> [-AdAccountOrGroup] <string> -AdAccountOrGroupProtector [-EncryptionMethod <BitLockerVolumeEncryptionMethodOnEnable>] [-HardwareEncryption] [-SkipHardwareTest] [-UsedSpaceOnly] [-Service] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BitLocker [-MountPoint] <string[]> [[-Pin] <securestring>] -TpmAndPinProtector [-EncryptionMethod <BitLockerVolumeEncryptionMethodOnEnable>] [-HardwareEncryption] [-SkipHardwareTest] [-UsedSpaceOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BitLocker [-MountPoint] <string[]> -TpmProtector [-EncryptionMethod <BitLockerVolumeEncryptionMethodOnEnable>] [-HardwareEncryption] [-SkipHardwareTest] [-UsedSpaceOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-BitLocker [-MountPoint] <string[]> [-RecoveryKeyPath] <string> -RecoveryKeyProtector [-EncryptionMethod <BitLockerVolumeEncryptionMethodOnEnable>] [-HardwareEncryption] [-SkipHardwareTest] [-UsedSpaceOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AdAccountOrGroup <string> (Required: true)
- AdAccountOrGroupProtector <switch> (Required: true)
- Confirm <switch> (Required: false)
- EncryptionMethod <BitLockerVolumeEncryptionMethodOnEnable> (Required: false)
- HardwareEncryption <switch> (Required: false)
- MountPoint <string[]> (Required: true)
- Password <securestring> (Required: false)
- PasswordProtector <switch> (Required: true)
- Pin <securestring> (Required: false)
- RecoveryKeyPath <string> (Required: true)
- RecoveryKeyProtector <switch> (Required: true)
- RecoveryPassword <string> (Required: false)
- RecoveryPasswordProtector <switch> (Required: true)
- Service <switch> (Required: false)
- SkipHardwareTest <switch> (Required: false)
- StartupKeyPath <string> (Required: true)
- StartupKeyProtector <switch> (Required: true)
- TpmAndPinAndStartupKeyProtector <switch> (Required: true)
- TpmAndPinProtector <switch> (Required: true)
- TpmAndStartupKeyProtector <switch> (Required: true)
- TpmProtector <switch> (Required: true)
- UsedSpaceOnly <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-BitLockerAutoUnlock

```powershell
Enable-BitLockerAutoUnlock [-MountPoint] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- MountPoint <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Enable-ComputerRestore

```powershell
Enable-ComputerRestore [-Drive] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Drive <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Enable-DAManualEntryPointSelection

```powershell
Enable-DAManualEntryPointSelection -EntryPointName <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EntryPointName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-DeliveryOptimizationVerboseLogs

```powershell
DESCRIPTION:


```

### Enable-DscDebug

```powershell
Enable-DscDebug [-BreakAll] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BreakAll <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-JobTrigger

```powershell
Enable-JobTrigger [-InputObject] <ScheduledJobTrigger[]> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- InputObject <ScheduledJobTrigger[]> (Required: true)
- PassThru <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-LocalUser

```powershell
Enable-LocalUser [-InputObject] <LocalUser[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-LocalUser [-Name] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-LocalUser [-SID] <SecurityIdentifier[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- InputObject <LocalUser[]> (Required: true)
- Name <string[]> (Required: true)
- SID <SecurityIdentifier[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Enable-MMAgent

```powershell
Enable-MMAgent [-ApplicationLaunchPrefetching] [-OperationAPI] [-PageCombining] [-ApplicationPreLaunch] [-MemoryCompression] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- ApplicationLaunchPrefetching <switch> (Required: false)
- ApplicationPreLaunch <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- MemoryCompression <switch> (Required: false)
- OperationAPI <switch> (Required: false)
- PageCombining <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Enable-NetAdapter

```powershell
Enable-NetAdapter [-Name] <string[]> [-IncludeHidden] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapter -InterfaceDescription <string[]> [-IncludeHidden] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapter -InputObject <CimInstance#MSFT_NetAdapter[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Enable-NetAdapterBinding

```powershell
Enable-NetAdapterBinding [-Name] <string[]> [-ComponentID <string[]>] [-DisplayName <string[]>] [-IncludeHidden] [-AllBindings] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterBinding -InterfaceDescription <string[]> [-ComponentID <string[]>] [-DisplayName <string[]>] [-IncludeHidden] [-AllBindings] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterBinding -InputObject <CimInstance#MSFT_NetAdapterBindingSettingData[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllBindings <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ComponentID <string[]> (Required: false)
- Confirm <switch> (Required: false)
- DisplayName <string[]> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterBindingSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterChecksumOffload

```powershell
Enable-NetAdapterChecksumOffload [-Name] <string[]> [-IncludeHidden] [-IpIPv4] [-TcpIPv4] [-TcpIPv6] [-UdpIPv4] [-UdpIPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterChecksumOffload -InterfaceDescription <string[]> [-IncludeHidden] [-IpIPv4] [-TcpIPv4] [-TcpIPv6] [-UdpIPv4] [-UdpIPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterChecksumOffload -InputObject <CimInstance#MSFT_NetAdapterChecksumOffloadSettingData[]> [-IpIPv4] [-TcpIPv4] [-TcpIPv6] [-UdpIPv4] [-UdpIPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterChecksumOffloadSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- IpIPv4 <switch> (Required: false)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- TcpIPv4 <switch> (Required: false)
- TcpIPv6 <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- UdpIPv4 <switch> (Required: false)
- UdpIPv6 <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterEncapsulatedPacketTaskOffload

```powershell
Enable-NetAdapterEncapsulatedPacketTaskOffload [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-EncapsulationType <EncapsulationType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterEncapsulatedPacketTaskOffload -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-EncapsulationType <EncapsulationType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterEncapsulatedPacketTaskOffload -InputObject <CimInstance#MSFT_NetAdapterEncapsulatedPacketTaskOffloadSettingData[]> [-NoRestart] [-PassThru] [-EncapsulationType <EncapsulationType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EncapsulationType <EncapsulationType> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterEncapsulatedPacketTaskOffloadSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterIPsecOffload

```powershell
Enable-NetAdapterIPsecOffload [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterIPsecOffload -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterIPsecOffload -InputObject <CimInstance#MSFT_NetAdapterIPsecOffloadV2SettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterIPsecOffloadV2SettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterLso

```powershell
Enable-NetAdapterLso [-Name] <string[]> [-IncludeHidden] [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterLso -InterfaceDescription <string[]> [-IncludeHidden] [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterLso -InputObject <CimInstance#MSFT_NetAdapterLsoSettingData[]> [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPv4 <switch> (Required: false)
- IPv6 <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterLsoSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterPacketDirect

```powershell
Enable-NetAdapterPacketDirect [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterPacketDirect -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterPacketDirect -InputObject <CimInstance#MSFT_NetAdapterPacketDirectSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterPacketDirectSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterPowerManagement

```powershell
Enable-NetAdapterPowerManagement [-Name] <string[]> [-IncludeHidden] [-ArpOffload] [-D0PacketCoalescing] [-DeviceSleepOnDisconnect] [-NSOffload] [-RsnRekeyOffload] [-SelectiveSuspend] [-WakeOnMagicPacket] [-WakeOnPattern] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterPowerManagement -InterfaceDescription <string[]> [-IncludeHidden] [-ArpOffload] [-D0PacketCoalescing] [-DeviceSleepOnDisconnect] [-NSOffload] [-RsnRekeyOffload] [-SelectiveSuspend] [-WakeOnMagicPacket] [-WakeOnPattern] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterPowerManagement -InputObject <CimInstance#MSFT_NetAdapterPowerManagementSettingData[]> [-ArpOffload] [-D0PacketCoalescing] [-DeviceSleepOnDisconnect] [-NSOffload] [-RsnRekeyOffload] [-SelectiveSuspend] [-WakeOnMagicPacket] [-WakeOnPattern] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ArpOffload <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- D0PacketCoalescing <switch> (Required: false)
- DeviceSleepOnDisconnect <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterPowerManagementSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- NSOffload <switch> (Required: false)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- RsnRekeyOffload <switch> (Required: false)
- SelectiveSuspend <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WakeOnMagicPacket <switch> (Required: false)
- WakeOnPattern <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterQos

```powershell
Enable-NetAdapterQos [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterQos -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterQos -InputObject <CimInstance#MSFT_NetAdapterQosSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterQosSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterRdma

```powershell
Enable-NetAdapterRdma [[-Name] <string[]>] [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterRdma -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterRdma -InputObject <CimInstance#MSFT_NetAdapterRdmaSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterRdmaSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: false)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterRsc

```powershell
Enable-NetAdapterRsc [-Name] <string[]> [-IncludeHidden] [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterRsc -InterfaceDescription <string[]> [-IncludeHidden] [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterRsc -InputObject <CimInstance#MSFT_NetAdapterRscSettingData[]> [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPv4 <switch> (Required: false)
- IPv6 <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterRscSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterRss

```powershell
Enable-NetAdapterRss [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterRss -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterRss -InputObject <CimInstance#MSFT_NetAdapterRssSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterRssSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterSriov

```powershell
Enable-NetAdapterSriov [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterSriov -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterSriov -InputObject <CimInstance#MSFT_NetAdapterSriovSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterSriovSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterUro

```powershell
Enable-NetAdapterUro [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterUro -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterUro -InputObject <CimInstance#MSFT_NetAdapterUroSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterUroSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterUso

```powershell
Enable-NetAdapterUso [-Name] <string[]> [-IncludeHidden] [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterUso -InterfaceDescription <string[]> [-IncludeHidden] [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterUso -InputObject <CimInstance#MSFT_NetAdapterUsoSettingData[]> [-IPv4] [-IPv6] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPv4 <switch> (Required: false)
- IPv6 <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterUsoSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetAdapterVmq

```powershell
Enable-NetAdapterVmq [-Name] <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterVmq -InterfaceDescription <string[]> [-IncludeHidden] [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetAdapterVmq -InputObject <CimInstance#MSFT_NetAdapterVmqSettingData[]> [-NoRestart] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetAdapterVmqSettingData[]> (Required: true)
- InterfaceDescription <string[]> (Required: true)
- Name <string[]> (Required: true)
- NoRestart <switch> (Required: false)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetDnsTransitionConfiguration

```powershell
Enable-NetDnsTransitionConfiguration [-Adapter <CimInstance#MSFT_NetAdapter>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetDnsTransitionConfiguration -InputObject <CimInstance#MSFT_NetDnsTransitionConfiguration[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Adapter <CimInstance#MSFT_NetAdapter> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_NetDnsTransitionConfiguration[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetFirewallHyperVRule

```powershell
Enable-NetFirewallHyperVRule [-All] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallHyperVRule [-Name] <string[]> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallHyperVRule -DisplayName <string[]> [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallHyperVRule [-RulePriority <uint16[]>] [-Direction <Direction[]>] [-VMCreatorId <string[]>] [-Protocol <string[]>] [-Action <Action[]>] [-Enabled <Enabled[]>] [-EnforcementStatus <HyperVRuleStatus[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallHyperVRule -InputObject <CimInstance#MSFT_NetFirewallHyperVRule[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Enable-NetFirewallRule

```powershell
Enable-NetFirewallRule [-All] [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallRule [-Name] <string[]> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallRule -DisplayName <string[]> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Direction <Direction[]>] [-Action <Action[]>] [-EdgeTraversalPolicy <EdgeTraversal[]>] [-LooseSourceMapping <bool[]>] [-LocalOnlyMapping <bool[]>] [-Owner <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyAppId <string[]>] [-PackageFamilyName <string[]>] [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallRule -AssociatedNetFirewallApplicationFilter <CimInstance#MSFT_NetApplicationFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallRule -AssociatedNetFirewallSecurityFilter <CimInstance#MSFT_NetNetworkLayerSecurityFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallRule -AssociatedNetFirewallServiceFilter <CimInstance#MSFT_NetServiceFilter> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetFirewallRule -InputObject <CimInstance#MSFT_NetFirewallRule[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Enable-NetIPHttpsProfile

```powershell
Enable-NetIPHttpsProfile -Profile <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Profile <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-NetIPsecMainModeRule

```powershell
Enable-NetIPsecMainModeRule [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecMainModeRule [-Name] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecMainModeRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecMainModeRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-MainModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecMainModeRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecMainModeRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecMainModeRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecMainModeRule -AssociatedNetIPsecMainModeCryptoSet <CimInstance#MSFT_NetIKEMMCryptoSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecMainModeRule -InputObject <CimInstance#MSFT_NetMainModeRule[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Enable-NetIPsecRule

```powershell
Enable-NetIPsecRule [-All] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecRule [-IPsecRuleName] <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecRule -DisplayName <string[]> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecRule [-Description <string[]>] [-DisplayGroup <string[]>] [-Group <string[]>] [-Enabled <Enabled[]>] [-Mode <IPsecMode[]>] [-InboundSecurity <SecurityPolicy[]>] [-OutboundSecurity <SecurityPolicy[]>] [-QuickModeCryptoSet <string[]>] [-Phase1AuthSet <string[]>] [-Phase2AuthSet <string[]>] [-KeyModule <KeyModule[]>] [-AllowWatchKey <bool[]>] [-AllowSetKey <bool[]>] [-RemoteTunnelHostname <string[]>] [-ForwardPathLifetime <uint32[]>] [-EncryptedTunnelBypass <bool[]>] [-RequireAuthorization <bool[]>] [-User <string[]>] [-Machine <string[]>] [-PrimaryStatus <PrimaryStatus[]>] [-Status <string[]>] [-PolicyStoreSource <string[]>] [-PolicyStoreSourceType <PolicyStoreType[]>] [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecRule -AssociatedNetFirewallAddressFilter <CimInstance#MSFT_NetAddressFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecRule -AssociatedNetFirewallInterfaceFilter <CimInstance#MSFT_NetInterfaceFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecRule -AssociatedNetFirewallInterfaceTypeFilter <CimInstance#MSFT_NetInterfaceTypeFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecRule -AssociatedNetFirewallPortFilter <CimInstance#MSFT_NetProtocolPortFilter> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecRule -AssociatedNetFirewallProfile <CimInstance#MSFT_NetFirewallProfile> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecRule -AssociatedNetIPsecPhase2AuthSet <CimInstance#MSFT_NetIKEP2AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecRule -AssociatedNetIPsecPhase1AuthSet <CimInstance#MSFT_NetIKEP1AuthSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecRule -AssociatedNetIPsecQuickModeCryptoSet <CimInstance#MSFT_NetIKEQMCryptoSet> [-PolicyStore <string>] [-GPOSession <string>] [-TracePolicyStore] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetIPsecRule -InputObject <CimInstance#MSFT_NetConSecRule[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Enable-NetNatTransitionConfiguration

```powershell
Enable-NetNatTransitionConfiguration [-InstanceName <string[]>] [-PolicyStore <PolicyStore[]>] [-Adapter <CimInstance#MSFT_NetAdapter>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetNatTransitionConfiguration -InputObject <CimInstance#MSFT_NetNatTransitionConfiguration[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Enable-NetworkSwitchEthernetPort

```powershell
Enable-NetworkSwitchEthernetPort -CimSession <CimSession> -DeviceID <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetworkSwitchEthernetPort -CimSession <CimSession> -PortNumber <int> [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetworkSwitchEthernetPort -CimSession <CimSession> -InputObject <ciminstance[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- DeviceID <string> (Required: true)
- InputObject <ciminstance[]> (Required: true)
- PortNumber <int> (Required: true)
- WhatIf <switch> (Required: false)
```

### Enable-NetworkSwitchFeature

```powershell
Enable-NetworkSwitchFeature -CimSession <CimSession> -FeatureName <int> [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetworkSwitchFeature -CimSession <CimSession> -Name <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetworkSwitchFeature -CimSession <CimSession> -InstanceId <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetworkSwitchFeature -CimSession <CimSession> -InputObject <ciminstance[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- FeatureName <int> (Required: true)
- InputObject <ciminstance[]> (Required: true)
- InstanceId <string> (Required: true)
- Name <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Enable-NetworkSwitchVlan

```powershell
Enable-NetworkSwitchVlan -CimSession <CimSession> -InstanceId <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetworkSwitchVlan -CimSession <CimSession> -Name <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-NetworkSwitchVlan -CimSession <CimSession> -VlanID <int> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimSession <CimSession> (Required: true)
- Confirm <switch> (Required: false)
- InstanceId <string> (Required: true)
- Name <string> (Required: true)
- VlanID <int> (Required: true)
- WhatIf <switch> (Required: false)
```

### Enable-OdbcPerfCounter

```powershell
Enable-OdbcPerfCounter [-InputObject] <CimInstance#MSFT_OdbcPerfCounter[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-OdbcPerfCounter [[-Platform] <string>] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#MSFT_OdbcPerfCounter[]> (Required: true)
- PassThru <switch> (Required: false)
- Platform <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-PhysicalDiskIdentification

```powershell
Enable-PhysicalDiskIdentification [-FriendlyName] <string> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Enable-PhysicalDiskIdentification -UniqueId <string> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Enable-PhysicalDiskIdentification -InputObject <CimInstance#MSFT_PhysicalDisk[]> [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <CimInstance#MSFT_PhysicalDisk[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string> (Required: true)
```

### Enable-PnpDevice

```powershell
Enable-PnpDevice [-InstanceId] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-PnpDevice -InputObject <CimInstance#Win32_PnPEntity[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <CimInstance#Win32_PnPEntity[]> (Required: true)
- InstanceId <string[]> (Required: true)
- PassThru <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-PSBreakpoint

```powershell
Enable-PSBreakpoint [-Id] <int[]> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-PSBreakpoint [-Breakpoint] <Breakpoint[]> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Breakpoint <Breakpoint[]> (Required: true)
- Confirm <switch> (Required: false)
- Id <int[]> (Required: true)
- PassThru <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-PSRemoting

```powershell
Enable-PSRemoting [-Force] [-SkipNetworkProfileCheck] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- SkipNetworkProfileCheck <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-PSSessionConfiguration

```powershell
Enable-PSSessionConfiguration [[-Name] <string[]>] [-Force] [-SecurityDescriptorSddl <string>] [-SkipNetworkProfileCheck] [-NoServiceRestart] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Name <string[]> (Required: false)
- NoServiceRestart <switch> (Required: false)
- SecurityDescriptorSddl <string> (Required: false)
- SkipNetworkProfileCheck <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-PSTrace

```powershell
Enable-PSTrace [-Force] [-AnalyticOnly]

PARAMETERS:
- AnalyticOnly <switch> (Required: false)
- Force <switch> (Required: false)
```

### Enable-PSWSManCombinedTrace

```powershell
Enable-PSWSManCombinedTrace [-DoNotOverwriteExistingTrace]

PARAMETERS:
- DoNotOverwriteExistingTrace <switch> (Required: false)
```

### Enable-ReFSDedup

```powershell
Enable-ReFSDedup [-Volume] <string> [-Type] <DedupVolumeType> [<CommonParameters>]

PARAMETERS:
- Type <DedupVolumeType> (Required: true)
- Volume <string> (Required: true)
```

### Enable-RunspaceDebug

```powershell
Enable-RunspaceDebug [[-RunspaceName] <string[]>] [-BreakAll] [<CommonParameters>]

Enable-RunspaceDebug [-Runspace] <runspace[]> [-BreakAll] [<CommonParameters>]

Enable-RunspaceDebug [-RunspaceId] <int[]> [-BreakAll] [<CommonParameters>]

Enable-RunspaceDebug [-RunspaceInstanceId] <guid[]> [<CommonParameters>]

Enable-RunspaceDebug [[-ProcessName] <string>] [[-AppDomainName] <string[]>] [<CommonParameters>]

PARAMETERS:
- AppDomainName <string[]> (Required: false)
- BreakAll <switch> (Required: false)
- ProcessName <string> (Required: false)
- Runspace <runspace[]> (Required: true)
- RunspaceId <int[]> (Required: true)
- RunspaceInstanceId <guid[]> (Required: true)
- RunspaceName <string[]> (Required: false)
```

### Enable-ScheduledJob

```powershell
Enable-ScheduledJob [-InputObject] <ScheduledJobDefinition> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-ScheduledJob [-Id] <int> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-ScheduledJob [-Name] <string> [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Id <int> (Required: true)
- InputObject <ScheduledJobDefinition> (Required: true)
- Name <string> (Required: true)
- PassThru <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-ScheduledTask

```powershell
Enable-ScheduledTask [-TaskName] <string> [[-TaskPath] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Enable-ScheduledTask [-InputObject] <CimInstance#MSFT_ScheduledTask> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_ScheduledTask> (Required: true)
- TaskName <string> (Required: true)
- TaskPath <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Enable-SmbDelegation

```powershell
Enable-SmbDelegation [-SmbClient] <string> [-SmbServer] <string> [<CommonParameters>]

PARAMETERS:
- SmbClient <string> (Required: true)
- SmbServer <string> (Required: true)
```

### Enable-StorageBusCache

```powershell
Enable-StorageBusCache [[-Timeout] <int>] [[-AutoConfig] <bool>] [<CommonParameters>]

PARAMETERS:
- AutoConfig <bool> (Required: false)
- Timeout <int> (Required: false)
```

### Enable-StorageBusDisk

```powershell
Enable-StorageBusDisk -Guid <string> [<CommonParameters>]

Enable-StorageBusDisk -Number <uint16> [<CommonParameters>]

Enable-StorageBusDisk -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> [<CommonParameters>]

PARAMETERS:
- Guid <string> (Required: true)
- Number <uint16> (Required: true)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
```

### Enable-StorageDataCollection

```powershell
Enable-StorageDataCollection -PhysicalDisk <CimInstance#MSFT_PhysicalDisk> -StorageDataCollectionType <StorageDataCollectionType> [<CommonParameters>]

Enable-StorageDataCollection -DeviceGuid <string> -StorageDataCollectionType <StorageDataCollectionType> [<CommonParameters>]

Enable-StorageDataCollection -DeviceNumber <string> -StorageDataCollectionType <StorageDataCollectionType> [<CommonParameters>]

PARAMETERS:
- DeviceGuid <string> (Required: true)
- DeviceNumber <string> (Required: true)
- PhysicalDisk <CimInstance#MSFT_PhysicalDisk> (Required: true)
- StorageDataCollectionType <StorageDataCollectionType> (Required: true)
```

### Enable-StorageEnclosureIdentification

```powershell
Enable-StorageEnclosureIdentification [-FriendlyName] <string[]> [-SlotNumbers <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Enable-StorageEnclosureIdentification -UniqueId <string[]> [-SlotNumbers <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Enable-StorageEnclosureIdentification -InputObject <CimInstance#MSFT_StorageEnclosure[]> [-SlotNumbers <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_StorageEnclosure[]> (Required: true)
- PassThru <switch> (Required: false)
- SlotNumbers <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
```

### Enable-StorageEnclosurePower

```powershell
Enable-StorageEnclosurePower [-FriendlyName] <string[]> [-SlotNumbers <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Enable-StorageEnclosurePower -UniqueId <string[]> [-SlotNumbers <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Enable-StorageEnclosurePower -InputObject <CimInstance#MSFT_StorageEnclosure[]> [-SlotNumbers <uint32[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string[]> (Required: true)
- InputObject <CimInstance#MSFT_StorageEnclosure[]> (Required: true)
- PassThru <switch> (Required: false)
- SlotNumbers <uint32[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
```

### Enable-StorageHighAvailability

```powershell
Enable-StorageHighAvailability [-DiskNumber] <uint32[]> [-ScaleOut <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Enable-StorageHighAvailability -DiskUniqueId <string[]> [-ScaleOut <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Enable-StorageHighAvailability -DiskFriendlyName <string[]> [-ScaleOut <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Enable-StorageHighAvailability -DiskPath <string[]> [-ScaleOut <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

Enable-StorageHighAvailability -InputObject <CimInstance#MSFT_Disk[]> [-ScaleOut <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DiskFriendlyName <string[]> (Required: true)
- DiskNumber <uint32[]> (Required: true)
- DiskPath <string[]> (Required: true)
- DiskUniqueId <string[]> (Required: true)
- InputObject <CimInstance#MSFT_Disk[]> (Required: true)
- PassThru <switch> (Required: false)
- ScaleOut <bool> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Enable-StorageMaintenanceMode

```powershell
Enable-StorageMaintenanceMode -InputObject <CimInstance#MSFT_StorageFaultDomain> [-IgnoreDetachedVirtualDisks] [-ValidateVirtualDisksHealthy <bool>] [-Model <string>] [-Manufacturer <string>] [-CimSession <CimSession>] [-ValidateMaintenanceMode <bool>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- IgnoreDetachedVirtualDisks <switch> (Required: false)
- InputObject <CimInstance#MSFT_StorageFaultDomain> (Required: true)
- Manufacturer <string> (Required: false)
- Model <string> (Required: false)
- ValidateMaintenanceMode <bool> (Required: false)
- ValidateVirtualDisksHealthy <bool> (Required: false)
```

### Enable-TlsCipherSuite

```powershell
Enable-TlsCipherSuite [-Name] <string> [[-Position] <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Name <string> (Required: true)
- Position <uint32> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-TlsEccCurve

```powershell
Enable-TlsEccCurve [-Name] <string> [[-Position] <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Name <string> (Required: true)
- Position <uint32> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-TlsSessionTicketKey

```powershell
Enable-TlsSessionTicketKey [-Password] <securestring> [-Path] <string> [-ServiceAccountName] <NTAccount> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Password <securestring> (Required: true)
- Path <string> (Required: true)
- ServiceAccountName <NTAccount> (Required: true)
- WhatIf <switch> (Required: false)
```

### Enable-TpmAutoProvisioning

```powershell
Enable-TpmAutoProvisioning [<CommonParameters>]

```

### Enable-Uev

```powershell
Enable-Uev [<CommonParameters>]

```

### Enable-UevAppxPackage

```powershell
Enable-UevAppxPackage [-PackageFamilyName] <string[]> [-CurrentComputerUser] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-UevAppxPackage [-PackageFamilyName] <string[]> -Computer [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Computer <switch> (Required: true)
- Confirm <switch> (Required: false)
- CurrentComputerUser <switch> (Required: false)
- PackageFamilyName <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Enable-UevTemplate

```powershell
Enable-UevTemplate [-ID] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- ID <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Enable-WdacBidTrace

```powershell
Enable-WdacBidTrace [-InputObject] <CimInstance#MSFT_WdacBidTrace[]> [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-WdacBidTrace [-Path] <string> [-PassThru] [-Platform <string>] [-ProcessId <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-WdacBidTrace -Folder <string> [-PassThru] [-Platform <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Enable-WdacBidTrace -IncludeAllApplications [-PassThru] [-Platform <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Folder <string> (Required: true)
- IncludeAllApplications <switch> (Required: true)
- InputObject <CimInstance#MSFT_WdacBidTrace[]> (Required: true)
- PassThru <switch> (Required: false)
- Path <string> (Required: true)
- Platform <string> (Required: false)
- ProcessId <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Enable-WindowsErrorReporting

```powershell
Enable-WindowsErrorReporting [<CommonParameters>]

```

### Enable-WindowsOptionalFeature

```powershell
Enable-WindowsOptionalFeature -FeatureName <string[]> -Online [-PackageName <string>] [-All] [-LimitAccess] [-Source <string[]>] [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Enable-WindowsOptionalFeature -FeatureName <string[]> -Path <string> [-PackageName <string>] [-All] [-LimitAccess] [-Source <string[]>] [-NoRestart] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- All <switch> (Required: false)
- FeatureName <string[]> (Required: true)
- LimitAccess <switch> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- NoRestart <switch> (Required: false)
- Online <switch> (Required: true)
- PackageName <string> (Required: false)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- Source <string[]> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Enable-WSManCredSSP

```powershell
Enable-WSManCredSSP [-Role] <string> [[-DelegateComputer] <string[]>] [-Force] [<CommonParameters>]

PARAMETERS:
- DelegateComputer <string[]> (Required: false)
- Force <switch> (Required: false)
- Role <string> (Required: true)
```

### Enable-WSManTrace

```powershell
Enable-WSManTrace

```

### Enter-PSHostProcess

```powershell
Enter-PSHostProcess [-Id] <int> [[-AppDomainName] <string>] [<CommonParameters>]

Enter-PSHostProcess [-Process] <Process> [[-AppDomainName] <string>] [<CommonParameters>]

Enter-PSHostProcess [-Name] <string> [[-AppDomainName] <string>] [<CommonParameters>]

Enter-PSHostProcess [-HostProcessInfo] <PSHostProcessInfo> [[-AppDomainName] <string>] [<CommonParameters>]

PARAMETERS:
- AppDomainName <string> (Required: false)
- HostProcessInfo <PSHostProcessInfo> (Required: true)
- Id <int> (Required: true)
- Name <string> (Required: true)
- Process <Process> (Required: true)
```

### Enter-PSSession

```powershell
Enter-PSSession [-ComputerName] <string> [-EnableNetworkAccess] [-Credential <pscredential>] [-ConfigurationName <string>] [-Port <int>] [-UseSSL] [-ApplicationName <string>] [-SessionOption <PSSessionOption>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

Enter-PSSession [[-Session] <PSSession>] [<CommonParameters>]

Enter-PSSession [[-ConnectionUri] <uri>] [-EnableNetworkAccess] [-Credential <pscredential>] [-ConfigurationName <string>] [-AllowRedirection] [-SessionOption <PSSessionOption>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

Enter-PSSession [-InstanceId <guid>] [<CommonParameters>]

Enter-PSSession [[-Id] <int>] [<CommonParameters>]

Enter-PSSession [-Name <string>] [<CommonParameters>]

Enter-PSSession [-VMId] <guid> [-Credential] <pscredential> [-ConfigurationName <string>] [<CommonParameters>]

Enter-PSSession [-VMName] <string> [-Credential] <pscredential> [-ConfigurationName <string>] [<CommonParameters>]

Enter-PSSession [-ContainerId] <string> [-ConfigurationName <string>] [-RunAsAdministrator] [<CommonParameters>]

PARAMETERS:
- AllowRedirection <switch> (Required: false)
- ApplicationName <string> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string> (Required: true)
- ConfigurationName <string> (Required: false)
- ConnectionUri <uri> (Required: false)
- ContainerId <string> (Required: true)
- Credential <pscredential> (Required: true)
- EnableNetworkAccess <switch> (Required: false)
- Id <int> (Required: false)
- InstanceId <guid> (Required: false)
- Name <string> (Required: false)
- Port <int> (Required: false)
- RunAsAdministrator <switch> (Required: false)
- Session <PSSession> (Required: false)
- SessionOption <PSSessionOption> (Required: false)
- UseSSL <switch> (Required: false)
- VMId <guid> (Required: true)
- VMName <string> (Required: true)
```

### Exit-PSHostProcess

```powershell
Exit-PSHostProcess [<CommonParameters>]

```

### Exit-PSSession

```powershell
Exit-PSSession [<CommonParameters>]

```

### Expand-Archive

```powershell
Expand-Archive [-Path] <string> [[-DestinationPath] <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Expand-Archive [[-DestinationPath] <string>] -LiteralPath <string> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- DestinationPath <string> (Required: false)
- Force <switch> (Required: false)
- LiteralPath <string> (Required: true)
- Path <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Expand-OsImage

```powershell
Expand-OsImage -ImagePath <string> -ApplyPath <string> [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- ApplyPath <string> (Required: true)
- ImagePath <string> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- ScratchDirectory <string> (Required: false)
```

### Expand-WindowsCustomDataImage

```powershell
Expand-WindowsCustomDataImage -ImagePath <string> -CustomDataImage <string> -SingleInstance [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CustomDataImage <string> (Required: true)
- ImagePath <string> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- ScratchDirectory <string> (Required: false)
- SingleInstance <switch> (Required: true)
```

### Expand-WindowsImage

```powershell
Expand-WindowsImage -ImagePath <string> -Name <string> -ApplyPath <string> [-SplitImageFilePattern <string>] [-CheckIntegrity] [-ConfirmTrustedFile] [-NoRpFix] [-Verify] [-WIMBoot] [-Compact] [-SupportEa] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Expand-WindowsImage -ImagePath <string> -Index <uint32> -ApplyPath <string> [-SplitImageFilePattern <string>] [-CheckIntegrity] [-ConfirmTrustedFile] [-NoRpFix] [-Verify] [-WIMBoot] [-Compact] [-SupportEa] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Expand-WindowsImage -ImagePath <string> -ApplyPath <string> [-SplitImageFilePattern <string>] [-CheckIntegrity] [-ConfirmTrustedFile] [-NoRpFix] [-Verify] [-WIMBoot] [-Compact] [-SupportEa] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- ApplyPath <string> (Required: true)
- CheckIntegrity <switch> (Required: false)
- Compact <switch> (Required: false)
- ConfirmTrustedFile <switch> (Required: false)
- ImagePath <string> (Required: true)
- Index <uint32> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Name <string> (Required: true)
- NoRpFix <switch> (Required: false)
- ScratchDirectory <string> (Required: false)
- SplitImageFilePattern <string> (Required: false)
- SupportEa <switch> (Required: false)
- Verify <switch> (Required: false)
- WIMBoot <switch> (Required: false)
```

### Export-Alias

```powershell
Export-Alias [-Path] <string> [[-Name] <string[]>] [-PassThru] [-As <ExportAliasFormat>] [-Append] [-Force] [-NoClobber] [-Description <string>] [-Scope <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Export-Alias [[-Name] <string[]>] -LiteralPath <string> [-PassThru] [-As <ExportAliasFormat>] [-Append] [-Force] [-NoClobber] [-Description <string>] [-Scope <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Append <switch> (Required: false)
- As <ExportAliasFormat> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- Force <switch> (Required: false)
- LiteralPath <string> (Required: true)
- Name <string[]> (Required: false)
- NoClobber <switch> (Required: false)
- PassThru <switch> (Required: false)
- Path <string> (Required: true)
- Scope <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Export-BCCachePackage

```powershell
Export-BCCachePackage [[-StagingPath] <string>] -Destination <string> [-Force] [-OutputReferenceFile <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Export-BCCachePackage -Destination <string> -ExportDataCache [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Destination <string> (Required: true)
- ExportDataCache <switch> (Required: true)
- Force <switch> (Required: false)
- OutputReferenceFile <string> (Required: false)
- StagingPath <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Export-BcdStore

```powershell
Export-BcdStore [-Path] <string> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Path <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Export-BCSecretKey

```powershell
Export-BCSecretKey [-Filename] <string> [-FilePassphrase] <string> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FilePassphrase <string> (Required: true)
- Filename <string> (Required: true)
- Force <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Export-BinaryMiLog

```powershell
Export-BinaryMiLog [-Path] <string> [-InputObject <ciminstance>] [<CommonParameters>]

PARAMETERS:
- InputObject <ciminstance> (Required: false)
- Path <string> (Required: true)
```

### Export-Certificate

```powershell
Export-Certificate -FilePath <string> -Cert <Certificate> [-Type <CertType>] [-NoClobber] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Cert <Certificate> (Required: true)
- Confirm <switch> (Required: false)
- FilePath <string> (Required: true)
- Force <switch> (Required: false)
- NoClobber <switch> (Required: false)
- Type <CertType> (Required: false)
- WhatIf <switch> (Required: false)
```

### Export-Clixml

```powershell
Export-Clixml [-Path] <string> -InputObject <psobject> [-Depth <int>] [-Force] [-NoClobber] [-Encoding <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Export-Clixml -LiteralPath <string> -InputObject <psobject> [-Depth <int>] [-Force] [-NoClobber] [-Encoding <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Depth <int> (Required: false)
- Encoding <string> (Required: false)
- Force <switch> (Required: false)
- InputObject <psobject> (Required: true)
- LiteralPath <string> (Required: true)
- NoClobber <switch> (Required: false)
- Path <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Export-Console

```powershell
Export-Console [[-Path] <string>] [-Force] [-NoClobber] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- NoClobber <switch> (Required: false)
- Path <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Export-Counter

```powershell
Export-Counter [-Path] <string> -InputObject <PerformanceCounterSampleSet[]> [-FileFormat <string>] [-MaxSize <uint32>] [-Force] [-Circular] [<CommonParameters>]

PARAMETERS:
- Circular <switch> (Required: false)
- FileFormat <string> (Required: false)
- Force <switch> (Required: false)
- InputObject <PerformanceCounterSampleSet[]> (Required: true)
- MaxSize <uint32> (Required: false)
- Path <string> (Required: true)
```

### Export-Csv

```powershell
Export-Csv [[-Path] <string>] [[-Delimiter] <char>] -InputObject <psobject> [-LiteralPath <string>] [-Force] [-NoClobber] [-Encoding <string>] [-Append] [-NoTypeInformation] [-WhatIf] [-Confirm] [<CommonParameters>]

Export-Csv [[-Path] <string>] -InputObject <psobject> [-LiteralPath <string>] [-Force] [-NoClobber] [-Encoding <string>] [-Append] [-UseCulture] [-NoTypeInformation] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Append <switch> (Required: false)
- Confirm <switch> (Required: false)
- Delimiter <char> (Required: false)
- Encoding <string> (Required: false)
- Force <switch> (Required: false)
- InputObject <psobject> (Required: true)
- LiteralPath <string> (Required: false)
- NoClobber <switch> (Required: false)
- NoTypeInformation <switch> (Required: false)
- Path <string> (Required: false)
- UseCulture <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Export-FormatData

```powershell
Export-FormatData -InputObject <ExtendedTypeDefinition[]> -Path <string> [-Force] [-NoClobber] [-IncludeScriptBlock] [<CommonParameters>]

Export-FormatData -InputObject <ExtendedTypeDefinition[]> -LiteralPath <string> [-Force] [-NoClobber] [-IncludeScriptBlock] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- IncludeScriptBlock <switch> (Required: false)
- InputObject <ExtendedTypeDefinition[]> (Required: true)
- LiteralPath <string> (Required: true)
- NoClobber <switch> (Required: false)
- Path <string> (Required: true)
```

### Export-ModuleMember

```powershell
Export-ModuleMember [[-Function] <string[]>] [-Cmdlet <string[]>] [-Variable <string[]>] [-Alias <string[]>] [<CommonParameters>]

PARAMETERS:
- Alias <string[]> (Required: false)
- Cmdlet <string[]> (Required: false)
- Function <string[]> (Required: false)
- Variable <string[]> (Required: false)
```

### Export-ODataEndpointProxy

```powershell
Export-ODataEndpointProxy [-Uri] <string> [-OutputModule] <string> [[-MetadataUri] <string>] [[-Credential] <pscredential>] [[-CreateRequestMethod] <string>] [[-UpdateRequestMethod] <string>] [[-CmdletAdapter] <string>] [[-ResourceNameMapping] <hashtable>] [-Force] [[-CustomData] <hashtable>] [-AllowClobber] [-AllowUnsecureConnection] [[-Headers] <hashtable>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowClobber <switch> (Required: false)
- AllowUnsecureConnection <switch> (Required: false)
- CmdletAdapter <string> (Required: false)
- Confirm <switch> (Required: false)
- CreateRequestMethod <string> (Required: false)
- Credential <pscredential> (Required: false)
- CustomData <hashtable> (Required: false)
- Force <switch> (Required: false)
- Headers <hashtable> (Required: false)
- MetadataUri <string> (Required: false)
- OutputModule <string> (Required: true)
- ResourceNameMapping <hashtable> (Required: false)
- UpdateRequestMethod <string> (Required: false)
- Uri <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Export-OsImage

```powershell
Export-OsImage -SrcImagePath <string> -DestImagePath <string> [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- DestImagePath <string> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- ScratchDirectory <string> (Required: false)
- SrcImagePath <string> (Required: true)
```

### Export-PfxCertificate

```powershell
Export-PfxCertificate [-PFXData] <PfxData> [-FilePath] <string> [-NoProperties] [-NoClobber] [-Force] [-CryptoAlgorithmOption <CryptoAlgorithmOptions>] [-ChainOption <ExportChainOption>] [-ProtectTo <string[]>] [-Password <securestring>] [-WhatIf] [-Confirm] [<CommonParameters>]

Export-PfxCertificate [-Cert] <Certificate> [-FilePath] <string> [-NoProperties] [-NoClobber] [-Force] [-CryptoAlgorithmOption <CryptoAlgorithmOptions>] [-ChainOption <ExportChainOption>] [-ProtectTo <string[]>] [-Password <securestring>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Cert <Certificate> (Required: true)
- ChainOption <ExportChainOption> (Required: false)
- Confirm <switch> (Required: false)
- CryptoAlgorithmOption <CryptoAlgorithmOptions> (Required: false)
- FilePath <string> (Required: true)
- Force <switch> (Required: false)
- NoClobber <switch> (Required: false)
- NoProperties <switch> (Required: false)
- PFXData <PfxData> (Required: true)
- Password <securestring> (Required: false)
- ProtectTo <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Export-ProvisioningPackage

```powershell
Export-ProvisioningPackage [-OutputFolder] <string> -PackageId <string> [-AllowClobber] [-AnswerFileOnly] [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

Export-ProvisioningPackage [-PackagePath] <string> [-OutputFolder] <string> [-AllowClobber] [-AnswerFileOnly] [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

Export-ProvisioningPackage [-RuntimeMetadata] <RuntimeProvPackageMetadata> [-OutputFolder] <string> [-AllowClobber] [-AnswerFileOnly] [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

PARAMETERS:
- AllowClobber <switch> (Required: false)
- AnswerFileOnly <switch> (Required: false)
- ConnectedDevice <switch> (Required: false)
- LogsDirectoryPath <string> (Required: false)
- OutputFolder <string> (Required: true)
- PackageId <string> (Required: true)
- PackagePath <string> (Required: true)
- RuntimeMetadata <RuntimeProvPackageMetadata> (Required: true)
- WprpFile <string> (Required: false)
```

### Export-PSSession

```powershell
Export-PSSession [-Session] <PSSession> [-OutputModule] <string> [[-CommandName] <string[]>] [[-FormatTypeName] <string[]>] [-Force] [-Encoding <string>] [-AllowClobber] [-ArgumentList <Object[]>] [-CommandType <CommandTypes>] [-Module <string[]>] [-FullyQualifiedModule <ModuleSpecification[]>] [-Certificate <X509Certificate2>] [<CommonParameters>]

PARAMETERS:
- AllowClobber <switch> (Required: false)
- ArgumentList <Object[]> (Required: false)
- Certificate <X509Certificate2> (Required: false)
- CommandName <string[]> (Required: false)
- CommandType <CommandTypes> (Required: false)
- Encoding <string> (Required: false)
- Force <switch> (Required: false)
- FormatTypeName <string[]> (Required: false)
- FullyQualifiedModule <ModuleSpecification[]> (Required: false)
- Module <string[]> (Required: false)
- OutputModule <string> (Required: true)
- Session <PSSession> (Required: true)
```

### Export-ScheduledTask

```powershell
Export-ScheduledTask [[-TaskName] <string>] [[-TaskPath] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

Export-ScheduledTask [-InputObject] <CimInstance#MSFT_ScheduledTask> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InputObject <CimInstance#MSFT_ScheduledTask> (Required: true)
- TaskName <string> (Required: false)
- TaskPath <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Export-StartLayout

```powershell
Export-StartLayout [-Path] <string> [-UseDesktopApplicationID] [-WhatIf] [-Confirm] [<CommonParameters>]

Export-StartLayout -LiteralPath <string> [-UseDesktopApplicationID] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- LiteralPath <string> (Required: true)
- Path <string> (Required: true)
- UseDesktopApplicationID <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Export-StartLayoutEdgeAssets

```powershell
Export-StartLayoutEdgeAssets [-Path] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Export-StartLayoutEdgeAssets -LiteralPath <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- LiteralPath <string> (Required: true)
- Path <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Export-TlsSessionTicketKey

```powershell
Export-TlsSessionTicketKey [-Password] <securestring> [[-Path] <string>] [-ServiceAccountName] <NTAccount> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Password <securestring> (Required: true)
- Path <string> (Required: false)
- ServiceAccountName <NTAccount> (Required: true)
- WhatIf <switch> (Required: false)
```

### Export-Trace

```powershell
Export-Trace [-ETLFile] <string> [-Overwrite] [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

PARAMETERS:
- ConnectedDevice <switch> (Required: false)
- ETLFile <string> (Required: true)
- LogsDirectoryPath <string> (Required: false)
- Overwrite <switch> (Required: false)
- WprpFile <string> (Required: false)
```

### Export-UevConfiguration

```powershell
Export-UevConfiguration [-Path] <string> [<CommonParameters>]

PARAMETERS:
- Path <string> (Required: true)
```

### Export-UevPackage

```powershell
Export-UevPackage [-Path] <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

Export-UevPackage -LiteralPath <string[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Export-WindowsCapabilitySource

```powershell
Export-WindowsCapabilitySource -Name <string> -Source <string> -Target <string> -Path <string> [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Name <string> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- Source <string> (Required: true)
- SystemDrive <string> (Required: false)
- Target <string> (Required: true)
- WindowsDirectory <string> (Required: false)
```

### Export-WindowsDriver

```powershell
Export-WindowsDriver -Path <string> [-Destination <string>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Export-WindowsDriver -Online [-Destination <string>] [-WindowsDirectory <string>] [-SystemDrive <string>] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- Destination <string> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Online <switch> (Required: true)
- Path <string> (Required: true)
- ScratchDirectory <string> (Required: false)
- SystemDrive <string> (Required: false)
- WindowsDirectory <string> (Required: false)
```

### Export-WindowsImage

```powershell
Export-WindowsImage -DestinationImagePath <string> -SourceImagePath <string> -SourceName <string> [-CheckIntegrity] [-CompressionType <string>] [-DestinationName <string>] [-Setbootable] [-SplitImageFilePattern <string>] [-WIMBoot] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Export-WindowsImage -DestinationImagePath <string> -SourceImagePath <string> -SourceIndex <uint32> [-CheckIntegrity] [-CompressionType <string>] [-DestinationName <string>] [-Setbootable] [-SplitImageFilePattern <string>] [-WIMBoot] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Export-WindowsImage -DestinationImagePath <string> -SourceImagePath <string> [-CheckIntegrity] [-CompressionType <string>] [-DestinationName <string>] [-Setbootable] [-SplitImageFilePattern <string>] [-WIMBoot] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CheckIntegrity <switch> (Required: false)
- CompressionType <string> (Required: false)
- DestinationImagePath <string> (Required: true)
- DestinationName <string> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- ScratchDirectory <string> (Required: false)
- Setbootable <switch> (Required: false)
- SourceImagePath <string> (Required: true)
- SourceIndex <uint32> (Required: true)
- SourceName <string> (Required: true)
- SplitImageFilePattern <string> (Required: false)
- WIMBoot <switch> (Required: false)
```

### Export-WinhttpProxy

```powershell
SYNOPSIS:
Exports the current Winhttp proxy configuration.

DESCRIPTION:
Creates a script that contains the current configuration.
If saved to a file, this script can be used to restore altered configuration settings.
```

## F

### Find-Command

```powershell
Find-Command [[-Name] <string[]>] [-ModuleName <string>] [-MinimumVersion <version>] [-MaximumVersion <version>] [-RequiredVersion <version>] [-AllVersions] [-Tag <string[]>] [-Filter <string>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Repository <string[]>] [<CommonParameters>]

PARAMETERS:
- AllVersions <switch> (Required: false)
- Filter <string> (Required: false)
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- ModuleName <string> (Required: false)
- Name <string[]> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- Repository <string[]> (Required: false)
- RequiredVersion <version> (Required: false)
- Tag <string[]> (Required: false)
```

### Find-DscResource

```powershell
Find-DscResource [[-Name] <string[]>] [-ModuleName <string>] [-MinimumVersion <version>] [-MaximumVersion <version>] [-RequiredVersion <version>] [-AllVersions] [-Tag <string[]>] [-Filter <string>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Repository <string[]>] [<CommonParameters>]

PARAMETERS:
- AllVersions <switch> (Required: false)
- Filter <string> (Required: false)
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- ModuleName <string> (Required: false)
- Name <string[]> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- Repository <string[]> (Required: false)
- RequiredVersion <version> (Required: false)
- Tag <string[]> (Required: false)
```

### Find-LapsADExtendedRights

```powershell
Find-LapsADExtendedRights -Identity <string[]> [-Credential <pscredential>] [-Domain <string>] [-DomainController <string>] [-IncludeComputers] [<CommonParameters>]

PARAMETERS:
- Credential <pscredential> (Required: false)
- Domain <string> (Required: false)
- DomainController <string> (Required: false)
- Identity <string[]> (Required: true)
- IncludeComputers <switch> (Required: false)
```

### Find-Module

```powershell
Find-Module [[-Name] <string[]>] [-MinimumVersion <version>] [-MaximumVersion <version>] [-RequiredVersion <version>] [-AllVersions] [-IncludeDependencies] [-Filter <string>] [-Tag <string[]>] [-Includes <string[]>] [-DscResource <string[]>] [-RoleCapability <string[]>] [-Command <string[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Repository <string[]>] [-Credential <pscredential>] [<CommonParameters>]

PARAMETERS:
- AllVersions <switch> (Required: false)
- Command <string[]> (Required: false)
- Credential <pscredential> (Required: false)
- DscResource <string[]> (Required: false)
- Filter <string> (Required: false)
- IncludeDependencies <switch> (Required: false)
- Includes <string[]> (Required: false)
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- Name <string[]> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- Repository <string[]> (Required: false)
- RequiredVersion <version> (Required: false)
- RoleCapability <string[]> (Required: false)
- Tag <string[]> (Required: false)
```

### Find-NetIPsecRule

```powershell
Find-NetIPsecRule -RemoteAddress <string> [-LocalAddress <string>] [-Protocol <string>] [-LocalPort <uint16>] [-RemotePort <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- LocalAddress <string> (Required: false)
- LocalPort <uint16> (Required: false)
- Protocol <string> (Required: false)
- RemoteAddress <string> (Required: true)
- RemotePort <uint16> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Find-NetRoute

```powershell
Find-NetRoute -RemoteIPAddress <string> [-InterfaceIndex <uint32>] [-LocalIPAddress <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InterfaceIndex <uint32> (Required: false)
- LocalIPAddress <string> (Required: false)
- RemoteIPAddress <string> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### Find-Package

```powershell
Find-Package [[-Name] <string[]>] [-IncludeDependencies] [-AllVersions] [-Source <string[]>] [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-RequiredVersion <string>] [-MinimumVersion <string>] [-MaximumVersion <string>] [-Force] [-ForceBootstrap] [-ProviderName <string[]>] [-PackageManagementProvider <string>] [-PublishLocation <string>] [-ScriptSourceLocation <string>] [-ScriptPublishLocation <string>] [-Type <string>] [-Filter <string>] [-Tag <string[]>] [-Includes <string[]>] [-DscResource <string[]>] [-RoleCapability <string[]>] [-Command <string[]>] [<CommonParameters>]

PARAMETERS:
- AllVersions <switch> (Required: false)
- Command <string[]> (Required: false)
- Credential <pscredential> (Required: false)
- DscResource <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- IncludeDependencies <switch> (Required: false)
- Includes <string[]> (Required: false)
- MaximumVersion <string> (Required: false)
- MinimumVersion <string> (Required: false)
- Name <string[]> (Required: false)
- PackageManagementProvider <string> (Required: false)
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
```

### Find-PackageProvider

```powershell
Find-PackageProvider [[-Name] <string[]>] [-AllVersions] [-Source <string[]>] [-IncludeDependencies] [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-RequiredVersion <string>] [-MinimumVersion <string>] [-MaximumVersion <string>] [-Force] [-ForceBootstrap] [<CommonParameters>]

PARAMETERS:
- AllVersions <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- IncludeDependencies <switch> (Required: false)
- MaximumVersion <string> (Required: false)
- MinimumVersion <string> (Required: false)
- Name <string[]> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- RequiredVersion <string> (Required: false)
- Source <string[]> (Required: false)
```

### Find-RoleCapability

```powershell
Find-RoleCapability [[-Name] <string[]>] [-ModuleName <string>] [-MinimumVersion <version>] [-MaximumVersion <version>] [-RequiredVersion <version>] [-AllVersions] [-Tag <string[]>] [-Filter <string>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Repository <string[]>] [<CommonParameters>]

PARAMETERS:
- AllVersions <switch> (Required: false)
- Filter <string> (Required: false)
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- ModuleName <string> (Required: false)
- Name <string[]> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- Repository <string[]> (Required: false)
- RequiredVersion <version> (Required: false)
- Tag <string[]> (Required: false)
```

### Find-Script

```powershell
Find-Script [[-Name] <string[]>] [-MinimumVersion <version>] [-MaximumVersion <version>] [-RequiredVersion <version>] [-AllVersions] [-IncludeDependencies] [-Filter <string>] [-Tag <string[]>] [-Includes <string[]>] [-Command <string[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Repository <string[]>] [-Credential <pscredential>] [<CommonParameters>]

PARAMETERS:
- AllVersions <switch> (Required: false)
- Command <string[]> (Required: false)
- Credential <pscredential> (Required: false)
- Filter <string> (Required: false)
- IncludeDependencies <switch> (Required: false)
- Includes <string[]> (Required: false)
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- Name <string[]> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- Repository <string[]> (Required: false)
- RequiredVersion <version> (Required: false)
- Tag <string[]> (Required: false)
```

### Flush-EtwTraceSession

### ForEach-Object

```powershell
ForEach-Object [-Process] <scriptblock[]> [-InputObject <psobject>] [-Begin <scriptblock>] [-End <scriptblock>] [-RemainingScripts <scriptblock[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

ForEach-Object [-MemberName] <string> [-InputObject <psobject>] [-ArgumentList <Object[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ArgumentList <Object[]> (Required: false)
- Begin <scriptblock> (Required: false)
- Confirm <switch> (Required: false)
- End <scriptblock> (Required: false)
- InputObject <psobject> (Required: false)
- MemberName <string> (Required: true)
- Process <scriptblock[]> (Required: true)
- RemainingScripts <scriptblock[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Format-Custom

```powershell
Format-Custom [[-Property] <Object[]>] [-Depth <int>] [-GroupBy <Object>] [-View <string>] [-ShowError] [-DisplayError] [-Force] [-Expand <string>] [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- Depth <int> (Required: false)
- DisplayError <switch> (Required: false)
- Expand <string> (Required: false)
- Force <switch> (Required: false)
- GroupBy <Object> (Required: false)
- InputObject <psobject> (Required: false)
- Property <Object[]> (Required: false)
- ShowError <switch> (Required: false)
- View <string> (Required: false)
```

### Format-Hex

```powershell
Format-Hex [-Path] <string[]> [<CommonParameters>]

Format-Hex -LiteralPath <string[]> [<CommonParameters>]

Format-Hex -InputObject <Object> [-Encoding <string>] [-Raw] [<CommonParameters>]

PARAMETERS:
- Encoding <string> (Required: false)
- InputObject <Object> (Required: true)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- Raw <switch> (Required: false)
```

### Format-List

```powershell
Format-List [[-Property] <Object[]>] [-GroupBy <Object>] [-View <string>] [-ShowError] [-DisplayError] [-Force] [-Expand <string>] [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- DisplayError <switch> (Required: false)
- Expand <string> (Required: false)
- Force <switch> (Required: false)
- GroupBy <Object> (Required: false)
- InputObject <psobject> (Required: false)
- Property <Object[]> (Required: false)
- ShowError <switch> (Required: false)
- View <string> (Required: false)
```

### Format-SecureBootUEFI

```powershell
Format-SecureBootUEFI -Name <string> -SignatureOwner <guid> -CertificateFilePath <string[]> [-FormatWithCert] [-SignableFilePath <string>] [-Time <string>] [-AppendWrite] [-ContentFilePath <string>] [<CommonParameters>]

Format-SecureBootUEFI -Name <string> -SignatureOwner <guid> -Hash <string[]> -Algorithm <string> [-SignableFilePath <string>] [-Time <string>] [-AppendWrite] [-ContentFilePath <string>] [<CommonParameters>]

Format-SecureBootUEFI -Name <string> -Delete [-SignableFilePath <string>] [-Time <string>] [<CommonParameters>]

PARAMETERS:
- Algorithm <string> (Required: true)
- AppendWrite <switch> (Required: false)
- CertificateFilePath <string[]> (Required: true)
- ContentFilePath <string> (Required: false)
- Delete <switch> (Required: true)
- FormatWithCert <switch> (Required: false)
- Hash <string[]> (Required: true)
- Name <string> (Required: true)
- SignableFilePath <string> (Required: false)
- SignatureOwner <guid> (Required: true)
- Time <string> (Required: false)
```

### Format-Table

```powershell
Format-Table [[-Property] <Object[]>] [-AutoSize] [-RepeatHeader] [-HideTableHeaders] [-Wrap] [-GroupBy <Object>] [-View <string>] [-ShowError] [-DisplayError] [-Force] [-Expand <string>] [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- AutoSize <switch> (Required: false)
- DisplayError <switch> (Required: false)
- Expand <string> (Required: false)
- Force <switch> (Required: false)
- GroupBy <Object> (Required: false)
- HideTableHeaders <switch> (Required: false)
- InputObject <psobject> (Required: false)
- Property <Object[]> (Required: false)
- RepeatHeader <switch> (Required: false)
- ShowError <switch> (Required: false)
- View <string> (Required: false)
- Wrap <switch> (Required: false)
```

### Format-Volume

```powershell
Format-Volume [-DriveLetter] <char[]> [-FileSystem <string>] [-NewFileSystemLabel <string>] [-AllocationUnitSize <uint32>] [-Full] [-Force] [-Compress] [-ShortFileNameSupport <bool>] [-SetIntegrityStreams <bool>] [-UseLargeFRS] [-DisableHeatGathering] [-IsDAX <bool>] [-NoTrim] [-SHA256Checksums] [-DevDrive] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Format-Volume -ObjectId <string[]> [-FileSystem <string>] [-NewFileSystemLabel <string>] [-AllocationUnitSize <uint32>] [-Full] [-Force] [-Compress] [-ShortFileNameSupport <bool>] [-SetIntegrityStreams <bool>] [-UseLargeFRS] [-DisableHeatGathering] [-IsDAX <bool>] [-NoTrim] [-SHA256Checksums] [-DevDrive] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Format-Volume -Path <string[]> [-FileSystem <string>] [-NewFileSystemLabel <string>] [-AllocationUnitSize <uint32>] [-Full] [-Force] [-Compress] [-ShortFileNameSupport <bool>] [-SetIntegrityStreams <bool>] [-UseLargeFRS] [-DisableHeatGathering] [-IsDAX <bool>] [-NoTrim] [-SHA256Checksums] [-DevDrive] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Format-Volume -FileSystemLabel <string[]> [-FileSystem <string>] [-NewFileSystemLabel <string>] [-AllocationUnitSize <uint32>] [-Full] [-Force] [-Compress] [-ShortFileNameSupport <bool>] [-SetIntegrityStreams <bool>] [-UseLargeFRS] [-DisableHeatGathering] [-IsDAX <bool>] [-NoTrim] [-SHA256Checksums] [-DevDrive] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Format-Volume [-Partition <CimInstance#MSFT_Partition>] [-FileSystem <string>] [-NewFileSystemLabel <string>] [-AllocationUnitSize <uint32>] [-Full] [-Force] [-Compress] [-ShortFileNameSupport <bool>] [-SetIntegrityStreams <bool>] [-UseLargeFRS] [-DisableHeatGathering] [-IsDAX <bool>] [-NoTrim] [-SHA256Checksums] [-DevDrive] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Format-Volume -InputObject <CimInstance#MSFT_Volume[]> [-FileSystem <string>] [-NewFileSystemLabel <string>] [-AllocationUnitSize <uint32>] [-Full] [-Force] [-Compress] [-ShortFileNameSupport <bool>] [-SetIntegrityStreams <bool>] [-UseLargeFRS] [-DisableHeatGathering] [-IsDAX <bool>] [-NoTrim] [-SHA256Checksums] [-DevDrive] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllocationUnitSize <uint32> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Compress <switch> (Required: false)
- Confirm <switch> (Required: false)
- DevDrive <switch> (Required: false)
- DisableHeatGathering <switch> (Required: false)
- DriveLetter <char[]> (Required: true)
- FileSystem <string> (Required: false)
- FileSystemLabel <string[]> (Required: true)
- Force <switch> (Required: false)
- Full <switch> (Required: false)
- InputObject <CimInstance#MSFT_Volume[]> (Required: true)
- IsDAX <bool> (Required: false)
- NewFileSystemLabel <string> (Required: false)
- NoTrim <switch> (Required: false)
- ObjectId <string[]> (Required: true)
- Partition <CimInstance#MSFT_Partition> (Required: false)
- Path <string[]> (Required: true)
- SHA256Checksums <switch> (Required: false)
- SetIntegrityStreams <bool> (Required: false)
- ShortFileNameSupport <bool> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseLargeFRS <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Format-Wide

```powershell
Format-Wide [[-Property] <Object>] [-AutoSize] [-Column <int>] [-GroupBy <Object>] [-View <string>] [-ShowError] [-DisplayError] [-Force] [-Expand <string>] [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- AutoSize <switch> (Required: false)
- Column <int> (Required: false)
- DisplayError <switch> (Required: false)
- Expand <string> (Required: false)
- Force <switch> (Required: false)
- GroupBy <Object> (Required: false)
- InputObject <psobject> (Required: false)
- Property <Object> (Required: false)
- ShowError <switch> (Required: false)
- View <string> (Required: false)
```
