using System.Threading.Tasks;

namespace ChatAssistant.Data;

public interface IChatAssistantDbSchemaMigrator
{
    Task MigrateAsync();
}
