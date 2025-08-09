# Computer Onboarding

This guide walks you through the process of setting up your first computer with ImmyBot, from initial connection to successful onboarding.

## Prerequisites

Before you begin, make sure you have:
- An active ImmyBot account [Click here if you don't have one](https://www.immy.bot/pricing/)
- Administrator access to the computer you want to set up
- A USB drive (for physical computers)
- An existing ImmyBot Tenant. It is recommended to create an Onboarding Tenant [Managing ImmyBot Tenants](/Documentation/Administration/tenant-management.md)

## Step 1: Create an ImmyBot USB Drive for Physical Machines or ISO for Virtual Machines

When you first log in to ImmyBot, the Getting Started Wizard will prompt you to create an ImmyBot flash drive.

> **Important:** You only need to create this USB drive ONCE. The same drive can be used for all clients and computers. You'll select the specific client after the computer connects to ImmyBot.
> When using the same deployment package be sure you set Automatic Onboarding to Disabled, or use an Onboarding Tenant that will only apply cross tenant deployments.

1. Insert a USB drive into your computer
2. From the ImmyBot dashboard, click on **ImmyBot Agent Download** in the left navigation
3. Select the **Onboarding** tenant
   > **Tip:** If this is your first time using ImmyBot, you'll only have your MSP as a customer and yourself as a user. That's fine for testing - just select these options. Customers can be imported from your RMM, PSA, or Azure integration later.

4. Choose **New Computer Flash Drive**
5. Check **Enable Automatic Onboarding**
6. Check and set **Set Primary User**
7. Click **Download PPKG to Flash Drive**
   1. Note: If you're testing with a virtual machine, please select **Downlaod ISO to Flash Drive** and proceed to Step 2.
8. Place file on the root of your flashdrive

![USB Drive Creation](FirstComputerSetup.png)

## Step 2: Connect the Computer

### For Physical Computers (Recommended)

We recommend using a physical computer (Dell, HP, or Lenovo) for your first setup to experience the full capabilities of ImmyBot, including BIOS and driver updates.

1. Unbox the new computer and power it on
2. When you reach the Windows setup screen (region selection), insert your ImmyBot USB drive
3. The computer will automatically detect the ImmyBot provisioning package (PPKG)
4. Follow any on-screen prompts to apply the package

### For Virtual Machines

If you're testing with a virtual machine:

1. Mount the ISO from Step 1 to your virtual machine
2. At the Windows region selection screen, press the Windows key 5 times
3. Alternatively, open a powershell prompt (Shift + F10) and run Install-ProvisioningPackage -PackagePath {Path to PPKG}

## Step 3: Identify the Computer in ImmyBot

> **Note:** If you enabled Automatic Onboarding you can watch the session getting started on the Sessions page.

Once the provisioning package is applied, the computer will connect to ImmyBot and appear in the **New Computers** section if Automatic Onboarding is disabled.

1. Go to **New Computers** in the ImmyBot dashboard
2. Locate your newly connected computer in the list
3. Click on the computer to begin the onboarding process

## Step 4: Assign Customer and User

For ImmyBot to properly configure the computer, you need to specify:

1. **Customer (Required)**: The organization that owns the computer
2. **Primary User (Recommended)**: The person who will primarily use this computer

![Assign Customer and User](/Documentation/GettingStarted/OnboardingForm.png)

> **Tip:** If this is your first time using ImmyBot, you'll only have your MSP as a customer and yourself as a user. That's fine for testing - just select these options.

> **Tip:** Customers can be imported from your RMM, PSA, or Azure integration. Users can be imported from your customers' Azure AD.

## Step 5: Start the Onboarding Session

After assigning the customer and user:

1. Click **Save and onboard now**
2. ImmyBot will create an "Onboarding" session
3. The system will automatically apply all "Recommended Deployments" to the computer
4. You can monitor the progress in real-time from the Sessions tab

## What Happens During Onboarding?

During the onboarding process, ImmyBot:

1. Installs and configures software based on your deployments
2. Tests for and if needed applies Tasks which can include security settings, policies and Windows updates
3. Configures user-specific settings for the primary user
4. Updates drivers and BIOS (for supported manufacturers - Dell, Lenovo, HP)

### User Profile Creation

One important aspect of the onboarding process is creating a user profile for the primary user. This allows ImmyBot to:

- Set default browser and PDF editor preferences
- Configure user-specific settings without requiring the user's password
- Apply user-level settings that are stored in the user's registry

For users synced from Azure AD, ImmyBot fetches their SID (Security Identifier) and creates their profile automatically. This works for both cloud-only users and those synced from Active Directory.

## Recommended Deployments

During onboarding, ImmyBot applies several recommended deployments that provide a solid foundation for managing your endpoints:

- **Create Profile for Primary User**: Allows ImmyBot to set default browser and PDF editors
- **Microsoft 365 Apps**: Installs the apps the selected user is licensed for
- **Manufacturer Updates**: Installs the latest updates from Dell, HP, and Lenovo
- **Adobe Reader**: Installs and configures the latest version of Adobe Reader

You can customize these deployments or create exceptions for specific clients. For more information, see [Recommended Deployments](recommended-deployments.md).

## Next Steps

After successful onboarding:

- **Review the Results**: Check the completed maintenance session for any issues
- **Add Custom Deployments**: Create your own deployments for additional software or configurations
- **Re-run the Session**: You can re-run the onboarding session as many times as needed until everything is configured to your liking

> **Tip:** To create custom deployments, go to **Deployments** in the left navigation and click **New**.

## Troubleshooting

If you encounter issues during the onboarding process:

- Check the maintenance session logs for specific error messages
- Ensure the computer has a stable internet connection
- Verify that any security software isn't blocking the ImmyBot agent
- See our [Troubleshooting Guide](/Documentation/Troubleshooting/troubleshooting) for more detailed help

