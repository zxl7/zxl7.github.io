# TypeScript
## interface 接口
```TS
// duck typing
interface LikeArray {
    [index: number]: string
}
```

## Class
- constructor
- extends
- super
- public
- private
- protected
```TS
interface Aaa {
    currentTime:number;
    alert():void
}
class Clock implements Aaa{
    currentTime:number = 123,
    alert(){
    }
}
```
## 泛型
```TS
function withAPI<T>(url:string):Promise<T> {
    return fetch(url).then(res=>{
        resp.json())
    })
}

withAPI<Aaa>('country.resp')
```

## 交叉,联合类型
- &
- |

## 类型断言
- as

## Partial
- 接受泛型,传入类型都变成可选
```TS
type Partial<T> = {
    [P in keyof T]?: T[P]
}

type CountOpt = {
    [p in Keys]?: CountOpt[p]
}
```

## extends
- 是否满足约束
- 可以用在泛型 或者 条件类型

## declare 
```TS
declare var Jquery:(select:string)=>any)
```