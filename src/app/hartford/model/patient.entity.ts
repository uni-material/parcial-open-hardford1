export class PatientEntity {
  id!: number;
  firstName!: string;
  lastName!: string;
  photoUrl!: string;
  birthDate!: string;

  get fullName(): string{
    return `${this.firstName} ${this.lastName}`;
  }
}
