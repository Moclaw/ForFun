using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using project_x_d.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
string connectServer =  builder.Configuration["ConnectionStrings:Server"].ToString();
string connectStringDB =  builder.Configuration["ConnectionStrings:Database"].ToString();
string connectStringUID =  builder.Configuration["ConnectionStrings:Uid"].ToString();
string connectStringPWD =  builder.Configuration["ConnectionStrings:Pwd"].ToString();
string connectionString = $"server={connectServer};uid={connectStringUID};pwd={connectStringPWD};database={connectStringDB};CHARSET=utf8;Allow User Variables=True;convert zero datetime=True";

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(
        connectionString,
        ServerVersion.AutoDetect(connectionString)
    ));

builder.Services.AddIdentityServer();
builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseIdentityServer();
app.UseAuthorization();
app.MapControllers();

app.Run();