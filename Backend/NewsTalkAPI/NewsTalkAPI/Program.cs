using Microsoft.Extensions.Options;
using NewsTalkAPI.Data.Daos.Implementations;
using NewsTalkAPI.Data.Daos.Interfaces;
using NewsTalkAPI.Service.Implementations;
using NewsTalkAPI.Service.Interfaces;
using NewsTalkAPI.Settings.Implementations;
using NewsTalkAPI.Settings.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.Configure<MongoDbSettings>(builder.Configuration.GetSection(nameof(MongoDbSettings)));
builder.Services.AddSingleton<IMongoDbSettings>(sp => sp.GetRequiredService<IOptions<MongoDbSettings>>().Value);

builder.Services.AddScoped<ICommentService, CommentService>();
builder.Services.AddScoped<ICommentDao, CommentDao>();

// Add CORS policy
var corsPolicy = "AllowReactApp";

builder.Services.AddCors(options =>
{
    options.AddPolicy(corsPolicy, policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //app.UseSwagger();
    //app.UseSwaggerUI();
}

// Use CORS middleware
app.UseCors(corsPolicy);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

public partial class Program { }