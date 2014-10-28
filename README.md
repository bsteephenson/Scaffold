#Scaffold

Language agnostic inline scaffolding

#How it would work

In your code, you would write something that looks like
```
@java.class [name: MyImportantClass]
	private int myNum = 0;
	@java.method.getter [var: myNum, type: int]
	@java.method.setter [var: myNum, type: int]
```

and it would edit your file to make it look like

```
class MyImportantClass {
	private int myNum = 0;
	int getMyNum(){
		return myNum;
	}
	int setMyNum(int arg){
		myNum = arg;
	}
}
```
