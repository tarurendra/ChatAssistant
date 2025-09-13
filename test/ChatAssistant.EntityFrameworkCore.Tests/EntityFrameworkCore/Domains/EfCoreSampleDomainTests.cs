using ChatAssistant.Samples;
using Xunit;

namespace ChatAssistant.EntityFrameworkCore.Domains;

[Collection(ChatAssistantTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<ChatAssistantEntityFrameworkCoreTestModule>
{

}
