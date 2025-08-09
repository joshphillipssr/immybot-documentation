# Common Workflows

This guide provides step-by-step instructions for the most common tasks you'll perform in ImmyBot. Follow these workflows to quickly accomplish your goals without having to piece together information from multiple sources.

## Onboarding a New Computer

### Prerequisites
- ImmyBot USB drive or ISO
- New computer (physical or virtual)
- Customer and user information

### Steps

1. **Prepare the computer**
   - For physical computers: Power on and reach Windows setup screen
   - For virtual machines: Mount the ImmyBot ISO

2. **Connect to ImmyBot**
   - Insert the USB drive or access the mounted ISO
   - Apply the provisioning package when prompted

3. **Identify in ImmyBot**
   - Navigate to **New Computers** in ImmyBot
   - Find your computer in the list
   - Click on the computer to begin onboarding

4. **Assign Customer and User**
   - Select the appropriate customer from the dropdown
   - (Optional but recommended) Assign a primary user
   - Click **Start Onboarding**

5. **Monitor the Onboarding Process**
   - Navigate to the **Sessions** tab
   - Watch the progress of the onboarding session
   - Address any issues that arise

6. **Verify Completion**
   - Check that all deployments were successfully applied
   - Verify that the computer appears in the correct customer's inventory
   - Test key functionality to ensure everything is working properly

## Creating and Testing a Deployment

### Prerequisites
- Administrator access to ImmyBot
- Knowledge of the target computers or users
- Software installer or script to deploy

### Steps

1. **Create the Deployment**
   - Navigate to **Deployments** in the left sidebar
   - Click **New** to create a new deployment

2. **Select Deployment Type**
   - Choose your **Software** or **Task** maintenance item

3. **Configure Deployment Settings**
   - Set the appropriate version (for software)
   - Configure any deployment-specific options
   - Set the deployment mode (Enforced, Available, Removed)

4. **Define Targets**
   - Select Cross Tenant, Single Tenant, or Individual
   - Select the target type (Computers, Users, Groups, Filter Script)
   - Choose specific targets or create a filter script

5. **Test the Deployment**
   - Save the deployment
   - Select a test computer from the computer list on the right and click deploy
   - Monitor the session to ensure the deployment applies correctly

6. **Refine if Needed**
   - If issues occur, check the session logs
   - Update the deployment settings or scripts as needed
   - Test again until successful

7. **Deploy to Production**
   - Once testing is successful, update targets if needed
   - Run maintenance on production computers or wait for scheduled maintenance

## Troubleshooting a Failed Deployment

### Prerequisites
- Access to maintenance session logs
- Knowledge of the deployment configuration
- Administrator access to test and modify deployments

### Steps

1. **Identify the Failure**
   - Navigate to **Sessions**
   - Find the failed maintenance session
   - Click to view details
   - Identify which action failed and note the error message

2. **Check Common Issues**
   - Verify network connectivity on the target computer
   - Check for security software blocking the installation
   - Ensure sufficient disk space and permissions
   - Verify that prerequisites are installed

3. **Review Deployment Configuration**
   - Navigate to the failed deployment
   - Check that the configuration is correct
   - Verify that the target includes the computer
   - Review any scripts for errors

4. **Test Manually**
   - Connect to the computer directly or via remote control
   - Try to perform the action manually
   - Note any errors or issues encountered

5. **Update the Deployment**
   - Modify the deployment based on your findings
   - Update scripts or configuration as needed
   - Save changes

6. **Test the Updated Deployment**
   - Run a new maintenance session on the problem computer
   - Monitor the session for success or failure
   - Review logs to ensure the issue is resolved

7. **Document the Solution**
   - If you found a significant issue, document it for future reference
   - Update any relevant scripts or procedures
   - Share the solution with your team if appropriate

## Next Steps

Now that you're familiar with common workflows in ImmyBot, you might want to explore:

- [Creating Deployments](/Documentation/HowToGuides/creating-managing-deployments.md) - Learn advanced deployment techniques
- [Managing Computers](/Documentation/Administration/managing-computers.md) - Discover more ways to manage your computer inventory
- [Scripting Guide](/Documentation/AdvancedTopics/scripts.md) - Master the art of scripting in ImmyBot
