export class ProjectToSave {
  constructor(
    public CompanyName: string,
    public NumberEligible: number,
    public NumberInterview: number,
    public ClassificationId: number,
    public New: boolean,
    public SalesExecId: number,
    public EnrollmentSystemId: number,
    public VbCarrierId: number,
    public StartDate: Date,
    public EndDate: Date,
    public EnrollmentMethodId: number,
    public ProjectId: number,
  ) {}
}
