using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace NzbDrone.Core.Notifications.Webhook
{
    // TODO: In v4 this will likely be changed to the default camel case.
    [JsonConverter(typeof(StringEnumConverter), converterParameters: typeof(DefaultNamingStrategy))]
    public enum WebhookEventType
    {
        Test,
        Grab,
        Download,
        DownloadFailure,
        ImportFailure,
        Rename,
        ArtistAdd,
        ArtistDelete,
        AlbumDelete,
        Health,
        Retag,
        ApplicationUpdate,
        HealthRestored
    }
}
