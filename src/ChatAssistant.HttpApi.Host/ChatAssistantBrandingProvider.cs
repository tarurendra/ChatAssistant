using Microsoft.Extensions.Localization;
using ChatAssistant.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace ChatAssistant;

[Dependency(ReplaceServices = true)]
public class ChatAssistantBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<ChatAssistantResource> _localizer;

    public ChatAssistantBrandingProvider(IStringLocalizer<ChatAssistantResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
