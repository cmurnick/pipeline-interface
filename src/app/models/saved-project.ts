export class SavedProject {
constructor(
  public CompanyName: string,
  public ProjectId: number,
  public NumberEligible: number,
  public NumberInterview: number,
  public ClassificationId: number,
  public New: boolean,
  public SalesExecId: number,
  public EnrollmentSystemId: number,
  public VbCarrierId: number,
  public StartDate: string,
  public EndDate: string,
  public EnrollmentMethodId: number
) {}
}
