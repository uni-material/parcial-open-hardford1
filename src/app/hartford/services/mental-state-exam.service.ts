import {inject, Injectable} from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Exam} from '../model/exam.entity';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PatientEntity} from '../model/patient.entity';
import {ExaminerEntity} from '../model/examiner.entity';

const examsResourceEndpointPath = environment.mentalStateExamsEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class MentalStateExamService extends BaseService<Exam>{

  constructor() {
    super();
    this.resourceEndpoint = examsResourceEndpointPath;
  }



}
