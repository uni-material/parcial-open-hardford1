export class Exam {
  id!: number;
  patientId!: number;
  examinerId!: number;
  examDate!: Date;
  orientationScore!: number;
  registrationScore!: number;
  attentionAndCalculationScore!: number;
  recallScore!: number;
  languageScore!: number;

  get totalScore(): number {
    return this.orientationScore +
            this.registrationScore+
            this.attentionAndCalculationScore+
            this.recallScore+
            this.languageScore;
  }


}
