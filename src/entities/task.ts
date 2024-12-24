export class Task {
  id: number = 0;
  title: string = "";

  constructor(partial: Partial<Task>) {
    Object.assign(this, partial, {
      id: Math.floor(Math.random() * 1000),
    });
  }
}
