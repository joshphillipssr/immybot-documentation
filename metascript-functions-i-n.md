# Metascript Functions I through N

## I

### Import-Alias

```powershell
Import-Alias [-Path] <string> [-Scope <string>] [-PassThru] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Import-Alias -LiteralPath <string> [-Scope <string>] [-PassThru] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- LiteralPath <string> (Required: true)
- PassThru <switch> (Required: false)
- Path <string> (Required: true)
- Scope <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Import-BCCachePackage

```powershell
Import-BCCachePackage [-Path] <string> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Path <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Import-BcdStore

```powershell
Import-BcdStore [-Path] <string> [-NoClean] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- NoClean <switch> (Required: false)
- Path <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Import-BCSecretKey

```powershell
Import-BCSecretKey [-Filename] <string> -FilePassphrase <string> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### Import-BinaryMiLog

```powershell
Import-BinaryMiLog [-Path] <string> [<CommonParameters>]

PARAMETERS:
- Path <string> (Required: true)
```

### Import-Certificate

```powershell
Import-Certificate [-FilePath] <string> [-CertStoreLocation <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CertStoreLocation <string> (Required: false)
- Confirm <switch> (Required: false)
- FilePath <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Import-Clixml

```powershell
Import-Clixml [-Path] <string[]> [-IncludeTotalCount] [-Skip <uint64>] [-First <uint64>] [<CommonParameters>]

Import-Clixml -LiteralPath <string[]> [-IncludeTotalCount] [-Skip <uint64>] [-First <uint64>] [<CommonParameters>]

PARAMETERS:
- First <uint64> (Required: false)
- IncludeTotalCount <switch> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- Skip <uint64> (Required: false)
```

### Import-Counter

```powershell
Import-Counter [-Path] <string[]> [-StartTime <datetime>] [-EndTime <datetime>] [-Counter <string[]>] [-MaxSamples <long>] [<CommonParameters>]

Import-Counter [-Path] <string[]> -ListSet <string[]> [<CommonParameters>]

Import-Counter [-Path] <string[]> [-Summary] [<CommonParameters>]

PARAMETERS:
- Counter <string[]> (Required: false)
- EndTime <datetime> (Required: false)
- ListSet <string[]> (Required: true)
- MaxSamples <long> (Required: false)
- Path <string[]> (Required: true)
- StartTime <datetime> (Required: false)
- Summary <switch> (Required: false)
```

### Import-Csv

```powershell
Import-Csv [[-Path] <string[]>] [[-Delimiter] <char>] [-LiteralPath <string[]>] [-Header <string[]>] [-Encoding <string>] [<CommonParameters>]

Import-Csv [[-Path] <string[]>] -UseCulture [-LiteralPath <string[]>] [-Header <string[]>] [-Encoding <string>] [<CommonParameters>]

PARAMETERS:
- Delimiter <char> (Required: false)
- Encoding <string> (Required: false)
- Header <string[]> (Required: false)
- LiteralPath <string[]> (Required: false)
- Path <string[]> (Required: false)
- UseCulture <switch> (Required: true)
```

### Import-IseSnippet

```powershell
Import-IseSnippet

```

### Import-LocalizedData

```powershell
Import-LocalizedData [[-BindingVariable] <string>] [[-UICulture] <string>] [-BaseDirectory <string>] [-FileName <string>] [-SupportedCommand <string[]>] [<CommonParameters>]

PARAMETERS:
- BaseDirectory <string> (Required: false)
- BindingVariable <string> (Required: false)
- FileName <string> (Required: false)
- SupportedCommand <string[]> (Required: false)
- UICulture <string> (Required: false)
```

### Import-Module

```powershell
Import-Module [-Name] <string[]> [-Global] [-Prefix <string>] [-Function <string[]>] [-Cmdlet <string[]>] [-Variable <string[]>] [-Alias <string[]>] [-Force] [-PassThru] [-AsCustomObject] [-MinimumVersion <version>] [-MaximumVersion <string>] [-RequiredVersion <version>] [-ArgumentList <Object[]>] [-DisableNameChecking] [-NoClobber] [-Scope <string>] [<CommonParameters>]

Import-Module [-Name] <string[]> -PSSession <PSSession> [-Global] [-Prefix <string>] [-Function <string[]>] [-Cmdlet <string[]>] [-Variable <string[]>] [-Alias <string[]>] [-Force] [-PassThru] [-AsCustomObject] [-MinimumVersion <version>] [-MaximumVersion <string>] [-RequiredVersion <version>] [-ArgumentList <Object[]>] [-DisableNameChecking] [-NoClobber] [-Scope <string>] [<CommonParameters>]

Import-Module [-Name] <string[]> -CimSession <CimSession> [-Global] [-Prefix <string>] [-Function <string[]>] [-Cmdlet <string[]>] [-Variable <string[]>] [-Alias <string[]>] [-Force] [-PassThru] [-AsCustomObject] [-MinimumVersion <version>] [-MaximumVersion <string>] [-RequiredVersion <version>] [-ArgumentList <Object[]>] [-DisableNameChecking] [-NoClobber] [-Scope <string>] [-CimResourceUri <uri>] [-CimNamespace <string>] [<CommonParameters>]

Import-Module [-FullyQualifiedName] <ModuleSpecification[]> -PSSession <PSSession> [-Global] [-Prefix <string>] [-Function <string[]>] [-Cmdlet <string[]>] [-Variable <string[]>] [-Alias <string[]>] [-Force] [-PassThru] [-AsCustomObject] [-ArgumentList <Object[]>] [-DisableNameChecking] [-NoClobber] [-Scope <string>] [<CommonParameters>]

Import-Module [-FullyQualifiedName] <ModuleSpecification[]> [-Global] [-Prefix <string>] [-Function <string[]>] [-Cmdlet <string[]>] [-Variable <string[]>] [-Alias <string[]>] [-Force] [-PassThru] [-AsCustomObject] [-ArgumentList <Object[]>] [-DisableNameChecking] [-NoClobber] [-Scope <string>] [<CommonParameters>]

Import-Module [-Assembly] <Assembly[]> [-Global] [-Prefix <string>] [-Function <string[]>] [-Cmdlet <string[]>] [-Variable <string[]>] [-Alias <string[]>] [-Force] [-PassThru] [-AsCustomObject] [-ArgumentList <Object[]>] [-DisableNameChecking] [-NoClobber] [-Scope <string>] [<CommonParameters>]

Import-Module [-ModuleInfo] <psmoduleinfo[]> [-Global] [-Prefix <string>] [-Function <string[]>] [-Cmdlet <string[]>] [-Variable <string[]>] [-Alias <string[]>] [-Force] [-PassThru] [-AsCustomObject] [-ArgumentList <Object[]>] [-DisableNameChecking] [-NoClobber] [-Scope <string>] [<CommonParameters>]

PARAMETERS:
- Alias <string[]> (Required: false)
- ArgumentList <Object[]> (Required: false)
- AsCustomObject <switch> (Required: false)
- Assembly <Assembly[]> (Required: true)
- CimNamespace <string> (Required: false)
- CimResourceUri <uri> (Required: false)
- CimSession <CimSession> (Required: true)
- Cmdlet <string[]> (Required: false)
- DisableNameChecking <switch> (Required: false)
- Force <switch> (Required: false)
- FullyQualifiedName <ModuleSpecification[]> (Required: true)
- Function <string[]> (Required: false)
- Global <switch> (Required: false)
- MaximumVersion <string> (Required: false)
- MinimumVersion <version> (Required: false)
- ModuleInfo <psmoduleinfo[]> (Required: true)
- Name <string[]> (Required: true)
- NoClobber <switch> (Required: false)
- PSSession <PSSession> (Required: true)
- PassThru <switch> (Required: false)
- Prefix <string> (Required: false)
- RequiredVersion <version> (Required: false)
- Scope <string> (Required: false)
- Variable <string[]> (Required: false)
```

### Import-PackageProvider

```powershell
Import-PackageProvider [-Name] <string[]> [-RequiredVersion <string>] [-MinimumVersion <string>] [-MaximumVersion <string>] [-Force] [-ForceBootstrap] [<CommonParameters>]

PARAMETERS:
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- MaximumVersion <string> (Required: false)
- MinimumVersion <string> (Required: false)
- Name <string[]> (Required: true)
- RequiredVersion <string> (Required: false)
```

### Import-PfxCertificate

```powershell
Import-PfxCertificate [-FilePath] <string> [[-CertStoreLocation] <string>] [-Exportable] [-ProtectPrivateKey <ProtectPrivateKeyType>] [-Password <securestring>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CertStoreLocation <string> (Required: false)
- Confirm <switch> (Required: false)
- Exportable <switch> (Required: false)
- FilePath <string> (Required: true)
- Password <securestring> (Required: false)
- ProtectPrivateKey <ProtectPrivateKeyType> (Required: false)
- WhatIf <switch> (Required: false)
```

### Import-PowerShellDataFile

```powershell
Import-PowerShellDataFile [[-Path] <string[]>] [<CommonParameters>]

Import-PowerShellDataFile [-LiteralPath <string[]>] [<CommonParameters>]

PARAMETERS:
- LiteralPath <string[]> (Required: false)
- Path <string[]> (Required: false)
```

### Import-PSSession

```powershell
Import-PSSession [-Session] <PSSession> [[-CommandName] <string[]>] [[-FormatTypeName] <string[]>] [-Prefix <string>] [-DisableNameChecking] [-AllowClobber] [-ArgumentList <Object[]>] [-CommandType <CommandTypes>] [-Module <string[]>] [-FullyQualifiedModule <ModuleSpecification[]>] [-Certificate <X509Certificate2>] [<CommonParameters>]

PARAMETERS:
- AllowClobber <switch> (Required: false)
- ArgumentList <Object[]> (Required: false)
- Certificate <X509Certificate2> (Required: false)
- CommandName <string[]> (Required: false)
- CommandType <CommandTypes> (Required: false)
- DisableNameChecking <switch> (Required: false)
- FormatTypeName <string[]> (Required: false)
- FullyQualifiedModule <ModuleSpecification[]> (Required: false)
- Module <string[]> (Required: false)
- Prefix <string> (Required: false)
- Session <PSSession> (Required: true)
```

### Import-StartLayout

```powershell
Import-StartLayout [-LayoutPath] <string> [-MountPath] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

Import-StartLayout -LayoutLiteralPath <string> -MountLiteralPath <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- LayoutLiteralPath <string> (Required: true)
- LayoutPath <string> (Required: true)
- MountLiteralPath <string> (Required: true)
- MountPath <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### ImportSystemModules

```powershell
ImportSystemModules

```

### Import-TpmOwnerAuth

```powershell
Import-TpmOwnerAuth -File <string> [<CommonParameters>]

Import-TpmOwnerAuth [-OwnerAuthorization] <string> [<CommonParameters>]

PARAMETERS:
- File <string> (Required: true)
- OwnerAuthorization <string> (Required: true)
```

### Import-UevConfiguration

```powershell
Import-UevConfiguration [-Path] <string> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Path <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### Import-WinhttpProxy

```powershell
SYNOPSIS:
Imports WinHTTP proxy settings.

DESCRIPTION:
Imports WinHTTP proxy settings.

```

### In

```powershell
SYNOPSIS:
A convenience function that executes a script from a specified path.

DESCRIPTION:
Before the script block passed to the execute parameter is invoked,
the current location is set to the path specified. Once the script
block has been executed, the location will be reset to the location
the script was in prior to calling In.

PARAMETERS:
- path <Object> (Required: false)
- execute <ScriptBlock> (Required: false)
```

### Initialize-Disk

```powershell
Initialize-Disk [-Number] <uint32[]> [-PartitionStyle <PartitionStyle>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Initialize-Disk -UniqueId <string[]> [-PartitionStyle <PartitionStyle>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Initialize-Disk [-FriendlyName <string[]>] [-PartitionStyle <PartitionStyle>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Initialize-Disk -Path <string[]> [-PartitionStyle <PartitionStyle>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Initialize-Disk [-VirtualDisk <CimInstance#MSFT_VirtualDisk>] [-PartitionStyle <PartitionStyle>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

Initialize-Disk -InputObject <CimInstance#MSFT_Disk[]> [-PartitionStyle <PartitionStyle>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string[]> (Required: false)
- InputObject <CimInstance#MSFT_Disk[]> (Required: true)
- Number <uint32[]> (Required: true)
- PartitionStyle <PartitionStyle> (Required: false)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- UniqueId <string[]> (Required: true)
- VirtualDisk <CimInstance#MSFT_VirtualDisk> (Required: false)
- WhatIf <switch> (Required: false)
```

### Initialize-PmemPhysicalDevice

```powershell
Initialize-PmemPhysicalDevice -DeviceId <string> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- DeviceId <string> (Required: true)
- Force <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Initialize-Tpm

```powershell
Initialize-Tpm [-AllowClear] [-AllowPhysicalPresence] [<CommonParameters>]

PARAMETERS:
- AllowClear <switch> (Required: false)
- AllowPhysicalPresence <switch> (Required: false)
```

### InModuleScope

```powershell
SYNOPSIS:
Allows you to execute parts of a test script within the
scope of a PowerShell script module.

DESCRIPTION:
By injecting some test code into the scope of a PowerShell
script module, you can use non-exported functions, aliases
and variables inside that module, to perform unit tests on
its internal implementation.

InModuleScope may be used anywhere inside a Pester script,
either inside or outside a Describe block.

PARAMETERS:

- ModuleName <String> (Required: true)
- ScriptBlock <ScriptBlock> (Required: true)

```

### Install-Dtc

```powershell
Install-Dtc [-LogPath <string>] [-StartType <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- LogPath <string> (Required: false)
- StartType <string> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### Install-Language

```powershell
Install-Language [-Language] <string> [-CopyToSettings] [-ExcludeFeatures] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CopyToSettings <switch> (Required: false)
- ExcludeFeatures <switch> (Required: false)
- Language <string> (Required: true)
```

### Install-Module

```powershell
Install-Module [-Name] <string[]> [-MinimumVersion <version>] [-MaximumVersion <version>] [-RequiredVersion <version>] [-Repository <string[]>] [-Credential <pscredential>] [-Scope <string>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllowClobber] [-SkipPublisherCheck] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Install-Module [-InputObject] <psobject[]> [-Credential <pscredential>] [-Scope <string>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllowClobber] [-SkipPublisherCheck] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowClobber <switch> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- InputObject <psobject[]> (Required: true)
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- Name <string[]> (Required: true)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- Repository <string[]> (Required: false)
- RequiredVersion <version> (Required: false)
- Scope <string> (Required: false)
- SkipPublisherCheck <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Install-Package

```powershell
Install-Package [-Name] <string[]> [-RequiredVersion <string>] [-MinimumVersion <string>] [-MaximumVersion <string>] [-Source <string[]>] [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-ProviderName <string[]>] [<CommonParameters>]

Install-Package [-InputObject] <SoftwareIdentity[]> [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [<CommonParameters>]

Install-Package [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-IncludeWindowsInstaller] [-IncludeSystemComponent] [<CommonParameters>]

Install-Package [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-IncludeWindowsInstaller] [-IncludeSystemComponent] [<CommonParameters>]

Install-Package [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-AdditionalArguments <string[]>] [<CommonParameters>]

Install-Package [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-AdditionalArguments <string[]>] [<CommonParameters>]

Install-Package [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-PackageManagementProvider <string>] [-PublishLocation <string>] [-ScriptSourceLocation <string>] [-ScriptPublishLocation <string>] [-Type <string>] [-Filter <string>] [-Tag <string[]>] [-Includes <string[]>] [-DscResource <string[]>] [-RoleCapability <string[]>] [-Command <string[]>] [-Scope <string>] [-AllowClobber] [-SkipPublisherCheck] [-InstallUpdate] [-NoPathUpdate] [<CommonParameters>]

Install-Package [-Credential <pscredential>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [-PackageManagementProvider <string>] [-PublishLocation <string>] [-ScriptSourceLocation <string>] [-ScriptPublishLocation <string>] [-Type <string>] [-Filter <string>] [-Tag <string[]>] [-Includes <string[]>] [-DscResource <string[]>] [-RoleCapability <string[]>] [-Command <string[]>] [-Scope <string>] [-AllowClobber] [-SkipPublisherCheck] [-InstallUpdate] [-NoPathUpdate] [<CommonParameters>]

PARAMETERS:
- AdditionalArguments <string[]> (Required: false)
- AllVersions <switch> (Required: false)
- AllowClobber <switch> (Required: false)
- Command <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- DscResource <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- IncludeSystemComponent <switch> (Required: false)
- IncludeWindowsInstaller <switch> (Required: false)
- Includes <string[]> (Required: false)
- InputObject <SoftwareIdentity[]> (Required: true)
- InstallUpdate <switch> (Required: false)
- MaximumVersion <string> (Required: false)
- MinimumVersion <string> (Required: false)
- Name <string[]> (Required: true)
- NoPathUpdate <switch> (Required: false)
- PackageManagementProvider <string> (Required: false)
- ProviderName <string[]> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- PublishLocation <string> (Required: false)
- RequiredVersion <string> (Required: false)
- RoleCapability <string[]> (Required: false)
- Scope <string> (Required: false)
- ScriptPublishLocation <string> (Required: false)
- ScriptSourceLocation <string> (Required: false)
- SkipPublisherCheck <switch> (Required: false)
- Source <string[]> (Required: false)
- Tag <string[]> (Required: false)
- Type <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Install-PackageProvider

```powershell
Install-PackageProvider [-Name] <string[]> [-RequiredVersion <string>] [-MinimumVersion <string>] [-MaximumVersion <string>] [-Credential <pscredential>] [-Scope <string>] [-Source <string[]>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [<CommonParameters>]

Install-PackageProvider [-InputObject] <SoftwareIdentity[]> [-Scope <string>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-AllVersions] [-Force] [-ForceBootstrap] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllVersions <switch> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- ForceBootstrap <switch> (Required: false)
- InputObject <SoftwareIdentity[]> (Required: true)
- MaximumVersion <string> (Required: false)
- MinimumVersion <string> (Required: false)
- Name <string[]> (Required: true)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- RequiredVersion <string> (Required: false)
- Scope <string> (Required: false)
- Source <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### Install-ProvisioningPackage

```powershell
Install-ProvisioningPackage [-PackagePath] <string> [-ForceInstall] [-QuietInstall] [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

PARAMETERS:
- ConnectedDevice <switch> (Required: false)
- ForceInstall <switch> (Required: false)
- LogsDirectoryPath <string> (Required: false)
- PackagePath <string> (Required: true)
- QuietInstall <switch> (Required: false)
- WprpFile <string> (Required: false)
```

### Install-Script

```powershell
Install-Script [-Name] <string[]> [-MinimumVersion <version>] [-MaximumVersion <version>] [-RequiredVersion <version>] [-Repository <string[]>] [-Scope <string>] [-NoPathUpdate] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

Install-Script [-InputObject] <psobject[]> [-Scope <string>] [-NoPathUpdate] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-Credential <pscredential>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- InputObject <psobject[]> (Required: true)
- MaximumVersion <version> (Required: false)
- MinimumVersion <version> (Required: false)
- Name <string[]> (Required: true)
- NoPathUpdate <switch> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- Repository <string[]> (Required: false)
- RequiredVersion <version> (Required: false)
- Scope <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Install-TrustedProvisioningCertificate

```powershell
Install-TrustedProvisioningCertificate [-CertificatePath] <string> [-ForceInstall] [-LogsDirectoryPath <string>] [-WprpFile <string>] [-ConnectedDevice] [<CommonParameters>]

PARAMETERS:
- CertificatePath <string> (Required: true)
- ConnectedDevice <switch> (Required: false)
- ForceInstall <switch> (Required: false)
- LogsDirectoryPath <string> (Required: false)
- WprpFile <string> (Required: false)
```

### Invoke-AsWorkflow

```powershell
Invoke-AsWorkflow [-CommandName <string>] [-Parameter <hashtable>] [<WorkflowCommonParameters>] [<CommonParameters>]

Invoke-AsWorkflow [-Expression <string>] [<WorkflowCommonParameters>] [<CommonParameters>]

PARAMETERS:
- CommandName <string> (Required: false)
- Expression <string> (Required: false)
- Parameter <hashtable> (Required: false)
```

### Invoke-CimMethod

```powershell
Invoke-CimMethod [-ClassName] <string> [[-Arguments] <IDictionary>] [-MethodName] <string> [-ComputerName <string[]>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-CimMethod [-ClassName] <string> [[-Arguments] <IDictionary>] [-MethodName] <string> -CimSession <CimSession[]> [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-CimMethod [[-Arguments] <IDictionary>] [-MethodName] <string> -ResourceUri <uri> [-ComputerName <string[]>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-CimMethod [-InputObject] <ciminstance> [[-Arguments] <IDictionary>] [-MethodName] <string> -CimSession <CimSession[]> [-ResourceUri <uri>] [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-CimMethod [-InputObject] <ciminstance> [[-Arguments] <IDictionary>] [-MethodName] <string> [-ResourceUri <uri>] [-ComputerName <string[]>] [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-CimMethod [[-Arguments] <IDictionary>] [-MethodName] <string> -ResourceUri <uri> -CimSession <CimSession[]> [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-CimMethod [-CimClass] <cimclass> [[-Arguments] <IDictionary>] [-MethodName] <string> [-ComputerName <string[]>] [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-CimMethod [-CimClass] <cimclass> [[-Arguments] <IDictionary>] [-MethodName] <string> -CimSession <CimSession[]> [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-CimMethod [[-Arguments] <IDictionary>] [-MethodName] <string> -Query <string> [-QueryDialect <string>] [-ComputerName <string[]>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-CimMethod [[-Arguments] <IDictionary>] [-MethodName] <string> -Query <string> -CimSession <CimSession[]> [-QueryDialect <string>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Arguments <IDictionary> (Required: false)
- CimClass <cimclass> (Required: true)
- CimSession <CimSession[]> (Required: true)
- ClassName <string> (Required: true)
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- InputObject <ciminstance> (Required: true)
- MethodName <string> (Required: true)
- Namespace <string> (Required: false)
- OperationTimeoutSec <uint32> (Required: false)
- Query <string> (Required: true)
- QueryDialect <string> (Required: false)
- ResourceUri <uri> (Required: true)
- WhatIf <switch> (Required: false)
```

### Invoke-Command

```powershell
Invoke-Command [-ScriptBlock] <scriptblock> [-NoNewScope] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

Invoke-Command [[-Session] <PSSession[]>] [-ScriptBlock] <scriptblock> [-ThrottleLimit <int>] [-AsJob] [-HideComputerName] [-JobName <string>] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

Invoke-Command [[-Session] <PSSession[]>] [-FilePath] <string> [-ThrottleLimit <int>] [-AsJob] [-HideComputerName] [-JobName <string>] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

Invoke-Command [[-ComputerName] <string[]>] [-FilePath] <string> [-Credential <pscredential>] [-Port <int>] [-UseSSL] [-ConfigurationName <string>] [-ApplicationName <string>] [-ThrottleLimit <int>] [-AsJob] [-InDisconnectedSession] [-SessionName <string[]>] [-HideComputerName] [-JobName <string>] [-SessionOption <PSSessionOption>] [-Authentication <AuthenticationMechanism>] [-EnableNetworkAccess] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

Invoke-Command [[-ComputerName] <string[]>] [-ScriptBlock] <scriptblock> [-Credential <pscredential>] [-Port <int>] [-UseSSL] [-ConfigurationName <string>] [-ApplicationName <string>] [-ThrottleLimit <int>] [-AsJob] [-InDisconnectedSession] [-SessionName <string[]>] [-HideComputerName] [-JobName <string>] [-SessionOption <PSSessionOption>] [-Authentication <AuthenticationMechanism>] [-EnableNetworkAccess] [-InputObject <psobject>] [-ArgumentList <Object[]>] [-CertificateThumbprint <string>] [<CommonParameters>]

Invoke-Command [-ScriptBlock] <scriptblock> -Credential <pscredential> -VMName <string[]> [-ConfigurationName <string>] [-ThrottleLimit <int>] [-AsJob] [-HideComputerName] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

Invoke-Command [[-ConnectionUri] <uri[]>] [-ScriptBlock] <scriptblock> [-Credential <pscredential>] [-ConfigurationName <string>] [-ThrottleLimit <int>] [-AsJob] [-InDisconnectedSession] [-HideComputerName] [-JobName <string>] [-AllowRedirection] [-SessionOption <PSSessionOption>] [-Authentication <AuthenticationMechanism>] [-EnableNetworkAccess] [-InputObject <psobject>] [-ArgumentList <Object[]>] [-CertificateThumbprint <string>] [<CommonParameters>]

Invoke-Command [[-ConnectionUri] <uri[]>] [-FilePath] <string> [-Credential <pscredential>] [-ConfigurationName <string>] [-ThrottleLimit <int>] [-AsJob] [-InDisconnectedSession] [-HideComputerName] [-JobName <string>] [-AllowRedirection] [-SessionOption <PSSessionOption>] [-Authentication <AuthenticationMechanism>] [-EnableNetworkAccess] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

Invoke-Command [-VMId] <guid[]> [-ScriptBlock] <scriptblock> -Credential <pscredential> [-ConfigurationName <string>] [-ThrottleLimit <int>] [-AsJob] [-HideComputerName] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

Invoke-Command [-VMId] <guid[]> [-FilePath] <string> -Credential <pscredential> [-ConfigurationName <string>] [-ThrottleLimit <int>] [-AsJob] [-HideComputerName] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

Invoke-Command [-FilePath] <string> -Credential <pscredential> -VMName <string[]> [-ConfigurationName <string>] [-ThrottleLimit <int>] [-AsJob] [-HideComputerName] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

Invoke-Command [-ScriptBlock] <scriptblock> -ContainerId <string[]> [-ConfigurationName <string>] [-ThrottleLimit <int>] [-AsJob] [-HideComputerName] [-JobName <string>] [-RunAsAdministrator] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

Invoke-Command [-FilePath] <string> -ContainerId <string[]> [-ConfigurationName <string>] [-ThrottleLimit <int>] [-AsJob] [-HideComputerName] [-JobName <string>] [-RunAsAdministrator] [-InputObject <psobject>] [-ArgumentList <Object[]>] [<CommonParameters>]

PARAMETERS:
- AllowRedirection <switch> (Required: false)
- ApplicationName <string> (Required: false)
- ArgumentList <Object[]> (Required: false)
- AsJob <switch> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string[]> (Required: false)
- ConfigurationName <string> (Required: false)
- ConnectionUri <uri[]> (Required: false)
- ContainerId <string[]> (Required: true)
- Credential <pscredential> (Required: true)
- EnableNetworkAccess <switch> (Required: false)
- FilePath <string> (Required: true)
- HideComputerName <switch> (Required: false)
- InDisconnectedSession <switch> (Required: false)
- InputObject <psobject> (Required: false)
- JobName <string> (Required: false)
- NoNewScope <switch> (Required: false)
- Port <int> (Required: false)
- RunAsAdministrator <switch> (Required: false)
- ScriptBlock <scriptblock> (Required: true)
- Session <PSSession[]> (Required: false)
- SessionName <string[]> (Required: false)
- SessionOption <PSSessionOption> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseSSL <switch> (Required: false)
- VMId <guid[]> (Required: true)
- VMName <string[]> (Required: true)
```

### Invoke-CommandInDesktopPackage

```powershell
Invoke-CommandInDesktopPackage [-PackageFamilyName] <string> [[-AppId] <string>] [-Command] <string> [[-Args] <string>] [-PreventBreakaway] [<CommonParameters>]

PARAMETERS:
- AppId <string> (Required: false)
- Args <string> (Required: false)
- Command <string> (Required: true)
- PackageFamilyName <string> (Required: true)
- PreventBreakaway <switch> (Required: false)
```

### Invoke-DscResource

```powershell
Invoke-DscResource [-Name] <string> [-Method] <string> -ModuleName <ModuleSpecification> -Property <hashtable> [<CommonParameters>]

PARAMETERS:
- Method <string> (Required: true)
- ModuleName <ModuleSpecification> (Required: true)
- Name <string> (Required: true)
- Property <hashtable> (Required: true)
```

### Invoke-Expression

```powershell
Invoke-Expression [-Command] <string> [<CommonParameters>]

PARAMETERS:
- Command <string> (Required: true)
```

### Invoke-History

```powershell
Invoke-History [[-Id] <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Id <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### Invoke-Item

```powershell
Invoke-Item [-Path] <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Invoke-Item -LiteralPath <string[]> [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Path <string[]> (Required: true)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Invoke-LapsPolicyProcessing

```powershell
Invoke-LapsPolicyProcessing [<CommonParameters>]

```

### Invoke-Mock

```powershell
SYNOPSIS:
This command is used by Pester's Mocking framework.  You do not need to call it directly.

PARAMETERS:

- CommandName <String> (Required: true)
- MockCallState <Hashtable> (Required: true)
- ModuleName <String> (Required: false)
- BoundParameters <Hashtable> (Required: false)
- ArgumentList <Object[]> (Required: false)
- CallerSessionState <Object> (Required: false)
- FromBlock <String> (Required: false)
- InputObject <Object> (Required: false)

```

### Invoke-OperationValidation

```powershell
Invoke-OperationValidation [-TestInfo <psobject[]>] [-IncludePesterOutput] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-OperationValidation [-testFilePath <string[]>] [-IncludePesterOutput] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-OperationValidation [-ModuleName <string[]>] [-TestType <string[]>] [-IncludePesterOutput] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- IncludePesterOutput <switch> (Required: false)
- ModuleName <string[]> (Required: false)
- TestInfo <psobject[]> (Required: false)
- TestType <string[]> (Required: false)
- WhatIf <switch> (Required: false)
- testFilePath <string[]> (Required: false)
```

### Invoke-Pester

```powershell
SYNOPSIS:
Invokes Pester to run all tests (files containing *.Tests.ps1) recursively under the Path

DESCRIPTION:
Upon calling Invoke-Pester, all files that have a name containing
"*.Tests.ps1" will have the tests defined in their Describe blocks
executed. Invoke-Pester begins at the location of Path and
runs recursively through each sub directory looking for
"*.Tests.ps1" files containing tests. If a TestName is provided,
Invoke-Pester will only run tests that have a describe block with a
matching name. By default, Invoke-Pester will end the test run with a
simple report of the number of tests passed and failed output to the
console. One may want pester to "fail a build" in the event that any
tests fail. To accomodate this, Invoke-Pester will return an exit
code equal to the number of failed tests if the EnableExit switch is
set. Invoke-Pester will also write a NUnit style log of test results
if the OutputXml parameter is provided. In these cases, Invoke-Pester
will write the result log to the path provided in the OutputXml
parameter.

Optionally, Pester can generate a report of how much code is covered
by the tests, and information about any commands which were not
executed.

PARAMETERS:

- Script <Object[]> (Required: false)
- TestName <String[]> (Required: false)
- EnableExit <SwitchParameter> (Required: false)
- OutputXml <String> (Required: false)
- Tag <String[]> (Required: false)
- ExcludeTag <String[]> (Required: false)
- PassThru <SwitchParameter> (Required: false)
- CodeCoverage <Object[]> (Required: false)
- Strict <SwitchParameter> (Required: false)
- OutputFile <String> (Required: true)
- OutputFormat <String> (Required: true)
- Quiet <SwitchParameter> (Required: false)
- PesterOption <Object> (Required: false)

```

### Invoke-RestMethod

```powershell
Invoke-RestMethod [-Uri] <uri> [-Method <WebRequestMethod>] [-UseBasicParsing] [-WebSession <WebRequestSession>] [-SessionVariable <string>] [-Credential <pscredential>] [-UseDefaultCredentials] [-CertificateThumbprint <string>] [-Certificate <X509Certificate>] [-UserAgent <string>] [-DisableKeepAlive] [-TimeoutSec <int>] [-Headers <IDictionary>] [-MaximumRedirection <int>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-Body <Object>] [-ContentType <string>] [-TransferEncoding <string>] [-InFile <string>] [-OutFile <string>] [-PassThru] [<CommonParameters>]

PARAMETERS:
- Body <Object> (Required: false)
- Certificate <X509Certificate> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ContentType <string> (Required: false)
- Credential <pscredential> (Required: false)
- DisableKeepAlive <switch> (Required: false)
- Headers <IDictionary> (Required: false)
- InFile <string> (Required: false)
- MaximumRedirection <int> (Required: false)
- Method <WebRequestMethod> (Required: false)
- OutFile <string> (Required: false)
- PassThru <switch> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- ProxyUseDefaultCredentials <switch> (Required: false)
- SessionVariable <string> (Required: false)
- TimeoutSec <int> (Required: false)
- TransferEncoding <string> (Required: false)
- Uri <uri> (Required: true)
- UseBasicParsing <switch> (Required: false)
- UseDefaultCredentials <switch> (Required: false)
- UserAgent <string> (Required: false)
- WebSession <WebRequestSession> (Required: false)
```

### Invoke-TroubleshootingPack

```powershell
Invoke-TroubleshootingPack [-Pack] <DiagPack> [-AnswerFile <string>] [-Result <string>] [-Unattended] [<CommonParameters>]

PARAMETERS:
- AnswerFile <string> (Required: false)
- Pack <DiagPack> (Required: true)
- Result <string> (Required: false)
- Unattended <switch> (Required: false)
```

### Invoke-WebRequest

```powershell
Invoke-WebRequest [-Uri] <uri> [-UseBasicParsing] [-WebSession <WebRequestSession>] [-SessionVariable <string>] [-Credential <pscredential>] [-UseDefaultCredentials] [-CertificateThumbprint <string>] [-Certificate <X509Certificate>] [-UserAgent <string>] [-DisableKeepAlive] [-TimeoutSec <int>] [-Headers <IDictionary>] [-MaximumRedirection <int>] [-Method <WebRequestMethod>] [-Proxy <uri>] [-ProxyCredential <pscredential>] [-ProxyUseDefaultCredentials] [-Body <Object>] [-ContentType <string>] [-TransferEncoding <string>] [-InFile <string>] [-OutFile <string>] [-PassThru] [<CommonParameters>]

PARAMETERS:
- Body <Object> (Required: false)
- Certificate <X509Certificate> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ContentType <string> (Required: false)
- Credential <pscredential> (Required: false)
- DisableKeepAlive <switch> (Required: false)
- Headers <IDictionary> (Required: false)
- InFile <string> (Required: false)
- MaximumRedirection <int> (Required: false)
- Method <WebRequestMethod> (Required: false)
- OutFile <string> (Required: false)
- PassThru <switch> (Required: false)
- Proxy <uri> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- ProxyUseDefaultCredentials <switch> (Required: false)
- SessionVariable <string> (Required: false)
- TimeoutSec <int> (Required: false)
- TransferEncoding <string> (Required: false)
- Uri <uri> (Required: true)
- UseBasicParsing <switch> (Required: false)
- UseDefaultCredentials <switch> (Required: false)
- UserAgent <string> (Required: false)
- WebSession <WebRequestSession> (Required: false)
```

### Invoke-WmiMethod

```powershell
Invoke-WmiMethod [-Class] <string> [-Name] <string> [[-ArgumentList] <Object[]>] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-WmiMethod [-Name] <string> -InputObject <wmi> [-ArgumentList <Object[]>] [-AsJob] [-ThrottleLimit <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-WmiMethod [-Name] <string> -Path <string> [-ArgumentList <Object[]>] [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-WmiMethod [-Name] <string> [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-WmiMethod [-Name] <string> [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

Invoke-WmiMethod [-Name] <string> [-AsJob] [-Impersonation <ImpersonationLevel>] [-Authentication <AuthenticationLevel>] [-Locale <string>] [-EnableAllPrivileges] [-Authority <string>] [-Credential <pscredential>] [-ThrottleLimit <int>] [-ComputerName <string[]>] [-Namespace <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ArgumentList <Object[]> (Required: false)
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
- Name <string> (Required: true)
- Namespace <string> (Required: false)
- Path <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Invoke-WSManAction

```powershell
Invoke-WSManAction [-ResourceURI] <uri> [-Action] <string> [[-SelectorSet] <hashtable>] [-ConnectionURI <uri>] [-FilePath <string>] [-OptionSet <hashtable>] [-SessionOption <SessionOption>] [-ValueSet <hashtable>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

Invoke-WSManAction [-ResourceURI] <uri> [-Action] <string> [[-SelectorSet] <hashtable>] [-ApplicationName <string>] [-ComputerName <string>] [-FilePath <string>] [-OptionSet <hashtable>] [-Port <int>] [-SessionOption <SessionOption>] [-UseSSL] [-ValueSet <hashtable>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

PARAMETERS:
- Action <string> (Required: true)
- ApplicationName <string> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string> (Required: false)
- ConnectionURI <uri> (Required: false)
- Credential <pscredential> (Required: false)
- FilePath <string> (Required: false)
- OptionSet <hashtable> (Required: false)
- Port <int> (Required: false)
- ResourceURI <uri> (Required: true)
- SelectorSet <hashtable> (Required: false)
- SessionOption <SessionOption> (Required: false)
- UseSSL <switch> (Required: false)
- ValueSet <hashtable> (Required: false)
```

### It

```powershell
SYNOPSIS:
Validates the results of a test inside of a Describe block.

DESCRIPTION:
The It command is intended to be used inside of a Describe or Context Block.
If you are familiar with the AAA pattern (Arrange-Act-Assert), the body of
the It block is the appropriate location for an assert. The convention is to
assert a single expectation for each It block. The code inside of the It block
should throw a terminating error if the expectation of the test is not met and
thus cause the test to fail. The name of the It block should expressively state
the expectation of the test.

In addition to using your own logic to test expectations and throw exceptions,
you may also use Pester's Should command to perform assertions in plain language.

PARAMETERS:
- name <String> (Required: true)
- test <ScriptBlock> (Required: false)
- TestCases <IDictionary[]> (Required: false)
- Pending <SwitchParameter> (Required: false)
- Skip <SwitchParameter> (Required: false)
```

## J

### Join-DtcDiagnosticResourceManager

```powershell
Join-DtcDiagnosticResourceManager [-Transaction] <DtcDiagnosticTransaction> [[-ComputerName] <string>] [[-Port] <int>] [-Volatile] [<CommonParameters>]

PARAMETERS:
- ComputerName <string> (Required: false)
- Port <int> (Required: false)
- Transaction <DtcDiagnosticTransaction> (Required: true)
- Volatile <switch> (Required: false)
```

### Join-Path

```powershell
Join-Path [-Path] <string[]> [-ChildPath] <string> [-Resolve] [-Credential <pscredential>] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- ChildPath <string> (Required: true)
- Credential <pscredential> (Required: false)
- Path <string[]> (Required: true)
- Resolve <switch> (Required: false)
- UseTransaction <switch> (Required: false)
```

## K

## L

### Limit-EventLog

```powershell
Limit-EventLog [-LogName] <string[]> [-ComputerName <string[]>] [-RetentionDays <int>] [-OverflowAction <OverflowAction>] [-MaximumSize <long>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- LogName <string[]> (Required: true)
- MaximumSize <long> (Required: false)
- OverflowAction <OverflowAction> (Required: false)
- RetentionDays <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Lock-BitLocker

```powershell
Lock-BitLocker [-MountPoint] <string[]> [-ForceDismount] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- ForceDismount <switch> (Required: false)
- MountPoint <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

## M

### Measure-Command

```powershell
Measure-Command [-Expression] <scriptblock> [-InputObject <psobject>] [<CommonParameters>]

PARAMETERS:
- Expression <scriptblock> (Required: true)
- InputObject <psobject> (Required: false)
```

### Measure-Object

```powershell
Measure-Object [[-Property] <string[]>] [-InputObject <psobject>] [-Sum] [-Average] [-Maximum] [-Minimum] [<CommonParameters>]

Measure-Object [[-Property] <string[]>] [-InputObject <psobject>] [-Line] [-Word] [-Character] [-IgnoreWhiteSpace] [<CommonParameters>]

PARAMETERS:
- Average <switch> (Required: false)
- Character <switch> (Required: false)
- IgnoreWhiteSpace <switch> (Required: false)
- InputObject <psobject> (Required: false)
- Line <switch> (Required: false)
- Maximum <switch> (Required: false)
- Minimum <switch> (Required: false)
- Property <string[]> (Required: false)
- Sum <switch> (Required: false)
- Word <switch> (Required: false)
```

### Merge-CIPolicy

```powershell
Merge-CIPolicy [-OutputFilePath] <string> [-PolicyPaths] <string[]> [-Rules <Rule[]>] [-AppIdTaggingPolicy] [<CommonParameters>]

PARAMETERS:
- AppIdTaggingPolicy <switch> (Required: false)
- OutputFilePath <string> (Required: true)
- PolicyPaths <string[]> (Required: true)
- Rules <Rule[]> (Required: false)
```

### mkdir

```powershell
New-Item [-Path] <string[]> [-ItemType <string>] [-Value <Object>] [-Force] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

New-Item [[-Path] <string[]>] -Name <string> [-ItemType <string>] [-Value <Object>] [-Force] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- ItemType <string> (Required: false)
- Name <string> (Required: true)
- Path <string[]> (Required: false)
- UseTransaction <switch> (Required: false)
- Value <Object> (Required: false)
- WhatIf <switch> (Required: false)
```

### Mock

```powershell
SYNOPSIS:
Mocks the behavior of an existing command with an alternate
implementation.

DESCRIPTION:
This creates new behavior for any existing command within the scope of a
Describe or Context block. The function allows you to specify a script block
that will become the command's new behavior.

Optionally, you may create a Parameter Filter which will examine the
parameters passed to the mocked command and will invoke the mocked
behavior only if the values of the parameter values pass the filter. If
they do not, the original command implementation will be invoked instead
of a mock.

You may create multiple mocks for the same command, each using a different
ParameterFilter. ParameterFilters will be evaluated in reverse order of
their creation. The last one created will be the first to be evaluated.
The mock of the first filter to pass will be used. The exception to this
rule are Mocks with no filters. They will always be evaluated last since
they will act as a "catch all" mock.

Mocks can be marked Verifiable. If so, the Assert-VerifiableMocks command
can be used to check if all Verifiable mocks were actually called. If any
verifiable mock is not called, Assert-VerifiableMocks will throw an
exception and indicate all mocks not called.

If you wish to mock commands that are called from inside a script module,
you can do so by using the -ModuleName parameter to the Mock command. This
injects the mock into the specified module. If you do not specify a
module name, the mock will be created in the same scope as the test script.
You may mock the same command multiple times, in different scopes, as needed.
Each module's mock maintains a separate call history and verified status.

PARAMETERS:

- CommandName <String> (Required: false)
- MockWith <ScriptBlock> (Required: false)
- Verifiable <SwitchParameter> (Required: false)
- ParameterFilter <ScriptBlock> (Required: false)
- ModuleName <String> (Required: false)

```

### more

```powershell
more [[-paths] <string[]>]

PARAMETERS:
- paths <string[]> (Required: false)
```

### Mount-AppvClientConnectionGroup

```powershell
Mount-AppvClientConnectionGroup [-GroupId] <guid> [-VersionId] <guid> [<CommonParameters>]

Mount-AppvClientConnectionGroup [-Name] <string> [<CommonParameters>]

Mount-AppvClientConnectionGroup [-ConnectionGroup] <AppvClientConnectionGroup> [<CommonParameters>]

PARAMETERS:
- ConnectionGroup <AppvClientConnectionGroup> (Required: true)
- GroupId <guid> (Required: true)
- Name <string> (Required: true)
- VersionId <guid> (Required: true)
```

### Mount-AppvClientPackage

```powershell
Mount-AppvClientPackage [-PackageId] <guid> [-VersionId] <guid> [-Cancel] [<CommonParameters>]

Mount-AppvClientPackage [-Package] <AppvClientPackage> [-Cancel] [<CommonParameters>]

Mount-AppvClientPackage [-Name] <string> [[-Version] <string>] [<CommonParameters>]

PARAMETERS:
- Cancel <switch> (Required: false)
- Name <string> (Required: true)
- Package <AppvClientPackage> (Required: true)
- PackageId <guid> (Required: true)
- Version <string> (Required: false)
- VersionId <guid> (Required: true)
```

### Mount-AppxVolume

```powershell
Mount-AppxVolume [-Volume] <AppxVolume[]> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Volume <AppxVolume[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### Mount-DiskImage

```powershell
Mount-DiskImage [-ImagePath] <string[]> [-StorageType <StorageType>] [-Access <Access>] [-NoDriveLetter] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

Mount-DiskImage -InputObject <CimInstance#MSFT_DiskImage[]> [-Access <Access>] [-NoDriveLetter] [-PassThru] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Access <Access> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ImagePath <string[]> (Required: true)
- InputObject <CimInstance#MSFT_DiskImage[]> (Required: true)
- NoDriveLetter <switch> (Required: false)
- PassThru <switch> (Required: false)
- StorageType <StorageType> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### Mount-WindowsImage

```powershell
Mount-WindowsImage -Path <string> -ImagePath <string> -Index <uint32> [-ReadOnly] [-Optimize] [-CheckIntegrity] [-SupportEa] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Mount-WindowsImage -Path <string> -ImagePath <string> -Name <string> [-ReadOnly] [-Optimize] [-CheckIntegrity] [-SupportEa] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Mount-WindowsImage -Path <string> -ImagePath <string> [-ReadOnly] [-Optimize] [-CheckIntegrity] [-SupportEa] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

Mount-WindowsImage -Path <string> -Remount [-SupportEa] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CheckIntegrity <switch> (Required: false)
- ImagePath <string> (Required: true)
- Index <uint32> (Required: true)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- Name <string> (Required: true)
- Optimize <switch> (Required: false)
- Path <string> (Required: true)
- ReadOnly <switch> (Required: false)
- Remount <switch> (Required: true)
- ScratchDirectory <string> (Required: false)
- SupportEa <switch> (Required: false)
```

### Move-AppxPackage

```powershell
Move-AppxPackage [-Package] <string[]> [-Volume] <AppxVolume> [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Package <string[]> (Required: true)
- Volume <AppxVolume> (Required: true)
- WhatIf <switch> (Required: false)
```

### Move-Item

```powershell
Move-Item [-Path] <string[]> [[-Destination] <string>] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-PassThru] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Move-Item [[-Destination] <string>] -LiteralPath <string[]> [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-PassThru] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Destination <string> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Move-ItemProperty

```powershell
Move-ItemProperty [-Path] <string[]> [-Destination] <string> [-Name] <string[]> [-PassThru] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

Move-ItemProperty [-Destination] <string> [-Name] <string[]> -LiteralPath <string[]> [-PassThru] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Destination <string> (Required: true)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Name <string[]> (Required: true)
- PassThru <switch> (Required: false)
- Path <string[]> (Required: true)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### Move-SmbWitnessClient

```powershell
Move-SmbWitnessClient [-ClientName] <string> [-DestinationNode] <string> [[-NetworkName] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClientName <string> (Required: true)
- Confirm <switch> (Required: false)
- DestinationNode <string> (Required: true)
- NetworkName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

## N

### New-Alias

```powershell
New-Alias [-Name] <string> [-Value] <string> [-Description <string>] [-Option <ScopedItemOptions>] [-PassThru] [-Scope <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

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

### New-AppLockerPolicy

```powershell
New-AppLockerPolicy [-FileInformation] <List[FileInformation]> [-AllowWindows] [-RuleType <List[RuleType]>] [-RuleNamePrefix <string>] [-User <string>] [-Optimize] [-IgnoreMissingFileInformation] [-Xml] [-ServiceEnforcement <ServiceEnforcementMode>] [<CommonParameters>]

New-AppLockerPolicy -AllowWindows [-RuleType <List[RuleType]>] [-RuleNamePrefix <string>] [-User <string>] [-Optimize] [-IgnoreMissingFileInformation] [-Xml] [-ServiceEnforcement <ServiceEnforcementMode>] [<CommonParameters>]

PARAMETERS:
- AllowWindows <switch> (Required: false)
- FileInformation <List[FileInformation]> (Required: true)
- IgnoreMissingFileInformation <switch> (Required: false)
- Optimize <switch> (Required: false)
- RuleNamePrefix <string> (Required: false)
- RuleType <List[RuleType]> (Required: false)
- ServiceEnforcement <ServiceEnforcementMode> (Required: false)
- User <string> (Required: false)
- Xml <switch> (Required: false)
```

### New-AutologgerConfig

```powershell
New-AutologgerConfig [-Name] <string> [-BufferSize <uint32>] [-ClockType <ClockType>] [-DisableRealtimePersistence <uint32>] [-FileCount <uint32>] [-LocalFilePath <string>] [-FileMax <uint32>] [-FlushTimer <uint32>] [-Guid <string>] [-LogFileMode <uint32>] [-MaximumFileSize <uint32>] [-MaximumBuffers <uint32>] [-MinimumBuffers <uint32>] [-Start <Enabled>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BufferSize <uint32> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClockType <ClockType> (Required: false)
- Confirm <switch> (Required: false)
- DisableRealtimePersistence <uint32> (Required: false)
- FileCount <uint32> (Required: false)
- FileMax <uint32> (Required: false)
- FlushTimer <uint32> (Required: false)
- Guid <string> (Required: false)
- LocalFilePath <string> (Required: false)
- LogFileMode <uint32> (Required: false)
- MaximumBuffers <uint32> (Required: false)
- MaximumFileSize <uint32> (Required: false)
- MinimumBuffers <uint32> (Required: false)
- Name <string> (Required: true)
- Start <Enabled> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-BcdEntry

```powershell
New-BcdEntry [[-Id] <string>] [[-Store] <BcdStoreInfo>] -Application <string> [-Description <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

New-BcdEntry [[-Id] <string>] [[-Store] <BcdStoreInfo>] -Device [-Description <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

New-BcdEntry [[-Id] <string>] [[-Store] <BcdStoreInfo>] -Inherit <string> [-Description <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

New-BcdEntry [-Id] <string> [[-Store] <BcdStoreInfo>] [-Description <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Application <string> (Required: true)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- Device <switch> (Required: true)
- Force <switch> (Required: false)
- Id <string> (Required: false)
- Inherit <string> (Required: true)
- Store <BcdStoreInfo> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-BcdStore

```powershell
New-BcdStore [-Path] <string> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- Path <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### New-CertificateNotificationTask

```powershell
New-CertificateNotificationTask -Type <CertificateNotificationType> -PSScript <string> -Name <string> -Channel <NotificationChannel> [-RunTaskForExistingCertificates] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Channel <NotificationChannel> (Required: true)
- Confirm <switch> (Required: false)
- Name <string> (Required: true)
- PSScript <string> (Required: true)
- RunTaskForExistingCertificates <switch> (Required: false)
- Type <CertificateNotificationType> (Required: true)
- WhatIf <switch> (Required: false)
```

### New-CimInstance

```powershell
New-CimInstance [-ClassName] <string> [[-Property] <IDictionary>] [-Key <string[]>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-ComputerName <string[]>] [-ClientOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

New-CimInstance [-ClassName] <string> [[-Property] <IDictionary>] -CimSession <CimSession[]> [-Key <string[]>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-ClientOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

New-CimInstance [[-Property] <IDictionary>] -ResourceUri <uri> -CimSession <CimSession[]> [-Key <string[]>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-WhatIf] [-Confirm] [<CommonParameters>]

New-CimInstance [[-Property] <IDictionary>] -ResourceUri <uri> [-Key <string[]>] [-Namespace <string>] [-OperationTimeoutSec <uint32>] [-ComputerName <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

New-CimInstance [-CimClass] <cimclass> [[-Property] <IDictionary>] -CimSession <CimSession[]> [-OperationTimeoutSec <uint32>] [-ClientOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

New-CimInstance [-CimClass] <cimclass> [[-Property] <IDictionary>] [-OperationTimeoutSec <uint32>] [-ComputerName <string[]>] [-ClientOnly] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CimClass <cimclass> (Required: true)
- CimSession <CimSession[]> (Required: true)
- ClassName <string> (Required: true)
- ClientOnly <switch> (Required: false)
- ComputerName <string[]> (Required: false)
- Confirm <switch> (Required: false)
- Key <string[]> (Required: false)
- Namespace <string> (Required: false)
- OperationTimeoutSec <uint32> (Required: false)
- Property <IDictionary> (Required: false)
- ResourceUri <uri> (Required: true)
- WhatIf <switch> (Required: false)
```

### New-CimSession

```powershell
New-CimSession [[-ComputerName] <string[]>] [[-Credential] <pscredential>] [-Authentication <PasswordAuthenticationMechanism>] [-Name <string>] [-OperationTimeoutSec <uint32>] [-SkipTestConnection] [-Port <uint32>] [-SessionOption <CimSessionOptions>] [<CommonParameters>]

New-CimSession [[-ComputerName] <string[]>] [-CertificateThumbprint <string>] [-Name <string>] [-OperationTimeoutSec <uint32>] [-SkipTestConnection] [-Port <uint32>] [-SessionOption <CimSessionOptions>] [<CommonParameters>]

PARAMETERS:
- Authentication <PasswordAuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string[]> (Required: false)
- Credential <pscredential> (Required: false)
- Name <string> (Required: false)
- OperationTimeoutSec <uint32> (Required: false)
- Port <uint32> (Required: false)
- SessionOption <CimSessionOptions> (Required: false)
- SkipTestConnection <switch> (Required: false)
```

### New-CimSessionOption

```powershell
New-CimSessionOption [-Protocol] <ProtocolType> [-UICulture <cultureinfo>] [-Culture <cultureinfo>] [<CommonParameters>]

New-CimSessionOption [-NoEncryption] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-EncodePortInServicePrincipalName] [-Encoding <PacketEncoding>] [-HttpPrefix <uri>] [-MaxEnvelopeSizeKB <uint32>] [-ProxyAuthentication <PasswordAuthenticationMechanism>] [-ProxyCertificateThumbprint <string>] [-ProxyCredential <pscredential>] [-ProxyType <ProxyType>] [-UseSsl] [-UICulture <cultureinfo>] [-Culture <cultureinfo>] [<CommonParameters>]

New-CimSessionOption [-Impersonation <ImpersonationType>] [-PacketIntegrity] [-PacketPrivacy] [-UICulture <cultureinfo>] [-Culture <cultureinfo>] [<CommonParameters>]

PARAMETERS:
- Culture <cultureinfo> (Required: false)
- EncodePortInServicePrincipalName <switch> (Required: false)
- Encoding <PacketEncoding> (Required: false)
- HttpPrefix <uri> (Required: false)
- Impersonation <ImpersonationType> (Required: false)
- MaxEnvelopeSizeKB <uint32> (Required: false)
- NoEncryption <switch> (Required: false)
- PacketIntegrity <switch> (Required: false)
- PacketPrivacy <switch> (Required: false)
- Protocol <ProtocolType> (Required: true)
- ProxyAuthentication <PasswordAuthenticationMechanism> (Required: false)
- ProxyCertificateThumbprint <string> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- ProxyType <ProxyType> (Required: false)
- SkipCACheck <switch> (Required: false)
- SkipCNCheck <switch> (Required: false)
- SkipRevocationCheck <switch> (Required: false)
- UICulture <cultureinfo> (Required: false)
- UseSsl <switch> (Required: false)
```

### New-CIPolicy

```powershell
New-CIPolicy [-FilePath] <string> -Level <RuleLevel> [-DriverFiles <DriverFile[]>] [-Fallback <RuleLevel[]>] [-Audit] [-ScanPath <string>] [-ScriptFileNames] [-AllowFileNameFallbacks] [-SpecificFileNameLevel <FileNameLevel>] [-UserWriteablePaths] [-UserPEs] [-NoScript] [-Deny] [-NoShadowCopy] [-MultiplePolicyFormat] [-OmitPaths <string[]>] [-PathToCatroot <string>] [-AppIdTaggingPolicy] [-AppIdTaggingKey <string[]>] [-AppIdTaggingValue <string[]>] [<CommonParameters>]

New-CIPolicy [-FilePath] <string> -Rules <Rule[]> [-Audit] [-ScanPath <string>] [-ScriptFileNames] [-AllowFileNameFallbacks] [-SpecificFileNameLevel <FileNameLevel>] [-UserWriteablePaths] [-UserPEs] [-NoScript] [-Deny] [-NoShadowCopy] [-MultiplePolicyFormat] [-OmitPaths <string[]>] [-PathToCatroot <string>] [-AppIdTaggingPolicy] [-AppIdTaggingKey <string[]>] [-AppIdTaggingValue <string[]>] [<CommonParameters>]

PARAMETERS:
- AllowFileNameFallbacks <switch> (Required: false)
- AppIdTaggingKey <string[]> (Required: false)
- AppIdTaggingPolicy <switch> (Required: false)
- AppIdTaggingValue <string[]> (Required: false)
- Audit <switch> (Required: false)
- Deny <switch> (Required: false)
- DriverFiles <DriverFile[]> (Required: false)
- Fallback <RuleLevel[]> (Required: false)
- FilePath <string> (Required: true)
- Level <RuleLevel> (Required: true)
- MultiplePolicyFormat <switch> (Required: false)
- NoScript <switch> (Required: false)
- NoShadowCopy <switch> (Required: false)
- OmitPaths <string[]> (Required: false)
- PathToCatroot <string> (Required: false)
- Rules <Rule[]> (Required: true)
- ScanPath <string> (Required: false)
- ScriptFileNames <switch> (Required: false)
- SpecificFileNameLevel <FileNameLevel> (Required: false)
- UserPEs <switch> (Required: false)
- UserWriteablePaths <switch> (Required: false)
```

### New-CIPolicyRule

```powershell
New-CIPolicyRule -Level <RuleLevel> [-DriverFiles <DriverFile[]>] [-Fallback <RuleLevel[]>] [-Deny] [-ScriptFileNames] [-AllowFileNameFallbacks] [-SpecificFileNameLevel <FileNameLevel>] [-UserWriteablePaths] [<CommonParameters>]

New-CIPolicyRule -DriverFilePath <string[]> -Level <RuleLevel> [-AppID <string>] [-Fallback <RuleLevel[]>] [-Deny] [-ScriptFileNames] [-AllowFileNameFallbacks] [-SpecificFileNameLevel <FileNameLevel>] [-UserWriteablePaths] [<CommonParameters>]

New-CIPolicyRule [-Fallback <RuleLevel[]>] [-Deny] [-ScriptFileNames] [-AllowFileNameFallbacks] [-SpecificFileNameLevel <FileNameLevel>] [-UserWriteablePaths] [-Package <AppxPackage>] [<CommonParameters>]

New-CIPolicyRule [-Fallback <RuleLevel[]>] [-Deny] [-ScriptFileNames] [-AllowFileNameFallbacks] [-SpecificFileNameLevel <FileNameLevel>] [-UserWriteablePaths] [-FilePathRule <string>] [<CommonParameters>]

PARAMETERS:
- AllowFileNameFallbacks <switch> (Required: false)
- AppID <string> (Required: false)
- Deny <switch> (Required: false)
- DriverFilePath <string[]> (Required: true)
- DriverFiles <DriverFile[]> (Required: false)
- Fallback <RuleLevel[]> (Required: false)
- FilePathRule <string> (Required: false)
- Level <RuleLevel> (Required: true)
- Package <AppxPackage> (Required: false)
- ScriptFileNames <switch> (Required: false)
- SpecificFileNameLevel <FileNameLevel> (Required: false)
- UserWriteablePaths <switch> (Required: false)
```

### New-DAEntryPointTableItem

```powershell
New-DAEntryPointTableItem [-PolicyStore] <string> -EntryPointName <string> -ADSite <string> -EntryPointRange <string[]> -EntryPointIPAddress <string> [-TeredoServerIP <string>] [-GslbIP <string>] [-IPHttpsProfile <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-DAEntryPointTableItem [-GPOSession] <string> -EntryPointName <string> -ADSite <string> -EntryPointRange <string[]> -EntryPointIPAddress <string> [-TeredoServerIP <string>] [-GslbIP <string>] [-IPHttpsProfile <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- ADSite <string> (Required: true)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EntryPointIPAddress <string> (Required: true)
- EntryPointName <string> (Required: true)
- EntryPointRange <string[]> (Required: true)
- GPOSession <string> (Required: true)
- GslbIP <string> (Required: false)
- IPHttpsProfile <string> (Required: false)
- PolicyStore <string> (Required: true)
- TeredoServerIP <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-DscChecksum

```powershell
New-DscChecksum [-Path] <string[]> [[-OutPath] <string>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- OutPath <string> (Required: false)
- Path <string[]> (Required: true)
- WhatIf <switch> (Required: false)
```

### New-DtcDiagnosticTransaction

```powershell
New-DtcDiagnosticTransaction [[-Timeout] <int>] [[-IsolationLevel] <IsolationLevel>] [<CommonParameters>]

PARAMETERS:
- IsolationLevel <IsolationLevel> (Required: false)
- Timeout <int> (Required: false)
```

### New-EapConfiguration

```powershell
New-EapConfiguration [-UseWinlogonCredential] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-EapConfiguration -Ttls [-UseWinlogonCredential] [-TunnledNonEapAuthMethod <string>] [-TunnledEapAuthMethod <xml>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-EapConfiguration -Tls [-VerifyServerIdentity] [-UserCertificate] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-EapConfiguration -Peap [-VerifyServerIdentity] [[-TunnledEapAuthMethod] <xml>] [-EnableNap] [-FastReconnect <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EnableNap <switch> (Required: false)
- FastReconnect <bool> (Required: false)
- Peap <switch> (Required: true)
- ThrottleLimit <int> (Required: false)
- Tls <switch> (Required: true)
- Ttls <switch> (Required: true)
- TunnledEapAuthMethod <xml> (Required: false)
- TunnledNonEapAuthMethod <string> (Required: false)
- UseWinlogonCredential <switch> (Required: false)
- UserCertificate <switch> (Required: false)
- VerifyServerIdentity <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-EtwTraceSession

```powershell
New-EtwTraceSession [-Name] <string> [-LogFileMode <uint32>] [-LocalFilePath <string>] [-MaximumFileSize <uint32>] [-BufferSize <uint32>] [-MinimumBuffers <uint32>] [-MaximumBuffers <uint32>] [-FlushTimer <uint32>] [-ClockType <ClockType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BufferSize <uint32> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ClockType <ClockType> (Required: false)
- Confirm <switch> (Required: false)
- FlushTimer <uint32> (Required: false)
- LocalFilePath <string> (Required: false)
- LogFileMode <uint32> (Required: false)
- MaximumBuffers <uint32> (Required: false)
- MaximumFileSize <uint32> (Required: false)
- MinimumBuffers <uint32> (Required: false)
- Name <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-Event

```powershell
New-Event [-SourceIdentifier] <string> [[-Sender] <psobject>] [[-EventArguments] <psobject[]>] [[-MessageData] <psobject>] [<CommonParameters>]

PARAMETERS:
- EventArguments <psobject[]> (Required: false)
- MessageData <psobject> (Required: false)
- Sender <psobject> (Required: false)
- SourceIdentifier <string> (Required: true)
```

### New-EventLog

```powershell
New-EventLog [-LogName] <string> [-Source] <string[]> [[-ComputerName] <string[]>] [-CategoryResourceFile <string>] [-MessageResourceFile <string>] [-ParameterResourceFile <string>] [<CommonParameters>]

PARAMETERS:
- CategoryResourceFile <string> (Required: false)
- ComputerName <string[]> (Required: false)
- LogName <string> (Required: true)
- MessageResourceFile <string> (Required: false)
- ParameterResourceFile <string> (Required: false)
- Source <string[]> (Required: true)
```

### New-FileCatalog

```powershell
New-FileCatalog [-CatalogFilePath] <string> [[-Path] <string[]>] [-CatalogVersion <int>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- CatalogFilePath <string> (Required: true)
- CatalogVersion <int> (Required: false)
- Confirm <switch> (Required: false)
- Path <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-FileShare

```powershell
New-FileShare -FileServerFriendlyName <string[]> -Name <string> -SourceVolume <CimInstance#MSFT_Volume> [-Description <string>] [-RelativePathName <string>] [-ContinuouslyAvailable <bool>] [-EncryptData <bool>] [-Protocol <FileSharingProtocol>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-FileShare -FileServerUniqueId <string[]> -Name <string> -SourceVolume <CimInstance#MSFT_Volume> [-Description <string>] [-RelativePathName <string>] [-ContinuouslyAvailable <bool>] [-EncryptData <bool>] [-Protocol <FileSharingProtocol>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-FileShare -InputObject <CimInstance#MSFT_FileServer[]> -Name <string> -SourceVolume <CimInstance#MSFT_Volume> [-Description <string>] [-RelativePathName <string>] [-ContinuouslyAvailable <bool>] [-EncryptData <bool>] [-Protocol <FileSharingProtocol>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ContinuouslyAvailable <bool> (Required: false)
- Description <string> (Required: false)
- EncryptData <bool> (Required: false)
- FileServerFriendlyName <string[]> (Required: true)
- FileServerUniqueId <string[]> (Required: true)
- InputObject <CimInstance#MSFT_FileServer[]> (Required: true)
- Name <string> (Required: true)
- Protocol <FileSharingProtocol> (Required: false)
- RelativePathName <string> (Required: false)
- SourceVolume <CimInstance#MSFT_Volume> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-Fixture

```powershell
SYNOPSIS:
This function generates two scripts, one that defines a function
and another one that contains its tests.

DESCRIPTION:
This function generates two scripts, one that defines a function
and another one that contains its tests. The files are by default
placed in the current directory and are called and populated as such:

The script defining the function: .\Clean.ps1:

function Clean {

}

The script containg the example test .\Clean.Tests.ps1:

$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$sut = (Split-Path -Leaf $MyInvocation.MyCommand.Path).Replace(".Tests.", ".")
. "$here\$sut"

Describe "Clean" {

    It "does something useful" {
        $false | Should Be $true
    }
}

PARAMETERS:

- Path <String> (Required: false)
- Name <String> (Required: true)

```

### New-Guid

```powershell
New-Guid [<CommonParameters>]

```

### New-IscsiTargetPortal

```powershell
New-IscsiTargetPortal -TargetPortalAddress <string> [-TargetPortalPortNumber <uint16>] [-InitiatorPortalAddress <string>] [-IsHeaderDigest <bool>] [-IsDataDigest <bool>] [-AuthenticationType <string>] [-InitiatorInstanceName <string>] [-ChapUsername <string>] [-ChapSecret <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AuthenticationType <string> (Required: false)
- ChapSecret <string> (Required: false)
- ChapUsername <string> (Required: false)
- CimSession <CimSession[]> (Required: false)
- InitiatorInstanceName <string> (Required: false)
- InitiatorPortalAddress <string> (Required: false)
- IsDataDigest <bool> (Required: false)
- IsHeaderDigest <bool> (Required: false)
- TargetPortalAddress <string> (Required: true)
- TargetPortalPortNumber <uint16> (Required: false)
- ThrottleLimit <int> (Required: false)
```

### New-IseSnippet

```powershell
New-IseSnippet

```

### New-Item

```powershell
New-Item [-Path] <string[]> [-ItemType <string>] [-Value <Object>] [-Force] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

New-Item [[-Path] <string[]>] -Name <string> [-ItemType <string>] [-Value <Object>] [-Force] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Force <switch> (Required: false)
- ItemType <string> (Required: false)
- Name <string> (Required: true)
- Path <string[]> (Required: false)
- UseTransaction <switch> (Required: false)
- Value <Object> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-ItemProperty

```powershell
New-ItemProperty [-Path] <string[]> [-Name] <string> [-PropertyType <string>] [-Value <Object>] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

New-ItemProperty [-Name] <string> -LiteralPath <string[]> [-PropertyType <string>] [-Value <Object>] [-Force] [-Filter <string>] [-Include <string[]>] [-Exclude <string[]>] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Exclude <string[]> (Required: false)
- Filter <string> (Required: false)
- Force <switch> (Required: false)
- Include <string[]> (Required: false)
- LiteralPath <string[]> (Required: true)
- Name <string> (Required: true)
- Path <string[]> (Required: true)
- PropertyType <string> (Required: false)
- UseTransaction <switch> (Required: false)
- Value <Object> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-JobTrigger

```powershell
New-JobTrigger -Once -At <datetime> [-RandomDelay <timespan>] [-RepetitionInterval <timespan>] [-RepetitionDuration <timespan>] [-RepeatIndefinitely] [<CommonParameters>]

New-JobTrigger -Daily -At <datetime> [-DaysInterval <int>] [-RandomDelay <timespan>] [<CommonParameters>]

New-JobTrigger -Weekly -At <datetime> -DaysOfWeek <DayOfWeek[]> [-WeeksInterval <int>] [-RandomDelay <timespan>] [<CommonParameters>]

New-JobTrigger -AtStartup [-RandomDelay <timespan>] [<CommonParameters>]

New-JobTrigger -AtLogOn [-RandomDelay <timespan>] [-User <string>] [<CommonParameters>]

PARAMETERS:
- At <datetime> (Required: true)
- AtLogOn <switch> (Required: true)
- AtStartup <switch> (Required: true)
- Daily <switch> (Required: true)
- DaysInterval <int> (Required: false)
- DaysOfWeek <DayOfWeek[]> (Required: true)
- Once <switch> (Required: true)
- RandomDelay <timespan> (Required: false)
- RepeatIndefinitely <switch> (Required: false)
- RepetitionDuration <timespan> (Required: false)
- RepetitionInterval <timespan> (Required: false)
- User <string> (Required: false)
- Weekly <switch> (Required: true)
- WeeksInterval <int> (Required: false)
```

### New-LocalGroup

```powershell
New-LocalGroup [-Name] <string> [-Description <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- Name <string> (Required: true)
- WhatIf <switch> (Required: false)
```

### New-LocalUser

```powershell
New-LocalUser [-Name] <string> -Password <securestring> [-AccountExpires <datetime>] [-AccountNeverExpires] [-Description <string>] [-Disabled] [-FullName <string>] [-PasswordNeverExpires] [-UserMayNotChangePassword] [-WhatIf] [-Confirm] [<CommonParameters>]

New-LocalUser [-Name] <string> -NoPassword [-AccountExpires <datetime>] [-AccountNeverExpires] [-Description <string>] [-Disabled] [-FullName <string>] [-UserMayNotChangePassword] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AccountExpires <datetime> (Required: false)
- AccountNeverExpires <switch> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- Disabled <switch> (Required: false)
- FullName <string> (Required: false)
- Name <string> (Required: true)
- NoPassword <switch> (Required: true)
- Password <securestring> (Required: true)
- PasswordNeverExpires <switch> (Required: false)
- UserMayNotChangePassword <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-MaskingSet

```powershell
New-MaskingSet [-StorageSubSystemFriendlyName] <string[]> [-FriendlyName <string>] [-VirtualDiskNames <string[]>] [-InitiatorAddresses <string[]>] [-TargetPortAddresses <string[]>] [-DeviceNumbers <string[]>] [-DeviceAccesses <DeviceAccess[]>] [-HostType <HostMode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-MaskingSet -StorageSubSystemUniqueId <string[]> [-FriendlyName <string>] [-VirtualDiskNames <string[]>] [-InitiatorAddresses <string[]>] [-TargetPortAddresses <string[]>] [-DeviceNumbers <string[]>] [-DeviceAccesses <DeviceAccess[]>] [-HostType <HostMode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-MaskingSet -StorageSubSystemName <string[]> [-FriendlyName <string>] [-VirtualDiskNames <string[]>] [-InitiatorAddresses <string[]>] [-TargetPortAddresses <string[]>] [-DeviceNumbers <string[]>] [-DeviceAccesses <DeviceAccess[]>] [-HostType <HostMode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-MaskingSet -InputObject <CimInstance#MSFT_StorageSubSystem[]> [-FriendlyName <string>] [-VirtualDiskNames <string[]>] [-InitiatorAddresses <string[]>] [-TargetPortAddresses <string[]>] [-DeviceNumbers <string[]>] [-DeviceAccesses <DeviceAccess[]>] [-HostType <HostMode>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DeviceAccesses <DeviceAccess[]> (Required: false)
- DeviceNumbers <string[]> (Required: false)
- FriendlyName <string> (Required: false)
- HostType <HostMode> (Required: false)
- InitiatorAddresses <string[]> (Required: false)
- InputObject <CimInstance#MSFT_StorageSubSystem[]> (Required: true)
- StorageSubSystemFriendlyName <string[]> (Required: true)
- StorageSubSystemName <string[]> (Required: true)
- StorageSubSystemUniqueId <string[]> (Required: true)
- TargetPortAddresses <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- VirtualDiskNames <string[]> (Required: false)
```

### New-Module

```powershell
New-Module [-ScriptBlock] <scriptblock> [-Function <string[]>] [-Cmdlet <string[]>] [-ReturnResult] [-AsCustomObject] [-ArgumentList <Object[]>] [<CommonParameters>]

New-Module [-Name] <string> [-ScriptBlock] <scriptblock> [-Function <string[]>] [-Cmdlet <string[]>] [-ReturnResult] [-AsCustomObject] [-ArgumentList <Object[]>] [<CommonParameters>]

PARAMETERS:
- ArgumentList <Object[]> (Required: false)
- AsCustomObject <switch> (Required: false)
- Cmdlet <string[]> (Required: false)
- Function <string[]> (Required: false)
- Name <string> (Required: true)
- ReturnResult <switch> (Required: false)
- ScriptBlock <scriptblock> (Required: true)
```

### New-ModuleManifest

```powershell
New-ModuleManifest [-Path] <string> [-NestedModules <Object[]>] [-Guid <guid>] [-Author <string>] [-CompanyName <string>] [-Copyright <string>] [-RootModule <string>] [-ModuleVersion <version>] [-Description <string>] [-ProcessorArchitecture <ProcessorArchitecture>] [-PowerShellVersion <version>] [-ClrVersion <version>] [-DotNetFrameworkVersion <version>] [-PowerShellHostName <string>] [-PowerShellHostVersion <version>] [-RequiredModules <Object[]>] [-TypesToProcess <string[]>] [-FormatsToProcess <string[]>] [-ScriptsToProcess <string[]>] [-RequiredAssemblies <string[]>] [-FileList <string[]>] [-ModuleList <Object[]>] [-FunctionsToExport <string[]>] [-AliasesToExport <string[]>] [-VariablesToExport <string[]>] [-CmdletsToExport <string[]>] [-DscResourcesToExport <string[]>] [-CompatiblePSEditions <string[]>] [-PrivateData <Object>] [-Tags <string[]>] [-ProjectUri <uri>] [-LicenseUri <uri>] [-IconUri <uri>] [-ReleaseNotes <string>] [-HelpInfoUri <string>] [-PassThru] [-DefaultCommandPrefix <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- FileList <string[]> (Required: false)
- FormatsToProcess <string[]> (Required: false)
- FunctionsToExport <string[]> (Required: false)
- Guid <guid> (Required: false)
- HelpInfoUri <string> (Required: false)
- IconUri <uri> (Required: false)
- LicenseUri <uri> (Required: false)
- ModuleList <Object[]> (Required: false)
- ModuleVersion <version> (Required: false)
- NestedModules <Object[]> (Required: false)
- PassThru <switch> (Required: false)
- Path <string> (Required: true)
- PowerShellHostName <string> (Required: false)
- PowerShellHostVersion <version> (Required: false)
- PowerShellVersion <version> (Required: false)
- PrivateData <Object> (Required: false)
- ProcessorArchitecture <ProcessorArchitecture> (Required: false)
- ProjectUri <uri> (Required: false)
- ReleaseNotes <string> (Required: false)
- RequiredAssemblies <string[]> (Required: false)
- RequiredModules <Object[]> (Required: false)
- RootModule <string> (Required: false)
- ScriptsToProcess <string[]> (Required: false)
- Tags <string[]> (Required: false)
- TypesToProcess <string[]> (Required: false)
- VariablesToExport <string[]> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-MpPerformanceRecording

```powershell
SYNOPSIS:
This cmdlet collects a performance recording of Microsoft Defender Antivirus
scans.

DESCRIPTION:
This cmdlet collects a performance recording of Microsoft Defender Antivirus
scans. These performance recordings contain Microsoft-Antimalware-Engine
and NT kernel process events and can be analyzed after collection using the
Get-MpPerformanceReport cmdlet.

This cmdlet requires elevated administrator privileges.

The performance analyzer provides insight into problematic files that could
cause performance degradation of Microsoft Defender Antivirus. This tool is
provided "AS IS", and is not intended to provide suggestions on exclusions.
Exclusions can reduce the level of protection on your endpoints. Exclusions,
if any, should be defined with caution.

PARAMETERS:

- RecordTo <String> (Required: true)
- Seconds <Int32> (Required: true)
- Session <PSSession[]> (Required: false)
- WPRPath <String> (Required: false)

```

### New-NetAdapterAdvancedProperty

```powershell
New-NetAdapterAdvancedProperty [-Name] <string> -RegistryKeyword <string> -RegistryValue <string[]> [-RegistryDataType <RegDataType>] [-NoRestart] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetAdapterAdvancedProperty -InterfaceDescription <string> -RegistryKeyword <string> -RegistryValue <string[]> [-RegistryDataType <RegDataType>] [-NoRestart] [-IncludeHidden] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IncludeHidden <switch> (Required: false)
- InterfaceDescription <string> (Required: true)
- Name <string> (Required: true)
- NoRestart <switch> (Required: false)
- RegistryDataType <RegDataType> (Required: false)
- RegistryKeyword <string> (Required: true)
- RegistryValue <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetEventSession

```powershell
New-NetEventSession [-Name] <string> [-CaptureMode <CaptureModes>] [-LocalFilePath <string>] [-MaxFileSize <uint32>] [-MaxNumberOfBuffers <byte>] [-TraceBufferSize <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CaptureMode <CaptureModes> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- LocalFilePath <string> (Required: false)
- MaxFileSize <uint32> (Required: false)
- MaxNumberOfBuffers <byte> (Required: false)
- Name <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- TraceBufferSize <uint32> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetFirewallDynamicKeywordAddress

```powershell
New-NetFirewallDynamicKeywordAddress [-Id <string>] [-Keyword <string>] [-Addresses <string>] [-AutoResolve <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Addresses <string> (Required: false)
- AsJob <switch> (Required: false)
- AutoResolve <bool> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Id <string> (Required: false)
- Keyword <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetFirewallHyperVProfile

```powershell
New-NetFirewallHyperVProfile [-PolicyStore <string>] [-GPOSession <string>] [-Name <string>] [-Profile <Profile>] [-Enabled <GpoBoolean>] [-DefaultInboundAction <Action>] [-DefaultOutboundAction <Action>] [-AllowLocalFirewallRules <GpoBoolean>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowLocalFirewallRules <GpoBoolean> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DefaultInboundAction <Action> (Required: false)
- DefaultOutboundAction <Action> (Required: false)
- Enabled <GpoBoolean> (Required: false)
- GPOSession <string> (Required: false)
- Name <string> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <Profile> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetFirewallHyperVRule

```powershell
New-NetFirewallHyperVRule -DisplayName <string> [-PolicyStore <string>] [-GPOSession <string>] [-Name <string>] [-RulePriority <uint16>] [-Direction <Direction>] [-VMCreatorId <string>] [-Protocol <string>] [-LocalAddresses <string[]>] [-LocalPorts <string[]>] [-RemoteAddresses <string[]>] [-RemotePorts <string[]>] [-Action <Action>] [-Enabled <Enabled>] [-Profiles <Profile>] [-PortStatuses <ciminstance[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Action <Action> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Direction <Direction> (Required: false)
- DisplayName <string> (Required: true)
- Enabled <Enabled> (Required: false)
- GPOSession <string> (Required: false)
- LocalAddresses <string[]> (Required: false)
- LocalPorts <string[]> (Required: false)
- Name <string> (Required: false)
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

### New-NetFirewallHyperVVMSetting

```powershell
New-NetFirewallHyperVVMSetting [-PolicyStore <string>] [-GPOSession <string>] [-Name <string>] [-Enabled <GpoBoolean>] [-DefaultInboundAction <Action>] [-DefaultOutboundAction <Action>] [-LoopbackEnabled <GpoBoolean>] [-AllowHostPolicyMerge <GpoBoolean>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowHostPolicyMerge <GpoBoolean> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DefaultInboundAction <Action> (Required: false)
- DefaultOutboundAction <Action> (Required: false)
- Enabled <GpoBoolean> (Required: false)
- GPOSession <string> (Required: false)
- LoopbackEnabled <GpoBoolean> (Required: false)
- Name <string> (Required: false)
- PolicyStore <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetFirewallRule

```powershell
New-NetFirewallRule -DisplayName <string> [-PolicyStore <string>] [-GPOSession <string>] [-Name <string>] [-Description <string>] [-Group <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-Direction <Direction>] [-Action <Action>] [-EdgeTraversalPolicy <EdgeTraversal>] [-LooseSourceMapping <bool>] [-LocalOnlyMapping <bool>] [-Owner <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-IcmpType <string[]>] [-DynamicTarget <DynamicTransport>] [-Program <string>] [-Package <string>] [-Service <string>] [-InterfaceAlias <WildcardPattern[]>] [-InterfaceType <InterfaceType>] [-LocalUser <string>] [-RemoteUser <string>] [-RemoteMachine <string>] [-Authentication <Authentication>] [-Encryption <Encryption>] [-OverrideBlockRules <bool>] [-RemoteDynamicKeywordAddresses <string[]>] [-PolicyAppId <string>] [-PackageFamilyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Action <Action> (Required: false)
- AsJob <switch> (Required: false)
- Authentication <Authentication> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- Direction <Direction> (Required: false)
- DisplayName <string> (Required: true)
- DynamicTarget <DynamicTransport> (Required: false)
- EdgeTraversalPolicy <EdgeTraversal> (Required: false)
- Enabled <Enabled> (Required: false)
- Encryption <Encryption> (Required: false)
- GPOSession <string> (Required: false)
- Group <string> (Required: false)
- IcmpType <string[]> (Required: false)
- InterfaceAlias <WildcardPattern[]> (Required: false)
- InterfaceType <InterfaceType> (Required: false)
- LocalAddress <string[]> (Required: false)
- LocalOnlyMapping <bool> (Required: false)
- LocalPort <string[]> (Required: false)
- LocalUser <string> (Required: false)
- LooseSourceMapping <bool> (Required: false)
- Name <string> (Required: false)
- OverrideBlockRules <bool> (Required: false)
- Owner <string> (Required: false)
- Package <string> (Required: false)
- PackageFamilyName <string> (Required: false)
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

### New-NetIPAddress

```powershell
New-NetIPAddress [-IPAddress] <string> -InterfaceAlias <string> [-DefaultGateway <string>] [-AddressFamily <AddressFamily>] [-Type <Type>] [-PrefixLength <byte>] [-ValidLifetime <timespan>] [-PreferredLifetime <timespan>] [-SkipAsSource <bool>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetIPAddress [-IPAddress] <string> -InterfaceIndex <uint32> [-DefaultGateway <string>] [-AddressFamily <AddressFamily>] [-Type <Type>] [-PrefixLength <byte>] [-ValidLifetime <timespan>] [-PreferredLifetime <timespan>] [-SkipAsSource <bool>] [-PolicyStore <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DefaultGateway <string> (Required: false)
- IPAddress <string> (Required: true)
- InterfaceAlias <string> (Required: true)
- InterfaceIndex <uint32> (Required: true)
- PolicyStore <string> (Required: false)
- PreferredLifetime <timespan> (Required: false)
- PrefixLength <byte> (Required: false)
- SkipAsSource <bool> (Required: false)
- ThrottleLimit <int> (Required: false)
- Type <Type> (Required: false)
- ValidLifetime <timespan> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetIPHttpsConfiguration

```powershell
New-NetIPHttpsConfiguration [-PolicyStore] <string> -ServerURL <string> [-Profile <string>] [-Type <Type>] [-State <State>] [-AuthMode <AuthMode>] [-StrongCRLRequired <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetIPHttpsConfiguration [-GPOSession] <string> -ServerURL <string> [-Profile <string>] [-Type <Type>] [-State <State>] [-AuthMode <AuthMode>] [-StrongCRLRequired <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AuthMode <AuthMode> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- GPOSession <string> (Required: true)
- PolicyStore <string> (Required: true)
- Profile <string> (Required: false)
- ServerURL <string> (Required: true)
- State <State> (Required: false)
- StrongCRLRequired <bool> (Required: false)
- ThrottleLimit <int> (Required: false)
- Type <Type> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetIPsecAuthProposal

```powershell
New-NetIPsecAuthProposal -Machine [-Health] -Cert -Authority <string> [-AccountMapping] [-AuthorityType <CertificateAuthorityType>] [-ExtendedKeyUsage <string[]>] [-ExcludeCAName] [-FollowRenewal] [-SelectionCriteria] [-Signing <CertificateSigningAlgorithm>] [-SubjectName <string>] [-SubjectNameType <CertificateSubjectType>] [-Thumbprint <string>] [-ValidationCriteria] [<CommonParameters>]

New-NetIPsecAuthProposal -User -Cert -Authority <string> [-AccountMapping] [-AuthorityType <CertificateAuthorityType>] [-ExtendedKeyUsage <string[]>] [-ExcludeCAName] [-FollowRenewal] [-SelectionCriteria] [-Signing <CertificateSigningAlgorithm>] [-SubjectName <string>] [-SubjectNameType <CertificateSubjectType>] [-Thumbprint <string>] [-ValidationCriteria] [<CommonParameters>]

New-NetIPsecAuthProposal -Anonymous [<CommonParameters>]

New-NetIPsecAuthProposal -Machine -Kerberos [-Proxy <string>] [<CommonParameters>]

New-NetIPsecAuthProposal -User -Kerberos [-Proxy <string>] [<CommonParameters>]

New-NetIPsecAuthProposal -Machine -Ntlm [<CommonParameters>]

New-NetIPsecAuthProposal -Machine [-PreSharedKey] <string> [<CommonParameters>]

New-NetIPsecAuthProposal -User -Ntlm [<CommonParameters>]

PARAMETERS:
- AccountMapping <switch> (Required: false)
- Anonymous <switch> (Required: true)
- Authority <string> (Required: true)
- AuthorityType <CertificateAuthorityType> (Required: false)
- Cert <switch> (Required: true)
- ExcludeCAName <switch> (Required: false)
- ExtendedKeyUsage <string[]> (Required: false)
- FollowRenewal <switch> (Required: false)
- Health <switch> (Required: false)
- Kerberos <switch> (Required: true)
- Machine <switch> (Required: true)
- Ntlm <switch> (Required: true)
- PreSharedKey <string> (Required: true)
- Proxy <string> (Required: false)
- SelectionCriteria <switch> (Required: false)
- Signing <CertificateSigningAlgorithm> (Required: false)
- SubjectName <string> (Required: false)
- SubjectNameType <CertificateSubjectType> (Required: false)
- Thumbprint <string> (Required: false)
- User <switch> (Required: true)
- ValidationCriteria <switch> (Required: false)
```

### New-NetIPsecDospSetting

```powershell
New-NetIPsecDospSetting -Name <string> -PublicInterfaceAliases <WildcardPattern[]> -PrivateInterfaceAliases <WildcardPattern[]> [-StateIdleTimeoutSeconds <uint32>] [-PerIPRateLimitQueueIdleTimeoutSeconds <uint32>] [-IpV6IPsecUnauthDscp <uint32>] [-IpV6IPsecUnauthRateLimitBytesPerSec <uint32>] [-IpV6IPsecUnauthPerIPRateLimitBytesPerSec <uint32>] [-IpV6IPsecAuthDscp <uint16>] [-IpV6IPsecAuthRateLimitBytesPerSec <uint32>] [-IcmpV6Dscp <uint16>] [-IcmpV6RateLimitBytesPerSec <uint32>] [-IpV6FilterExemptDscp <uint32>] [-IpV6FilterExemptRateLimitBytesPerSec <uint32>] [-DefBlockExemptDscp <uint16>] [-DefBlockExemptRateLimitBytesPerSec <uint32>] [-MaxStateEntries <uint32>] [-MaxPerIPRateLimitQueues <uint32>] [-EnabledKeyingModules <DospKeyModules>] [-FilteringFlags <DospFlags>] [-PublicV6Address <string>] [-PrivateV6Address <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

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
- IpV6FilterExemptDscp <uint32> (Required: false)
- IpV6FilterExemptRateLimitBytesPerSec <uint32> (Required: false)
- IpV6IPsecAuthDscp <uint16> (Required: false)
- IpV6IPsecAuthRateLimitBytesPerSec <uint32> (Required: false)
- IpV6IPsecUnauthDscp <uint32> (Required: false)
- IpV6IPsecUnauthPerIPRateLimitBytesPerSec <uint32> (Required: false)
- IpV6IPsecUnauthRateLimitBytesPerSec <uint32> (Required: false)
- MaxPerIPRateLimitQueues <uint32> (Required: false)
- MaxStateEntries <uint32> (Required: false)
- Name <string> (Required: true)
- PerIPRateLimitQueueIdleTimeoutSeconds <uint32> (Required: false)
- PrivateInterfaceAliases <WildcardPattern[]> (Required: true)
- PrivateV6Address <string> (Required: false)
- PublicInterfaceAliases <WildcardPattern[]> (Required: true)
- PublicV6Address <string> (Required: false)
- StateIdleTimeoutSeconds <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetIPsecMainModeCryptoProposal

```powershell
New-NetIPsecMainModeCryptoProposal [-Encryption <EncryptionAlgorithm>] [-KeyExchange <DiffieHellmanGroup>] [-Hash <HashAlgorithm>] [<CommonParameters>]

PARAMETERS:
- Encryption <EncryptionAlgorithm> (Required: false)
- Hash <HashAlgorithm> (Required: false)
- KeyExchange <DiffieHellmanGroup> (Required: false)
```

### New-NetIPsecMainModeCryptoSet

```powershell
New-NetIPsecMainModeCryptoSet -DisplayName <string> -Proposal <ciminstance[]> [-PolicyStore <string>] [-GPOSession <string>] [-Name <string>] [-Description <string>] [-Group <string>] [-MaxMinutes <uint32>] [-MaxSessions <uint32>] [-ForceDiffieHellman <bool>] [-Default] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Default <switch> (Required: false)
- Description <string> (Required: false)
- DisplayName <string> (Required: true)
- ForceDiffieHellman <bool> (Required: false)
- GPOSession <string> (Required: false)
- Group <string> (Required: false)
- MaxMinutes <uint32> (Required: false)
- MaxSessions <uint32> (Required: false)
- Name <string> (Required: false)
- PolicyStore <string> (Required: false)
- Proposal <ciminstance[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetIPsecMainModeRule

```powershell
New-NetIPsecMainModeRule -DisplayName <string> [-PolicyStore <string>] [-GPOSession <string>] [-Name <string>] [-Description <string>] [-Group <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-MainModeCryptoSet <string>] [-Phase1AuthSet <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- DisplayName <string> (Required: true)
- Enabled <Enabled> (Required: false)
- GPOSession <string> (Required: false)
- Group <string> (Required: false)
- LocalAddress <string[]> (Required: false)
- MainModeCryptoSet <string> (Required: false)
- Name <string> (Required: false)
- Phase1AuthSet <string> (Required: false)
- Platform <string[]> (Required: false)
- PolicyStore <string> (Required: false)
- Profile <Profile> (Required: false)
- RemoteAddress <string[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetIPsecPhase1AuthSet

```powershell
New-NetIPsecPhase1AuthSet -DisplayName <string> -Proposal <ciminstance[]> [-PolicyStore <string>] [-GPOSession <string>] [-Name <string>] [-Description <string>] [-Group <string>] [-Default] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Default <switch> (Required: false)
- Description <string> (Required: false)
- DisplayName <string> (Required: true)
- GPOSession <string> (Required: false)
- Group <string> (Required: false)
- Name <string> (Required: false)
- PolicyStore <string> (Required: false)
- Proposal <ciminstance[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetIPsecPhase2AuthSet

```powershell
New-NetIPsecPhase2AuthSet -DisplayName <string> -Proposal <ciminstance[]> [-PolicyStore <string>] [-GPOSession <string>] [-Name <string>] [-Description <string>] [-Group <string>] [-Default] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Default <switch> (Required: false)
- Description <string> (Required: false)
- DisplayName <string> (Required: true)
- GPOSession <string> (Required: false)
- Group <string> (Required: false)
- Name <string> (Required: false)
- PolicyStore <string> (Required: false)
- Proposal <ciminstance[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetIPsecQuickModeCryptoProposal

```powershell
New-NetIPsecQuickModeCryptoProposal [-Encryption <EncryptionAlgorithm>] [-AHHash <HashAlgorithm>] [-ESPHash <HashAlgorithm>] [-MaxKiloBytes <uint64>] [-MaxMinutes <uint64>] [-Encapsulation <IPsecEncapsulation>] [<CommonParameters>]

PARAMETERS:
- AHHash <HashAlgorithm> (Required: false)
- ESPHash <HashAlgorithm> (Required: false)
- Encapsulation <IPsecEncapsulation> (Required: false)
- Encryption <EncryptionAlgorithm> (Required: false)
- MaxKiloBytes <uint64> (Required: false)
- MaxMinutes <uint64> (Required: false)
```

### New-NetIPsecQuickModeCryptoSet

```powershell
New-NetIPsecQuickModeCryptoSet -DisplayName <string> -Proposal <ciminstance[]> [-PolicyStore <string>] [-GPOSession <string>] [-Name <string>] [-Description <string>] [-Group <string>] [-PerfectForwardSecrecyGroup <DiffieHellmanGroup>] [-Default] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Default <switch> (Required: false)
- Description <string> (Required: false)
- DisplayName <string> (Required: true)
- GPOSession <string> (Required: false)
- Group <string> (Required: false)
- Name <string> (Required: false)
- PerfectForwardSecrecyGroup <DiffieHellmanGroup> (Required: false)
- PolicyStore <string> (Required: false)
- Proposal <ciminstance[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetIPsecRule

```powershell
New-NetIPsecRule -DisplayName <string> [-PolicyStore <string>] [-GPOSession <string>] [-IPsecRuleName <string>] [-Description <string>] [-Group <string>] [-Enabled <Enabled>] [-Profile <Profile>] [-Platform <string[]>] [-Mode <IPsecMode>] [-InboundSecurity <SecurityPolicy>] [-OutboundSecurity <SecurityPolicy>] [-QuickModeCryptoSet <string>] [-Phase1AuthSet <string>] [-Phase2AuthSet <string>] [-KeyModule <KeyModule>] [-AllowWatchKey <bool>] [-AllowSetKey <bool>] [-LocalTunnelEndpoint <string[]>] [-RemoteTunnelEndpoint <string[]>] [-RemoteTunnelHostname <string>] [-ForwardPathLifetime <uint32>] [-EncryptedTunnelBypass <bool>] [-RequireAuthorization <bool>] [-User <string>] [-Machine <string>] [-LocalAddress <string[]>] [-RemoteAddress <string[]>] [-Protocol <string>] [-LocalPort <string[]>] [-RemotePort <string[]>] [-InterfaceAlias <WildcardPattern[]>] [-InterfaceType <InterfaceType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AllowSetKey <bool> (Required: false)
- AllowWatchKey <bool> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- DisplayName <string> (Required: true)
- Enabled <Enabled> (Required: false)
- EncryptedTunnelBypass <bool> (Required: false)
- ForwardPathLifetime <uint32> (Required: false)
- GPOSession <string> (Required: false)
- Group <string> (Required: false)
- IPsecRuleName <string> (Required: false)
- InboundSecurity <SecurityPolicy> (Required: false)
- InterfaceAlias <WildcardPattern[]> (Required: false)
- InterfaceType <InterfaceType> (Required: false)
- KeyModule <KeyModule> (Required: false)
- LocalAddress <string[]> (Required: false)
- LocalPort <string[]> (Required: false)
- LocalTunnelEndpoint <string[]> (Required: false)
- Machine <string> (Required: false)
- Mode <IPsecMode> (Required: false)
- OutboundSecurity <SecurityPolicy> (Required: false)
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

### New-NetLbfoTeam

```powershell
New-NetLbfoTeam [-Name] <string> [-TeamMembers] <WildcardPattern[]> [[-TeamNicName] <string>] [[-TeamingMode] <TeamingModes>] [[-LoadBalancingAlgorithm] <LBAlgos>] [[-LacpTimer] <LacpTimers>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- LacpTimer <LacpTimers> (Required: false)
- LoadBalancingAlgorithm <LBAlgos> (Required: false)
- Name <string> (Required: true)
- TeamMembers <WildcardPattern[]> (Required: true)
- TeamNicName <string> (Required: false)
- TeamingMode <TeamingModes> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetNat

```powershell
New-NetNat [-Name] <string> [-ExternalIPInterfaceAddressPrefix <string>] [-InternalRoutingDomainId <string>] [-InternalIPInterfaceAddressPrefix <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- ExternalIPInterfaceAddressPrefix <string> (Required: false)
- InternalIPInterfaceAddressPrefix <string> (Required: false)
- InternalRoutingDomainId <string> (Required: false)
- Name <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetNatTransitionConfiguration

```powershell
New-NetNatTransitionConfiguration -InstanceName <string> [-PolicyStore <PolicyStore>] [-State <State>] [-InboundInterface <string[]>] [-OutboundInterface <string[]>] [-PrefixMapping <string[]>] [-IPv4AddressPortPool <string[]>] [-TcpMappingTimeoutSeconds <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPv4AddressPortPool <string[]> (Required: false)
- InboundInterface <string[]> (Required: false)
- InstanceName <string> (Required: true)
- OutboundInterface <string[]> (Required: false)
- PolicyStore <PolicyStore> (Required: false)
- PrefixMapping <string[]> (Required: false)
- State <State> (Required: false)
- TcpMappingTimeoutSeconds <uint32> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetNeighbor

```powershell
New-NetNeighbor [-IPAddress] <string> -InterfaceAlias <string> [-LinkLayerAddress <string>] [-PolicyStore <string>] [-State <State>] [-AddressFamily <AddressFamily>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetNeighbor [-IPAddress] <string> -InterfaceIndex <uint32> [-LinkLayerAddress <string>] [-PolicyStore <string>] [-State <State>] [-AddressFamily <AddressFamily>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- IPAddress <string> (Required: true)
- InterfaceAlias <string> (Required: true)
- InterfaceIndex <uint32> (Required: true)
- LinkLayerAddress <string> (Required: false)
- PolicyStore <string> (Required: false)
- State <State> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetQosPolicy

```powershell
New-NetQosPolicy [-Name] <string> [-PolicyStore <string>] [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-PriorityValue8021Action <sbyte>] [-DSCPAction <sbyte>] [-MinBandwidthWeightAction <byte>] [-ThrottleRateActionBitsPerSecond <uint64>] [-IPDstPrefixMatchCondition <string>] [-UserMatchCondition <string>] [-AppPathNameMatchCondition <string>] [-IPProtocolMatchCondition <Protocol>] [-IPSrcPrefixMatchCondition <string>] [-IPSrcPortMatchCondition <uint16>] [-IPSrcPortStartMatchCondition <uint16>] [-IPSrcPortEndMatchCondition <uint16>] [-IPDstPortMatchCondition <uint16>] [-IPDstPortStartMatchCondition <uint16>] [-IPDstPortEndMatchCondition <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetQosPolicy [-Name] <string> -IPPortMatchCondition <uint16> [-PolicyStore <string>] [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-PriorityValue8021Action <sbyte>] [-DSCPAction <sbyte>] [-MinBandwidthWeightAction <byte>] [-ThrottleRateActionBitsPerSecond <uint64>] [-UserMatchCondition <string>] [-AppPathNameMatchCondition <string>] [-IPProtocolMatchCondition <Protocol>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetQosPolicy [-Name] <string> -PriorityValue8021Action <sbyte> -NetDirectPortMatchCondition <uint16> [-PolicyStore <string>] [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetQosPolicy [-Name] <string> -URIMatchCondition <string> [-PolicyStore <string>] [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-DSCPAction <sbyte>] [-ThrottleRateActionBitsPerSecond <uint64>] [-URIRecursiveMatchCondition <bool>] [-IPDstPrefixMatchCondition <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetQosPolicy [-Name] <string> -Cluster [-PolicyStore <string>] [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-PriorityValue8021Action <sbyte>] [-DSCPAction <sbyte>] [-MinBandwidthWeightAction <byte>] [-ThrottleRateActionBitsPerSecond <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetQosPolicy [-Name] <string> -SMB [-PolicyStore <string>] [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-PriorityValue8021Action <sbyte>] [-DSCPAction <sbyte>] [-MinBandwidthWeightAction <byte>] [-ThrottleRateActionBitsPerSecond <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetQosPolicy [-Name] <string> -NFS [-PolicyStore <string>] [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-PriorityValue8021Action <sbyte>] [-DSCPAction <sbyte>] [-MinBandwidthWeightAction <byte>] [-ThrottleRateActionBitsPerSecond <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetQosPolicy [-Name] <string> -LiveMigration [-PolicyStore <string>] [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-PriorityValue8021Action <sbyte>] [-DSCPAction <sbyte>] [-MinBandwidthWeightAction <byte>] [-ThrottleRateActionBitsPerSecond <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetQosPolicy [-Name] <string> -iSCSI [-PolicyStore <string>] [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-PriorityValue8021Action <sbyte>] [-DSCPAction <sbyte>] [-MinBandwidthWeightAction <byte>] [-ThrottleRateActionBitsPerSecond <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetQosPolicy [-Name] <string> -PriorityValue8021Action <sbyte> -FCOE [-PolicyStore <string>] [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetQosPolicy [-Name] <string> -Default [-PolicyStore <string>] [-NetworkProfile <NetworkProfile>] [-Precedence <uint32>] [-PriorityValue8021Action <sbyte>] [-DSCPAction <sbyte>] [-MinBandwidthWeightAction <byte>] [-ThrottleRateActionBitsPerSecond <uint64>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AppPathNameMatchCondition <string> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Cluster <switch> (Required: true)
- Confirm <switch> (Required: false)
- DSCPAction <sbyte> (Required: false)
- Default <switch> (Required: true)
- FCOE <switch> (Required: true)
- IPDstPortEndMatchCondition <uint16> (Required: false)
- IPDstPortMatchCondition <uint16> (Required: false)
- IPDstPortStartMatchCondition <uint16> (Required: false)
- IPDstPrefixMatchCondition <string> (Required: false)
- IPPortMatchCondition <uint16> (Required: true)
- IPProtocolMatchCondition <Protocol> (Required: false)
- IPSrcPortEndMatchCondition <uint16> (Required: false)
- IPSrcPortMatchCondition <uint16> (Required: false)
- IPSrcPortStartMatchCondition <uint16> (Required: false)
- IPSrcPrefixMatchCondition <string> (Required: false)
- LiveMigration <switch> (Required: true)
- MinBandwidthWeightAction <byte> (Required: false)
- NFS <switch> (Required: true)
- Name <string> (Required: true)
- NetDirectPortMatchCondition <uint16> (Required: true)
- NetworkProfile <NetworkProfile> (Required: false)
- PolicyStore <string> (Required: false)
- Precedence <uint32> (Required: false)
- PriorityValue8021Action <sbyte> (Required: false)
- SMB <switch> (Required: true)
- ThrottleLimit <int> (Required: false)
- ThrottleRateActionBitsPerSecond <uint64> (Required: false)
- URIMatchCondition <string> (Required: true)
- URIRecursiveMatchCondition <bool> (Required: false)
- UserMatchCondition <string> (Required: false)
- WhatIf <switch> (Required: false)
- iSCSI <switch> (Required: true)
```

### New-NetRoute

```powershell
New-NetRoute [-DestinationPrefix] <string> -InterfaceAlias <string> [-AddressFamily <AddressFamily>] [-NextHop <string>] [-PolicyStore <string>] [-Publish <Publish>] [-RouteMetric <uint16>] [-Protocol <Protocol>] [-ValidLifetime <timespan>] [-PreferredLifetime <timespan>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-NetRoute [-DestinationPrefix] <string> -InterfaceIndex <uint32> [-AddressFamily <AddressFamily>] [-NextHop <string>] [-PolicyStore <string>] [-Publish <Publish>] [-RouteMetric <uint16>] [-Protocol <Protocol>] [-ValidLifetime <timespan>] [-PreferredLifetime <timespan>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AddressFamily <AddressFamily> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DestinationPrefix <string> (Required: true)
- InterfaceAlias <string> (Required: true)
- InterfaceIndex <uint32> (Required: true)
- NextHop <string> (Required: false)
- PolicyStore <string> (Required: false)
- PreferredLifetime <timespan> (Required: false)
- Protocol <Protocol> (Required: false)
- Publish <Publish> (Required: false)
- RouteMetric <uint16> (Required: false)
- ThrottleLimit <int> (Required: false)
- ValidLifetime <timespan> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetSwitchTeam

```powershell
New-NetSwitchTeam [-Name] <string> [-TeamMembers] <string[]> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Name <string> (Required: true)
- TeamMembers <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### New-NetTransportFilter

```powershell
New-NetTransportFilter -SettingName <string> [-Protocol <Protocol>] [-LocalPortStart <uint16>] [-LocalPortEnd <uint16>] [-RemotePortStart <uint16>] [-RemotePortEnd <uint16>] [-DestinationPrefix <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DestinationPrefix <string> (Required: false)
- LocalPortEnd <uint16> (Required: false)
- LocalPortStart <uint16> (Required: false)
- Protocol <Protocol> (Required: false)
- RemotePortEnd <uint16> (Required: false)
- RemotePortStart <uint16> (Required: false)
- SettingName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-NetworkSwitchVlan

```powershell
New-NetworkSwitchVlan [-CimSession] <CimSession> [[-Caption] <string>] [[-Description] <string>] [-VlanID] <int> [-Name] <string> [<CommonParameters>]

PARAMETERS:
- Caption <string> (Required: false)
- CimSession <CimSession> (Required: true)
- Description <string> (Required: false)
- Name <string> (Required: true)
- VlanID <int> (Required: true)
```

### New-Object

```powershell
New-Object [-TypeName] <string> [[-ArgumentList] <Object[]>] [-Property <IDictionary>] [<CommonParameters>]

New-Object [-ComObject] <string> [-Strict] [-Property <IDictionary>] [<CommonParameters>]

PARAMETERS:
- ArgumentList <Object[]> (Required: false)
- ComObject <string> (Required: true)
- Property <IDictionary> (Required: false)
- Strict <switch> (Required: false)
- TypeName <string> (Required: true)
```

### New-Partition

```powershell
New-Partition [-DiskNumber] <uint32[]> [-Size <uint64>] [-UseMaximumSize] [-Offset <uint64>] [-Alignment <uint32>] [-DriveLetter <char>] [-AssignDriveLetter] [-MbrType <MbrType>] [-GptType <string>] [-IsHidden] [-IsActive] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-Partition -DiskId <string[]> [-Size <uint64>] [-UseMaximumSize] [-Offset <uint64>] [-Alignment <uint32>] [-DriveLetter <char>] [-AssignDriveLetter] [-MbrType <MbrType>] [-GptType <string>] [-IsHidden] [-IsActive] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-Partition -DiskPath <string[]> [-Size <uint64>] [-UseMaximumSize] [-Offset <uint64>] [-Alignment <uint32>] [-DriveLetter <char>] [-AssignDriveLetter] [-MbrType <MbrType>] [-GptType <string>] [-IsHidden] [-IsActive] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-Partition -InputObject <CimInstance#MSFT_Disk[]> [-Size <uint64>] [-UseMaximumSize] [-Offset <uint64>] [-Alignment <uint32>] [-DriveLetter <char>] [-AssignDriveLetter] [-MbrType <MbrType>] [-GptType <string>] [-IsHidden] [-IsActive] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Alignment <uint32> (Required: false)
- AsJob <switch> (Required: false)
- AssignDriveLetter <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- DiskId <string[]> (Required: true)
- DiskNumber <uint32[]> (Required: true)
- DiskPath <string[]> (Required: true)
- DriveLetter <char> (Required: false)
- GptType <string> (Required: false)
- InputObject <CimInstance#MSFT_Disk[]> (Required: true)
- IsActive <switch> (Required: false)
- IsHidden <switch> (Required: false)
- MbrType <MbrType> (Required: false)
- Offset <uint64> (Required: false)
- Size <uint64> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseMaximumSize <switch> (Required: false)
```

### New-PesterOption

```powershell
SYNOPSIS:
Creates an object that contains advanced options for Invoke-Pester

```

### New-PmemDedicatedMemory

```powershell
New-PmemDedicatedMemory -RegionId <uint32[]> [-FriendlyName <string[]>] [-SizeInBytes <uint64[]>] [<CommonParameters>]

PARAMETERS:
- FriendlyName <string[]> (Required: false)
- RegionId <uint32[]> (Required: true)
- SizeInBytes <uint64[]> (Required: false)
```

### New-PmemDisk

```powershell
New-PmemDisk -RegionId <uint32[]> [-FriendlyName <string[]>] [-DiskSizeInBytes <uint64[]>] [-AtomicityType <NAMESPACE_ATOMICITY_TYPE[]>] [<CommonParameters>]

New-PmemDisk -DiskSizeInBytes <uint64[]> -Simulated [-AtomicityType <NAMESPACE_ATOMICITY_TYPE[]>] [<CommonParameters>]

PARAMETERS:
- AtomicityType <NAMESPACE_ATOMICITY_TYPE[]> (Required: false)
- DiskSizeInBytes <uint64[]> (Required: true)
- FriendlyName <string[]> (Required: false)
- RegionId <uint32[]> (Required: true)
- Simulated <switch> (Required: true)
```

### New-ProvisioningRepro

### New-PSDrive

```powershell
New-PSDrive [-Name] <string> [-PSProvider] <string> [-Root] <string> [-Description <string>] [-Scope <string>] [-Persist] [-Credential <pscredential>] [-WhatIf] [-Confirm] [-UseTransaction] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- Description <string> (Required: false)
- Name <string> (Required: true)
- PSProvider <string> (Required: true)
- Persist <switch> (Required: false)
- Root <string> (Required: true)
- Scope <string> (Required: false)
- UseTransaction <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-PSRoleCapabilityFile

```powershell
New-PSRoleCapabilityFile [-Path] <string> [-Guid <guid>] [-Author <string>] [-Description <string>] [-CompanyName <string>] [-Copyright <string>] [-ModulesToImport <Object[]>] [-VisibleAliases <string[]>] [-VisibleCmdlets <Object[]>] [-VisibleFunctions <Object[]>] [-VisibleExternalCommands <string[]>] [-VisibleProviders <string[]>] [-ScriptsToProcess <string[]>] [-AliasDefinitions <IDictionary[]>] [-FunctionDefinitions <IDictionary[]>] [-VariableDefinitions <Object>] [-EnvironmentVariables <IDictionary>] [-TypesToProcess <string[]>] [-FormatsToProcess <string[]>] [-AssembliesToLoad <string[]>] [<CommonParameters>]

PARAMETERS:
- AliasDefinitions <IDictionary[]> (Required: false)
- AssembliesToLoad <string[]> (Required: false)
- Author <string> (Required: false)
- CompanyName <string> (Required: false)
- Copyright <string> (Required: false)
- Description <string> (Required: false)
- EnvironmentVariables <IDictionary> (Required: false)
- FormatsToProcess <string[]> (Required: false)
- FunctionDefinitions <IDictionary[]> (Required: false)
- Guid <guid> (Required: false)
- ModulesToImport <Object[]> (Required: false)
- Path <string> (Required: true)
- ScriptsToProcess <string[]> (Required: false)
- TypesToProcess <string[]> (Required: false)
- VariableDefinitions <Object> (Required: false)
- VisibleAliases <string[]> (Required: false)
- VisibleCmdlets <Object[]> (Required: false)
- VisibleExternalCommands <string[]> (Required: false)
- VisibleFunctions <Object[]> (Required: false)
- VisibleProviders <string[]> (Required: false)
```

### New-PSSession

```powershell
New-PSSession [[-ComputerName] <string[]>] [-Credential <pscredential>] [-Name <string[]>] [-EnableNetworkAccess] [-ConfigurationName <string>] [-Port <int>] [-UseSSL] [-ApplicationName <string>] [-ThrottleLimit <int>] [-SessionOption <PSSessionOption>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

New-PSSession [-ConnectionUri] <uri[]> [-Credential <pscredential>] [-Name <string[]>] [-EnableNetworkAccess] [-ConfigurationName <string>] [-ThrottleLimit <int>] [-AllowRedirection] [-SessionOption <PSSessionOption>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

New-PSSession [-VMId] <guid[]> -Credential <pscredential> [-Name <string[]>] [-ConfigurationName <string>] [-ThrottleLimit <int>] [<CommonParameters>]

New-PSSession -Credential <pscredential> -VMName <string[]> [-Name <string[]>] [-ConfigurationName <string>] [-ThrottleLimit <int>] [<CommonParameters>]

New-PSSession [[-Session] <PSSession[]>] [-Name <string[]>] [-EnableNetworkAccess] [-ThrottleLimit <int>] [<CommonParameters>]

New-PSSession -ContainerId <string[]> [-Name <string[]>] [-ConfigurationName <string>] [-RunAsAdministrator] [-ThrottleLimit <int>] [<CommonParameters>]

PARAMETERS:
- AllowRedirection <switch> (Required: false)
- ApplicationName <string> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string[]> (Required: false)
- ConfigurationName <string> (Required: false)
- ConnectionUri <uri[]> (Required: true)
- ContainerId <string[]> (Required: true)
- Credential <pscredential> (Required: false)
- EnableNetworkAccess <switch> (Required: false)
- Name <string[]> (Required: false)
- Port <int> (Required: false)
- RunAsAdministrator <switch> (Required: false)
- Session <PSSession[]> (Required: false)
- SessionOption <PSSessionOption> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseSSL <switch> (Required: false)
- VMId <guid[]> (Required: true)
- VMName <string[]> (Required: true)
```

### New-PSSessionConfigurationFile

```powershell
New-PSSessionConfigurationFile [-Path] <string> [-SchemaVersion <version>] [-Guid <guid>] [-Author <string>] [-Description <string>] [-CompanyName <string>] [-Copyright <string>] [-SessionType <SessionType>] [-TranscriptDirectory <string>] [-RunAsVirtualAccount] [-RunAsVirtualAccountGroups <string[]>] [-MountUserDrive] [-UserDriveMaximumSize <long>] [-GroupManagedServiceAccount <string>] [-ScriptsToProcess <string[]>] [-RoleDefinitions <IDictionary>] [-RequiredGroups <IDictionary>] [-LanguageMode <PSLanguageMode>] [-ExecutionPolicy <ExecutionPolicy>] [-PowerShellVersion <version>] [-ModulesToImport <Object[]>] [-VisibleAliases <string[]>] [-VisibleCmdlets <Object[]>] [-VisibleFunctions <Object[]>] [-VisibleExternalCommands <string[]>] [-VisibleProviders <string[]>] [-AliasDefinitions <IDictionary[]>] [-FunctionDefinitions <IDictionary[]>] [-VariableDefinitions <Object>] [-EnvironmentVariables <IDictionary>] [-TypesToProcess <string[]>] [-FormatsToProcess <string[]>] [-AssembliesToLoad <string[]>] [-Full] [<CommonParameters>]

PARAMETERS:
- AliasDefinitions <IDictionary[]> (Required: false)
- AssembliesToLoad <string[]> (Required: false)
- Author <string> (Required: false)
- CompanyName <string> (Required: false)
- Copyright <string> (Required: false)
- Description <string> (Required: false)
- EnvironmentVariables <IDictionary> (Required: false)
- ExecutionPolicy <ExecutionPolicy> (Required: false)
- FormatsToProcess <string[]> (Required: false)
- Full <switch> (Required: false)
- FunctionDefinitions <IDictionary[]> (Required: false)
- GroupManagedServiceAccount <string> (Required: false)
- Guid <guid> (Required: false)
- LanguageMode <PSLanguageMode> (Required: false)
- ModulesToImport <Object[]> (Required: false)
- MountUserDrive <switch> (Required: false)
- Path <string> (Required: true)
- PowerShellVersion <version> (Required: false)
- RequiredGroups <IDictionary> (Required: false)
- RoleDefinitions <IDictionary> (Required: false)
- RunAsVirtualAccount <switch> (Required: false)
- RunAsVirtualAccountGroups <string[]> (Required: false)
- SchemaVersion <version> (Required: false)
- ScriptsToProcess <string[]> (Required: false)
- SessionType <SessionType> (Required: false)
- TranscriptDirectory <string> (Required: false)
- TypesToProcess <string[]> (Required: false)
- UserDriveMaximumSize <long> (Required: false)
- VariableDefinitions <Object> (Required: false)
- VisibleAliases <string[]> (Required: false)
- VisibleCmdlets <Object[]> (Required: false)
- VisibleExternalCommands <string[]> (Required: false)
- VisibleFunctions <Object[]> (Required: false)
- VisibleProviders <string[]> (Required: false)
```

### New-PSSessionOption

```powershell
New-PSSessionOption [-MaximumRedirection <int>] [-NoCompression] [-NoMachineProfile] [-Culture <cultureinfo>] [-UICulture <cultureinfo>] [-MaximumReceivedDataSizePerCommand <int>] [-MaximumReceivedObjectSize <int>] [-OutputBufferingMode <OutputBufferingMode>] [-MaxConnectionRetryCount <int>] [-ApplicationArguments <psprimitivedictionary>] [-OpenTimeout <int>] [-CancelTimeout <int>] [-IdleTimeout <int>] [-ProxyAccessType <ProxyAccessType>] [-ProxyAuthentication <AuthenticationMechanism>] [-ProxyCredential <pscredential>] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-OperationTimeout <int>] [-NoEncryption] [-UseUTF16] [-IncludePortInSPN] [<CommonParameters>]

PARAMETERS:
- ApplicationArguments <psprimitivedictionary> (Required: false)
- CancelTimeout <int> (Required: false)
- Culture <cultureinfo> (Required: false)
- IdleTimeout <int> (Required: false)
- IncludePortInSPN <switch> (Required: false)
- MaxConnectionRetryCount <int> (Required: false)
- MaximumReceivedDataSizePerCommand <int> (Required: false)
- MaximumReceivedObjectSize <int> (Required: false)
- MaximumRedirection <int> (Required: false)
- NoCompression <switch> (Required: false)
- NoEncryption <switch> (Required: false)
- NoMachineProfile <switch> (Required: false)
- OpenTimeout <int> (Required: false)
- OperationTimeout <int> (Required: false)
- OutputBufferingMode <OutputBufferingMode> (Required: false)
- ProxyAccessType <ProxyAccessType> (Required: false)
- ProxyAuthentication <AuthenticationMechanism> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- SkipCACheck <switch> (Required: false)
- SkipCNCheck <switch> (Required: false)
- SkipRevocationCheck <switch> (Required: false)
- UICulture <cultureinfo> (Required: false)
- UseUTF16 <switch> (Required: false)
```

### New-PSTransportOption

```powershell
New-PSTransportOption [-MaxIdleTimeoutSec <int>] [-ProcessIdleTimeoutSec <int>] [-MaxSessions <int>] [-MaxConcurrentCommandsPerSession <int>] [-MaxSessionsPerUser <int>] [-MaxMemoryPerSessionMB <int>] [-MaxProcessesPerSession <int>] [-MaxConcurrentUsers <int>] [-IdleTimeoutSec <int>] [-OutputBufferingMode <OutputBufferingMode>] [<CommonParameters>]

PARAMETERS:
- IdleTimeoutSec <int> (Required: false)
- MaxConcurrentCommandsPerSession <int> (Required: false)
- MaxConcurrentUsers <int> (Required: false)
- MaxIdleTimeoutSec <int> (Required: false)
- MaxMemoryPerSessionMB <int> (Required: false)
- MaxProcessesPerSession <int> (Required: false)
- MaxSessions <int> (Required: false)
- MaxSessionsPerUser <int> (Required: false)
- OutputBufferingMode <OutputBufferingMode> (Required: false)
- ProcessIdleTimeoutSec <int> (Required: false)
```

### New-PSWorkflowExecutionOption

```powershell
New-PSWorkflowExecutionOption [-PersistencePath <string>] [-MaxPersistenceStoreSizeGB <long>] [-PersistWithEncryption] [-MaxRunningWorkflows <int>] [-AllowedActivity <string[]>] [-OutOfProcessActivity <string[]>] [-EnableValidation] [-MaxDisconnectedSessions <int>] [-MaxConnectedSessions <int>] [-MaxSessionsPerWorkflow <int>] [-MaxSessionsPerRemoteNode <int>] [-MaxActivityProcesses <int>] [-ActivityProcessIdleTimeoutSec <int>] [-RemoteNodeSessionIdleTimeoutSec <int>] [-SessionThrottleLimit <int>] [-WorkflowShutdownTimeoutMSec <int>] [<CommonParameters>]

PARAMETERS:
- ActivityProcessIdleTimeoutSec <int> (Required: false)
- AllowedActivity <string[]> (Required: false)
- EnableValidation <switch> (Required: false)
- MaxActivityProcesses <int> (Required: false)
- MaxConnectedSessions <int> (Required: false)
- MaxDisconnectedSessions <int> (Required: false)
- MaxPersistenceStoreSizeGB <long> (Required: false)
- MaxRunningWorkflows <int> (Required: false)
- MaxSessionsPerRemoteNode <int> (Required: false)
- MaxSessionsPerWorkflow <int> (Required: false)
- OutOfProcessActivity <string[]> (Required: false)
- PersistWithEncryption <switch> (Required: false)
- PersistencePath <string> (Required: false)
- RemoteNodeSessionIdleTimeoutSec <int> (Required: false)
- SessionThrottleLimit <int> (Required: false)
- WorkflowShutdownTimeoutMSec <int> (Required: false)
```

### New-PSWorkflowSession

```powershell
New-PSWorkflowSession [[-ComputerName] <string[]>] [-Credential <Object>] [-Name <string[]>] [-Port <int>] [-UseSSL] [-ApplicationName <string>] [-ThrottleLimit <int>] [-SessionOption <PSSessionOption>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [-EnableNetworkAccess] [<CommonParameters>]

PARAMETERS:
- ApplicationName <string> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string[]> (Required: false)
- Credential <Object> (Required: false)
- EnableNetworkAccess <switch> (Required: false)
- Name <string[]> (Required: false)
- Port <int> (Required: false)
- SessionOption <PSSessionOption> (Required: false)
- ThrottleLimit <int> (Required: false)
- UseSSL <switch> (Required: false)
```

### New-ScheduledJobOption

```powershell
New-ScheduledJobOption [-RunElevated] [-HideInTaskScheduler] [-RestartOnIdleResume] [-MultipleInstancePolicy <TaskMultipleInstancePolicy>] [-DoNotAllowDemandStart] [-RequireNetwork] [-StopIfGoingOffIdle] [-WakeToRun] [-ContinueIfGoingOnBattery] [-StartIfOnBattery] [-IdleTimeout <timespan>] [-IdleDuration <timespan>] [-StartIfIdle] [<CommonParameters>]

PARAMETERS:
- ContinueIfGoingOnBattery <switch> (Required: false)
- DoNotAllowDemandStart <switch> (Required: false)
- HideInTaskScheduler <switch> (Required: false)
- IdleDuration <timespan> (Required: false)
- IdleTimeout <timespan> (Required: false)
- MultipleInstancePolicy <TaskMultipleInstancePolicy> (Required: false)
- RequireNetwork <switch> (Required: false)
- RestartOnIdleResume <switch> (Required: false)
- RunElevated <switch> (Required: false)
- StartIfIdle <switch> (Required: false)
- StartIfOnBattery <switch> (Required: false)
- StopIfGoingOffIdle <switch> (Required: false)
- WakeToRun <switch> (Required: false)
```

### New-ScheduledTask

```powershell
New-ScheduledTask [[-Action] <CimInstance#MSFT_TaskAction[]>] [[-Trigger] <CimInstance#MSFT_TaskTrigger[]>] [[-Settings] <CimInstance#MSFT_TaskSettings>] [[-Principal] <CimInstance#MSFT_TaskPrincipal>] [[-Description] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Action <CimInstance#MSFT_TaskAction[]> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Description <string> (Required: false)
- Principal <CimInstance#MSFT_TaskPrincipal> (Required: false)
- Settings <CimInstance#MSFT_TaskSettings> (Required: false)
- ThrottleLimit <int> (Required: false)
- Trigger <CimInstance#MSFT_TaskTrigger[]> (Required: false)
```

### New-ScheduledTaskAction

```powershell
New-ScheduledTaskAction [-Execute] <string> [[-Argument] <string>] [[-WorkingDirectory] <string>] [-Id <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- Argument <string> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Execute <string> (Required: true)
- Id <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- WorkingDirectory <string> (Required: false)
```

### New-ScheduledTaskPrincipal

```powershell
New-ScheduledTaskPrincipal [-UserId] <string> [[-LogonType] <LogonTypeEnum>] [[-RunLevel] <RunLevelEnum>] [[-ProcessTokenSidType] <ProcessTokenSidTypeEnum>] [[-RequiredPrivilege] <string[]>] [[-Id] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-ScheduledTaskPrincipal [-GroupId] <string> [[-RunLevel] <RunLevelEnum>] [[-ProcessTokenSidType] <ProcessTokenSidTypeEnum>] [[-RequiredPrivilege] <string[]>] [[-Id] <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- GroupId <string> (Required: true)
- Id <string> (Required: false)
- LogonType <LogonTypeEnum> (Required: false)
- ProcessTokenSidType <ProcessTokenSidTypeEnum> (Required: false)
- RequiredPrivilege <string[]> (Required: false)
- RunLevel <RunLevelEnum> (Required: false)
- ThrottleLimit <int> (Required: false)
- UserId <string> (Required: true)
```

### New-ScheduledTaskSettingsSet

```powershell
New-ScheduledTaskSettingsSet [-DisallowDemandStart] [-DisallowHardTerminate] [-Compatibility <CompatibilityEnum>] [-DeleteExpiredTaskAfter <timespan>] [-AllowStartIfOnBatteries] [-Disable] [-MaintenanceExclusive] [-Hidden] [-RunOnlyIfIdle] [-IdleWaitTimeout <timespan>] [-NetworkId <string>] [-NetworkName <string>] [-DisallowStartOnRemoteAppSession] [-MaintenancePeriod <timespan>] [-MaintenanceDeadline <timespan>] [-StartWhenAvailable] [-DontStopIfGoingOnBatteries] [-WakeToRun] [-IdleDuration <timespan>] [-RestartOnIdle] [-DontStopOnIdleEnd] [-ExecutionTimeLimit <timespan>] [-MultipleInstances <MultipleInstancesEnum>] [-Priority <int>] [-RestartCount <int>] [-RestartInterval <timespan>] [-RunOnlyIfNetworkAvailable] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AllowStartIfOnBatteries <switch> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Compatibility <CompatibilityEnum> (Required: false)
- DeleteExpiredTaskAfter <timespan> (Required: false)
- Disable <switch> (Required: false)
- DisallowDemandStart <switch> (Required: false)
- DisallowHardTerminate <switch> (Required: false)
- DisallowStartOnRemoteAppSession <switch> (Required: false)
- DontStopIfGoingOnBatteries <switch> (Required: false)
- DontStopOnIdleEnd <switch> (Required: false)
- ExecutionTimeLimit <timespan> (Required: false)
- Hidden <switch> (Required: false)
- IdleDuration <timespan> (Required: false)
- IdleWaitTimeout <timespan> (Required: false)
- MaintenanceDeadline <timespan> (Required: false)
- MaintenanceExclusive <switch> (Required: false)
- MaintenancePeriod <timespan> (Required: false)
- MultipleInstances <MultipleInstancesEnum> (Required: false)
- NetworkId <string> (Required: false)
- NetworkName <string> (Required: false)
- Priority <int> (Required: false)
- RestartCount <int> (Required: false)
- RestartInterval <timespan> (Required: false)
- RestartOnIdle <switch> (Required: false)
- RunOnlyIfIdle <switch> (Required: false)
- RunOnlyIfNetworkAvailable <switch> (Required: false)
- StartWhenAvailable <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WakeToRun <switch> (Required: false)
```

### New-ScheduledTaskTrigger

```powershell
New-ScheduledTaskTrigger -Once -At <datetime> [-RandomDelay <timespan>] [-RepetitionDuration <timespan>] [-RepetitionInterval <timespan>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-ScheduledTaskTrigger -Daily -At <datetime> [-DaysInterval <uint32>] [-RandomDelay <timespan>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-ScheduledTaskTrigger -Weekly -At <datetime> [-RandomDelay <timespan>] [-DaysOfWeek <DayOfWeek[]>] [-WeeksInterval <uint32>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-ScheduledTaskTrigger -AtStartup [-RandomDelay <timespan>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-ScheduledTaskTrigger -AtLogOn [-RandomDelay <timespan>] [-User <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- At <datetime> (Required: true)
- AtLogOn <switch> (Required: true)
- AtStartup <switch> (Required: true)
- CimSession <CimSession[]> (Required: false)
- Daily <switch> (Required: true)
- DaysInterval <uint32> (Required: false)
- DaysOfWeek <DayOfWeek[]> (Required: false)
- Once <switch> (Required: true)
- RandomDelay <timespan> (Required: false)
- RepetitionDuration <timespan> (Required: false)
- RepetitionInterval <timespan> (Required: false)
- ThrottleLimit <int> (Required: false)
- User <string> (Required: false)
- Weekly <switch> (Required: true)
- WeeksInterval <uint32> (Required: false)
```

### New-ScriptFileInfo

```powershell
New-ScriptFileInfo [[-Path] <string>] -Description <string> [-Version <version>] [-Author <string>] [-Guid <guid>] [-CompanyName <string>] [-Copyright <string>] [-RequiredModules <Object[]>] [-ExternalModuleDependencies <string[]>] [-RequiredScripts <string[]>] [-ExternalScriptDependencies <string[]>] [-Tags <string[]>] [-ProjectUri <uri>] [-LicenseUri <uri>] [-IconUri <uri>] [-ReleaseNotes <string[]>] [-PassThru] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Author <string> (Required: false)
- CompanyName <string> (Required: false)
- Confirm <switch> (Required: false)
- Copyright <string> (Required: false)
- Description <string> (Required: true)
- ExternalModuleDependencies <string[]> (Required: false)
- ExternalScriptDependencies <string[]> (Required: false)
- Force <switch> (Required: false)
- Guid <guid> (Required: false)
- IconUri <uri> (Required: false)
- LicenseUri <uri> (Required: false)
- PassThru <switch> (Required: false)
- Path <string> (Required: false)
- ProjectUri <uri> (Required: false)
- ReleaseNotes <string[]> (Required: false)
- RequiredModules <Object[]> (Required: false)
- RequiredScripts <string[]> (Required: false)
- Tags <string[]> (Required: false)
- Version <version> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-SelfSignedCertificate

```powershell
New-SelfSignedCertificate [-SecurityDescriptor <FileSecurity>] [-TextExtension <string[]>] [-Extension <X509Extension[]>] [-HardwareKeyUsage <HardwareKeyUsage[]>] [-KeyUsageProperty <KeyUsageProperty[]>] [-KeyUsage <KeyUsage[]>] [-KeyProtection <KeyProtection[]>] [-KeyExportPolicy <KeyExportPolicy[]>] [-KeyLength <int>] [-KeyAlgorithm <string>] [-SmimeCapabilities] [-ExistingKey] [-KeyLocation <string>] [-SignerReader <string>] [-Reader <string>] [-SignerPin <securestring>] [-Pin <securestring>] [-KeyDescription <string>] [-KeyFriendlyName <string>] [-Container <string>] [-Provider <string>] [-CurveExport <CurveParametersExportType>] [-KeySpec <KeySpec>] [-Type <CertificateType>] [-FriendlyName <string>] [-NotAfter <datetime>] [-NotBefore <datetime>] [-SerialNumber <string>] [-Subject <string>] [-DnsName <string[]>] [-SuppressOid <string[]>] [-HashAlgorithm <string>] [-AlternateSignatureAlgorithm] [-TestRoot] [-Signer <Certificate>] [-CloneCert <Certificate>] [-CertStoreLocation <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AlternateSignatureAlgorithm <switch> (Required: false)
- CertStoreLocation <string> (Required: false)
- CloneCert <Certificate> (Required: false)
- Confirm <switch> (Required: false)
- Container <string> (Required: false)
- CurveExport <CurveParametersExportType> (Required: false)
- DnsName <string[]> (Required: false)
- ExistingKey <switch> (Required: false)
- Extension <X509Extension[]> (Required: false)
- FriendlyName <string> (Required: false)
- HardwareKeyUsage <HardwareKeyUsage[]> (Required: false)
- HashAlgorithm <string> (Required: false)
- KeyAlgorithm <string> (Required: false)
- KeyDescription <string> (Required: false)
- KeyExportPolicy <KeyExportPolicy[]> (Required: false)
- KeyFriendlyName <string> (Required: false)
- KeyLength <int> (Required: false)
- KeyLocation <string> (Required: false)
- KeyProtection <KeyProtection[]> (Required: false)
- KeySpec <KeySpec> (Required: false)
- KeyUsage <KeyUsage[]> (Required: false)
- KeyUsageProperty <KeyUsageProperty[]> (Required: false)
- NotAfter <datetime> (Required: false)
- NotBefore <datetime> (Required: false)
- Pin <securestring> (Required: false)
- Provider <string> (Required: false)
- Reader <string> (Required: false)
- SecurityDescriptor <FileSecurity> (Required: false)
- SerialNumber <string> (Required: false)
- Signer <Certificate> (Required: false)
- SignerPin <securestring> (Required: false)
- SignerReader <string> (Required: false)
- SmimeCapabilities <switch> (Required: false)
- Subject <string> (Required: false)
- SuppressOid <string[]> (Required: false)
- TestRoot <switch> (Required: false)
- TextExtension <string[]> (Required: false)
- Type <CertificateType> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-Service

```powershell
New-Service [-Name] <string> [-BinaryPathName] <string> [-DisplayName <string>] [-Description <string>] [-StartupType <ServiceStartMode>] [-Credential <pscredential>] [-DependsOn <string[]>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- BinaryPathName <string> (Required: true)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- DependsOn <string[]> (Required: false)
- Description <string> (Required: false)
- DisplayName <string> (Required: false)
- Name <string> (Required: true)
- StartupType <ServiceStartMode> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-SmbClientCertificateMapping

```powershell
New-SmbClientCertificateMapping [-Namespace] <string> [-Thumbprint <string>] [-StoreName <string>] [-IssuerName <string>] [-Subject <string>] [-DisplayName <string>] [-Type <Type>] [-Flags <Flags>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DisplayName <string> (Required: false)
- Flags <Flags> (Required: false)
- Force <switch> (Required: false)
- IssuerName <string> (Required: false)
- Namespace <string> (Required: true)
- StoreName <string> (Required: false)
- Subject <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- Thumbprint <string> (Required: false)
- Type <Type> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-SmbGlobalMapping

```powershell
New-SmbGlobalMapping [[-LocalPath] <string>] [-RemotePath] <string> -Credential <pscredential> [-Persistent <bool>] [-RequireIntegrity <bool>] [-RequirePrivacy <bool>] [-UseWriteThrough <bool>] [-FullAccess <string[]>] [-DenyAccess <string[]>] [-TransportType <TransportType>] [-SkipCertificateCheck] [-CompressNetworkTraffic <bool>] [-BlockNTLM <bool>] [-TcpPort <uint16>] [-QuicPort <uint16>] [-RdmaPort <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BlockNTLM <bool> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CompressNetworkTraffic <bool> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: true)
- DenyAccess <string[]> (Required: false)
- FullAccess <string[]> (Required: false)
- LocalPath <string> (Required: false)
- Persistent <bool> (Required: false)
- QuicPort <uint16> (Required: false)
- RdmaPort <uint16> (Required: false)
- RemotePath <string> (Required: true)
- RequireIntegrity <bool> (Required: false)
- RequirePrivacy <bool> (Required: false)
- SkipCertificateCheck <switch> (Required: false)
- TcpPort <uint16> (Required: false)
- ThrottleLimit <int> (Required: false)
- TransportType <TransportType> (Required: false)
- UseWriteThrough <bool> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-SmbMapping

```powershell
New-SmbMapping [[-LocalPath] <string>] [[-RemotePath] <string>] [-UserName <string>] [-Password <string>] [-Persistent <bool>] [-SaveCredentials] [-HomeFolder] [-RequireIntegrity <bool>] [-RequirePrivacy <bool>] [-UseWriteThrough <bool>] [-TransportType <TransportType>] [-SkipCertificateCheck] [-CompressNetworkTraffic <bool>] [-GlobalMapping] [-BlockNTLM <bool>] [-TcpPort <uint16>] [-QuicPort <uint16>] [-RdmaPort <uint16>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-SmbMapping [[-LocalPath] <string>] [[-RemotePath] <string>] [-Persistent <bool>] [-SaveCredentials] [-HomeFolder] [-RequireIntegrity <bool>] [-RequirePrivacy <bool>] [-UseWriteThrough <bool>] [-TransportType <TransportType>] [-SkipCertificateCheck] [-CompressNetworkTraffic <bool>] [-GlobalMapping] [-TcpPort <uint16>] [-QuicPort <uint16>] [-RdmaPort <uint16>] [-Credential <pscredential>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- BlockNTLM <bool> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CompressNetworkTraffic <bool> (Required: false)
- Confirm <switch> (Required: false)
- Credential <pscredential> (Required: false)
- GlobalMapping <switch> (Required: false)
- HomeFolder <switch> (Required: false)
- LocalPath <string> (Required: false)
- Password <string> (Required: false)
- Persistent <bool> (Required: false)
- QuicPort <uint16> (Required: false)
- RdmaPort <uint16> (Required: false)
- RemotePath <string> (Required: false)
- RequireIntegrity <bool> (Required: false)
- RequirePrivacy <bool> (Required: false)
- SaveCredentials <switch> (Required: false)
- SkipCertificateCheck <switch> (Required: false)
- TcpPort <uint16> (Required: false)
- ThrottleLimit <int> (Required: false)
- TransportType <TransportType> (Required: false)
- UseWriteThrough <bool> (Required: false)
- UserName <string> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-SmbMultichannelConstraint

```powershell
New-SmbMultichannelConstraint [-ServerName] <string> [-InterfaceIndex] <uint32[]> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

New-SmbMultichannelConstraint [-ServerName] <string> [-InterfaceAlias] <string[]> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- Force <switch> (Required: false)
- InterfaceAlias <string[]> (Required: true)
- InterfaceIndex <uint32[]> (Required: true)
- ServerName <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-SmbServerAlternativePort

```powershell
New-SmbServerAlternativePort [-TransportType] <TransportType> [-Port] <uint16> [-EnableInstances] <Instance> [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- EnableInstances <Instance> (Required: true)
- Force <switch> (Required: false)
- Port <uint16> (Required: true)
- ThrottleLimit <int> (Required: false)
- TransportType <TransportType> (Required: true)
- WhatIf <switch> (Required: false)
```

### New-SmbServerCertificateMapping

```powershell
New-SmbServerCertificateMapping [-Name] <string> [-Thumbprint] <string> [-StoreName] <string> [-Subject <string>] [-DisplayName <string>] [-Type <Type>] [-Flags <Flags>] [-RequireClientAuthentication <bool>] [-SkipClientCertificateAccessCheck <bool>] [-Force] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- DisplayName <string> (Required: false)
- Flags <Flags> (Required: false)
- Force <switch> (Required: false)
- Name <string> (Required: true)
- RequireClientAuthentication <bool> (Required: false)
- SkipClientCertificateAccessCheck <bool> (Required: false)
- StoreName <string> (Required: true)
- Subject <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- Thumbprint <string> (Required: true)
- Type <Type> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-SmbShare

```powershell
New-SmbShare [-Name] <string> [-Path] <string> [[-ScopeName] <string>] [[-QoSFlowScope] <QoSFlowScope>] [[-QoSPolicyId] <string>] [-Temporary] [-ContinuouslyAvailable <bool>] [-Description <string>] [-ConcurrentUserLimit <uint32>] [-CATimeout <uint32>] [-FolderEnumerationMode <FolderEnumerationMode>] [-CachingMode <CachingMode>] [-FullAccess <string[]>] [-ChangeAccess <string[]>] [-ReadAccess <string[]>] [-NoAccess <string[]>] [-SecurityDescriptor <string>] [-EncryptData <bool>] [-CompressData <bool>] [-IsolatedTransport <bool>] [-LeasingMode <LeasingMode>] [-DirectoryHandleLeasing <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CATimeout <uint32> (Required: false)
- CachingMode <CachingMode> (Required: false)
- ChangeAccess <string[]> (Required: false)
- CimSession <CimSession[]> (Required: false)
- CompressData <bool> (Required: false)
- ConcurrentUserLimit <uint32> (Required: false)
- Confirm <switch> (Required: false)
- ContinuouslyAvailable <bool> (Required: false)
- Description <string> (Required: false)
- DirectoryHandleLeasing <bool> (Required: false)
- EncryptData <bool> (Required: false)
- FolderEnumerationMode <FolderEnumerationMode> (Required: false)
- FullAccess <string[]> (Required: false)
- IsolatedTransport <bool> (Required: false)
- LeasingMode <LeasingMode> (Required: false)
- Name <string> (Required: true)
- NoAccess <string[]> (Required: false)
- Path <string> (Required: true)
- QoSFlowScope <QoSFlowScope> (Required: false)
- QoSPolicyId <string> (Required: false)
- ReadAccess <string[]> (Required: false)
- ScopeName <string> (Required: false)
- SecurityDescriptor <string> (Required: false)
- Temporary <switch> (Required: false)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-StorageBusBinding

```powershell
New-StorageBusBinding -CacheGuid <string> -CapacityGuid <string> [<CommonParameters>]

New-StorageBusBinding -CacheNumber <string> -CapacityNumber <string> [<CommonParameters>]

PARAMETERS:
- CacheGuid <string> (Required: true)
- CacheNumber <string> (Required: true)
- CapacityGuid <string> (Required: true)
- CapacityNumber <string> (Required: true)
```

### New-StorageBusCacheStore

```powershell
New-StorageBusCacheStore -Guid <string> [-CachePageSizeKBytes <uint32>] [-CacheMetadataReserveBytes <uint64>] [-SharedCachePercent <uint32>] [<CommonParameters>]

New-StorageBusCacheStore -Number <uint32> [-CachePageSizeKBytes <uint32>] [-CacheMetadataReserveBytes <uint64>] [-SharedCachePercent <uint32>] [<CommonParameters>]

PARAMETERS:
- CacheMetadataReserveBytes <uint64> (Required: false)
- CachePageSizeKBytes <uint32> (Required: false)
- Guid <string> (Required: true)
- Number <uint32> (Required: true)
- SharedCachePercent <uint32> (Required: false)
```

### New-StorageFileServer

```powershell
New-StorageFileServer [-StorageSubSystemFriendlyName] <string[]> -HostNames <string[]> -Protocols <FileSharingProtocol[]> [-FriendlyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-StorageFileServer -StorageSubSystemUniqueId <string[]> -HostNames <string[]> -Protocols <FileSharingProtocol[]> [-FriendlyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-StorageFileServer -StorageSubSystemName <string[]> -HostNames <string[]> -Protocols <FileSharingProtocol[]> [-FriendlyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-StorageFileServer -InputObject <CimInstance#MSFT_StorageSubSystem[]> -HostNames <string[]> -Protocols <FileSharingProtocol[]> [-FriendlyName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string> (Required: false)
- HostNames <string[]> (Required: true)
- InputObject <CimInstance#MSFT_StorageSubSystem[]> (Required: true)
- Protocols <FileSharingProtocol[]> (Required: true)
- StorageSubSystemFriendlyName <string[]> (Required: true)
- StorageSubSystemName <string[]> (Required: true)
- StorageSubSystemUniqueId <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
```

### New-StoragePool

```powershell
New-StoragePool [-StorageSubSystemFriendlyName] <string[]> -FriendlyName <string> -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> [-Usage <Usage>] [-OtherUsageDescription <string>] [-ProvisioningTypeDefault <ProvisioningType>] [-MediaTypeDefault <MediaType>] [-EnclosureAwareDefault <bool>] [-FaultDomainAwarenessDefault <FaultDomainType>] [-ResiliencySettingNameDefault <string>] [-LogicalSectorSizeDefault <uint64>] [-MetadataLength <uint64>] [-MinimumAllocationSize <uint64>] [-WriteCacheSizeDefault <uint64>] [-AutoWriteCacheSize <bool>] [-Version <Version>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-StoragePool -StorageSubSystemUniqueId <string[]> -FriendlyName <string> -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> [-Usage <Usage>] [-OtherUsageDescription <string>] [-ProvisioningTypeDefault <ProvisioningType>] [-MediaTypeDefault <MediaType>] [-EnclosureAwareDefault <bool>] [-FaultDomainAwarenessDefault <FaultDomainType>] [-ResiliencySettingNameDefault <string>] [-LogicalSectorSizeDefault <uint64>] [-MetadataLength <uint64>] [-MinimumAllocationSize <uint64>] [-WriteCacheSizeDefault <uint64>] [-AutoWriteCacheSize <bool>] [-Version <Version>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-StoragePool -StorageSubSystemName <string[]> -FriendlyName <string> -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> [-Usage <Usage>] [-OtherUsageDescription <string>] [-ProvisioningTypeDefault <ProvisioningType>] [-MediaTypeDefault <MediaType>] [-EnclosureAwareDefault <bool>] [-FaultDomainAwarenessDefault <FaultDomainType>] [-ResiliencySettingNameDefault <string>] [-LogicalSectorSizeDefault <uint64>] [-MetadataLength <uint64>] [-MinimumAllocationSize <uint64>] [-WriteCacheSizeDefault <uint64>] [-AutoWriteCacheSize <bool>] [-Version <Version>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-StoragePool -InputObject <CimInstance#MSFT_StorageSubSystem[]> -FriendlyName <string> -PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> [-Usage <Usage>] [-OtherUsageDescription <string>] [-ProvisioningTypeDefault <ProvisioningType>] [-MediaTypeDefault <MediaType>] [-EnclosureAwareDefault <bool>] [-FaultDomainAwarenessDefault <FaultDomainType>] [-ResiliencySettingNameDefault <string>] [-LogicalSectorSizeDefault <uint64>] [-MetadataLength <uint64>] [-MinimumAllocationSize <uint64>] [-WriteCacheSizeDefault <uint64>] [-AutoWriteCacheSize <bool>] [-Version <Version>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- AutoWriteCacheSize <bool> (Required: false)
- CimSession <CimSession[]> (Required: false)
- EnclosureAwareDefault <bool> (Required: false)
- FaultDomainAwarenessDefault <FaultDomainType> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <CimInstance#MSFT_StorageSubSystem[]> (Required: true)
- LogicalSectorSizeDefault <uint64> (Required: false)
- MediaTypeDefault <MediaType> (Required: false)
- MetadataLength <uint64> (Required: false)
- MinimumAllocationSize <uint64> (Required: false)
- OtherUsageDescription <string> (Required: false)
- PhysicalDisks <CimInstance#MSFT_PhysicalDisk[]> (Required: true)
- ProvisioningTypeDefault <ProvisioningType> (Required: false)
- ResiliencySettingNameDefault <string> (Required: false)
- StorageSubSystemFriendlyName <string[]> (Required: true)
- StorageSubSystemName <string[]> (Required: true)
- StorageSubSystemUniqueId <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- Usage <Usage> (Required: false)
- Version <Version> (Required: false)
- WriteCacheSizeDefault <uint64> (Required: false)
```

### New-StorageSubsystemVirtualDisk

```powershell
New-StorageSubsystemVirtualDisk [-StorageSubSystemFriendlyName] <string[]> [-FriendlyName <string>] [-Usage <Usage>] [-OtherUsageDescription <string>] [-Size <uint64>] [-UseMaximumSize] [-Interleave <uint64>] [-NumberOfColumns <uint16>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-ParityLayout <ParityLayout>] [-RequestNoSinglePointOfFailure <bool>] [-ProvisioningType <ProvisioningType>] [-IsEnclosureAware] [-FaultDomainAwareness <FaultDomainType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-StorageSubsystemVirtualDisk -StorageSubSystemUniqueId <string[]> [-FriendlyName <string>] [-Usage <Usage>] [-OtherUsageDescription <string>] [-Size <uint64>] [-UseMaximumSize] [-Interleave <uint64>] [-NumberOfColumns <uint16>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-ParityLayout <ParityLayout>] [-RequestNoSinglePointOfFailure <bool>] [-ProvisioningType <ProvisioningType>] [-IsEnclosureAware] [-FaultDomainAwareness <FaultDomainType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-StorageSubsystemVirtualDisk -StorageSubSystemName <string[]> [-FriendlyName <string>] [-Usage <Usage>] [-OtherUsageDescription <string>] [-Size <uint64>] [-UseMaximumSize] [-Interleave <uint64>] [-NumberOfColumns <uint16>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-ParityLayout <ParityLayout>] [-RequestNoSinglePointOfFailure <bool>] [-ProvisioningType <ProvisioningType>] [-IsEnclosureAware] [-FaultDomainAwareness <FaultDomainType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-StorageSubsystemVirtualDisk -InputObject <CimInstance#MSFT_StorageSubSystem[]> [-FriendlyName <string>] [-Usage <Usage>] [-OtherUsageDescription <string>] [-Size <uint64>] [-UseMaximumSize] [-Interleave <uint64>] [-NumberOfColumns <uint16>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-ParityLayout <ParityLayout>] [-RequestNoSinglePointOfFailure <bool>] [-ProvisioningType <ProvisioningType>] [-IsEnclosureAware] [-FaultDomainAwareness <FaultDomainType>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FaultDomainAwareness <FaultDomainType> (Required: false)
- FriendlyName <string> (Required: false)
- InputObject <CimInstance#MSFT_StorageSubSystem[]> (Required: true)
- Interleave <uint64> (Required: false)
- IsEnclosureAware <switch> (Required: false)
- NumberOfColumns <uint16> (Required: false)
- NumberOfDataCopies <uint16> (Required: false)
- OtherUsageDescription <string> (Required: false)
- ParityLayout <ParityLayout> (Required: false)
- PhysicalDiskRedundancy <uint16> (Required: false)
- ProvisioningType <ProvisioningType> (Required: false)
- RequestNoSinglePointOfFailure <bool> (Required: false)
- Size <uint64> (Required: false)
- StorageSubSystemFriendlyName <string[]> (Required: true)
- StorageSubSystemName <string[]> (Required: true)
- StorageSubSystemUniqueId <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- Usage <Usage> (Required: false)
- UseMaximumSize <switch> (Required: false)
```

### New-StorageTier

```powershell
New-StorageTier [-StoragePoolFriendlyName] <string[]> -FriendlyName <string> [-ProvisioningType <ProvisioningType>] [-AllocationUnitSize <uint64>] [-MediaType <MediaType>] [-FaultDomainAwareness <FaultDomainType>] [-ColumnIsolation <FaultDomainType>] [-StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]>] [-ResiliencySettingName <string>] [-Usage <Usage>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfGroups <uint16>] [-NumberOfColumns <uint16>] [-Interleave <uint64>] [-Description <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-StorageTier -StoragePoolUniqueId <string[]> -FriendlyName <string> [-ProvisioningType <ProvisioningType>] [-AllocationUnitSize <uint64>] [-MediaType <MediaType>] [-FaultDomainAwareness <FaultDomainType>] [-ColumnIsolation <FaultDomainType>] [-StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]>] [-ResiliencySettingName <string>] [-Usage <Usage>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfGroups <uint16>] [-NumberOfColumns <uint16>] [-Interleave <uint64>] [-Description <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-StorageTier -StoragePoolName <string[]> -FriendlyName <string> [-ProvisioningType <ProvisioningType>] [-AllocationUnitSize <uint64>] [-MediaType <MediaType>] [-FaultDomainAwareness <FaultDomainType>] [-ColumnIsolation <FaultDomainType>] [-StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]>] [-ResiliencySettingName <string>] [-Usage <Usage>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfGroups <uint16>] [-NumberOfColumns <uint16>] [-Interleave <uint64>] [-Description <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-StorageTier -InputObject <CimInstance#MSFT_StoragePool[]> -FriendlyName <string> [-ProvisioningType <ProvisioningType>] [-AllocationUnitSize <uint64>] [-MediaType <MediaType>] [-FaultDomainAwareness <FaultDomainType>] [-ColumnIsolation <FaultDomainType>] [-StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]>] [-ResiliencySettingName <string>] [-Usage <Usage>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfGroups <uint16>] [-NumberOfColumns <uint16>] [-Interleave <uint64>] [-Description <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AllocationUnitSize <uint64> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ColumnIsolation <FaultDomainType> (Required: false)
- Description <string> (Required: false)
- FaultDomainAwareness <FaultDomainType> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <CimInstance#MSFT_StoragePool[]> (Required: true)
- Interleave <uint64> (Required: false)
- MediaType <MediaType> (Required: false)
- NumberOfColumns <uint16> (Required: false)
- NumberOfDataCopies <uint16> (Required: false)
- NumberOfGroups <uint16> (Required: false)
- PhysicalDiskRedundancy <uint16> (Required: false)
- ProvisioningType <ProvisioningType> (Required: false)
- ResiliencySettingName <string> (Required: false)
- StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]> (Required: false)
- StoragePoolFriendlyName <string[]> (Required: true)
- StoragePoolName <string[]> (Required: true)
- StoragePoolUniqueId <string[]> (Required: true)
- ThrottleLimit <int> (Required: false)
- Usage <Usage> (Required: false)
```

### New-TemporaryFile

```powershell
New-TemporaryFile [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-TimeSpan

```powershell
New-TimeSpan [[-Start] <datetime>] [[-End] <datetime>] [<CommonParameters>]

New-TimeSpan [-Days <int>] [-Hours <int>] [-Minutes <int>] [-Seconds <int>] [<CommonParameters>]

PARAMETERS:
- Days <int> (Required: false)
- End <datetime> (Required: false)
- Hours <int> (Required: false)
- Minutes <int> (Required: false)
- Seconds <int> (Required: false)
- Start <datetime> (Required: false)
```

### New-TlsSessionTicketKey

```powershell
New-TlsSessionTicketKey [-Password] <securestring> [[-Path] <string>] [<CommonParameters>]

PARAMETERS:
- Password <securestring> (Required: true)
- Path <string> (Required: false)
```

### New-Variable

```powershell
New-Variable [-Name] <string> [[-Value] <Object>] [-Description <string>] [-Option <ScopedItemOptions>] [-Visibility <SessionStateEntryVisibility>] [-Force] [-PassThru] [-Scope <string>] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- Confirm <switch> (Required: false)
- Description <string> (Required: false)
- Force <switch> (Required: false)
- Name <string> (Required: true)
- Option <ScopedItemOptions> (Required: false)
- PassThru <switch> (Required: false)
- Scope <string> (Required: false)
- Value <Object> (Required: false)
- Visibility <SessionStateEntryVisibility> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-VirtualDisk

```powershell
New-VirtualDisk [-StoragePoolFriendlyName] <string[]> -FriendlyName <string> [-Usage <Usage>] [-OtherUsageDescription <string>] [-ResiliencySettingName <string>] [-Size <uint64>] [-UseMaximumSize] [-ProvisioningType <ProvisioningType>] [-AllocationUnitSize <uint64>] [-MediaType <MediaType>] [-IsEnclosureAware <bool>] [-FaultDomainAwareness <FaultDomainType>] [-ColumnIsolation <FaultDomainType>] [-PhysicalDisksToUse <CimInstance#MSFT_PhysicalDisk[]>] [-StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfColumns <uint16>] [-AutoNumberOfColumns] [-NumberOfGroups <uint16>] [-Interleave <uint64>] [-MinimumLogicalDataCopies <uint16>] [-StorageTiers <CimInstance#MSFT_StorageTier[]>] [-StorageTierSizes <uint64[]>] [-WriteCacheSize <uint64>] [-AutoWriteCacheSize] [-WriteCacheReserveSize <uint64>] [-ReadCacheSize <uint64>] [-TrackValidData <bool>] [-IsManualAttach <bool>] [-AddToCluster <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-VirtualDisk -StoragePoolUniqueId <string[]> -FriendlyName <string> [-Usage <Usage>] [-OtherUsageDescription <string>] [-ResiliencySettingName <string>] [-Size <uint64>] [-UseMaximumSize] [-ProvisioningType <ProvisioningType>] [-AllocationUnitSize <uint64>] [-MediaType <MediaType>] [-IsEnclosureAware <bool>] [-FaultDomainAwareness <FaultDomainType>] [-ColumnIsolation <FaultDomainType>] [-PhysicalDisksToUse <CimInstance#MSFT_PhysicalDisk[]>] [-StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfColumns <uint16>] [-AutoNumberOfColumns] [-NumberOfGroups <uint16>] [-Interleave <uint64>] [-MinimumLogicalDataCopies <uint16>] [-StorageTiers <CimInstance#MSFT_StorageTier[]>] [-StorageTierSizes <uint64[]>] [-WriteCacheSize <uint64>] [-AutoWriteCacheSize] [-WriteCacheReserveSize <uint64>] [-ReadCacheSize <uint64>] [-TrackValidData <bool>] [-IsManualAttach <bool>] [-AddToCluster <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-VirtualDisk -StoragePoolName <string[]> -FriendlyName <string> [-Usage <Usage>] [-OtherUsageDescription <string>] [-ResiliencySettingName <string>] [-Size <uint64>] [-UseMaximumSize] [-ProvisioningType <ProvisioningType>] [-AllocationUnitSize <uint64>] [-MediaType <MediaType>] [-IsEnclosureAware <bool>] [-FaultDomainAwareness <FaultDomainType>] [-ColumnIsolation <FaultDomainType>] [-PhysicalDisksToUse <CimInstance#MSFT_PhysicalDisk[]>] [-StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfColumns <uint16>] [-AutoNumberOfColumns] [-NumberOfGroups <uint16>] [-Interleave <uint64>] [-MinimumLogicalDataCopies <uint16>] [-StorageTiers <CimInstance#MSFT_StorageTier[]>] [-StorageTierSizes <uint64[]>] [-WriteCacheSize <uint64>] [-AutoWriteCacheSize] [-WriteCacheReserveSize <uint64>] [-ReadCacheSize <uint64>] [-TrackValidData <bool>] [-IsManualAttach <bool>] [-AddToCluster <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-VirtualDisk -InputObject <CimInstance#MSFT_StoragePool[]> -FriendlyName <string> [-Usage <Usage>] [-OtherUsageDescription <string>] [-ResiliencySettingName <string>] [-Size <uint64>] [-UseMaximumSize] [-ProvisioningType <ProvisioningType>] [-AllocationUnitSize <uint64>] [-MediaType <MediaType>] [-IsEnclosureAware <bool>] [-FaultDomainAwareness <FaultDomainType>] [-ColumnIsolation <FaultDomainType>] [-PhysicalDisksToUse <CimInstance#MSFT_PhysicalDisk[]>] [-StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfColumns <uint16>] [-AutoNumberOfColumns] [-NumberOfGroups <uint16>] [-Interleave <uint64>] [-MinimumLogicalDataCopies <uint16>] [-StorageTiers <CimInstance#MSFT_StorageTier[]>] [-StorageTierSizes <uint64[]>] [-WriteCacheSize <uint64>] [-AutoWriteCacheSize] [-WriteCacheReserveSize <uint64>] [-ReadCacheSize <uint64>] [-TrackValidData <bool>] [-IsManualAttach <bool>] [-AddToCluster <bool>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AddToCluster <bool> (Required: false)
- AllocationUnitSize <uint64> (Required: false)
- AsJob <switch> (Required: false)
- AutoNumberOfColumns <switch> (Required: false)
- AutoWriteCacheSize <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- ColumnIsolation <FaultDomainType> (Required: false)
- FaultDomainAwareness <FaultDomainType> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <CimInstance#MSFT_StoragePool[]> (Required: true)
- Interleave <uint64> (Required: false)
- IsEnclosureAware <bool> (Required: false)
- IsManualAttach <bool> (Required: false)
- MediaType <MediaType> (Required: false)
- MinimumLogicalDataCopies <uint16> (Required: false)
- NumberOfColumns <uint16> (Required: false)
- NumberOfDataCopies <uint16> (Required: false)
- NumberOfGroups <uint16> (Required: false)
- OtherUsageDescription <string> (Required: false)
- PhysicalDiskRedundancy <uint16> (Required: false)
- PhysicalDisksToUse <CimInstance#MSFT_PhysicalDisk[]> (Required: false)
- ProvisioningType <ProvisioningType> (Required: false)
- ReadCacheSize <uint64> (Required: false)
- ResiliencySettingName <string> (Required: false)
- Size <uint64> (Required: false)
- StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]> (Required: false)
- StoragePoolFriendlyName <string[]> (Required: true)
- StoragePoolName <string[]> (Required: true)
- StoragePoolUniqueId <string[]> (Required: true)
- StorageTierSizes <uint64[]> (Required: false)
- StorageTiers <CimInstance#MSFT_StorageTier[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TrackValidData <bool> (Required: false)
- Usage <Usage> (Required: false)
- UseMaximumSize <switch> (Required: false)
- WriteCacheReserveSize <uint64> (Required: false)
- WriteCacheSize <uint64> (Required: false)
```

### New-VirtualDiskClone

```powershell
New-VirtualDiskClone -VirtualDiskUniqueId <string[]> -FriendlyName <string> [-TargetStoragePoolName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-VirtualDiskClone [-VirtualDiskFriendlyName] <string[]> -FriendlyName <string> [-TargetStoragePoolName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-VirtualDiskClone -VirtualDiskName <string[]> -FriendlyName <string> [-TargetStoragePoolName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-VirtualDiskClone -InputObject <CimInstance#MSFT_VirtualDisk[]> -FriendlyName <string> [-TargetStoragePoolName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <CimInstance#MSFT_VirtualDisk[]> (Required: true)
- TargetStoragePoolName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- VirtualDiskFriendlyName <string[]> (Required: true)
- VirtualDiskName <string[]> (Required: true)
- VirtualDiskUniqueId <string[]> (Required: true)
```

### New-VirtualDiskSnapshot

```powershell
New-VirtualDiskSnapshot -VirtualDiskUniqueId <string[]> -FriendlyName <string> [-TargetStoragePoolName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-VirtualDiskSnapshot [-VirtualDiskFriendlyName] <string[]> -FriendlyName <string> [-TargetStoragePoolName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-VirtualDiskSnapshot -VirtualDiskName <string[]> -FriendlyName <string> [-TargetStoragePoolName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-VirtualDiskSnapshot -InputObject <CimInstance#MSFT_VirtualDisk[]> -FriendlyName <string> [-TargetStoragePoolName <string>] [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- FriendlyName <string> (Required: true)
- InputObject <CimInstance#MSFT_VirtualDisk[]> (Required: true)
- TargetStoragePoolName <string> (Required: false)
- ThrottleLimit <int> (Required: false)
- VirtualDiskFriendlyName <string[]> (Required: true)
- VirtualDiskName <string[]> (Required: true)
- VirtualDiskUniqueId <string[]> (Required: true)
```

### New-Volume

```powershell
New-Volume [[-StoragePool] <CimInstance#MSFT_StoragePool>] -FriendlyName <string> [-FileSystem <FileSystemType>] [-AccessPath <string>] [-DriveLetter <char>] [-AllocationUnitSize <uint32>] [-Size <uint64>] [-ResiliencySettingName <string>] [-ProvisioningType <ProvisioningType>] [-MediaType <MediaType>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfColumns <uint16>] [-NumberOfGroups <uint16>] [-MinimumLogicalDataCopies <uint16>] [-StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainsToUseFriendlyNames <string[]>] [-StorageTiers <CimInstance#MSFT_StorageTier[]>] [-StorageTierFriendlyNames <string[]>] [-StorageTierSizes <uint64[]>] [-WriteCacheSize <uint64>] [-WriteCacheReserveSize <uint64>] [-ReadCacheSize <uint64>] [-TrackValidData <bool>] [-UseMaximumSize] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-Volume -StoragePoolFriendlyName <string> -FriendlyName <string> [-FileSystem <FileSystemType>] [-AccessPath <string>] [-DriveLetter <char>] [-AllocationUnitSize <uint32>] [-Size <uint64>] [-ResiliencySettingName <string>] [-ProvisioningType <ProvisioningType>] [-MediaType <MediaType>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfColumns <uint16>] [-NumberOfGroups <uint16>] [-MinimumLogicalDataCopies <uint16>] [-StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainsToUseFriendlyNames <string[]>] [-StorageTiers <CimInstance#MSFT_StorageTier[]>] [-StorageTierFriendlyNames <string[]>] [-StorageTierSizes <uint64[]>] [-WriteCacheSize <uint64>] [-WriteCacheReserveSize <uint64>] [-ReadCacheSize <uint64>] [-TrackValidData <bool>] [-UseMaximumSize] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-Volume -StoragePoolName <string> -FriendlyName <string> [-FileSystem <FileSystemType>] [-AccessPath <string>] [-DriveLetter <char>] [-AllocationUnitSize <uint32>] [-Size <uint64>] [-ResiliencySettingName <string>] [-ProvisioningType <ProvisioningType>] [-MediaType <MediaType>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfColumns <uint16>] [-NumberOfGroups <uint16>] [-MinimumLogicalDataCopies <uint16>] [-StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainsToUseFriendlyNames <string[]>] [-StorageTiers <CimInstance#MSFT_StorageTier[]>] [-StorageTierFriendlyNames <string[]>] [-StorageTierSizes <uint64[]>] [-WriteCacheSize <uint64>] [-WriteCacheReserveSize <uint64>] [-ReadCacheSize <uint64>] [-TrackValidData <bool>] [-UseMaximumSize] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-Volume -StoragePoolUniqueId <string> -FriendlyName <string> [-FileSystem <FileSystemType>] [-AccessPath <string>] [-DriveLetter <char>] [-AllocationUnitSize <uint32>] [-Size <uint64>] [-ResiliencySettingName <string>] [-ProvisioningType <ProvisioningType>] [-MediaType <MediaType>] [-PhysicalDiskRedundancy <uint16>] [-NumberOfDataCopies <uint16>] [-NumberOfColumns <uint16>] [-NumberOfGroups <uint16>] [-MinimumLogicalDataCopies <uint16>] [-StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]>] [-StorageFaultDomainsToUseFriendlyNames <string[]>] [-StorageTiers <CimInstance#MSFT_StorageTier[]>] [-StorageTierFriendlyNames <string[]>] [-StorageTierSizes <uint64[]>] [-WriteCacheSize <uint64>] [-WriteCacheReserveSize <uint64>] [-ReadCacheSize <uint64>] [-TrackValidData <bool>] [-UseMaximumSize] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-Volume [-Disk] <CimInstance#MSFT_Disk> -FriendlyName <string> [-FileSystem <FileSystemType>] [-AccessPath <string>] [-DriveLetter <char>] [-AllocationUnitSize <uint32>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-Volume [-DiskNumber] <uint32> -FriendlyName <string> [-FileSystem <FileSystemType>] [-AccessPath <string>] [-DriveLetter <char>] [-AllocationUnitSize <uint32>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-Volume -DiskPath <string> -FriendlyName <string> [-FileSystem <FileSystemType>] [-AccessPath <string>] [-DriveLetter <char>] [-AllocationUnitSize <uint32>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

New-Volume -DiskUniqueId <string> -FriendlyName <string> [-FileSystem <FileSystemType>] [-AccessPath <string>] [-DriveLetter <char>] [-AllocationUnitSize <uint32>] [-CimSession <CimSession>] [-ThrottleLimit <int>] [-AsJob] [<CommonParameters>]

PARAMETERS:
- AccessPath <string> (Required: false)
- AllocationUnitSize <uint32> (Required: false)
- AsJob <switch> (Required: false)
- CimSession <CimSession> (Required: false)
- Disk <CimInstance#MSFT_Disk> (Required: true)
- DiskNumber <uint32> (Required: true)
- DiskPath <string> (Required: true)
- DiskUniqueId <string> (Required: true)
- DriveLetter <char> (Required: false)
- FileSystem <FileSystemType> (Required: false)
- FriendlyName <string> (Required: true)
- MediaType <MediaType> (Required: false)
- MinimumLogicalDataCopies <uint16> (Required: false)
- NumberOfColumns <uint16> (Required: false)
- NumberOfDataCopies <uint16> (Required: false)
- NumberOfGroups <uint16> (Required: false)
- PhysicalDiskRedundancy <uint16> (Required: false)
- ProvisioningType <ProvisioningType> (Required: false)
- ReadCacheSize <uint64> (Required: false)
- ResiliencySettingName <string> (Required: false)
- Size <uint64> (Required: false)
- StorageFaultDomainsToUse <CimInstance#MSFT_StorageFaultDomain[]> (Required: false)
- StorageFaultDomainsToUseFriendlyNames <string[]> (Required: false)
- StoragePool <CimInstance#MSFT_StoragePool> (Required: false)
- StoragePoolFriendlyName <string> (Required: true)
- StoragePoolName <string> (Required: true)
- StoragePoolUniqueId <string> (Required: true)
- StorageTierFriendlyNames <string[]> (Required: false)
- StorageTierSizes <uint64[]> (Required: false)
- StorageTiers <CimInstance#MSFT_StorageTier[]> (Required: false)
- ThrottleLimit <int> (Required: false)
- TrackValidData <bool> (Required: false)
- UseMaximumSize <switch> (Required: false)
- WriteCacheReserveSize <uint64> (Required: false)
- WriteCacheSize <uint64> (Required: false)
```

### New-VpnServerAddress

```powershell
New-VpnServerAddress [-ServerAddress] <string> [-FriendlyName] <string> [-CimSession <CimSession[]>] [-ThrottleLimit <int>] [-AsJob] [-WhatIf] [-Confirm] [<CommonParameters>]

PARAMETERS:
- AsJob <switch> (Required: false)
- CimSession <CimSession[]> (Required: false)
- Confirm <switch> (Required: false)
- FriendlyName <string> (Required: true)
- ServerAddress <string> (Required: true)
- ThrottleLimit <int> (Required: false)
- WhatIf <switch> (Required: false)
```

### New-WebServiceProxy

```powershell
New-WebServiceProxy [-Uri] <uri> [[-Class] <string>] [[-Namespace] <string>] [<CommonParameters>]

New-WebServiceProxy [-Uri] <uri> [[-Class] <string>] [[-Namespace] <string>] [-Credential <pscredential>] [<CommonParameters>]

New-WebServiceProxy [-Uri] <uri> [[-Class] <string>] [[-Namespace] <string>] [-UseDefaultCredential] [<CommonParameters>]

PARAMETERS:
- Class <string> (Required: false)
- Credential <pscredential> (Required: false)
- Namespace <string> (Required: false)
- Uri <uri> (Required: true)
- UseDefaultCredential <switch> (Required: false)
```

### New-WindowsCustomImage

```powershell
New-WindowsCustomImage -CapturePath <string> [-ConfigFilePath <string>] [-CheckIntegrity] [-Verify] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CapturePath <string> (Required: true)
- CheckIntegrity <switch> (Required: false)
- ConfigFilePath <string> (Required: false)
- LogLevel <LogLevel> (Required: false)
- LogPath <string> (Required: false)
- ScratchDirectory <string> (Required: false)
- Verify <switch> (Required: false)
```

### New-WindowsImage

```powershell
New-WindowsImage -ImagePath <string> -CapturePath <string> [-CompressionType <string>] [-ConfigFilePath <string>] [-Description <string>] [-Name <string>] [-CheckIntegrity] [-NoRpFix] [-Setbootable] [-Verify] [-WIMBoot] [-SupportEa] [-LogPath <string>] [-ScratchDirectory <string>] [-LogLevel <LogLevel>] [<CommonParameters>]

PARAMETERS:
- CapturePath <string> (Required: true)
- CheckIntegrity <switch> (Required: false)
- CompressionType <string> (Required: false)
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

### New-WinEvent

```powershell
New-WinEvent [-ProviderName] <string> [-Id] <int> [[-Payload] <Object[]>] [-Version <byte>] [<CommonParameters>]

PARAMETERS:
- Id <int> (Required: true)
- Payload <Object[]> (Required: false)
- ProviderName <string> (Required: true)
- Version <byte> (Required: false)
```

### New-WinUserLanguageList

```powershell
New-WinUserLanguageList [-Language] <string> [<CommonParameters>]

PARAMETERS:
- Language <string> (Required: true)
```

### New-WSManInstance

```powershell
New-WSManInstance [-ResourceURI] <uri> [-SelectorSet] <hashtable> [-ApplicationName <string>] [-ComputerName <string>] [-FilePath <string>] [-OptionSet <hashtable>] [-Port <int>] [-SessionOption <SessionOption>] [-UseSSL] [-ValueSet <hashtable>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

New-WSManInstance [-ResourceURI] <uri> [-SelectorSet] <hashtable> [-ConnectionURI <uri>] [-FilePath <string>] [-OptionSet <hashtable>] [-SessionOption <SessionOption>] [-ValueSet <hashtable>] [-Credential <pscredential>] [-Authentication <AuthenticationMechanism>] [-CertificateThumbprint <string>] [<CommonParameters>]

PARAMETERS:
- ApplicationName <string> (Required: false)
- Authentication <AuthenticationMechanism> (Required: false)
- CertificateThumbprint <string> (Required: false)
- ComputerName <string> (Required: false)
- ConnectionURI <uri> (Required: false)
- Credential <pscredential> (Required: false)
- FilePath <string> (Required: false)
- OptionSet <hashtable> (Required: false)
- Port <int> (Required: false)
- ResourceURI <uri> (Required: true)
- SelectorSet <hashtable> (Required: true)
- SessionOption <SessionOption> (Required: false)
- UseSSL <switch> (Required: false)
- ValueSet <hashtable> (Required: false)
```

### New-WSManSessionOption

```powershell
New-WSManSessionOption [-ProxyAccessType <ProxyAccessType>] [-ProxyAuthentication <ProxyAuthentication>] [-ProxyCredential <pscredential>] [-SkipCACheck] [-SkipCNCheck] [-SkipRevocationCheck] [-SPNPort <int>] [-OperationTimeout <int>] [-NoEncryption] [-UseUTF16] [<CommonParameters>]

PARAMETERS:
- NoEncryption <switch> (Required: false)
- OperationTimeout <int> (Required: false)
- ProxyAccessType <ProxyAccessType> (Required: false)
- ProxyAuthentication <ProxyAuthentication> (Required: false)
- ProxyCredential <pscredential> (Required: false)
- SPNPort <int> (Required: false)
- SkipCACheck <switch> (Required: false)
- SkipCNCheck <switch> (Required: false)
- SkipRevocationCheck <switch> (Required: false)
- UseUTF16 <switch> (Required: false)
```

### Ninja-Property-Clear

```powershell
Ninja-Property-Clear [[-Name] <Object>]

PARAMETERS:
- Name <Object> (Required: false)
```

### Ninja-Property-Docs-Clear

```powershell
Ninja-Property-Docs-Clear [[-TemplateId] <Object>] [[-DocumentName] <Object>] [[-AttributeName] <Object>]

PARAMETERS:
- AttributeName <Object> (Required: false)
- DocumentName <Object> (Required: false)
- TemplateId <Object> (Required: false)
```

### Ninja-Property-Docs-Clear-Single

```powershell
Ninja-Property-Docs-Clear-Single [[-TemplateName] <Object>] [[-AttributeName] <Object>]

PARAMETERS:
- AttributeName <Object> (Required: false)
- TemplateName <Object> (Required: false)
```

### Ninja-Property-Docs-Get

```powershell
Ninja-Property-Docs-Get [[-TemplateId] <Object>] [[-DocumentName] <Object>] [[-AttributeName] <Object>]

PARAMETERS:
- AttributeName <Object> (Required: false)
- DocumentName <Object> (Required: false)
- TemplateId <Object> (Required: false)
```

### Ninja-Property-Docs-Get-Single

```powershell
Ninja-Property-Docs-Get-Single [[-TemplateName] <Object>] [[-AttributeName] <Object>]

PARAMETERS:
- AttributeName <Object> (Required: false)
- TemplateName <Object> (Required: false)
```

### Ninja-Property-Docs-Names

```powershell
Ninja-Property-Docs-Names [[-TemplateId] <Object>]

PARAMETERS:
- TemplateId <Object> (Required: false)
```

### Ninja-Property-Docs-Options

```powershell
Ninja-Property-Docs-Options [[-TemplateId] <Object>] [[-DocumentName] <Object>] [[-AttributeName] <Object>]

PARAMETERS:
- AttributeName <Object> (Required: false)
- DocumentName <Object> (Required: false)
- TemplateId <Object> (Required: false)
```

### Ninja-Property-Docs-Options-Single

```powershell
Ninja-Property-Docs-Options-Single [[-TemplateName] <Object>] [[-AttributeName] <Object>]

PARAMETERS:
- AttributeName <Object> (Required: false)
- TemplateName <Object> (Required: false)
```

### Ninja-Property-Docs-Set

```powershell
Ninja-Property-Docs-Set [[-TemplateId] <Object>] [[-DocumentName] <Object>] [[-AttributeName] <Object>] [[-AttributeValue] <Object>]

PARAMETERS:
- AttributeName <Object> (Required: false)
- AttributeValue <Object> (Required: false)
- DocumentName <Object> (Required: false)
- TemplateId <Object> (Required: false)
```

### Ninja-Property-Docs-Set-Piped

```powershell
Ninja-Property-Docs-Set-Piped [[-TemplateId] <Object>] [[-DocumentName] <Object>] [[-AttributeName] <Object>] [[-Input] <Object>] [<CommonParameters>]

PARAMETERS:
- AttributeName <Object> (Required: false)
- DocumentName <Object> (Required: false)
- Input <Object> (Required: false)
- TemplateId <Object> (Required: false)
```

### Ninja-Property-Docs-Set-Single

```powershell
Ninja-Property-Docs-Set-Single [[-TemplateName] <Object>] [[-AttributeName] <Object>] [[-AttributeValue] <Object>]

PARAMETERS:
- AttributeName <Object> (Required: false)
- AttributeValue <Object> (Required: false)
- TemplateName <Object> (Required: false)
```

### Ninja-Property-Docs-Set-Single-Piped

```powershell
Ninja-Property-Docs-Set-Single-Piped [[-TemplateName] <Object>] [[-AttributeName] <Object>] [[-Input] <Object>] [<CommonParameters>]

PARAMETERS:
- AttributeName <Object> (Required: false)
- Input <Object> (Required: false)
- TemplateName <Object> (Required: false)
```

### Ninja-Property-Docs-Templates

```powershell
Ninja-Property-Docs-Templates

```

### Ninja-Property-Get

```powershell
Ninja-Property-Get [[-Name] <Object>]

PARAMETERS:
- Name <Object> (Required: false)
```

### Ninja-Property-Options

```powershell
Ninja-Property-Options [[-Name] <Object>]

PARAMETERS:
- Name <Object> (Required: false)
```

### Ninja-Property-Set

```powershell
Ninja-Property-Set [[-Name] <Object>] [[-Value] <Object>]

PARAMETERS:
- Name <Object> (Required: false)
- Value <Object> (Required: false)
```

### Ninja-Property-Set-Piped

```powershell
Ninja-Property-Set-Piped [[-Name] <Object>] [[-Input] <Object>] [<CommonParameters>]

PARAMETERS:
- Input <Object> (Required: false)
- Name <Object> (Required: false)
```
