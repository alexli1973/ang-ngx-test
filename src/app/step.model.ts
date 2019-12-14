export class Step {
  constructor (
    public name: string,
    public isActive: boolean = false,
    public buttonName: number,
    public value: string,
    public placeholder?: string,
    public id?: number
  ) {}
}
