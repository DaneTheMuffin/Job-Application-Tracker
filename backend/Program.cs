using System.Text.Json;
using System.Text.Json.Serialization;
using backend.model;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("http://localhost:4200") // Allow your Angular frontend
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});


builder.Services.AddDbContext<JobApplicationDb>(opt => opt.UseInMemoryDatabase("JobApplicationDb"));



//Add swagger!
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
 
    app.UseSwagger();
    app.UseSwaggerUI();
}

// List all applications.
app.MapGet("/applications", (JobApplicationDb db) => db.JobApplications.ToListAsync());

// List specific application.
app.MapGet("/applications/{id}", (int id, JobApplicationDb db) => db.JobApplications.FindAsync(id));

// Create a new application.
app.MapPost("/applications", (JobApplication application, JobApplicationDb db) =>
{
    db.JobApplications.Add(application);
    db.SaveChanges();
    return Results.Created($"/applications/{application.Id}", application);
});

// Delete an application
app.MapDelete("/applications/{id}", async (int id, JobApplicationDb db) =>
{
    
    if (await db.JobApplications.FindAsync(id) is JobApplication application)
    {
        db.JobApplications.Remove(application);
        await db.SaveChangesAsync();
        return Results.NoContent();
    }

    return Results.NotFound();
});
    



app.UseHttpsRedirection();

app.UseCors();

app.Run();
