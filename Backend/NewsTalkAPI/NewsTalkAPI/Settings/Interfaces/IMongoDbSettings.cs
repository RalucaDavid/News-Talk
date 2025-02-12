﻿namespace NewsTalkAPI.Settings.Interfaces
{
    public interface IMongoDbSettings
    {
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
        string CommentsCollectionName { get; set; }
    }
}
