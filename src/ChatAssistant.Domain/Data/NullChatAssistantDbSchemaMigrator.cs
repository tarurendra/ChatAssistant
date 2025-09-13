using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ChatAssistant.Data;

/* This is used if database provider does't define
 * IChatAssistantDbSchemaMigrator implementation.
 */
public class NullChatAssistantDbSchemaMigrator : IChatAssistantDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
