import { discipline } from "./discipline";

export class Job {
    jobField: discipline | undefined;
    jobName: string | undefined;
    hoursNumber: number | undefined;
    area: string | undefined;
    requirements: string | undefined;
    workInHome: boolean | undefined;
}