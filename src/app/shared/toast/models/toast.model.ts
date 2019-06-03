export class Toast {
  title: string;
  content: string;
  style: string;

  delay: number;
  counter: number;
  public timestamp: Date;
  public dismissed: boolean = false;

  constructor(title: string, content: string, style = 'info', delay: number = 10000) {
    this.content = content;
    this.style = style;
    this.delay = delay;
    // to be used as Identifier
    this.timestamp = new Date();
    this.counter = 0;
    const _this = this;
    const countdown = setInterval(function () {
      _this.counter += 50;
      if (_this.counter === _this.delay)
        clearInterval(countdown);
    }, 50);

    // Using the fact that
    // let date1 = new Date();
    // let date2 =new Date();
    // console.log(date1==date1); // true
    // console.log(date1==date2); // false
  }


}