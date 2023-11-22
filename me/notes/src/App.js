import React, { useState } from "react";
import SVG from "react";
import "./App.css";

var notes = [
  {
    title: "How to make a round button with SVG",
    content:
      "SVG stands for Scalable Vector Graphics, which is a way of creating and displaying images using XML code. SVG images can be scaled without losing quality, and can be styled and animated with CSS and JavaScript. To make a round button with SVG, you need to use the <circle> and <line> elements, and set their attributes such as cx, cy, r, fill, stroke, and stroke-width. You can also add event listeners to the button to make it interactive. Here is an example of a round button with a plus sign in the middle:",
    image: "https://picsum.photos/800",
  },
  {
    title: "How to make a JS array with objects",
    content:
      "An array is a data structure that can store multiple values in a single variable. An object is a data structure that can store key-value pairs, where each key has a name and a value. You can make a JS array with objects by using the square brackets [ ] to create an array, and the curly braces { } to create an object. Each object in the array is separated by a comma, and each key-value pair in the object is separated by a colon. The value of a key can be any data type, such as a string, a number, a boolean, an array, or another object. Here is an example of a JS array with objects, each object having a name, age, and hobbies:",
    image: "https://picsum.photos/900",
  },
  {
    title: "How to make a poem with Bing",
    content:
      "Bing is a search engine that can help you find information and inspiration on the web. Bing can also help you create a poem with its AI-powered chat mode, which can generate imaginative and innovative content such as poems, stories, essays, songs, and pictures. To make a poem with Bing, you can simply ask Bing to write a poem for you, and specify the topic, style, or mood of the poem. Bing will then use its natural language generation skills to create a poem for you. Here is an example of a poem that Bing wrote for me about love:",
    image: "https://picsum.photos/1000",
  },
  {
    title: "How to make a round button with SVG",
    content:
      "SVG stands for Scalable Vector Graphics, which is a way of creating and displaying images using XML code. SVG images can be scaled without losing quality, and can be styled and animated with CSS and JavaScript. To make a round button with SVG, you need to use the <circle> and <line> elements, and set their attributes such as cx, cy, r, fill, stroke, and stroke-width. You can also add event listeners to the button to make it interactive. Here is an example of a round button with a plus sign in the middle:",
    image: "https://picsum.photos/800",
  },
  {
    title: "How to make a JS array with objects",
    content:
      "An array is a data structure that can store multiple values in a single variable. An object is a data structure that can store key-value pairs, where each key has a name and a value. You can make a JS array with objects by using the square brackets [ ] to create an array, and the curly braces { } to create an object. Each object in the array is separated by a comma, and each key-value pair in the object is separated by a colon. The value of a key can be any data type, such as a string, a number, a boolean, an array, or another object. Here is an example of a JS array with objects, each object having a name, age, and hobbies:An array is a data structure that can store multiple values in a single variable. An object is a data structure that can store key-value pairs, where each key has a name and a value. You can make a JS array with objects by using the square brackets [ ] to create an array, and the curly braces { } to create an object. Each object in the array is separated by a comma, and each key-value pair in the object is separated by a colon. The value of a key can be any data type, such as a string, a number, a boolean, an array, or another object. Here is an example of a JS array with objects, each object having a name, age, and hobbies:An array is a data structure that can store multiple values in a single variable. An object is a data structure that can store key-value pairs, where each key has a name and a value. You can make a JS array with objects by using the square brackets [ ] to create an array, and the curly braces { } to create an object. Each object in the array is separated by a comma, and each key-value pair in the object is separated by a colon. The value of a key can be any data type, such as a string, a number, a boolean, an array, or another object. Here is an example of a JS array with objects, each object having a name, age, and hobbies:",
    image: "https://picsum.photos/900",
  },
  {
    title: "How to make a poem with Bing",
    content:
      "Bing is a search engine that can help you find information and inspiration on the web. Bing can also help you create a poem with its AI-powered chat mode, which can generate imaginative and innovative content such as poems, stories, essays, songs, and pictures. To make a poem with Bing, you can simply ask Bing to write a poem for you, and specify the topic, style, or mood of the poem. Bing will then use its natural language generation skills to create a poem for you. Here is an example of a poem that Bing wrote for me about love:",
    image: "https://picsum.photos/1000",
  },
  {
    title: "How to make a round button with SVG",
    content:
      "SVG stands for Scalable Vector Graphics, which is a way of creating and displaying images using XML code. SVG images can be scaled without losing quality, and can be styled and animated with CSS and JavaScript. To make a round button with SVG, you need to use the <circle> and <line> elements, and set their attributes such as cx, cy, r, fill, stroke, and stroke-width. You can also add event listeners to the button to make it interactive. Here is an example of a round button with a plus sign in the middle:",
    image: "https://picsum.photos/800",
  },
  {
    title: "How to make a JS array with objects",
    content:
      "An array is a data structure that can store multiple values in a single variable. An object is a data structure that can store key-value pairs, where each key has a name and a value. You can make a JS array with objects by using the square brackets [ ] to create an array, and the curly braces { } to create an object. Each object in the array is separated by a comma, and each key-value pair in the object is separated by a colon. The value of a key can be any data type, such as a string, a number, a boolean, an array, or another object. Here is an example of a JS array with objects, each object having a name, age, and hobbies:",
    image: "https://picsum.photos/900",
  },
  {
    title: "How to make a poem with Bing",
    content:
      "Bing is a search engine that can help you find information and inspiration on the web. Bing can also help you create a poem with its AI-powered chat mode, which can generate imaginative and innovative content such as poems, stories, essays, songs, and pictures. To make a poem with Bing, you can simply ask Bing to write a poem for you, and specify the topic, style, or mood of the poem. Bing will then use its natural language generation skills to create a poem for you. Here is an example of a poem that Bing wrote for me about love:",
    image: "https://picsum.photos/1000",
  },
];

function App() {
  return (
    <>
      <main className="container">
        {notes.map((e) => (
          <Note
            title={e.title}
            content={e.content}
            img={e.image}
            key={e.title}
          />
        ))}
      </main>
      <NewNote />
    </>
  );
}

function Note({ title, content, img }) {
  return (
    <div className="note">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h2>{content}</h2>
      <span>
        <p>Posted on:</p>
        <button>Delete</button>
      </span>
    </div>
  );
}

function Button() {
  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    setRotate(!rotate);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="5vw"
      height="5vw"
      preserveAspectRatio="xMidYMid meet"
      className={`new_note_button ${rotate ? "rotate" : ""}`}
      onClick={handleRotate}
    >
      <circle cx="50" cy="50" r="40" fill="rgba(18, 255, 77, 1)" />
      <line x1="30" y1="50" x2="70" y2="50" stroke="white" strokeWidth="5" />
      <line x1="50" y1="30" x2="50" y2="70" stroke="white" strokeWidth="5" />
    </svg>
  );
}

function NewNote() {
  return (
    <div className="new_note">
      <Button />
    </div>
  );
}

export default App;
