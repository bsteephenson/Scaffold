#Scaffold

Language agnostic inline scaffolding

#Try It Yourself!

Most of this project is clearly not done or even organized, but some of it actually is!

First download Scaffold

```
git clone https://github.com/BSteephenson/Scaffold.git
```
and cd into that the directory

install the necessary npm packages manually (I need to add a package.json...)

install the java scaffolder

```
node main.js --install java https://github.com/BSteephenson/Scaffold.Java.git
```

Create a file called test.java that looks like

```
@java.class [name: MyClass]
	@java.property [name: my_var, type: int]
```

Then run

```
node main.js test.java java.class
node main.js test.java java.property
```
Then your test.java file should now look like

```
class MyClass{
	private int my_var;
	
	void set_my_var(int arg){
		my_var = arg;	
	}
	
	int get_my_var(){
		return my_var;	}}
```
To see the handlebars templates that power this, look at the example library https://github.com/BSteephenson/Scaffold.Java