using Microsoft.EntityFrameworkCore;

namespace backend.model;

public class JobApplicationDb: DbContext
{
    public JobApplicationDb(DbContextOptions<JobApplicationDb> options) : base(options)
    {
        
    }
    public DbSet<JobApplication> JobApplications { get; set; }
}