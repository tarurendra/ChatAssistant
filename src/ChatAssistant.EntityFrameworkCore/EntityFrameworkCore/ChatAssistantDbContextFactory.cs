using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ChatAssistant.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class ChatAssistantDbContextFactory : IDesignTimeDbContextFactory<ChatAssistantDbContext>
{
    public ChatAssistantDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();
        
        ChatAssistantEfCoreEntityExtensionMappings.Configure();

        var builder = new DbContextOptionsBuilder<ChatAssistantDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));
        
        return new ChatAssistantDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../ChatAssistant.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
