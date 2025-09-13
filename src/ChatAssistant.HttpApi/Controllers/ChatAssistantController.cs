using ChatAssistant.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ChatAssistant.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class ChatAssistantController : AbpControllerBase
{
    protected ChatAssistantController()
    {
        LocalizationResource = typeof(ChatAssistantResource);
    }
}
