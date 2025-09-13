using ChatAssistant.Samples;
using Xunit;

namespace ChatAssistant.EntityFrameworkCore.Applications;

[Collection(ChatAssistantTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<ChatAssistantEntityFrameworkCoreTestModule>
{

}
