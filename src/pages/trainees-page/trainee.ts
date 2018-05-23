export class Trainee {
  name: string;
  imageUrl: string;

  constructor(name: string, imageUrl: string) {
    this.name = name;
    this.imageUrl = imageUrl;
  }
}

export const TraineesMock = [
  new Trainee('Jan', 'assets/imgs/person.png'),
  new Trainee('Dirk', 'assets/imgs/person.png'),
  new Trainee('Marie', 'assets/imgs/person.png'),
  new Trainee(' -- EMPTY --', 'assets/imgs/person.png')
];
