export class Project {
  constructor(
    public CompanyName: string,
    public NumberEligible: number,
    public NumberInterview: number,
    public ClassificationId: number,
    public New: boolean,
    public SalesExecId: number,
    public EnrollmentSystemId: number,
    public VbCarrierId: number,
    public StartDate: string,
    public EndDate: string,
    public EnrollmentMethodId: number,
    public ProjectId: number,
    public ClassificationName:  string,
    public FirstName: string,
    public SystemName: string,
    public VbCarrierName: string,
    public EnrollmentMethodType: string,
    public StartDateDisplay: string,
    public EndDateDisplay: string
 ) {}
}
