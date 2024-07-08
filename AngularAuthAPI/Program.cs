using Microsoft.EntityFrameworkCore;
using AngularAuthAPI.Models; // Asegúrate de que esta referencia apunte a tu espacio de nombres donde se encuentra la clase User
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using AngularAuthAPI.Context;

var builder = WebApplication.CreateBuilder(args);

// Carga la configuración de la aplicación
var configuration = builder.Configuration;

// Configura la cadena de conexión a MySQL
var connectionString = configuration.GetConnectionString("MiConexionMySQL");

builder.Services.AddControllers();

// Configura el DbContext para usar MySQL
builder.Services.AddDbContext<LogineContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(option =>
{
    option.AddPolicy("MyPolicy", builder =>
    {
        builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});

var app = builder.Build();

// Habilita Swagger en modo de desarrollo
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("MyPolicy");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();