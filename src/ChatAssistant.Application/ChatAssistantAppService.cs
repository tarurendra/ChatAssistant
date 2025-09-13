using ChatAssistant.Localization;
using Volo.Abp.Application.Services;

namespace ChatAssistant;

/* Inherit your application services from this class.
 */
public abstract class ChatAssistantAppService : ApplicationService
{
    protected ChatAssistantAppService()
    {
        LocalizationResource = typeof(ChatAssistantResource);
    }
}
