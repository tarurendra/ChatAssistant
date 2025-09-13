using Volo.Abp.Settings;

namespace ChatAssistant.Settings;

public class ChatAssistantSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(ChatAssistantSettings.MySetting1));
    }
}
