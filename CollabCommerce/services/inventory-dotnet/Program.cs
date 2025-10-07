
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;

var app = WebApplication.CreateBuilder(args).Build();
app.MapGet("/health", () => new { ok = true });
app.Run();
