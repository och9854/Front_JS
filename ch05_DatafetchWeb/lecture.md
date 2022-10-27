
# Intro
---
<img width="622" alt="image" src="https://user-images.githubusercontent.com/78291267/197592227-4ce481ad-2092-4e19-8f38-48d399a2d410.png">

# Why do we need to request and respond data 
----

- Static webpage only can show saved information so contain only little information.


<img width="885" alt="image" src="https://user-images.githubusercontent.com/78291267/197592851-651f86e9-3b17-408f-ab03-f39cc14234ec.png"> 

<img width="729" alt="image" src="https://user-images.githubusercontent.com/78291267/197640419-4153bed5-b1c5-4dac-8963-f63d852a7ee9.png">

# How to request and respond data
---

<img width="717" alt="image" src="https://user-images.githubusercontent.com/78291267/197640741-c1ab92bb-3b54-4557-8915-240621cdeae1.png">

The question `How to exchange data?` will be converted to a question `How to connect the programs?`, and this question will be converted to a question `Which API will we use?`.

This image below here tells the history of API.

<img width="504" alt="image" src="https://user-images.githubusercontent.com/78291267/197641223-7f474b98-4395-4941-ac51-da35a5e39b61.png">

REST API is popular still now. There are two fundamental principles for REST API.

<ol>
    <li> URI should represent the resource of information </li>
    <li> Action about resource is represented by HTTP Method(GET, POST, PUT, DELETE) </li>
</ol>

- Example for principle 1.

<img width="302" alt="image" src="https://user-images.githubusercontent.com/78291267/197641660-a449e071-6346-47d7-a97e-5024a298dbef.png">


- Example for principle 2.
  
<img width="677" alt="image" src="https://user-images.githubusercontent.com/78291267/197641753-f8efbf8e-be9b-4d42-9772-3005184e850b.png">

# How should the type of data be?
---

- [XML](https://www.w3schools.com/xml/xml_whatis.asp)(eXtensible Markup Language): 
- [JSON](https://www.w3schools.com/js/js_json_intro.asp)(JavaScript Object Notation): a text format for storing and transporting data. JSON is independent of programming language.

# Using REST API with JS
---

<img width="610" alt="image" src="https://user-images.githubusercontent.com/78291267/197642703-ef9dba1a-410c-4db7-9d02-6701ad5b79fe.png">

In this lecture, we will use `Fetch` because we do not need lots of functions and comfortable to use compare to external library.

<img width="485" alt="image" src="https://user-images.githubusercontent.com/78291267/197642911-6e2ea37b-0b56-44ee-a759-ed3c735e1b87.png">

`Fetch` basically needs URLs. `Options` contains method and header, body. As it is "option", you do not have to type this.

# Play with movie API
---

- Q. Why do we need API Key? 
- A. Do identify the person who requests data.
  - Hence, do NOT show your API Key to other people.

