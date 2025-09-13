using Xunit;

namespace ChatAssistant.EntityFrameworkCore;

[CollectionDefinition(ChatAssistantTestConsts.CollectionDefinitionName)]
public class ChatAssistantEntityFrameworkCoreCollection : ICollectionFixture<ChatAssistantEntityFrameworkCoreFixture>
{

}
