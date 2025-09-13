using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ChatAssistant.Data;
using Volo.Abp.DependencyInjection;

namespace ChatAssistant.EntityFrameworkCore;

public class EntityFrameworkCoreChatAssistantDbSchemaMigrator
    : IChatAssistantDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreChatAssistantDbSchemaMigrator(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the ChatAssistantDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<ChatAssistantDbContext>()
            .Database
            .MigrateAsync();
    }
}
