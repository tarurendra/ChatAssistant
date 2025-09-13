using ChatAssistant.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace ChatAssistant.Permissions;

public class ChatAssistantPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(ChatAssistantPermissions.GroupName);

        //Define your own permissions here. Example:
        //myGroup.AddPermission(ChatAssistantPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ChatAssistantResource>(name);
    }
}
