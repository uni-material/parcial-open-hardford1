import {Component, OnInit} from '@angular/core';
import {PatientEntity} from '../../model/patient.entity';
import {ExaminerEntity} from '../../model/examiner.entity';
import {MentalStateExamService} from '../../services/mental-state-exam.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {MatCard, MatCardModule} from '@angular/material/card';
import {DatePipe, NgForOf, NgStyle} from '@angular/common';
import {MatGridList, MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import {Exam} from '../../model/exam.entity';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-mental-state-exams',
  imports: [
    MatGridListModule,
    MatGridTile,
    MatCardModule,
    MatCard,
    DatePipe,
    NgForOf,
    MatGridList,
    MatGridTile,
    MatButton,
    NgStyle
  ],
  templateUrl: './mental-state-exams.component.html',
  standalone: true,
  styleUrl: './mental-state-exams.component.css'
})
export class MentalStateExamsComponent implements OnInit{

  private patientEndpoint = `${environment.serverBaseUrl}${environment.patientsEndpointPath}`;
  private examinerEndpoint = `${environment.serverBaseUrl}${environment.examinersEndpointPath}`;

  exams: any[] = [];

  private patients: PatientEntity[] = [];
  private examiners: ExaminerEntity[] = [];

  constructor(
    private examService: MentalStateExamService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get<PatientEntity[]>(this.patientEndpoint).subscribe(patientsData => {
      this.patients = patientsData.map(p => Object.assign(new PatientEntity(), p));

      this.http.get<ExaminerEntity[]>(this.examinerEndpoint).subscribe(examinersData => {
        this.examiners = examinersData.map(e => Object.assign(new ExaminerEntity(), e));

        this.examService.getAll().subscribe(examsData => {
          this.exams = examsData.map(examData => {
            const exam = Object.assign(new Exam(), examData);
            const patient = this.patients.find(p => p.id === exam.patientId);
            const examiner = this.examiners.find(e => e.id === exam.examinerId);

            return {
              exam,
              patient,
              examiner
            };
          });
        });

      });
    });
  }



}
