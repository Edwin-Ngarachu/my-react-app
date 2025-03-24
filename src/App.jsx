import React from "react";
import BookList from "./assets/Booklist";

const App = () => {
  const books = [
    {
      id: 1,
      title: "The pearl",
      author: "mary simon",
      year: 1989,
      Summary:
        "Steinbeck’s novella critiques materialism and colonial exploitation, showing how greed destroys innocence. The ending—where the pearl is discarded—suggests that true value lies in family and simplicity, not wealth.",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "mark reynolds",
      year: 1966,
      Summary:
        "The novel explores themes of racial injustice, moral growth, and the loss of innocence. One of the central plotlines revolves around Atticus defending Tom Robinson, a Black man falsely accused of raping a white woman, Mayella Ewell. Through the trial and its aftermath, Scout and Jem confront the realities of racism and prejudice in their community.",
    },
    {
      id: 3,
      title: "caucasian chalk circle",
      author: "George william",
      year: 1949,
      Summary:
        '"The Caucasian Chalk Circle" is a play by Bertolt Brecht that explores themes of justice, motherhood, and class struggle through the story of a woman named Grusha who raises an abandoned child during a time of civil war. The narrative unfolds in the form of a parable where Grusha riskily saves the child from an aristocratic background, ultimately leading to a court case determining the childs rightful custody.',
    },
    {
      id: 4,
      title: "To Kill a Mockingbird",
      author: "Jennnifer lopez",
      year: 1899,
      Summary:
        " In a dystopian future, Winston Smith lives under the oppressive rule of Big Brother, where the government controls thoughts, rewrites history, and punishes dissent. When Winston secretly rebels, he faces brutal consequences, illustrating the dangers of totalitarianism, surveillance, and manipulated truth.",
    },
    {
      id: 5,
      title: "The Catcher eyes",
      author: "James David",
      year: 1959,
      Summary:
        "Set in the 1930s American South, the story follows Scout Finch, a young girl whose father, Atticus Finch, defends a Black man falsely accused of rape. Through Scout’s eyes, the novel explores racial injustice, moral growth, and empathy, symbolized by the mockingbird—a creature that harms no one but is senselessly destroyed.",
    },
  ];

  return (
    <div style={styles.app}>
      <h1>Books List</h1>
      <BookList books={books} />
    </div>
  );
};

const styles = {
  app: {
    textAlign: "center",
    padding: "20px",
    
  },
};

export default App;
