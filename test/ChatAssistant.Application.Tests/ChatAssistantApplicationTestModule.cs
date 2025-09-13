using Volo.Abp.Modularity;

namespace ChatAssistant;

[DependsOn(
    typeof(ChatAssistantApplicationModule),
    typeof(ChatAssistantDomainTestModule)
)]
public class ChatAssistantApplicationTestModule : AbpModule
{

}
