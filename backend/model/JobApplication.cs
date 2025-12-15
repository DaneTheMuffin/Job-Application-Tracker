namespace backend.model;

public class JobApplication
{
    public int Id { get; set; }
    public required string CompanyName { get; set; }
    public required string Position { get; set; }
    public required string Status { get; set; }
    public required string TimeApplied { get; set; }

}



