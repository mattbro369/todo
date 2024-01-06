import { captureValues } from './add-task-prompt';

export const taskArray = [];

export function Task(valueArr) {
  this.title = valueArr[0];
  this.description = valueArr[1];
  this.date = valueArr[2];
  this.priority = valueArr[3];
}
