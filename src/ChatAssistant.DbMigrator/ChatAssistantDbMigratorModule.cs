using ChatAssistant.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace ChatAssistant.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(ChatAssistantEntityFrameworkCoreModule),
    typeof(ChatAssistantApplicationContractsModule)
)]
public class ChatAssistantDbMigratorModule : AbpModule
{
}
