import Rx from 'rx';

const source$ = Rx.Observable.range(1, 10).publish();
const [odd$, even$] = source$.partition(i => i % 2 === 1);
     Rx.Observable.merge(
         odd$.map(i => i * 2),
         even$.map(i => i * i))
         .subscribe(v => console.log(v));
source$.connect();
