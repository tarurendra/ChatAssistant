using Volo.Abp.Modularity;

namespace ChatAssistant;

[DependsOn(
    typeof(ChatAssistantDomainModule),
    typeof(ChatAssistantTestBaseModule)
)]
public class ChatAssistantDomainTestModule : AbpModule
{

}
