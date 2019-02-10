import {Patient} from './patient';
import {Doctor} from './doctor';

export enum PRIORITY{
  HIGH,
  MIDDLE,
  LOW
}

export class Reminder{
  public reminderId:number = -1;
  public description:string;
  public duration:number;
  public create_at:number;
  public priority:PRIORITY;
  public done: boolean = false;
  public patientName:string;
  public doctorName:string;

  constructor(){}
}
