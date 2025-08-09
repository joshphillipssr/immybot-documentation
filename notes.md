# Uncategorized / Notes

## Windows Registry

It appears certain registry searches (particulary those related to detection) are searching
values stored in a database in immy instance. Need to verify. I believe this to be true because
if you select an endpointand the Registry tab, you can explore the endpoint registry straight from
immybot.

## Documentation Site Maintenance

Need to create a page outlining how to update this documentation site.

- Edit config.mts to make changes to the left side menu bar.

## Links

- [Immy Community](https://community.immy.bot)

## WIP

<https://community.immy.bot/t/sentinelone-uninstall/2247>

## Execution Contexts

Cloud Script Context (The "API World")

Environment: ConstrainedLanguage PowerShell Core, running in the ImmyBot cloud.
Purpose: To communicate with external APIs (e.g., SentinelOne, Microsoft Graph). This is where authentication and API-specific data manipulation happens.
Where it Lives: Primarily within Dynamic Integration scripts (e.g., C9DIS-SentinelOne.ps1) and their associated PowerShell modules (C9SentinelOne.psm1).
Key Capability: Exposes custom cmdlets to other contexts (e.g., Get-IntegrationAgentUninstallToken).
Metascript Context (The "Orchestrator World")

Environment: ConstrainedLanguage PowerShell Core, running in the ImmyBot cloud.
Purpose: To orchestrate tasks against computers. This context is the "brains" of a task, deciding what to do and in what order.
Where it Lives: In Task scripts (Get/Test/Set) and Software scripts (Version/Install/Uninstall).
Key Capability: It is the only context that can use Invoke-ImmyCommand to bridge to the endpoint.
System Context (The "Real World")

Environment: FullLanguage Windows PowerShell 5.1, running as NT AUTHORITY\SYSTEM on the target endpoint.
Purpose: To perform the actual work on the machine: running executables, manipulating files and the registry, etc.
How it's Reached: Exclusively via the Invoke-ImmyCommand bridge from a Metascript.
2. The Rules of Interaction: The Great Wall

The most critical finding is that these contexts are strictly isolated. They cannot directly share code or modules.

Rule 1: Isolation is Absolute. The Cloud Script and Metascript contexts are separate, secure environments. A Metascript cannot Import-Module the module from a Dynamic Integration. A Cloud Script cannot Invoke-ImmyCommand. They live in different buildings.

Rule 2: Communication is Formal and Channeled.

Metascript -> Cloud Script: A Metascript can "call" the Cloud Script world only through officially exposed integration cmdlets (e.g., Get-IntegrationAgentUninstallToken). This is a formal request for data, not a direct function call.
Metascript -> System Context: The only bridge is Invoke-ImmyCommand. Data must be passed into the script block using the $using: scope modifier on simple variables.
3. The "North Star" Pattern for Future Development

Our past failures were caused by attempting to violate these architectural rules (e.g., trying to place an endpoint-orchestrating function into the API-focused integration module). The proven, correct pattern is as follows:

API Logic Stays in the Integration: Functions that talk to the S1 API (like retrieving a passphrase) must live in the C9SentinelOne.psm1 module and be exposed via the C9DIS-SentinelOne integration.
Orchestration Logic Stays in the Task Script: Functions that need to run commands on endpoints (like our Set-C9SentinelOneUnprotect) must live inside the Metascript of the task itself (e.g., C9SP-SentinelOne-Uninstall.ps1).
The Workflow: The Metascript orchestrates the entire process:
a. It calls an integration cmdlet to get data from the Cloud Script (e.g., $token = Get-IntegrationAgentUninstallToken).
b. It then calls Invoke-ImmyCommand, passing the retrieved data (e.g., $using:token) to the System context to perform the work.
By adhering strictly to this model, we ensure that each piece of code lives in the correct context with the correct capabilities, preventing future "context collision" errors.

