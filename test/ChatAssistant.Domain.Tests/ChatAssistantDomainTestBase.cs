using Volo.Abp.Modularity;

namespace ChatAssistant;

/* Inherit from this class for your domain layer tests. */
public abstract class ChatAssistantDomainTestBase<TStartupModule> : ChatAssistantTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
