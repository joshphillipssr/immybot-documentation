# Known Issues

## SentinelOne Version Detection

SentinelOne agent now locks down S1 related registry keys. Detection string methods no longer work.

Workaround is a custom detection script like the following:

```powershell
try {
    # Query for the service, but pipe to Out-Null to suppress the object output.
    $service = Get-CimInstance -ClassName Win32_Service -Filter "Name='SentinelAgent'" -ErrorAction SilentlyContinue

    if ($service -and $service.PathName) {
        $exePath = $service.PathName.Trim('"')

        # Use -LiteralPath for robustness against special characters in the path.
        if (Test-Path -LiteralPath $exePath) {

            # Get file properties, but pipe the command to Out-Null to suppress the FileInfo object.
            # Getting the version string directly from the property of the resulting variable.
            $version = (Get-Item -LiteralPath $exePath).VersionInfo.ProductVersion

            if ($version) {
                # This is the ONLY line that writes to the success stream.
                return $version
            }
        }
    }
```
