export class ExaminerEntity {
  id!: number;
  firstName!: string;
  lastName!: string;
  nationalProviderIdentifier!: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

}
