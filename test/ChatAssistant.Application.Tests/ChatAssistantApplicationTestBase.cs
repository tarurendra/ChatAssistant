using Volo.Abp.Modularity;

namespace ChatAssistant;

public abstract class ChatAssistantApplicationTestBase<TStartupModule> : ChatAssistantTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
